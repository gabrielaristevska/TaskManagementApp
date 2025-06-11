import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import LoginForm from "../components/auth/login/LoginForm.jsx";

const LoginPage = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            width="100%"
            bgcolor="#f5f5f5"
        >
            <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
                <LoginForm />
            </Paper>
        </Box>
    );
};

export default LoginPage;