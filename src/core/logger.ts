import { SimulatorEvents } from "../common";
import { SimulatorEventEmitter } from "./simulator-event-emitter";

interface LogObject {
  event: string;
  message: string;
  data?: Record<string, any>;
}

class Logger {
  private eventEmitter: SimulatorEventEmitter;
  private logs: LogObject[] = [];

  constructor() {
    this.eventEmitter = new SimulatorEventEmitter();

    this.eventEmitter.on(
      SimulatorEvents.SYSTEM_LOG,
      this.logHandler.bind(this)
    );
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
