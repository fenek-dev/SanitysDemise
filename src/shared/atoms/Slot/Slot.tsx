import { Box, BoxProps, Button } from "@mui/material";
import React from "react";
import "./Slot.scss";

export const Slot = (props: BoxProps) => {
  return (
    <Button className="border slot" {...Slot}>
      Empty
    </Button>
  );
};
