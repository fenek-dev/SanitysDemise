import { ITEM_RARITY_COLOR } from "@/entities/items";
import { ItemType } from "@/entities/items/types";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ItemProps {
  item?: ItemType;
  onClick?: () => void;
}

export const Item = ({ item, onClick }: ItemProps) => {
  const { t } = useTranslation();
  return (
    <Box
      display="flex"
      border="2px solid var(--white-main-color)"
      borderRadius="0.5rem"
      height="3rem"
      onClick={onClick}
      sx={{
        cursor: "pointer",
      }}
    >
      {item && (
        <Box
          height="100%"
          sx={{
            background: `url("${item.icon}") center center no-repeat`,
            backgroundSize: "cover",
            aspectRatio: "1",
          }}
        ></Box>
      )}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Typography
          color={ITEM_RARITY_COLOR[item?.rarity || "common"]}
          textAlign="center"
          variant="h6"
          display="block"
        >
          {t(item?.name || "EMPTY")}
        </Typography>
      </Box>
    </Box>
  );
};
