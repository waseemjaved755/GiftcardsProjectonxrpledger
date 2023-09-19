// api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Replace with your backend URL

export const getVideo = async ( method = 'GET') => {
  try {
    const response = await axios.get(`${API_URL}/video/getVideo`);
    const userData=response.data;
    console.log(userData);
    return userData; 
   
    //this is working
    
  } catch (error) {
    // Handle errors here
    console.error('Error fetching videos:', error);
    return [];
  }
};
