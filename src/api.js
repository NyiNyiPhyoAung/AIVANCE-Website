// src/api.js
export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5050'
    : 'https://aivance-backend-production.up.railway.app'; // your deployed backend URL
