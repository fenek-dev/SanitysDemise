import {
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import "./Settings.scss";
import { Link } from "react-router-dom";
import { Checkbox } from "@/shared/atoms/Checkbox/Checkbox";
import { useTranslation } from "react-i18next";
import _ from "lodash";
const { ipcRenderer } = window.require("electron");

export const Settings = () => {
  const { i18n, t } = useTranslation();

  const onChange = (e: SelectChangeEvent<string>) => {
    i18n.changeLanguage(e.target.value as string);
    localStorage.setItem("lang", e.target.value);
  };

  const onResize = (e: SelectChangeEvent<string>) => {
    const [width, height] = _.split(e.target.value as string, "x");
    ipcRenderer.send("resize", Number(width), Number(height));
  };

  const onFullScreen = (
    _e: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    ipcRenderer.send("fullscreen", checked);
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
        <Box display="flex" justifyContent="space-between" fontSize="2rem">
          <FormControlLabel
            control={<Checkbox />}
            onChange={onFullScreen}
            label={
              <Typography sx={{ fontSize: "2.5rem" }}>
                {t("FullScreen")}
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label={
              <Typography sx={{ fontSize: "2.5rem" }}>Voice Acting</Typography>
            }
          />
        </Box>
        <Box display="grid" gridTemplateColumns="1fr 1fr" mt="2rem">
          <Select defaultValue="en" value={i18n.language} onChange={onChange}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ru">Русский</MenuItem>
          </Select>
        </Box>
        <Box display="grid" gridTemplateColumns="1fr 1fr" mt="2rem">
          <Select defaultValue={"800x600"} onChange={onResize}>
            <MenuItem value="800x600">800x600</MenuItem>
            <MenuItem value="1024x768">1024x768</MenuItem>
            <MenuItem value="1280x720">1280x720</MenuItem>
            <MenuItem value="1280x800">1280x800</MenuItem>
            <MenuItem value="1366x768">1366x768</MenuItem>
            <MenuItem value="1366x768">1440x900</MenuItem>
            <MenuItem value="1600x900">1600x900</MenuItem>
            <MenuItem value="1680x1050">1680x1050</MenuItem>
            <MenuItem value="1920x1080">1920x1080</MenuItem>
            <MenuItem value="2560x1440">2560x1440</MenuItem>
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
        <Link to="/">
          <Button>{t("Back")}</Button>
        </Link>
      </Box>
    </motion.div>
  );
};
