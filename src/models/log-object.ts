interface LogObject {
  event: string;
  message: string;
  data?: Record<string, any>;
}

export type { LogObject };
