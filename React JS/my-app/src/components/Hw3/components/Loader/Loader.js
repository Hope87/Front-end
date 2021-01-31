import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`;

const GalleryLoader = () => (
  <StyledLoader>
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  </StyledLoader>
);

export default GalleryLoader;
