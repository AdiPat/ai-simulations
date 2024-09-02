import { DataNode } from "../data-node";

type SimulatorModes = "normal" | "storyline" | "data-backed";

interface SimulatorOptions {
  iterations: number;
  numSentients?: number;
  numNonSentients?: number;
  maxPopulationSize?: number;
  godEventProbability?: number;
  spawnRate?: number;
  verbose?: boolean;
  temperature?: number;
  mode?: SimulatorModes;
  data?: DataNode[];
}

export type { SimulatorOptions, SimulatorModes };
