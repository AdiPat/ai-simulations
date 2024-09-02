/**
 *
 * EnvironmentSandbox: Executes the environment.
 *
 */

import { SimulatorEvents, Utils } from "../common";
import { AI } from ".";
import { Environment, SimulatorEvent } from "../models";
import { SimulatorEventEmitter } from "./simulator-event-emitter";
import { simulatorLogger } from "./logger";
import { SystemPrompts } from "./constants";

class EnvironmentSandbox {
  private eventEmitter: SimulatorEventEmitter;
  private environment: Environment;

  constructor(environment: Environment, eventEmitter: SimulatorEventEmitter) {
    this.eventEmitter = eventEmitter;
    this.environment = environment;
  }

  async getNextEnvironmentEvent(): Promise<SimulatorEvent> {
    try {
      // the event schema needs to be kept up-to-date with models/simulator-event.ts
      // TODO: find a way to generate this event at runtime based on the environment
      // for now we generate a system event as a placeholder
      // if the schema changes, the function will break and need to be updated
      const promptSchemaEvent = await this.generateSystemEvent({
        usage: "prompt-schema",
      });

      const prompt = `
        You are given the environment for a simulator application. 
        Given the environment, it generates an event that can be used to simulate the environment within a sandbox. 
        What event do you want to generate?
        Return the response as JSON object with the given schema.
        Event: ${JSON.stringify(promptSchemaEvent)}

    `;

      const response = await AI.llm({
        system: SystemPrompts.GENERIC,
        prompt,
      });

      const json = Utils.cleanGPTJson(response.text);

      const event = Utils.parseJSON(json);

      if (!event) {
        simulatorLogger.log({
          event: SimulatorEvents.SYSTEM_ERROR,
          message: "Failed to generate event from AI response. ",
        });
        return null;
      }

      return event;
    } catch (error) {
      simulatorLogger.log({
        event: SimulatorEvents.SYSTEM_ERROR,
        message: "Failed to generate event from AI response. ",
        data: {
          error,
        },
      });
      return null;
    }
  }

  async generateSystemEvent(
    attributes?: Record<string, any>
  ): Promise<SimulatorEvent> {
    return {
      id: "system-event-" + new Date().getTime(),
      name: "System Event",
      description: "System Event",
      type: "system",
      attributes: {
        time: new Date().getTime(),
        message: "System Event",
        ...(attributes ?? {}),
      },
    };
  }
}
