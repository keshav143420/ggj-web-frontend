import api from './api';

export const authService = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login: async (credentials: any) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  getProfile: async (userId: string) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },
};
