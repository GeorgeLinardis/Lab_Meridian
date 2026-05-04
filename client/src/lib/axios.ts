import axios from 'axios';
import { API } from '@/api-urls';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // Ensures cookies (e.g., httpOnly access token) are sent with cross-origin requests to the NestJS server.
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Shared promise so concurrent 401s trigger only one refresh call.
let refreshPromise: Promise<unknown> | null = null;

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const { status } = error;
    if (status === 401 && !error.config._retry) {
      error.config._retry = true;

      // Use raw axios (not axiosInstance) so the refresh call bypasses interceptors
      // and avoids an infinite loop if the refresh token is also expired.
      if (!refreshPromise) {
        refreshPromise = axios.post(API.AUTH.REFRESH, {}, { withCredentials: true });
      }
      try {
        await refreshPromise;
      } catch {
        await axios.post(API.AUTH.LOGOUT, {}, { withCredentials: true });
        window.location.href = '/login';
        return Promise.reject(error);
      } finally {
        refreshPromise = null;
      }

      return axiosInstance(error.config);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
