type EntityType = "sentient" | "non-sentient";

interface Entity {
  id?: string;
  name: string;
  description: string;
  type: EntityType;
  attributes?: Record<string, any>;
}

export type { Entity, EntityType };
