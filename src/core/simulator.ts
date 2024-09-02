/**
 * The simulator class is responsible for running the simulation.
 * @class Simulator
 *
 */

import { SimulatorOptions } from "../models/options/simulator.options";

class Simulator {
  private options: SimulatorOptions;
  private logs: string[] = [];
  private isRunning: boolean = false;
  private isPaused: boolean = false;

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
      name: options.name,
      description:
        options.description || "a generic simulation with nothing special",
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

  /**
   * Starts the simulation.
   */
  start(): void {
    this.isRunning = true;
    console.log(`SIMULATION '${this.options.name}' started.`);
  }

  /**
   * Stops the simulation.
   */
  stop(): void {
    this.isRunning = false;
    let message = `SIMULATION '${this.options.name}' stopped.`;
    this.log(message);
  }

  /**
   * Pauses the simulation.
   */
  pause(): void {
    this.isPaused = true;
    const message = `SIMULATION '${this.options.name}' paused.`;
    this.log(message);
  }

  /**
   * Resumes the simulation.
   */
  resume(): void {
    this.isPaused = false;
    const message = `SIMULATION '${this.options.name}' resumed.`;
    this.log(message);
  }

  /**
   * Logs a message.
   *
   * @param message Message to log.
   */
  log(message: string): void {
    this.logs.push(message);
    console.log(message);
  }

  /**
   * Gets the logs.
   *
   * @returns Logs.
   */
  getLogs(): string[] {
    return this.logs;
  }

  /**
   * Helper function to get the running state of the simulation.
   * @returns Running state of the simulation.
   */
  getRunningState(): boolean {
    return this.isRunning && !this.isPaused;
  }
}

export { Simulator };
