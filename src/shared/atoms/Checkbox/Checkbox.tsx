import React from "react";
import { Checkbox as CheckboxComponent, CheckboxProps } from "@mui/material";

import "./Checkbox.scss";

export const Checkbox = (props: React.PropsWithChildren<CheckboxProps>) => {
  return (
    <CheckboxComponent
      sx={{
        color: "var(--main-color) !important",
        svg: {
          width: "2.5rem",
          height: "2.5rem",
        },
      }}
      size="small"
      {...props}
    ></CheckboxComponent>
  );
};
