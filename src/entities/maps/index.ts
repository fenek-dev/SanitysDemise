type StatMapType = Record<string, { short: string; desc: string }>;

export const STATS_MAP: StatMapType = {
  charisma: {
    short: "CHR",
    desc: "Charisma - Increase change to deal with people",
  },
  dexterity: {
    short: "DEX",
    desc: "Dexterity - Increase attack speed and chance to doge attacks",
  },
  faith: {
    short: "FTH",
    desc: "Faith - ",
  },
  intelligence: {
    short: "INT",
    desc: "Intelligence - Increase magic damage",
  },
  perception: {
    short: "PRC",
    desc: "Perception - Increase chance to find items",
  },
  strength: {
    short: "STR",
    desc: "Strength - Increase attack damage",
  },
};
