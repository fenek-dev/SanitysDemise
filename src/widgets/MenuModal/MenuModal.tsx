import { Box, Button, Modal } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface MenuModalProps {
  onClose: () => void;
  onExit: () => void;
  open: boolean;
}

export const MenuModal = ({ onClose, onExit, open }: MenuModalProps) => {
  const { t } = useTranslation();
  return (
    <Modal onClose={onClose} open={open}>
      <Box
        sx={{
          transform: "translate(-50%, -50%)",
        }}
        bgcolor="black"
        border="2px solid var(--white-main-color)"
        borderRadius="0.5rem"
        color="var(--white-main-color)"
        display="flex"
        flexDirection="column"
        gap="1rem"
        left="50%"
        p="1rem"
        position="fixed"
        top="50%"
      >
        <Button fullWidth onClick={onClose}>
          {t("Resume")}
        </Button>
        <Link to="/settings">
          <Button fullWidth>{t("Settings")}</Button>
        </Link>
        <Link onClick={onExit} to="/">
          <Button fullWidth>{t("Exit")}</Button>
        </Link>
      </Box>
    </Modal>
  );
};
