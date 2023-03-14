import axios from "axios";




export default axios.create({
    baseURL: 'https://finnhub.io/api/v1',
    params:{
        token: import.meta.env.VITE_REACT_APP_API_TOKEN,
        
    }
})