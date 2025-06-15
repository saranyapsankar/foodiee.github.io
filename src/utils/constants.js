const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://foodiee-github-io.vercel.app/api'
  : 'http://localhost:5000/api';

export { API_URL }; 