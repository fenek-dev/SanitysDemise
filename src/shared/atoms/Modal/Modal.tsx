import { Modal as ModalComponent, ModalProps } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import "./Modal.scss";

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
  "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart" | "ref"
>) => (
  <AnimatePresence>
    {open && (
      <AnimatedModal
        animate={{ opacity: 1, transform: "translateX(0%)" }}
        className="modal"
        exit={{ opacity: 0, transform: "translateX(100%)" }}
        hideBackdrop
        initial={{ opacity: 0, transform: "translateX(100%)" }}
        open
        transition={{ duration: 0.5 }}
        {...props}
      >
        {children}
      </AnimatedModal>
    )}
  </AnimatePresence>
);
