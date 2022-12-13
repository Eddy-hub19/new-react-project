import axios from 'axios';

const REACT_API_KEY = '9534498-01df2148594d3f0d4c2aed4f3';

axios.defaults.baseURL = `https://api.thedogapi.com/v1`;
axios.defaults.headers.common['x-api-key'] = REACT_API_KEY;

export const fetchBreeds = async () => {
  const response = await axios.get('/breeds');
  return response.data;
};

export const fetchDogByBreed = async breedId => {
  const response = await axios.get('/images/search', {
    params: { breed_id: breedId },
  });
  return response.data[0];
};
