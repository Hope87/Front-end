import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Styles
 */

const StyledLi = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const StyledImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

/**
 * ImageGalleryItem
 */
const ImageGalleryItem = ({ images, onCreatingModal, alt }) =>
  images.map(img => (
    <StyledLi key={img.id} className="ImageGalleryItem">
      <StyledImg
        src={img.smallImg}
        alt={alt}
        onClick={() => onCreatingModal(img.id)}
        className="ImageGalleryItem-image"
      />
    </StyledLi>
  ));

ImageGalleryItem.propTypes = {
  onCreatingModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ImageGalleryItem;
