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
        <Tab className="sidebar-tab" value="info">
          <Button fullWidth>
            <Typography variant="h5">{t("Character Info")}</Typography>
          </Button>
        </Tab>
        <Tab className="sidebar-tab" value="equip">
          <Button fullWidth>
            <Typography variant="h5">{t("Equipment")}</Typography>
          </Button>
        </Tab>
        <Tab className="sidebar-tab" value="backpack">
          <Button fullWidth>
            <Typography variant="h5">{t("Backpack")}</Typography>
          </Button>
        </Tab>
        <Tab className="sidebar-tab" value="wounds">
          <Button fullWidth>
            <Typography variant="h5">{t("Wounds")}</Typography>
          </Button>
        </Tab>
        <Tab className="sidebar-tab" value="quests">
          <Button fullWidth>
            <Typography variant="h5">{t("Quests")}</Typography>
          </Button>
        </Tab>
        <Tab className="sidebar-tab" value="effects">
          <Button fullWidth>
            <Typography variant="h5">{t("Effects")}</Typography>
          </Button>
        </Tab>
      </TabsList>
      <Avatar />
    </Box>
  );
});
