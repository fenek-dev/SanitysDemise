import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Toolbar = () => {
  return (
    <Box
      height="4rem"
      bgcolor="rgba(0, 0, 0, 0.6)"
      border="3px solid var(--main-color)"
    >
      <Link to="/character">
        <Button>Menu</Button>
      </Link>
    </Box>
  );
};
