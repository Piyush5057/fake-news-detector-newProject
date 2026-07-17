import axios from "axios";

const API = axios.create({
    baseURL: "https://fake-news-detector-e8bv.onrender.com"
});

export default API;