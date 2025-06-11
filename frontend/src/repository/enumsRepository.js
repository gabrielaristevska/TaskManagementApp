import axiosInstance from "../axios/axios.js";

const enumsRepository={
    getStatuses: async () => {
        return await axiosInstance.get("/enumerations/status");
    },
    getPriorities: async () => {
        return await axiosInstance.get("/enumerations/priority");
    },
    getCategories: async () => {
        return await axiosInstance.get("/enumerations/category");
    },
    getRoles: async () => {
        return await axiosInstance.get("/enumerations/role");
    },
};

export default enumsRepository;