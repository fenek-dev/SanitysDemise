import { Box, BoxProps, Button } from "@mui/material";
import React from "react";
import "./Slot.scss";
import { Link } from "react-router-dom";

interface SlotProps extends BoxProps {
  to: string;
}

export const Slot = ({ to, ...props }: SlotProps) => {
  return (
    <Link to={to}>
      <Button className="border slot" {...Slot}>
        Empty
      </Button>
    </Link>
  );
};
