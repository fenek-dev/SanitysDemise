import { ReactComponent as Sale } from "@/app/assets/modal/Sale.svg";
import { ReactComponent as Equip } from "@/app/assets/modal/equip.svg";
import { ReactComponent as Throw } from "@/app/assets/modal/throw.svg";
import { ITEM_RARITY_COLOR } from "@/entities/items";
import { ItemType } from "@/entities/items/types";
import { Box, Modal, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ItemModelProps {
  item: ItemType;
  onClose: () => void;
  open: boolean;
}

export const ItemModal = ({ item, onClose, open }: ItemModelProps) => {
  const { t } = useTranslation();
  return (
    <Modal onClose={onClose} open={open}>
      <Box
        sx={{
          transform: "translate(-50%, -30%)",
        }}
        bgcolor="black"
        border="2px solid var(--white-main-color)"
        borderRadius="0.5rem"
        color="var(--white-main-color)"
        display="flex"
        flexDirection="column"
        height="30rem"
        left="50%"
        p="1rem"
        position="fixed"
        top="30%"
        width="60rem"
      >
        <>
          <Box display="flex" gap="1rem" height="100%" width="100%">
            <Box
              sx={{
                aspectRatio: "1",
                background: `url("${item.icon}") center center no-repeat`,
                backgroundSize: "cover",
              }}
              border="2px solid var(--white-main-color)"
              borderRadius="0.5rem"
              height="100%"
            />
            <Box
              display="flex"
              flexDirection="column"
              height="100%"
              width="100%"
            >
              <Typography textAlign="center" variant="h4">
                {t(item.name)}{" "}
              </Typography>
              <Typography fontSize="1rem" textAlign="center">
                [{t(item.type)}]
                <Typography
                  display="inline"
                  style={{ color: ITEM_RARITY_COLOR[item.rarity] }}
                >
                  [{t(item.rarity)}]
                </Typography>
              </Typography>
              <Typography mt="2rem" textAlign="center" variant="h6">
                {t(item.description)}
              </Typography>
            </Box>
            <Box />
          </Box>

          <Box display="flex" gap="1rem" mt="1rem">
            <Sale height="2rem" width="2rem" />
            <Equip height="2rem" width="2rem" />
            <Throw height="2rem" width="2rem" />
          </Box>
        </>
      </Box>
    </Modal>
  );
};
