export type ItemRarities = "common" | "unique";

export type ItemTypes = "weapon" | "consumable";

export interface ItemType {
  name: string;
  description: string;
  icon: string;
  type: ItemTypes;
  rarity: ItemRarities;
  saleable: boolean;
  throwable: boolean;
  equipable: boolean;
  cost: number;
}

export interface WeaponType extends ItemType {
  type: "weapon";
  dmg_up: number;
}
