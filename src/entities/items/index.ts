import { Katana_weapon } from "./weapon/unique/Katana/katana.item";

export const UNIQUE_WEAPONS = {
  [Katana_weapon.name]: Katana_weapon,
};

export const ALL_WEAPONS = {
  unique: UNIQUE_WEAPONS,
};

export const ALL_ITEMS = {
  weapons: ALL_WEAPONS,
};

export const ITEM_RARITY_COLOR = {
  common: "var(--item-common-color)",
  unique: "var(--item-unique-color)",
};
