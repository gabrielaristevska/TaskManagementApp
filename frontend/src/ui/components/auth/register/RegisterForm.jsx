import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    Alert,
    MenuItem,
    Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useRoles from "../../../../hooks/useRoles.js";
import authRepository from "../../../../repository/userRepository.js";

const RegisterForm = () => {
    const navigate = useNavigate();
    const roles = useRoles();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        repeatPassword: "",
        name: "",
        surname: "",
        role: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        const payload = {
            username: formData.username,
            password: formData.password,
            repeatPassword: formData.repeatPassword,
            name: formData.name,
            surname: formData.surname,
            role: formData.role,
        };

        authRepository
            .register(payload)
            .then((res) => {
                navigate("/login");
            })
            .catch((err) => {
                setError(
                    err.response?.data
                );
            });
    };

    return (
            <>
                <Typography variant="h5" gutterBottom>
                    Register
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Repeat Password"
                        type="password"
                        name="repeatPassword"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        select
                        fullWidth
                        label="Role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        margin="normal"
                        required
                    >
                        {roles.map((r) => (
                            <MenuItem key={r} value={r}>
                                {r}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Register
                    </Button>
                </form>
            </>
    );
};

export default RegisterForm;