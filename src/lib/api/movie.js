import client from './client';

// get
export const getList = () => {
  return client.get('/movies');
};

// detail
export const getDetail = (id) => {
  return client.get(`/movies/${id}`);
};

// create
export const createMovie = (params) => {
  return client.post('/movies', params);
};

// update
export const updateMovie = (id, params) => {
  return client.put(`/movies/${id}`, params);
};

// delete
export const deleteMovie = (id) => {
  return client.delete(`/movies/${id}`);
};

