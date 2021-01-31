import React, { Component } from 'react';
import styled from 'styled-components';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import GalleryLoader from './Loader/Loader';
import Modal from './Modal/Modal';
import fetchImage from '../services/gallery-api';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

const mapper = images => {
  return images.map(
    ({ id, webformatURL: smallImg, largeImageURL: largeImg }) => ({
      id,
      smallImg,
      largeImg,
    }),
  );
};

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    text: '',
    isLoading: false,
    isCreating: false,
    id: null,
  };

  componentDidMount() {
    const { page, text } = this.state;

    this.getImageData(page, text);
  }

  getImageData = (page, text) => {
    fetchImage(page, text)
      .then(({ hits }) =>
        this.setState(
          prevState => ({
            images: [...prevState.images, ...mapper(hits)],
          }),
          () =>
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            }),
        ),
      )
      .finally(() => this.setState({ isLoading: false }));
  };

  getSearchImage = (page, text) => {
    fetchImage(page, text).then(({ hits }) =>
      this.setState(() => ({
        images: mapper(hits),
      })),
    );
  };

  getNewGallery = text => {
    this.setState({ text, page: 1 }, () => {
      const { page } = this.state;

      this.getSearchImage(page, text);
    });
  };

  addNewImages = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        isLoading: true,
      }),
      () => {
        const { page, text } = this.state;
        this.getImageData(page, text);
      },
    );
  };

  /**
   * Modal
   */

  openGalleryModal = id => {
    this.setState({ isCreating: true, id });
  };

  getImageId = () => {
    const { images, id } = this.state;

    const getId = images.find(img => img.id === id);

    return getId;
  };

  closeGalleryModal = () => {
    this.setState({ isCreating: false });
  };

  render() {
    const { images, isLoading, isCreating } = this.state;
    const imageObj = this.getImageId();

    return (
      <StyledApp>
        <Searchbar onSubmit={this.getNewGallery} />
        <ImageGallery
          arrImages={images}
          onCreating={this.openGalleryModal}
          alt="Photo"
        />
        {images.length > 0 && <Button onScroll={this.addNewImages} />}
        {isLoading && <GalleryLoader />}
        {isCreating && (
          <Modal
            modalImages={images}
            onCloseModal={this.closeGalleryModal}
            imageObj={imageObj}
            alt="Modal photo"
          />
        )}
      </StyledApp>
    );
  }
}
