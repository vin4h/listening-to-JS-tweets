import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.twitter.com/2/tweets',
    headers: {
        
    }
});