import { RootState } from "@/app/store";

export type ApplyableCharacterStats = "hp" | "money" | "sp";

export interface EventType {
  chance: number; // up to 100
  name: string;
  stages: Record<string, EventStageType>;
}

export interface EventStageType {
  buttons: EventStageButtonType[];
  description: string;
  effects?: EventEffectStageType[];
  image: string;
  name: string;
}

export interface EventEffectStageType {
  stat: ApplyableCharacterStats;
  value: number;
}

export interface EventStageButtonType {
  action: (state: RootState["character"]) => [RootState["character"], string];
  checkText?: string;
  text: string;
}
