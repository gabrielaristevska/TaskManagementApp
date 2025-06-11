import React from "react";
import { Paper, Typography, Button, Box } from "@mui/material";
import {useNavigate} from "react-router-dom";

const TaskItem = ({ task, onDelete, onStart, onFinish }) => {
    const navigate=useNavigate();
    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const pad = (n) => n.toString().padStart(2, "0");

        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const day = pad(date.getDate());
        const month = pad(date.getMonth() + 1);
        const year = date.getFullYear();

        return `${hours}:${minutes} ${day}/${month}/${year}`;
    };
    return (
        <Paper
            sx={{
                padding: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h6"
                color="primary"
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(`/tasks/${task.id}`)}
            >
                {task.name} — <strong>{task.status}</strong>
                <Typography>
                    Due date: {formatDate(task.dueDate)}
                </Typography>
            </Typography>


            <Box>
                {task.status === "NOT_STARTED" && (
                    <Button
                        size="small"
                        variant="outlined"
                        color="success"
                        onClick={() => onStart(task.id)}
                        sx={{ mr: 1 }}
                    >
                        Start
                    </Button>
                )}
                {task.status === "STARTED" && (
                    <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        onClick={() => onFinish(task.id)}
                        sx={{ mr: 1 }}
                    >
                        Finish
                    </Button>
                )}
                <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={() => onDelete(task.id)}
                >
                    Delete
                </Button>
            </Box>
        </Paper>
    );
};

export default TaskItem;