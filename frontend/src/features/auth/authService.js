import axios from 'axios'

const API_URL = '/api/users'

//Register user
const register = async (userData) =>{
    const response =await axios.post(`${API_URL}/register ` ,userData)
    if(response.data) {

        sessionStorage.setItem('user',response.data)
    }
    return response.data
}

//login user
const login = async (userData) =>{
    console.log("im calledd");
    const response =await axios.post(`${API_URL}/login `,userData)
    console.log("im response",response.data);
    if(response.data) {
        sessionStorage.setItem('user',response.data)
    }
    return response.data
}

//Logout user

const logout = () => {
    localStorage.removeItem('user')
}


const authService = {
    register,
    logout,
    login
}

export default authService 
