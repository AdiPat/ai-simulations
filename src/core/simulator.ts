/**
 * The simulator class is responsible for running the simulation.
 * @class Simulator
 *
 */

import { SimulatorOptions } from "../models/options/simulator.options";

class Simulator {
  private options: SimulatorOptions;

  constructor(options: SimulatorOptions) {
    this.options = this.initOptionsWithDefaults(options);
  }

  /**
   * Initializes the default options.
   *
   * @param options Provided options.
   * @returns options with default values wherever not specified.
   */
  initOptionsWithDefaults(options: SimulatorOptions): SimulatorOptions {
    return {
      iterations: options.iterations || 1000,
      numSentients: options.numSentients || 10,
      numNonSentients: options.numNonSentients || 10,
      maxPopulationSize: options.maxPopulationSize || 100,
      godEventProbability: options.godEventProbability || 0.1,
      spawnRate: options.spawnRate || 0.1,
      verbose: options.verbose || false,
      temperature: options.temperature || 0.5,
      mode: options.mode || "normal",
      data: options.data || [],
    };
  }
}
