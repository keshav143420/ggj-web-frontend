import api from './api';

export const feedService = {
  getFeed: async (page = 1, limit = 10) => {
    const response = await api.get('/feed', { params: { page, limit } });
    return response.data;
  },
  getUserFeed: async (userId: string, page = 1, limit = 10) => {
    const response = await api.get(`/feed/user/${userId}`, { params: { page, limit } });
    return response.data;
  }
};
