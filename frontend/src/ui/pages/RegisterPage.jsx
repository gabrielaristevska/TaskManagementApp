import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import RegisterForm from "../components/auth/register/RegisterForm.jsx";

const RegisterPage = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f5f5f5"
        >
            <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
                <RegisterForm />
            </Paper>
        </Box>
    );
};

export default RegisterPage;