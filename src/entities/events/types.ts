import { RootState } from "@/app/store";

export type ApplyableCharacterStats = "hp" | "sp" | "money";

export interface EventType {
  name: string;
  chance: number; // up to 100
  stages: Record<string, EventStageType>;
}

export interface EventStageType {
  name: string;
  description: string;
  image: string;
  effects?: EventEffectStageType[];
  buttons: EventStageButtonType[];
}

export interface EventEffectStageType {
  value: number;
  stat: ApplyableCharacterStats;
}

export interface EventStageButtonType {
  text: string;
  checkText?: string;
  action: (state: RootState["character"]) => [RootState["character"], string];
}
