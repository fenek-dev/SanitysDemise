import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Menu } from "@/app/assets/svgs/menu.svg";
import { ReactComponent as Days } from "@/app/assets/svgs/days.svg";
import { ReactComponent as Hours } from "@/app/assets/svgs/hours.svg";
import { useTranslation } from "react-i18next";

export const Toolbar = () => {
  const { t } = useTranslation();
  return (
    <Box
      height="100%"
      bgcolor="rgba(0, 0, 0, 0.6)"
      border="3px solid var(--main-color)"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="white"
    >
      <Link to="/">
        <Menu width="3rem" height="3rem" />
      </Link>
      <Box display="flex" gap="2rem">
        <Typography variant="h6" display="flex" alignItems="center">
          {t("hours", { count: 16 })}
          <Hours width="2rem" height="2rem" />
        </Typography>
        <Typography variant="h6" display="flex" alignItems="center">
          {t("days", { count: 1 })}
          <Days width="2rem" height="2rem" />
        </Typography>
      </Box>
    </Box>
  );
};
