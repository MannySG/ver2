import axios from 'axios';
import API_URL from '../api-config/configAPI';

export default function callApi (endpoint, method = 'GET', body) {
  return axios ({
    method: method,
    url: `${API_URL}${endpoint}`,
    data: body,
  });
}
