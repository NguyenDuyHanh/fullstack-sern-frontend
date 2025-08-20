import axios from "../axios";

const handleLoginAPI = (email, password) => {
    return axios.post('http://localhost:8080/api/login', {
        email,
        password
    });
}

export default {
    handleLoginAPI: handleLoginAPI
}