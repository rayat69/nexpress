declare module "nexpress" {
  import { IncomingMessage, ServerResponse } from "http";

  type NextHandler = (err?: any) => void;
  type Middleware<T, S> = NextConnect<T, S> | RequestHandler<T, S>;

  type RequestHandler<T, S> = (
    req: T,
    res: S,
    next: NextHandler
  ) => any | Promise<any>;

  type Req<T extends any> = T & {
    // '{}' can be replaced with 'any'
    allowedMethod: string[];
  };

  type ErrorHandler<T, S> = (
    err: any,
    req: Req<T>,
    res: S,
    next: NextHandler
  ) => any | Promise<any>;

  interface Options<T, S> {
    onError?: ErrorHandler<T, S>;
    onNoMatch?: RequestHandler<T, S>;
    attachParams?: boolean;
  }

  function NextConnect<U, V>(req: U, res: V): Promise<void>;

  interface NextConnect<U, V> {
    use<T = {}, S = {}>(...handlers: Middleware<U & T, V & S>[]): this;
    use<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: Middleware<U & T, V & S>[]
    ): this;

    all<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    all<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    get<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    get<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    head<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    head<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    post<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    post<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    put<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    put<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    delete<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    delete<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    options<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    options<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    trace<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    trace<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    patch<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    patch<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    copy<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    copy<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    link<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    link<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    unlink<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    unlink<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    purge<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    purge<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    lock<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    lock<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    unlock<T = {}, S = {}>(...handlers: RequestHandler<U & T, V & S>[]): this;
    unlock<T = {}, S = {}>(
      pattern: string | RegExp,
      ...handlers: RequestHandler<U & T, V & S>[]
    ): this;

    run(req: U, res: V): Promise<void>;

    handle(req: U, res: V, done: NextHandler): void;
  }

  export default function <T = IncomingMessage, S = ServerResponse>(
    options?: Options<T, S>
  ): NextConnect<T, S>;
}
