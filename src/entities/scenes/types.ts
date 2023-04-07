export interface SceneType {
  name: string;
  stages: SceneStageType[];
}

export interface SceneStageType {
  image: string;
  subtitle: string;
}
