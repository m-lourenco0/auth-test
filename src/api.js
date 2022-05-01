import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
    }
})