import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import "./Settings.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import _ from "lodash";

export const Settings = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const onChange = (e: SelectChangeEvent<string>) => {
    i18n.changeLanguage(e.target.value as string);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <motion.div
      className="full settings"
      key="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        variant="h1"
        textAlign="center"
        fontWeight="medium"
        className="stroke"
      >
        {t("Settings")}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        minWidth="100%"
        bgcolor="rgba(255,255,255,0.6)"
        p="2rem"
        mt="5rem"
        borderRadius="1rem"
      >
        <Box display="grid" gridTemplateColumns="1fr 1fr" mt="2rem">
          <Select defaultValue="en" value={i18n.language} onChange={onChange}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ru">Русский</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        position="absolute"
        top="5rem"
        left="3rem"
      >
        <Button onClick={() => navigate(-1)}>{t("Back")}</Button>
      </Box>
    </motion.div>
  );
};
