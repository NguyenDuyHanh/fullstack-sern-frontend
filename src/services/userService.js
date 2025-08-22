import axios from "../axios";

const handleLoginAPI = (email, password) => {
    return axios.post('http://localhost:8080/api/login', {
        email,
        password
    });
}

const getAllUsers = (inputId) => {
    return axios.get(`http://localhost:8080/api/get-all-users?id=${inputId}`);
}

export default {handleLoginAPI, getAllUsers}