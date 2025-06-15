const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-vercel-deployment-url.vercel.app/api'
  : 'http://localhost:5001/api';

export { API_URL }; 