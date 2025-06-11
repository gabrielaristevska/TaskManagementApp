import React, { useState } from "react";
import { TextField, Button, Box, Typography, Alert, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth.js";
import authRepository from "../../../../repository/userRepository.js";

const LoginForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authRepository.login(credentials)
            .then((res) => {
                login(res.data.token);
                navigate("/dashboard");
            })
            .catch(() => {
                setError("Invalid username or password.");
            });
    };

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Login
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
                    value={credentials.username}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                    Don&apos;t have an account?{" "}
                    <Button variant="text" size="small" onClick={() => navigate("/register")}>
                        Register
                    </Button>
                </Typography>
            </form>
        </>
    );
};

export default LoginForm;