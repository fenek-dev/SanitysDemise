import React from "react";
import { Modal as ModalComponent, ModalProps } from "@mui/material";

import "./Modal.scss";

export const Modal = ({
  children,
  ...props
}: React.PropsWithChildren<ModalProps>) => (
  <ModalComponent hideBackdrop className="modal" {...props}>
    {children}
  </ModalComponent>
);
