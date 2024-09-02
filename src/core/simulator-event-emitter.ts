import { EventEmitter } from "events";

class SimulatorEventEmitter extends EventEmitter {
  constructor() {
    super();
  }

  public emitEvent(event: string, data: any) {
    this.emit(event, data);
  }

  public registerEvent(event: string, listener: (...args: any[]) => void) {
    this.on(event, listener);
  }
}

export { SimulatorEventEmitter };
