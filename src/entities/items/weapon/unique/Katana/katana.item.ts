import { ItemType, WeaponType } from "../../../types";

import icon from "./icon.png";

export const Katana_weapon: WeaponType = {
  name: "Katana",
  type: "weapon",
  description: "Lucian's katana",
  icon,
  rarity: "unique",
  saleable: false,
  throwable: true,
  equipable: true,
  cost: 0,
  dmg_up: 3,
};
