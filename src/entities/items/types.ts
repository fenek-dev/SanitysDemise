export type ItemRarities = "common" | "unique";

export type ItemTypes = "consumable" | "weapon";

export interface ItemType {
  cost: number;
  description: string;
  equipable: boolean;
  icon: string;
  name: string;
  rarity: ItemRarities;
  saleable: boolean;
  throwable: boolean;
  type: ItemTypes;
}

export interface WeaponType extends ItemType {
  dmg_up: number;
  type: "weapon";
}
