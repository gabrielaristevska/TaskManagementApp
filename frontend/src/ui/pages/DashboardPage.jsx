import React from "react";
import { Box, Paper, Typography, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useTasks from "../../hooks/useTasks.js";
import useStatuses from "../../hooks/useStatuses.js";
import TaskList from "../components/tasks/TaskList/TaskList.jsx";
import PaginationControl from "../components/pagination/PaginationControl.jsx";
import Header from "../components/layout/Header.jsx";

const sortableFields = [
    { label: "ID", value: "id" },
    { label: "Name", value: "name" },
    { label: "Due Date", value: "dueDate" },
    { label: "Category", value: "category" },
    { label: "Priority", value: "priority" },
    { label: "Status", value: "status" },
];

const DashboardPage = () => {
    const navigate = useNavigate();
    const statuses = useStatuses();
    const { tasks, loading, onDelete, onStart, onFinish, params, updateParams, totalElements } = useTasks();

    const handlePageChange = (event, page) => {
        updateParams({ page: page - 1 });
    };

    const handleStatusChange = (e) => {
        const statusValue = e.target.value || null;
        updateParams({ status: statusValue, page: 0 });
    };

    const handleSortByChange = (e) => {
        updateParams({ sortBy: e.target.value, page: 0 });
    };

    return (
        <>
            <Header />
            <Box minHeight="100vh" bgcolor="#f5f5f5" p={4}>
                <Paper elevation={3} sx={{ padding: 4, maxWidth: 900, margin: "auto" }}>
                    <Typography variant="h5" mb={3}>
                        Your Tasks
                    </Typography>

                    {/* Filters */}
                    <Box display="flex" gap={2} mb={3}>
                        <FormControl size="small" sx={{ minWidth: 150 }}>
                            <InputLabel>Status</InputLabel>
                            <Select
                                value={params.status ?? ""}
                                label="Status"
                                onChange={handleStatusChange}
                            >
                                <MenuItem value="">All</MenuItem>
                                {statuses && statuses.map((s) => (
                                    <MenuItem key={s} value={s}>
                                        {s}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl size="small" sx={{ minWidth: 150 }}>
                            <InputLabel>Sort by</InputLabel>
                            <Select
                                value={params.sortBy}
                                label="Sort by"
                                onChange={handleSortByChange}
                            >
                                {sortableFields.map((field) => (
                                    <MenuItem key={field.value} value={field.value}>
                                        {field.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <TaskList
                        tasks={tasks}
                        loading={loading}
                        onDelete={onDelete}
                        onStart={onStart}
                        onFinish={onFinish}
                    />

                    <PaginationControl
                        count={Math.ceil(totalElements / params.size)}
                        page={params.page+1}
                        onChange={handlePageChange}
                    />

                    <Box mt={4} textAlign="center">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate("/tasks/create")}
                        >
                            + Add New Task
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </>
    );
};

export default DashboardPage;