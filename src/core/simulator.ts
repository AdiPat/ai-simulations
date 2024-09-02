/**
 * The simulator class is responsible for running the simulation.
 * @class Simulator
 *
 */

import { AI } from ".";
import { SimulatorOptions } from "../models/options/simulator.options";
import { SimulatorEventEmitter } from "./simulator-event-emitter";

class Simulator {
  private options: SimulatorOptions;
  private logs: string[] = [];
  private isRunning: boolean = false;
  private isPaused: boolean = false;
  private eventEmitter: SimulatorEventEmitter;

  constructor(options: SimulatorOptions) {
    this.options = this.initOptionsWithDefaults(options);
    this.eventEmitter = new SimulatorEventEmitter();
    this.init();
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
      environment: options.environment,
    };
  }

  init(): void {
    this.setupEventListeners();
  }

  setupEventListeners(): void {
    if (!this.eventEmitter) {
      this.eventEmitter = new SimulatorEventEmitter();
    }

    this.eventEmitter.registerEvent("simulator:log", (data) => {
      if (typeof data === "string") {
        this.log(data);
      } else if (typeof data === "object") {
        this.log(JSON.stringify(data, null, 2));
      }
    });
  }

  /**
   * Starts the simulation.
   */
  start(): void {
    this.isRunning = true;
    const message = `SIMULATION '${this.options.name}' started.`;
    this.logEvent("simulator:start", message);
  }

  /**
   * Stops the simulation.
   */
  stop(): void {
    this.isRunning = false;
    const message = `SIMULATION '${this.options.name}' stopped.`;
    this.logEvent("simulator:stop", message);
  }

  /**
   * Pauses the simulation.
   */
  pause(): void {
    this.isPaused = true;
    const message = `SIMULATION '${this.options.name}' paused.`;
    this.logEvent("simulator:pause", message);
  }

  /**
   * Resumes the simulation.
   */
  resume(): void {
    this.isPaused = false;
    const message = `SIMULATION '${this.options.name}' resumed.`;
    this.logEvent("simulator:resume", message);
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
   * Logs event using the event emitter.
   *
   * @param event event to be logged
   * @param message log message
   */
  logEvent(event: string, message: string): void {
    this.eventEmitter.emitEvent("simulator:log", {
      event,
      message,
    });
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

  /**
   * Describes the environment.
   * @returns Description of the environment.
   */
  async describeEnvironment(): Promise<string> {
    try {
      const environment = this.options.environment;

      const nlDescription = await AI.llm({
        prompt: `"Describe the given environment for a simulation. 
                    Environment: ${JSON.stringify(environment, null, 2)}`,
      });

      this.log(`ENVIRONMENT DESCRIPTION: ${nlDescription}`);

      return nlDescription;
    } catch (error) {
      console.error("Error describing the environment:", error);

      this.log("Error describing the environment.");

      return "";
    }
  }
}

export { Simulator };
