type LogLevel = "info" | "warn" | "error";

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

function normalizeError(error: unknown): Record<string, unknown> {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  return { value: error };
}

function formatEntry(entry: LogEntry): string {
  return JSON.stringify(entry);
}

function write(level: LogLevel, message: string, context?: Record<string, unknown>): void {
  const entry: LogEntry = {
    level,
    message,
    context,
    timestamp: new Date().toISOString(),
  };

  const payload = formatEntry(entry);

  if (level === "error") {
    console.error(payload);
    return;
  }

  if (process.env.NODE_ENV === "test") {
    return;
  }

  if (level === "warn") {
    console.warn(payload);
    return;
  }

  console.info(payload);
}

export const logger = {
  info(message: string, context?: Record<string, unknown>): void {
    write("info", message, context);
  },

  warn(message: string, context?: Record<string, unknown>): void {
    write("warn", message, context);
  },

  error(message: string, context?: Record<string, unknown>): void {
    write("error", message, context);
  },

  captureException(error: unknown, context?: Record<string, unknown>): void {
    write("error", "Captured exception", {
      ...normalizeError(error),
      ...context,
    });
  },
};
