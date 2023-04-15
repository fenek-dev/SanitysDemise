import { Avatar } from "@/widgets/Avatar/Avatar";
import { TabUnstyled, TabsListUnstyled } from "@mui/base";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const TabRows = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" gap="1rem" width="100%">
      <TabsListUnstyled
        component={Box}
        display="flex"
        flexDirection="column"
        gap="1rem"
        width="100%"
      >
        <TabUnstyled component={Box} value="info" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Character Info")}</Typography>
          </Button>
        </TabUnstyled>
        <TabUnstyled component={Box} value="equip" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Equipment")}</Typography>
          </Button>
        </TabUnstyled>
        <TabUnstyled component={Box} value="backpack" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Backpack")}</Typography>
          </Button>
        </TabUnstyled>
        <TabUnstyled component={Box} value="wounds" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Wounds")}</Typography>
          </Button>
        </TabUnstyled>
        <TabUnstyled component={Box} value="quests" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Quests")}</Typography>
          </Button>
        </TabUnstyled>
        <TabUnstyled component={Box} value="effects" className="sidebar-tab">
          <Button fullWidth>
            <Typography variant="h5">{t("Effects")}</Typography>
          </Button>
        </TabUnstyled>
      </TabsListUnstyled>
      <Avatar />
    </Box>
  );
});
