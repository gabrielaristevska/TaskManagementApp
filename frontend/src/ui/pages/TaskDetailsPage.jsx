import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Button, CircularProgress } from "@mui/material";
import Header from "../components/layout/Header.jsx";
import useTaskDetails from "../../hooks/useTaskDetails.js";

const TaskDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { task, loading } = useTaskDetails(id);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (!task) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Typography variant="h6" color="error">Task not found</Typography>
            </Box>
        );
    }

    return (
        <>
            <Header />
            <Box minHeight="100vh" bgcolor="#f5f5f5" p={4}>
                <Paper elevation={3} sx={{ padding: 4, maxWidth: 800, margin: "auto" }}>
                    <Typography variant="h4" gutterBottom>
                        {task.name}
                    </Typography>

                    <Typography variant="subtitle1">Category: {task.category}</Typography>
                    <Typography variant="subtitle1">Priority: {task.priority}</Typography>
                    <Typography variant="subtitle1">Status: {task.status}</Typography>
                    <Typography variant="subtitle1">
                        Due Date: {new Date(task.dueDate).toLocaleString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric"
                    })}
                    </Typography>
                    <Typography variant="subtitle1">Assigned to: {task.userDto?.username}</Typography>

                    <Box mt={4}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate(`/tasks/${task.id}/edit`)}
                        >
                            Edit
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </>
    );
};

export default TaskDetailsPage;