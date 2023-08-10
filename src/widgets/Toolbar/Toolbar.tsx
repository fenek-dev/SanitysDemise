import { ReactComponent as Days } from "@/app/assets/svgs/days.svg";
import { ReactComponent as Hours } from "@/app/assets/svgs/hours.svg";
import { ReactComponent as Menu } from "@/app/assets/svgs/menu.svg";
import { resetCharacterSlice } from "@/app/store/character/character.slice";
import { resetGeneralSlice } from "@/app/store/general/general.slice";
import { Box, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { MenuModal } from "../MenuModal/MenuModal";

export const Toolbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const onExit = useCallback(() => {
    dispatch(resetGeneralSlice());
    dispatch(resetCharacterSlice());
  }, [dispatch]);
  return (
    <Box
      alignItems="center"
      bgcolor="rgba(0, 0, 0, 0.6)"
      borderBottom="3px solid var(--main-color)"
      color="white"
      display="flex"
      height="3rem"
      justifyContent="space-between"
      px="1rem"
    >
      <Menu
        cursor="pointer"
        height="3rem"
        onClick={() => setOpen(true)}
        width="3rem"
      />
      <Box display="flex" gap="2rem">
        <Typography alignItems="center" display="flex" variant="h6">
          {t("hours", { count: 16 })}
          <Hours height="2rem" width="2rem" />
        </Typography>
        <Typography alignItems="center" display="flex" variant="h6">
          {t("days", { count: 1 })}
          <Days height="2rem" width="2rem" />
        </Typography>
      </Box>
      <MenuModal onClose={() => setOpen(false)} onExit={onExit} open={open} />
    </Box>
  );
};
