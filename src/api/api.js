import axios from 'axios';

const api = axios.create({
  baseURL: ' https://akvct836lc.execute-api.eu-central-1.amazonaws.com/dev',
  headers: {
    'Content-Type': 'application/json', 
    'Authorization': '' 
  }
});

export default api;