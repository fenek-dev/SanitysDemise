import { Box, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { ReactComponent as Menu } from "@/app/assets/svgs/menu.svg";
import { ReactComponent as Days } from "@/app/assets/svgs/days.svg";
import { ReactComponent as Hours } from "@/app/assets/svgs/hours.svg";
import { useTranslation } from "react-i18next";
import { MenuModal } from "../MenuModal/MenuModal";
import { useDispatch } from "react-redux";
import { resetGeneralSlice } from "@/app/store/general/general.slice";
import { resetCharacterSlice } from "@/app/store/character/character.slice";

export const Toolbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const onExit = useCallback(() => {
    dispatch(resetGeneralSlice());
    dispatch(resetCharacterSlice());
  }, []);
  return (
    <Box
      height="3rem"
      bgcolor="rgba(0, 0, 0, 0.6)"
      borderBottom="3px solid var(--main-color)"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="white"
      px="1rem"
    >
      <Menu
        width="3rem"
        height="3rem"
        onClick={() => setOpen(true)}
        cursor="pointer"
      />
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
      <MenuModal open={open} onClose={() => setOpen(false)} onExit={onExit} />
    </Box>
  );
};
