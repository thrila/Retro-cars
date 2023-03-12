import axios from "axios";

const TOKEN = 'cftub39r01qjeql3nlsgcftub39r01qjeql3nlt0'

export default axios.create({
    baseURL: 'https://finnhub.io/api/v1',
    params:{
        token: TOKEN,
        
    }
})