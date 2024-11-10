const API_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8888/.netlify/functions'
  : '/.netlify/functions';

export const api = {
  async getData() {
    const response = await fetch(`${API_URL}/api`);
    return response.json();
  },
  
  // Add other API methods as needed
}; 