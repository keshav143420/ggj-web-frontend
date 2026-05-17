import api from './api';

export const connectionService = {
  getConnections: async (userId: string) => {
    const response = await api.get(`/connections/users/${userId}`);
    return response.data;
  },
  sendConnectionRequest: async (targetUserId: string) => {
    const response = await api.post(`/connections/request`, { targetUserId });
    return response.data;
  },
  acceptConnection: async (requestId: string) => {
    const response = await api.post(`/connections/accept/${requestId}`);
    return response.data;
  }
};
