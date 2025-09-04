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

const createNewUserSevice = (userData) => {
    return axios.post('http://localhost:8080/api/create-new-user', 
        userData,
        {
            validateStatus: function (status) {
                return true;
            }
        }
    );
}


export default {handleLoginAPI, getAllUsers, createNewUserSevice}