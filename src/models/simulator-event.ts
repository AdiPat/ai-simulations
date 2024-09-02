interface SimulatorEvent {
  id?: string;
  name: string;
  description: string;
  type: string;
  attributes?: Record<string, any>;
}

export type { SimulatorEvent };
