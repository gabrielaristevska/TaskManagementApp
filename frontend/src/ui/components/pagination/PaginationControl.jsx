import React from "react";
import { Box, Pagination } from "@mui/material";

const PaginationControl = ({ count, page, onChange }) => {
    if (count <= 1) return null;

    return (
        <Box display="flex" justifyContent="center" mt={4}>
            <Pagination count={count} page={page} onChange={onChange} color="primary" />
        </Box>
    );
};

export default PaginationControl;