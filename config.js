import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.8.161:8001/api/user',
});
