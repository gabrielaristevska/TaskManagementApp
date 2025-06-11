import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useTasks from "../../hooks/useTasks.js";
import useStatuses from "../../hooks/useStatuses.js";
import useCategories from "../../hooks/useCategories.js";
import usePriorities from "../../hooks/usePriorities.js";
import CreateTaskForm from "../components/tasks/CreateTaskForm/CreateTaskForm.jsx";

const CreateTaskPage = () => {
    const navigate = useNavigate();
    const { onAdd } = useTasks();
    const statuses = useStatuses();
    const categories = useCategories();
    const priorities = usePriorities();

    const [form, setForm] = useState({
        name: "",
        dueDate: "",
        category:"",
        priority:"",
        status:"",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            onAdd(form);
            navigate("/dashboard");
        } catch (error) {
            console.error("Failed to create task:", error);
            setLoading(false);
        }
    };

    return (
        <Box minHeight="100vh" bgcolor="#f5f5f5" p={4}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: "auto" }}>
                <Typography variant="h5" mb={3}>
                    Create New Task
                </Typography>

                <CreateTaskForm
                    form={form}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    categories={categories}
                    priorities={priorities}
                    statuses={statuses}
                    loading={loading}
                />
            </Paper>
        </Box>
    );
};

export default CreateTaskPage;