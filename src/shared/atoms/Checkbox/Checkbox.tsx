import { Checkbox as CheckboxComponent, CheckboxProps } from "@mui/material";
import React from "react";

import "./Checkbox.scss";

export const Checkbox = (props: React.PropsWithChildren<CheckboxProps>) => {
  return (
    <CheckboxComponent
      sx={{
        color: "var(--main-color) !important",
        svg: {
          height: "2.5rem",
          width: "2.5rem",
        },
      }}
      size="small"
      {...props}
    ></CheckboxComponent>
  );
};
