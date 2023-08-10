import { Avatar } from "@/widgets/Avatar/Avatar";
import { Tab, TabsList } from "@mui/base";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const TabRows = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" gap="1rem" width="100%">
      <TabsList
      // display="flex"
      // flexDirection="column"
      // gap="1rem"

      // width="100%"
      >
        <Tab value="info" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Character Info")}</Typography>
          </Button>
        </Tab>
        <Tab value="equip" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Equipment")}</Typography>
          </Button>
        </Tab>
        <Tab value="backpack" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Backpack")}</Typography>
          </Button>
        </Tab>
        <Tab value="wounds" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Wounds")}</Typography>
          </Button>
        </Tab>
        <Tab value="quests" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Quests")}</Typography>
          </Button>
        </Tab>
        <Tab value="effects" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Effects")}</Typography>
          </Button>
        </Tab>
      </TabsList>
      <Avatar />
    </Box>
  );
});
