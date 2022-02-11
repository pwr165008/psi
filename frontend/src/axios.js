import axios from 'axios';

export default axios.create({
  baseURL: `https://powierzenia.herokuapp.com/`
});