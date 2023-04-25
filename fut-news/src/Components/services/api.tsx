import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.football-data.org',
    timeout:8000,
    headers: {
        'X-Auth-Token': '0f59837c84b944faae7d1b1d4f965344',
         
        
    }
  
}) 

