import { ITEM_RARITY_COLOR } from "@/entities/items";
import { ItemType } from "@/entities/items/types";
import { Avatar, Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as Equip } from "@/app/assets/modal/equip.svg";
import { ReactComponent as Sale } from "@/app/assets/modal/Sale.svg";
import { ReactComponent as Throw } from "@/app/assets/modal/throw.svg";

interface ItemModelProps {
  open: boolean;
  onClose: () => void;
  item: ItemType;
}

export const ItemModal = ({ open, onClose, item }: ItemModelProps) => {
  const { t } = useTranslation();
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        position="fixed"
        top="30%"
        left="50%"
        width="60rem"
        height="30rem"
        p="1rem"
        bgcolor="black"
        color="var(--white-main-color)"
        borderRadius="0.5rem"
        border="2px solid var(--white-main-color)"
        display="flex"
        flexDirection="column"
        sx={{
          transform: "translate(-50%, -30%)",
        }}
      >
        <>
          <Box display="flex" gap="1rem" height="100%" width="100%">
            <Box
              height="100%"
              borderRadius="0.5rem"
              border="2px solid var(--white-main-color)"
              sx={{
                background: `url("${item.icon}") center center no-repeat`,
                backgroundSize: "cover",
                aspectRatio: "1",
              }}
            />
            <Box
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
            >
              <Typography variant="h4" textAlign="center">
                {t(item.name)}{" "}
              </Typography>
              <Typography textAlign="center" fontSize="1rem">
                [{t(item.type)}]
                <Typography
                  display="inline"
                  style={{ color: ITEM_RARITY_COLOR[item.rarity] }}
                >
                  [{t(item.rarity)}]
                </Typography>
              </Typography>
              <Typography variant="h6" textAlign="center" mt="2rem">
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
