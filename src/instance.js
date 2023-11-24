import axios from "axios";

const instance = axios.create({
  baseURL : 'https://api.themoviedb.org/3'
  
})

export default instance;


// baseURL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=47de2b9e8b2462b53975d18185ac40bf&language=en-US`,

