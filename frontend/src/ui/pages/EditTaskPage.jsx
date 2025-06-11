import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress, Box, Typography } from "@mui/material";
import useTaskDetails from "../../hooks/useTaskDetails.js";
import useTasks from "../../hooks/useTasks.js";
import EditTaskForm from "../components/tasks/EditTaskForm/EditTaskForm.jsx";

const EditTaskPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { task, loading } = useTaskDetails(id);
    const { onEdit } = useTasks();

    const handleSubmit = (updatedTask) => {
        onEdit(id, updatedTask);
        navigate(`/tasks/${id}`);
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
                <CircularProgress />
            </Box>
        );
    }

    if (!task) {
        return (
            <Box p={4}>
                <Typography variant="h6" color="error">
                    Task not found.
                </Typography>
            </Box>
        );
    }

    return (
        <Box p={4}>
            <Typography variant="h5" mb={2}>
                Edit Task: {task.name}
            </Typography>
            <EditTaskForm initialValues={task} onSubmit={handleSubmit} />
        </Box>
    );
};

export default EditTaskPage;
