type StatMapType = Record<string, { desc: string; short: string }>;

export const STATS_MAP: StatMapType = {
  charisma: {
    desc: "Charisma - Increase change to deal with people",
    short: "CHR",
  },
  dexterity: {
    desc: "Dexterity - Increase attack speed and chance to doge attacks",
    short: "DEX",
  },
  faith: {
    desc: "Faith - ",
    short: "FTH",
  },
  intelligence: {
    desc: "Intelligence - Increase magic damage",
    short: "INT",
  },
  perception: {
    desc: "Perception - Increase chance to find items",
    short: "PRC",
  },
  strength: {
    desc: "Strength - Increase attack damage",
    short: "STR",
  },
};
