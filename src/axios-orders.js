import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-85744.firebaseio.com/'
})

export default instance;
