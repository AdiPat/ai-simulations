import { SimulatorEvents } from "../common";
import { SimulatorEventEmitter } from "./simulator-event-emitter";
import fs from "fs/promises";
import { LogObject } from "../models";

class Logger {
  private logId: number;
  private logFilePath: string;
  private logWriterInterval: NodeJS.Timeout;
  private eventEmitter: SimulatorEventEmitter;
  private logs: LogObject[] = [];

  constructor(options?: { logFilePath?: string }) {
    options = options ?? {};
    this.logId = new Date().getTime();
    this.logFilePath =
      options.logFilePath ?? `logs/simulator_${this.logId}.log`;

    this.eventEmitter = new SimulatorEventEmitter();

    this.eventEmitter.on(
      SimulatorEvents.SYSTEM_LOG,
      this.logHandler.bind(this)
    );

    this.logWriterInterval = setInterval(
      (() => {
        this.writeLogsToFile(this.logFilePath);
      }).bind(this),
      1000
    );
  }

  private async writeLogsToFile(logFilePath: string): Promise<void> {
    const logs = JSON.stringify(this.logs, null, 2);

    await fs.writeFile(logFilePath, logs).catch((error) => {
      console.error("Error writing logs to file:", error);
    });
  }

  public stopLogWriter(): void {
    clearInterval(this.logWriterInterval);
  }

  public log(logItem: LogObject): void {
    this.eventEmitter.emit(SimulatorEvents.SYSTEM_LOG, logItem);
  }

  private logHandler(logItem: LogObject): void {
    this.logs.push(logItem);
  }

  public getLogs(): LogObject[] {
    return this.logs;
  }
}

const simulatorLogger = new Logger();

export { simulatorLogger, Logger };
