import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"


  export const fetchApi = async (url) =>{
      const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'a54fe9224dmshfed756c9636fc28p1ff00fjsnc77cd9b65481'
          }
      });

      return data;
  }