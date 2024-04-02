import axios from 'axios';
const Base_URL = 'https://ypapi.formz.in/api/public/videos';


const options = {
  method: 'GET',
  url: Base_URL
};

export const fetchCaptions = async (url) => {
 const {data} =  await axios.get(`${Base_URL}/${url}`, options);
 console.log(data); 
 return data;
};
