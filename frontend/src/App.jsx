import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import RegisterPage from "./ui/pages/RegisterPage.jsx";
import LoginPage from "./ui/pages/LoginPage.jsx";
import useAuth from "./hooks/useAuth.js";
import AuthProvider from "./providers/authProvider.jsx";
import DashboardPage from "./ui/pages/DashboardPage.jsx";
import CreateTaskPage from "./ui/pages/CreateTaskPage.jsx";
import TaskDetailsPage from "./ui/pages/TaskDetailsPage.jsx";
import EditTaskPage from "./ui/pages/EditTaskPage.jsx";

const ProtectedRoute = () => {
    const { isLoggedIn, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path={"/dashboard"} element={<DashboardPage/>}/>
                        <Route path={"/tasks/create"} element={<CreateTaskPage/>}/>
                        <Route path="/tasks/:id/edit" element={<EditTaskPage />} />
                        <Route path="/tasks/:id" element={<TaskDetailsPage />} />
                    </Route>

                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>

    );
};

export default App;