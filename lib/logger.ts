type LogLevel = "info" | "warn" | "error";

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

function formatEntry(entry: LogEntry): string {
  return JSON.stringify(entry);
}

export const logger = {
  info(message: string, context?: Record<string, unknown>): void {
    const entry: LogEntry = {
      level: "info",
      message,
      context,
      timestamp: new Date().toISOString(),
    };
    if (process.env.NODE_ENV !== "test") {
      console.info(formatEntry(entry));
    }
  },

  warn(message: string, context?: Record<string, unknown>): void {
    const entry: LogEntry = {
      level: "warn",
      message,
      context,
      timestamp: new Date().toISOString(),
    };
    if (process.env.NODE_ENV !== "test") {
      console.warn(formatEntry(entry));
    }
  },

  error(message: string, context?: Record<string, unknown>): void {
    const entry: LogEntry = {
      level: "error",
      message,
      context,
      timestamp: new Date().toISOString(),
    };
    // Always log errors regardless of environment
    console.error(formatEntry(entry));
  },
};
