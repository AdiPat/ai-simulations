import { Entity } from "./entity";

interface Environment {
  id?: string;
  name: string;
  description: string;
  entities: Entity[];
  attributes?: Record<string, any>;
}

export type { Environment };
