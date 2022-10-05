import PropTypes from 'prop-types';

import { Component } from 'react';
import { Img, Item } from './ImageGalleryItem.styled';

import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    count: 1,
  };

  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal, count: 2 }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <>
        <Item onClick={this.toggleModal}>
          <Img src={webformatURL} alt="pictures" />
        </Item>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
