import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Styles
 */

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const StyledModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export default class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
  };

  bacdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleBacdropClick = e => {
    const { current } = this.bacdropRef;

    if (current && e.target !== current) {
      return;
    }
    this.props.onCloseModal();
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onCloseModal();
  };

  render() {
    const { imageObj, alt } = this.props;

    return (
      <StyledOverlay
        className="Overlay"
        ref={this.bacdropRef}
        onClick={this.handleBacdropClick}
      >
        <StyledModal className="Modal">
          <img src={imageObj.largeImg} alt={alt} key={imageObj.id} />
        </StyledModal>
      </StyledOverlay>
    );
  }
}
