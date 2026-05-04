const BASE = process.env.NEXT_PUBLIC_API_URL;

export const API = {
  AUTH: {
    LOGIN: `${BASE}/auth/login`,
    LOGOUT: `${BASE}/auth/logout`,
    REFRESH: `${BASE}/auth/refresh`,
  },
  USERS: {
    BASE: `${BASE}/users`,
    ME: `${BASE}/users/me`,
  },
} as const;
