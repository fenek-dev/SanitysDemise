import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Toolbar = () => {
  return (
    <Box>
      <Link to="/character">
        <Button>Menu</Button>
      </Link>
    </Box>
  );
};
