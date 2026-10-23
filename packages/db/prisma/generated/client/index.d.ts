
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
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Market
 * 
 */
export type Market = $Result.DefaultSelection<Prisma.$MarketPayload>
/**
 * Model Commodity
 * 
 */
export type Commodity = $Result.DefaultSelection<Prisma.$CommodityPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Source
 * 
 */
export type Source = $Result.DefaultSelection<Prisma.$SourcePayload>
/**
 * Model Observation
 * 
 */
export type Observation = $Result.DefaultSelection<Prisma.$ObservationPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model ConsentRecord
 * 
 */
export type ConsentRecord = $Result.DefaultSelection<Prisma.$ConsentRecordPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model AssistantMessage
 * 
 */
export type AssistantMessage = $Result.DefaultSelection<Prisma.$AssistantMessagePayload>
/**
 * Model ForecastGate
 * 
 */
export type ForecastGate = $Result.DefaultSelection<Prisma.$ForecastGatePayload>
/**
 * Model JobRun
 * 
 */
export type JobRun = $Result.DefaultSelection<Prisma.$JobRunPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.country.findMany()
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
   * // Fetch zero or more Countries
   * const countries = await prisma.country.findMany()
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
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.market`: Exposes CRUD operations for the **Market** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markets
    * const markets = await prisma.market.findMany()
    * ```
    */
  get market(): Prisma.MarketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commodity`: Exposes CRUD operations for the **Commodity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commodities
    * const commodities = await prisma.commodity.findMany()
    * ```
    */
  get commodity(): Prisma.CommodityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.source`: Exposes CRUD operations for the **Source** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sources
    * const sources = await prisma.source.findMany()
    * ```
    */
  get source(): Prisma.SourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.observation`: Exposes CRUD operations for the **Observation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Observations
    * const observations = await prisma.observation.findMany()
    * ```
    */
  get observation(): Prisma.ObservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consentRecord`: Exposes CRUD operations for the **ConsentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsentRecords
    * const consentRecords = await prisma.consentRecord.findMany()
    * ```
    */
  get consentRecord(): Prisma.ConsentRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assistantMessage`: Exposes CRUD operations for the **AssistantMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssistantMessages
    * const assistantMessages = await prisma.assistantMessage.findMany()
    * ```
    */
  get assistantMessage(): Prisma.AssistantMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forecastGate`: Exposes CRUD operations for the **ForecastGate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForecastGates
    * const forecastGates = await prisma.forecastGate.findMany()
    * ```
    */
  get forecastGate(): Prisma.ForecastGateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobRun`: Exposes CRUD operations for the **JobRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobRuns
    * const jobRuns = await prisma.jobRun.findMany()
    * ```
    */
  get jobRun(): Prisma.JobRunDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Country: 'Country',
    Market: 'Market',
    Commodity: 'Commodity',
    Unit: 'Unit',
    Source: 'Source',
    Observation: 'Observation',
    Report: 'Report',
    ConsentRecord: 'ConsentRecord',
    AuditLog: 'AuditLog',
    AssistantMessage: 'AssistantMessage',
    ForecastGate: 'ForecastGate',
    JobRun: 'JobRun'
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
      modelProps: "country" | "market" | "commodity" | "unit" | "source" | "observation" | "report" | "consentRecord" | "auditLog" | "assistantMessage" | "forecastGate" | "jobRun"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Market: {
        payload: Prisma.$MarketPayload<ExtArgs>
        fields: Prisma.MarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findFirst: {
            args: Prisma.MarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findMany: {
            args: Prisma.MarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          create: {
            args: Prisma.MarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          createMany: {
            args: Prisma.MarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          delete: {
            args: Prisma.MarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          update: {
            args: Prisma.MarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          deleteMany: {
            args: Prisma.MarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          upsert: {
            args: Prisma.MarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          aggregate: {
            args: Prisma.MarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarket>
          }
          groupBy: {
            args: Prisma.MarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketCountArgs<ExtArgs>
            result: $Utils.Optional<MarketCountAggregateOutputType> | number
          }
        }
      }
      Commodity: {
        payload: Prisma.$CommodityPayload<ExtArgs>
        fields: Prisma.CommodityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommodityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommodityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          findFirst: {
            args: Prisma.CommodityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommodityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          findMany: {
            args: Prisma.CommodityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>[]
          }
          create: {
            args: Prisma.CommodityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          createMany: {
            args: Prisma.CommodityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommodityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>[]
          }
          delete: {
            args: Prisma.CommodityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          update: {
            args: Prisma.CommodityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          deleteMany: {
            args: Prisma.CommodityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommodityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommodityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>[]
          }
          upsert: {
            args: Prisma.CommodityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommodityPayload>
          }
          aggregate: {
            args: Prisma.CommodityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommodity>
          }
          groupBy: {
            args: Prisma.CommodityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommodityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommodityCountArgs<ExtArgs>
            result: $Utils.Optional<CommodityCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Source: {
        payload: Prisma.$SourcePayload<ExtArgs>
        fields: Prisma.SourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findFirst: {
            args: Prisma.SourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findMany: {
            args: Prisma.SourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          create: {
            args: Prisma.SourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          createMany: {
            args: Prisma.SourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          delete: {
            args: Prisma.SourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          update: {
            args: Prisma.SourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          deleteMany: {
            args: Prisma.SourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          upsert: {
            args: Prisma.SourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          aggregate: {
            args: Prisma.SourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSource>
          }
          groupBy: {
            args: Prisma.SourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceCountArgs<ExtArgs>
            result: $Utils.Optional<SourceCountAggregateOutputType> | number
          }
        }
      }
      Observation: {
        payload: Prisma.$ObservationPayload<ExtArgs>
        fields: Prisma.ObservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          findFirst: {
            args: Prisma.ObservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          findMany: {
            args: Prisma.ObservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>[]
          }
          create: {
            args: Prisma.ObservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          createMany: {
            args: Prisma.ObservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>[]
          }
          delete: {
            args: Prisma.ObservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          update: {
            args: Prisma.ObservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          deleteMany: {
            args: Prisma.ObservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>[]
          }
          upsert: {
            args: Prisma.ObservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          aggregate: {
            args: Prisma.ObservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObservation>
          }
          groupBy: {
            args: Prisma.ObservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObservationCountArgs<ExtArgs>
            result: $Utils.Optional<ObservationCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      ConsentRecord: {
        payload: Prisma.$ConsentRecordPayload<ExtArgs>
        fields: Prisma.ConsentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentRecordPayload>
          }
          findFirst: {
            args: Prisma.ConsentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentRecordPayload>
          }
          findMany: {
            args: Prisma.ConsentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentRecordPayload>[]
          }
          create: {
            args: Prisma.ConsentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentRecordPayload>
          }
          createMany: {
            args: Prisma.ConsentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsentRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentRecordPayload>[]
          }
          delete: {
            args: Prisma.ConsentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentRecordPayload>
          }
          update: {
            args: Prisma.ConsentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentRecordPayload>
          }
          deleteMany: {
            args: Prisma.ConsentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsentRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentRecordPayload>[]
          }
          upsert: {
            args: Prisma.ConsentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentRecordPayload>
          }
          aggregate: {
            args: Prisma.ConsentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsentRecord>
          }
          groupBy: {
            args: Prisma.ConsentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ConsentRecordCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      AssistantMessage: {
        payload: Prisma.$AssistantMessagePayload<ExtArgs>
        fields: Prisma.AssistantMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssistantMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssistantMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantMessagePayload>
          }
          findFirst: {
            args: Prisma.AssistantMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssistantMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantMessagePayload>
          }
          findMany: {
            args: Prisma.AssistantMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantMessagePayload>[]
          }
          create: {
            args: Prisma.AssistantMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantMessagePayload>
          }
          createMany: {
            args: Prisma.AssistantMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssistantMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantMessagePayload>[]
          }
          delete: {
            args: Prisma.AssistantMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantMessagePayload>
          }
          update: {
            args: Prisma.AssistantMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantMessagePayload>
          }
          deleteMany: {
            args: Prisma.AssistantMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssistantMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssistantMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantMessagePayload>[]
          }
          upsert: {
            args: Prisma.AssistantMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantMessagePayload>
          }
          aggregate: {
            args: Prisma.AssistantMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssistantMessage>
          }
          groupBy: {
            args: Prisma.AssistantMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssistantMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssistantMessageCountArgs<ExtArgs>
            result: $Utils.Optional<AssistantMessageCountAggregateOutputType> | number
          }
        }
      }
      ForecastGate: {
        payload: Prisma.$ForecastGatePayload<ExtArgs>
        fields: Prisma.ForecastGateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForecastGateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastGatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForecastGateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastGatePayload>
          }
          findFirst: {
            args: Prisma.ForecastGateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastGatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForecastGateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastGatePayload>
          }
          findMany: {
            args: Prisma.ForecastGateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastGatePayload>[]
          }
          create: {
            args: Prisma.ForecastGateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastGatePayload>
          }
          createMany: {
            args: Prisma.ForecastGateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForecastGateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastGatePayload>[]
          }
          delete: {
            args: Prisma.ForecastGateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastGatePayload>
          }
          update: {
            args: Prisma.ForecastGateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastGatePayload>
          }
          deleteMany: {
            args: Prisma.ForecastGateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForecastGateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForecastGateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastGatePayload>[]
          }
          upsert: {
            args: Prisma.ForecastGateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForecastGatePayload>
          }
          aggregate: {
            args: Prisma.ForecastGateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForecastGate>
          }
          groupBy: {
            args: Prisma.ForecastGateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForecastGateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForecastGateCountArgs<ExtArgs>
            result: $Utils.Optional<ForecastGateCountAggregateOutputType> | number
          }
        }
      }
      JobRun: {
        payload: Prisma.$JobRunPayload<ExtArgs>
        fields: Prisma.JobRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRunPayload>
          }
          findFirst: {
            args: Prisma.JobRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRunPayload>
          }
          findMany: {
            args: Prisma.JobRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRunPayload>[]
          }
          create: {
            args: Prisma.JobRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRunPayload>
          }
          createMany: {
            args: Prisma.JobRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRunPayload>[]
          }
          delete: {
            args: Prisma.JobRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRunPayload>
          }
          update: {
            args: Prisma.JobRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRunPayload>
          }
          deleteMany: {
            args: Prisma.JobRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRunPayload>[]
          }
          upsert: {
            args: Prisma.JobRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobRunPayload>
          }
          aggregate: {
            args: Prisma.JobRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobRun>
          }
          groupBy: {
            args: Prisma.JobRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobRunCountArgs<ExtArgs>
            result: $Utils.Optional<JobRunCountAggregateOutputType> | number
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
    country?: CountryOmit
    market?: MarketOmit
    commodity?: CommodityOmit
    unit?: UnitOmit
    source?: SourceOmit
    observation?: ObservationOmit
    report?: ReportOmit
    consentRecord?: ConsentRecordOmit
    auditLog?: AuditLogOmit
    assistantMessage?: AssistantMessageOmit
    forecastGate?: ForecastGateOmit
    jobRun?: JobRunOmit
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
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    Market: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Market?: boolean | CountryCountOutputTypeCountMarketArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountMarketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
  }


  /**
   * Count Type MarketCountOutputType
   */

  export type MarketCountOutputType = {
    Observation: number
    ForecastGate: number
    Report: number
  }

  export type MarketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Observation?: boolean | MarketCountOutputTypeCountObservationArgs
    ForecastGate?: boolean | MarketCountOutputTypeCountForecastGateArgs
    Report?: boolean | MarketCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCountOutputType
     */
    select?: MarketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountObservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationWhereInput
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountForecastGateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForecastGateWhereInput
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Count Type CommodityCountOutputType
   */

  export type CommodityCountOutputType = {
    Unit: number
    Observation: number
    ForecastGate: number
  }

  export type CommodityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Unit?: boolean | CommodityCountOutputTypeCountUnitArgs
    Observation?: boolean | CommodityCountOutputTypeCountObservationArgs
    ForecastGate?: boolean | CommodityCountOutputTypeCountForecastGateArgs
  }

  // Custom InputTypes
  /**
   * CommodityCountOutputType without action
   */
  export type CommodityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommodityCountOutputType
     */
    select?: CommodityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommodityCountOutputType without action
   */
  export type CommodityCountOutputTypeCountUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }

  /**
   * CommodityCountOutputType without action
   */
  export type CommodityCountOutputTypeCountObservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationWhereInput
  }

  /**
   * CommodityCountOutputType without action
   */
  export type CommodityCountOutputTypeCountForecastGateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForecastGateWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    Observations: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Observations?: boolean | UnitCountOutputTypeCountObservationsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountObservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationWhereInput
  }


  /**
   * Count Type SourceCountOutputType
   */

  export type SourceCountOutputType = {
    Observation: number
  }

  export type SourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Observation?: boolean | SourceCountOutputTypeCountObservationArgs
  }

  // Custom InputTypes
  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCountOutputType
     */
    select?: SourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeCountObservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    currencyCode: string | null
    timezone: string | null
    privacyRegime: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    currencyCode: string | null
    timezone: string | null
    privacyRegime: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    code: number
    name: number
    currencyCode: number
    timezone: number
    privacyRegime: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    currencyCode?: true
    timezone?: true
    privacyRegime?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    currencyCode?: true
    timezone?: true
    privacyRegime?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    currencyCode?: true
    timezone?: true
    privacyRegime?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: string
    code: string
    name: string
    currencyCode: string
    timezone: string
    privacyRegime: string | null
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    currencyCode?: boolean
    timezone?: boolean
    privacyRegime?: boolean
    Market?: boolean | Country$MarketArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    currencyCode?: boolean
    timezone?: boolean
    privacyRegime?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    currencyCode?: boolean
    timezone?: boolean
    privacyRegime?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    currencyCode?: boolean
    timezone?: boolean
    privacyRegime?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "currencyCode" | "timezone" | "privacyRegime", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Market?: boolean | Country$MarketArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      Market: Prisma.$MarketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      currencyCode: string
      timezone: string
      privacyRegime: string | null
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
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
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Market<T extends Country$MarketArgs<ExtArgs> = {}>(args?: Subset<T, Country$MarketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'String'>
    readonly code: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly currencyCode: FieldRef<"Country", 'String'>
    readonly timezone: FieldRef<"Country", 'String'>
    readonly privacyRegime: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.Market
   */
  export type Country$MarketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    cursor?: MarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Market
   */

  export type AggregateMarket = {
    _count: MarketCountAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  export type MarketMinAggregateOutputType = {
    id: string | null
    name: string | null
    state: string | null
    countryId: string | null
    isPilot: boolean | null
  }

  export type MarketMaxAggregateOutputType = {
    id: string | null
    name: string | null
    state: string | null
    countryId: string | null
    isPilot: boolean | null
  }

  export type MarketCountAggregateOutputType = {
    id: number
    name: number
    state: number
    countryId: number
    isPilot: number
    _all: number
  }


  export type MarketMinAggregateInputType = {
    id?: true
    name?: true
    state?: true
    countryId?: true
    isPilot?: true
  }

  export type MarketMaxAggregateInputType = {
    id?: true
    name?: true
    state?: true
    countryId?: true
    isPilot?: true
  }

  export type MarketCountAggregateInputType = {
    id?: true
    name?: true
    state?: true
    countryId?: true
    isPilot?: true
    _all?: true
  }

  export type MarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Market to aggregate.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markets
    **/
    _count?: true | MarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketMaxAggregateInputType
  }

  export type GetMarketAggregateType<T extends MarketAggregateArgs> = {
        [P in keyof T & keyof AggregateMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarket[P]>
      : GetScalarType<T[P], AggregateMarket[P]>
  }




  export type MarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithAggregationInput | MarketOrderByWithAggregationInput[]
    by: MarketScalarFieldEnum[] | MarketScalarFieldEnum
    having?: MarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketCountAggregateInputType | true
    _min?: MarketMinAggregateInputType
    _max?: MarketMaxAggregateInputType
  }

  export type MarketGroupByOutputType = {
    id: string
    name: string
    state: string | null
    countryId: string
    isPilot: boolean
    _count: MarketCountAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  type GetMarketGroupByPayload<T extends MarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketGroupByOutputType[P]>
            : GetScalarType<T[P], MarketGroupByOutputType[P]>
        }
      >
    >


  export type MarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state?: boolean
    countryId?: boolean
    isPilot?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    Observation?: boolean | Market$ObservationArgs<ExtArgs>
    ForecastGate?: boolean | Market$ForecastGateArgs<ExtArgs>
    Report?: boolean | Market$ReportArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state?: boolean
    countryId?: boolean
    isPilot?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state?: boolean
    countryId?: boolean
    isPilot?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectScalar = {
    id?: boolean
    name?: boolean
    state?: boolean
    countryId?: boolean
    isPilot?: boolean
  }

  export type MarketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "state" | "countryId" | "isPilot", ExtArgs["result"]["market"]>
  export type MarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    Observation?: boolean | Market$ObservationArgs<ExtArgs>
    ForecastGate?: boolean | Market$ForecastGateArgs<ExtArgs>
    Report?: boolean | Market$ReportArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type MarketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $MarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Market"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      Observation: Prisma.$ObservationPayload<ExtArgs>[]
      ForecastGate: Prisma.$ForecastGatePayload<ExtArgs>[]
      Report: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      state: string | null
      countryId: string
      isPilot: boolean
    }, ExtArgs["result"]["market"]>
    composites: {}
  }

  type MarketGetPayload<S extends boolean | null | undefined | MarketDefaultArgs> = $Result.GetResult<Prisma.$MarketPayload, S>

  type MarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketCountAggregateInputType | true
    }

  export interface MarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Market'], meta: { name: 'Market' } }
    /**
     * Find zero or one Market that matches the filter.
     * @param {MarketFindUniqueArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketFindUniqueArgs>(args: SelectSubset<T, MarketFindUniqueArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Market that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketFindUniqueOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketFindFirstArgs>(args?: SelectSubset<T, MarketFindFirstArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markets
     * const markets = await prisma.market.findMany()
     * 
     * // Get first 10 Markets
     * const markets = await prisma.market.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketWithIdOnly = await prisma.market.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketFindManyArgs>(args?: SelectSubset<T, MarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Market.
     * @param {MarketCreateArgs} args - Arguments to create a Market.
     * @example
     * // Create one Market
     * const Market = await prisma.market.create({
     *   data: {
     *     // ... data to create a Market
     *   }
     * })
     * 
     */
    create<T extends MarketCreateArgs>(args: SelectSubset<T, MarketCreateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markets.
     * @param {MarketCreateManyArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketCreateManyArgs>(args?: SelectSubset<T, MarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markets and returns the data saved in the database.
     * @param {MarketCreateManyAndReturnArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Market.
     * @param {MarketDeleteArgs} args - Arguments to delete one Market.
     * @example
     * // Delete one Market
     * const Market = await prisma.market.delete({
     *   where: {
     *     // ... filter to delete one Market
     *   }
     * })
     * 
     */
    delete<T extends MarketDeleteArgs>(args: SelectSubset<T, MarketDeleteArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Market.
     * @param {MarketUpdateArgs} args - Arguments to update one Market.
     * @example
     * // Update one Market
     * const market = await prisma.market.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketUpdateArgs>(args: SelectSubset<T, MarketUpdateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markets.
     * @param {MarketDeleteManyArgs} args - Arguments to filter Markets to delete.
     * @example
     * // Delete a few Markets
     * const { count } = await prisma.market.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDeleteManyArgs>(args?: SelectSubset<T, MarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketUpdateManyArgs>(args: SelectSubset<T, MarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets and returns the data updated in the database.
     * @param {MarketUpdateManyAndReturnArgs} args - Arguments to update many Markets.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarketUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Market.
     * @param {MarketUpsertArgs} args - Arguments to update or create a Market.
     * @example
     * // Update or create a Market
     * const market = await prisma.market.upsert({
     *   create: {
     *     // ... data to create a Market
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Market we want to update
     *   }
     * })
     */
    upsert<T extends MarketUpsertArgs>(args: SelectSubset<T, MarketUpsertArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCountArgs} args - Arguments to filter Markets to count.
     * @example
     * // Count the number of Markets
     * const count = await prisma.market.count({
     *   where: {
     *     // ... the filter for the Markets we want to count
     *   }
     * })
    **/
    count<T extends MarketCountArgs>(
      args?: Subset<T, MarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketAggregateArgs>(args: Subset<T, MarketAggregateArgs>): Prisma.PrismaPromise<GetMarketAggregateType<T>>

    /**
     * Group by Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGroupByArgs} args - Group by arguments.
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
      T extends MarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketGroupByArgs['orderBy'] }
        : { orderBy?: MarketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Market model
   */
  readonly fields: MarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Market.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Observation<T extends Market$ObservationArgs<ExtArgs> = {}>(args?: Subset<T, Market$ObservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ForecastGate<T extends Market$ForecastGateArgs<ExtArgs> = {}>(args?: Subset<T, Market$ForecastGateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Report<T extends Market$ReportArgs<ExtArgs> = {}>(args?: Subset<T, Market$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Market model
   */
  interface MarketFieldRefs {
    readonly id: FieldRef<"Market", 'String'>
    readonly name: FieldRef<"Market", 'String'>
    readonly state: FieldRef<"Market", 'String'>
    readonly countryId: FieldRef<"Market", 'String'>
    readonly isPilot: FieldRef<"Market", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Market findUnique
   */
  export type MarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findUniqueOrThrow
   */
  export type MarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findFirst
   */
  export type MarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findFirstOrThrow
   */
  export type MarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findMany
   */
  export type MarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market create
   */
  export type MarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to create a Market.
     */
    data: XOR<MarketCreateInput, MarketUncheckedCreateInput>
  }

  /**
   * Market createMany
   */
  export type MarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
  }

  /**
   * Market createManyAndReturn
   */
  export type MarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Market update
   */
  export type MarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to update a Market.
     */
    data: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
    /**
     * Choose, which Market to update.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market updateMany
   */
  export type MarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market updateManyAndReturn
   */
  export type MarketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Market upsert
   */
  export type MarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The filter to search for the Market to update in case it exists.
     */
    where: MarketWhereUniqueInput
    /**
     * In case the Market found by the `where` argument doesn't exist, create a new Market with this data.
     */
    create: XOR<MarketCreateInput, MarketUncheckedCreateInput>
    /**
     * In case the Market was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
  }

  /**
   * Market delete
   */
  export type MarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter which Market to delete.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market deleteMany
   */
  export type MarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markets to delete
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to delete.
     */
    limit?: number
  }

  /**
   * Market.Observation
   */
  export type Market$ObservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    where?: ObservationWhereInput
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    cursor?: ObservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Market.ForecastGate
   */
  export type Market$ForecastGateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
    where?: ForecastGateWhereInput
    orderBy?: ForecastGateOrderByWithRelationInput | ForecastGateOrderByWithRelationInput[]
    cursor?: ForecastGateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForecastGateScalarFieldEnum | ForecastGateScalarFieldEnum[]
  }

  /**
   * Market.Report
   */
  export type Market$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Market without action
   */
  export type MarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
  }


  /**
   * Model Commodity
   */

  export type AggregateCommodity = {
    _count: CommodityCountAggregateOutputType | null
    _min: CommodityMinAggregateOutputType | null
    _max: CommodityMaxAggregateOutputType | null
  }

  export type CommodityMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
  }

  export type CommodityMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
  }

  export type CommodityCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    _all: number
  }


  export type CommodityMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
  }

  export type CommodityMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
  }

  export type CommodityCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    _all?: true
  }

  export type CommodityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commodity to aggregate.
     */
    where?: CommodityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commodities to fetch.
     */
    orderBy?: CommodityOrderByWithRelationInput | CommodityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommodityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commodities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commodities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commodities
    **/
    _count?: true | CommodityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommodityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommodityMaxAggregateInputType
  }

  export type GetCommodityAggregateType<T extends CommodityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommodity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommodity[P]>
      : GetScalarType<T[P], AggregateCommodity[P]>
  }




  export type CommodityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommodityWhereInput
    orderBy?: CommodityOrderByWithAggregationInput | CommodityOrderByWithAggregationInput[]
    by: CommodityScalarFieldEnum[] | CommodityScalarFieldEnum
    having?: CommodityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommodityCountAggregateInputType | true
    _min?: CommodityMinAggregateInputType
    _max?: CommodityMaxAggregateInputType
  }

  export type CommodityGroupByOutputType = {
    id: string
    slug: string
    name: string
    _count: CommodityCountAggregateOutputType | null
    _min: CommodityMinAggregateOutputType | null
    _max: CommodityMaxAggregateOutputType | null
  }

  type GetCommodityGroupByPayload<T extends CommodityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommodityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommodityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommodityGroupByOutputType[P]>
            : GetScalarType<T[P], CommodityGroupByOutputType[P]>
        }
      >
    >


  export type CommoditySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    Unit?: boolean | Commodity$UnitArgs<ExtArgs>
    Observation?: boolean | Commodity$ObservationArgs<ExtArgs>
    ForecastGate?: boolean | Commodity$ForecastGateArgs<ExtArgs>
    _count?: boolean | CommodityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commodity"]>

  export type CommoditySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
  }, ExtArgs["result"]["commodity"]>

  export type CommoditySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
  }, ExtArgs["result"]["commodity"]>

  export type CommoditySelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
  }

  export type CommodityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name", ExtArgs["result"]["commodity"]>
  export type CommodityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Unit?: boolean | Commodity$UnitArgs<ExtArgs>
    Observation?: boolean | Commodity$ObservationArgs<ExtArgs>
    ForecastGate?: boolean | Commodity$ForecastGateArgs<ExtArgs>
    _count?: boolean | CommodityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommodityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommodityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommodityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commodity"
    objects: {
      Unit: Prisma.$UnitPayload<ExtArgs>[]
      Observation: Prisma.$ObservationPayload<ExtArgs>[]
      ForecastGate: Prisma.$ForecastGatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
    }, ExtArgs["result"]["commodity"]>
    composites: {}
  }

  type CommodityGetPayload<S extends boolean | null | undefined | CommodityDefaultArgs> = $Result.GetResult<Prisma.$CommodityPayload, S>

  type CommodityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommodityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommodityCountAggregateInputType | true
    }

  export interface CommodityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commodity'], meta: { name: 'Commodity' } }
    /**
     * Find zero or one Commodity that matches the filter.
     * @param {CommodityFindUniqueArgs} args - Arguments to find a Commodity
     * @example
     * // Get one Commodity
     * const commodity = await prisma.commodity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommodityFindUniqueArgs>(args: SelectSubset<T, CommodityFindUniqueArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commodity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommodityFindUniqueOrThrowArgs} args - Arguments to find a Commodity
     * @example
     * // Get one Commodity
     * const commodity = await prisma.commodity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommodityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommodityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commodity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityFindFirstArgs} args - Arguments to find a Commodity
     * @example
     * // Get one Commodity
     * const commodity = await prisma.commodity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommodityFindFirstArgs>(args?: SelectSubset<T, CommodityFindFirstArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commodity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityFindFirstOrThrowArgs} args - Arguments to find a Commodity
     * @example
     * // Get one Commodity
     * const commodity = await prisma.commodity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommodityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommodityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commodities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commodities
     * const commodities = await prisma.commodity.findMany()
     * 
     * // Get first 10 Commodities
     * const commodities = await prisma.commodity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commodityWithIdOnly = await prisma.commodity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommodityFindManyArgs>(args?: SelectSubset<T, CommodityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commodity.
     * @param {CommodityCreateArgs} args - Arguments to create a Commodity.
     * @example
     * // Create one Commodity
     * const Commodity = await prisma.commodity.create({
     *   data: {
     *     // ... data to create a Commodity
     *   }
     * })
     * 
     */
    create<T extends CommodityCreateArgs>(args: SelectSubset<T, CommodityCreateArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commodities.
     * @param {CommodityCreateManyArgs} args - Arguments to create many Commodities.
     * @example
     * // Create many Commodities
     * const commodity = await prisma.commodity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommodityCreateManyArgs>(args?: SelectSubset<T, CommodityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commodities and returns the data saved in the database.
     * @param {CommodityCreateManyAndReturnArgs} args - Arguments to create many Commodities.
     * @example
     * // Create many Commodities
     * const commodity = await prisma.commodity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commodities and only return the `id`
     * const commodityWithIdOnly = await prisma.commodity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommodityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommodityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commodity.
     * @param {CommodityDeleteArgs} args - Arguments to delete one Commodity.
     * @example
     * // Delete one Commodity
     * const Commodity = await prisma.commodity.delete({
     *   where: {
     *     // ... filter to delete one Commodity
     *   }
     * })
     * 
     */
    delete<T extends CommodityDeleteArgs>(args: SelectSubset<T, CommodityDeleteArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commodity.
     * @param {CommodityUpdateArgs} args - Arguments to update one Commodity.
     * @example
     * // Update one Commodity
     * const commodity = await prisma.commodity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommodityUpdateArgs>(args: SelectSubset<T, CommodityUpdateArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commodities.
     * @param {CommodityDeleteManyArgs} args - Arguments to filter Commodities to delete.
     * @example
     * // Delete a few Commodities
     * const { count } = await prisma.commodity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommodityDeleteManyArgs>(args?: SelectSubset<T, CommodityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commodities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commodities
     * const commodity = await prisma.commodity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommodityUpdateManyArgs>(args: SelectSubset<T, CommodityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commodities and returns the data updated in the database.
     * @param {CommodityUpdateManyAndReturnArgs} args - Arguments to update many Commodities.
     * @example
     * // Update many Commodities
     * const commodity = await prisma.commodity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commodities and only return the `id`
     * const commodityWithIdOnly = await prisma.commodity.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommodityUpdateManyAndReturnArgs>(args: SelectSubset<T, CommodityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commodity.
     * @param {CommodityUpsertArgs} args - Arguments to update or create a Commodity.
     * @example
     * // Update or create a Commodity
     * const commodity = await prisma.commodity.upsert({
     *   create: {
     *     // ... data to create a Commodity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commodity we want to update
     *   }
     * })
     */
    upsert<T extends CommodityUpsertArgs>(args: SelectSubset<T, CommodityUpsertArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commodities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityCountArgs} args - Arguments to filter Commodities to count.
     * @example
     * // Count the number of Commodities
     * const count = await prisma.commodity.count({
     *   where: {
     *     // ... the filter for the Commodities we want to count
     *   }
     * })
    **/
    count<T extends CommodityCountArgs>(
      args?: Subset<T, CommodityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommodityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commodity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommodityAggregateArgs>(args: Subset<T, CommodityAggregateArgs>): Prisma.PrismaPromise<GetCommodityAggregateType<T>>

    /**
     * Group by Commodity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommodityGroupByArgs} args - Group by arguments.
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
      T extends CommodityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommodityGroupByArgs['orderBy'] }
        : { orderBy?: CommodityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommodityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommodityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commodity model
   */
  readonly fields: CommodityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commodity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommodityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Unit<T extends Commodity$UnitArgs<ExtArgs> = {}>(args?: Subset<T, Commodity$UnitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Observation<T extends Commodity$ObservationArgs<ExtArgs> = {}>(args?: Subset<T, Commodity$ObservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ForecastGate<T extends Commodity$ForecastGateArgs<ExtArgs> = {}>(args?: Subset<T, Commodity$ForecastGateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Commodity model
   */
  interface CommodityFieldRefs {
    readonly id: FieldRef<"Commodity", 'String'>
    readonly slug: FieldRef<"Commodity", 'String'>
    readonly name: FieldRef<"Commodity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Commodity findUnique
   */
  export type CommodityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommodityInclude<ExtArgs> | null
    /**
     * Filter, which Commodity to fetch.
     */
    where: CommodityWhereUniqueInput
  }

  /**
   * Commodity findUniqueOrThrow
   */
  export type CommodityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommodityInclude<ExtArgs> | null
    /**
     * Filter, which Commodity to fetch.
     */
    where: CommodityWhereUniqueInput
  }

  /**
   * Commodity findFirst
   */
  export type CommodityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommodityInclude<ExtArgs> | null
    /**
     * Filter, which Commodity to fetch.
     */
    where?: CommodityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commodities to fetch.
     */
    orderBy?: CommodityOrderByWithRelationInput | CommodityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commodities.
     */
    cursor?: CommodityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commodities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commodities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commodities.
     */
    distinct?: CommodityScalarFieldEnum | CommodityScalarFieldEnum[]
  }

  /**
   * Commodity findFirstOrThrow
   */
  export type CommodityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommodityInclude<ExtArgs> | null
    /**
     * Filter, which Commodity to fetch.
     */
    where?: CommodityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commodities to fetch.
     */
    orderBy?: CommodityOrderByWithRelationInput | CommodityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commodities.
     */
    cursor?: CommodityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commodities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commodities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commodities.
     */
    distinct?: CommodityScalarFieldEnum | CommodityScalarFieldEnum[]
  }

  /**
   * Commodity findMany
   */
  export type CommodityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommodityInclude<ExtArgs> | null
    /**
     * Filter, which Commodities to fetch.
     */
    where?: CommodityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commodities to fetch.
     */
    orderBy?: CommodityOrderByWithRelationInput | CommodityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commodities.
     */
    cursor?: CommodityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commodities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commodities.
     */
    skip?: number
    distinct?: CommodityScalarFieldEnum | CommodityScalarFieldEnum[]
  }

  /**
   * Commodity create
   */
  export type CommodityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommodityInclude<ExtArgs> | null
    /**
     * The data needed to create a Commodity.
     */
    data: XOR<CommodityCreateInput, CommodityUncheckedCreateInput>
  }

  /**
   * Commodity createMany
   */
  export type CommodityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commodities.
     */
    data: CommodityCreateManyInput | CommodityCreateManyInput[]
  }

  /**
   * Commodity createManyAndReturn
   */
  export type CommodityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * The data used to create many Commodities.
     */
    data: CommodityCreateManyInput | CommodityCreateManyInput[]
  }

  /**
   * Commodity update
   */
  export type CommodityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommodityInclude<ExtArgs> | null
    /**
     * The data needed to update a Commodity.
     */
    data: XOR<CommodityUpdateInput, CommodityUncheckedUpdateInput>
    /**
     * Choose, which Commodity to update.
     */
    where: CommodityWhereUniqueInput
  }

  /**
   * Commodity updateMany
   */
  export type CommodityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commodities.
     */
    data: XOR<CommodityUpdateManyMutationInput, CommodityUncheckedUpdateManyInput>
    /**
     * Filter which Commodities to update
     */
    where?: CommodityWhereInput
    /**
     * Limit how many Commodities to update.
     */
    limit?: number
  }

  /**
   * Commodity updateManyAndReturn
   */
  export type CommodityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * The data used to update Commodities.
     */
    data: XOR<CommodityUpdateManyMutationInput, CommodityUncheckedUpdateManyInput>
    /**
     * Filter which Commodities to update
     */
    where?: CommodityWhereInput
    /**
     * Limit how many Commodities to update.
     */
    limit?: number
  }

  /**
   * Commodity upsert
   */
  export type CommodityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommodityInclude<ExtArgs> | null
    /**
     * The filter to search for the Commodity to update in case it exists.
     */
    where: CommodityWhereUniqueInput
    /**
     * In case the Commodity found by the `where` argument doesn't exist, create a new Commodity with this data.
     */
    create: XOR<CommodityCreateInput, CommodityUncheckedCreateInput>
    /**
     * In case the Commodity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommodityUpdateInput, CommodityUncheckedUpdateInput>
  }

  /**
   * Commodity delete
   */
  export type CommodityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommodityInclude<ExtArgs> | null
    /**
     * Filter which Commodity to delete.
     */
    where: CommodityWhereUniqueInput
  }

  /**
   * Commodity deleteMany
   */
  export type CommodityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commodities to delete
     */
    where?: CommodityWhereInput
    /**
     * Limit how many Commodities to delete.
     */
    limit?: number
  }

  /**
   * Commodity.Unit
   */
  export type Commodity$UnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Commodity.Observation
   */
  export type Commodity$ObservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    where?: ObservationWhereInput
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    cursor?: ObservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Commodity.ForecastGate
   */
  export type Commodity$ForecastGateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
    where?: ForecastGateWhereInput
    orderBy?: ForecastGateOrderByWithRelationInput | ForecastGateOrderByWithRelationInput[]
    cursor?: ForecastGateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForecastGateScalarFieldEnum | ForecastGateScalarFieldEnum[]
  }

  /**
   * Commodity without action
   */
  export type CommodityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commodity
     */
    select?: CommoditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commodity
     */
    omit?: CommodityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommodityInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    kgEquivalent: number | null
  }

  export type UnitSumAggregateOutputType = {
    kgEquivalent: number | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    commodityId: string | null
    name: string | null
    aliases: string | null
    kgEquivalent: number | null
    kgBasisNote: string | null
    status: string | null
    countryId: string | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    commodityId: string | null
    name: string | null
    aliases: string | null
    kgEquivalent: number | null
    kgBasisNote: string | null
    status: string | null
    countryId: string | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    commodityId: number
    name: number
    aliases: number
    kgEquivalent: number
    kgBasisNote: number
    status: number
    countryId: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    kgEquivalent?: true
  }

  export type UnitSumAggregateInputType = {
    kgEquivalent?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    commodityId?: true
    name?: true
    aliases?: true
    kgEquivalent?: true
    kgBasisNote?: true
    status?: true
    countryId?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    commodityId?: true
    name?: true
    aliases?: true
    kgEquivalent?: true
    kgBasisNote?: true
    status?: true
    countryId?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    commodityId?: true
    name?: true
    aliases?: true
    kgEquivalent?: true
    kgBasisNote?: true
    status?: true
    countryId?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    commodityId: string
    name: string
    aliases: string
    kgEquivalent: number | null
    kgBasisNote: string | null
    status: string
    countryId: string | null
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodityId?: boolean
    name?: boolean
    aliases?: boolean
    kgEquivalent?: boolean
    kgBasisNote?: boolean
    status?: boolean
    countryId?: boolean
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    Observations?: boolean | Unit$ObservationsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodityId?: boolean
    name?: boolean
    aliases?: boolean
    kgEquivalent?: boolean
    kgBasisNote?: boolean
    status?: boolean
    countryId?: boolean
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodityId?: boolean
    name?: boolean
    aliases?: boolean
    kgEquivalent?: boolean
    kgBasisNote?: boolean
    status?: boolean
    countryId?: boolean
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    commodityId?: boolean
    name?: boolean
    aliases?: boolean
    kgEquivalent?: boolean
    kgBasisNote?: boolean
    status?: boolean
    countryId?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commodityId" | "name" | "aliases" | "kgEquivalent" | "kgBasisNote" | "status" | "countryId", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    Observations?: boolean | Unit$ObservationsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
  }
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      commodity: Prisma.$CommodityPayload<ExtArgs>
      Observations: Prisma.$ObservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commodityId: string
      name: string
      aliases: string
      kgEquivalent: number | null
      kgBasisNote: string | null
      status: string
      countryId: string | null
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commodity<T extends CommodityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommodityDefaultArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Observations<T extends Unit$ObservationsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$ObservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly commodityId: FieldRef<"Unit", 'String'>
    readonly name: FieldRef<"Unit", 'String'>
    readonly aliases: FieldRef<"Unit", 'String'>
    readonly kgEquivalent: FieldRef<"Unit", 'Float'>
    readonly kgBasisNote: FieldRef<"Unit", 'String'>
    readonly status: FieldRef<"Unit", 'String'>
    readonly countryId: FieldRef<"Unit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.Observations
   */
  export type Unit$ObservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    where?: ObservationWhereInput
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    cursor?: ObservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Source
   */

  export type AggregateSource = {
    _count: SourceCountAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  export type SourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    owner: string | null
    url: string | null
    licence: string | null
    frequency: string | null
    validationStatus: string | null
    attributionText: string | null
  }

  export type SourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    owner: string | null
    url: string | null
    licence: string | null
    frequency: string | null
    validationStatus: string | null
    attributionText: string | null
  }

  export type SourceCountAggregateOutputType = {
    id: number
    name: number
    owner: number
    url: number
    licence: number
    frequency: number
    validationStatus: number
    attributionText: number
    _all: number
  }


  export type SourceMinAggregateInputType = {
    id?: true
    name?: true
    owner?: true
    url?: true
    licence?: true
    frequency?: true
    validationStatus?: true
    attributionText?: true
  }

  export type SourceMaxAggregateInputType = {
    id?: true
    name?: true
    owner?: true
    url?: true
    licence?: true
    frequency?: true
    validationStatus?: true
    attributionText?: true
  }

  export type SourceCountAggregateInputType = {
    id?: true
    name?: true
    owner?: true
    url?: true
    licence?: true
    frequency?: true
    validationStatus?: true
    attributionText?: true
    _all?: true
  }

  export type SourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Source to aggregate.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sources
    **/
    _count?: true | SourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceMaxAggregateInputType
  }

  export type GetSourceAggregateType<T extends SourceAggregateArgs> = {
        [P in keyof T & keyof AggregateSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSource[P]>
      : GetScalarType<T[P], AggregateSource[P]>
  }




  export type SourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceWhereInput
    orderBy?: SourceOrderByWithAggregationInput | SourceOrderByWithAggregationInput[]
    by: SourceScalarFieldEnum[] | SourceScalarFieldEnum
    having?: SourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceCountAggregateInputType | true
    _min?: SourceMinAggregateInputType
    _max?: SourceMaxAggregateInputType
  }

  export type SourceGroupByOutputType = {
    id: string
    name: string
    owner: string | null
    url: string | null
    licence: string | null
    frequency: string | null
    validationStatus: string
    attributionText: string | null
    _count: SourceCountAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  type GetSourceGroupByPayload<T extends SourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceGroupByOutputType[P]>
            : GetScalarType<T[P], SourceGroupByOutputType[P]>
        }
      >
    >


  export type SourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    owner?: boolean
    url?: boolean
    licence?: boolean
    frequency?: boolean
    validationStatus?: boolean
    attributionText?: boolean
    Observation?: boolean | Source$ObservationArgs<ExtArgs>
    _count?: boolean | SourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    owner?: boolean
    url?: boolean
    licence?: boolean
    frequency?: boolean
    validationStatus?: boolean
    attributionText?: boolean
  }, ExtArgs["result"]["source"]>

  export type SourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    owner?: boolean
    url?: boolean
    licence?: boolean
    frequency?: boolean
    validationStatus?: boolean
    attributionText?: boolean
  }, ExtArgs["result"]["source"]>

  export type SourceSelectScalar = {
    id?: boolean
    name?: boolean
    owner?: boolean
    url?: boolean
    licence?: boolean
    frequency?: boolean
    validationStatus?: boolean
    attributionText?: boolean
  }

  export type SourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "owner" | "url" | "licence" | "frequency" | "validationStatus" | "attributionText", ExtArgs["result"]["source"]>
  export type SourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Observation?: boolean | Source$ObservationArgs<ExtArgs>
    _count?: boolean | SourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Source"
    objects: {
      Observation: Prisma.$ObservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      owner: string | null
      url: string | null
      licence: string | null
      frequency: string | null
      validationStatus: string
      attributionText: string | null
    }, ExtArgs["result"]["source"]>
    composites: {}
  }

  type SourceGetPayload<S extends boolean | null | undefined | SourceDefaultArgs> = $Result.GetResult<Prisma.$SourcePayload, S>

  type SourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceCountAggregateInputType | true
    }

  export interface SourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Source'], meta: { name: 'Source' } }
    /**
     * Find zero or one Source that matches the filter.
     * @param {SourceFindUniqueArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceFindUniqueArgs>(args: SelectSubset<T, SourceFindUniqueArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Source that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceFindUniqueOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceFindFirstArgs>(args?: SelectSubset<T, SourceFindFirstArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sources
     * const sources = await prisma.source.findMany()
     * 
     * // Get first 10 Sources
     * const sources = await prisma.source.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceWithIdOnly = await prisma.source.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceFindManyArgs>(args?: SelectSubset<T, SourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Source.
     * @param {SourceCreateArgs} args - Arguments to create a Source.
     * @example
     * // Create one Source
     * const Source = await prisma.source.create({
     *   data: {
     *     // ... data to create a Source
     *   }
     * })
     * 
     */
    create<T extends SourceCreateArgs>(args: SelectSubset<T, SourceCreateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sources.
     * @param {SourceCreateManyArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceCreateManyArgs>(args?: SelectSubset<T, SourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sources and returns the data saved in the database.
     * @param {SourceCreateManyAndReturnArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Source.
     * @param {SourceDeleteArgs} args - Arguments to delete one Source.
     * @example
     * // Delete one Source
     * const Source = await prisma.source.delete({
     *   where: {
     *     // ... filter to delete one Source
     *   }
     * })
     * 
     */
    delete<T extends SourceDeleteArgs>(args: SelectSubset<T, SourceDeleteArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Source.
     * @param {SourceUpdateArgs} args - Arguments to update one Source.
     * @example
     * // Update one Source
     * const source = await prisma.source.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceUpdateArgs>(args: SelectSubset<T, SourceUpdateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sources.
     * @param {SourceDeleteManyArgs} args - Arguments to filter Sources to delete.
     * @example
     * // Delete a few Sources
     * const { count } = await prisma.source.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceDeleteManyArgs>(args?: SelectSubset<T, SourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceUpdateManyArgs>(args: SelectSubset<T, SourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources and returns the data updated in the database.
     * @param {SourceUpdateManyAndReturnArgs} args - Arguments to update many Sources.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.updateManyAndReturn({
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
    updateManyAndReturn<T extends SourceUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Source.
     * @param {SourceUpsertArgs} args - Arguments to update or create a Source.
     * @example
     * // Update or create a Source
     * const source = await prisma.source.upsert({
     *   create: {
     *     // ... data to create a Source
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Source we want to update
     *   }
     * })
     */
    upsert<T extends SourceUpsertArgs>(args: SelectSubset<T, SourceUpsertArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCountArgs} args - Arguments to filter Sources to count.
     * @example
     * // Count the number of Sources
     * const count = await prisma.source.count({
     *   where: {
     *     // ... the filter for the Sources we want to count
     *   }
     * })
    **/
    count<T extends SourceCountArgs>(
      args?: Subset<T, SourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SourceAggregateArgs>(args: Subset<T, SourceAggregateArgs>): Prisma.PrismaPromise<GetSourceAggregateType<T>>

    /**
     * Group by Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceGroupByArgs} args - Group by arguments.
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
      T extends SourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceGroupByArgs['orderBy'] }
        : { orderBy?: SourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Source model
   */
  readonly fields: SourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Source.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Observation<T extends Source$ObservationArgs<ExtArgs> = {}>(args?: Subset<T, Source$ObservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Source model
   */
  interface SourceFieldRefs {
    readonly id: FieldRef<"Source", 'String'>
    readonly name: FieldRef<"Source", 'String'>
    readonly owner: FieldRef<"Source", 'String'>
    readonly url: FieldRef<"Source", 'String'>
    readonly licence: FieldRef<"Source", 'String'>
    readonly frequency: FieldRef<"Source", 'String'>
    readonly validationStatus: FieldRef<"Source", 'String'>
    readonly attributionText: FieldRef<"Source", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Source findUnique
   */
  export type SourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findUniqueOrThrow
   */
  export type SourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findFirst
   */
  export type SourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findFirstOrThrow
   */
  export type SourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findMany
   */
  export type SourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Sources to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source create
   */
  export type SourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Source.
     */
    data: XOR<SourceCreateInput, SourceUncheckedCreateInput>
  }

  /**
   * Source createMany
   */
  export type SourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
  }

  /**
   * Source createManyAndReturn
   */
  export type SourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
  }

  /**
   * Source update
   */
  export type SourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Source.
     */
    data: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
    /**
     * Choose, which Source to update.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source updateMany
   */
  export type SourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
  }

  /**
   * Source updateManyAndReturn
   */
  export type SourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
  }

  /**
   * Source upsert
   */
  export type SourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Source to update in case it exists.
     */
    where: SourceWhereUniqueInput
    /**
     * In case the Source found by the `where` argument doesn't exist, create a new Source with this data.
     */
    create: XOR<SourceCreateInput, SourceUncheckedCreateInput>
    /**
     * In case the Source was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
  }

  /**
   * Source delete
   */
  export type SourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter which Source to delete.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source deleteMany
   */
  export type SourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sources to delete
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to delete.
     */
    limit?: number
  }

  /**
   * Source.Observation
   */
  export type Source$ObservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    where?: ObservationWhereInput
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    cursor?: ObservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Source without action
   */
  export type SourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
  }


  /**
   * Model Observation
   */

  export type AggregateObservation = {
    _count: ObservationCountAggregateOutputType | null
    _avg: ObservationAvgAggregateOutputType | null
    _sum: ObservationSumAggregateOutputType | null
    _min: ObservationMinAggregateOutputType | null
    _max: ObservationMaxAggregateOutputType | null
  }

  export type ObservationAvgAggregateOutputType = {
    priceMinor: number | null
    pricePerKgMinor: number | null
  }

  export type ObservationSumAggregateOutputType = {
    priceMinor: number | null
    pricePerKgMinor: number | null
  }

  export type ObservationMinAggregateOutputType = {
    id: string | null
    commodityId: string | null
    marketId: string | null
    sourceId: string | null
    priceMinor: number | null
    currencyCode: string | null
    unitId: string | null
    priceType: string | null
    observedAt: Date | null
    ingestedAt: Date | null
    trustLabel: string | null
    pricePerKgMinor: number | null
    normalisationMethod: string | null
    supersedesId: string | null
    isCurrent: boolean | null
  }

  export type ObservationMaxAggregateOutputType = {
    id: string | null
    commodityId: string | null
    marketId: string | null
    sourceId: string | null
    priceMinor: number | null
    currencyCode: string | null
    unitId: string | null
    priceType: string | null
    observedAt: Date | null
    ingestedAt: Date | null
    trustLabel: string | null
    pricePerKgMinor: number | null
    normalisationMethod: string | null
    supersedesId: string | null
    isCurrent: boolean | null
  }

  export type ObservationCountAggregateOutputType = {
    id: number
    commodityId: number
    marketId: number
    sourceId: number
    priceMinor: number
    currencyCode: number
    unitId: number
    priceType: number
    observedAt: number
    ingestedAt: number
    trustLabel: number
    pricePerKgMinor: number
    normalisationMethod: number
    supersedesId: number
    isCurrent: number
    _all: number
  }


  export type ObservationAvgAggregateInputType = {
    priceMinor?: true
    pricePerKgMinor?: true
  }

  export type ObservationSumAggregateInputType = {
    priceMinor?: true
    pricePerKgMinor?: true
  }

  export type ObservationMinAggregateInputType = {
    id?: true
    commodityId?: true
    marketId?: true
    sourceId?: true
    priceMinor?: true
    currencyCode?: true
    unitId?: true
    priceType?: true
    observedAt?: true
    ingestedAt?: true
    trustLabel?: true
    pricePerKgMinor?: true
    normalisationMethod?: true
    supersedesId?: true
    isCurrent?: true
  }

  export type ObservationMaxAggregateInputType = {
    id?: true
    commodityId?: true
    marketId?: true
    sourceId?: true
    priceMinor?: true
    currencyCode?: true
    unitId?: true
    priceType?: true
    observedAt?: true
    ingestedAt?: true
    trustLabel?: true
    pricePerKgMinor?: true
    normalisationMethod?: true
    supersedesId?: true
    isCurrent?: true
  }

  export type ObservationCountAggregateInputType = {
    id?: true
    commodityId?: true
    marketId?: true
    sourceId?: true
    priceMinor?: true
    currencyCode?: true
    unitId?: true
    priceType?: true
    observedAt?: true
    ingestedAt?: true
    trustLabel?: true
    pricePerKgMinor?: true
    normalisationMethod?: true
    supersedesId?: true
    isCurrent?: true
    _all?: true
  }

  export type ObservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Observation to aggregate.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Observations
    **/
    _count?: true | ObservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObservationMaxAggregateInputType
  }

  export type GetObservationAggregateType<T extends ObservationAggregateArgs> = {
        [P in keyof T & keyof AggregateObservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObservation[P]>
      : GetScalarType<T[P], AggregateObservation[P]>
  }




  export type ObservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationWhereInput
    orderBy?: ObservationOrderByWithAggregationInput | ObservationOrderByWithAggregationInput[]
    by: ObservationScalarFieldEnum[] | ObservationScalarFieldEnum
    having?: ObservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObservationCountAggregateInputType | true
    _avg?: ObservationAvgAggregateInputType
    _sum?: ObservationSumAggregateInputType
    _min?: ObservationMinAggregateInputType
    _max?: ObservationMaxAggregateInputType
  }

  export type ObservationGroupByOutputType = {
    id: string
    commodityId: string
    marketId: string
    sourceId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date
    ingestedAt: Date
    trustLabel: string
    pricePerKgMinor: number | null
    normalisationMethod: string | null
    supersedesId: string | null
    isCurrent: boolean
    _count: ObservationCountAggregateOutputType | null
    _avg: ObservationAvgAggregateOutputType | null
    _sum: ObservationSumAggregateOutputType | null
    _min: ObservationMinAggregateOutputType | null
    _max: ObservationMaxAggregateOutputType | null
  }

  type GetObservationGroupByPayload<T extends ObservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObservationGroupByOutputType[P]>
            : GetScalarType<T[P], ObservationGroupByOutputType[P]>
        }
      >
    >


  export type ObservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodityId?: boolean
    marketId?: boolean
    sourceId?: boolean
    priceMinor?: boolean
    currencyCode?: boolean
    unitId?: boolean
    priceType?: boolean
    observedAt?: boolean
    ingestedAt?: boolean
    trustLabel?: boolean
    pricePerKgMinor?: boolean
    normalisationMethod?: boolean
    supersedesId?: boolean
    isCurrent?: boolean
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["observation"]>

  export type ObservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodityId?: boolean
    marketId?: boolean
    sourceId?: boolean
    priceMinor?: boolean
    currencyCode?: boolean
    unitId?: boolean
    priceType?: boolean
    observedAt?: boolean
    ingestedAt?: boolean
    trustLabel?: boolean
    pricePerKgMinor?: boolean
    normalisationMethod?: boolean
    supersedesId?: boolean
    isCurrent?: boolean
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["observation"]>

  export type ObservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodityId?: boolean
    marketId?: boolean
    sourceId?: boolean
    priceMinor?: boolean
    currencyCode?: boolean
    unitId?: boolean
    priceType?: boolean
    observedAt?: boolean
    ingestedAt?: boolean
    trustLabel?: boolean
    pricePerKgMinor?: boolean
    normalisationMethod?: boolean
    supersedesId?: boolean
    isCurrent?: boolean
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["observation"]>

  export type ObservationSelectScalar = {
    id?: boolean
    commodityId?: boolean
    marketId?: boolean
    sourceId?: boolean
    priceMinor?: boolean
    currencyCode?: boolean
    unitId?: boolean
    priceType?: boolean
    observedAt?: boolean
    ingestedAt?: boolean
    trustLabel?: boolean
    pricePerKgMinor?: boolean
    normalisationMethod?: boolean
    supersedesId?: boolean
    isCurrent?: boolean
  }

  export type ObservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commodityId" | "marketId" | "sourceId" | "priceMinor" | "currencyCode" | "unitId" | "priceType" | "observedAt" | "ingestedAt" | "trustLabel" | "pricePerKgMinor" | "normalisationMethod" | "supersedesId" | "isCurrent", ExtArgs["result"]["observation"]>
  export type ObservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type ObservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type ObservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $ObservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Observation"
    objects: {
      commodity: Prisma.$CommodityPayload<ExtArgs>
      market: Prisma.$MarketPayload<ExtArgs>
      source: Prisma.$SourcePayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commodityId: string
      marketId: string
      sourceId: string
      priceMinor: number
      currencyCode: string
      unitId: string
      priceType: string
      observedAt: Date
      ingestedAt: Date
      trustLabel: string
      pricePerKgMinor: number | null
      normalisationMethod: string | null
      supersedesId: string | null
      isCurrent: boolean
    }, ExtArgs["result"]["observation"]>
    composites: {}
  }

  type ObservationGetPayload<S extends boolean | null | undefined | ObservationDefaultArgs> = $Result.GetResult<Prisma.$ObservationPayload, S>

  type ObservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObservationCountAggregateInputType | true
    }

  export interface ObservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Observation'], meta: { name: 'Observation' } }
    /**
     * Find zero or one Observation that matches the filter.
     * @param {ObservationFindUniqueArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObservationFindUniqueArgs>(args: SelectSubset<T, ObservationFindUniqueArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Observation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObservationFindUniqueOrThrowArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ObservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Observation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindFirstArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObservationFindFirstArgs>(args?: SelectSubset<T, ObservationFindFirstArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Observation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindFirstOrThrowArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ObservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Observations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Observations
     * const observations = await prisma.observation.findMany()
     * 
     * // Get first 10 Observations
     * const observations = await prisma.observation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const observationWithIdOnly = await prisma.observation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObservationFindManyArgs>(args?: SelectSubset<T, ObservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Observation.
     * @param {ObservationCreateArgs} args - Arguments to create a Observation.
     * @example
     * // Create one Observation
     * const Observation = await prisma.observation.create({
     *   data: {
     *     // ... data to create a Observation
     *   }
     * })
     * 
     */
    create<T extends ObservationCreateArgs>(args: SelectSubset<T, ObservationCreateArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Observations.
     * @param {ObservationCreateManyArgs} args - Arguments to create many Observations.
     * @example
     * // Create many Observations
     * const observation = await prisma.observation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObservationCreateManyArgs>(args?: SelectSubset<T, ObservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Observations and returns the data saved in the database.
     * @param {ObservationCreateManyAndReturnArgs} args - Arguments to create many Observations.
     * @example
     * // Create many Observations
     * const observation = await prisma.observation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Observations and only return the `id`
     * const observationWithIdOnly = await prisma.observation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ObservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Observation.
     * @param {ObservationDeleteArgs} args - Arguments to delete one Observation.
     * @example
     * // Delete one Observation
     * const Observation = await prisma.observation.delete({
     *   where: {
     *     // ... filter to delete one Observation
     *   }
     * })
     * 
     */
    delete<T extends ObservationDeleteArgs>(args: SelectSubset<T, ObservationDeleteArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Observation.
     * @param {ObservationUpdateArgs} args - Arguments to update one Observation.
     * @example
     * // Update one Observation
     * const observation = await prisma.observation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObservationUpdateArgs>(args: SelectSubset<T, ObservationUpdateArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Observations.
     * @param {ObservationDeleteManyArgs} args - Arguments to filter Observations to delete.
     * @example
     * // Delete a few Observations
     * const { count } = await prisma.observation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObservationDeleteManyArgs>(args?: SelectSubset<T, ObservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Observations
     * const observation = await prisma.observation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObservationUpdateManyArgs>(args: SelectSubset<T, ObservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Observations and returns the data updated in the database.
     * @param {ObservationUpdateManyAndReturnArgs} args - Arguments to update many Observations.
     * @example
     * // Update many Observations
     * const observation = await prisma.observation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Observations and only return the `id`
     * const observationWithIdOnly = await prisma.observation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ObservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ObservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Observation.
     * @param {ObservationUpsertArgs} args - Arguments to update or create a Observation.
     * @example
     * // Update or create a Observation
     * const observation = await prisma.observation.upsert({
     *   create: {
     *     // ... data to create a Observation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Observation we want to update
     *   }
     * })
     */
    upsert<T extends ObservationUpsertArgs>(args: SelectSubset<T, ObservationUpsertArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationCountArgs} args - Arguments to filter Observations to count.
     * @example
     * // Count the number of Observations
     * const count = await prisma.observation.count({
     *   where: {
     *     // ... the filter for the Observations we want to count
     *   }
     * })
    **/
    count<T extends ObservationCountArgs>(
      args?: Subset<T, ObservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Observation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObservationAggregateArgs>(args: Subset<T, ObservationAggregateArgs>): Prisma.PrismaPromise<GetObservationAggregateType<T>>

    /**
     * Group by Observation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationGroupByArgs} args - Group by arguments.
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
      T extends ObservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObservationGroupByArgs['orderBy'] }
        : { orderBy?: ObservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Observation model
   */
  readonly fields: ObservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Observation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commodity<T extends CommodityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommodityDefaultArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    source<T extends SourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SourceDefaultArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Observation model
   */
  interface ObservationFieldRefs {
    readonly id: FieldRef<"Observation", 'String'>
    readonly commodityId: FieldRef<"Observation", 'String'>
    readonly marketId: FieldRef<"Observation", 'String'>
    readonly sourceId: FieldRef<"Observation", 'String'>
    readonly priceMinor: FieldRef<"Observation", 'Int'>
    readonly currencyCode: FieldRef<"Observation", 'String'>
    readonly unitId: FieldRef<"Observation", 'String'>
    readonly priceType: FieldRef<"Observation", 'String'>
    readonly observedAt: FieldRef<"Observation", 'DateTime'>
    readonly ingestedAt: FieldRef<"Observation", 'DateTime'>
    readonly trustLabel: FieldRef<"Observation", 'String'>
    readonly pricePerKgMinor: FieldRef<"Observation", 'Int'>
    readonly normalisationMethod: FieldRef<"Observation", 'String'>
    readonly supersedesId: FieldRef<"Observation", 'String'>
    readonly isCurrent: FieldRef<"Observation", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Observation findUnique
   */
  export type ObservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation findUniqueOrThrow
   */
  export type ObservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation findFirst
   */
  export type ObservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Observations.
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Observations.
     */
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Observation findFirstOrThrow
   */
  export type ObservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Observations.
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Observations.
     */
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Observation findMany
   */
  export type ObservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observations to fetch.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Observations.
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Observation create
   */
  export type ObservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Observation.
     */
    data: XOR<ObservationCreateInput, ObservationUncheckedCreateInput>
  }

  /**
   * Observation createMany
   */
  export type ObservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Observations.
     */
    data: ObservationCreateManyInput | ObservationCreateManyInput[]
  }

  /**
   * Observation createManyAndReturn
   */
  export type ObservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * The data used to create many Observations.
     */
    data: ObservationCreateManyInput | ObservationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Observation update
   */
  export type ObservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Observation.
     */
    data: XOR<ObservationUpdateInput, ObservationUncheckedUpdateInput>
    /**
     * Choose, which Observation to update.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation updateMany
   */
  export type ObservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Observations.
     */
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyInput>
    /**
     * Filter which Observations to update
     */
    where?: ObservationWhereInput
    /**
     * Limit how many Observations to update.
     */
    limit?: number
  }

  /**
   * Observation updateManyAndReturn
   */
  export type ObservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * The data used to update Observations.
     */
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyInput>
    /**
     * Filter which Observations to update
     */
    where?: ObservationWhereInput
    /**
     * Limit how many Observations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Observation upsert
   */
  export type ObservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Observation to update in case it exists.
     */
    where: ObservationWhereUniqueInput
    /**
     * In case the Observation found by the `where` argument doesn't exist, create a new Observation with this data.
     */
    create: XOR<ObservationCreateInput, ObservationUncheckedCreateInput>
    /**
     * In case the Observation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObservationUpdateInput, ObservationUncheckedUpdateInput>
  }

  /**
   * Observation delete
   */
  export type ObservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter which Observation to delete.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation deleteMany
   */
  export type ObservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Observations to delete
     */
    where?: ObservationWhereInput
    /**
     * Limit how many Observations to delete.
     */
    limit?: number
  }

  /**
   * Observation without action
   */
  export type ObservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    priceMinor: number | null
  }

  export type ReportSumAggregateOutputType = {
    priceMinor: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    reporterId: string | null
    idempotencyKey: string | null
    commodityId: string | null
    marketId: string | null
    priceMinor: number | null
    currencyCode: string | null
    unitId: string | null
    priceType: string | null
    observedAt: Date | null
    status: string | null
    statusReason: string | null
    channel: string | null
    submittedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    reporterId: string | null
    idempotencyKey: string | null
    commodityId: string | null
    marketId: string | null
    priceMinor: number | null
    currencyCode: string | null
    unitId: string | null
    priceType: string | null
    observedAt: Date | null
    status: string | null
    statusReason: string | null
    channel: string | null
    submittedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    reporterId: number
    idempotencyKey: number
    commodityId: number
    marketId: number
    priceMinor: number
    currencyCode: number
    unitId: number
    priceType: number
    observedAt: number
    status: number
    statusReason: number
    channel: number
    submittedAt: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    priceMinor?: true
  }

  export type ReportSumAggregateInputType = {
    priceMinor?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    reporterId?: true
    idempotencyKey?: true
    commodityId?: true
    marketId?: true
    priceMinor?: true
    currencyCode?: true
    unitId?: true
    priceType?: true
    observedAt?: true
    status?: true
    statusReason?: true
    channel?: true
    submittedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    reporterId?: true
    idempotencyKey?: true
    commodityId?: true
    marketId?: true
    priceMinor?: true
    currencyCode?: true
    unitId?: true
    priceType?: true
    observedAt?: true
    status?: true
    statusReason?: true
    channel?: true
    submittedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    reporterId?: true
    idempotencyKey?: true
    commodityId?: true
    marketId?: true
    priceMinor?: true
    currencyCode?: true
    unitId?: true
    priceType?: true
    observedAt?: true
    status?: true
    statusReason?: true
    channel?: true
    submittedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    reporterId: string
    idempotencyKey: string
    commodityId: string
    marketId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date
    status: string
    statusReason: string | null
    channel: string
    submittedAt: Date
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterId?: boolean
    idempotencyKey?: boolean
    commodityId?: boolean
    marketId?: boolean
    priceMinor?: boolean
    currencyCode?: boolean
    unitId?: boolean
    priceType?: boolean
    observedAt?: boolean
    status?: boolean
    statusReason?: boolean
    channel?: boolean
    submittedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterId?: boolean
    idempotencyKey?: boolean
    commodityId?: boolean
    marketId?: boolean
    priceMinor?: boolean
    currencyCode?: boolean
    unitId?: boolean
    priceType?: boolean
    observedAt?: boolean
    status?: boolean
    statusReason?: boolean
    channel?: boolean
    submittedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporterId?: boolean
    idempotencyKey?: boolean
    commodityId?: boolean
    marketId?: boolean
    priceMinor?: boolean
    currencyCode?: boolean
    unitId?: boolean
    priceType?: boolean
    observedAt?: boolean
    status?: boolean
    statusReason?: boolean
    channel?: boolean
    submittedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    reporterId?: boolean
    idempotencyKey?: boolean
    commodityId?: boolean
    marketId?: boolean
    priceMinor?: boolean
    currencyCode?: boolean
    unitId?: boolean
    priceType?: boolean
    observedAt?: boolean
    status?: boolean
    statusReason?: boolean
    channel?: boolean
    submittedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reporterId" | "idempotencyKey" | "commodityId" | "marketId" | "priceMinor" | "currencyCode" | "unitId" | "priceType" | "observedAt" | "status" | "statusReason" | "channel" | "submittedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reporterId: string
      idempotencyKey: string
      commodityId: string
      marketId: string
      priceMinor: number
      currencyCode: string
      unitId: string
      priceType: string
      observedAt: Date
      status: string
      statusReason: string | null
      channel: string
      submittedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly reporterId: FieldRef<"Report", 'String'>
    readonly idempotencyKey: FieldRef<"Report", 'String'>
    readonly commodityId: FieldRef<"Report", 'String'>
    readonly marketId: FieldRef<"Report", 'String'>
    readonly priceMinor: FieldRef<"Report", 'Int'>
    readonly currencyCode: FieldRef<"Report", 'String'>
    readonly unitId: FieldRef<"Report", 'String'>
    readonly priceType: FieldRef<"Report", 'String'>
    readonly observedAt: FieldRef<"Report", 'DateTime'>
    readonly status: FieldRef<"Report", 'String'>
    readonly statusReason: FieldRef<"Report", 'String'>
    readonly channel: FieldRef<"Report", 'String'>
    readonly submittedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model ConsentRecord
   */

  export type AggregateConsentRecord = {
    _count: ConsentRecordCountAggregateOutputType | null
    _min: ConsentRecordMinAggregateOutputType | null
    _max: ConsentRecordMaxAggregateOutputType | null
  }

  export type ConsentRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    scope: string | null
    version: string | null
    granted: boolean | null
    at: Date | null
  }

  export type ConsentRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    scope: string | null
    version: string | null
    granted: boolean | null
    at: Date | null
  }

  export type ConsentRecordCountAggregateOutputType = {
    id: number
    userId: number
    scope: number
    version: number
    granted: number
    at: number
    _all: number
  }


  export type ConsentRecordMinAggregateInputType = {
    id?: true
    userId?: true
    scope?: true
    version?: true
    granted?: true
    at?: true
  }

  export type ConsentRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    scope?: true
    version?: true
    granted?: true
    at?: true
  }

  export type ConsentRecordCountAggregateInputType = {
    id?: true
    userId?: true
    scope?: true
    version?: true
    granted?: true
    at?: true
    _all?: true
  }

  export type ConsentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsentRecord to aggregate.
     */
    where?: ConsentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsentRecords to fetch.
     */
    orderBy?: ConsentRecordOrderByWithRelationInput | ConsentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsentRecords
    **/
    _count?: true | ConsentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsentRecordMaxAggregateInputType
  }

  export type GetConsentRecordAggregateType<T extends ConsentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateConsentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsentRecord[P]>
      : GetScalarType<T[P], AggregateConsentRecord[P]>
  }




  export type ConsentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsentRecordWhereInput
    orderBy?: ConsentRecordOrderByWithAggregationInput | ConsentRecordOrderByWithAggregationInput[]
    by: ConsentRecordScalarFieldEnum[] | ConsentRecordScalarFieldEnum
    having?: ConsentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsentRecordCountAggregateInputType | true
    _min?: ConsentRecordMinAggregateInputType
    _max?: ConsentRecordMaxAggregateInputType
  }

  export type ConsentRecordGroupByOutputType = {
    id: string
    userId: string
    scope: string
    version: string
    granted: boolean
    at: Date
    _count: ConsentRecordCountAggregateOutputType | null
    _min: ConsentRecordMinAggregateOutputType | null
    _max: ConsentRecordMaxAggregateOutputType | null
  }

  type GetConsentRecordGroupByPayload<T extends ConsentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ConsentRecordGroupByOutputType[P]>
        }
      >
    >


  export type ConsentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scope?: boolean
    version?: boolean
    granted?: boolean
    at?: boolean
  }, ExtArgs["result"]["consentRecord"]>

  export type ConsentRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scope?: boolean
    version?: boolean
    granted?: boolean
    at?: boolean
  }, ExtArgs["result"]["consentRecord"]>

  export type ConsentRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scope?: boolean
    version?: boolean
    granted?: boolean
    at?: boolean
  }, ExtArgs["result"]["consentRecord"]>

  export type ConsentRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    scope?: boolean
    version?: boolean
    granted?: boolean
    at?: boolean
  }

  export type ConsentRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "scope" | "version" | "granted" | "at", ExtArgs["result"]["consentRecord"]>

  export type $ConsentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsentRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      scope: string
      version: string
      granted: boolean
      at: Date
    }, ExtArgs["result"]["consentRecord"]>
    composites: {}
  }

  type ConsentRecordGetPayload<S extends boolean | null | undefined | ConsentRecordDefaultArgs> = $Result.GetResult<Prisma.$ConsentRecordPayload, S>

  type ConsentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsentRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsentRecordCountAggregateInputType | true
    }

  export interface ConsentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsentRecord'], meta: { name: 'ConsentRecord' } }
    /**
     * Find zero or one ConsentRecord that matches the filter.
     * @param {ConsentRecordFindUniqueArgs} args - Arguments to find a ConsentRecord
     * @example
     * // Get one ConsentRecord
     * const consentRecord = await prisma.consentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsentRecordFindUniqueArgs>(args: SelectSubset<T, ConsentRecordFindUniqueArgs<ExtArgs>>): Prisma__ConsentRecordClient<$Result.GetResult<Prisma.$ConsentRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsentRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsentRecordFindUniqueOrThrowArgs} args - Arguments to find a ConsentRecord
     * @example
     * // Get one ConsentRecord
     * const consentRecord = await prisma.consentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsentRecordClient<$Result.GetResult<Prisma.$ConsentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentRecordFindFirstArgs} args - Arguments to find a ConsentRecord
     * @example
     * // Get one ConsentRecord
     * const consentRecord = await prisma.consentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsentRecordFindFirstArgs>(args?: SelectSubset<T, ConsentRecordFindFirstArgs<ExtArgs>>): Prisma__ConsentRecordClient<$Result.GetResult<Prisma.$ConsentRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentRecordFindFirstOrThrowArgs} args - Arguments to find a ConsentRecord
     * @example
     * // Get one ConsentRecord
     * const consentRecord = await prisma.consentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsentRecordClient<$Result.GetResult<Prisma.$ConsentRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsentRecords
     * const consentRecords = await prisma.consentRecord.findMany()
     * 
     * // Get first 10 ConsentRecords
     * const consentRecords = await prisma.consentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consentRecordWithIdOnly = await prisma.consentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsentRecordFindManyArgs>(args?: SelectSubset<T, ConsentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsentRecord.
     * @param {ConsentRecordCreateArgs} args - Arguments to create a ConsentRecord.
     * @example
     * // Create one ConsentRecord
     * const ConsentRecord = await prisma.consentRecord.create({
     *   data: {
     *     // ... data to create a ConsentRecord
     *   }
     * })
     * 
     */
    create<T extends ConsentRecordCreateArgs>(args: SelectSubset<T, ConsentRecordCreateArgs<ExtArgs>>): Prisma__ConsentRecordClient<$Result.GetResult<Prisma.$ConsentRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsentRecords.
     * @param {ConsentRecordCreateManyArgs} args - Arguments to create many ConsentRecords.
     * @example
     * // Create many ConsentRecords
     * const consentRecord = await prisma.consentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsentRecordCreateManyArgs>(args?: SelectSubset<T, ConsentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsentRecords and returns the data saved in the database.
     * @param {ConsentRecordCreateManyAndReturnArgs} args - Arguments to create many ConsentRecords.
     * @example
     * // Create many ConsentRecords
     * const consentRecord = await prisma.consentRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsentRecords and only return the `id`
     * const consentRecordWithIdOnly = await prisma.consentRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsentRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsentRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsentRecord.
     * @param {ConsentRecordDeleteArgs} args - Arguments to delete one ConsentRecord.
     * @example
     * // Delete one ConsentRecord
     * const ConsentRecord = await prisma.consentRecord.delete({
     *   where: {
     *     // ... filter to delete one ConsentRecord
     *   }
     * })
     * 
     */
    delete<T extends ConsentRecordDeleteArgs>(args: SelectSubset<T, ConsentRecordDeleteArgs<ExtArgs>>): Prisma__ConsentRecordClient<$Result.GetResult<Prisma.$ConsentRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsentRecord.
     * @param {ConsentRecordUpdateArgs} args - Arguments to update one ConsentRecord.
     * @example
     * // Update one ConsentRecord
     * const consentRecord = await prisma.consentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsentRecordUpdateArgs>(args: SelectSubset<T, ConsentRecordUpdateArgs<ExtArgs>>): Prisma__ConsentRecordClient<$Result.GetResult<Prisma.$ConsentRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsentRecords.
     * @param {ConsentRecordDeleteManyArgs} args - Arguments to filter ConsentRecords to delete.
     * @example
     * // Delete a few ConsentRecords
     * const { count } = await prisma.consentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsentRecordDeleteManyArgs>(args?: SelectSubset<T, ConsentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsentRecords
     * const consentRecord = await prisma.consentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsentRecordUpdateManyArgs>(args: SelectSubset<T, ConsentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsentRecords and returns the data updated in the database.
     * @param {ConsentRecordUpdateManyAndReturnArgs} args - Arguments to update many ConsentRecords.
     * @example
     * // Update many ConsentRecords
     * const consentRecord = await prisma.consentRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsentRecords and only return the `id`
     * const consentRecordWithIdOnly = await prisma.consentRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConsentRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsentRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsentRecord.
     * @param {ConsentRecordUpsertArgs} args - Arguments to update or create a ConsentRecord.
     * @example
     * // Update or create a ConsentRecord
     * const consentRecord = await prisma.consentRecord.upsert({
     *   create: {
     *     // ... data to create a ConsentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsentRecord we want to update
     *   }
     * })
     */
    upsert<T extends ConsentRecordUpsertArgs>(args: SelectSubset<T, ConsentRecordUpsertArgs<ExtArgs>>): Prisma__ConsentRecordClient<$Result.GetResult<Prisma.$ConsentRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentRecordCountArgs} args - Arguments to filter ConsentRecords to count.
     * @example
     * // Count the number of ConsentRecords
     * const count = await prisma.consentRecord.count({
     *   where: {
     *     // ... the filter for the ConsentRecords we want to count
     *   }
     * })
    **/
    count<T extends ConsentRecordCountArgs>(
      args?: Subset<T, ConsentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsentRecordAggregateArgs>(args: Subset<T, ConsentRecordAggregateArgs>): Prisma.PrismaPromise<GetConsentRecordAggregateType<T>>

    /**
     * Group by ConsentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentRecordGroupByArgs} args - Group by arguments.
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
      T extends ConsentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsentRecordGroupByArgs['orderBy'] }
        : { orderBy?: ConsentRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsentRecord model
   */
  readonly fields: ConsentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ConsentRecord model
   */
  interface ConsentRecordFieldRefs {
    readonly id: FieldRef<"ConsentRecord", 'String'>
    readonly userId: FieldRef<"ConsentRecord", 'String'>
    readonly scope: FieldRef<"ConsentRecord", 'String'>
    readonly version: FieldRef<"ConsentRecord", 'String'>
    readonly granted: FieldRef<"ConsentRecord", 'Boolean'>
    readonly at: FieldRef<"ConsentRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsentRecord findUnique
   */
  export type ConsentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
    /**
     * Filter, which ConsentRecord to fetch.
     */
    where: ConsentRecordWhereUniqueInput
  }

  /**
   * ConsentRecord findUniqueOrThrow
   */
  export type ConsentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
    /**
     * Filter, which ConsentRecord to fetch.
     */
    where: ConsentRecordWhereUniqueInput
  }

  /**
   * ConsentRecord findFirst
   */
  export type ConsentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
    /**
     * Filter, which ConsentRecord to fetch.
     */
    where?: ConsentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsentRecords to fetch.
     */
    orderBy?: ConsentRecordOrderByWithRelationInput | ConsentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsentRecords.
     */
    cursor?: ConsentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsentRecords.
     */
    distinct?: ConsentRecordScalarFieldEnum | ConsentRecordScalarFieldEnum[]
  }

  /**
   * ConsentRecord findFirstOrThrow
   */
  export type ConsentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
    /**
     * Filter, which ConsentRecord to fetch.
     */
    where?: ConsentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsentRecords to fetch.
     */
    orderBy?: ConsentRecordOrderByWithRelationInput | ConsentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsentRecords.
     */
    cursor?: ConsentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsentRecords.
     */
    distinct?: ConsentRecordScalarFieldEnum | ConsentRecordScalarFieldEnum[]
  }

  /**
   * ConsentRecord findMany
   */
  export type ConsentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
    /**
     * Filter, which ConsentRecords to fetch.
     */
    where?: ConsentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsentRecords to fetch.
     */
    orderBy?: ConsentRecordOrderByWithRelationInput | ConsentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsentRecords.
     */
    cursor?: ConsentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsentRecords.
     */
    skip?: number
    distinct?: ConsentRecordScalarFieldEnum | ConsentRecordScalarFieldEnum[]
  }

  /**
   * ConsentRecord create
   */
  export type ConsentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a ConsentRecord.
     */
    data: XOR<ConsentRecordCreateInput, ConsentRecordUncheckedCreateInput>
  }

  /**
   * ConsentRecord createMany
   */
  export type ConsentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsentRecords.
     */
    data: ConsentRecordCreateManyInput | ConsentRecordCreateManyInput[]
  }

  /**
   * ConsentRecord createManyAndReturn
   */
  export type ConsentRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ConsentRecords.
     */
    data: ConsentRecordCreateManyInput | ConsentRecordCreateManyInput[]
  }

  /**
   * ConsentRecord update
   */
  export type ConsentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a ConsentRecord.
     */
    data: XOR<ConsentRecordUpdateInput, ConsentRecordUncheckedUpdateInput>
    /**
     * Choose, which ConsentRecord to update.
     */
    where: ConsentRecordWhereUniqueInput
  }

  /**
   * ConsentRecord updateMany
   */
  export type ConsentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsentRecords.
     */
    data: XOR<ConsentRecordUpdateManyMutationInput, ConsentRecordUncheckedUpdateManyInput>
    /**
     * Filter which ConsentRecords to update
     */
    where?: ConsentRecordWhereInput
    /**
     * Limit how many ConsentRecords to update.
     */
    limit?: number
  }

  /**
   * ConsentRecord updateManyAndReturn
   */
  export type ConsentRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
    /**
     * The data used to update ConsentRecords.
     */
    data: XOR<ConsentRecordUpdateManyMutationInput, ConsentRecordUncheckedUpdateManyInput>
    /**
     * Filter which ConsentRecords to update
     */
    where?: ConsentRecordWhereInput
    /**
     * Limit how many ConsentRecords to update.
     */
    limit?: number
  }

  /**
   * ConsentRecord upsert
   */
  export type ConsentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the ConsentRecord to update in case it exists.
     */
    where: ConsentRecordWhereUniqueInput
    /**
     * In case the ConsentRecord found by the `where` argument doesn't exist, create a new ConsentRecord with this data.
     */
    create: XOR<ConsentRecordCreateInput, ConsentRecordUncheckedCreateInput>
    /**
     * In case the ConsentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsentRecordUpdateInput, ConsentRecordUncheckedUpdateInput>
  }

  /**
   * ConsentRecord delete
   */
  export type ConsentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
    /**
     * Filter which ConsentRecord to delete.
     */
    where: ConsentRecordWhereUniqueInput
  }

  /**
   * ConsentRecord deleteMany
   */
  export type ConsentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsentRecords to delete
     */
    where?: ConsentRecordWhereInput
    /**
     * Limit how many ConsentRecords to delete.
     */
    limit?: number
  }

  /**
   * ConsentRecord without action
   */
  export type ConsentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentRecord
     */
    select?: ConsentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentRecord
     */
    omit?: ConsentRecordOmit<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    at: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    at: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorId: number
    action: number
    entity: number
    entityId: number
    at: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entity?: true
    entityId?: true
    at?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entity?: true
    entityId?: true
    at?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entity?: true
    entityId?: true
    at?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorId: string | null
    action: string
    entity: string
    entityId: string | null
    at: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    at?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    at?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    at?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    at?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorId" | "action" | "entity" | "entityId" | "at", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string | null
      action: string
      entity: string
      entityId: string | null
      at: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly at: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model AssistantMessage
   */

  export type AggregateAssistantMessage = {
    _count: AssistantMessageCountAggregateOutputType | null
    _min: AssistantMessageMinAggregateOutputType | null
    _max: AssistantMessageMaxAggregateOutputType | null
  }

  export type AssistantMessageMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    role: string | null
    content: string | null
    toolCalls: string | null
    verifierOutcome: string | null
    feedback: string | null
    createdAt: Date | null
  }

  export type AssistantMessageMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    role: string | null
    content: string | null
    toolCalls: string | null
    verifierOutcome: string | null
    feedback: string | null
    createdAt: Date | null
  }

  export type AssistantMessageCountAggregateOutputType = {
    id: number
    conversationId: number
    role: number
    content: number
    toolCalls: number
    verifierOutcome: number
    feedback: number
    createdAt: number
    _all: number
  }


  export type AssistantMessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    toolCalls?: true
    verifierOutcome?: true
    feedback?: true
    createdAt?: true
  }

  export type AssistantMessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    toolCalls?: true
    verifierOutcome?: true
    feedback?: true
    createdAt?: true
  }

  export type AssistantMessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    toolCalls?: true
    verifierOutcome?: true
    feedback?: true
    createdAt?: true
    _all?: true
  }

  export type AssistantMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssistantMessage to aggregate.
     */
    where?: AssistantMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssistantMessages to fetch.
     */
    orderBy?: AssistantMessageOrderByWithRelationInput | AssistantMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssistantMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssistantMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssistantMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssistantMessages
    **/
    _count?: true | AssistantMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssistantMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssistantMessageMaxAggregateInputType
  }

  export type GetAssistantMessageAggregateType<T extends AssistantMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateAssistantMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssistantMessage[P]>
      : GetScalarType<T[P], AggregateAssistantMessage[P]>
  }




  export type AssistantMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssistantMessageWhereInput
    orderBy?: AssistantMessageOrderByWithAggregationInput | AssistantMessageOrderByWithAggregationInput[]
    by: AssistantMessageScalarFieldEnum[] | AssistantMessageScalarFieldEnum
    having?: AssistantMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssistantMessageCountAggregateInputType | true
    _min?: AssistantMessageMinAggregateInputType
    _max?: AssistantMessageMaxAggregateInputType
  }

  export type AssistantMessageGroupByOutputType = {
    id: string
    conversationId: string
    role: string
    content: string
    toolCalls: string | null
    verifierOutcome: string | null
    feedback: string | null
    createdAt: Date
    _count: AssistantMessageCountAggregateOutputType | null
    _min: AssistantMessageMinAggregateOutputType | null
    _max: AssistantMessageMaxAggregateOutputType | null
  }

  type GetAssistantMessageGroupByPayload<T extends AssistantMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssistantMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssistantMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssistantMessageGroupByOutputType[P]>
            : GetScalarType<T[P], AssistantMessageGroupByOutputType[P]>
        }
      >
    >


  export type AssistantMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    toolCalls?: boolean
    verifierOutcome?: boolean
    feedback?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["assistantMessage"]>

  export type AssistantMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    toolCalls?: boolean
    verifierOutcome?: boolean
    feedback?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["assistantMessage"]>

  export type AssistantMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    toolCalls?: boolean
    verifierOutcome?: boolean
    feedback?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["assistantMessage"]>

  export type AssistantMessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    toolCalls?: boolean
    verifierOutcome?: boolean
    feedback?: boolean
    createdAt?: boolean
  }

  export type AssistantMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "role" | "content" | "toolCalls" | "verifierOutcome" | "feedback" | "createdAt", ExtArgs["result"]["assistantMessage"]>

  export type $AssistantMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssistantMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      role: string
      content: string
      toolCalls: string | null
      verifierOutcome: string | null
      feedback: string | null
      createdAt: Date
    }, ExtArgs["result"]["assistantMessage"]>
    composites: {}
  }

  type AssistantMessageGetPayload<S extends boolean | null | undefined | AssistantMessageDefaultArgs> = $Result.GetResult<Prisma.$AssistantMessagePayload, S>

  type AssistantMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssistantMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssistantMessageCountAggregateInputType | true
    }

  export interface AssistantMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssistantMessage'], meta: { name: 'AssistantMessage' } }
    /**
     * Find zero or one AssistantMessage that matches the filter.
     * @param {AssistantMessageFindUniqueArgs} args - Arguments to find a AssistantMessage
     * @example
     * // Get one AssistantMessage
     * const assistantMessage = await prisma.assistantMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssistantMessageFindUniqueArgs>(args: SelectSubset<T, AssistantMessageFindUniqueArgs<ExtArgs>>): Prisma__AssistantMessageClient<$Result.GetResult<Prisma.$AssistantMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssistantMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssistantMessageFindUniqueOrThrowArgs} args - Arguments to find a AssistantMessage
     * @example
     * // Get one AssistantMessage
     * const assistantMessage = await prisma.assistantMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssistantMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, AssistantMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssistantMessageClient<$Result.GetResult<Prisma.$AssistantMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssistantMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantMessageFindFirstArgs} args - Arguments to find a AssistantMessage
     * @example
     * // Get one AssistantMessage
     * const assistantMessage = await prisma.assistantMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssistantMessageFindFirstArgs>(args?: SelectSubset<T, AssistantMessageFindFirstArgs<ExtArgs>>): Prisma__AssistantMessageClient<$Result.GetResult<Prisma.$AssistantMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssistantMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantMessageFindFirstOrThrowArgs} args - Arguments to find a AssistantMessage
     * @example
     * // Get one AssistantMessage
     * const assistantMessage = await prisma.assistantMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssistantMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, AssistantMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssistantMessageClient<$Result.GetResult<Prisma.$AssistantMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssistantMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssistantMessages
     * const assistantMessages = await prisma.assistantMessage.findMany()
     * 
     * // Get first 10 AssistantMessages
     * const assistantMessages = await prisma.assistantMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assistantMessageWithIdOnly = await prisma.assistantMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssistantMessageFindManyArgs>(args?: SelectSubset<T, AssistantMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistantMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssistantMessage.
     * @param {AssistantMessageCreateArgs} args - Arguments to create a AssistantMessage.
     * @example
     * // Create one AssistantMessage
     * const AssistantMessage = await prisma.assistantMessage.create({
     *   data: {
     *     // ... data to create a AssistantMessage
     *   }
     * })
     * 
     */
    create<T extends AssistantMessageCreateArgs>(args: SelectSubset<T, AssistantMessageCreateArgs<ExtArgs>>): Prisma__AssistantMessageClient<$Result.GetResult<Prisma.$AssistantMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssistantMessages.
     * @param {AssistantMessageCreateManyArgs} args - Arguments to create many AssistantMessages.
     * @example
     * // Create many AssistantMessages
     * const assistantMessage = await prisma.assistantMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssistantMessageCreateManyArgs>(args?: SelectSubset<T, AssistantMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssistantMessages and returns the data saved in the database.
     * @param {AssistantMessageCreateManyAndReturnArgs} args - Arguments to create many AssistantMessages.
     * @example
     * // Create many AssistantMessages
     * const assistantMessage = await prisma.assistantMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssistantMessages and only return the `id`
     * const assistantMessageWithIdOnly = await prisma.assistantMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssistantMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, AssistantMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistantMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssistantMessage.
     * @param {AssistantMessageDeleteArgs} args - Arguments to delete one AssistantMessage.
     * @example
     * // Delete one AssistantMessage
     * const AssistantMessage = await prisma.assistantMessage.delete({
     *   where: {
     *     // ... filter to delete one AssistantMessage
     *   }
     * })
     * 
     */
    delete<T extends AssistantMessageDeleteArgs>(args: SelectSubset<T, AssistantMessageDeleteArgs<ExtArgs>>): Prisma__AssistantMessageClient<$Result.GetResult<Prisma.$AssistantMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssistantMessage.
     * @param {AssistantMessageUpdateArgs} args - Arguments to update one AssistantMessage.
     * @example
     * // Update one AssistantMessage
     * const assistantMessage = await prisma.assistantMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssistantMessageUpdateArgs>(args: SelectSubset<T, AssistantMessageUpdateArgs<ExtArgs>>): Prisma__AssistantMessageClient<$Result.GetResult<Prisma.$AssistantMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssistantMessages.
     * @param {AssistantMessageDeleteManyArgs} args - Arguments to filter AssistantMessages to delete.
     * @example
     * // Delete a few AssistantMessages
     * const { count } = await prisma.assistantMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssistantMessageDeleteManyArgs>(args?: SelectSubset<T, AssistantMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssistantMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssistantMessages
     * const assistantMessage = await prisma.assistantMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssistantMessageUpdateManyArgs>(args: SelectSubset<T, AssistantMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssistantMessages and returns the data updated in the database.
     * @param {AssistantMessageUpdateManyAndReturnArgs} args - Arguments to update many AssistantMessages.
     * @example
     * // Update many AssistantMessages
     * const assistantMessage = await prisma.assistantMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssistantMessages and only return the `id`
     * const assistantMessageWithIdOnly = await prisma.assistantMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssistantMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, AssistantMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistantMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssistantMessage.
     * @param {AssistantMessageUpsertArgs} args - Arguments to update or create a AssistantMessage.
     * @example
     * // Update or create a AssistantMessage
     * const assistantMessage = await prisma.assistantMessage.upsert({
     *   create: {
     *     // ... data to create a AssistantMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssistantMessage we want to update
     *   }
     * })
     */
    upsert<T extends AssistantMessageUpsertArgs>(args: SelectSubset<T, AssistantMessageUpsertArgs<ExtArgs>>): Prisma__AssistantMessageClient<$Result.GetResult<Prisma.$AssistantMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssistantMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantMessageCountArgs} args - Arguments to filter AssistantMessages to count.
     * @example
     * // Count the number of AssistantMessages
     * const count = await prisma.assistantMessage.count({
     *   where: {
     *     // ... the filter for the AssistantMessages we want to count
     *   }
     * })
    **/
    count<T extends AssistantMessageCountArgs>(
      args?: Subset<T, AssistantMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssistantMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssistantMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssistantMessageAggregateArgs>(args: Subset<T, AssistantMessageAggregateArgs>): Prisma.PrismaPromise<GetAssistantMessageAggregateType<T>>

    /**
     * Group by AssistantMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantMessageGroupByArgs} args - Group by arguments.
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
      T extends AssistantMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssistantMessageGroupByArgs['orderBy'] }
        : { orderBy?: AssistantMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssistantMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssistantMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssistantMessage model
   */
  readonly fields: AssistantMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssistantMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssistantMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AssistantMessage model
   */
  interface AssistantMessageFieldRefs {
    readonly id: FieldRef<"AssistantMessage", 'String'>
    readonly conversationId: FieldRef<"AssistantMessage", 'String'>
    readonly role: FieldRef<"AssistantMessage", 'String'>
    readonly content: FieldRef<"AssistantMessage", 'String'>
    readonly toolCalls: FieldRef<"AssistantMessage", 'String'>
    readonly verifierOutcome: FieldRef<"AssistantMessage", 'String'>
    readonly feedback: FieldRef<"AssistantMessage", 'String'>
    readonly createdAt: FieldRef<"AssistantMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssistantMessage findUnique
   */
  export type AssistantMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
    /**
     * Filter, which AssistantMessage to fetch.
     */
    where: AssistantMessageWhereUniqueInput
  }

  /**
   * AssistantMessage findUniqueOrThrow
   */
  export type AssistantMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
    /**
     * Filter, which AssistantMessage to fetch.
     */
    where: AssistantMessageWhereUniqueInput
  }

  /**
   * AssistantMessage findFirst
   */
  export type AssistantMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
    /**
     * Filter, which AssistantMessage to fetch.
     */
    where?: AssistantMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssistantMessages to fetch.
     */
    orderBy?: AssistantMessageOrderByWithRelationInput | AssistantMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssistantMessages.
     */
    cursor?: AssistantMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssistantMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssistantMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssistantMessages.
     */
    distinct?: AssistantMessageScalarFieldEnum | AssistantMessageScalarFieldEnum[]
  }

  /**
   * AssistantMessage findFirstOrThrow
   */
  export type AssistantMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
    /**
     * Filter, which AssistantMessage to fetch.
     */
    where?: AssistantMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssistantMessages to fetch.
     */
    orderBy?: AssistantMessageOrderByWithRelationInput | AssistantMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssistantMessages.
     */
    cursor?: AssistantMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssistantMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssistantMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssistantMessages.
     */
    distinct?: AssistantMessageScalarFieldEnum | AssistantMessageScalarFieldEnum[]
  }

  /**
   * AssistantMessage findMany
   */
  export type AssistantMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
    /**
     * Filter, which AssistantMessages to fetch.
     */
    where?: AssistantMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssistantMessages to fetch.
     */
    orderBy?: AssistantMessageOrderByWithRelationInput | AssistantMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssistantMessages.
     */
    cursor?: AssistantMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssistantMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssistantMessages.
     */
    skip?: number
    distinct?: AssistantMessageScalarFieldEnum | AssistantMessageScalarFieldEnum[]
  }

  /**
   * AssistantMessage create
   */
  export type AssistantMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a AssistantMessage.
     */
    data: XOR<AssistantMessageCreateInput, AssistantMessageUncheckedCreateInput>
  }

  /**
   * AssistantMessage createMany
   */
  export type AssistantMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssistantMessages.
     */
    data: AssistantMessageCreateManyInput | AssistantMessageCreateManyInput[]
  }

  /**
   * AssistantMessage createManyAndReturn
   */
  export type AssistantMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
    /**
     * The data used to create many AssistantMessages.
     */
    data: AssistantMessageCreateManyInput | AssistantMessageCreateManyInput[]
  }

  /**
   * AssistantMessage update
   */
  export type AssistantMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a AssistantMessage.
     */
    data: XOR<AssistantMessageUpdateInput, AssistantMessageUncheckedUpdateInput>
    /**
     * Choose, which AssistantMessage to update.
     */
    where: AssistantMessageWhereUniqueInput
  }

  /**
   * AssistantMessage updateMany
   */
  export type AssistantMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssistantMessages.
     */
    data: XOR<AssistantMessageUpdateManyMutationInput, AssistantMessageUncheckedUpdateManyInput>
    /**
     * Filter which AssistantMessages to update
     */
    where?: AssistantMessageWhereInput
    /**
     * Limit how many AssistantMessages to update.
     */
    limit?: number
  }

  /**
   * AssistantMessage updateManyAndReturn
   */
  export type AssistantMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
    /**
     * The data used to update AssistantMessages.
     */
    data: XOR<AssistantMessageUpdateManyMutationInput, AssistantMessageUncheckedUpdateManyInput>
    /**
     * Filter which AssistantMessages to update
     */
    where?: AssistantMessageWhereInput
    /**
     * Limit how many AssistantMessages to update.
     */
    limit?: number
  }

  /**
   * AssistantMessage upsert
   */
  export type AssistantMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the AssistantMessage to update in case it exists.
     */
    where: AssistantMessageWhereUniqueInput
    /**
     * In case the AssistantMessage found by the `where` argument doesn't exist, create a new AssistantMessage with this data.
     */
    create: XOR<AssistantMessageCreateInput, AssistantMessageUncheckedCreateInput>
    /**
     * In case the AssistantMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssistantMessageUpdateInput, AssistantMessageUncheckedUpdateInput>
  }

  /**
   * AssistantMessage delete
   */
  export type AssistantMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
    /**
     * Filter which AssistantMessage to delete.
     */
    where: AssistantMessageWhereUniqueInput
  }

  /**
   * AssistantMessage deleteMany
   */
  export type AssistantMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssistantMessages to delete
     */
    where?: AssistantMessageWhereInput
    /**
     * Limit how many AssistantMessages to delete.
     */
    limit?: number
  }

  /**
   * AssistantMessage without action
   */
  export type AssistantMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantMessage
     */
    select?: AssistantMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssistantMessage
     */
    omit?: AssistantMessageOmit<ExtArgs> | null
  }


  /**
   * Model ForecastGate
   */

  export type AggregateForecastGate = {
    _count: ForecastGateCountAggregateOutputType | null
    _avg: ForecastGateAvgAggregateOutputType | null
    _sum: ForecastGateSumAggregateOutputType | null
    _min: ForecastGateMinAggregateOutputType | null
    _max: ForecastGateMaxAggregateOutputType | null
  }

  export type ForecastGateAvgAggregateOutputType = {
    horizonDays: number | null
    backtestMape: number | null
  }

  export type ForecastGateSumAggregateOutputType = {
    horizonDays: number | null
    backtestMape: number | null
  }

  export type ForecastGateMinAggregateOutputType = {
    id: string | null
    commodityId: string | null
    marketId: string | null
    horizonDays: number | null
    status: string | null
    reason: string | null
    decidedBy: string | null
    decidedAt: Date | null
    backtestMape: number | null
  }

  export type ForecastGateMaxAggregateOutputType = {
    id: string | null
    commodityId: string | null
    marketId: string | null
    horizonDays: number | null
    status: string | null
    reason: string | null
    decidedBy: string | null
    decidedAt: Date | null
    backtestMape: number | null
  }

  export type ForecastGateCountAggregateOutputType = {
    id: number
    commodityId: number
    marketId: number
    horizonDays: number
    status: number
    reason: number
    decidedBy: number
    decidedAt: number
    backtestMape: number
    _all: number
  }


  export type ForecastGateAvgAggregateInputType = {
    horizonDays?: true
    backtestMape?: true
  }

  export type ForecastGateSumAggregateInputType = {
    horizonDays?: true
    backtestMape?: true
  }

  export type ForecastGateMinAggregateInputType = {
    id?: true
    commodityId?: true
    marketId?: true
    horizonDays?: true
    status?: true
    reason?: true
    decidedBy?: true
    decidedAt?: true
    backtestMape?: true
  }

  export type ForecastGateMaxAggregateInputType = {
    id?: true
    commodityId?: true
    marketId?: true
    horizonDays?: true
    status?: true
    reason?: true
    decidedBy?: true
    decidedAt?: true
    backtestMape?: true
  }

  export type ForecastGateCountAggregateInputType = {
    id?: true
    commodityId?: true
    marketId?: true
    horizonDays?: true
    status?: true
    reason?: true
    decidedBy?: true
    decidedAt?: true
    backtestMape?: true
    _all?: true
  }

  export type ForecastGateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForecastGate to aggregate.
     */
    where?: ForecastGateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastGates to fetch.
     */
    orderBy?: ForecastGateOrderByWithRelationInput | ForecastGateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForecastGateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastGates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastGates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForecastGates
    **/
    _count?: true | ForecastGateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForecastGateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForecastGateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForecastGateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForecastGateMaxAggregateInputType
  }

  export type GetForecastGateAggregateType<T extends ForecastGateAggregateArgs> = {
        [P in keyof T & keyof AggregateForecastGate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForecastGate[P]>
      : GetScalarType<T[P], AggregateForecastGate[P]>
  }




  export type ForecastGateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForecastGateWhereInput
    orderBy?: ForecastGateOrderByWithAggregationInput | ForecastGateOrderByWithAggregationInput[]
    by: ForecastGateScalarFieldEnum[] | ForecastGateScalarFieldEnum
    having?: ForecastGateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForecastGateCountAggregateInputType | true
    _avg?: ForecastGateAvgAggregateInputType
    _sum?: ForecastGateSumAggregateInputType
    _min?: ForecastGateMinAggregateInputType
    _max?: ForecastGateMaxAggregateInputType
  }

  export type ForecastGateGroupByOutputType = {
    id: string
    commodityId: string
    marketId: string
    horizonDays: number
    status: string
    reason: string | null
    decidedBy: string | null
    decidedAt: Date | null
    backtestMape: number | null
    _count: ForecastGateCountAggregateOutputType | null
    _avg: ForecastGateAvgAggregateOutputType | null
    _sum: ForecastGateSumAggregateOutputType | null
    _min: ForecastGateMinAggregateOutputType | null
    _max: ForecastGateMaxAggregateOutputType | null
  }

  type GetForecastGateGroupByPayload<T extends ForecastGateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForecastGateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForecastGateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForecastGateGroupByOutputType[P]>
            : GetScalarType<T[P], ForecastGateGroupByOutputType[P]>
        }
      >
    >


  export type ForecastGateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodityId?: boolean
    marketId?: boolean
    horizonDays?: boolean
    status?: boolean
    reason?: boolean
    decidedBy?: boolean
    decidedAt?: boolean
    backtestMape?: boolean
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastGate"]>

  export type ForecastGateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodityId?: boolean
    marketId?: boolean
    horizonDays?: boolean
    status?: boolean
    reason?: boolean
    decidedBy?: boolean
    decidedAt?: boolean
    backtestMape?: boolean
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastGate"]>

  export type ForecastGateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commodityId?: boolean
    marketId?: boolean
    horizonDays?: boolean
    status?: boolean
    reason?: boolean
    decidedBy?: boolean
    decidedAt?: boolean
    backtestMape?: boolean
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forecastGate"]>

  export type ForecastGateSelectScalar = {
    id?: boolean
    commodityId?: boolean
    marketId?: boolean
    horizonDays?: boolean
    status?: boolean
    reason?: boolean
    decidedBy?: boolean
    decidedAt?: boolean
    backtestMape?: boolean
  }

  export type ForecastGateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commodityId" | "marketId" | "horizonDays" | "status" | "reason" | "decidedBy" | "decidedAt" | "backtestMape", ExtArgs["result"]["forecastGate"]>
  export type ForecastGateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type ForecastGateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type ForecastGateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commodity?: boolean | CommodityDefaultArgs<ExtArgs>
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $ForecastGatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForecastGate"
    objects: {
      commodity: Prisma.$CommodityPayload<ExtArgs>
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commodityId: string
      marketId: string
      horizonDays: number
      status: string
      reason: string | null
      decidedBy: string | null
      decidedAt: Date | null
      backtestMape: number | null
    }, ExtArgs["result"]["forecastGate"]>
    composites: {}
  }

  type ForecastGateGetPayload<S extends boolean | null | undefined | ForecastGateDefaultArgs> = $Result.GetResult<Prisma.$ForecastGatePayload, S>

  type ForecastGateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForecastGateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForecastGateCountAggregateInputType | true
    }

  export interface ForecastGateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForecastGate'], meta: { name: 'ForecastGate' } }
    /**
     * Find zero or one ForecastGate that matches the filter.
     * @param {ForecastGateFindUniqueArgs} args - Arguments to find a ForecastGate
     * @example
     * // Get one ForecastGate
     * const forecastGate = await prisma.forecastGate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForecastGateFindUniqueArgs>(args: SelectSubset<T, ForecastGateFindUniqueArgs<ExtArgs>>): Prisma__ForecastGateClient<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForecastGate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForecastGateFindUniqueOrThrowArgs} args - Arguments to find a ForecastGate
     * @example
     * // Get one ForecastGate
     * const forecastGate = await prisma.forecastGate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForecastGateFindUniqueOrThrowArgs>(args: SelectSubset<T, ForecastGateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForecastGateClient<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForecastGate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastGateFindFirstArgs} args - Arguments to find a ForecastGate
     * @example
     * // Get one ForecastGate
     * const forecastGate = await prisma.forecastGate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForecastGateFindFirstArgs>(args?: SelectSubset<T, ForecastGateFindFirstArgs<ExtArgs>>): Prisma__ForecastGateClient<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForecastGate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastGateFindFirstOrThrowArgs} args - Arguments to find a ForecastGate
     * @example
     * // Get one ForecastGate
     * const forecastGate = await prisma.forecastGate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForecastGateFindFirstOrThrowArgs>(args?: SelectSubset<T, ForecastGateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForecastGateClient<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForecastGates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastGateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForecastGates
     * const forecastGates = await prisma.forecastGate.findMany()
     * 
     * // Get first 10 ForecastGates
     * const forecastGates = await prisma.forecastGate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forecastGateWithIdOnly = await prisma.forecastGate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForecastGateFindManyArgs>(args?: SelectSubset<T, ForecastGateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForecastGate.
     * @param {ForecastGateCreateArgs} args - Arguments to create a ForecastGate.
     * @example
     * // Create one ForecastGate
     * const ForecastGate = await prisma.forecastGate.create({
     *   data: {
     *     // ... data to create a ForecastGate
     *   }
     * })
     * 
     */
    create<T extends ForecastGateCreateArgs>(args: SelectSubset<T, ForecastGateCreateArgs<ExtArgs>>): Prisma__ForecastGateClient<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForecastGates.
     * @param {ForecastGateCreateManyArgs} args - Arguments to create many ForecastGates.
     * @example
     * // Create many ForecastGates
     * const forecastGate = await prisma.forecastGate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForecastGateCreateManyArgs>(args?: SelectSubset<T, ForecastGateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForecastGates and returns the data saved in the database.
     * @param {ForecastGateCreateManyAndReturnArgs} args - Arguments to create many ForecastGates.
     * @example
     * // Create many ForecastGates
     * const forecastGate = await prisma.forecastGate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForecastGates and only return the `id`
     * const forecastGateWithIdOnly = await prisma.forecastGate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForecastGateCreateManyAndReturnArgs>(args?: SelectSubset<T, ForecastGateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForecastGate.
     * @param {ForecastGateDeleteArgs} args - Arguments to delete one ForecastGate.
     * @example
     * // Delete one ForecastGate
     * const ForecastGate = await prisma.forecastGate.delete({
     *   where: {
     *     // ... filter to delete one ForecastGate
     *   }
     * })
     * 
     */
    delete<T extends ForecastGateDeleteArgs>(args: SelectSubset<T, ForecastGateDeleteArgs<ExtArgs>>): Prisma__ForecastGateClient<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForecastGate.
     * @param {ForecastGateUpdateArgs} args - Arguments to update one ForecastGate.
     * @example
     * // Update one ForecastGate
     * const forecastGate = await prisma.forecastGate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForecastGateUpdateArgs>(args: SelectSubset<T, ForecastGateUpdateArgs<ExtArgs>>): Prisma__ForecastGateClient<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForecastGates.
     * @param {ForecastGateDeleteManyArgs} args - Arguments to filter ForecastGates to delete.
     * @example
     * // Delete a few ForecastGates
     * const { count } = await prisma.forecastGate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForecastGateDeleteManyArgs>(args?: SelectSubset<T, ForecastGateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForecastGates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastGateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForecastGates
     * const forecastGate = await prisma.forecastGate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForecastGateUpdateManyArgs>(args: SelectSubset<T, ForecastGateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForecastGates and returns the data updated in the database.
     * @param {ForecastGateUpdateManyAndReturnArgs} args - Arguments to update many ForecastGates.
     * @example
     * // Update many ForecastGates
     * const forecastGate = await prisma.forecastGate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForecastGates and only return the `id`
     * const forecastGateWithIdOnly = await prisma.forecastGate.updateManyAndReturn({
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
    updateManyAndReturn<T extends ForecastGateUpdateManyAndReturnArgs>(args: SelectSubset<T, ForecastGateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForecastGate.
     * @param {ForecastGateUpsertArgs} args - Arguments to update or create a ForecastGate.
     * @example
     * // Update or create a ForecastGate
     * const forecastGate = await prisma.forecastGate.upsert({
     *   create: {
     *     // ... data to create a ForecastGate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForecastGate we want to update
     *   }
     * })
     */
    upsert<T extends ForecastGateUpsertArgs>(args: SelectSubset<T, ForecastGateUpsertArgs<ExtArgs>>): Prisma__ForecastGateClient<$Result.GetResult<Prisma.$ForecastGatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForecastGates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastGateCountArgs} args - Arguments to filter ForecastGates to count.
     * @example
     * // Count the number of ForecastGates
     * const count = await prisma.forecastGate.count({
     *   where: {
     *     // ... the filter for the ForecastGates we want to count
     *   }
     * })
    **/
    count<T extends ForecastGateCountArgs>(
      args?: Subset<T, ForecastGateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForecastGateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForecastGate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastGateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForecastGateAggregateArgs>(args: Subset<T, ForecastGateAggregateArgs>): Prisma.PrismaPromise<GetForecastGateAggregateType<T>>

    /**
     * Group by ForecastGate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForecastGateGroupByArgs} args - Group by arguments.
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
      T extends ForecastGateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForecastGateGroupByArgs['orderBy'] }
        : { orderBy?: ForecastGateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForecastGateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForecastGateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForecastGate model
   */
  readonly fields: ForecastGateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForecastGate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForecastGateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commodity<T extends CommodityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommodityDefaultArgs<ExtArgs>>): Prisma__CommodityClient<$Result.GetResult<Prisma.$CommodityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ForecastGate model
   */
  interface ForecastGateFieldRefs {
    readonly id: FieldRef<"ForecastGate", 'String'>
    readonly commodityId: FieldRef<"ForecastGate", 'String'>
    readonly marketId: FieldRef<"ForecastGate", 'String'>
    readonly horizonDays: FieldRef<"ForecastGate", 'Int'>
    readonly status: FieldRef<"ForecastGate", 'String'>
    readonly reason: FieldRef<"ForecastGate", 'String'>
    readonly decidedBy: FieldRef<"ForecastGate", 'String'>
    readonly decidedAt: FieldRef<"ForecastGate", 'DateTime'>
    readonly backtestMape: FieldRef<"ForecastGate", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ForecastGate findUnique
   */
  export type ForecastGateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
    /**
     * Filter, which ForecastGate to fetch.
     */
    where: ForecastGateWhereUniqueInput
  }

  /**
   * ForecastGate findUniqueOrThrow
   */
  export type ForecastGateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
    /**
     * Filter, which ForecastGate to fetch.
     */
    where: ForecastGateWhereUniqueInput
  }

  /**
   * ForecastGate findFirst
   */
  export type ForecastGateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
    /**
     * Filter, which ForecastGate to fetch.
     */
    where?: ForecastGateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastGates to fetch.
     */
    orderBy?: ForecastGateOrderByWithRelationInput | ForecastGateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForecastGates.
     */
    cursor?: ForecastGateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastGates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastGates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForecastGates.
     */
    distinct?: ForecastGateScalarFieldEnum | ForecastGateScalarFieldEnum[]
  }

  /**
   * ForecastGate findFirstOrThrow
   */
  export type ForecastGateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
    /**
     * Filter, which ForecastGate to fetch.
     */
    where?: ForecastGateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastGates to fetch.
     */
    orderBy?: ForecastGateOrderByWithRelationInput | ForecastGateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForecastGates.
     */
    cursor?: ForecastGateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastGates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastGates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForecastGates.
     */
    distinct?: ForecastGateScalarFieldEnum | ForecastGateScalarFieldEnum[]
  }

  /**
   * ForecastGate findMany
   */
  export type ForecastGateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
    /**
     * Filter, which ForecastGates to fetch.
     */
    where?: ForecastGateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForecastGates to fetch.
     */
    orderBy?: ForecastGateOrderByWithRelationInput | ForecastGateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForecastGates.
     */
    cursor?: ForecastGateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForecastGates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForecastGates.
     */
    skip?: number
    distinct?: ForecastGateScalarFieldEnum | ForecastGateScalarFieldEnum[]
  }

  /**
   * ForecastGate create
   */
  export type ForecastGateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
    /**
     * The data needed to create a ForecastGate.
     */
    data: XOR<ForecastGateCreateInput, ForecastGateUncheckedCreateInput>
  }

  /**
   * ForecastGate createMany
   */
  export type ForecastGateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForecastGates.
     */
    data: ForecastGateCreateManyInput | ForecastGateCreateManyInput[]
  }

  /**
   * ForecastGate createManyAndReturn
   */
  export type ForecastGateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * The data used to create many ForecastGates.
     */
    data: ForecastGateCreateManyInput | ForecastGateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForecastGate update
   */
  export type ForecastGateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
    /**
     * The data needed to update a ForecastGate.
     */
    data: XOR<ForecastGateUpdateInput, ForecastGateUncheckedUpdateInput>
    /**
     * Choose, which ForecastGate to update.
     */
    where: ForecastGateWhereUniqueInput
  }

  /**
   * ForecastGate updateMany
   */
  export type ForecastGateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForecastGates.
     */
    data: XOR<ForecastGateUpdateManyMutationInput, ForecastGateUncheckedUpdateManyInput>
    /**
     * Filter which ForecastGates to update
     */
    where?: ForecastGateWhereInput
    /**
     * Limit how many ForecastGates to update.
     */
    limit?: number
  }

  /**
   * ForecastGate updateManyAndReturn
   */
  export type ForecastGateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * The data used to update ForecastGates.
     */
    data: XOR<ForecastGateUpdateManyMutationInput, ForecastGateUncheckedUpdateManyInput>
    /**
     * Filter which ForecastGates to update
     */
    where?: ForecastGateWhereInput
    /**
     * Limit how many ForecastGates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForecastGate upsert
   */
  export type ForecastGateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
    /**
     * The filter to search for the ForecastGate to update in case it exists.
     */
    where: ForecastGateWhereUniqueInput
    /**
     * In case the ForecastGate found by the `where` argument doesn't exist, create a new ForecastGate with this data.
     */
    create: XOR<ForecastGateCreateInput, ForecastGateUncheckedCreateInput>
    /**
     * In case the ForecastGate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForecastGateUpdateInput, ForecastGateUncheckedUpdateInput>
  }

  /**
   * ForecastGate delete
   */
  export type ForecastGateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
    /**
     * Filter which ForecastGate to delete.
     */
    where: ForecastGateWhereUniqueInput
  }

  /**
   * ForecastGate deleteMany
   */
  export type ForecastGateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForecastGates to delete
     */
    where?: ForecastGateWhereInput
    /**
     * Limit how many ForecastGates to delete.
     */
    limit?: number
  }

  /**
   * ForecastGate without action
   */
  export type ForecastGateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForecastGate
     */
    select?: ForecastGateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForecastGate
     */
    omit?: ForecastGateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForecastGateInclude<ExtArgs> | null
  }


  /**
   * Model JobRun
   */

  export type AggregateJobRun = {
    _count: JobRunCountAggregateOutputType | null
    _min: JobRunMinAggregateOutputType | null
    _max: JobRunMaxAggregateOutputType | null
  }

  export type JobRunMinAggregateOutputType = {
    id: string | null
    name: string | null
    startedAt: Date | null
    endedAt: Date | null
    status: string | null
    detail: string | null
  }

  export type JobRunMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startedAt: Date | null
    endedAt: Date | null
    status: string | null
    detail: string | null
  }

  export type JobRunCountAggregateOutputType = {
    id: number
    name: number
    startedAt: number
    endedAt: number
    status: number
    detail: number
    _all: number
  }


  export type JobRunMinAggregateInputType = {
    id?: true
    name?: true
    startedAt?: true
    endedAt?: true
    status?: true
    detail?: true
  }

  export type JobRunMaxAggregateInputType = {
    id?: true
    name?: true
    startedAt?: true
    endedAt?: true
    status?: true
    detail?: true
  }

  export type JobRunCountAggregateInputType = {
    id?: true
    name?: true
    startedAt?: true
    endedAt?: true
    status?: true
    detail?: true
    _all?: true
  }

  export type JobRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobRun to aggregate.
     */
    where?: JobRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRuns to fetch.
     */
    orderBy?: JobRunOrderByWithRelationInput | JobRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobRuns
    **/
    _count?: true | JobRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobRunMaxAggregateInputType
  }

  export type GetJobRunAggregateType<T extends JobRunAggregateArgs> = {
        [P in keyof T & keyof AggregateJobRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobRun[P]>
      : GetScalarType<T[P], AggregateJobRun[P]>
  }




  export type JobRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobRunWhereInput
    orderBy?: JobRunOrderByWithAggregationInput | JobRunOrderByWithAggregationInput[]
    by: JobRunScalarFieldEnum[] | JobRunScalarFieldEnum
    having?: JobRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobRunCountAggregateInputType | true
    _min?: JobRunMinAggregateInputType
    _max?: JobRunMaxAggregateInputType
  }

  export type JobRunGroupByOutputType = {
    id: string
    name: string
    startedAt: Date
    endedAt: Date | null
    status: string
    detail: string | null
    _count: JobRunCountAggregateOutputType | null
    _min: JobRunMinAggregateOutputType | null
    _max: JobRunMaxAggregateOutputType | null
  }

  type GetJobRunGroupByPayload<T extends JobRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobRunGroupByOutputType[P]>
            : GetScalarType<T[P], JobRunGroupByOutputType[P]>
        }
      >
    >


  export type JobRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    detail?: boolean
  }, ExtArgs["result"]["jobRun"]>

  export type JobRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    detail?: boolean
  }, ExtArgs["result"]["jobRun"]>

  export type JobRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    detail?: boolean
  }, ExtArgs["result"]["jobRun"]>

  export type JobRunSelectScalar = {
    id?: boolean
    name?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    detail?: boolean
  }

  export type JobRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startedAt" | "endedAt" | "status" | "detail", ExtArgs["result"]["jobRun"]>

  export type $JobRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobRun"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startedAt: Date
      endedAt: Date | null
      status: string
      detail: string | null
    }, ExtArgs["result"]["jobRun"]>
    composites: {}
  }

  type JobRunGetPayload<S extends boolean | null | undefined | JobRunDefaultArgs> = $Result.GetResult<Prisma.$JobRunPayload, S>

  type JobRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobRunCountAggregateInputType | true
    }

  export interface JobRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobRun'], meta: { name: 'JobRun' } }
    /**
     * Find zero or one JobRun that matches the filter.
     * @param {JobRunFindUniqueArgs} args - Arguments to find a JobRun
     * @example
     * // Get one JobRun
     * const jobRun = await prisma.jobRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobRunFindUniqueArgs>(args: SelectSubset<T, JobRunFindUniqueArgs<ExtArgs>>): Prisma__JobRunClient<$Result.GetResult<Prisma.$JobRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobRunFindUniqueOrThrowArgs} args - Arguments to find a JobRun
     * @example
     * // Get one JobRun
     * const jobRun = await prisma.jobRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobRunFindUniqueOrThrowArgs>(args: SelectSubset<T, JobRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobRunClient<$Result.GetResult<Prisma.$JobRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRunFindFirstArgs} args - Arguments to find a JobRun
     * @example
     * // Get one JobRun
     * const jobRun = await prisma.jobRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobRunFindFirstArgs>(args?: SelectSubset<T, JobRunFindFirstArgs<ExtArgs>>): Prisma__JobRunClient<$Result.GetResult<Prisma.$JobRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRunFindFirstOrThrowArgs} args - Arguments to find a JobRun
     * @example
     * // Get one JobRun
     * const jobRun = await prisma.jobRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobRunFindFirstOrThrowArgs>(args?: SelectSubset<T, JobRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobRunClient<$Result.GetResult<Prisma.$JobRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobRuns
     * const jobRuns = await prisma.jobRun.findMany()
     * 
     * // Get first 10 JobRuns
     * const jobRuns = await prisma.jobRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobRunWithIdOnly = await prisma.jobRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobRunFindManyArgs>(args?: SelectSubset<T, JobRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobRun.
     * @param {JobRunCreateArgs} args - Arguments to create a JobRun.
     * @example
     * // Create one JobRun
     * const JobRun = await prisma.jobRun.create({
     *   data: {
     *     // ... data to create a JobRun
     *   }
     * })
     * 
     */
    create<T extends JobRunCreateArgs>(args: SelectSubset<T, JobRunCreateArgs<ExtArgs>>): Prisma__JobRunClient<$Result.GetResult<Prisma.$JobRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobRuns.
     * @param {JobRunCreateManyArgs} args - Arguments to create many JobRuns.
     * @example
     * // Create many JobRuns
     * const jobRun = await prisma.jobRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobRunCreateManyArgs>(args?: SelectSubset<T, JobRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobRuns and returns the data saved in the database.
     * @param {JobRunCreateManyAndReturnArgs} args - Arguments to create many JobRuns.
     * @example
     * // Create many JobRuns
     * const jobRun = await prisma.jobRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobRuns and only return the `id`
     * const jobRunWithIdOnly = await prisma.jobRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobRunCreateManyAndReturnArgs>(args?: SelectSubset<T, JobRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobRun.
     * @param {JobRunDeleteArgs} args - Arguments to delete one JobRun.
     * @example
     * // Delete one JobRun
     * const JobRun = await prisma.jobRun.delete({
     *   where: {
     *     // ... filter to delete one JobRun
     *   }
     * })
     * 
     */
    delete<T extends JobRunDeleteArgs>(args: SelectSubset<T, JobRunDeleteArgs<ExtArgs>>): Prisma__JobRunClient<$Result.GetResult<Prisma.$JobRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobRun.
     * @param {JobRunUpdateArgs} args - Arguments to update one JobRun.
     * @example
     * // Update one JobRun
     * const jobRun = await prisma.jobRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobRunUpdateArgs>(args: SelectSubset<T, JobRunUpdateArgs<ExtArgs>>): Prisma__JobRunClient<$Result.GetResult<Prisma.$JobRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobRuns.
     * @param {JobRunDeleteManyArgs} args - Arguments to filter JobRuns to delete.
     * @example
     * // Delete a few JobRuns
     * const { count } = await prisma.jobRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobRunDeleteManyArgs>(args?: SelectSubset<T, JobRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobRuns
     * const jobRun = await prisma.jobRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobRunUpdateManyArgs>(args: SelectSubset<T, JobRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobRuns and returns the data updated in the database.
     * @param {JobRunUpdateManyAndReturnArgs} args - Arguments to update many JobRuns.
     * @example
     * // Update many JobRuns
     * const jobRun = await prisma.jobRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobRuns and only return the `id`
     * const jobRunWithIdOnly = await prisma.jobRun.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobRunUpdateManyAndReturnArgs>(args: SelectSubset<T, JobRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobRun.
     * @param {JobRunUpsertArgs} args - Arguments to update or create a JobRun.
     * @example
     * // Update or create a JobRun
     * const jobRun = await prisma.jobRun.upsert({
     *   create: {
     *     // ... data to create a JobRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobRun we want to update
     *   }
     * })
     */
    upsert<T extends JobRunUpsertArgs>(args: SelectSubset<T, JobRunUpsertArgs<ExtArgs>>): Prisma__JobRunClient<$Result.GetResult<Prisma.$JobRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRunCountArgs} args - Arguments to filter JobRuns to count.
     * @example
     * // Count the number of JobRuns
     * const count = await prisma.jobRun.count({
     *   where: {
     *     // ... the filter for the JobRuns we want to count
     *   }
     * })
    **/
    count<T extends JobRunCountArgs>(
      args?: Subset<T, JobRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobRunAggregateArgs>(args: Subset<T, JobRunAggregateArgs>): Prisma.PrismaPromise<GetJobRunAggregateType<T>>

    /**
     * Group by JobRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobRunGroupByArgs} args - Group by arguments.
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
      T extends JobRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobRunGroupByArgs['orderBy'] }
        : { orderBy?: JobRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobRun model
   */
  readonly fields: JobRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the JobRun model
   */
  interface JobRunFieldRefs {
    readonly id: FieldRef<"JobRun", 'String'>
    readonly name: FieldRef<"JobRun", 'String'>
    readonly startedAt: FieldRef<"JobRun", 'DateTime'>
    readonly endedAt: FieldRef<"JobRun", 'DateTime'>
    readonly status: FieldRef<"JobRun", 'String'>
    readonly detail: FieldRef<"JobRun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobRun findUnique
   */
  export type JobRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
    /**
     * Filter, which JobRun to fetch.
     */
    where: JobRunWhereUniqueInput
  }

  /**
   * JobRun findUniqueOrThrow
   */
  export type JobRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
    /**
     * Filter, which JobRun to fetch.
     */
    where: JobRunWhereUniqueInput
  }

  /**
   * JobRun findFirst
   */
  export type JobRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
    /**
     * Filter, which JobRun to fetch.
     */
    where?: JobRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRuns to fetch.
     */
    orderBy?: JobRunOrderByWithRelationInput | JobRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobRuns.
     */
    cursor?: JobRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobRuns.
     */
    distinct?: JobRunScalarFieldEnum | JobRunScalarFieldEnum[]
  }

  /**
   * JobRun findFirstOrThrow
   */
  export type JobRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
    /**
     * Filter, which JobRun to fetch.
     */
    where?: JobRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRuns to fetch.
     */
    orderBy?: JobRunOrderByWithRelationInput | JobRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobRuns.
     */
    cursor?: JobRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobRuns.
     */
    distinct?: JobRunScalarFieldEnum | JobRunScalarFieldEnum[]
  }

  /**
   * JobRun findMany
   */
  export type JobRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
    /**
     * Filter, which JobRuns to fetch.
     */
    where?: JobRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobRuns to fetch.
     */
    orderBy?: JobRunOrderByWithRelationInput | JobRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobRuns.
     */
    cursor?: JobRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobRuns.
     */
    skip?: number
    distinct?: JobRunScalarFieldEnum | JobRunScalarFieldEnum[]
  }

  /**
   * JobRun create
   */
  export type JobRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
    /**
     * The data needed to create a JobRun.
     */
    data: XOR<JobRunCreateInput, JobRunUncheckedCreateInput>
  }

  /**
   * JobRun createMany
   */
  export type JobRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobRuns.
     */
    data: JobRunCreateManyInput | JobRunCreateManyInput[]
  }

  /**
   * JobRun createManyAndReturn
   */
  export type JobRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
    /**
     * The data used to create many JobRuns.
     */
    data: JobRunCreateManyInput | JobRunCreateManyInput[]
  }

  /**
   * JobRun update
   */
  export type JobRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
    /**
     * The data needed to update a JobRun.
     */
    data: XOR<JobRunUpdateInput, JobRunUncheckedUpdateInput>
    /**
     * Choose, which JobRun to update.
     */
    where: JobRunWhereUniqueInput
  }

  /**
   * JobRun updateMany
   */
  export type JobRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobRuns.
     */
    data: XOR<JobRunUpdateManyMutationInput, JobRunUncheckedUpdateManyInput>
    /**
     * Filter which JobRuns to update
     */
    where?: JobRunWhereInput
    /**
     * Limit how many JobRuns to update.
     */
    limit?: number
  }

  /**
   * JobRun updateManyAndReturn
   */
  export type JobRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
    /**
     * The data used to update JobRuns.
     */
    data: XOR<JobRunUpdateManyMutationInput, JobRunUncheckedUpdateManyInput>
    /**
     * Filter which JobRuns to update
     */
    where?: JobRunWhereInput
    /**
     * Limit how many JobRuns to update.
     */
    limit?: number
  }

  /**
   * JobRun upsert
   */
  export type JobRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
    /**
     * The filter to search for the JobRun to update in case it exists.
     */
    where: JobRunWhereUniqueInput
    /**
     * In case the JobRun found by the `where` argument doesn't exist, create a new JobRun with this data.
     */
    create: XOR<JobRunCreateInput, JobRunUncheckedCreateInput>
    /**
     * In case the JobRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobRunUpdateInput, JobRunUncheckedUpdateInput>
  }

  /**
   * JobRun delete
   */
  export type JobRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
    /**
     * Filter which JobRun to delete.
     */
    where: JobRunWhereUniqueInput
  }

  /**
   * JobRun deleteMany
   */
  export type JobRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobRuns to delete
     */
    where?: JobRunWhereInput
    /**
     * Limit how many JobRuns to delete.
     */
    limit?: number
  }

  /**
   * JobRun without action
   */
  export type JobRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobRun
     */
    select?: JobRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobRun
     */
    omit?: JobRunOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CountryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    currencyCode: 'currencyCode',
    timezone: 'timezone',
    privacyRegime: 'privacyRegime'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const MarketScalarFieldEnum: {
    id: 'id',
    name: 'name',
    state: 'state',
    countryId: 'countryId',
    isPilot: 'isPilot'
  };

  export type MarketScalarFieldEnum = (typeof MarketScalarFieldEnum)[keyof typeof MarketScalarFieldEnum]


  export const CommodityScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name'
  };

  export type CommodityScalarFieldEnum = (typeof CommodityScalarFieldEnum)[keyof typeof CommodityScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    commodityId: 'commodityId',
    name: 'name',
    aliases: 'aliases',
    kgEquivalent: 'kgEquivalent',
    kgBasisNote: 'kgBasisNote',
    status: 'status',
    countryId: 'countryId'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const SourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    owner: 'owner',
    url: 'url',
    licence: 'licence',
    frequency: 'frequency',
    validationStatus: 'validationStatus',
    attributionText: 'attributionText'
  };

  export type SourceScalarFieldEnum = (typeof SourceScalarFieldEnum)[keyof typeof SourceScalarFieldEnum]


  export const ObservationScalarFieldEnum: {
    id: 'id',
    commodityId: 'commodityId',
    marketId: 'marketId',
    sourceId: 'sourceId',
    priceMinor: 'priceMinor',
    currencyCode: 'currencyCode',
    unitId: 'unitId',
    priceType: 'priceType',
    observedAt: 'observedAt',
    ingestedAt: 'ingestedAt',
    trustLabel: 'trustLabel',
    pricePerKgMinor: 'pricePerKgMinor',
    normalisationMethod: 'normalisationMethod',
    supersedesId: 'supersedesId',
    isCurrent: 'isCurrent'
  };

  export type ObservationScalarFieldEnum = (typeof ObservationScalarFieldEnum)[keyof typeof ObservationScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    reporterId: 'reporterId',
    idempotencyKey: 'idempotencyKey',
    commodityId: 'commodityId',
    marketId: 'marketId',
    priceMinor: 'priceMinor',
    currencyCode: 'currencyCode',
    unitId: 'unitId',
    priceType: 'priceType',
    observedAt: 'observedAt',
    status: 'status',
    statusReason: 'statusReason',
    channel: 'channel',
    submittedAt: 'submittedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const ConsentRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    scope: 'scope',
    version: 'version',
    granted: 'granted',
    at: 'at'
  };

  export type ConsentRecordScalarFieldEnum = (typeof ConsentRecordScalarFieldEnum)[keyof typeof ConsentRecordScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    at: 'at'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const AssistantMessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    role: 'role',
    content: 'content',
    toolCalls: 'toolCalls',
    verifierOutcome: 'verifierOutcome',
    feedback: 'feedback',
    createdAt: 'createdAt'
  };

  export type AssistantMessageScalarFieldEnum = (typeof AssistantMessageScalarFieldEnum)[keyof typeof AssistantMessageScalarFieldEnum]


  export const ForecastGateScalarFieldEnum: {
    id: 'id',
    commodityId: 'commodityId',
    marketId: 'marketId',
    horizonDays: 'horizonDays',
    status: 'status',
    reason: 'reason',
    decidedBy: 'decidedBy',
    decidedAt: 'decidedAt',
    backtestMape: 'backtestMape'
  };

  export type ForecastGateScalarFieldEnum = (typeof ForecastGateScalarFieldEnum)[keyof typeof ForecastGateScalarFieldEnum]


  export const JobRunScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    status: 'status',
    detail: 'detail'
  };

  export type JobRunScalarFieldEnum = (typeof JobRunScalarFieldEnum)[keyof typeof JobRunScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: StringFilter<"Country"> | string
    code?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    currencyCode?: StringFilter<"Country"> | string
    timezone?: StringFilter<"Country"> | string
    privacyRegime?: StringNullableFilter<"Country"> | string | null
    Market?: MarketListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    currencyCode?: SortOrder
    timezone?: SortOrder
    privacyRegime?: SortOrderInput | SortOrder
    Market?: MarketOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    name?: StringFilter<"Country"> | string
    currencyCode?: StringFilter<"Country"> | string
    timezone?: StringFilter<"Country"> | string
    privacyRegime?: StringNullableFilter<"Country"> | string | null
    Market?: MarketListRelationFilter
  }, "id" | "code">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    currencyCode?: SortOrder
    timezone?: SortOrder
    privacyRegime?: SortOrderInput | SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Country"> | string
    code?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    currencyCode?: StringWithAggregatesFilter<"Country"> | string
    timezone?: StringWithAggregatesFilter<"Country"> | string
    privacyRegime?: StringNullableWithAggregatesFilter<"Country"> | string | null
  }

  export type MarketWhereInput = {
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    id?: StringFilter<"Market"> | string
    name?: StringFilter<"Market"> | string
    state?: StringNullableFilter<"Market"> | string | null
    countryId?: StringFilter<"Market"> | string
    isPilot?: BoolFilter<"Market"> | boolean
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    Observation?: ObservationListRelationFilter
    ForecastGate?: ForecastGateListRelationFilter
    Report?: ReportListRelationFilter
  }

  export type MarketOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrderInput | SortOrder
    countryId?: SortOrder
    isPilot?: SortOrder
    country?: CountryOrderByWithRelationInput
    Observation?: ObservationOrderByRelationAggregateInput
    ForecastGate?: ForecastGateOrderByRelationAggregateInput
    Report?: ReportOrderByRelationAggregateInput
  }

  export type MarketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    name?: StringFilter<"Market"> | string
    state?: StringNullableFilter<"Market"> | string | null
    countryId?: StringFilter<"Market"> | string
    isPilot?: BoolFilter<"Market"> | boolean
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    Observation?: ObservationListRelationFilter
    ForecastGate?: ForecastGateListRelationFilter
    Report?: ReportListRelationFilter
  }, "id">

  export type MarketOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrderInput | SortOrder
    countryId?: SortOrder
    isPilot?: SortOrder
    _count?: MarketCountOrderByAggregateInput
    _max?: MarketMaxOrderByAggregateInput
    _min?: MarketMinOrderByAggregateInput
  }

  export type MarketScalarWhereWithAggregatesInput = {
    AND?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    OR?: MarketScalarWhereWithAggregatesInput[]
    NOT?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Market"> | string
    name?: StringWithAggregatesFilter<"Market"> | string
    state?: StringNullableWithAggregatesFilter<"Market"> | string | null
    countryId?: StringWithAggregatesFilter<"Market"> | string
    isPilot?: BoolWithAggregatesFilter<"Market"> | boolean
  }

  export type CommodityWhereInput = {
    AND?: CommodityWhereInput | CommodityWhereInput[]
    OR?: CommodityWhereInput[]
    NOT?: CommodityWhereInput | CommodityWhereInput[]
    id?: StringFilter<"Commodity"> | string
    slug?: StringFilter<"Commodity"> | string
    name?: StringFilter<"Commodity"> | string
    Unit?: UnitListRelationFilter
    Observation?: ObservationListRelationFilter
    ForecastGate?: ForecastGateListRelationFilter
  }

  export type CommodityOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    Unit?: UnitOrderByRelationAggregateInput
    Observation?: ObservationOrderByRelationAggregateInput
    ForecastGate?: ForecastGateOrderByRelationAggregateInput
  }

  export type CommodityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CommodityWhereInput | CommodityWhereInput[]
    OR?: CommodityWhereInput[]
    NOT?: CommodityWhereInput | CommodityWhereInput[]
    name?: StringFilter<"Commodity"> | string
    Unit?: UnitListRelationFilter
    Observation?: ObservationListRelationFilter
    ForecastGate?: ForecastGateListRelationFilter
  }, "id" | "slug">

  export type CommodityOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    _count?: CommodityCountOrderByAggregateInput
    _max?: CommodityMaxOrderByAggregateInput
    _min?: CommodityMinOrderByAggregateInput
  }

  export type CommodityScalarWhereWithAggregatesInput = {
    AND?: CommodityScalarWhereWithAggregatesInput | CommodityScalarWhereWithAggregatesInput[]
    OR?: CommodityScalarWhereWithAggregatesInput[]
    NOT?: CommodityScalarWhereWithAggregatesInput | CommodityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Commodity"> | string
    slug?: StringWithAggregatesFilter<"Commodity"> | string
    name?: StringWithAggregatesFilter<"Commodity"> | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    commodityId?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    aliases?: StringFilter<"Unit"> | string
    kgEquivalent?: FloatNullableFilter<"Unit"> | number | null
    kgBasisNote?: StringNullableFilter<"Unit"> | string | null
    status?: StringFilter<"Unit"> | string
    countryId?: StringNullableFilter<"Unit"> | string | null
    commodity?: XOR<CommodityScalarRelationFilter, CommodityWhereInput>
    Observations?: ObservationListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    commodityId?: SortOrder
    name?: SortOrder
    aliases?: SortOrder
    kgEquivalent?: SortOrderInput | SortOrder
    kgBasisNote?: SortOrderInput | SortOrder
    status?: SortOrder
    countryId?: SortOrderInput | SortOrder
    commodity?: CommodityOrderByWithRelationInput
    Observations?: ObservationOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    commodityId?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    aliases?: StringFilter<"Unit"> | string
    kgEquivalent?: FloatNullableFilter<"Unit"> | number | null
    kgBasisNote?: StringNullableFilter<"Unit"> | string | null
    status?: StringFilter<"Unit"> | string
    countryId?: StringNullableFilter<"Unit"> | string | null
    commodity?: XOR<CommodityScalarRelationFilter, CommodityWhereInput>
    Observations?: ObservationListRelationFilter
  }, "id">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    commodityId?: SortOrder
    name?: SortOrder
    aliases?: SortOrder
    kgEquivalent?: SortOrderInput | SortOrder
    kgBasisNote?: SortOrderInput | SortOrder
    status?: SortOrder
    countryId?: SortOrderInput | SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    commodityId?: StringWithAggregatesFilter<"Unit"> | string
    name?: StringWithAggregatesFilter<"Unit"> | string
    aliases?: StringWithAggregatesFilter<"Unit"> | string
    kgEquivalent?: FloatNullableWithAggregatesFilter<"Unit"> | number | null
    kgBasisNote?: StringNullableWithAggregatesFilter<"Unit"> | string | null
    status?: StringWithAggregatesFilter<"Unit"> | string
    countryId?: StringNullableWithAggregatesFilter<"Unit"> | string | null
  }

  export type SourceWhereInput = {
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    id?: StringFilter<"Source"> | string
    name?: StringFilter<"Source"> | string
    owner?: StringNullableFilter<"Source"> | string | null
    url?: StringNullableFilter<"Source"> | string | null
    licence?: StringNullableFilter<"Source"> | string | null
    frequency?: StringNullableFilter<"Source"> | string | null
    validationStatus?: StringFilter<"Source"> | string
    attributionText?: StringNullableFilter<"Source"> | string | null
    Observation?: ObservationListRelationFilter
  }

  export type SourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    licence?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    validationStatus?: SortOrder
    attributionText?: SortOrderInput | SortOrder
    Observation?: ObservationOrderByRelationAggregateInput
  }

  export type SourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    name?: StringFilter<"Source"> | string
    owner?: StringNullableFilter<"Source"> | string | null
    url?: StringNullableFilter<"Source"> | string | null
    licence?: StringNullableFilter<"Source"> | string | null
    frequency?: StringNullableFilter<"Source"> | string | null
    validationStatus?: StringFilter<"Source"> | string
    attributionText?: StringNullableFilter<"Source"> | string | null
    Observation?: ObservationListRelationFilter
  }, "id">

  export type SourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    licence?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    validationStatus?: SortOrder
    attributionText?: SortOrderInput | SortOrder
    _count?: SourceCountOrderByAggregateInput
    _max?: SourceMaxOrderByAggregateInput
    _min?: SourceMinOrderByAggregateInput
  }

  export type SourceScalarWhereWithAggregatesInput = {
    AND?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    OR?: SourceScalarWhereWithAggregatesInput[]
    NOT?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Source"> | string
    name?: StringWithAggregatesFilter<"Source"> | string
    owner?: StringNullableWithAggregatesFilter<"Source"> | string | null
    url?: StringNullableWithAggregatesFilter<"Source"> | string | null
    licence?: StringNullableWithAggregatesFilter<"Source"> | string | null
    frequency?: StringNullableWithAggregatesFilter<"Source"> | string | null
    validationStatus?: StringWithAggregatesFilter<"Source"> | string
    attributionText?: StringNullableWithAggregatesFilter<"Source"> | string | null
  }

  export type ObservationWhereInput = {
    AND?: ObservationWhereInput | ObservationWhereInput[]
    OR?: ObservationWhereInput[]
    NOT?: ObservationWhereInput | ObservationWhereInput[]
    id?: StringFilter<"Observation"> | string
    commodityId?: StringFilter<"Observation"> | string
    marketId?: StringFilter<"Observation"> | string
    sourceId?: StringFilter<"Observation"> | string
    priceMinor?: IntFilter<"Observation"> | number
    currencyCode?: StringFilter<"Observation"> | string
    unitId?: StringFilter<"Observation"> | string
    priceType?: StringFilter<"Observation"> | string
    observedAt?: DateTimeFilter<"Observation"> | Date | string
    ingestedAt?: DateTimeFilter<"Observation"> | Date | string
    trustLabel?: StringFilter<"Observation"> | string
    pricePerKgMinor?: IntNullableFilter<"Observation"> | number | null
    normalisationMethod?: StringNullableFilter<"Observation"> | string | null
    supersedesId?: StringNullableFilter<"Observation"> | string | null
    isCurrent?: BoolFilter<"Observation"> | boolean
    commodity?: XOR<CommodityScalarRelationFilter, CommodityWhereInput>
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
    source?: XOR<SourceScalarRelationFilter, SourceWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }

  export type ObservationOrderByWithRelationInput = {
    id?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    sourceId?: SortOrder
    priceMinor?: SortOrder
    currencyCode?: SortOrder
    unitId?: SortOrder
    priceType?: SortOrder
    observedAt?: SortOrder
    ingestedAt?: SortOrder
    trustLabel?: SortOrder
    pricePerKgMinor?: SortOrderInput | SortOrder
    normalisationMethod?: SortOrderInput | SortOrder
    supersedesId?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    commodity?: CommodityOrderByWithRelationInput
    market?: MarketOrderByWithRelationInput
    source?: SourceOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
  }

  export type ObservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObservationWhereInput | ObservationWhereInput[]
    OR?: ObservationWhereInput[]
    NOT?: ObservationWhereInput | ObservationWhereInput[]
    commodityId?: StringFilter<"Observation"> | string
    marketId?: StringFilter<"Observation"> | string
    sourceId?: StringFilter<"Observation"> | string
    priceMinor?: IntFilter<"Observation"> | number
    currencyCode?: StringFilter<"Observation"> | string
    unitId?: StringFilter<"Observation"> | string
    priceType?: StringFilter<"Observation"> | string
    observedAt?: DateTimeFilter<"Observation"> | Date | string
    ingestedAt?: DateTimeFilter<"Observation"> | Date | string
    trustLabel?: StringFilter<"Observation"> | string
    pricePerKgMinor?: IntNullableFilter<"Observation"> | number | null
    normalisationMethod?: StringNullableFilter<"Observation"> | string | null
    supersedesId?: StringNullableFilter<"Observation"> | string | null
    isCurrent?: BoolFilter<"Observation"> | boolean
    commodity?: XOR<CommodityScalarRelationFilter, CommodityWhereInput>
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
    source?: XOR<SourceScalarRelationFilter, SourceWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }, "id">

  export type ObservationOrderByWithAggregationInput = {
    id?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    sourceId?: SortOrder
    priceMinor?: SortOrder
    currencyCode?: SortOrder
    unitId?: SortOrder
    priceType?: SortOrder
    observedAt?: SortOrder
    ingestedAt?: SortOrder
    trustLabel?: SortOrder
    pricePerKgMinor?: SortOrderInput | SortOrder
    normalisationMethod?: SortOrderInput | SortOrder
    supersedesId?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    _count?: ObservationCountOrderByAggregateInput
    _avg?: ObservationAvgOrderByAggregateInput
    _max?: ObservationMaxOrderByAggregateInput
    _min?: ObservationMinOrderByAggregateInput
    _sum?: ObservationSumOrderByAggregateInput
  }

  export type ObservationScalarWhereWithAggregatesInput = {
    AND?: ObservationScalarWhereWithAggregatesInput | ObservationScalarWhereWithAggregatesInput[]
    OR?: ObservationScalarWhereWithAggregatesInput[]
    NOT?: ObservationScalarWhereWithAggregatesInput | ObservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Observation"> | string
    commodityId?: StringWithAggregatesFilter<"Observation"> | string
    marketId?: StringWithAggregatesFilter<"Observation"> | string
    sourceId?: StringWithAggregatesFilter<"Observation"> | string
    priceMinor?: IntWithAggregatesFilter<"Observation"> | number
    currencyCode?: StringWithAggregatesFilter<"Observation"> | string
    unitId?: StringWithAggregatesFilter<"Observation"> | string
    priceType?: StringWithAggregatesFilter<"Observation"> | string
    observedAt?: DateTimeWithAggregatesFilter<"Observation"> | Date | string
    ingestedAt?: DateTimeWithAggregatesFilter<"Observation"> | Date | string
    trustLabel?: StringWithAggregatesFilter<"Observation"> | string
    pricePerKgMinor?: IntNullableWithAggregatesFilter<"Observation"> | number | null
    normalisationMethod?: StringNullableWithAggregatesFilter<"Observation"> | string | null
    supersedesId?: StringNullableWithAggregatesFilter<"Observation"> | string | null
    isCurrent?: BoolWithAggregatesFilter<"Observation"> | boolean
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    reporterId?: StringFilter<"Report"> | string
    idempotencyKey?: StringFilter<"Report"> | string
    commodityId?: StringFilter<"Report"> | string
    marketId?: StringFilter<"Report"> | string
    priceMinor?: IntFilter<"Report"> | number
    currencyCode?: StringFilter<"Report"> | string
    unitId?: StringFilter<"Report"> | string
    priceType?: StringFilter<"Report"> | string
    observedAt?: DateTimeFilter<"Report"> | Date | string
    status?: StringFilter<"Report"> | string
    statusReason?: StringNullableFilter<"Report"> | string | null
    channel?: StringFilter<"Report"> | string
    submittedAt?: DateTimeFilter<"Report"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    reporterId?: SortOrder
    idempotencyKey?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    priceMinor?: SortOrder
    currencyCode?: SortOrder
    unitId?: SortOrder
    priceType?: SortOrder
    observedAt?: SortOrder
    status?: SortOrder
    statusReason?: SortOrderInput | SortOrder
    channel?: SortOrder
    submittedAt?: SortOrder
    market?: MarketOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idempotencyKey?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    reporterId?: StringFilter<"Report"> | string
    commodityId?: StringFilter<"Report"> | string
    marketId?: StringFilter<"Report"> | string
    priceMinor?: IntFilter<"Report"> | number
    currencyCode?: StringFilter<"Report"> | string
    unitId?: StringFilter<"Report"> | string
    priceType?: StringFilter<"Report"> | string
    observedAt?: DateTimeFilter<"Report"> | Date | string
    status?: StringFilter<"Report"> | string
    statusReason?: StringNullableFilter<"Report"> | string | null
    channel?: StringFilter<"Report"> | string
    submittedAt?: DateTimeFilter<"Report"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }, "id" | "idempotencyKey">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    reporterId?: SortOrder
    idempotencyKey?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    priceMinor?: SortOrder
    currencyCode?: SortOrder
    unitId?: SortOrder
    priceType?: SortOrder
    observedAt?: SortOrder
    status?: SortOrder
    statusReason?: SortOrderInput | SortOrder
    channel?: SortOrder
    submittedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    reporterId?: StringWithAggregatesFilter<"Report"> | string
    idempotencyKey?: StringWithAggregatesFilter<"Report"> | string
    commodityId?: StringWithAggregatesFilter<"Report"> | string
    marketId?: StringWithAggregatesFilter<"Report"> | string
    priceMinor?: IntWithAggregatesFilter<"Report"> | number
    currencyCode?: StringWithAggregatesFilter<"Report"> | string
    unitId?: StringWithAggregatesFilter<"Report"> | string
    priceType?: StringWithAggregatesFilter<"Report"> | string
    observedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    status?: StringWithAggregatesFilter<"Report"> | string
    statusReason?: StringNullableWithAggregatesFilter<"Report"> | string | null
    channel?: StringWithAggregatesFilter<"Report"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type ConsentRecordWhereInput = {
    AND?: ConsentRecordWhereInput | ConsentRecordWhereInput[]
    OR?: ConsentRecordWhereInput[]
    NOT?: ConsentRecordWhereInput | ConsentRecordWhereInput[]
    id?: StringFilter<"ConsentRecord"> | string
    userId?: StringFilter<"ConsentRecord"> | string
    scope?: StringFilter<"ConsentRecord"> | string
    version?: StringFilter<"ConsentRecord"> | string
    granted?: BoolFilter<"ConsentRecord"> | boolean
    at?: DateTimeFilter<"ConsentRecord"> | Date | string
  }

  export type ConsentRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    scope?: SortOrder
    version?: SortOrder
    granted?: SortOrder
    at?: SortOrder
  }

  export type ConsentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsentRecordWhereInput | ConsentRecordWhereInput[]
    OR?: ConsentRecordWhereInput[]
    NOT?: ConsentRecordWhereInput | ConsentRecordWhereInput[]
    userId?: StringFilter<"ConsentRecord"> | string
    scope?: StringFilter<"ConsentRecord"> | string
    version?: StringFilter<"ConsentRecord"> | string
    granted?: BoolFilter<"ConsentRecord"> | boolean
    at?: DateTimeFilter<"ConsentRecord"> | Date | string
  }, "id">

  export type ConsentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    scope?: SortOrder
    version?: SortOrder
    granted?: SortOrder
    at?: SortOrder
    _count?: ConsentRecordCountOrderByAggregateInput
    _max?: ConsentRecordMaxOrderByAggregateInput
    _min?: ConsentRecordMinOrderByAggregateInput
  }

  export type ConsentRecordScalarWhereWithAggregatesInput = {
    AND?: ConsentRecordScalarWhereWithAggregatesInput | ConsentRecordScalarWhereWithAggregatesInput[]
    OR?: ConsentRecordScalarWhereWithAggregatesInput[]
    NOT?: ConsentRecordScalarWhereWithAggregatesInput | ConsentRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsentRecord"> | string
    userId?: StringWithAggregatesFilter<"ConsentRecord"> | string
    scope?: StringWithAggregatesFilter<"ConsentRecord"> | string
    version?: StringWithAggregatesFilter<"ConsentRecord"> | string
    granted?: BoolWithAggregatesFilter<"ConsentRecord"> | boolean
    at?: DateTimeWithAggregatesFilter<"ConsentRecord"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    at?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    at?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    at?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    at?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    at?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type AssistantMessageWhereInput = {
    AND?: AssistantMessageWhereInput | AssistantMessageWhereInput[]
    OR?: AssistantMessageWhereInput[]
    NOT?: AssistantMessageWhereInput | AssistantMessageWhereInput[]
    id?: StringFilter<"AssistantMessage"> | string
    conversationId?: StringFilter<"AssistantMessage"> | string
    role?: StringFilter<"AssistantMessage"> | string
    content?: StringFilter<"AssistantMessage"> | string
    toolCalls?: StringNullableFilter<"AssistantMessage"> | string | null
    verifierOutcome?: StringNullableFilter<"AssistantMessage"> | string | null
    feedback?: StringNullableFilter<"AssistantMessage"> | string | null
    createdAt?: DateTimeFilter<"AssistantMessage"> | Date | string
  }

  export type AssistantMessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    toolCalls?: SortOrderInput | SortOrder
    verifierOutcome?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AssistantMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssistantMessageWhereInput | AssistantMessageWhereInput[]
    OR?: AssistantMessageWhereInput[]
    NOT?: AssistantMessageWhereInput | AssistantMessageWhereInput[]
    conversationId?: StringFilter<"AssistantMessage"> | string
    role?: StringFilter<"AssistantMessage"> | string
    content?: StringFilter<"AssistantMessage"> | string
    toolCalls?: StringNullableFilter<"AssistantMessage"> | string | null
    verifierOutcome?: StringNullableFilter<"AssistantMessage"> | string | null
    feedback?: StringNullableFilter<"AssistantMessage"> | string | null
    createdAt?: DateTimeFilter<"AssistantMessage"> | Date | string
  }, "id">

  export type AssistantMessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    toolCalls?: SortOrderInput | SortOrder
    verifierOutcome?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AssistantMessageCountOrderByAggregateInput
    _max?: AssistantMessageMaxOrderByAggregateInput
    _min?: AssistantMessageMinOrderByAggregateInput
  }

  export type AssistantMessageScalarWhereWithAggregatesInput = {
    AND?: AssistantMessageScalarWhereWithAggregatesInput | AssistantMessageScalarWhereWithAggregatesInput[]
    OR?: AssistantMessageScalarWhereWithAggregatesInput[]
    NOT?: AssistantMessageScalarWhereWithAggregatesInput | AssistantMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssistantMessage"> | string
    conversationId?: StringWithAggregatesFilter<"AssistantMessage"> | string
    role?: StringWithAggregatesFilter<"AssistantMessage"> | string
    content?: StringWithAggregatesFilter<"AssistantMessage"> | string
    toolCalls?: StringNullableWithAggregatesFilter<"AssistantMessage"> | string | null
    verifierOutcome?: StringNullableWithAggregatesFilter<"AssistantMessage"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"AssistantMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AssistantMessage"> | Date | string
  }

  export type ForecastGateWhereInput = {
    AND?: ForecastGateWhereInput | ForecastGateWhereInput[]
    OR?: ForecastGateWhereInput[]
    NOT?: ForecastGateWhereInput | ForecastGateWhereInput[]
    id?: StringFilter<"ForecastGate"> | string
    commodityId?: StringFilter<"ForecastGate"> | string
    marketId?: StringFilter<"ForecastGate"> | string
    horizonDays?: IntFilter<"ForecastGate"> | number
    status?: StringFilter<"ForecastGate"> | string
    reason?: StringNullableFilter<"ForecastGate"> | string | null
    decidedBy?: StringNullableFilter<"ForecastGate"> | string | null
    decidedAt?: DateTimeNullableFilter<"ForecastGate"> | Date | string | null
    backtestMape?: FloatNullableFilter<"ForecastGate"> | number | null
    commodity?: XOR<CommodityScalarRelationFilter, CommodityWhereInput>
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }

  export type ForecastGateOrderByWithRelationInput = {
    id?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    horizonDays?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    decidedBy?: SortOrderInput | SortOrder
    decidedAt?: SortOrderInput | SortOrder
    backtestMape?: SortOrderInput | SortOrder
    commodity?: CommodityOrderByWithRelationInput
    market?: MarketOrderByWithRelationInput
  }

  export type ForecastGateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    commodityId_marketId_horizonDays?: ForecastGateCommodityIdMarketIdHorizonDaysCompoundUniqueInput
    AND?: ForecastGateWhereInput | ForecastGateWhereInput[]
    OR?: ForecastGateWhereInput[]
    NOT?: ForecastGateWhereInput | ForecastGateWhereInput[]
    commodityId?: StringFilter<"ForecastGate"> | string
    marketId?: StringFilter<"ForecastGate"> | string
    horizonDays?: IntFilter<"ForecastGate"> | number
    status?: StringFilter<"ForecastGate"> | string
    reason?: StringNullableFilter<"ForecastGate"> | string | null
    decidedBy?: StringNullableFilter<"ForecastGate"> | string | null
    decidedAt?: DateTimeNullableFilter<"ForecastGate"> | Date | string | null
    backtestMape?: FloatNullableFilter<"ForecastGate"> | number | null
    commodity?: XOR<CommodityScalarRelationFilter, CommodityWhereInput>
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }, "id" | "commodityId_marketId_horizonDays">

  export type ForecastGateOrderByWithAggregationInput = {
    id?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    horizonDays?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    decidedBy?: SortOrderInput | SortOrder
    decidedAt?: SortOrderInput | SortOrder
    backtestMape?: SortOrderInput | SortOrder
    _count?: ForecastGateCountOrderByAggregateInput
    _avg?: ForecastGateAvgOrderByAggregateInput
    _max?: ForecastGateMaxOrderByAggregateInput
    _min?: ForecastGateMinOrderByAggregateInput
    _sum?: ForecastGateSumOrderByAggregateInput
  }

  export type ForecastGateScalarWhereWithAggregatesInput = {
    AND?: ForecastGateScalarWhereWithAggregatesInput | ForecastGateScalarWhereWithAggregatesInput[]
    OR?: ForecastGateScalarWhereWithAggregatesInput[]
    NOT?: ForecastGateScalarWhereWithAggregatesInput | ForecastGateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForecastGate"> | string
    commodityId?: StringWithAggregatesFilter<"ForecastGate"> | string
    marketId?: StringWithAggregatesFilter<"ForecastGate"> | string
    horizonDays?: IntWithAggregatesFilter<"ForecastGate"> | number
    status?: StringWithAggregatesFilter<"ForecastGate"> | string
    reason?: StringNullableWithAggregatesFilter<"ForecastGate"> | string | null
    decidedBy?: StringNullableWithAggregatesFilter<"ForecastGate"> | string | null
    decidedAt?: DateTimeNullableWithAggregatesFilter<"ForecastGate"> | Date | string | null
    backtestMape?: FloatNullableWithAggregatesFilter<"ForecastGate"> | number | null
  }

  export type JobRunWhereInput = {
    AND?: JobRunWhereInput | JobRunWhereInput[]
    OR?: JobRunWhereInput[]
    NOT?: JobRunWhereInput | JobRunWhereInput[]
    id?: StringFilter<"JobRun"> | string
    name?: StringFilter<"JobRun"> | string
    startedAt?: DateTimeFilter<"JobRun"> | Date | string
    endedAt?: DateTimeNullableFilter<"JobRun"> | Date | string | null
    status?: StringFilter<"JobRun"> | string
    detail?: StringNullableFilter<"JobRun"> | string | null
  }

  export type JobRunOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    detail?: SortOrderInput | SortOrder
  }

  export type JobRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobRunWhereInput | JobRunWhereInput[]
    OR?: JobRunWhereInput[]
    NOT?: JobRunWhereInput | JobRunWhereInput[]
    name?: StringFilter<"JobRun"> | string
    startedAt?: DateTimeFilter<"JobRun"> | Date | string
    endedAt?: DateTimeNullableFilter<"JobRun"> | Date | string | null
    status?: StringFilter<"JobRun"> | string
    detail?: StringNullableFilter<"JobRun"> | string | null
  }, "id">

  export type JobRunOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    detail?: SortOrderInput | SortOrder
    _count?: JobRunCountOrderByAggregateInput
    _max?: JobRunMaxOrderByAggregateInput
    _min?: JobRunMinOrderByAggregateInput
  }

  export type JobRunScalarWhereWithAggregatesInput = {
    AND?: JobRunScalarWhereWithAggregatesInput | JobRunScalarWhereWithAggregatesInput[]
    OR?: JobRunScalarWhereWithAggregatesInput[]
    NOT?: JobRunScalarWhereWithAggregatesInput | JobRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobRun"> | string
    name?: StringWithAggregatesFilter<"JobRun"> | string
    startedAt?: DateTimeWithAggregatesFilter<"JobRun"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"JobRun"> | Date | string | null
    status?: StringWithAggregatesFilter<"JobRun"> | string
    detail?: StringNullableWithAggregatesFilter<"JobRun"> | string | null
  }

  export type CountryCreateInput = {
    id: string
    code: string
    name: string
    currencyCode: string
    timezone: string
    privacyRegime?: string | null
    Market?: MarketCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id: string
    code: string
    name: string
    currencyCode: string
    timezone: string
    privacyRegime?: string | null
    Market?: MarketUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    privacyRegime?: NullableStringFieldUpdateOperationsInput | string | null
    Market?: MarketUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    privacyRegime?: NullableStringFieldUpdateOperationsInput | string | null
    Market?: MarketUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id: string
    code: string
    name: string
    currencyCode: string
    timezone: string
    privacyRegime?: string | null
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    privacyRegime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    privacyRegime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketCreateInput = {
    id: string
    name: string
    state?: string | null
    isPilot?: boolean
    country: CountryCreateNestedOneWithoutMarketInput
    Observation?: ObservationCreateNestedManyWithoutMarketInput
    ForecastGate?: ForecastGateCreateNestedManyWithoutMarketInput
    Report?: ReportCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateInput = {
    id: string
    name: string
    state?: string | null
    countryId: string
    isPilot?: boolean
    Observation?: ObservationUncheckedCreateNestedManyWithoutMarketInput
    ForecastGate?: ForecastGateUncheckedCreateNestedManyWithoutMarketInput
    Report?: ReportUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPilot?: BoolFieldUpdateOperationsInput | boolean
    country?: CountryUpdateOneRequiredWithoutMarketNestedInput
    Observation?: ObservationUpdateManyWithoutMarketNestedInput
    ForecastGate?: ForecastGateUpdateManyWithoutMarketNestedInput
    Report?: ReportUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    isPilot?: BoolFieldUpdateOperationsInput | boolean
    Observation?: ObservationUncheckedUpdateManyWithoutMarketNestedInput
    ForecastGate?: ForecastGateUncheckedUpdateManyWithoutMarketNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketCreateManyInput = {
    id: string
    name: string
    state?: string | null
    countryId: string
    isPilot?: boolean
  }

  export type MarketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPilot?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MarketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    isPilot?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommodityCreateInput = {
    id: string
    slug: string
    name: string
    Unit?: UnitCreateNestedManyWithoutCommodityInput
    Observation?: ObservationCreateNestedManyWithoutCommodityInput
    ForecastGate?: ForecastGateCreateNestedManyWithoutCommodityInput
  }

  export type CommodityUncheckedCreateInput = {
    id: string
    slug: string
    name: string
    Unit?: UnitUncheckedCreateNestedManyWithoutCommodityInput
    Observation?: ObservationUncheckedCreateNestedManyWithoutCommodityInput
    ForecastGate?: ForecastGateUncheckedCreateNestedManyWithoutCommodityInput
  }

  export type CommodityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Unit?: UnitUpdateManyWithoutCommodityNestedInput
    Observation?: ObservationUpdateManyWithoutCommodityNestedInput
    ForecastGate?: ForecastGateUpdateManyWithoutCommodityNestedInput
  }

  export type CommodityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Unit?: UnitUncheckedUpdateManyWithoutCommodityNestedInput
    Observation?: ObservationUncheckedUpdateManyWithoutCommodityNestedInput
    ForecastGate?: ForecastGateUncheckedUpdateManyWithoutCommodityNestedInput
  }

  export type CommodityCreateManyInput = {
    id: string
    slug: string
    name: string
  }

  export type CommodityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CommodityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UnitCreateInput = {
    id: string
    name: string
    aliases: string
    kgEquivalent?: number | null
    kgBasisNote?: string | null
    status: string
    countryId?: string | null
    commodity: CommodityCreateNestedOneWithoutUnitInput
    Observations?: ObservationCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id: string
    commodityId: string
    name: string
    aliases: string
    kgEquivalent?: number | null
    kgBasisNote?: string | null
    status: string
    countryId?: string | null
    Observations?: ObservationUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aliases?: StringFieldUpdateOperationsInput | string
    kgEquivalent?: NullableFloatFieldUpdateOperationsInput | number | null
    kgBasisNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    commodity?: CommodityUpdateOneRequiredWithoutUnitNestedInput
    Observations?: ObservationUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aliases?: StringFieldUpdateOperationsInput | string
    kgEquivalent?: NullableFloatFieldUpdateOperationsInput | number | null
    kgBasisNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: ObservationUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id: string
    commodityId: string
    name: string
    aliases: string
    kgEquivalent?: number | null
    kgBasisNote?: string | null
    status: string
    countryId?: string | null
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aliases?: StringFieldUpdateOperationsInput | string
    kgEquivalent?: NullableFloatFieldUpdateOperationsInput | number | null
    kgBasisNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aliases?: StringFieldUpdateOperationsInput | string
    kgEquivalent?: NullableFloatFieldUpdateOperationsInput | number | null
    kgBasisNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SourceCreateInput = {
    id: string
    name: string
    owner?: string | null
    url?: string | null
    licence?: string | null
    frequency?: string | null
    validationStatus: string
    attributionText?: string | null
    Observation?: ObservationCreateNestedManyWithoutSourceInput
  }

  export type SourceUncheckedCreateInput = {
    id: string
    name: string
    owner?: string | null
    url?: string | null
    licence?: string | null
    frequency?: string | null
    validationStatus: string
    attributionText?: string | null
    Observation?: ObservationUncheckedCreateNestedManyWithoutSourceInput
  }

  export type SourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    licence?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    attributionText?: NullableStringFieldUpdateOperationsInput | string | null
    Observation?: ObservationUpdateManyWithoutSourceNestedInput
  }

  export type SourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    licence?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    attributionText?: NullableStringFieldUpdateOperationsInput | string | null
    Observation?: ObservationUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type SourceCreateManyInput = {
    id: string
    name: string
    owner?: string | null
    url?: string | null
    licence?: string | null
    frequency?: string | null
    validationStatus: string
    attributionText?: string | null
  }

  export type SourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    licence?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    attributionText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    licence?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    attributionText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObservationCreateInput = {
    id: string
    priceMinor: number
    currencyCode: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
    commodity: CommodityCreateNestedOneWithoutObservationInput
    market: MarketCreateNestedOneWithoutObservationInput
    source: SourceCreateNestedOneWithoutObservationInput
    unit: UnitCreateNestedOneWithoutObservationsInput
  }

  export type ObservationUncheckedCreateInput = {
    id: string
    commodityId: string
    marketId: string
    sourceId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
  }

  export type ObservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    commodity?: CommodityUpdateOneRequiredWithoutObservationNestedInput
    market?: MarketUpdateOneRequiredWithoutObservationNestedInput
    source?: SourceUpdateOneRequiredWithoutObservationNestedInput
    unit?: UnitUpdateOneRequiredWithoutObservationsNestedInput
  }

  export type ObservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationCreateManyInput = {
    id: string
    commodityId: string
    marketId: string
    sourceId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
  }

  export type ObservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReportCreateInput = {
    id: string
    reporterId: string
    idempotencyKey: string
    commodityId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    status: string
    statusReason?: string | null
    channel: string
    submittedAt?: Date | string
    market: MarketCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id: string
    reporterId: string
    idempotencyKey: string
    commodityId: string
    marketId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    status: string
    statusReason?: string | null
    channel: string
    submittedAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id: string
    reporterId: string
    idempotencyKey: string
    commodityId: string
    marketId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    status: string
    statusReason?: string | null
    channel: string
    submittedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentRecordCreateInput = {
    id: string
    userId: string
    scope: string
    version: string
    granted: boolean
    at?: Date | string
  }

  export type ConsentRecordUncheckedCreateInput = {
    id: string
    userId: string
    scope: string
    version: string
    granted: boolean
    at?: Date | string
  }

  export type ConsentRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    granted?: BoolFieldUpdateOperationsInput | boolean
    at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    granted?: BoolFieldUpdateOperationsInput | boolean
    at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentRecordCreateManyInput = {
    id: string
    userId: string
    scope: string
    version: string
    granted: boolean
    at?: Date | string
  }

  export type ConsentRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    granted?: BoolFieldUpdateOperationsInput | boolean
    at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    granted?: BoolFieldUpdateOperationsInput | boolean
    at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id: string
    actorId?: string | null
    action: string
    entity: string
    entityId?: string | null
    at?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id: string
    actorId?: string | null
    action: string
    entity: string
    entityId?: string | null
    at?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id: string
    actorId?: string | null
    action: string
    entity: string
    entityId?: string | null
    at?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistantMessageCreateInput = {
    id: string
    conversationId: string
    role: string
    content: string
    toolCalls?: string | null
    verifierOutcome?: string | null
    feedback?: string | null
    createdAt?: Date | string
  }

  export type AssistantMessageUncheckedCreateInput = {
    id: string
    conversationId: string
    role: string
    content: string
    toolCalls?: string | null
    verifierOutcome?: string | null
    feedback?: string | null
    createdAt?: Date | string
  }

  export type AssistantMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    toolCalls?: NullableStringFieldUpdateOperationsInput | string | null
    verifierOutcome?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistantMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    toolCalls?: NullableStringFieldUpdateOperationsInput | string | null
    verifierOutcome?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistantMessageCreateManyInput = {
    id: string
    conversationId: string
    role: string
    content: string
    toolCalls?: string | null
    verifierOutcome?: string | null
    feedback?: string | null
    createdAt?: Date | string
  }

  export type AssistantMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    toolCalls?: NullableStringFieldUpdateOperationsInput | string | null
    verifierOutcome?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistantMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    toolCalls?: NullableStringFieldUpdateOperationsInput | string | null
    verifierOutcome?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForecastGateCreateInput = {
    id: string
    horizonDays: number
    status: string
    reason?: string | null
    decidedBy?: string | null
    decidedAt?: Date | string | null
    backtestMape?: number | null
    commodity: CommodityCreateNestedOneWithoutForecastGateInput
    market: MarketCreateNestedOneWithoutForecastGateInput
  }

  export type ForecastGateUncheckedCreateInput = {
    id: string
    commodityId: string
    marketId: string
    horizonDays: number
    status: string
    reason?: string | null
    decidedBy?: string | null
    decidedAt?: Date | string | null
    backtestMape?: number | null
  }

  export type ForecastGateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horizonDays?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backtestMape?: NullableFloatFieldUpdateOperationsInput | number | null
    commodity?: CommodityUpdateOneRequiredWithoutForecastGateNestedInput
    market?: MarketUpdateOneRequiredWithoutForecastGateNestedInput
  }

  export type ForecastGateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    horizonDays?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backtestMape?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ForecastGateCreateManyInput = {
    id: string
    commodityId: string
    marketId: string
    horizonDays: number
    status: string
    reason?: string | null
    decidedBy?: string | null
    decidedAt?: Date | string | null
    backtestMape?: number | null
  }

  export type ForecastGateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    horizonDays?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backtestMape?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ForecastGateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    horizonDays?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backtestMape?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type JobRunCreateInput = {
    id: string
    name: string
    startedAt: Date | string
    endedAt?: Date | string | null
    status: string
    detail?: string | null
  }

  export type JobRunUncheckedCreateInput = {
    id: string
    name: string
    startedAt: Date | string
    endedAt?: Date | string | null
    status: string
    detail?: string | null
  }

  export type JobRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobRunCreateManyInput = {
    id: string
    name: string
    startedAt: Date | string
    endedAt?: Date | string | null
    status: string
    detail?: string | null
  }

  export type JobRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MarketListRelationFilter = {
    every?: MarketWhereInput
    some?: MarketWhereInput
    none?: MarketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MarketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    currencyCode?: SortOrder
    timezone?: SortOrder
    privacyRegime?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    currencyCode?: SortOrder
    timezone?: SortOrder
    privacyRegime?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    currencyCode?: SortOrder
    timezone?: SortOrder
    privacyRegime?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type ObservationListRelationFilter = {
    every?: ObservationWhereInput
    some?: ObservationWhereInput
    none?: ObservationWhereInput
  }

  export type ForecastGateListRelationFilter = {
    every?: ForecastGateWhereInput
    some?: ForecastGateWhereInput
    none?: ForecastGateWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type ObservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForecastGateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    countryId?: SortOrder
    isPilot?: SortOrder
  }

  export type MarketMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    countryId?: SortOrder
    isPilot?: SortOrder
  }

  export type MarketMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    countryId?: SortOrder
    isPilot?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommodityCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
  }

  export type CommodityMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
  }

  export type CommodityMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CommodityScalarRelationFilter = {
    is?: CommodityWhereInput
    isNot?: CommodityWhereInput
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    commodityId?: SortOrder
    name?: SortOrder
    aliases?: SortOrder
    kgEquivalent?: SortOrder
    kgBasisNote?: SortOrder
    status?: SortOrder
    countryId?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    kgEquivalent?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    commodityId?: SortOrder
    name?: SortOrder
    aliases?: SortOrder
    kgEquivalent?: SortOrder
    kgBasisNote?: SortOrder
    status?: SortOrder
    countryId?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    commodityId?: SortOrder
    name?: SortOrder
    aliases?: SortOrder
    kgEquivalent?: SortOrder
    kgBasisNote?: SortOrder
    status?: SortOrder
    countryId?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    kgEquivalent?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    url?: SortOrder
    licence?: SortOrder
    frequency?: SortOrder
    validationStatus?: SortOrder
    attributionText?: SortOrder
  }

  export type SourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    url?: SortOrder
    licence?: SortOrder
    frequency?: SortOrder
    validationStatus?: SortOrder
    attributionText?: SortOrder
  }

  export type SourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    url?: SortOrder
    licence?: SortOrder
    frequency?: SortOrder
    validationStatus?: SortOrder
    attributionText?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MarketScalarRelationFilter = {
    is?: MarketWhereInput
    isNot?: MarketWhereInput
  }

  export type SourceScalarRelationFilter = {
    is?: SourceWhereInput
    isNot?: SourceWhereInput
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type ObservationCountOrderByAggregateInput = {
    id?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    sourceId?: SortOrder
    priceMinor?: SortOrder
    currencyCode?: SortOrder
    unitId?: SortOrder
    priceType?: SortOrder
    observedAt?: SortOrder
    ingestedAt?: SortOrder
    trustLabel?: SortOrder
    pricePerKgMinor?: SortOrder
    normalisationMethod?: SortOrder
    supersedesId?: SortOrder
    isCurrent?: SortOrder
  }

  export type ObservationAvgOrderByAggregateInput = {
    priceMinor?: SortOrder
    pricePerKgMinor?: SortOrder
  }

  export type ObservationMaxOrderByAggregateInput = {
    id?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    sourceId?: SortOrder
    priceMinor?: SortOrder
    currencyCode?: SortOrder
    unitId?: SortOrder
    priceType?: SortOrder
    observedAt?: SortOrder
    ingestedAt?: SortOrder
    trustLabel?: SortOrder
    pricePerKgMinor?: SortOrder
    normalisationMethod?: SortOrder
    supersedesId?: SortOrder
    isCurrent?: SortOrder
  }

  export type ObservationMinOrderByAggregateInput = {
    id?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    sourceId?: SortOrder
    priceMinor?: SortOrder
    currencyCode?: SortOrder
    unitId?: SortOrder
    priceType?: SortOrder
    observedAt?: SortOrder
    ingestedAt?: SortOrder
    trustLabel?: SortOrder
    pricePerKgMinor?: SortOrder
    normalisationMethod?: SortOrder
    supersedesId?: SortOrder
    isCurrent?: SortOrder
  }

  export type ObservationSumOrderByAggregateInput = {
    priceMinor?: SortOrder
    pricePerKgMinor?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    reporterId?: SortOrder
    idempotencyKey?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    priceMinor?: SortOrder
    currencyCode?: SortOrder
    unitId?: SortOrder
    priceType?: SortOrder
    observedAt?: SortOrder
    status?: SortOrder
    statusReason?: SortOrder
    channel?: SortOrder
    submittedAt?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    priceMinor?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    reporterId?: SortOrder
    idempotencyKey?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    priceMinor?: SortOrder
    currencyCode?: SortOrder
    unitId?: SortOrder
    priceType?: SortOrder
    observedAt?: SortOrder
    status?: SortOrder
    statusReason?: SortOrder
    channel?: SortOrder
    submittedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    reporterId?: SortOrder
    idempotencyKey?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    priceMinor?: SortOrder
    currencyCode?: SortOrder
    unitId?: SortOrder
    priceType?: SortOrder
    observedAt?: SortOrder
    status?: SortOrder
    statusReason?: SortOrder
    channel?: SortOrder
    submittedAt?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    priceMinor?: SortOrder
  }

  export type ConsentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scope?: SortOrder
    version?: SortOrder
    granted?: SortOrder
    at?: SortOrder
  }

  export type ConsentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scope?: SortOrder
    version?: SortOrder
    granted?: SortOrder
    at?: SortOrder
  }

  export type ConsentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scope?: SortOrder
    version?: SortOrder
    granted?: SortOrder
    at?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    at?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    at?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    at?: SortOrder
  }

  export type AssistantMessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    toolCalls?: SortOrder
    verifierOutcome?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type AssistantMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    toolCalls?: SortOrder
    verifierOutcome?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type AssistantMessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    toolCalls?: SortOrder
    verifierOutcome?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ForecastGateCommodityIdMarketIdHorizonDaysCompoundUniqueInput = {
    commodityId: string
    marketId: string
    horizonDays: number
  }

  export type ForecastGateCountOrderByAggregateInput = {
    id?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    horizonDays?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    decidedBy?: SortOrder
    decidedAt?: SortOrder
    backtestMape?: SortOrder
  }

  export type ForecastGateAvgOrderByAggregateInput = {
    horizonDays?: SortOrder
    backtestMape?: SortOrder
  }

  export type ForecastGateMaxOrderByAggregateInput = {
    id?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    horizonDays?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    decidedBy?: SortOrder
    decidedAt?: SortOrder
    backtestMape?: SortOrder
  }

  export type ForecastGateMinOrderByAggregateInput = {
    id?: SortOrder
    commodityId?: SortOrder
    marketId?: SortOrder
    horizonDays?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    decidedBy?: SortOrder
    decidedAt?: SortOrder
    backtestMape?: SortOrder
  }

  export type ForecastGateSumOrderByAggregateInput = {
    horizonDays?: SortOrder
    backtestMape?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type JobRunCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    detail?: SortOrder
  }

  export type JobRunMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    detail?: SortOrder
  }

  export type JobRunMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    detail?: SortOrder
  }

  export type MarketCreateNestedManyWithoutCountryInput = {
    create?: XOR<MarketCreateWithoutCountryInput, MarketUncheckedCreateWithoutCountryInput> | MarketCreateWithoutCountryInput[] | MarketUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutCountryInput | MarketCreateOrConnectWithoutCountryInput[]
    createMany?: MarketCreateManyCountryInputEnvelope
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type MarketUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<MarketCreateWithoutCountryInput, MarketUncheckedCreateWithoutCountryInput> | MarketCreateWithoutCountryInput[] | MarketUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutCountryInput | MarketCreateOrConnectWithoutCountryInput[]
    createMany?: MarketCreateManyCountryInputEnvelope
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MarketUpdateManyWithoutCountryNestedInput = {
    create?: XOR<MarketCreateWithoutCountryInput, MarketUncheckedCreateWithoutCountryInput> | MarketCreateWithoutCountryInput[] | MarketUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutCountryInput | MarketCreateOrConnectWithoutCountryInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutCountryInput | MarketUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: MarketCreateManyCountryInputEnvelope
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutCountryInput | MarketUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutCountryInput | MarketUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type MarketUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<MarketCreateWithoutCountryInput, MarketUncheckedCreateWithoutCountryInput> | MarketCreateWithoutCountryInput[] | MarketUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutCountryInput | MarketCreateOrConnectWithoutCountryInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutCountryInput | MarketUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: MarketCreateManyCountryInputEnvelope
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutCountryInput | MarketUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutCountryInput | MarketUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutMarketInput = {
    create?: XOR<CountryCreateWithoutMarketInput, CountryUncheckedCreateWithoutMarketInput>
    connectOrCreate?: CountryCreateOrConnectWithoutMarketInput
    connect?: CountryWhereUniqueInput
  }

  export type ObservationCreateNestedManyWithoutMarketInput = {
    create?: XOR<ObservationCreateWithoutMarketInput, ObservationUncheckedCreateWithoutMarketInput> | ObservationCreateWithoutMarketInput[] | ObservationUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutMarketInput | ObservationCreateOrConnectWithoutMarketInput[]
    createMany?: ObservationCreateManyMarketInputEnvelope
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
  }

  export type ForecastGateCreateNestedManyWithoutMarketInput = {
    create?: XOR<ForecastGateCreateWithoutMarketInput, ForecastGateUncheckedCreateWithoutMarketInput> | ForecastGateCreateWithoutMarketInput[] | ForecastGateUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ForecastGateCreateOrConnectWithoutMarketInput | ForecastGateCreateOrConnectWithoutMarketInput[]
    createMany?: ForecastGateCreateManyMarketInputEnvelope
    connect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutMarketInput = {
    create?: XOR<ReportCreateWithoutMarketInput, ReportUncheckedCreateWithoutMarketInput> | ReportCreateWithoutMarketInput[] | ReportUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMarketInput | ReportCreateOrConnectWithoutMarketInput[]
    createMany?: ReportCreateManyMarketInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ObservationUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<ObservationCreateWithoutMarketInput, ObservationUncheckedCreateWithoutMarketInput> | ObservationCreateWithoutMarketInput[] | ObservationUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutMarketInput | ObservationCreateOrConnectWithoutMarketInput[]
    createMany?: ObservationCreateManyMarketInputEnvelope
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
  }

  export type ForecastGateUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<ForecastGateCreateWithoutMarketInput, ForecastGateUncheckedCreateWithoutMarketInput> | ForecastGateCreateWithoutMarketInput[] | ForecastGateUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ForecastGateCreateOrConnectWithoutMarketInput | ForecastGateCreateOrConnectWithoutMarketInput[]
    createMany?: ForecastGateCreateManyMarketInputEnvelope
    connect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<ReportCreateWithoutMarketInput, ReportUncheckedCreateWithoutMarketInput> | ReportCreateWithoutMarketInput[] | ReportUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMarketInput | ReportCreateOrConnectWithoutMarketInput[]
    createMany?: ReportCreateManyMarketInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CountryUpdateOneRequiredWithoutMarketNestedInput = {
    create?: XOR<CountryCreateWithoutMarketInput, CountryUncheckedCreateWithoutMarketInput>
    connectOrCreate?: CountryCreateOrConnectWithoutMarketInput
    upsert?: CountryUpsertWithoutMarketInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutMarketInput, CountryUpdateWithoutMarketInput>, CountryUncheckedUpdateWithoutMarketInput>
  }

  export type ObservationUpdateManyWithoutMarketNestedInput = {
    create?: XOR<ObservationCreateWithoutMarketInput, ObservationUncheckedCreateWithoutMarketInput> | ObservationCreateWithoutMarketInput[] | ObservationUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutMarketInput | ObservationCreateOrConnectWithoutMarketInput[]
    upsert?: ObservationUpsertWithWhereUniqueWithoutMarketInput | ObservationUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: ObservationCreateManyMarketInputEnvelope
    set?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    disconnect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    delete?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    update?: ObservationUpdateWithWhereUniqueWithoutMarketInput | ObservationUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: ObservationUpdateManyWithWhereWithoutMarketInput | ObservationUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
  }

  export type ForecastGateUpdateManyWithoutMarketNestedInput = {
    create?: XOR<ForecastGateCreateWithoutMarketInput, ForecastGateUncheckedCreateWithoutMarketInput> | ForecastGateCreateWithoutMarketInput[] | ForecastGateUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ForecastGateCreateOrConnectWithoutMarketInput | ForecastGateCreateOrConnectWithoutMarketInput[]
    upsert?: ForecastGateUpsertWithWhereUniqueWithoutMarketInput | ForecastGateUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: ForecastGateCreateManyMarketInputEnvelope
    set?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    disconnect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    delete?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    connect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    update?: ForecastGateUpdateWithWhereUniqueWithoutMarketInput | ForecastGateUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: ForecastGateUpdateManyWithWhereWithoutMarketInput | ForecastGateUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: ForecastGateScalarWhereInput | ForecastGateScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutMarketNestedInput = {
    create?: XOR<ReportCreateWithoutMarketInput, ReportUncheckedCreateWithoutMarketInput> | ReportCreateWithoutMarketInput[] | ReportUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMarketInput | ReportCreateOrConnectWithoutMarketInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutMarketInput | ReportUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: ReportCreateManyMarketInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutMarketInput | ReportUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutMarketInput | ReportUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ObservationUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<ObservationCreateWithoutMarketInput, ObservationUncheckedCreateWithoutMarketInput> | ObservationCreateWithoutMarketInput[] | ObservationUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutMarketInput | ObservationCreateOrConnectWithoutMarketInput[]
    upsert?: ObservationUpsertWithWhereUniqueWithoutMarketInput | ObservationUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: ObservationCreateManyMarketInputEnvelope
    set?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    disconnect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    delete?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    update?: ObservationUpdateWithWhereUniqueWithoutMarketInput | ObservationUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: ObservationUpdateManyWithWhereWithoutMarketInput | ObservationUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
  }

  export type ForecastGateUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<ForecastGateCreateWithoutMarketInput, ForecastGateUncheckedCreateWithoutMarketInput> | ForecastGateCreateWithoutMarketInput[] | ForecastGateUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ForecastGateCreateOrConnectWithoutMarketInput | ForecastGateCreateOrConnectWithoutMarketInput[]
    upsert?: ForecastGateUpsertWithWhereUniqueWithoutMarketInput | ForecastGateUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: ForecastGateCreateManyMarketInputEnvelope
    set?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    disconnect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    delete?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    connect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    update?: ForecastGateUpdateWithWhereUniqueWithoutMarketInput | ForecastGateUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: ForecastGateUpdateManyWithWhereWithoutMarketInput | ForecastGateUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: ForecastGateScalarWhereInput | ForecastGateScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<ReportCreateWithoutMarketInput, ReportUncheckedCreateWithoutMarketInput> | ReportCreateWithoutMarketInput[] | ReportUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMarketInput | ReportCreateOrConnectWithoutMarketInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutMarketInput | ReportUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: ReportCreateManyMarketInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutMarketInput | ReportUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutMarketInput | ReportUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type UnitCreateNestedManyWithoutCommodityInput = {
    create?: XOR<UnitCreateWithoutCommodityInput, UnitUncheckedCreateWithoutCommodityInput> | UnitCreateWithoutCommodityInput[] | UnitUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutCommodityInput | UnitCreateOrConnectWithoutCommodityInput[]
    createMany?: UnitCreateManyCommodityInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type ObservationCreateNestedManyWithoutCommodityInput = {
    create?: XOR<ObservationCreateWithoutCommodityInput, ObservationUncheckedCreateWithoutCommodityInput> | ObservationCreateWithoutCommodityInput[] | ObservationUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutCommodityInput | ObservationCreateOrConnectWithoutCommodityInput[]
    createMany?: ObservationCreateManyCommodityInputEnvelope
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
  }

  export type ForecastGateCreateNestedManyWithoutCommodityInput = {
    create?: XOR<ForecastGateCreateWithoutCommodityInput, ForecastGateUncheckedCreateWithoutCommodityInput> | ForecastGateCreateWithoutCommodityInput[] | ForecastGateUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: ForecastGateCreateOrConnectWithoutCommodityInput | ForecastGateCreateOrConnectWithoutCommodityInput[]
    createMany?: ForecastGateCreateManyCommodityInputEnvelope
    connect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutCommodityInput = {
    create?: XOR<UnitCreateWithoutCommodityInput, UnitUncheckedCreateWithoutCommodityInput> | UnitCreateWithoutCommodityInput[] | UnitUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutCommodityInput | UnitCreateOrConnectWithoutCommodityInput[]
    createMany?: UnitCreateManyCommodityInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type ObservationUncheckedCreateNestedManyWithoutCommodityInput = {
    create?: XOR<ObservationCreateWithoutCommodityInput, ObservationUncheckedCreateWithoutCommodityInput> | ObservationCreateWithoutCommodityInput[] | ObservationUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutCommodityInput | ObservationCreateOrConnectWithoutCommodityInput[]
    createMany?: ObservationCreateManyCommodityInputEnvelope
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
  }

  export type ForecastGateUncheckedCreateNestedManyWithoutCommodityInput = {
    create?: XOR<ForecastGateCreateWithoutCommodityInput, ForecastGateUncheckedCreateWithoutCommodityInput> | ForecastGateCreateWithoutCommodityInput[] | ForecastGateUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: ForecastGateCreateOrConnectWithoutCommodityInput | ForecastGateCreateOrConnectWithoutCommodityInput[]
    createMany?: ForecastGateCreateManyCommodityInputEnvelope
    connect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
  }

  export type UnitUpdateManyWithoutCommodityNestedInput = {
    create?: XOR<UnitCreateWithoutCommodityInput, UnitUncheckedCreateWithoutCommodityInput> | UnitCreateWithoutCommodityInput[] | UnitUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutCommodityInput | UnitCreateOrConnectWithoutCommodityInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutCommodityInput | UnitUpsertWithWhereUniqueWithoutCommodityInput[]
    createMany?: UnitCreateManyCommodityInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutCommodityInput | UnitUpdateWithWhereUniqueWithoutCommodityInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutCommodityInput | UnitUpdateManyWithWhereWithoutCommodityInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type ObservationUpdateManyWithoutCommodityNestedInput = {
    create?: XOR<ObservationCreateWithoutCommodityInput, ObservationUncheckedCreateWithoutCommodityInput> | ObservationCreateWithoutCommodityInput[] | ObservationUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutCommodityInput | ObservationCreateOrConnectWithoutCommodityInput[]
    upsert?: ObservationUpsertWithWhereUniqueWithoutCommodityInput | ObservationUpsertWithWhereUniqueWithoutCommodityInput[]
    createMany?: ObservationCreateManyCommodityInputEnvelope
    set?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    disconnect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    delete?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    update?: ObservationUpdateWithWhereUniqueWithoutCommodityInput | ObservationUpdateWithWhereUniqueWithoutCommodityInput[]
    updateMany?: ObservationUpdateManyWithWhereWithoutCommodityInput | ObservationUpdateManyWithWhereWithoutCommodityInput[]
    deleteMany?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
  }

  export type ForecastGateUpdateManyWithoutCommodityNestedInput = {
    create?: XOR<ForecastGateCreateWithoutCommodityInput, ForecastGateUncheckedCreateWithoutCommodityInput> | ForecastGateCreateWithoutCommodityInput[] | ForecastGateUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: ForecastGateCreateOrConnectWithoutCommodityInput | ForecastGateCreateOrConnectWithoutCommodityInput[]
    upsert?: ForecastGateUpsertWithWhereUniqueWithoutCommodityInput | ForecastGateUpsertWithWhereUniqueWithoutCommodityInput[]
    createMany?: ForecastGateCreateManyCommodityInputEnvelope
    set?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    disconnect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    delete?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    connect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    update?: ForecastGateUpdateWithWhereUniqueWithoutCommodityInput | ForecastGateUpdateWithWhereUniqueWithoutCommodityInput[]
    updateMany?: ForecastGateUpdateManyWithWhereWithoutCommodityInput | ForecastGateUpdateManyWithWhereWithoutCommodityInput[]
    deleteMany?: ForecastGateScalarWhereInput | ForecastGateScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutCommodityNestedInput = {
    create?: XOR<UnitCreateWithoutCommodityInput, UnitUncheckedCreateWithoutCommodityInput> | UnitCreateWithoutCommodityInput[] | UnitUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutCommodityInput | UnitCreateOrConnectWithoutCommodityInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutCommodityInput | UnitUpsertWithWhereUniqueWithoutCommodityInput[]
    createMany?: UnitCreateManyCommodityInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutCommodityInput | UnitUpdateWithWhereUniqueWithoutCommodityInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutCommodityInput | UnitUpdateManyWithWhereWithoutCommodityInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type ObservationUncheckedUpdateManyWithoutCommodityNestedInput = {
    create?: XOR<ObservationCreateWithoutCommodityInput, ObservationUncheckedCreateWithoutCommodityInput> | ObservationCreateWithoutCommodityInput[] | ObservationUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutCommodityInput | ObservationCreateOrConnectWithoutCommodityInput[]
    upsert?: ObservationUpsertWithWhereUniqueWithoutCommodityInput | ObservationUpsertWithWhereUniqueWithoutCommodityInput[]
    createMany?: ObservationCreateManyCommodityInputEnvelope
    set?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    disconnect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    delete?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    update?: ObservationUpdateWithWhereUniqueWithoutCommodityInput | ObservationUpdateWithWhereUniqueWithoutCommodityInput[]
    updateMany?: ObservationUpdateManyWithWhereWithoutCommodityInput | ObservationUpdateManyWithWhereWithoutCommodityInput[]
    deleteMany?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
  }

  export type ForecastGateUncheckedUpdateManyWithoutCommodityNestedInput = {
    create?: XOR<ForecastGateCreateWithoutCommodityInput, ForecastGateUncheckedCreateWithoutCommodityInput> | ForecastGateCreateWithoutCommodityInput[] | ForecastGateUncheckedCreateWithoutCommodityInput[]
    connectOrCreate?: ForecastGateCreateOrConnectWithoutCommodityInput | ForecastGateCreateOrConnectWithoutCommodityInput[]
    upsert?: ForecastGateUpsertWithWhereUniqueWithoutCommodityInput | ForecastGateUpsertWithWhereUniqueWithoutCommodityInput[]
    createMany?: ForecastGateCreateManyCommodityInputEnvelope
    set?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    disconnect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    delete?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    connect?: ForecastGateWhereUniqueInput | ForecastGateWhereUniqueInput[]
    update?: ForecastGateUpdateWithWhereUniqueWithoutCommodityInput | ForecastGateUpdateWithWhereUniqueWithoutCommodityInput[]
    updateMany?: ForecastGateUpdateManyWithWhereWithoutCommodityInput | ForecastGateUpdateManyWithWhereWithoutCommodityInput[]
    deleteMany?: ForecastGateScalarWhereInput | ForecastGateScalarWhereInput[]
  }

  export type CommodityCreateNestedOneWithoutUnitInput = {
    create?: XOR<CommodityCreateWithoutUnitInput, CommodityUncheckedCreateWithoutUnitInput>
    connectOrCreate?: CommodityCreateOrConnectWithoutUnitInput
    connect?: CommodityWhereUniqueInput
  }

  export type ObservationCreateNestedManyWithoutUnitInput = {
    create?: XOR<ObservationCreateWithoutUnitInput, ObservationUncheckedCreateWithoutUnitInput> | ObservationCreateWithoutUnitInput[] | ObservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutUnitInput | ObservationCreateOrConnectWithoutUnitInput[]
    createMany?: ObservationCreateManyUnitInputEnvelope
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
  }

  export type ObservationUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<ObservationCreateWithoutUnitInput, ObservationUncheckedCreateWithoutUnitInput> | ObservationCreateWithoutUnitInput[] | ObservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutUnitInput | ObservationCreateOrConnectWithoutUnitInput[]
    createMany?: ObservationCreateManyUnitInputEnvelope
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommodityUpdateOneRequiredWithoutUnitNestedInput = {
    create?: XOR<CommodityCreateWithoutUnitInput, CommodityUncheckedCreateWithoutUnitInput>
    connectOrCreate?: CommodityCreateOrConnectWithoutUnitInput
    upsert?: CommodityUpsertWithoutUnitInput
    connect?: CommodityWhereUniqueInput
    update?: XOR<XOR<CommodityUpdateToOneWithWhereWithoutUnitInput, CommodityUpdateWithoutUnitInput>, CommodityUncheckedUpdateWithoutUnitInput>
  }

  export type ObservationUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ObservationCreateWithoutUnitInput, ObservationUncheckedCreateWithoutUnitInput> | ObservationCreateWithoutUnitInput[] | ObservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutUnitInput | ObservationCreateOrConnectWithoutUnitInput[]
    upsert?: ObservationUpsertWithWhereUniqueWithoutUnitInput | ObservationUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ObservationCreateManyUnitInputEnvelope
    set?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    disconnect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    delete?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    update?: ObservationUpdateWithWhereUniqueWithoutUnitInput | ObservationUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ObservationUpdateManyWithWhereWithoutUnitInput | ObservationUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
  }

  export type ObservationUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ObservationCreateWithoutUnitInput, ObservationUncheckedCreateWithoutUnitInput> | ObservationCreateWithoutUnitInput[] | ObservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutUnitInput | ObservationCreateOrConnectWithoutUnitInput[]
    upsert?: ObservationUpsertWithWhereUniqueWithoutUnitInput | ObservationUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ObservationCreateManyUnitInputEnvelope
    set?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    disconnect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    delete?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    update?: ObservationUpdateWithWhereUniqueWithoutUnitInput | ObservationUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ObservationUpdateManyWithWhereWithoutUnitInput | ObservationUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
  }

  export type ObservationCreateNestedManyWithoutSourceInput = {
    create?: XOR<ObservationCreateWithoutSourceInput, ObservationUncheckedCreateWithoutSourceInput> | ObservationCreateWithoutSourceInput[] | ObservationUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutSourceInput | ObservationCreateOrConnectWithoutSourceInput[]
    createMany?: ObservationCreateManySourceInputEnvelope
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
  }

  export type ObservationUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<ObservationCreateWithoutSourceInput, ObservationUncheckedCreateWithoutSourceInput> | ObservationCreateWithoutSourceInput[] | ObservationUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutSourceInput | ObservationCreateOrConnectWithoutSourceInput[]
    createMany?: ObservationCreateManySourceInputEnvelope
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
  }

  export type ObservationUpdateManyWithoutSourceNestedInput = {
    create?: XOR<ObservationCreateWithoutSourceInput, ObservationUncheckedCreateWithoutSourceInput> | ObservationCreateWithoutSourceInput[] | ObservationUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutSourceInput | ObservationCreateOrConnectWithoutSourceInput[]
    upsert?: ObservationUpsertWithWhereUniqueWithoutSourceInput | ObservationUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: ObservationCreateManySourceInputEnvelope
    set?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    disconnect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    delete?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    update?: ObservationUpdateWithWhereUniqueWithoutSourceInput | ObservationUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: ObservationUpdateManyWithWhereWithoutSourceInput | ObservationUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
  }

  export type ObservationUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<ObservationCreateWithoutSourceInput, ObservationUncheckedCreateWithoutSourceInput> | ObservationCreateWithoutSourceInput[] | ObservationUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: ObservationCreateOrConnectWithoutSourceInput | ObservationCreateOrConnectWithoutSourceInput[]
    upsert?: ObservationUpsertWithWhereUniqueWithoutSourceInput | ObservationUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: ObservationCreateManySourceInputEnvelope
    set?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    disconnect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    delete?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    connect?: ObservationWhereUniqueInput | ObservationWhereUniqueInput[]
    update?: ObservationUpdateWithWhereUniqueWithoutSourceInput | ObservationUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: ObservationUpdateManyWithWhereWithoutSourceInput | ObservationUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
  }

  export type CommodityCreateNestedOneWithoutObservationInput = {
    create?: XOR<CommodityCreateWithoutObservationInput, CommodityUncheckedCreateWithoutObservationInput>
    connectOrCreate?: CommodityCreateOrConnectWithoutObservationInput
    connect?: CommodityWhereUniqueInput
  }

  export type MarketCreateNestedOneWithoutObservationInput = {
    create?: XOR<MarketCreateWithoutObservationInput, MarketUncheckedCreateWithoutObservationInput>
    connectOrCreate?: MarketCreateOrConnectWithoutObservationInput
    connect?: MarketWhereUniqueInput
  }

  export type SourceCreateNestedOneWithoutObservationInput = {
    create?: XOR<SourceCreateWithoutObservationInput, SourceUncheckedCreateWithoutObservationInput>
    connectOrCreate?: SourceCreateOrConnectWithoutObservationInput
    connect?: SourceWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutObservationsInput = {
    create?: XOR<UnitCreateWithoutObservationsInput, UnitUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutObservationsInput
    connect?: UnitWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommodityUpdateOneRequiredWithoutObservationNestedInput = {
    create?: XOR<CommodityCreateWithoutObservationInput, CommodityUncheckedCreateWithoutObservationInput>
    connectOrCreate?: CommodityCreateOrConnectWithoutObservationInput
    upsert?: CommodityUpsertWithoutObservationInput
    connect?: CommodityWhereUniqueInput
    update?: XOR<XOR<CommodityUpdateToOneWithWhereWithoutObservationInput, CommodityUpdateWithoutObservationInput>, CommodityUncheckedUpdateWithoutObservationInput>
  }

  export type MarketUpdateOneRequiredWithoutObservationNestedInput = {
    create?: XOR<MarketCreateWithoutObservationInput, MarketUncheckedCreateWithoutObservationInput>
    connectOrCreate?: MarketCreateOrConnectWithoutObservationInput
    upsert?: MarketUpsertWithoutObservationInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutObservationInput, MarketUpdateWithoutObservationInput>, MarketUncheckedUpdateWithoutObservationInput>
  }

  export type SourceUpdateOneRequiredWithoutObservationNestedInput = {
    create?: XOR<SourceCreateWithoutObservationInput, SourceUncheckedCreateWithoutObservationInput>
    connectOrCreate?: SourceCreateOrConnectWithoutObservationInput
    upsert?: SourceUpsertWithoutObservationInput
    connect?: SourceWhereUniqueInput
    update?: XOR<XOR<SourceUpdateToOneWithWhereWithoutObservationInput, SourceUpdateWithoutObservationInput>, SourceUncheckedUpdateWithoutObservationInput>
  }

  export type UnitUpdateOneRequiredWithoutObservationsNestedInput = {
    create?: XOR<UnitCreateWithoutObservationsInput, UnitUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutObservationsInput
    upsert?: UnitUpsertWithoutObservationsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutObservationsInput, UnitUpdateWithoutObservationsInput>, UnitUncheckedUpdateWithoutObservationsInput>
  }

  export type MarketCreateNestedOneWithoutReportInput = {
    create?: XOR<MarketCreateWithoutReportInput, MarketUncheckedCreateWithoutReportInput>
    connectOrCreate?: MarketCreateOrConnectWithoutReportInput
    connect?: MarketWhereUniqueInput
  }

  export type MarketUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<MarketCreateWithoutReportInput, MarketUncheckedCreateWithoutReportInput>
    connectOrCreate?: MarketCreateOrConnectWithoutReportInput
    upsert?: MarketUpsertWithoutReportInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutReportInput, MarketUpdateWithoutReportInput>, MarketUncheckedUpdateWithoutReportInput>
  }

  export type CommodityCreateNestedOneWithoutForecastGateInput = {
    create?: XOR<CommodityCreateWithoutForecastGateInput, CommodityUncheckedCreateWithoutForecastGateInput>
    connectOrCreate?: CommodityCreateOrConnectWithoutForecastGateInput
    connect?: CommodityWhereUniqueInput
  }

  export type MarketCreateNestedOneWithoutForecastGateInput = {
    create?: XOR<MarketCreateWithoutForecastGateInput, MarketUncheckedCreateWithoutForecastGateInput>
    connectOrCreate?: MarketCreateOrConnectWithoutForecastGateInput
    connect?: MarketWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CommodityUpdateOneRequiredWithoutForecastGateNestedInput = {
    create?: XOR<CommodityCreateWithoutForecastGateInput, CommodityUncheckedCreateWithoutForecastGateInput>
    connectOrCreate?: CommodityCreateOrConnectWithoutForecastGateInput
    upsert?: CommodityUpsertWithoutForecastGateInput
    connect?: CommodityWhereUniqueInput
    update?: XOR<XOR<CommodityUpdateToOneWithWhereWithoutForecastGateInput, CommodityUpdateWithoutForecastGateInput>, CommodityUncheckedUpdateWithoutForecastGateInput>
  }

  export type MarketUpdateOneRequiredWithoutForecastGateNestedInput = {
    create?: XOR<MarketCreateWithoutForecastGateInput, MarketUncheckedCreateWithoutForecastGateInput>
    connectOrCreate?: MarketCreateOrConnectWithoutForecastGateInput
    upsert?: MarketUpsertWithoutForecastGateInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutForecastGateInput, MarketUpdateWithoutForecastGateInput>, MarketUncheckedUpdateWithoutForecastGateInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MarketCreateWithoutCountryInput = {
    id: string
    name: string
    state?: string | null
    isPilot?: boolean
    Observation?: ObservationCreateNestedManyWithoutMarketInput
    ForecastGate?: ForecastGateCreateNestedManyWithoutMarketInput
    Report?: ReportCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutCountryInput = {
    id: string
    name: string
    state?: string | null
    isPilot?: boolean
    Observation?: ObservationUncheckedCreateNestedManyWithoutMarketInput
    ForecastGate?: ForecastGateUncheckedCreateNestedManyWithoutMarketInput
    Report?: ReportUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutCountryInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutCountryInput, MarketUncheckedCreateWithoutCountryInput>
  }

  export type MarketCreateManyCountryInputEnvelope = {
    data: MarketCreateManyCountryInput | MarketCreateManyCountryInput[]
  }

  export type MarketUpsertWithWhereUniqueWithoutCountryInput = {
    where: MarketWhereUniqueInput
    update: XOR<MarketUpdateWithoutCountryInput, MarketUncheckedUpdateWithoutCountryInput>
    create: XOR<MarketCreateWithoutCountryInput, MarketUncheckedCreateWithoutCountryInput>
  }

  export type MarketUpdateWithWhereUniqueWithoutCountryInput = {
    where: MarketWhereUniqueInput
    data: XOR<MarketUpdateWithoutCountryInput, MarketUncheckedUpdateWithoutCountryInput>
  }

  export type MarketUpdateManyWithWhereWithoutCountryInput = {
    where: MarketScalarWhereInput
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyWithoutCountryInput>
  }

  export type MarketScalarWhereInput = {
    AND?: MarketScalarWhereInput | MarketScalarWhereInput[]
    OR?: MarketScalarWhereInput[]
    NOT?: MarketScalarWhereInput | MarketScalarWhereInput[]
    id?: StringFilter<"Market"> | string
    name?: StringFilter<"Market"> | string
    state?: StringNullableFilter<"Market"> | string | null
    countryId?: StringFilter<"Market"> | string
    isPilot?: BoolFilter<"Market"> | boolean
  }

  export type CountryCreateWithoutMarketInput = {
    id: string
    code: string
    name: string
    currencyCode: string
    timezone: string
    privacyRegime?: string | null
  }

  export type CountryUncheckedCreateWithoutMarketInput = {
    id: string
    code: string
    name: string
    currencyCode: string
    timezone: string
    privacyRegime?: string | null
  }

  export type CountryCreateOrConnectWithoutMarketInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutMarketInput, CountryUncheckedCreateWithoutMarketInput>
  }

  export type ObservationCreateWithoutMarketInput = {
    id: string
    priceMinor: number
    currencyCode: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
    commodity: CommodityCreateNestedOneWithoutObservationInput
    source: SourceCreateNestedOneWithoutObservationInput
    unit: UnitCreateNestedOneWithoutObservationsInput
  }

  export type ObservationUncheckedCreateWithoutMarketInput = {
    id: string
    commodityId: string
    sourceId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
  }

  export type ObservationCreateOrConnectWithoutMarketInput = {
    where: ObservationWhereUniqueInput
    create: XOR<ObservationCreateWithoutMarketInput, ObservationUncheckedCreateWithoutMarketInput>
  }

  export type ObservationCreateManyMarketInputEnvelope = {
    data: ObservationCreateManyMarketInput | ObservationCreateManyMarketInput[]
  }

  export type ForecastGateCreateWithoutMarketInput = {
    id: string
    horizonDays: number
    status: string
    reason?: string | null
    decidedBy?: string | null
    decidedAt?: Date | string | null
    backtestMape?: number | null
    commodity: CommodityCreateNestedOneWithoutForecastGateInput
  }

  export type ForecastGateUncheckedCreateWithoutMarketInput = {
    id: string
    commodityId: string
    horizonDays: number
    status: string
    reason?: string | null
    decidedBy?: string | null
    decidedAt?: Date | string | null
    backtestMape?: number | null
  }

  export type ForecastGateCreateOrConnectWithoutMarketInput = {
    where: ForecastGateWhereUniqueInput
    create: XOR<ForecastGateCreateWithoutMarketInput, ForecastGateUncheckedCreateWithoutMarketInput>
  }

  export type ForecastGateCreateManyMarketInputEnvelope = {
    data: ForecastGateCreateManyMarketInput | ForecastGateCreateManyMarketInput[]
  }

  export type ReportCreateWithoutMarketInput = {
    id: string
    reporterId: string
    idempotencyKey: string
    commodityId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    status: string
    statusReason?: string | null
    channel: string
    submittedAt?: Date | string
  }

  export type ReportUncheckedCreateWithoutMarketInput = {
    id: string
    reporterId: string
    idempotencyKey: string
    commodityId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    status: string
    statusReason?: string | null
    channel: string
    submittedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutMarketInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutMarketInput, ReportUncheckedCreateWithoutMarketInput>
  }

  export type ReportCreateManyMarketInputEnvelope = {
    data: ReportCreateManyMarketInput | ReportCreateManyMarketInput[]
  }

  export type CountryUpsertWithoutMarketInput = {
    update: XOR<CountryUpdateWithoutMarketInput, CountryUncheckedUpdateWithoutMarketInput>
    create: XOR<CountryCreateWithoutMarketInput, CountryUncheckedCreateWithoutMarketInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutMarketInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutMarketInput, CountryUncheckedUpdateWithoutMarketInput>
  }

  export type CountryUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    privacyRegime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    privacyRegime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObservationUpsertWithWhereUniqueWithoutMarketInput = {
    where: ObservationWhereUniqueInput
    update: XOR<ObservationUpdateWithoutMarketInput, ObservationUncheckedUpdateWithoutMarketInput>
    create: XOR<ObservationCreateWithoutMarketInput, ObservationUncheckedCreateWithoutMarketInput>
  }

  export type ObservationUpdateWithWhereUniqueWithoutMarketInput = {
    where: ObservationWhereUniqueInput
    data: XOR<ObservationUpdateWithoutMarketInput, ObservationUncheckedUpdateWithoutMarketInput>
  }

  export type ObservationUpdateManyWithWhereWithoutMarketInput = {
    where: ObservationScalarWhereInput
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyWithoutMarketInput>
  }

  export type ObservationScalarWhereInput = {
    AND?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
    OR?: ObservationScalarWhereInput[]
    NOT?: ObservationScalarWhereInput | ObservationScalarWhereInput[]
    id?: StringFilter<"Observation"> | string
    commodityId?: StringFilter<"Observation"> | string
    marketId?: StringFilter<"Observation"> | string
    sourceId?: StringFilter<"Observation"> | string
    priceMinor?: IntFilter<"Observation"> | number
    currencyCode?: StringFilter<"Observation"> | string
    unitId?: StringFilter<"Observation"> | string
    priceType?: StringFilter<"Observation"> | string
    observedAt?: DateTimeFilter<"Observation"> | Date | string
    ingestedAt?: DateTimeFilter<"Observation"> | Date | string
    trustLabel?: StringFilter<"Observation"> | string
    pricePerKgMinor?: IntNullableFilter<"Observation"> | number | null
    normalisationMethod?: StringNullableFilter<"Observation"> | string | null
    supersedesId?: StringNullableFilter<"Observation"> | string | null
    isCurrent?: BoolFilter<"Observation"> | boolean
  }

  export type ForecastGateUpsertWithWhereUniqueWithoutMarketInput = {
    where: ForecastGateWhereUniqueInput
    update: XOR<ForecastGateUpdateWithoutMarketInput, ForecastGateUncheckedUpdateWithoutMarketInput>
    create: XOR<ForecastGateCreateWithoutMarketInput, ForecastGateUncheckedCreateWithoutMarketInput>
  }

  export type ForecastGateUpdateWithWhereUniqueWithoutMarketInput = {
    where: ForecastGateWhereUniqueInput
    data: XOR<ForecastGateUpdateWithoutMarketInput, ForecastGateUncheckedUpdateWithoutMarketInput>
  }

  export type ForecastGateUpdateManyWithWhereWithoutMarketInput = {
    where: ForecastGateScalarWhereInput
    data: XOR<ForecastGateUpdateManyMutationInput, ForecastGateUncheckedUpdateManyWithoutMarketInput>
  }

  export type ForecastGateScalarWhereInput = {
    AND?: ForecastGateScalarWhereInput | ForecastGateScalarWhereInput[]
    OR?: ForecastGateScalarWhereInput[]
    NOT?: ForecastGateScalarWhereInput | ForecastGateScalarWhereInput[]
    id?: StringFilter<"ForecastGate"> | string
    commodityId?: StringFilter<"ForecastGate"> | string
    marketId?: StringFilter<"ForecastGate"> | string
    horizonDays?: IntFilter<"ForecastGate"> | number
    status?: StringFilter<"ForecastGate"> | string
    reason?: StringNullableFilter<"ForecastGate"> | string | null
    decidedBy?: StringNullableFilter<"ForecastGate"> | string | null
    decidedAt?: DateTimeNullableFilter<"ForecastGate"> | Date | string | null
    backtestMape?: FloatNullableFilter<"ForecastGate"> | number | null
  }

  export type ReportUpsertWithWhereUniqueWithoutMarketInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutMarketInput, ReportUncheckedUpdateWithoutMarketInput>
    create: XOR<ReportCreateWithoutMarketInput, ReportUncheckedCreateWithoutMarketInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutMarketInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutMarketInput, ReportUncheckedUpdateWithoutMarketInput>
  }

  export type ReportUpdateManyWithWhereWithoutMarketInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutMarketInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    reporterId?: StringFilter<"Report"> | string
    idempotencyKey?: StringFilter<"Report"> | string
    commodityId?: StringFilter<"Report"> | string
    marketId?: StringFilter<"Report"> | string
    priceMinor?: IntFilter<"Report"> | number
    currencyCode?: StringFilter<"Report"> | string
    unitId?: StringFilter<"Report"> | string
    priceType?: StringFilter<"Report"> | string
    observedAt?: DateTimeFilter<"Report"> | Date | string
    status?: StringFilter<"Report"> | string
    statusReason?: StringNullableFilter<"Report"> | string | null
    channel?: StringFilter<"Report"> | string
    submittedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type UnitCreateWithoutCommodityInput = {
    id: string
    name: string
    aliases: string
    kgEquivalent?: number | null
    kgBasisNote?: string | null
    status: string
    countryId?: string | null
    Observations?: ObservationCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutCommodityInput = {
    id: string
    name: string
    aliases: string
    kgEquivalent?: number | null
    kgBasisNote?: string | null
    status: string
    countryId?: string | null
    Observations?: ObservationUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutCommodityInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutCommodityInput, UnitUncheckedCreateWithoutCommodityInput>
  }

  export type UnitCreateManyCommodityInputEnvelope = {
    data: UnitCreateManyCommodityInput | UnitCreateManyCommodityInput[]
  }

  export type ObservationCreateWithoutCommodityInput = {
    id: string
    priceMinor: number
    currencyCode: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
    market: MarketCreateNestedOneWithoutObservationInput
    source: SourceCreateNestedOneWithoutObservationInput
    unit: UnitCreateNestedOneWithoutObservationsInput
  }

  export type ObservationUncheckedCreateWithoutCommodityInput = {
    id: string
    marketId: string
    sourceId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
  }

  export type ObservationCreateOrConnectWithoutCommodityInput = {
    where: ObservationWhereUniqueInput
    create: XOR<ObservationCreateWithoutCommodityInput, ObservationUncheckedCreateWithoutCommodityInput>
  }

  export type ObservationCreateManyCommodityInputEnvelope = {
    data: ObservationCreateManyCommodityInput | ObservationCreateManyCommodityInput[]
  }

  export type ForecastGateCreateWithoutCommodityInput = {
    id: string
    horizonDays: number
    status: string
    reason?: string | null
    decidedBy?: string | null
    decidedAt?: Date | string | null
    backtestMape?: number | null
    market: MarketCreateNestedOneWithoutForecastGateInput
  }

  export type ForecastGateUncheckedCreateWithoutCommodityInput = {
    id: string
    marketId: string
    horizonDays: number
    status: string
    reason?: string | null
    decidedBy?: string | null
    decidedAt?: Date | string | null
    backtestMape?: number | null
  }

  export type ForecastGateCreateOrConnectWithoutCommodityInput = {
    where: ForecastGateWhereUniqueInput
    create: XOR<ForecastGateCreateWithoutCommodityInput, ForecastGateUncheckedCreateWithoutCommodityInput>
  }

  export type ForecastGateCreateManyCommodityInputEnvelope = {
    data: ForecastGateCreateManyCommodityInput | ForecastGateCreateManyCommodityInput[]
  }

  export type UnitUpsertWithWhereUniqueWithoutCommodityInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutCommodityInput, UnitUncheckedUpdateWithoutCommodityInput>
    create: XOR<UnitCreateWithoutCommodityInput, UnitUncheckedCreateWithoutCommodityInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutCommodityInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutCommodityInput, UnitUncheckedUpdateWithoutCommodityInput>
  }

  export type UnitUpdateManyWithWhereWithoutCommodityInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutCommodityInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: StringFilter<"Unit"> | string
    commodityId?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    aliases?: StringFilter<"Unit"> | string
    kgEquivalent?: FloatNullableFilter<"Unit"> | number | null
    kgBasisNote?: StringNullableFilter<"Unit"> | string | null
    status?: StringFilter<"Unit"> | string
    countryId?: StringNullableFilter<"Unit"> | string | null
  }

  export type ObservationUpsertWithWhereUniqueWithoutCommodityInput = {
    where: ObservationWhereUniqueInput
    update: XOR<ObservationUpdateWithoutCommodityInput, ObservationUncheckedUpdateWithoutCommodityInput>
    create: XOR<ObservationCreateWithoutCommodityInput, ObservationUncheckedCreateWithoutCommodityInput>
  }

  export type ObservationUpdateWithWhereUniqueWithoutCommodityInput = {
    where: ObservationWhereUniqueInput
    data: XOR<ObservationUpdateWithoutCommodityInput, ObservationUncheckedUpdateWithoutCommodityInput>
  }

  export type ObservationUpdateManyWithWhereWithoutCommodityInput = {
    where: ObservationScalarWhereInput
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyWithoutCommodityInput>
  }

  export type ForecastGateUpsertWithWhereUniqueWithoutCommodityInput = {
    where: ForecastGateWhereUniqueInput
    update: XOR<ForecastGateUpdateWithoutCommodityInput, ForecastGateUncheckedUpdateWithoutCommodityInput>
    create: XOR<ForecastGateCreateWithoutCommodityInput, ForecastGateUncheckedCreateWithoutCommodityInput>
  }

  export type ForecastGateUpdateWithWhereUniqueWithoutCommodityInput = {
    where: ForecastGateWhereUniqueInput
    data: XOR<ForecastGateUpdateWithoutCommodityInput, ForecastGateUncheckedUpdateWithoutCommodityInput>
  }

  export type ForecastGateUpdateManyWithWhereWithoutCommodityInput = {
    where: ForecastGateScalarWhereInput
    data: XOR<ForecastGateUpdateManyMutationInput, ForecastGateUncheckedUpdateManyWithoutCommodityInput>
  }

  export type CommodityCreateWithoutUnitInput = {
    id: string
    slug: string
    name: string
    Observation?: ObservationCreateNestedManyWithoutCommodityInput
    ForecastGate?: ForecastGateCreateNestedManyWithoutCommodityInput
  }

  export type CommodityUncheckedCreateWithoutUnitInput = {
    id: string
    slug: string
    name: string
    Observation?: ObservationUncheckedCreateNestedManyWithoutCommodityInput
    ForecastGate?: ForecastGateUncheckedCreateNestedManyWithoutCommodityInput
  }

  export type CommodityCreateOrConnectWithoutUnitInput = {
    where: CommodityWhereUniqueInput
    create: XOR<CommodityCreateWithoutUnitInput, CommodityUncheckedCreateWithoutUnitInput>
  }

  export type ObservationCreateWithoutUnitInput = {
    id: string
    priceMinor: number
    currencyCode: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
    commodity: CommodityCreateNestedOneWithoutObservationInput
    market: MarketCreateNestedOneWithoutObservationInput
    source: SourceCreateNestedOneWithoutObservationInput
  }

  export type ObservationUncheckedCreateWithoutUnitInput = {
    id: string
    commodityId: string
    marketId: string
    sourceId: string
    priceMinor: number
    currencyCode: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
  }

  export type ObservationCreateOrConnectWithoutUnitInput = {
    where: ObservationWhereUniqueInput
    create: XOR<ObservationCreateWithoutUnitInput, ObservationUncheckedCreateWithoutUnitInput>
  }

  export type ObservationCreateManyUnitInputEnvelope = {
    data: ObservationCreateManyUnitInput | ObservationCreateManyUnitInput[]
  }

  export type CommodityUpsertWithoutUnitInput = {
    update: XOR<CommodityUpdateWithoutUnitInput, CommodityUncheckedUpdateWithoutUnitInput>
    create: XOR<CommodityCreateWithoutUnitInput, CommodityUncheckedCreateWithoutUnitInput>
    where?: CommodityWhereInput
  }

  export type CommodityUpdateToOneWithWhereWithoutUnitInput = {
    where?: CommodityWhereInput
    data: XOR<CommodityUpdateWithoutUnitInput, CommodityUncheckedUpdateWithoutUnitInput>
  }

  export type CommodityUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Observation?: ObservationUpdateManyWithoutCommodityNestedInput
    ForecastGate?: ForecastGateUpdateManyWithoutCommodityNestedInput
  }

  export type CommodityUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Observation?: ObservationUncheckedUpdateManyWithoutCommodityNestedInput
    ForecastGate?: ForecastGateUncheckedUpdateManyWithoutCommodityNestedInput
  }

  export type ObservationUpsertWithWhereUniqueWithoutUnitInput = {
    where: ObservationWhereUniqueInput
    update: XOR<ObservationUpdateWithoutUnitInput, ObservationUncheckedUpdateWithoutUnitInput>
    create: XOR<ObservationCreateWithoutUnitInput, ObservationUncheckedCreateWithoutUnitInput>
  }

  export type ObservationUpdateWithWhereUniqueWithoutUnitInput = {
    where: ObservationWhereUniqueInput
    data: XOR<ObservationUpdateWithoutUnitInput, ObservationUncheckedUpdateWithoutUnitInput>
  }

  export type ObservationUpdateManyWithWhereWithoutUnitInput = {
    where: ObservationScalarWhereInput
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyWithoutUnitInput>
  }

  export type ObservationCreateWithoutSourceInput = {
    id: string
    priceMinor: number
    currencyCode: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
    commodity: CommodityCreateNestedOneWithoutObservationInput
    market: MarketCreateNestedOneWithoutObservationInput
    unit: UnitCreateNestedOneWithoutObservationsInput
  }

  export type ObservationUncheckedCreateWithoutSourceInput = {
    id: string
    commodityId: string
    marketId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
  }

  export type ObservationCreateOrConnectWithoutSourceInput = {
    where: ObservationWhereUniqueInput
    create: XOR<ObservationCreateWithoutSourceInput, ObservationUncheckedCreateWithoutSourceInput>
  }

  export type ObservationCreateManySourceInputEnvelope = {
    data: ObservationCreateManySourceInput | ObservationCreateManySourceInput[]
  }

  export type ObservationUpsertWithWhereUniqueWithoutSourceInput = {
    where: ObservationWhereUniqueInput
    update: XOR<ObservationUpdateWithoutSourceInput, ObservationUncheckedUpdateWithoutSourceInput>
    create: XOR<ObservationCreateWithoutSourceInput, ObservationUncheckedCreateWithoutSourceInput>
  }

  export type ObservationUpdateWithWhereUniqueWithoutSourceInput = {
    where: ObservationWhereUniqueInput
    data: XOR<ObservationUpdateWithoutSourceInput, ObservationUncheckedUpdateWithoutSourceInput>
  }

  export type ObservationUpdateManyWithWhereWithoutSourceInput = {
    where: ObservationScalarWhereInput
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyWithoutSourceInput>
  }

  export type CommodityCreateWithoutObservationInput = {
    id: string
    slug: string
    name: string
    Unit?: UnitCreateNestedManyWithoutCommodityInput
    ForecastGate?: ForecastGateCreateNestedManyWithoutCommodityInput
  }

  export type CommodityUncheckedCreateWithoutObservationInput = {
    id: string
    slug: string
    name: string
    Unit?: UnitUncheckedCreateNestedManyWithoutCommodityInput
    ForecastGate?: ForecastGateUncheckedCreateNestedManyWithoutCommodityInput
  }

  export type CommodityCreateOrConnectWithoutObservationInput = {
    where: CommodityWhereUniqueInput
    create: XOR<CommodityCreateWithoutObservationInput, CommodityUncheckedCreateWithoutObservationInput>
  }

  export type MarketCreateWithoutObservationInput = {
    id: string
    name: string
    state?: string | null
    isPilot?: boolean
    country: CountryCreateNestedOneWithoutMarketInput
    ForecastGate?: ForecastGateCreateNestedManyWithoutMarketInput
    Report?: ReportCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutObservationInput = {
    id: string
    name: string
    state?: string | null
    countryId: string
    isPilot?: boolean
    ForecastGate?: ForecastGateUncheckedCreateNestedManyWithoutMarketInput
    Report?: ReportUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutObservationInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutObservationInput, MarketUncheckedCreateWithoutObservationInput>
  }

  export type SourceCreateWithoutObservationInput = {
    id: string
    name: string
    owner?: string | null
    url?: string | null
    licence?: string | null
    frequency?: string | null
    validationStatus: string
    attributionText?: string | null
  }

  export type SourceUncheckedCreateWithoutObservationInput = {
    id: string
    name: string
    owner?: string | null
    url?: string | null
    licence?: string | null
    frequency?: string | null
    validationStatus: string
    attributionText?: string | null
  }

  export type SourceCreateOrConnectWithoutObservationInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutObservationInput, SourceUncheckedCreateWithoutObservationInput>
  }

  export type UnitCreateWithoutObservationsInput = {
    id: string
    name: string
    aliases: string
    kgEquivalent?: number | null
    kgBasisNote?: string | null
    status: string
    countryId?: string | null
    commodity: CommodityCreateNestedOneWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutObservationsInput = {
    id: string
    commodityId: string
    name: string
    aliases: string
    kgEquivalent?: number | null
    kgBasisNote?: string | null
    status: string
    countryId?: string | null
  }

  export type UnitCreateOrConnectWithoutObservationsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutObservationsInput, UnitUncheckedCreateWithoutObservationsInput>
  }

  export type CommodityUpsertWithoutObservationInput = {
    update: XOR<CommodityUpdateWithoutObservationInput, CommodityUncheckedUpdateWithoutObservationInput>
    create: XOR<CommodityCreateWithoutObservationInput, CommodityUncheckedCreateWithoutObservationInput>
    where?: CommodityWhereInput
  }

  export type CommodityUpdateToOneWithWhereWithoutObservationInput = {
    where?: CommodityWhereInput
    data: XOR<CommodityUpdateWithoutObservationInput, CommodityUncheckedUpdateWithoutObservationInput>
  }

  export type CommodityUpdateWithoutObservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Unit?: UnitUpdateManyWithoutCommodityNestedInput
    ForecastGate?: ForecastGateUpdateManyWithoutCommodityNestedInput
  }

  export type CommodityUncheckedUpdateWithoutObservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Unit?: UnitUncheckedUpdateManyWithoutCommodityNestedInput
    ForecastGate?: ForecastGateUncheckedUpdateManyWithoutCommodityNestedInput
  }

  export type MarketUpsertWithoutObservationInput = {
    update: XOR<MarketUpdateWithoutObservationInput, MarketUncheckedUpdateWithoutObservationInput>
    create: XOR<MarketCreateWithoutObservationInput, MarketUncheckedCreateWithoutObservationInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutObservationInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutObservationInput, MarketUncheckedUpdateWithoutObservationInput>
  }

  export type MarketUpdateWithoutObservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPilot?: BoolFieldUpdateOperationsInput | boolean
    country?: CountryUpdateOneRequiredWithoutMarketNestedInput
    ForecastGate?: ForecastGateUpdateManyWithoutMarketNestedInput
    Report?: ReportUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutObservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    isPilot?: BoolFieldUpdateOperationsInput | boolean
    ForecastGate?: ForecastGateUncheckedUpdateManyWithoutMarketNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type SourceUpsertWithoutObservationInput = {
    update: XOR<SourceUpdateWithoutObservationInput, SourceUncheckedUpdateWithoutObservationInput>
    create: XOR<SourceCreateWithoutObservationInput, SourceUncheckedCreateWithoutObservationInput>
    where?: SourceWhereInput
  }

  export type SourceUpdateToOneWithWhereWithoutObservationInput = {
    where?: SourceWhereInput
    data: XOR<SourceUpdateWithoutObservationInput, SourceUncheckedUpdateWithoutObservationInput>
  }

  export type SourceUpdateWithoutObservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    licence?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    attributionText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SourceUncheckedUpdateWithoutObservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    licence?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    validationStatus?: StringFieldUpdateOperationsInput | string
    attributionText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitUpsertWithoutObservationsInput = {
    update: XOR<UnitUpdateWithoutObservationsInput, UnitUncheckedUpdateWithoutObservationsInput>
    create: XOR<UnitCreateWithoutObservationsInput, UnitUncheckedCreateWithoutObservationsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutObservationsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutObservationsInput, UnitUncheckedUpdateWithoutObservationsInput>
  }

  export type UnitUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aliases?: StringFieldUpdateOperationsInput | string
    kgEquivalent?: NullableFloatFieldUpdateOperationsInput | number | null
    kgBasisNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    commodity?: CommodityUpdateOneRequiredWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aliases?: StringFieldUpdateOperationsInput | string
    kgEquivalent?: NullableFloatFieldUpdateOperationsInput | number | null
    kgBasisNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketCreateWithoutReportInput = {
    id: string
    name: string
    state?: string | null
    isPilot?: boolean
    country: CountryCreateNestedOneWithoutMarketInput
    Observation?: ObservationCreateNestedManyWithoutMarketInput
    ForecastGate?: ForecastGateCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutReportInput = {
    id: string
    name: string
    state?: string | null
    countryId: string
    isPilot?: boolean
    Observation?: ObservationUncheckedCreateNestedManyWithoutMarketInput
    ForecastGate?: ForecastGateUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutReportInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutReportInput, MarketUncheckedCreateWithoutReportInput>
  }

  export type MarketUpsertWithoutReportInput = {
    update: XOR<MarketUpdateWithoutReportInput, MarketUncheckedUpdateWithoutReportInput>
    create: XOR<MarketCreateWithoutReportInput, MarketUncheckedCreateWithoutReportInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutReportInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutReportInput, MarketUncheckedUpdateWithoutReportInput>
  }

  export type MarketUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPilot?: BoolFieldUpdateOperationsInput | boolean
    country?: CountryUpdateOneRequiredWithoutMarketNestedInput
    Observation?: ObservationUpdateManyWithoutMarketNestedInput
    ForecastGate?: ForecastGateUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    isPilot?: BoolFieldUpdateOperationsInput | boolean
    Observation?: ObservationUncheckedUpdateManyWithoutMarketNestedInput
    ForecastGate?: ForecastGateUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type CommodityCreateWithoutForecastGateInput = {
    id: string
    slug: string
    name: string
    Unit?: UnitCreateNestedManyWithoutCommodityInput
    Observation?: ObservationCreateNestedManyWithoutCommodityInput
  }

  export type CommodityUncheckedCreateWithoutForecastGateInput = {
    id: string
    slug: string
    name: string
    Unit?: UnitUncheckedCreateNestedManyWithoutCommodityInput
    Observation?: ObservationUncheckedCreateNestedManyWithoutCommodityInput
  }

  export type CommodityCreateOrConnectWithoutForecastGateInput = {
    where: CommodityWhereUniqueInput
    create: XOR<CommodityCreateWithoutForecastGateInput, CommodityUncheckedCreateWithoutForecastGateInput>
  }

  export type MarketCreateWithoutForecastGateInput = {
    id: string
    name: string
    state?: string | null
    isPilot?: boolean
    country: CountryCreateNestedOneWithoutMarketInput
    Observation?: ObservationCreateNestedManyWithoutMarketInput
    Report?: ReportCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutForecastGateInput = {
    id: string
    name: string
    state?: string | null
    countryId: string
    isPilot?: boolean
    Observation?: ObservationUncheckedCreateNestedManyWithoutMarketInput
    Report?: ReportUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutForecastGateInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutForecastGateInput, MarketUncheckedCreateWithoutForecastGateInput>
  }

  export type CommodityUpsertWithoutForecastGateInput = {
    update: XOR<CommodityUpdateWithoutForecastGateInput, CommodityUncheckedUpdateWithoutForecastGateInput>
    create: XOR<CommodityCreateWithoutForecastGateInput, CommodityUncheckedCreateWithoutForecastGateInput>
    where?: CommodityWhereInput
  }

  export type CommodityUpdateToOneWithWhereWithoutForecastGateInput = {
    where?: CommodityWhereInput
    data: XOR<CommodityUpdateWithoutForecastGateInput, CommodityUncheckedUpdateWithoutForecastGateInput>
  }

  export type CommodityUpdateWithoutForecastGateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Unit?: UnitUpdateManyWithoutCommodityNestedInput
    Observation?: ObservationUpdateManyWithoutCommodityNestedInput
  }

  export type CommodityUncheckedUpdateWithoutForecastGateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Unit?: UnitUncheckedUpdateManyWithoutCommodityNestedInput
    Observation?: ObservationUncheckedUpdateManyWithoutCommodityNestedInput
  }

  export type MarketUpsertWithoutForecastGateInput = {
    update: XOR<MarketUpdateWithoutForecastGateInput, MarketUncheckedUpdateWithoutForecastGateInput>
    create: XOR<MarketCreateWithoutForecastGateInput, MarketUncheckedCreateWithoutForecastGateInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutForecastGateInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutForecastGateInput, MarketUncheckedUpdateWithoutForecastGateInput>
  }

  export type MarketUpdateWithoutForecastGateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPilot?: BoolFieldUpdateOperationsInput | boolean
    country?: CountryUpdateOneRequiredWithoutMarketNestedInput
    Observation?: ObservationUpdateManyWithoutMarketNestedInput
    Report?: ReportUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutForecastGateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    isPilot?: BoolFieldUpdateOperationsInput | boolean
    Observation?: ObservationUncheckedUpdateManyWithoutMarketNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketCreateManyCountryInput = {
    id: string
    name: string
    state?: string | null
    isPilot?: boolean
  }

  export type MarketUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPilot?: BoolFieldUpdateOperationsInput | boolean
    Observation?: ObservationUpdateManyWithoutMarketNestedInput
    ForecastGate?: ForecastGateUpdateManyWithoutMarketNestedInput
    Report?: ReportUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPilot?: BoolFieldUpdateOperationsInput | boolean
    Observation?: ObservationUncheckedUpdateManyWithoutMarketNestedInput
    ForecastGate?: ForecastGateUncheckedUpdateManyWithoutMarketNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPilot?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationCreateManyMarketInput = {
    id: string
    commodityId: string
    sourceId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
  }

  export type ForecastGateCreateManyMarketInput = {
    id: string
    commodityId: string
    horizonDays: number
    status: string
    reason?: string | null
    decidedBy?: string | null
    decidedAt?: Date | string | null
    backtestMape?: number | null
  }

  export type ReportCreateManyMarketInput = {
    id: string
    reporterId: string
    idempotencyKey: string
    commodityId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    status: string
    statusReason?: string | null
    channel: string
    submittedAt?: Date | string
  }

  export type ObservationUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    commodity?: CommodityUpdateOneRequiredWithoutObservationNestedInput
    source?: SourceUpdateOneRequiredWithoutObservationNestedInput
    unit?: UnitUpdateOneRequiredWithoutObservationsNestedInput
  }

  export type ObservationUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ForecastGateUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    horizonDays?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backtestMape?: NullableFloatFieldUpdateOperationsInput | number | null
    commodity?: CommodityUpdateOneRequiredWithoutForecastGateNestedInput
  }

  export type ForecastGateUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    horizonDays?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backtestMape?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ForecastGateUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    horizonDays?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backtestMape?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReportUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateManyCommodityInput = {
    id: string
    name: string
    aliases: string
    kgEquivalent?: number | null
    kgBasisNote?: string | null
    status: string
    countryId?: string | null
  }

  export type ObservationCreateManyCommodityInput = {
    id: string
    marketId: string
    sourceId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
  }

  export type ForecastGateCreateManyCommodityInput = {
    id: string
    marketId: string
    horizonDays: number
    status: string
    reason?: string | null
    decidedBy?: string | null
    decidedAt?: Date | string | null
    backtestMape?: number | null
  }

  export type UnitUpdateWithoutCommodityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aliases?: StringFieldUpdateOperationsInput | string
    kgEquivalent?: NullableFloatFieldUpdateOperationsInput | number | null
    kgBasisNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: ObservationUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutCommodityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aliases?: StringFieldUpdateOperationsInput | string
    kgEquivalent?: NullableFloatFieldUpdateOperationsInput | number | null
    kgBasisNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    Observations?: ObservationUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutCommodityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aliases?: StringFieldUpdateOperationsInput | string
    kgEquivalent?: NullableFloatFieldUpdateOperationsInput | number | null
    kgBasisNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObservationUpdateWithoutCommodityInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    market?: MarketUpdateOneRequiredWithoutObservationNestedInput
    source?: SourceUpdateOneRequiredWithoutObservationNestedInput
    unit?: UnitUpdateOneRequiredWithoutObservationsNestedInput
  }

  export type ObservationUncheckedUpdateWithoutCommodityInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationUncheckedUpdateManyWithoutCommodityInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ForecastGateUpdateWithoutCommodityInput = {
    id?: StringFieldUpdateOperationsInput | string
    horizonDays?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backtestMape?: NullableFloatFieldUpdateOperationsInput | number | null
    market?: MarketUpdateOneRequiredWithoutForecastGateNestedInput
  }

  export type ForecastGateUncheckedUpdateWithoutCommodityInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    horizonDays?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backtestMape?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ForecastGateUncheckedUpdateManyWithoutCommodityInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    horizonDays?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    backtestMape?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ObservationCreateManyUnitInput = {
    id: string
    commodityId: string
    marketId: string
    sourceId: string
    priceMinor: number
    currencyCode: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
  }

  export type ObservationUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    commodity?: CommodityUpdateOneRequiredWithoutObservationNestedInput
    market?: MarketUpdateOneRequiredWithoutObservationNestedInput
    source?: SourceUpdateOneRequiredWithoutObservationNestedInput
  }

  export type ObservationUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationCreateManySourceInput = {
    id: string
    commodityId: string
    marketId: string
    priceMinor: number
    currencyCode: string
    unitId: string
    priceType: string
    observedAt: Date | string
    ingestedAt?: Date | string
    trustLabel: string
    pricePerKgMinor?: number | null
    normalisationMethod?: string | null
    supersedesId?: string | null
    isCurrent?: boolean
  }

  export type ObservationUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    commodity?: CommodityUpdateOneRequiredWithoutObservationNestedInput
    market?: MarketUpdateOneRequiredWithoutObservationNestedInput
    unit?: UnitUpdateOneRequiredWithoutObservationsNestedInput
  }

  export type ObservationUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObservationUncheckedUpdateManyWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    commodityId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    priceMinor?: IntFieldUpdateOperationsInput | number
    currencyCode?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    priceType?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trustLabel?: StringFieldUpdateOperationsInput | string
    pricePerKgMinor?: NullableIntFieldUpdateOperationsInput | number | null
    normalisationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
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