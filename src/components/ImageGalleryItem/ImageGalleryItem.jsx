import { Img, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <Item>
      <Img src={webformatURL} alt="pictures" />
    </Item>
  );
};
