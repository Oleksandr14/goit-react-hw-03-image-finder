import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { Box } from 'components/Box';

export const ImageGallery = ({ items }) => {
  return (
    <Box as="ul" display="flex" flexWrap="wrap" p={4} gridGap={10}>
      {items.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </Box>
  );
};
