import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./Settings.scss";

const aspectRatioClasses = {
  "4/3": "cube",
  "16/9": "normal",
  "16/10": "mac",
};

export const Settings = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const onChange = (e: SelectChangeEvent<string>) => {
    i18n.changeLanguage(e.target.value as string);
    localStorage.setItem("lang", e.target.value);
  };
  const onResize = (e: SelectChangeEvent<"4/3" | "16/9" | "16/10">) => {
    document.body.classList.value =
      "ratio-" + aspectRatioClasses[e.target.value as "4/3" | "16/9" | "16/10"];
  };
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="full settings"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      key="menu"
      transition={{ duration: 0.5 }}
    >
      <Typography
        className="stroke"
        fontWeight="medium"
        textAlign="center"
        variant="h1"
      >
        {t("Settings")}
      </Typography>
      <Box
        bgcolor="rgba(255,255,255,0.6)"
        borderRadius="1rem"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="5rem"
        p="2rem"
      >
        <Box display="grid" gridTemplateColumns="1fr 1fr" mt="2rem">
          <Select defaultValue="en" onChange={onChange} value={i18n.language}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ru">Русский</MenuItem>
          </Select>
        </Box>
        <Box display="grid" gridTemplateColumns="1fr 1fr" mt="2rem">
          <Select defaultValue={"16/9"} onChange={onResize}>
            <MenuItem value="16/10">16 / 10</MenuItem>
            <MenuItem value="16/9">16 / 9</MenuItem>
            <MenuItem value="4/3">4 / 3</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        left="3rem"
        position="absolute"
        top="5rem"
      >
        <Button onClick={() => navigate(-1)}>{t("Back")}</Button>
      </Box>
    </motion.div>
  );
};
