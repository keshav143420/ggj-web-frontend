import api from './api';

export const contentService = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createPost: async (postData: any) => {
    const response = await api.post('/content/posts', postData);
    return response.data;
  },
  getPost: async (postId: string) => {
    const response = await api.get(`/content/posts/${postId}`);
    return response.data;
  },
  likePost: async (postId: string) => {
    const response = await api.post(`/content/posts/${postId}/like`);
    return response.data;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commentPost: async (postId: string, commentData: any) => {
    const response = await api.post(`/content/posts/${postId}/comments`, commentData);
    return response.data;
  }
};
