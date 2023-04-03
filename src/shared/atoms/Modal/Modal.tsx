import React from "react";
import { Modal as ModalComponent, ModalProps } from "@mui/material";

import "./Modal.scss";
import { AnimatePresence, motion } from "framer-motion";

const ForwardedModalComponent = React.forwardRef(
  (props: ModalProps, ref: any) => <ModalComponent ref={ref} {...props} />
);

const AnimatedModal = motion(ForwardedModalComponent);
export const Modal = ({
  children,
  open,
  ...props
}: Omit<
  ModalProps,
  "ref" | "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart"
>) => (
  <AnimatePresence>
    {open && (
      <AnimatedModal
        open
        initial={{ transform: "translateX(100%)", opacity: 0 }}
        animate={{ transform: "translateX(0%)", opacity: 1 }}
        exit={{ transform: "translateX(100%)", opacity: 0 }}
        transition={{ duration: 0.5 }}
        hideBackdrop
        className="modal"
        {...props}
      >
        {children}
      </AnimatedModal>
    )}
  </AnimatePresence>
);
