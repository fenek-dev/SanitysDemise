import _ from "lodash";
import { EventType } from "./types";

const createDistribution = (weights: number[], size: number) => {
  const distribution = [];
  const sum = weights.reduce((a, b) => a + b);
  const quant = size / sum;
  for (let i = 0; i < weights.length; ++i) {
    const limit = quant * weights[i];
    for (let j = 0; j < limit; ++j) {
      distribution.push(i);
    }
  }
  return distribution;
};

const randomIndex = (distribution: number[]) => {
  const index = Math.floor(distribution.length * Math.random()); // random index
  return distribution[index];
};

const randomItem = <T>(array: T[], distribution: number[]) => {
  const index = randomIndex(distribution);
  return array[index];
};

export const getEventByChance = (events: EventType[]) => {
  const weights = _.map(events, (e) => e.chance);
  const distribution = createDistribution(weights, _.size(events));
  return randomItem(events, distribution);
};
