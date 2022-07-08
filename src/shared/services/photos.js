import axios from 'axios';

export const PER_PAGE = 12;

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '28021397-efd8f00a24064632ececcc08e',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PER_PAGE,
  },
});

export const searchPhotos = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
    },
  });

  return data;
};
