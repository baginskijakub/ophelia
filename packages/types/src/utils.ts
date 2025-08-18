type ErrorType = "unique-constraint" | "not-found" | "server-error";

export type ResultPromise<T> = Promise<
  | {
      data: T;
      error: null;
    }
  | {
      data: null;
      error: ErrorType;
    }
>;

export type Validation =
  | {
      valid: true;
      error: null;
    }
  | {
      valid: false;
      error: string;
    };
