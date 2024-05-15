import axios from "axios"

const serverURL = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";
const request = axios.create({
    baseURL:serverURL,

})
export default request