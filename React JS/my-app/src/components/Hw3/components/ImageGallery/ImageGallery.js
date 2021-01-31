import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

/**
 * Styles
 */
const StyledImageGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

/**
 * ImageGallery
 */

const ImageGallery = ({ arrImages, onCreating, alt }) => (
  <StyledImageGallery className="ImageGallery">
    <ImageGalleryItem
      images={arrImages}
      onCreatingModal={onCreating}
      alt={alt}
    />
  </StyledImageGallery>
);

ImageGallery.propTypes = {
  arrImages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onCreating: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGallery;
