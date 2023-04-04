import { DIFFICULTIES } from "../maps/difficulties";

export interface DevourerType {
  name: string;
  shortDescription: React.ReactNode;
  cardImage: string;
  defaultEffects: unknown[];
  difficulty: keyof typeof DIFFICULTIES;
}
