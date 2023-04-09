export type ItemRarities = "common" | "unique";

export type ItemTypes = "weapon" | "consumable";

export interface ItemType {
  name: string;
  description: string;
  icon: string;
  type: ItemTypes;
  rarity: ItemRarities;
}

export interface WeaponType extends ItemType {
  type: "weapon";
  DmgUp: number;
}
