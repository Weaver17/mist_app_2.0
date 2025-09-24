
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Screenshot
 * 
 */
export type Screenshot = $Result.DefaultSelection<Prisma.$ScreenshotPayload>
/**
 * Model MinimumSystemRequirements
 * 
 */
export type MinimumSystemRequirements = $Result.DefaultSelection<Prisma.$MinimumSystemRequirementsPayload>
/**
 * Model SavedGame
 * 
 */
export type SavedGame = $Result.DefaultSelection<Prisma.$SavedGamePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Screenshots
 * const screenshots = await prisma.screenshot.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Screenshots
   * const screenshots = await prisma.screenshot.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.screenshot`: Exposes CRUD operations for the **Screenshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Screenshots
    * const screenshots = await prisma.screenshot.findMany()
    * ```
    */
  get screenshot(): Prisma.ScreenshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.minimumSystemRequirements`: Exposes CRUD operations for the **MinimumSystemRequirements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MinimumSystemRequirements
    * const minimumSystemRequirements = await prisma.minimumSystemRequirements.findMany()
    * ```
    */
  get minimumSystemRequirements(): Prisma.MinimumSystemRequirementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedGame`: Exposes CRUD operations for the **SavedGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedGames
    * const savedGames = await prisma.savedGame.findMany()
    * ```
    */
  get savedGame(): Prisma.SavedGameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Screenshot: 'Screenshot',
    MinimumSystemRequirements: 'MinimumSystemRequirements',
    SavedGame: 'SavedGame',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "screenshot" | "minimumSystemRequirements" | "savedGame" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Screenshot: {
        payload: Prisma.$ScreenshotPayload<ExtArgs>
        fields: Prisma.ScreenshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreenshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreenshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          findFirst: {
            args: Prisma.ScreenshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreenshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          findMany: {
            args: Prisma.ScreenshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>[]
          }
          create: {
            args: Prisma.ScreenshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          createMany: {
            args: Prisma.ScreenshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScreenshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>[]
          }
          delete: {
            args: Prisma.ScreenshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          update: {
            args: Prisma.ScreenshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          deleteMany: {
            args: Prisma.ScreenshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScreenshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScreenshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>[]
          }
          upsert: {
            args: Prisma.ScreenshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          aggregate: {
            args: Prisma.ScreenshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreenshot>
          }
          groupBy: {
            args: Prisma.ScreenshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScreenshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScreenshotCountArgs<ExtArgs>
            result: $Utils.Optional<ScreenshotCountAggregateOutputType> | number
          }
        }
      }
      MinimumSystemRequirements: {
        payload: Prisma.$MinimumSystemRequirementsPayload<ExtArgs>
        fields: Prisma.MinimumSystemRequirementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MinimumSystemRequirementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinimumSystemRequirementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MinimumSystemRequirementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinimumSystemRequirementsPayload>
          }
          findFirst: {
            args: Prisma.MinimumSystemRequirementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinimumSystemRequirementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MinimumSystemRequirementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinimumSystemRequirementsPayload>
          }
          findMany: {
            args: Prisma.MinimumSystemRequirementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinimumSystemRequirementsPayload>[]
          }
          create: {
            args: Prisma.MinimumSystemRequirementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinimumSystemRequirementsPayload>
          }
          createMany: {
            args: Prisma.MinimumSystemRequirementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MinimumSystemRequirementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinimumSystemRequirementsPayload>[]
          }
          delete: {
            args: Prisma.MinimumSystemRequirementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinimumSystemRequirementsPayload>
          }
          update: {
            args: Prisma.MinimumSystemRequirementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinimumSystemRequirementsPayload>
          }
          deleteMany: {
            args: Prisma.MinimumSystemRequirementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MinimumSystemRequirementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MinimumSystemRequirementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinimumSystemRequirementsPayload>[]
          }
          upsert: {
            args: Prisma.MinimumSystemRequirementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinimumSystemRequirementsPayload>
          }
          aggregate: {
            args: Prisma.MinimumSystemRequirementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMinimumSystemRequirements>
          }
          groupBy: {
            args: Prisma.MinimumSystemRequirementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MinimumSystemRequirementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MinimumSystemRequirementsCountArgs<ExtArgs>
            result: $Utils.Optional<MinimumSystemRequirementsCountAggregateOutputType> | number
          }
        }
      }
      SavedGame: {
        payload: Prisma.$SavedGamePayload<ExtArgs>
        fields: Prisma.SavedGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGamePayload>
          }
          findFirst: {
            args: Prisma.SavedGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGamePayload>
          }
          findMany: {
            args: Prisma.SavedGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGamePayload>[]
          }
          create: {
            args: Prisma.SavedGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGamePayload>
          }
          createMany: {
            args: Prisma.SavedGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGamePayload>[]
          }
          delete: {
            args: Prisma.SavedGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGamePayload>
          }
          update: {
            args: Prisma.SavedGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGamePayload>
          }
          deleteMany: {
            args: Prisma.SavedGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedGameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGamePayload>[]
          }
          upsert: {
            args: Prisma.SavedGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGamePayload>
          }
          aggregate: {
            args: Prisma.SavedGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedGame>
          }
          groupBy: {
            args: Prisma.SavedGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedGameCountArgs<ExtArgs>
            result: $Utils.Optional<SavedGameCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    screenshot?: ScreenshotOmit
    minimumSystemRequirements?: MinimumSystemRequirementsOmit
    savedGame?: SavedGameOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SavedGameCountOutputType
   */

  export type SavedGameCountOutputType = {
    screenshots: number
  }

  export type SavedGameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screenshots?: boolean | SavedGameCountOutputTypeCountScreenshotsArgs
  }

  // Custom InputTypes
  /**
   * SavedGameCountOutputType without action
   */
  export type SavedGameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGameCountOutputType
     */
    select?: SavedGameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SavedGameCountOutputType without action
   */
  export type SavedGameCountOutputTypeCountScreenshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenshotWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    savedGames: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedGames?: boolean | UserCountOutputTypeCountSavedGamesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedGameWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Screenshot
   */

  export type AggregateScreenshot = {
    _count: ScreenshotCountAggregateOutputType | null
    _avg: ScreenshotAvgAggregateOutputType | null
    _sum: ScreenshotSumAggregateOutputType | null
    _min: ScreenshotMinAggregateOutputType | null
    _max: ScreenshotMaxAggregateOutputType | null
  }

  export type ScreenshotAvgAggregateOutputType = {
    id: number | null
  }

  export type ScreenshotSumAggregateOutputType = {
    id: number | null
  }

  export type ScreenshotMinAggregateOutputType = {
    id: number | null
    image: string | null
    savedGameId: string | null
  }

  export type ScreenshotMaxAggregateOutputType = {
    id: number | null
    image: string | null
    savedGameId: string | null
  }

  export type ScreenshotCountAggregateOutputType = {
    id: number
    image: number
    savedGameId: number
    _all: number
  }


  export type ScreenshotAvgAggregateInputType = {
    id?: true
  }

  export type ScreenshotSumAggregateInputType = {
    id?: true
  }

  export type ScreenshotMinAggregateInputType = {
    id?: true
    image?: true
    savedGameId?: true
  }

  export type ScreenshotMaxAggregateInputType = {
    id?: true
    image?: true
    savedGameId?: true
  }

  export type ScreenshotCountAggregateInputType = {
    id?: true
    image?: true
    savedGameId?: true
    _all?: true
  }

  export type ScreenshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screenshot to aggregate.
     */
    where?: ScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenshots to fetch.
     */
    orderBy?: ScreenshotOrderByWithRelationInput | ScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Screenshots
    **/
    _count?: true | ScreenshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScreenshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScreenshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreenshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreenshotMaxAggregateInputType
  }

  export type GetScreenshotAggregateType<T extends ScreenshotAggregateArgs> = {
        [P in keyof T & keyof AggregateScreenshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreenshot[P]>
      : GetScalarType<T[P], AggregateScreenshot[P]>
  }




  export type ScreenshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenshotWhereInput
    orderBy?: ScreenshotOrderByWithAggregationInput | ScreenshotOrderByWithAggregationInput[]
    by: ScreenshotScalarFieldEnum[] | ScreenshotScalarFieldEnum
    having?: ScreenshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreenshotCountAggregateInputType | true
    _avg?: ScreenshotAvgAggregateInputType
    _sum?: ScreenshotSumAggregateInputType
    _min?: ScreenshotMinAggregateInputType
    _max?: ScreenshotMaxAggregateInputType
  }

  export type ScreenshotGroupByOutputType = {
    id: number
    image: string
    savedGameId: string
    _count: ScreenshotCountAggregateOutputType | null
    _avg: ScreenshotAvgAggregateOutputType | null
    _sum: ScreenshotSumAggregateOutputType | null
    _min: ScreenshotMinAggregateOutputType | null
    _max: ScreenshotMaxAggregateOutputType | null
  }

  type GetScreenshotGroupByPayload<T extends ScreenshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreenshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreenshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreenshotGroupByOutputType[P]>
            : GetScalarType<T[P], ScreenshotGroupByOutputType[P]>
        }
      >
    >


  export type ScreenshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    savedGameId?: boolean
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenshot"]>

  export type ScreenshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    savedGameId?: boolean
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenshot"]>

  export type ScreenshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    savedGameId?: boolean
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenshot"]>

  export type ScreenshotSelectScalar = {
    id?: boolean
    image?: boolean
    savedGameId?: boolean
  }

  export type ScreenshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "savedGameId", ExtArgs["result"]["screenshot"]>
  export type ScreenshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }
  export type ScreenshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }
  export type ScreenshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }

  export type $ScreenshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Screenshot"
    objects: {
      savedGame: Prisma.$SavedGamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      savedGameId: string
    }, ExtArgs["result"]["screenshot"]>
    composites: {}
  }

  type ScreenshotGetPayload<S extends boolean | null | undefined | ScreenshotDefaultArgs> = $Result.GetResult<Prisma.$ScreenshotPayload, S>

  type ScreenshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScreenshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScreenshotCountAggregateInputType | true
    }

  export interface ScreenshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Screenshot'], meta: { name: 'Screenshot' } }
    /**
     * Find zero or one Screenshot that matches the filter.
     * @param {ScreenshotFindUniqueArgs} args - Arguments to find a Screenshot
     * @example
     * // Get one Screenshot
     * const screenshot = await prisma.screenshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScreenshotFindUniqueArgs>(args: SelectSubset<T, ScreenshotFindUniqueArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Screenshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScreenshotFindUniqueOrThrowArgs} args - Arguments to find a Screenshot
     * @example
     * // Get one Screenshot
     * const screenshot = await prisma.screenshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScreenshotFindUniqueOrThrowArgs>(args: SelectSubset<T, ScreenshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screenshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotFindFirstArgs} args - Arguments to find a Screenshot
     * @example
     * // Get one Screenshot
     * const screenshot = await prisma.screenshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScreenshotFindFirstArgs>(args?: SelectSubset<T, ScreenshotFindFirstArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screenshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotFindFirstOrThrowArgs} args - Arguments to find a Screenshot
     * @example
     * // Get one Screenshot
     * const screenshot = await prisma.screenshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScreenshotFindFirstOrThrowArgs>(args?: SelectSubset<T, ScreenshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Screenshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Screenshots
     * const screenshots = await prisma.screenshot.findMany()
     * 
     * // Get first 10 Screenshots
     * const screenshots = await prisma.screenshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screenshotWithIdOnly = await prisma.screenshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScreenshotFindManyArgs>(args?: SelectSubset<T, ScreenshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Screenshot.
     * @param {ScreenshotCreateArgs} args - Arguments to create a Screenshot.
     * @example
     * // Create one Screenshot
     * const Screenshot = await prisma.screenshot.create({
     *   data: {
     *     // ... data to create a Screenshot
     *   }
     * })
     * 
     */
    create<T extends ScreenshotCreateArgs>(args: SelectSubset<T, ScreenshotCreateArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Screenshots.
     * @param {ScreenshotCreateManyArgs} args - Arguments to create many Screenshots.
     * @example
     * // Create many Screenshots
     * const screenshot = await prisma.screenshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScreenshotCreateManyArgs>(args?: SelectSubset<T, ScreenshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Screenshots and returns the data saved in the database.
     * @param {ScreenshotCreateManyAndReturnArgs} args - Arguments to create many Screenshots.
     * @example
     * // Create many Screenshots
     * const screenshot = await prisma.screenshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Screenshots and only return the `id`
     * const screenshotWithIdOnly = await prisma.screenshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScreenshotCreateManyAndReturnArgs>(args?: SelectSubset<T, ScreenshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Screenshot.
     * @param {ScreenshotDeleteArgs} args - Arguments to delete one Screenshot.
     * @example
     * // Delete one Screenshot
     * const Screenshot = await prisma.screenshot.delete({
     *   where: {
     *     // ... filter to delete one Screenshot
     *   }
     * })
     * 
     */
    delete<T extends ScreenshotDeleteArgs>(args: SelectSubset<T, ScreenshotDeleteArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Screenshot.
     * @param {ScreenshotUpdateArgs} args - Arguments to update one Screenshot.
     * @example
     * // Update one Screenshot
     * const screenshot = await prisma.screenshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScreenshotUpdateArgs>(args: SelectSubset<T, ScreenshotUpdateArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Screenshots.
     * @param {ScreenshotDeleteManyArgs} args - Arguments to filter Screenshots to delete.
     * @example
     * // Delete a few Screenshots
     * const { count } = await prisma.screenshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScreenshotDeleteManyArgs>(args?: SelectSubset<T, ScreenshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Screenshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Screenshots
     * const screenshot = await prisma.screenshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScreenshotUpdateManyArgs>(args: SelectSubset<T, ScreenshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Screenshots and returns the data updated in the database.
     * @param {ScreenshotUpdateManyAndReturnArgs} args - Arguments to update many Screenshots.
     * @example
     * // Update many Screenshots
     * const screenshot = await prisma.screenshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Screenshots and only return the `id`
     * const screenshotWithIdOnly = await prisma.screenshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScreenshotUpdateManyAndReturnArgs>(args: SelectSubset<T, ScreenshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Screenshot.
     * @param {ScreenshotUpsertArgs} args - Arguments to update or create a Screenshot.
     * @example
     * // Update or create a Screenshot
     * const screenshot = await prisma.screenshot.upsert({
     *   create: {
     *     // ... data to create a Screenshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Screenshot we want to update
     *   }
     * })
     */
    upsert<T extends ScreenshotUpsertArgs>(args: SelectSubset<T, ScreenshotUpsertArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Screenshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotCountArgs} args - Arguments to filter Screenshots to count.
     * @example
     * // Count the number of Screenshots
     * const count = await prisma.screenshot.count({
     *   where: {
     *     // ... the filter for the Screenshots we want to count
     *   }
     * })
    **/
    count<T extends ScreenshotCountArgs>(
      args?: Subset<T, ScreenshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreenshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Screenshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScreenshotAggregateArgs>(args: Subset<T, ScreenshotAggregateArgs>): Prisma.PrismaPromise<GetScreenshotAggregateType<T>>

    /**
     * Group by Screenshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScreenshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreenshotGroupByArgs['orderBy'] }
        : { orderBy?: ScreenshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScreenshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreenshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Screenshot model
   */
  readonly fields: ScreenshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Screenshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreenshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedGame<T extends SavedGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SavedGameDefaultArgs<ExtArgs>>): Prisma__SavedGameClient<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Screenshot model
   */
  interface ScreenshotFieldRefs {
    readonly id: FieldRef<"Screenshot", 'Int'>
    readonly image: FieldRef<"Screenshot", 'String'>
    readonly savedGameId: FieldRef<"Screenshot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Screenshot findUnique
   */
  export type ScreenshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which Screenshot to fetch.
     */
    where: ScreenshotWhereUniqueInput
  }

  /**
   * Screenshot findUniqueOrThrow
   */
  export type ScreenshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which Screenshot to fetch.
     */
    where: ScreenshotWhereUniqueInput
  }

  /**
   * Screenshot findFirst
   */
  export type ScreenshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which Screenshot to fetch.
     */
    where?: ScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenshots to fetch.
     */
    orderBy?: ScreenshotOrderByWithRelationInput | ScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screenshots.
     */
    cursor?: ScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screenshots.
     */
    distinct?: ScreenshotScalarFieldEnum | ScreenshotScalarFieldEnum[]
  }

  /**
   * Screenshot findFirstOrThrow
   */
  export type ScreenshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which Screenshot to fetch.
     */
    where?: ScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenshots to fetch.
     */
    orderBy?: ScreenshotOrderByWithRelationInput | ScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screenshots.
     */
    cursor?: ScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screenshots.
     */
    distinct?: ScreenshotScalarFieldEnum | ScreenshotScalarFieldEnum[]
  }

  /**
   * Screenshot findMany
   */
  export type ScreenshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which Screenshots to fetch.
     */
    where?: ScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenshots to fetch.
     */
    orderBy?: ScreenshotOrderByWithRelationInput | ScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Screenshots.
     */
    cursor?: ScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenshots.
     */
    skip?: number
    distinct?: ScreenshotScalarFieldEnum | ScreenshotScalarFieldEnum[]
  }

  /**
   * Screenshot create
   */
  export type ScreenshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * The data needed to create a Screenshot.
     */
    data: XOR<ScreenshotCreateInput, ScreenshotUncheckedCreateInput>
  }

  /**
   * Screenshot createMany
   */
  export type ScreenshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Screenshots.
     */
    data: ScreenshotCreateManyInput | ScreenshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Screenshot createManyAndReturn
   */
  export type ScreenshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * The data used to create many Screenshots.
     */
    data: ScreenshotCreateManyInput | ScreenshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Screenshot update
   */
  export type ScreenshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * The data needed to update a Screenshot.
     */
    data: XOR<ScreenshotUpdateInput, ScreenshotUncheckedUpdateInput>
    /**
     * Choose, which Screenshot to update.
     */
    where: ScreenshotWhereUniqueInput
  }

  /**
   * Screenshot updateMany
   */
  export type ScreenshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Screenshots.
     */
    data: XOR<ScreenshotUpdateManyMutationInput, ScreenshotUncheckedUpdateManyInput>
    /**
     * Filter which Screenshots to update
     */
    where?: ScreenshotWhereInput
    /**
     * Limit how many Screenshots to update.
     */
    limit?: number
  }

  /**
   * Screenshot updateManyAndReturn
   */
  export type ScreenshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * The data used to update Screenshots.
     */
    data: XOR<ScreenshotUpdateManyMutationInput, ScreenshotUncheckedUpdateManyInput>
    /**
     * Filter which Screenshots to update
     */
    where?: ScreenshotWhereInput
    /**
     * Limit how many Screenshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Screenshot upsert
   */
  export type ScreenshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * The filter to search for the Screenshot to update in case it exists.
     */
    where: ScreenshotWhereUniqueInput
    /**
     * In case the Screenshot found by the `where` argument doesn't exist, create a new Screenshot with this data.
     */
    create: XOR<ScreenshotCreateInput, ScreenshotUncheckedCreateInput>
    /**
     * In case the Screenshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreenshotUpdateInput, ScreenshotUncheckedUpdateInput>
  }

  /**
   * Screenshot delete
   */
  export type ScreenshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter which Screenshot to delete.
     */
    where: ScreenshotWhereUniqueInput
  }

  /**
   * Screenshot deleteMany
   */
  export type ScreenshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screenshots to delete
     */
    where?: ScreenshotWhereInput
    /**
     * Limit how many Screenshots to delete.
     */
    limit?: number
  }

  /**
   * Screenshot without action
   */
  export type ScreenshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
  }


  /**
   * Model MinimumSystemRequirements
   */

  export type AggregateMinimumSystemRequirements = {
    _count: MinimumSystemRequirementsCountAggregateOutputType | null
    _min: MinimumSystemRequirementsMinAggregateOutputType | null
    _max: MinimumSystemRequirementsMaxAggregateOutputType | null
  }

  export type MinimumSystemRequirementsMinAggregateOutputType = {
    id: string | null
    os: string | null
    graphics: string | null
    memory: string | null
    storage: string | null
    processor: string | null
    savedGameId: string | null
  }

  export type MinimumSystemRequirementsMaxAggregateOutputType = {
    id: string | null
    os: string | null
    graphics: string | null
    memory: string | null
    storage: string | null
    processor: string | null
    savedGameId: string | null
  }

  export type MinimumSystemRequirementsCountAggregateOutputType = {
    id: number
    os: number
    graphics: number
    memory: number
    storage: number
    processor: number
    savedGameId: number
    _all: number
  }


  export type MinimumSystemRequirementsMinAggregateInputType = {
    id?: true
    os?: true
    graphics?: true
    memory?: true
    storage?: true
    processor?: true
    savedGameId?: true
  }

  export type MinimumSystemRequirementsMaxAggregateInputType = {
    id?: true
    os?: true
    graphics?: true
    memory?: true
    storage?: true
    processor?: true
    savedGameId?: true
  }

  export type MinimumSystemRequirementsCountAggregateInputType = {
    id?: true
    os?: true
    graphics?: true
    memory?: true
    storage?: true
    processor?: true
    savedGameId?: true
    _all?: true
  }

  export type MinimumSystemRequirementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MinimumSystemRequirements to aggregate.
     */
    where?: MinimumSystemRequirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinimumSystemRequirements to fetch.
     */
    orderBy?: MinimumSystemRequirementsOrderByWithRelationInput | MinimumSystemRequirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MinimumSystemRequirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinimumSystemRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinimumSystemRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MinimumSystemRequirements
    **/
    _count?: true | MinimumSystemRequirementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MinimumSystemRequirementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MinimumSystemRequirementsMaxAggregateInputType
  }

  export type GetMinimumSystemRequirementsAggregateType<T extends MinimumSystemRequirementsAggregateArgs> = {
        [P in keyof T & keyof AggregateMinimumSystemRequirements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMinimumSystemRequirements[P]>
      : GetScalarType<T[P], AggregateMinimumSystemRequirements[P]>
  }




  export type MinimumSystemRequirementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MinimumSystemRequirementsWhereInput
    orderBy?: MinimumSystemRequirementsOrderByWithAggregationInput | MinimumSystemRequirementsOrderByWithAggregationInput[]
    by: MinimumSystemRequirementsScalarFieldEnum[] | MinimumSystemRequirementsScalarFieldEnum
    having?: MinimumSystemRequirementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MinimumSystemRequirementsCountAggregateInputType | true
    _min?: MinimumSystemRequirementsMinAggregateInputType
    _max?: MinimumSystemRequirementsMaxAggregateInputType
  }

  export type MinimumSystemRequirementsGroupByOutputType = {
    id: string
    os: string | null
    graphics: string | null
    memory: string | null
    storage: string | null
    processor: string | null
    savedGameId: string
    _count: MinimumSystemRequirementsCountAggregateOutputType | null
    _min: MinimumSystemRequirementsMinAggregateOutputType | null
    _max: MinimumSystemRequirementsMaxAggregateOutputType | null
  }

  type GetMinimumSystemRequirementsGroupByPayload<T extends MinimumSystemRequirementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MinimumSystemRequirementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MinimumSystemRequirementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MinimumSystemRequirementsGroupByOutputType[P]>
            : GetScalarType<T[P], MinimumSystemRequirementsGroupByOutputType[P]>
        }
      >
    >


  export type MinimumSystemRequirementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    os?: boolean
    graphics?: boolean
    memory?: boolean
    storage?: boolean
    processor?: boolean
    savedGameId?: boolean
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["minimumSystemRequirements"]>

  export type MinimumSystemRequirementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    os?: boolean
    graphics?: boolean
    memory?: boolean
    storage?: boolean
    processor?: boolean
    savedGameId?: boolean
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["minimumSystemRequirements"]>

  export type MinimumSystemRequirementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    os?: boolean
    graphics?: boolean
    memory?: boolean
    storage?: boolean
    processor?: boolean
    savedGameId?: boolean
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["minimumSystemRequirements"]>

  export type MinimumSystemRequirementsSelectScalar = {
    id?: boolean
    os?: boolean
    graphics?: boolean
    memory?: boolean
    storage?: boolean
    processor?: boolean
    savedGameId?: boolean
  }

  export type MinimumSystemRequirementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "os" | "graphics" | "memory" | "storage" | "processor" | "savedGameId", ExtArgs["result"]["minimumSystemRequirements"]>
  export type MinimumSystemRequirementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }
  export type MinimumSystemRequirementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }
  export type MinimumSystemRequirementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedGame?: boolean | SavedGameDefaultArgs<ExtArgs>
  }

  export type $MinimumSystemRequirementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MinimumSystemRequirements"
    objects: {
      savedGame: Prisma.$SavedGamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      os: string | null
      graphics: string | null
      memory: string | null
      storage: string | null
      processor: string | null
      savedGameId: string
    }, ExtArgs["result"]["minimumSystemRequirements"]>
    composites: {}
  }

  type MinimumSystemRequirementsGetPayload<S extends boolean | null | undefined | MinimumSystemRequirementsDefaultArgs> = $Result.GetResult<Prisma.$MinimumSystemRequirementsPayload, S>

  type MinimumSystemRequirementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MinimumSystemRequirementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MinimumSystemRequirementsCountAggregateInputType | true
    }

  export interface MinimumSystemRequirementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MinimumSystemRequirements'], meta: { name: 'MinimumSystemRequirements' } }
    /**
     * Find zero or one MinimumSystemRequirements that matches the filter.
     * @param {MinimumSystemRequirementsFindUniqueArgs} args - Arguments to find a MinimumSystemRequirements
     * @example
     * // Get one MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MinimumSystemRequirementsFindUniqueArgs>(args: SelectSubset<T, MinimumSystemRequirementsFindUniqueArgs<ExtArgs>>): Prisma__MinimumSystemRequirementsClient<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MinimumSystemRequirements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MinimumSystemRequirementsFindUniqueOrThrowArgs} args - Arguments to find a MinimumSystemRequirements
     * @example
     * // Get one MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MinimumSystemRequirementsFindUniqueOrThrowArgs>(args: SelectSubset<T, MinimumSystemRequirementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MinimumSystemRequirementsClient<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MinimumSystemRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinimumSystemRequirementsFindFirstArgs} args - Arguments to find a MinimumSystemRequirements
     * @example
     * // Get one MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MinimumSystemRequirementsFindFirstArgs>(args?: SelectSubset<T, MinimumSystemRequirementsFindFirstArgs<ExtArgs>>): Prisma__MinimumSystemRequirementsClient<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MinimumSystemRequirements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinimumSystemRequirementsFindFirstOrThrowArgs} args - Arguments to find a MinimumSystemRequirements
     * @example
     * // Get one MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MinimumSystemRequirementsFindFirstOrThrowArgs>(args?: SelectSubset<T, MinimumSystemRequirementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MinimumSystemRequirementsClient<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MinimumSystemRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinimumSystemRequirementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.findMany()
     * 
     * // Get first 10 MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const minimumSystemRequirementsWithIdOnly = await prisma.minimumSystemRequirements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MinimumSystemRequirementsFindManyArgs>(args?: SelectSubset<T, MinimumSystemRequirementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MinimumSystemRequirements.
     * @param {MinimumSystemRequirementsCreateArgs} args - Arguments to create a MinimumSystemRequirements.
     * @example
     * // Create one MinimumSystemRequirements
     * const MinimumSystemRequirements = await prisma.minimumSystemRequirements.create({
     *   data: {
     *     // ... data to create a MinimumSystemRequirements
     *   }
     * })
     * 
     */
    create<T extends MinimumSystemRequirementsCreateArgs>(args: SelectSubset<T, MinimumSystemRequirementsCreateArgs<ExtArgs>>): Prisma__MinimumSystemRequirementsClient<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MinimumSystemRequirements.
     * @param {MinimumSystemRequirementsCreateManyArgs} args - Arguments to create many MinimumSystemRequirements.
     * @example
     * // Create many MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MinimumSystemRequirementsCreateManyArgs>(args?: SelectSubset<T, MinimumSystemRequirementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MinimumSystemRequirements and returns the data saved in the database.
     * @param {MinimumSystemRequirementsCreateManyAndReturnArgs} args - Arguments to create many MinimumSystemRequirements.
     * @example
     * // Create many MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MinimumSystemRequirements and only return the `id`
     * const minimumSystemRequirementsWithIdOnly = await prisma.minimumSystemRequirements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MinimumSystemRequirementsCreateManyAndReturnArgs>(args?: SelectSubset<T, MinimumSystemRequirementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MinimumSystemRequirements.
     * @param {MinimumSystemRequirementsDeleteArgs} args - Arguments to delete one MinimumSystemRequirements.
     * @example
     * // Delete one MinimumSystemRequirements
     * const MinimumSystemRequirements = await prisma.minimumSystemRequirements.delete({
     *   where: {
     *     // ... filter to delete one MinimumSystemRequirements
     *   }
     * })
     * 
     */
    delete<T extends MinimumSystemRequirementsDeleteArgs>(args: SelectSubset<T, MinimumSystemRequirementsDeleteArgs<ExtArgs>>): Prisma__MinimumSystemRequirementsClient<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MinimumSystemRequirements.
     * @param {MinimumSystemRequirementsUpdateArgs} args - Arguments to update one MinimumSystemRequirements.
     * @example
     * // Update one MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MinimumSystemRequirementsUpdateArgs>(args: SelectSubset<T, MinimumSystemRequirementsUpdateArgs<ExtArgs>>): Prisma__MinimumSystemRequirementsClient<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MinimumSystemRequirements.
     * @param {MinimumSystemRequirementsDeleteManyArgs} args - Arguments to filter MinimumSystemRequirements to delete.
     * @example
     * // Delete a few MinimumSystemRequirements
     * const { count } = await prisma.minimumSystemRequirements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MinimumSystemRequirementsDeleteManyArgs>(args?: SelectSubset<T, MinimumSystemRequirementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MinimumSystemRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinimumSystemRequirementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MinimumSystemRequirementsUpdateManyArgs>(args: SelectSubset<T, MinimumSystemRequirementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MinimumSystemRequirements and returns the data updated in the database.
     * @param {MinimumSystemRequirementsUpdateManyAndReturnArgs} args - Arguments to update many MinimumSystemRequirements.
     * @example
     * // Update many MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MinimumSystemRequirements and only return the `id`
     * const minimumSystemRequirementsWithIdOnly = await prisma.minimumSystemRequirements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MinimumSystemRequirementsUpdateManyAndReturnArgs>(args: SelectSubset<T, MinimumSystemRequirementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MinimumSystemRequirements.
     * @param {MinimumSystemRequirementsUpsertArgs} args - Arguments to update or create a MinimumSystemRequirements.
     * @example
     * // Update or create a MinimumSystemRequirements
     * const minimumSystemRequirements = await prisma.minimumSystemRequirements.upsert({
     *   create: {
     *     // ... data to create a MinimumSystemRequirements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MinimumSystemRequirements we want to update
     *   }
     * })
     */
    upsert<T extends MinimumSystemRequirementsUpsertArgs>(args: SelectSubset<T, MinimumSystemRequirementsUpsertArgs<ExtArgs>>): Prisma__MinimumSystemRequirementsClient<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MinimumSystemRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinimumSystemRequirementsCountArgs} args - Arguments to filter MinimumSystemRequirements to count.
     * @example
     * // Count the number of MinimumSystemRequirements
     * const count = await prisma.minimumSystemRequirements.count({
     *   where: {
     *     // ... the filter for the MinimumSystemRequirements we want to count
     *   }
     * })
    **/
    count<T extends MinimumSystemRequirementsCountArgs>(
      args?: Subset<T, MinimumSystemRequirementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MinimumSystemRequirementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MinimumSystemRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinimumSystemRequirementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MinimumSystemRequirementsAggregateArgs>(args: Subset<T, MinimumSystemRequirementsAggregateArgs>): Prisma.PrismaPromise<GetMinimumSystemRequirementsAggregateType<T>>

    /**
     * Group by MinimumSystemRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinimumSystemRequirementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MinimumSystemRequirementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MinimumSystemRequirementsGroupByArgs['orderBy'] }
        : { orderBy?: MinimumSystemRequirementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MinimumSystemRequirementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMinimumSystemRequirementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MinimumSystemRequirements model
   */
  readonly fields: MinimumSystemRequirementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MinimumSystemRequirements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MinimumSystemRequirementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedGame<T extends SavedGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SavedGameDefaultArgs<ExtArgs>>): Prisma__SavedGameClient<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MinimumSystemRequirements model
   */
  interface MinimumSystemRequirementsFieldRefs {
    readonly id: FieldRef<"MinimumSystemRequirements", 'String'>
    readonly os: FieldRef<"MinimumSystemRequirements", 'String'>
    readonly graphics: FieldRef<"MinimumSystemRequirements", 'String'>
    readonly memory: FieldRef<"MinimumSystemRequirements", 'String'>
    readonly storage: FieldRef<"MinimumSystemRequirements", 'String'>
    readonly processor: FieldRef<"MinimumSystemRequirements", 'String'>
    readonly savedGameId: FieldRef<"MinimumSystemRequirements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MinimumSystemRequirements findUnique
   */
  export type MinimumSystemRequirementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsInclude<ExtArgs> | null
    /**
     * Filter, which MinimumSystemRequirements to fetch.
     */
    where: MinimumSystemRequirementsWhereUniqueInput
  }

  /**
   * MinimumSystemRequirements findUniqueOrThrow
   */
  export type MinimumSystemRequirementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsInclude<ExtArgs> | null
    /**
     * Filter, which MinimumSystemRequirements to fetch.
     */
    where: MinimumSystemRequirementsWhereUniqueInput
  }

  /**
   * MinimumSystemRequirements findFirst
   */
  export type MinimumSystemRequirementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsInclude<ExtArgs> | null
    /**
     * Filter, which MinimumSystemRequirements to fetch.
     */
    where?: MinimumSystemRequirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinimumSystemRequirements to fetch.
     */
    orderBy?: MinimumSystemRequirementsOrderByWithRelationInput | MinimumSystemRequirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MinimumSystemRequirements.
     */
    cursor?: MinimumSystemRequirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinimumSystemRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinimumSystemRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MinimumSystemRequirements.
     */
    distinct?: MinimumSystemRequirementsScalarFieldEnum | MinimumSystemRequirementsScalarFieldEnum[]
  }

  /**
   * MinimumSystemRequirements findFirstOrThrow
   */
  export type MinimumSystemRequirementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsInclude<ExtArgs> | null
    /**
     * Filter, which MinimumSystemRequirements to fetch.
     */
    where?: MinimumSystemRequirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinimumSystemRequirements to fetch.
     */
    orderBy?: MinimumSystemRequirementsOrderByWithRelationInput | MinimumSystemRequirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MinimumSystemRequirements.
     */
    cursor?: MinimumSystemRequirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinimumSystemRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinimumSystemRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MinimumSystemRequirements.
     */
    distinct?: MinimumSystemRequirementsScalarFieldEnum | MinimumSystemRequirementsScalarFieldEnum[]
  }

  /**
   * MinimumSystemRequirements findMany
   */
  export type MinimumSystemRequirementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsInclude<ExtArgs> | null
    /**
     * Filter, which MinimumSystemRequirements to fetch.
     */
    where?: MinimumSystemRequirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinimumSystemRequirements to fetch.
     */
    orderBy?: MinimumSystemRequirementsOrderByWithRelationInput | MinimumSystemRequirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MinimumSystemRequirements.
     */
    cursor?: MinimumSystemRequirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinimumSystemRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinimumSystemRequirements.
     */
    skip?: number
    distinct?: MinimumSystemRequirementsScalarFieldEnum | MinimumSystemRequirementsScalarFieldEnum[]
  }

  /**
   * MinimumSystemRequirements create
   */
  export type MinimumSystemRequirementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsInclude<ExtArgs> | null
    /**
     * The data needed to create a MinimumSystemRequirements.
     */
    data: XOR<MinimumSystemRequirementsCreateInput, MinimumSystemRequirementsUncheckedCreateInput>
  }

  /**
   * MinimumSystemRequirements createMany
   */
  export type MinimumSystemRequirementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MinimumSystemRequirements.
     */
    data: MinimumSystemRequirementsCreateManyInput | MinimumSystemRequirementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MinimumSystemRequirements createManyAndReturn
   */
  export type MinimumSystemRequirementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * The data used to create many MinimumSystemRequirements.
     */
    data: MinimumSystemRequirementsCreateManyInput | MinimumSystemRequirementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MinimumSystemRequirements update
   */
  export type MinimumSystemRequirementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsInclude<ExtArgs> | null
    /**
     * The data needed to update a MinimumSystemRequirements.
     */
    data: XOR<MinimumSystemRequirementsUpdateInput, MinimumSystemRequirementsUncheckedUpdateInput>
    /**
     * Choose, which MinimumSystemRequirements to update.
     */
    where: MinimumSystemRequirementsWhereUniqueInput
  }

  /**
   * MinimumSystemRequirements updateMany
   */
  export type MinimumSystemRequirementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MinimumSystemRequirements.
     */
    data: XOR<MinimumSystemRequirementsUpdateManyMutationInput, MinimumSystemRequirementsUncheckedUpdateManyInput>
    /**
     * Filter which MinimumSystemRequirements to update
     */
    where?: MinimumSystemRequirementsWhereInput
    /**
     * Limit how many MinimumSystemRequirements to update.
     */
    limit?: number
  }

  /**
   * MinimumSystemRequirements updateManyAndReturn
   */
  export type MinimumSystemRequirementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * The data used to update MinimumSystemRequirements.
     */
    data: XOR<MinimumSystemRequirementsUpdateManyMutationInput, MinimumSystemRequirementsUncheckedUpdateManyInput>
    /**
     * Filter which MinimumSystemRequirements to update
     */
    where?: MinimumSystemRequirementsWhereInput
    /**
     * Limit how many MinimumSystemRequirements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MinimumSystemRequirements upsert
   */
  export type MinimumSystemRequirementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsInclude<ExtArgs> | null
    /**
     * The filter to search for the MinimumSystemRequirements to update in case it exists.
     */
    where: MinimumSystemRequirementsWhereUniqueInput
    /**
     * In case the MinimumSystemRequirements found by the `where` argument doesn't exist, create a new MinimumSystemRequirements with this data.
     */
    create: XOR<MinimumSystemRequirementsCreateInput, MinimumSystemRequirementsUncheckedCreateInput>
    /**
     * In case the MinimumSystemRequirements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MinimumSystemRequirementsUpdateInput, MinimumSystemRequirementsUncheckedUpdateInput>
  }

  /**
   * MinimumSystemRequirements delete
   */
  export type MinimumSystemRequirementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsInclude<ExtArgs> | null
    /**
     * Filter which MinimumSystemRequirements to delete.
     */
    where: MinimumSystemRequirementsWhereUniqueInput
  }

  /**
   * MinimumSystemRequirements deleteMany
   */
  export type MinimumSystemRequirementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MinimumSystemRequirements to delete
     */
    where?: MinimumSystemRequirementsWhereInput
    /**
     * Limit how many MinimumSystemRequirements to delete.
     */
    limit?: number
  }

  /**
   * MinimumSystemRequirements without action
   */
  export type MinimumSystemRequirementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsInclude<ExtArgs> | null
  }


  /**
   * Model SavedGame
   */

  export type AggregateSavedGame = {
    _count: SavedGameCountAggregateOutputType | null
    _avg: SavedGameAvgAggregateOutputType | null
    _sum: SavedGameSumAggregateOutputType | null
    _min: SavedGameMinAggregateOutputType | null
    _max: SavedGameMaxAggregateOutputType | null
  }

  export type SavedGameAvgAggregateOutputType = {
    game_id: number | null
  }

  export type SavedGameSumAggregateOutputType = {
    game_id: number | null
  }

  export type SavedGameMinAggregateOutputType = {
    id: string | null
    description: string | null
    developer: string | null
    freetogame_profile_url: string | null
    game_url: string | null
    genre: string | null
    game_id: number | null
    platform: string | null
    publisher: string | null
    release_date: string | null
    short_description: string | null
    status: string | null
    thumbnail: string | null
    title: string | null
    userId: string | null
  }

  export type SavedGameMaxAggregateOutputType = {
    id: string | null
    description: string | null
    developer: string | null
    freetogame_profile_url: string | null
    game_url: string | null
    genre: string | null
    game_id: number | null
    platform: string | null
    publisher: string | null
    release_date: string | null
    short_description: string | null
    status: string | null
    thumbnail: string | null
    title: string | null
    userId: string | null
  }

  export type SavedGameCountAggregateOutputType = {
    id: number
    description: number
    developer: number
    freetogame_profile_url: number
    game_url: number
    genre: number
    game_id: number
    platform: number
    publisher: number
    release_date: number
    short_description: number
    status: number
    thumbnail: number
    title: number
    userId: number
    _all: number
  }


  export type SavedGameAvgAggregateInputType = {
    game_id?: true
  }

  export type SavedGameSumAggregateInputType = {
    game_id?: true
  }

  export type SavedGameMinAggregateInputType = {
    id?: true
    description?: true
    developer?: true
    freetogame_profile_url?: true
    game_url?: true
    genre?: true
    game_id?: true
    platform?: true
    publisher?: true
    release_date?: true
    short_description?: true
    status?: true
    thumbnail?: true
    title?: true
    userId?: true
  }

  export type SavedGameMaxAggregateInputType = {
    id?: true
    description?: true
    developer?: true
    freetogame_profile_url?: true
    game_url?: true
    genre?: true
    game_id?: true
    platform?: true
    publisher?: true
    release_date?: true
    short_description?: true
    status?: true
    thumbnail?: true
    title?: true
    userId?: true
  }

  export type SavedGameCountAggregateInputType = {
    id?: true
    description?: true
    developer?: true
    freetogame_profile_url?: true
    game_url?: true
    genre?: true
    game_id?: true
    platform?: true
    publisher?: true
    release_date?: true
    short_description?: true
    status?: true
    thumbnail?: true
    title?: true
    userId?: true
    _all?: true
  }

  export type SavedGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedGame to aggregate.
     */
    where?: SavedGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedGames to fetch.
     */
    orderBy?: SavedGameOrderByWithRelationInput | SavedGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedGames
    **/
    _count?: true | SavedGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedGameMaxAggregateInputType
  }

  export type GetSavedGameAggregateType<T extends SavedGameAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedGame[P]>
      : GetScalarType<T[P], AggregateSavedGame[P]>
  }




  export type SavedGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedGameWhereInput
    orderBy?: SavedGameOrderByWithAggregationInput | SavedGameOrderByWithAggregationInput[]
    by: SavedGameScalarFieldEnum[] | SavedGameScalarFieldEnum
    having?: SavedGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedGameCountAggregateInputType | true
    _avg?: SavedGameAvgAggregateInputType
    _sum?: SavedGameSumAggregateInputType
    _min?: SavedGameMinAggregateInputType
    _max?: SavedGameMaxAggregateInputType
  }

  export type SavedGameGroupByOutputType = {
    id: string
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    game_id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    status: string
    thumbnail: string
    title: string
    userId: string
    _count: SavedGameCountAggregateOutputType | null
    _avg: SavedGameAvgAggregateOutputType | null
    _sum: SavedGameSumAggregateOutputType | null
    _min: SavedGameMinAggregateOutputType | null
    _max: SavedGameMaxAggregateOutputType | null
  }

  type GetSavedGameGroupByPayload<T extends SavedGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedGameGroupByOutputType[P]>
            : GetScalarType<T[P], SavedGameGroupByOutputType[P]>
        }
      >
    >


  export type SavedGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    developer?: boolean
    freetogame_profile_url?: boolean
    game_url?: boolean
    genre?: boolean
    game_id?: boolean
    platform?: boolean
    publisher?: boolean
    release_date?: boolean
    short_description?: boolean
    status?: boolean
    thumbnail?: boolean
    title?: boolean
    userId?: boolean
    minimum_system_requirements?: boolean | SavedGame$minimum_system_requirementsArgs<ExtArgs>
    screenshots?: boolean | SavedGame$screenshotsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SavedGameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedGame"]>

  export type SavedGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    developer?: boolean
    freetogame_profile_url?: boolean
    game_url?: boolean
    genre?: boolean
    game_id?: boolean
    platform?: boolean
    publisher?: boolean
    release_date?: boolean
    short_description?: boolean
    status?: boolean
    thumbnail?: boolean
    title?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedGame"]>

  export type SavedGameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    developer?: boolean
    freetogame_profile_url?: boolean
    game_url?: boolean
    genre?: boolean
    game_id?: boolean
    platform?: boolean
    publisher?: boolean
    release_date?: boolean
    short_description?: boolean
    status?: boolean
    thumbnail?: boolean
    title?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedGame"]>

  export type SavedGameSelectScalar = {
    id?: boolean
    description?: boolean
    developer?: boolean
    freetogame_profile_url?: boolean
    game_url?: boolean
    genre?: boolean
    game_id?: boolean
    platform?: boolean
    publisher?: boolean
    release_date?: boolean
    short_description?: boolean
    status?: boolean
    thumbnail?: boolean
    title?: boolean
    userId?: boolean
  }

  export type SavedGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "developer" | "freetogame_profile_url" | "game_url" | "genre" | "game_id" | "platform" | "publisher" | "release_date" | "short_description" | "status" | "thumbnail" | "title" | "userId", ExtArgs["result"]["savedGame"]>
  export type SavedGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    minimum_system_requirements?: boolean | SavedGame$minimum_system_requirementsArgs<ExtArgs>
    screenshots?: boolean | SavedGame$screenshotsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SavedGameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SavedGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedGameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedGame"
    objects: {
      minimum_system_requirements: Prisma.$MinimumSystemRequirementsPayload<ExtArgs> | null
      screenshots: Prisma.$ScreenshotPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      developer: string
      freetogame_profile_url: string
      game_url: string
      genre: string
      game_id: number
      platform: string
      publisher: string
      release_date: string
      short_description: string
      status: string
      thumbnail: string
      title: string
      userId: string
    }, ExtArgs["result"]["savedGame"]>
    composites: {}
  }

  type SavedGameGetPayload<S extends boolean | null | undefined | SavedGameDefaultArgs> = $Result.GetResult<Prisma.$SavedGamePayload, S>

  type SavedGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedGameCountAggregateInputType | true
    }

  export interface SavedGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedGame'], meta: { name: 'SavedGame' } }
    /**
     * Find zero or one SavedGame that matches the filter.
     * @param {SavedGameFindUniqueArgs} args - Arguments to find a SavedGame
     * @example
     * // Get one SavedGame
     * const savedGame = await prisma.savedGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedGameFindUniqueArgs>(args: SelectSubset<T, SavedGameFindUniqueArgs<ExtArgs>>): Prisma__SavedGameClient<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedGameFindUniqueOrThrowArgs} args - Arguments to find a SavedGame
     * @example
     * // Get one SavedGame
     * const savedGame = await prisma.savedGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedGameFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedGameClient<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGameFindFirstArgs} args - Arguments to find a SavedGame
     * @example
     * // Get one SavedGame
     * const savedGame = await prisma.savedGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedGameFindFirstArgs>(args?: SelectSubset<T, SavedGameFindFirstArgs<ExtArgs>>): Prisma__SavedGameClient<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGameFindFirstOrThrowArgs} args - Arguments to find a SavedGame
     * @example
     * // Get one SavedGame
     * const savedGame = await prisma.savedGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedGameFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedGameClient<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedGames
     * const savedGames = await prisma.savedGame.findMany()
     * 
     * // Get first 10 SavedGames
     * const savedGames = await prisma.savedGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedGameWithIdOnly = await prisma.savedGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedGameFindManyArgs>(args?: SelectSubset<T, SavedGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedGame.
     * @param {SavedGameCreateArgs} args - Arguments to create a SavedGame.
     * @example
     * // Create one SavedGame
     * const SavedGame = await prisma.savedGame.create({
     *   data: {
     *     // ... data to create a SavedGame
     *   }
     * })
     * 
     */
    create<T extends SavedGameCreateArgs>(args: SelectSubset<T, SavedGameCreateArgs<ExtArgs>>): Prisma__SavedGameClient<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedGames.
     * @param {SavedGameCreateManyArgs} args - Arguments to create many SavedGames.
     * @example
     * // Create many SavedGames
     * const savedGame = await prisma.savedGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedGameCreateManyArgs>(args?: SelectSubset<T, SavedGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedGames and returns the data saved in the database.
     * @param {SavedGameCreateManyAndReturnArgs} args - Arguments to create many SavedGames.
     * @example
     * // Create many SavedGames
     * const savedGame = await prisma.savedGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedGames and only return the `id`
     * const savedGameWithIdOnly = await prisma.savedGame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedGameCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedGame.
     * @param {SavedGameDeleteArgs} args - Arguments to delete one SavedGame.
     * @example
     * // Delete one SavedGame
     * const SavedGame = await prisma.savedGame.delete({
     *   where: {
     *     // ... filter to delete one SavedGame
     *   }
     * })
     * 
     */
    delete<T extends SavedGameDeleteArgs>(args: SelectSubset<T, SavedGameDeleteArgs<ExtArgs>>): Prisma__SavedGameClient<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedGame.
     * @param {SavedGameUpdateArgs} args - Arguments to update one SavedGame.
     * @example
     * // Update one SavedGame
     * const savedGame = await prisma.savedGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedGameUpdateArgs>(args: SelectSubset<T, SavedGameUpdateArgs<ExtArgs>>): Prisma__SavedGameClient<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedGames.
     * @param {SavedGameDeleteManyArgs} args - Arguments to filter SavedGames to delete.
     * @example
     * // Delete a few SavedGames
     * const { count } = await prisma.savedGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedGameDeleteManyArgs>(args?: SelectSubset<T, SavedGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedGames
     * const savedGame = await prisma.savedGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedGameUpdateManyArgs>(args: SelectSubset<T, SavedGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedGames and returns the data updated in the database.
     * @param {SavedGameUpdateManyAndReturnArgs} args - Arguments to update many SavedGames.
     * @example
     * // Update many SavedGames
     * const savedGame = await prisma.savedGame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedGames and only return the `id`
     * const savedGameWithIdOnly = await prisma.savedGame.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedGameUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedGameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedGame.
     * @param {SavedGameUpsertArgs} args - Arguments to update or create a SavedGame.
     * @example
     * // Update or create a SavedGame
     * const savedGame = await prisma.savedGame.upsert({
     *   create: {
     *     // ... data to create a SavedGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedGame we want to update
     *   }
     * })
     */
    upsert<T extends SavedGameUpsertArgs>(args: SelectSubset<T, SavedGameUpsertArgs<ExtArgs>>): Prisma__SavedGameClient<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGameCountArgs} args - Arguments to filter SavedGames to count.
     * @example
     * // Count the number of SavedGames
     * const count = await prisma.savedGame.count({
     *   where: {
     *     // ... the filter for the SavedGames we want to count
     *   }
     * })
    **/
    count<T extends SavedGameCountArgs>(
      args?: Subset<T, SavedGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedGameAggregateArgs>(args: Subset<T, SavedGameAggregateArgs>): Prisma.PrismaPromise<GetSavedGameAggregateType<T>>

    /**
     * Group by SavedGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedGameGroupByArgs['orderBy'] }
        : { orderBy?: SavedGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedGame model
   */
  readonly fields: SavedGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    minimum_system_requirements<T extends SavedGame$minimum_system_requirementsArgs<ExtArgs> = {}>(args?: Subset<T, SavedGame$minimum_system_requirementsArgs<ExtArgs>>): Prisma__MinimumSystemRequirementsClient<$Result.GetResult<Prisma.$MinimumSystemRequirementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    screenshots<T extends SavedGame$screenshotsArgs<ExtArgs> = {}>(args?: Subset<T, SavedGame$screenshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedGame model
   */
  interface SavedGameFieldRefs {
    readonly id: FieldRef<"SavedGame", 'String'>
    readonly description: FieldRef<"SavedGame", 'String'>
    readonly developer: FieldRef<"SavedGame", 'String'>
    readonly freetogame_profile_url: FieldRef<"SavedGame", 'String'>
    readonly game_url: FieldRef<"SavedGame", 'String'>
    readonly genre: FieldRef<"SavedGame", 'String'>
    readonly game_id: FieldRef<"SavedGame", 'Int'>
    readonly platform: FieldRef<"SavedGame", 'String'>
    readonly publisher: FieldRef<"SavedGame", 'String'>
    readonly release_date: FieldRef<"SavedGame", 'String'>
    readonly short_description: FieldRef<"SavedGame", 'String'>
    readonly status: FieldRef<"SavedGame", 'String'>
    readonly thumbnail: FieldRef<"SavedGame", 'String'>
    readonly title: FieldRef<"SavedGame", 'String'>
    readonly userId: FieldRef<"SavedGame", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SavedGame findUnique
   */
  export type SavedGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameInclude<ExtArgs> | null
    /**
     * Filter, which SavedGame to fetch.
     */
    where: SavedGameWhereUniqueInput
  }

  /**
   * SavedGame findUniqueOrThrow
   */
  export type SavedGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameInclude<ExtArgs> | null
    /**
     * Filter, which SavedGame to fetch.
     */
    where: SavedGameWhereUniqueInput
  }

  /**
   * SavedGame findFirst
   */
  export type SavedGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameInclude<ExtArgs> | null
    /**
     * Filter, which SavedGame to fetch.
     */
    where?: SavedGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedGames to fetch.
     */
    orderBy?: SavedGameOrderByWithRelationInput | SavedGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedGames.
     */
    cursor?: SavedGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedGames.
     */
    distinct?: SavedGameScalarFieldEnum | SavedGameScalarFieldEnum[]
  }

  /**
   * SavedGame findFirstOrThrow
   */
  export type SavedGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameInclude<ExtArgs> | null
    /**
     * Filter, which SavedGame to fetch.
     */
    where?: SavedGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedGames to fetch.
     */
    orderBy?: SavedGameOrderByWithRelationInput | SavedGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedGames.
     */
    cursor?: SavedGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedGames.
     */
    distinct?: SavedGameScalarFieldEnum | SavedGameScalarFieldEnum[]
  }

  /**
   * SavedGame findMany
   */
  export type SavedGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameInclude<ExtArgs> | null
    /**
     * Filter, which SavedGames to fetch.
     */
    where?: SavedGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedGames to fetch.
     */
    orderBy?: SavedGameOrderByWithRelationInput | SavedGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedGames.
     */
    cursor?: SavedGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedGames.
     */
    skip?: number
    distinct?: SavedGameScalarFieldEnum | SavedGameScalarFieldEnum[]
  }

  /**
   * SavedGame create
   */
  export type SavedGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedGame.
     */
    data: XOR<SavedGameCreateInput, SavedGameUncheckedCreateInput>
  }

  /**
   * SavedGame createMany
   */
  export type SavedGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedGames.
     */
    data: SavedGameCreateManyInput | SavedGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedGame createManyAndReturn
   */
  export type SavedGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * The data used to create many SavedGames.
     */
    data: SavedGameCreateManyInput | SavedGameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedGame update
   */
  export type SavedGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedGame.
     */
    data: XOR<SavedGameUpdateInput, SavedGameUncheckedUpdateInput>
    /**
     * Choose, which SavedGame to update.
     */
    where: SavedGameWhereUniqueInput
  }

  /**
   * SavedGame updateMany
   */
  export type SavedGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedGames.
     */
    data: XOR<SavedGameUpdateManyMutationInput, SavedGameUncheckedUpdateManyInput>
    /**
     * Filter which SavedGames to update
     */
    where?: SavedGameWhereInput
    /**
     * Limit how many SavedGames to update.
     */
    limit?: number
  }

  /**
   * SavedGame updateManyAndReturn
   */
  export type SavedGameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * The data used to update SavedGames.
     */
    data: XOR<SavedGameUpdateManyMutationInput, SavedGameUncheckedUpdateManyInput>
    /**
     * Filter which SavedGames to update
     */
    where?: SavedGameWhereInput
    /**
     * Limit how many SavedGames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedGame upsert
   */
  export type SavedGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedGame to update in case it exists.
     */
    where: SavedGameWhereUniqueInput
    /**
     * In case the SavedGame found by the `where` argument doesn't exist, create a new SavedGame with this data.
     */
    create: XOR<SavedGameCreateInput, SavedGameUncheckedCreateInput>
    /**
     * In case the SavedGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedGameUpdateInput, SavedGameUncheckedUpdateInput>
  }

  /**
   * SavedGame delete
   */
  export type SavedGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameInclude<ExtArgs> | null
    /**
     * Filter which SavedGame to delete.
     */
    where: SavedGameWhereUniqueInput
  }

  /**
   * SavedGame deleteMany
   */
  export type SavedGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedGames to delete
     */
    where?: SavedGameWhereInput
    /**
     * Limit how many SavedGames to delete.
     */
    limit?: number
  }

  /**
   * SavedGame.minimum_system_requirements
   */
  export type SavedGame$minimum_system_requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinimumSystemRequirements
     */
    select?: MinimumSystemRequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MinimumSystemRequirements
     */
    omit?: MinimumSystemRequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MinimumSystemRequirementsInclude<ExtArgs> | null
    where?: MinimumSystemRequirementsWhereInput
  }

  /**
   * SavedGame.screenshots
   */
  export type SavedGame$screenshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    where?: ScreenshotWhereInput
    orderBy?: ScreenshotOrderByWithRelationInput | ScreenshotOrderByWithRelationInput[]
    cursor?: ScreenshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreenshotScalarFieldEnum | ScreenshotScalarFieldEnum[]
  }

  /**
   * SavedGame without action
   */
  export type SavedGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    savedGames?: boolean | User$savedGamesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedGames?: boolean | User$savedGamesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      savedGames: Prisma.$SavedGamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedGames<T extends User$savedGamesArgs<ExtArgs> = {}>(args?: Subset<T, User$savedGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.savedGames
   */
  export type User$savedGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGame
     */
    select?: SavedGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedGame
     */
    omit?: SavedGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGameInclude<ExtArgs> | null
    where?: SavedGameWhereInput
    orderBy?: SavedGameOrderByWithRelationInput | SavedGameOrderByWithRelationInput[]
    cursor?: SavedGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedGameScalarFieldEnum | SavedGameScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ScreenshotScalarFieldEnum: {
    id: 'id',
    image: 'image',
    savedGameId: 'savedGameId'
  };

  export type ScreenshotScalarFieldEnum = (typeof ScreenshotScalarFieldEnum)[keyof typeof ScreenshotScalarFieldEnum]


  export const MinimumSystemRequirementsScalarFieldEnum: {
    id: 'id',
    os: 'os',
    graphics: 'graphics',
    memory: 'memory',
    storage: 'storage',
    processor: 'processor',
    savedGameId: 'savedGameId'
  };

  export type MinimumSystemRequirementsScalarFieldEnum = (typeof MinimumSystemRequirementsScalarFieldEnum)[keyof typeof MinimumSystemRequirementsScalarFieldEnum]


  export const SavedGameScalarFieldEnum: {
    id: 'id',
    description: 'description',
    developer: 'developer',
    freetogame_profile_url: 'freetogame_profile_url',
    game_url: 'game_url',
    genre: 'genre',
    game_id: 'game_id',
    platform: 'platform',
    publisher: 'publisher',
    release_date: 'release_date',
    short_description: 'short_description',
    status: 'status',
    thumbnail: 'thumbnail',
    title: 'title',
    userId: 'userId'
  };

  export type SavedGameScalarFieldEnum = (typeof SavedGameScalarFieldEnum)[keyof typeof SavedGameScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ScreenshotWhereInput = {
    AND?: ScreenshotWhereInput | ScreenshotWhereInput[]
    OR?: ScreenshotWhereInput[]
    NOT?: ScreenshotWhereInput | ScreenshotWhereInput[]
    id?: IntFilter<"Screenshot"> | number
    image?: StringFilter<"Screenshot"> | string
    savedGameId?: StringFilter<"Screenshot"> | string
    savedGame?: XOR<SavedGameScalarRelationFilter, SavedGameWhereInput>
  }

  export type ScreenshotOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    savedGameId?: SortOrder
    savedGame?: SavedGameOrderByWithRelationInput
  }

  export type ScreenshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScreenshotWhereInput | ScreenshotWhereInput[]
    OR?: ScreenshotWhereInput[]
    NOT?: ScreenshotWhereInput | ScreenshotWhereInput[]
    image?: StringFilter<"Screenshot"> | string
    savedGameId?: StringFilter<"Screenshot"> | string
    savedGame?: XOR<SavedGameScalarRelationFilter, SavedGameWhereInput>
  }, "id">

  export type ScreenshotOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    savedGameId?: SortOrder
    _count?: ScreenshotCountOrderByAggregateInput
    _avg?: ScreenshotAvgOrderByAggregateInput
    _max?: ScreenshotMaxOrderByAggregateInput
    _min?: ScreenshotMinOrderByAggregateInput
    _sum?: ScreenshotSumOrderByAggregateInput
  }

  export type ScreenshotScalarWhereWithAggregatesInput = {
    AND?: ScreenshotScalarWhereWithAggregatesInput | ScreenshotScalarWhereWithAggregatesInput[]
    OR?: ScreenshotScalarWhereWithAggregatesInput[]
    NOT?: ScreenshotScalarWhereWithAggregatesInput | ScreenshotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Screenshot"> | number
    image?: StringWithAggregatesFilter<"Screenshot"> | string
    savedGameId?: StringWithAggregatesFilter<"Screenshot"> | string
  }

  export type MinimumSystemRequirementsWhereInput = {
    AND?: MinimumSystemRequirementsWhereInput | MinimumSystemRequirementsWhereInput[]
    OR?: MinimumSystemRequirementsWhereInput[]
    NOT?: MinimumSystemRequirementsWhereInput | MinimumSystemRequirementsWhereInput[]
    id?: StringFilter<"MinimumSystemRequirements"> | string
    os?: StringNullableFilter<"MinimumSystemRequirements"> | string | null
    graphics?: StringNullableFilter<"MinimumSystemRequirements"> | string | null
    memory?: StringNullableFilter<"MinimumSystemRequirements"> | string | null
    storage?: StringNullableFilter<"MinimumSystemRequirements"> | string | null
    processor?: StringNullableFilter<"MinimumSystemRequirements"> | string | null
    savedGameId?: StringFilter<"MinimumSystemRequirements"> | string
    savedGame?: XOR<SavedGameScalarRelationFilter, SavedGameWhereInput>
  }

  export type MinimumSystemRequirementsOrderByWithRelationInput = {
    id?: SortOrder
    os?: SortOrderInput | SortOrder
    graphics?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    storage?: SortOrderInput | SortOrder
    processor?: SortOrderInput | SortOrder
    savedGameId?: SortOrder
    savedGame?: SavedGameOrderByWithRelationInput
  }

  export type MinimumSystemRequirementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    savedGameId?: string
    AND?: MinimumSystemRequirementsWhereInput | MinimumSystemRequirementsWhereInput[]
    OR?: MinimumSystemRequirementsWhereInput[]
    NOT?: MinimumSystemRequirementsWhereInput | MinimumSystemRequirementsWhereInput[]
    os?: StringNullableFilter<"MinimumSystemRequirements"> | string | null
    graphics?: StringNullableFilter<"MinimumSystemRequirements"> | string | null
    memory?: StringNullableFilter<"MinimumSystemRequirements"> | string | null
    storage?: StringNullableFilter<"MinimumSystemRequirements"> | string | null
    processor?: StringNullableFilter<"MinimumSystemRequirements"> | string | null
    savedGame?: XOR<SavedGameScalarRelationFilter, SavedGameWhereInput>
  }, "id" | "savedGameId">

  export type MinimumSystemRequirementsOrderByWithAggregationInput = {
    id?: SortOrder
    os?: SortOrderInput | SortOrder
    graphics?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    storage?: SortOrderInput | SortOrder
    processor?: SortOrderInput | SortOrder
    savedGameId?: SortOrder
    _count?: MinimumSystemRequirementsCountOrderByAggregateInput
    _max?: MinimumSystemRequirementsMaxOrderByAggregateInput
    _min?: MinimumSystemRequirementsMinOrderByAggregateInput
  }

  export type MinimumSystemRequirementsScalarWhereWithAggregatesInput = {
    AND?: MinimumSystemRequirementsScalarWhereWithAggregatesInput | MinimumSystemRequirementsScalarWhereWithAggregatesInput[]
    OR?: MinimumSystemRequirementsScalarWhereWithAggregatesInput[]
    NOT?: MinimumSystemRequirementsScalarWhereWithAggregatesInput | MinimumSystemRequirementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MinimumSystemRequirements"> | string
    os?: StringNullableWithAggregatesFilter<"MinimumSystemRequirements"> | string | null
    graphics?: StringNullableWithAggregatesFilter<"MinimumSystemRequirements"> | string | null
    memory?: StringNullableWithAggregatesFilter<"MinimumSystemRequirements"> | string | null
    storage?: StringNullableWithAggregatesFilter<"MinimumSystemRequirements"> | string | null
    processor?: StringNullableWithAggregatesFilter<"MinimumSystemRequirements"> | string | null
    savedGameId?: StringWithAggregatesFilter<"MinimumSystemRequirements"> | string
  }

  export type SavedGameWhereInput = {
    AND?: SavedGameWhereInput | SavedGameWhereInput[]
    OR?: SavedGameWhereInput[]
    NOT?: SavedGameWhereInput | SavedGameWhereInput[]
    id?: StringFilter<"SavedGame"> | string
    description?: StringFilter<"SavedGame"> | string
    developer?: StringFilter<"SavedGame"> | string
    freetogame_profile_url?: StringFilter<"SavedGame"> | string
    game_url?: StringFilter<"SavedGame"> | string
    genre?: StringFilter<"SavedGame"> | string
    game_id?: IntFilter<"SavedGame"> | number
    platform?: StringFilter<"SavedGame"> | string
    publisher?: StringFilter<"SavedGame"> | string
    release_date?: StringFilter<"SavedGame"> | string
    short_description?: StringFilter<"SavedGame"> | string
    status?: StringFilter<"SavedGame"> | string
    thumbnail?: StringFilter<"SavedGame"> | string
    title?: StringFilter<"SavedGame"> | string
    userId?: StringFilter<"SavedGame"> | string
    minimum_system_requirements?: XOR<MinimumSystemRequirementsNullableScalarRelationFilter, MinimumSystemRequirementsWhereInput> | null
    screenshots?: ScreenshotListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SavedGameOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    developer?: SortOrder
    freetogame_profile_url?: SortOrder
    game_url?: SortOrder
    genre?: SortOrder
    game_id?: SortOrder
    platform?: SortOrder
    publisher?: SortOrder
    release_date?: SortOrder
    short_description?: SortOrder
    status?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    minimum_system_requirements?: MinimumSystemRequirementsOrderByWithRelationInput
    screenshots?: ScreenshotOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type SavedGameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    game_id?: number
    AND?: SavedGameWhereInput | SavedGameWhereInput[]
    OR?: SavedGameWhereInput[]
    NOT?: SavedGameWhereInput | SavedGameWhereInput[]
    description?: StringFilter<"SavedGame"> | string
    developer?: StringFilter<"SavedGame"> | string
    freetogame_profile_url?: StringFilter<"SavedGame"> | string
    game_url?: StringFilter<"SavedGame"> | string
    genre?: StringFilter<"SavedGame"> | string
    platform?: StringFilter<"SavedGame"> | string
    publisher?: StringFilter<"SavedGame"> | string
    release_date?: StringFilter<"SavedGame"> | string
    short_description?: StringFilter<"SavedGame"> | string
    status?: StringFilter<"SavedGame"> | string
    thumbnail?: StringFilter<"SavedGame"> | string
    title?: StringFilter<"SavedGame"> | string
    userId?: StringFilter<"SavedGame"> | string
    minimum_system_requirements?: XOR<MinimumSystemRequirementsNullableScalarRelationFilter, MinimumSystemRequirementsWhereInput> | null
    screenshots?: ScreenshotListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "game_id">

  export type SavedGameOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    developer?: SortOrder
    freetogame_profile_url?: SortOrder
    game_url?: SortOrder
    genre?: SortOrder
    game_id?: SortOrder
    platform?: SortOrder
    publisher?: SortOrder
    release_date?: SortOrder
    short_description?: SortOrder
    status?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    _count?: SavedGameCountOrderByAggregateInput
    _avg?: SavedGameAvgOrderByAggregateInput
    _max?: SavedGameMaxOrderByAggregateInput
    _min?: SavedGameMinOrderByAggregateInput
    _sum?: SavedGameSumOrderByAggregateInput
  }

  export type SavedGameScalarWhereWithAggregatesInput = {
    AND?: SavedGameScalarWhereWithAggregatesInput | SavedGameScalarWhereWithAggregatesInput[]
    OR?: SavedGameScalarWhereWithAggregatesInput[]
    NOT?: SavedGameScalarWhereWithAggregatesInput | SavedGameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedGame"> | string
    description?: StringWithAggregatesFilter<"SavedGame"> | string
    developer?: StringWithAggregatesFilter<"SavedGame"> | string
    freetogame_profile_url?: StringWithAggregatesFilter<"SavedGame"> | string
    game_url?: StringWithAggregatesFilter<"SavedGame"> | string
    genre?: StringWithAggregatesFilter<"SavedGame"> | string
    game_id?: IntWithAggregatesFilter<"SavedGame"> | number
    platform?: StringWithAggregatesFilter<"SavedGame"> | string
    publisher?: StringWithAggregatesFilter<"SavedGame"> | string
    release_date?: StringWithAggregatesFilter<"SavedGame"> | string
    short_description?: StringWithAggregatesFilter<"SavedGame"> | string
    status?: StringWithAggregatesFilter<"SavedGame"> | string
    thumbnail?: StringWithAggregatesFilter<"SavedGame"> | string
    title?: StringWithAggregatesFilter<"SavedGame"> | string
    userId?: StringWithAggregatesFilter<"SavedGame"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    savedGames?: SavedGameListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    savedGames?: SavedGameOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    savedGames?: SavedGameListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ScreenshotCreateInput = {
    id: number
    image: string
    savedGame: SavedGameCreateNestedOneWithoutScreenshotsInput
  }

  export type ScreenshotUncheckedCreateInput = {
    id: number
    image: string
    savedGameId: string
  }

  export type ScreenshotUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    savedGame?: SavedGameUpdateOneRequiredWithoutScreenshotsNestedInput
  }

  export type ScreenshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    savedGameId?: StringFieldUpdateOperationsInput | string
  }

  export type ScreenshotCreateManyInput = {
    id: number
    image: string
    savedGameId: string
  }

  export type ScreenshotUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ScreenshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    savedGameId?: StringFieldUpdateOperationsInput | string
  }

  export type MinimumSystemRequirementsCreateInput = {
    id?: string
    os?: string | null
    graphics?: string | null
    memory?: string | null
    storage?: string | null
    processor?: string | null
    savedGame: SavedGameCreateNestedOneWithoutMinimum_system_requirementsInput
  }

  export type MinimumSystemRequirementsUncheckedCreateInput = {
    id?: string
    os?: string | null
    graphics?: string | null
    memory?: string | null
    storage?: string | null
    processor?: string | null
    savedGameId: string
  }

  export type MinimumSystemRequirementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    os?: NullableStringFieldUpdateOperationsInput | string | null
    graphics?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
    savedGame?: SavedGameUpdateOneRequiredWithoutMinimum_system_requirementsNestedInput
  }

  export type MinimumSystemRequirementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    os?: NullableStringFieldUpdateOperationsInput | string | null
    graphics?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
    savedGameId?: StringFieldUpdateOperationsInput | string
  }

  export type MinimumSystemRequirementsCreateManyInput = {
    id?: string
    os?: string | null
    graphics?: string | null
    memory?: string | null
    storage?: string | null
    processor?: string | null
    savedGameId: string
  }

  export type MinimumSystemRequirementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    os?: NullableStringFieldUpdateOperationsInput | string | null
    graphics?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MinimumSystemRequirementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    os?: NullableStringFieldUpdateOperationsInput | string | null
    graphics?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
    savedGameId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedGameCreateInput = {
    id?: string
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    game_id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    status: string
    thumbnail: string
    title: string
    minimum_system_requirements?: MinimumSystemRequirementsCreateNestedOneWithoutSavedGameInput
    screenshots?: ScreenshotCreateNestedManyWithoutSavedGameInput
    user: UserCreateNestedOneWithoutSavedGamesInput
  }

  export type SavedGameUncheckedCreateInput = {
    id?: string
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    game_id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    status: string
    thumbnail: string
    title: string
    userId: string
    minimum_system_requirements?: MinimumSystemRequirementsUncheckedCreateNestedOneWithoutSavedGameInput
    screenshots?: ScreenshotUncheckedCreateNestedManyWithoutSavedGameInput
  }

  export type SavedGameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    freetogame_profile_url?: StringFieldUpdateOperationsInput | string
    game_url?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    game_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    minimum_system_requirements?: MinimumSystemRequirementsUpdateOneWithoutSavedGameNestedInput
    screenshots?: ScreenshotUpdateManyWithoutSavedGameNestedInput
    user?: UserUpdateOneRequiredWithoutSavedGamesNestedInput
  }

  export type SavedGameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    freetogame_profile_url?: StringFieldUpdateOperationsInput | string
    game_url?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    game_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    minimum_system_requirements?: MinimumSystemRequirementsUncheckedUpdateOneWithoutSavedGameNestedInput
    screenshots?: ScreenshotUncheckedUpdateManyWithoutSavedGameNestedInput
  }

  export type SavedGameCreateManyInput = {
    id?: string
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    game_id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    status: string
    thumbnail: string
    title: string
    userId: string
  }

  export type SavedGameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    freetogame_profile_url?: StringFieldUpdateOperationsInput | string
    game_url?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    game_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type SavedGameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    freetogame_profile_url?: StringFieldUpdateOperationsInput | string
    game_url?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    game_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    savedGames?: SavedGameCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    savedGames?: SavedGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    savedGames?: SavedGameUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    savedGames?: SavedGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SavedGameScalarRelationFilter = {
    is?: SavedGameWhereInput
    isNot?: SavedGameWhereInput
  }

  export type ScreenshotCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    savedGameId?: SortOrder
  }

  export type ScreenshotAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScreenshotMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    savedGameId?: SortOrder
  }

  export type ScreenshotMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    savedGameId?: SortOrder
  }

  export type ScreenshotSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MinimumSystemRequirementsCountOrderByAggregateInput = {
    id?: SortOrder
    os?: SortOrder
    graphics?: SortOrder
    memory?: SortOrder
    storage?: SortOrder
    processor?: SortOrder
    savedGameId?: SortOrder
  }

  export type MinimumSystemRequirementsMaxOrderByAggregateInput = {
    id?: SortOrder
    os?: SortOrder
    graphics?: SortOrder
    memory?: SortOrder
    storage?: SortOrder
    processor?: SortOrder
    savedGameId?: SortOrder
  }

  export type MinimumSystemRequirementsMinOrderByAggregateInput = {
    id?: SortOrder
    os?: SortOrder
    graphics?: SortOrder
    memory?: SortOrder
    storage?: SortOrder
    processor?: SortOrder
    savedGameId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MinimumSystemRequirementsNullableScalarRelationFilter = {
    is?: MinimumSystemRequirementsWhereInput | null
    isNot?: MinimumSystemRequirementsWhereInput | null
  }

  export type ScreenshotListRelationFilter = {
    every?: ScreenshotWhereInput
    some?: ScreenshotWhereInput
    none?: ScreenshotWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ScreenshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedGameCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    developer?: SortOrder
    freetogame_profile_url?: SortOrder
    game_url?: SortOrder
    genre?: SortOrder
    game_id?: SortOrder
    platform?: SortOrder
    publisher?: SortOrder
    release_date?: SortOrder
    short_description?: SortOrder
    status?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    userId?: SortOrder
  }

  export type SavedGameAvgOrderByAggregateInput = {
    game_id?: SortOrder
  }

  export type SavedGameMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    developer?: SortOrder
    freetogame_profile_url?: SortOrder
    game_url?: SortOrder
    genre?: SortOrder
    game_id?: SortOrder
    platform?: SortOrder
    publisher?: SortOrder
    release_date?: SortOrder
    short_description?: SortOrder
    status?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    userId?: SortOrder
  }

  export type SavedGameMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    developer?: SortOrder
    freetogame_profile_url?: SortOrder
    game_url?: SortOrder
    genre?: SortOrder
    game_id?: SortOrder
    platform?: SortOrder
    publisher?: SortOrder
    release_date?: SortOrder
    short_description?: SortOrder
    status?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    userId?: SortOrder
  }

  export type SavedGameSumOrderByAggregateInput = {
    game_id?: SortOrder
  }

  export type SavedGameListRelationFilter = {
    every?: SavedGameWhereInput
    some?: SavedGameWhereInput
    none?: SavedGameWhereInput
  }

  export type SavedGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type SavedGameCreateNestedOneWithoutScreenshotsInput = {
    create?: XOR<SavedGameCreateWithoutScreenshotsInput, SavedGameUncheckedCreateWithoutScreenshotsInput>
    connectOrCreate?: SavedGameCreateOrConnectWithoutScreenshotsInput
    connect?: SavedGameWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SavedGameUpdateOneRequiredWithoutScreenshotsNestedInput = {
    create?: XOR<SavedGameCreateWithoutScreenshotsInput, SavedGameUncheckedCreateWithoutScreenshotsInput>
    connectOrCreate?: SavedGameCreateOrConnectWithoutScreenshotsInput
    upsert?: SavedGameUpsertWithoutScreenshotsInput
    connect?: SavedGameWhereUniqueInput
    update?: XOR<XOR<SavedGameUpdateToOneWithWhereWithoutScreenshotsInput, SavedGameUpdateWithoutScreenshotsInput>, SavedGameUncheckedUpdateWithoutScreenshotsInput>
  }

  export type SavedGameCreateNestedOneWithoutMinimum_system_requirementsInput = {
    create?: XOR<SavedGameCreateWithoutMinimum_system_requirementsInput, SavedGameUncheckedCreateWithoutMinimum_system_requirementsInput>
    connectOrCreate?: SavedGameCreateOrConnectWithoutMinimum_system_requirementsInput
    connect?: SavedGameWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SavedGameUpdateOneRequiredWithoutMinimum_system_requirementsNestedInput = {
    create?: XOR<SavedGameCreateWithoutMinimum_system_requirementsInput, SavedGameUncheckedCreateWithoutMinimum_system_requirementsInput>
    connectOrCreate?: SavedGameCreateOrConnectWithoutMinimum_system_requirementsInput
    upsert?: SavedGameUpsertWithoutMinimum_system_requirementsInput
    connect?: SavedGameWhereUniqueInput
    update?: XOR<XOR<SavedGameUpdateToOneWithWhereWithoutMinimum_system_requirementsInput, SavedGameUpdateWithoutMinimum_system_requirementsInput>, SavedGameUncheckedUpdateWithoutMinimum_system_requirementsInput>
  }

  export type MinimumSystemRequirementsCreateNestedOneWithoutSavedGameInput = {
    create?: XOR<MinimumSystemRequirementsCreateWithoutSavedGameInput, MinimumSystemRequirementsUncheckedCreateWithoutSavedGameInput>
    connectOrCreate?: MinimumSystemRequirementsCreateOrConnectWithoutSavedGameInput
    connect?: MinimumSystemRequirementsWhereUniqueInput
  }

  export type ScreenshotCreateNestedManyWithoutSavedGameInput = {
    create?: XOR<ScreenshotCreateWithoutSavedGameInput, ScreenshotUncheckedCreateWithoutSavedGameInput> | ScreenshotCreateWithoutSavedGameInput[] | ScreenshotUncheckedCreateWithoutSavedGameInput[]
    connectOrCreate?: ScreenshotCreateOrConnectWithoutSavedGameInput | ScreenshotCreateOrConnectWithoutSavedGameInput[]
    createMany?: ScreenshotCreateManySavedGameInputEnvelope
    connect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSavedGamesInput = {
    create?: XOR<UserCreateWithoutSavedGamesInput, UserUncheckedCreateWithoutSavedGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedGamesInput
    connect?: UserWhereUniqueInput
  }

  export type MinimumSystemRequirementsUncheckedCreateNestedOneWithoutSavedGameInput = {
    create?: XOR<MinimumSystemRequirementsCreateWithoutSavedGameInput, MinimumSystemRequirementsUncheckedCreateWithoutSavedGameInput>
    connectOrCreate?: MinimumSystemRequirementsCreateOrConnectWithoutSavedGameInput
    connect?: MinimumSystemRequirementsWhereUniqueInput
  }

  export type ScreenshotUncheckedCreateNestedManyWithoutSavedGameInput = {
    create?: XOR<ScreenshotCreateWithoutSavedGameInput, ScreenshotUncheckedCreateWithoutSavedGameInput> | ScreenshotCreateWithoutSavedGameInput[] | ScreenshotUncheckedCreateWithoutSavedGameInput[]
    connectOrCreate?: ScreenshotCreateOrConnectWithoutSavedGameInput | ScreenshotCreateOrConnectWithoutSavedGameInput[]
    createMany?: ScreenshotCreateManySavedGameInputEnvelope
    connect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
  }

  export type MinimumSystemRequirementsUpdateOneWithoutSavedGameNestedInput = {
    create?: XOR<MinimumSystemRequirementsCreateWithoutSavedGameInput, MinimumSystemRequirementsUncheckedCreateWithoutSavedGameInput>
    connectOrCreate?: MinimumSystemRequirementsCreateOrConnectWithoutSavedGameInput
    upsert?: MinimumSystemRequirementsUpsertWithoutSavedGameInput
    disconnect?: MinimumSystemRequirementsWhereInput | boolean
    delete?: MinimumSystemRequirementsWhereInput | boolean
    connect?: MinimumSystemRequirementsWhereUniqueInput
    update?: XOR<XOR<MinimumSystemRequirementsUpdateToOneWithWhereWithoutSavedGameInput, MinimumSystemRequirementsUpdateWithoutSavedGameInput>, MinimumSystemRequirementsUncheckedUpdateWithoutSavedGameInput>
  }

  export type ScreenshotUpdateManyWithoutSavedGameNestedInput = {
    create?: XOR<ScreenshotCreateWithoutSavedGameInput, ScreenshotUncheckedCreateWithoutSavedGameInput> | ScreenshotCreateWithoutSavedGameInput[] | ScreenshotUncheckedCreateWithoutSavedGameInput[]
    connectOrCreate?: ScreenshotCreateOrConnectWithoutSavedGameInput | ScreenshotCreateOrConnectWithoutSavedGameInput[]
    upsert?: ScreenshotUpsertWithWhereUniqueWithoutSavedGameInput | ScreenshotUpsertWithWhereUniqueWithoutSavedGameInput[]
    createMany?: ScreenshotCreateManySavedGameInputEnvelope
    set?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    disconnect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    delete?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    connect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    update?: ScreenshotUpdateWithWhereUniqueWithoutSavedGameInput | ScreenshotUpdateWithWhereUniqueWithoutSavedGameInput[]
    updateMany?: ScreenshotUpdateManyWithWhereWithoutSavedGameInput | ScreenshotUpdateManyWithWhereWithoutSavedGameInput[]
    deleteMany?: ScreenshotScalarWhereInput | ScreenshotScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSavedGamesNestedInput = {
    create?: XOR<UserCreateWithoutSavedGamesInput, UserUncheckedCreateWithoutSavedGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedGamesInput
    upsert?: UserUpsertWithoutSavedGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedGamesInput, UserUpdateWithoutSavedGamesInput>, UserUncheckedUpdateWithoutSavedGamesInput>
  }

  export type MinimumSystemRequirementsUncheckedUpdateOneWithoutSavedGameNestedInput = {
    create?: XOR<MinimumSystemRequirementsCreateWithoutSavedGameInput, MinimumSystemRequirementsUncheckedCreateWithoutSavedGameInput>
    connectOrCreate?: MinimumSystemRequirementsCreateOrConnectWithoutSavedGameInput
    upsert?: MinimumSystemRequirementsUpsertWithoutSavedGameInput
    disconnect?: MinimumSystemRequirementsWhereInput | boolean
    delete?: MinimumSystemRequirementsWhereInput | boolean
    connect?: MinimumSystemRequirementsWhereUniqueInput
    update?: XOR<XOR<MinimumSystemRequirementsUpdateToOneWithWhereWithoutSavedGameInput, MinimumSystemRequirementsUpdateWithoutSavedGameInput>, MinimumSystemRequirementsUncheckedUpdateWithoutSavedGameInput>
  }

  export type ScreenshotUncheckedUpdateManyWithoutSavedGameNestedInput = {
    create?: XOR<ScreenshotCreateWithoutSavedGameInput, ScreenshotUncheckedCreateWithoutSavedGameInput> | ScreenshotCreateWithoutSavedGameInput[] | ScreenshotUncheckedCreateWithoutSavedGameInput[]
    connectOrCreate?: ScreenshotCreateOrConnectWithoutSavedGameInput | ScreenshotCreateOrConnectWithoutSavedGameInput[]
    upsert?: ScreenshotUpsertWithWhereUniqueWithoutSavedGameInput | ScreenshotUpsertWithWhereUniqueWithoutSavedGameInput[]
    createMany?: ScreenshotCreateManySavedGameInputEnvelope
    set?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    disconnect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    delete?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    connect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    update?: ScreenshotUpdateWithWhereUniqueWithoutSavedGameInput | ScreenshotUpdateWithWhereUniqueWithoutSavedGameInput[]
    updateMany?: ScreenshotUpdateManyWithWhereWithoutSavedGameInput | ScreenshotUpdateManyWithWhereWithoutSavedGameInput[]
    deleteMany?: ScreenshotScalarWhereInput | ScreenshotScalarWhereInput[]
  }

  export type SavedGameCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedGameCreateWithoutUserInput, SavedGameUncheckedCreateWithoutUserInput> | SavedGameCreateWithoutUserInput[] | SavedGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedGameCreateOrConnectWithoutUserInput | SavedGameCreateOrConnectWithoutUserInput[]
    createMany?: SavedGameCreateManyUserInputEnvelope
    connect?: SavedGameWhereUniqueInput | SavedGameWhereUniqueInput[]
  }

  export type SavedGameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedGameCreateWithoutUserInput, SavedGameUncheckedCreateWithoutUserInput> | SavedGameCreateWithoutUserInput[] | SavedGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedGameCreateOrConnectWithoutUserInput | SavedGameCreateOrConnectWithoutUserInput[]
    createMany?: SavedGameCreateManyUserInputEnvelope
    connect?: SavedGameWhereUniqueInput | SavedGameWhereUniqueInput[]
  }

  export type SavedGameUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedGameCreateWithoutUserInput, SavedGameUncheckedCreateWithoutUserInput> | SavedGameCreateWithoutUserInput[] | SavedGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedGameCreateOrConnectWithoutUserInput | SavedGameCreateOrConnectWithoutUserInput[]
    upsert?: SavedGameUpsertWithWhereUniqueWithoutUserInput | SavedGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedGameCreateManyUserInputEnvelope
    set?: SavedGameWhereUniqueInput | SavedGameWhereUniqueInput[]
    disconnect?: SavedGameWhereUniqueInput | SavedGameWhereUniqueInput[]
    delete?: SavedGameWhereUniqueInput | SavedGameWhereUniqueInput[]
    connect?: SavedGameWhereUniqueInput | SavedGameWhereUniqueInput[]
    update?: SavedGameUpdateWithWhereUniqueWithoutUserInput | SavedGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedGameUpdateManyWithWhereWithoutUserInput | SavedGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedGameScalarWhereInput | SavedGameScalarWhereInput[]
  }

  export type SavedGameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedGameCreateWithoutUserInput, SavedGameUncheckedCreateWithoutUserInput> | SavedGameCreateWithoutUserInput[] | SavedGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedGameCreateOrConnectWithoutUserInput | SavedGameCreateOrConnectWithoutUserInput[]
    upsert?: SavedGameUpsertWithWhereUniqueWithoutUserInput | SavedGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedGameCreateManyUserInputEnvelope
    set?: SavedGameWhereUniqueInput | SavedGameWhereUniqueInput[]
    disconnect?: SavedGameWhereUniqueInput | SavedGameWhereUniqueInput[]
    delete?: SavedGameWhereUniqueInput | SavedGameWhereUniqueInput[]
    connect?: SavedGameWhereUniqueInput | SavedGameWhereUniqueInput[]
    update?: SavedGameUpdateWithWhereUniqueWithoutUserInput | SavedGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedGameUpdateManyWithWhereWithoutUserInput | SavedGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedGameScalarWhereInput | SavedGameScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SavedGameCreateWithoutScreenshotsInput = {
    id?: string
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    game_id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    status: string
    thumbnail: string
    title: string
    minimum_system_requirements?: MinimumSystemRequirementsCreateNestedOneWithoutSavedGameInput
    user: UserCreateNestedOneWithoutSavedGamesInput
  }

  export type SavedGameUncheckedCreateWithoutScreenshotsInput = {
    id?: string
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    game_id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    status: string
    thumbnail: string
    title: string
    userId: string
    minimum_system_requirements?: MinimumSystemRequirementsUncheckedCreateNestedOneWithoutSavedGameInput
  }

  export type SavedGameCreateOrConnectWithoutScreenshotsInput = {
    where: SavedGameWhereUniqueInput
    create: XOR<SavedGameCreateWithoutScreenshotsInput, SavedGameUncheckedCreateWithoutScreenshotsInput>
  }

  export type SavedGameUpsertWithoutScreenshotsInput = {
    update: XOR<SavedGameUpdateWithoutScreenshotsInput, SavedGameUncheckedUpdateWithoutScreenshotsInput>
    create: XOR<SavedGameCreateWithoutScreenshotsInput, SavedGameUncheckedCreateWithoutScreenshotsInput>
    where?: SavedGameWhereInput
  }

  export type SavedGameUpdateToOneWithWhereWithoutScreenshotsInput = {
    where?: SavedGameWhereInput
    data: XOR<SavedGameUpdateWithoutScreenshotsInput, SavedGameUncheckedUpdateWithoutScreenshotsInput>
  }

  export type SavedGameUpdateWithoutScreenshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    freetogame_profile_url?: StringFieldUpdateOperationsInput | string
    game_url?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    game_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    minimum_system_requirements?: MinimumSystemRequirementsUpdateOneWithoutSavedGameNestedInput
    user?: UserUpdateOneRequiredWithoutSavedGamesNestedInput
  }

  export type SavedGameUncheckedUpdateWithoutScreenshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    freetogame_profile_url?: StringFieldUpdateOperationsInput | string
    game_url?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    game_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    minimum_system_requirements?: MinimumSystemRequirementsUncheckedUpdateOneWithoutSavedGameNestedInput
  }

  export type SavedGameCreateWithoutMinimum_system_requirementsInput = {
    id?: string
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    game_id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    status: string
    thumbnail: string
    title: string
    screenshots?: ScreenshotCreateNestedManyWithoutSavedGameInput
    user: UserCreateNestedOneWithoutSavedGamesInput
  }

  export type SavedGameUncheckedCreateWithoutMinimum_system_requirementsInput = {
    id?: string
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    game_id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    status: string
    thumbnail: string
    title: string
    userId: string
    screenshots?: ScreenshotUncheckedCreateNestedManyWithoutSavedGameInput
  }

  export type SavedGameCreateOrConnectWithoutMinimum_system_requirementsInput = {
    where: SavedGameWhereUniqueInput
    create: XOR<SavedGameCreateWithoutMinimum_system_requirementsInput, SavedGameUncheckedCreateWithoutMinimum_system_requirementsInput>
  }

  export type SavedGameUpsertWithoutMinimum_system_requirementsInput = {
    update: XOR<SavedGameUpdateWithoutMinimum_system_requirementsInput, SavedGameUncheckedUpdateWithoutMinimum_system_requirementsInput>
    create: XOR<SavedGameCreateWithoutMinimum_system_requirementsInput, SavedGameUncheckedCreateWithoutMinimum_system_requirementsInput>
    where?: SavedGameWhereInput
  }

  export type SavedGameUpdateToOneWithWhereWithoutMinimum_system_requirementsInput = {
    where?: SavedGameWhereInput
    data: XOR<SavedGameUpdateWithoutMinimum_system_requirementsInput, SavedGameUncheckedUpdateWithoutMinimum_system_requirementsInput>
  }

  export type SavedGameUpdateWithoutMinimum_system_requirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    freetogame_profile_url?: StringFieldUpdateOperationsInput | string
    game_url?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    game_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    screenshots?: ScreenshotUpdateManyWithoutSavedGameNestedInput
    user?: UserUpdateOneRequiredWithoutSavedGamesNestedInput
  }

  export type SavedGameUncheckedUpdateWithoutMinimum_system_requirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    freetogame_profile_url?: StringFieldUpdateOperationsInput | string
    game_url?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    game_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    screenshots?: ScreenshotUncheckedUpdateManyWithoutSavedGameNestedInput
  }

  export type MinimumSystemRequirementsCreateWithoutSavedGameInput = {
    id?: string
    os?: string | null
    graphics?: string | null
    memory?: string | null
    storage?: string | null
    processor?: string | null
  }

  export type MinimumSystemRequirementsUncheckedCreateWithoutSavedGameInput = {
    id?: string
    os?: string | null
    graphics?: string | null
    memory?: string | null
    storage?: string | null
    processor?: string | null
  }

  export type MinimumSystemRequirementsCreateOrConnectWithoutSavedGameInput = {
    where: MinimumSystemRequirementsWhereUniqueInput
    create: XOR<MinimumSystemRequirementsCreateWithoutSavedGameInput, MinimumSystemRequirementsUncheckedCreateWithoutSavedGameInput>
  }

  export type ScreenshotCreateWithoutSavedGameInput = {
    id: number
    image: string
  }

  export type ScreenshotUncheckedCreateWithoutSavedGameInput = {
    id: number
    image: string
  }

  export type ScreenshotCreateOrConnectWithoutSavedGameInput = {
    where: ScreenshotWhereUniqueInput
    create: XOR<ScreenshotCreateWithoutSavedGameInput, ScreenshotUncheckedCreateWithoutSavedGameInput>
  }

  export type ScreenshotCreateManySavedGameInputEnvelope = {
    data: ScreenshotCreateManySavedGameInput | ScreenshotCreateManySavedGameInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSavedGamesInput = {
    id?: string
    email: string
    username: string
    password: string
  }

  export type UserUncheckedCreateWithoutSavedGamesInput = {
    id?: string
    email: string
    username: string
    password: string
  }

  export type UserCreateOrConnectWithoutSavedGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedGamesInput, UserUncheckedCreateWithoutSavedGamesInput>
  }

  export type MinimumSystemRequirementsUpsertWithoutSavedGameInput = {
    update: XOR<MinimumSystemRequirementsUpdateWithoutSavedGameInput, MinimumSystemRequirementsUncheckedUpdateWithoutSavedGameInput>
    create: XOR<MinimumSystemRequirementsCreateWithoutSavedGameInput, MinimumSystemRequirementsUncheckedCreateWithoutSavedGameInput>
    where?: MinimumSystemRequirementsWhereInput
  }

  export type MinimumSystemRequirementsUpdateToOneWithWhereWithoutSavedGameInput = {
    where?: MinimumSystemRequirementsWhereInput
    data: XOR<MinimumSystemRequirementsUpdateWithoutSavedGameInput, MinimumSystemRequirementsUncheckedUpdateWithoutSavedGameInput>
  }

  export type MinimumSystemRequirementsUpdateWithoutSavedGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    os?: NullableStringFieldUpdateOperationsInput | string | null
    graphics?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MinimumSystemRequirementsUncheckedUpdateWithoutSavedGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    os?: NullableStringFieldUpdateOperationsInput | string | null
    graphics?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    storage?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScreenshotUpsertWithWhereUniqueWithoutSavedGameInput = {
    where: ScreenshotWhereUniqueInput
    update: XOR<ScreenshotUpdateWithoutSavedGameInput, ScreenshotUncheckedUpdateWithoutSavedGameInput>
    create: XOR<ScreenshotCreateWithoutSavedGameInput, ScreenshotUncheckedCreateWithoutSavedGameInput>
  }

  export type ScreenshotUpdateWithWhereUniqueWithoutSavedGameInput = {
    where: ScreenshotWhereUniqueInput
    data: XOR<ScreenshotUpdateWithoutSavedGameInput, ScreenshotUncheckedUpdateWithoutSavedGameInput>
  }

  export type ScreenshotUpdateManyWithWhereWithoutSavedGameInput = {
    where: ScreenshotScalarWhereInput
    data: XOR<ScreenshotUpdateManyMutationInput, ScreenshotUncheckedUpdateManyWithoutSavedGameInput>
  }

  export type ScreenshotScalarWhereInput = {
    AND?: ScreenshotScalarWhereInput | ScreenshotScalarWhereInput[]
    OR?: ScreenshotScalarWhereInput[]
    NOT?: ScreenshotScalarWhereInput | ScreenshotScalarWhereInput[]
    id?: IntFilter<"Screenshot"> | number
    image?: StringFilter<"Screenshot"> | string
    savedGameId?: StringFilter<"Screenshot"> | string
  }

  export type UserUpsertWithoutSavedGamesInput = {
    update: XOR<UserUpdateWithoutSavedGamesInput, UserUncheckedUpdateWithoutSavedGamesInput>
    create: XOR<UserCreateWithoutSavedGamesInput, UserUncheckedCreateWithoutSavedGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedGamesInput, UserUncheckedUpdateWithoutSavedGamesInput>
  }

  export type UserUpdateWithoutSavedGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutSavedGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SavedGameCreateWithoutUserInput = {
    id?: string
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    game_id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    status: string
    thumbnail: string
    title: string
    minimum_system_requirements?: MinimumSystemRequirementsCreateNestedOneWithoutSavedGameInput
    screenshots?: ScreenshotCreateNestedManyWithoutSavedGameInput
  }

  export type SavedGameUncheckedCreateWithoutUserInput = {
    id?: string
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    game_id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    status: string
    thumbnail: string
    title: string
    minimum_system_requirements?: MinimumSystemRequirementsUncheckedCreateNestedOneWithoutSavedGameInput
    screenshots?: ScreenshotUncheckedCreateNestedManyWithoutSavedGameInput
  }

  export type SavedGameCreateOrConnectWithoutUserInput = {
    where: SavedGameWhereUniqueInput
    create: XOR<SavedGameCreateWithoutUserInput, SavedGameUncheckedCreateWithoutUserInput>
  }

  export type SavedGameCreateManyUserInputEnvelope = {
    data: SavedGameCreateManyUserInput | SavedGameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedGameUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedGameWhereUniqueInput
    update: XOR<SavedGameUpdateWithoutUserInput, SavedGameUncheckedUpdateWithoutUserInput>
    create: XOR<SavedGameCreateWithoutUserInput, SavedGameUncheckedCreateWithoutUserInput>
  }

  export type SavedGameUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedGameWhereUniqueInput
    data: XOR<SavedGameUpdateWithoutUserInput, SavedGameUncheckedUpdateWithoutUserInput>
  }

  export type SavedGameUpdateManyWithWhereWithoutUserInput = {
    where: SavedGameScalarWhereInput
    data: XOR<SavedGameUpdateManyMutationInput, SavedGameUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedGameScalarWhereInput = {
    AND?: SavedGameScalarWhereInput | SavedGameScalarWhereInput[]
    OR?: SavedGameScalarWhereInput[]
    NOT?: SavedGameScalarWhereInput | SavedGameScalarWhereInput[]
    id?: StringFilter<"SavedGame"> | string
    description?: StringFilter<"SavedGame"> | string
    developer?: StringFilter<"SavedGame"> | string
    freetogame_profile_url?: StringFilter<"SavedGame"> | string
    game_url?: StringFilter<"SavedGame"> | string
    genre?: StringFilter<"SavedGame"> | string
    game_id?: IntFilter<"SavedGame"> | number
    platform?: StringFilter<"SavedGame"> | string
    publisher?: StringFilter<"SavedGame"> | string
    release_date?: StringFilter<"SavedGame"> | string
    short_description?: StringFilter<"SavedGame"> | string
    status?: StringFilter<"SavedGame"> | string
    thumbnail?: StringFilter<"SavedGame"> | string
    title?: StringFilter<"SavedGame"> | string
    userId?: StringFilter<"SavedGame"> | string
  }

  export type ScreenshotCreateManySavedGameInput = {
    id: number
    image: string
  }

  export type ScreenshotUpdateWithoutSavedGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ScreenshotUncheckedUpdateWithoutSavedGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ScreenshotUncheckedUpdateManyWithoutSavedGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type SavedGameCreateManyUserInput = {
    id?: string
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    game_id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    status: string
    thumbnail: string
    title: string
  }

  export type SavedGameUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    freetogame_profile_url?: StringFieldUpdateOperationsInput | string
    game_url?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    game_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    minimum_system_requirements?: MinimumSystemRequirementsUpdateOneWithoutSavedGameNestedInput
    screenshots?: ScreenshotUpdateManyWithoutSavedGameNestedInput
  }

  export type SavedGameUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    freetogame_profile_url?: StringFieldUpdateOperationsInput | string
    game_url?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    game_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    minimum_system_requirements?: MinimumSystemRequirementsUncheckedUpdateOneWithoutSavedGameNestedInput
    screenshots?: ScreenshotUncheckedUpdateManyWithoutSavedGameNestedInput
  }

  export type SavedGameUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    freetogame_profile_url?: StringFieldUpdateOperationsInput | string
    game_url?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    game_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}