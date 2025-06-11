import React, { useEffect, useState } from "react";
import {
    TextField,
    Button,
    MenuItem,
    Box,
    FormControl,
    InputLabel,
    Select,
} from "@mui/material";
import useStatuses from "../../../../hooks/useStatuses.js";
import usePriorities from "../../../../hooks/usePriorities.js";
import useCategories from "../../../../hooks/useCategories.js";

const EditTaskForm = ({ initialValues, onSubmit }) => {
    const statuses = useStatuses();
    const priorities=usePriorities();
    const categories=useCategories();
    const [formData, setFormData] = useState(initialValues);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = {
            ...formData,
            dueDate: formData.dueDate + "T00:00:00",
        };
        onSubmit(dataToSubmit);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="dueDate"
                    label="Due Date"
                    type="date"
                    value={formData.dueDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    required
                />
                <FormControl fullWidth required>
                    <InputLabel>Category</InputLabel>
                    <Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        label="Category"
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth required>
                    <InputLabel>Priority</InputLabel>
                    <Select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        label="Priority"
                    >
                        {priorities.map((priority) => (
                            <MenuItem key={priority} value={priority}>
                                {priority}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth required>
                    <InputLabel>Status</InputLabel>
                    <Select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        label="Status"
                    >
                        {statuses.map((status) => (
                            <MenuItem key={status} value={status}>
                                {status}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained">
                    Save Changes
                </Button>
            </Box>
        </form>
    );
};

export default EditTaskForm;