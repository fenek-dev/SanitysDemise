import { Button, ButtonProps } from "@mui/material";
import React from "react";

import "./MenuButton.scss";

export const MenuButton = ({
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <Button id="menu-button" {...props}>
      {children}
    </Button>
  );
};
