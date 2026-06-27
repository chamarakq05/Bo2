import axios from "axios";

const API = axios.create({
  baseURL: "https://bo2-production-f1ff.up.railway.app",
});

// ✅ THIS IS THE FIX (export rollDice properly)
export const rollDice = (data) => API.post("/roll", data);

// (optional extras)
export const getStatus = () => API.get("/status");
export const getHistory = () => API.get("/history");
