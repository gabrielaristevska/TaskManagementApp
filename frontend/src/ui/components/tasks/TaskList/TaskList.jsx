import React from "react";
import { Box, CircularProgress, Typography, Stack } from "@mui/material";
import TaskItem from "../TaskItem/TaskItem.jsx";

const TaskList = ({ tasks, loading, onDelete, onStart, onFinish }) => {
    if (loading) {
        return (
            <Box textAlign="center" mt={2}>
                <CircularProgress />
            </Box>
        );
    }

    if (tasks.length === 0) {
        return <Typography>No tasks available.</Typography>;
    }

    return (
        <Stack spacing={2}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onStart={onStart}
                    onFinish={onFinish}
                />
            ))}
        </Stack>
    );
};

export default TaskList;