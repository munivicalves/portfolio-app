const PROD_URL = process.env.REACT_APP_API_PROD || process.env.REACT_APP_API_URL;
const LOCAL_URL = process.env.REACT_APP_API_LOCAL || process.env.REACT_APP_API_URL;

export const API_URL =
  (process.env.NODE_ENV === 'production' ? PROD_URL : LOCAL_URL) || 'http://localhost:5000';
