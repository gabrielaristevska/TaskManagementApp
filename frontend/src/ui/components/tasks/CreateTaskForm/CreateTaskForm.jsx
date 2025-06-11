import React from "react";
import { Box, TextField, Button, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

const CreateTaskForm = ({
                            form,
                            onChange,
                            onSubmit,
                            categories,
                            priorities,
                            statuses,
                            loading = false,
                        }) => {
    return (
        <form onSubmit={onSubmit}>
            <TextField
                fullWidth
                label="Task Name"
                name="name"
                value={form.name}
                onChange={onChange}
                margin="normal"
                required
            />

            <TextField
                fullWidth
                type="datetime-local"
                label="Due Date"
                name="dueDate"
                value={form.dueDate}
                onChange={onChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
            />

            <FormControl fullWidth margin="normal" required>
                <InputLabel>Category</InputLabel>
                <Select
                    name="category"
                    value={form.category}
                    onChange={onChange}
                    label="Category"
                >
                    {categories.map(c => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" required>
                <InputLabel>Priority</InputLabel>
                <Select
                    name="priority"
                    value={form.priority}
                    onChange={onChange}
                    label="Priority"
                >
                    {priorities.map(p => (
                        <MenuItem key={p} value={p}>{p}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" required>
                <InputLabel>Status</InputLabel>
                <Select
                    name="status"
                    value={form.status}
                    onChange={onChange}
                    label="Status"
                >
                    {statuses.map(s => (
                        <MenuItem key={s} value={s}>{s}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Box mt={4} textAlign="right">
                <Button variant="contained" color="primary" type="submit" disabled={loading}>
                    Create Task
                </Button>
            </Box>
        </form>
    );
};

export default CreateTaskForm;