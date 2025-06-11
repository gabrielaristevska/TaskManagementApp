import axiosInstance from "../axios/axios.js";

const userRepository={
    login: async (data) =>{
        return await axiosInstance.post("/users/login", data);
    },
    register: async (data) =>{
        return await axiosInstance.post("/users/register", data);
    },
};

export default userRepository;