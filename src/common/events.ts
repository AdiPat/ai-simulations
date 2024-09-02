enum SimulatorEvents {
  SYSTEM_LOG = "simulator:log",
  SYSTEM_ERROR = "simulator:error",
  SIMULATOR_START = "simulator:start",
  SIMULATOR_STOP = "simulator:stop",
  SIMULATOR_PAUSE = "simulator:pause",
  SIMULATOR_RESUME = "simulator:resume",
  ENVIRONMENT_EVENT_GENERATED = "environment:event:generated",
}

export { SimulatorEvents };
