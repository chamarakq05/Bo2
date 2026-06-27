import axios from "axios";

const API = axios.create({
  baseURL: "https://bo2-production-f1ff.up.railway.app",
});

export default API;
