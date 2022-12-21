declare global {
  namespace NodeJS {
    interface ProcessEnv {
      INPUT_LIMIT: number;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
