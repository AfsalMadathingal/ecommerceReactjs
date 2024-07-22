import axios from 'axios';

const login = async (id, password, isAdmin = false) => {


  try {

    const endpoint = isAdmin ? `${import.meta.env.VITE_API_URL}/admin/login` : `${import.meta.env.VITE_API_URL}/user/signin`;
    const response = await axios.post(endpoint, { id, password }); 
    const { token } = response.data;

    if (isAdmin) {
      localStorage.setItem('adminToken', token);
    } else {
      localStorage.setItem('userToken', token);
    }

    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

const register = async (id, password) => {

  try {
    const endpoint = `${import.meta.env.VITE_API_URL}/user/signup`;
    const response = await axios.post(endpoint, { id, password });
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
  
};




export { login ,register };
