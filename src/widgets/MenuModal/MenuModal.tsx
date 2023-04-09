import { Box, Button, Modal } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

interface MenuModalProps {
  open: boolean;
  onClose: () => void;
}

export const MenuModal = ({ open, onClose }: MenuModalProps) => {
  const { t } = useTranslation();
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        position="fixed"
        top="50%"
        left="50%"
        p="1rem"
        bgcolor="black"
        color="var(--white-main-color)"
        borderRadius="0.5rem"
        border="2px solid var(--white-main-color)"
        display="flex"
        flexDirection="column"
        gap="1rem"
        sx={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <Button onClick={onClose} fullWidth>
          {t("Resume")}
        </Button>
        <Link to="/settings">
          <Button fullWidth>{t("Settings")}</Button>
        </Link>
        <Link to="/">
          <Button fullWidth>{t("Exit")}</Button>
        </Link>
      </Box>
    </Modal>
  );
};
