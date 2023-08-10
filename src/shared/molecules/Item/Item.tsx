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
      sx={{
        cursor: "pointer",
      }}
      border="2px solid var(--white-main-color)"
      borderRadius="0.5rem"
      display="flex"
      height="3rem"
      onClick={onClick}
    >
      {item && (
        <Box
          sx={{
            aspectRatio: "1",
            background: `url("${item.icon}") center center no-repeat`,
            backgroundSize: "cover",
          }}
          height="100%"
        ></Box>
      )}
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        width="100%"
      >
        <Typography
          color={ITEM_RARITY_COLOR[item?.rarity || "common"]}
          display="block"
          textAlign="center"
          variant="h6"
        >
          {t(item?.name || "EMPTY")}
        </Typography>
      </Box>
    </Box>
  );
};
