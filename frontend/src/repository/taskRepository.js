import axiosInstance from "../axios/axios.js";

const taskRepository={
    findAll: async ({ page = 0, size = 5, sortBy = "id", sortDir = "asc", status = null,} = {}) => {
        const params = new URLSearchParams({ page, size, sortBy, sortDir,});
        if (status) params.append("status", status);

        return await axiosInstance.get(`/tasks?${params.toString()}`);
    },
    details: async (id) => {
        return await axiosInstance.get(`/tasks/details/${id}`);
    },
    create: async (data) => {
        return await axiosInstance.post("/tasks/create", data);
    },
    update: async (id, data) => {
        return await axiosInstance.put(`/tasks/update/${id}`, data);
    },
    deleteById: async (id) => {
        return await axiosInstance.delete(`/tasks/delete/${id}`);
    },
    start: async (id) => {
        return await axiosInstance.put(`/tasks/start/${id}`);
    },
    finish: async (id) => {
        return await axiosInstance.put(`/tasks/finish/${id}`);
    }
};

export default taskRepository;