"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // ../mjtdev-object/dist/object/type/Producer.js
  var isProducer = (valueProducer) => {
    return typeof valueProducer === "function";
  };

  // ../mjtdev-object/dist/object/chain.js
  var chain = (initial, mappers) => {
    return mappers.reduce((acc, mapper) => {
      return mapper(acc);
    }, initial);
  };

  // ../mjtdev-object/dist/object/entries.js
  var entries = (obj) => {
    return Object.entries(obj);
  };

  // ../mjtdev-object/dist/object/filter.js
  var filter = (obj, predicate) => {
    return Object.entries(obj).filter((entry) => {
      const [k, v] = entry;
      return predicate(k, v);
    });
  };

  // ../mjtdev-object/dist/object/isUndefined.js
  var isUndefined = (obj) => {
    return obj === void 0 || obj === null || Number.isNaN(obj);
  };

  // ../mjtdev-object/dist/object/type/isIterator.js
  var isIterator = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw["next"] === "function";
  };

  // ../mjtdev-object/dist/object/first.js
  var first = (obj, typeGuard = (v) => true) => {
    if (isUndefined(obj)) {
      return void 0;
    }
    if (Array.isArray(obj)) {
      return obj.find(typeGuard);
    }
    if (isIterator(obj) && typeGuard(obj)) {
      return obj.next().value;
    }
    return obj;
  };

  // ../mjtdev-object/dist/object/fix/fix.js
  var fix = (v) => {
    if (isUndefined(v)) {
      return void 0;
    }
    return Object.freeze(v);
  };

  // ../mjtdev-object/dist/object/forEach.js
  var forEach = (obj, consumer, errorHandler = (error, key, value) => {
    console.error("error", error);
    console.error("object", obj);
    console.error("key", key);
    console.error("value", value);
    console.error("consumer", [consumer]);
    throw new Error("Error while iterating over object");
  }) => {
    for (const key in obj) {
      const value = obj[key];
      try {
        consumer(key, obj[key]);
      } catch (error) {
        errorHandler(error, key, value);
      }
    }
  };

  // ../mjtdev-object/dist/object/freeze.js
  var freeze = (v) => {
    if (isUndefined(v)) {
      return void 0;
    }
    return Object.freeze(v);
  };

  // ../mjtdev-object/dist/object/fromEntries.js
  var fromEntries = (entries3) => {
    return Object.fromEntries(entries3);
  };

  // ../mjtdev-object/dist/object/isDefined.js
  var isDefined = (obj) => {
    return !isUndefined(obj);
  };

  // ../mjtdev-object/dist/object/fromEntriesToMultimap.js
  var fromEntriesToMultimap = (entries3) => {
    const keys2 = Array.from(new Set(entries3.map((e) => e[0])));
    const result = fromEntries(keys2.map((k) => [k, []]));
    entries3.forEach((entry) => {
      const [key, value] = entry;
      if (isDefined(value)) {
        const valueContainer = result[key];
        valueContainer.push(value);
      }
    });
    return result;
  };

  // ../mjtdev-object/dist/object/get.js
  var get = (obj, key, defaultValue = void 0) => {
    const value = obj[key];
    if (isUndefined2(value)) {
      return defaultValue;
    }
    return value;
  };

  // ../mjtdev-object/dist/object/type/isIterable.js
  function isIterable(maybe) {
    const straw = maybe;
    return typeof straw === "object" && typeof straw[Symbol.iterator] === "function";
  }

  // ../mjtdev-object/dist/object/toMany.js
  var toMany = (obj) => {
    if (isUndefined(obj)) {
      return [];
    }
    if (isIterable(obj)) {
      return Array.from(obj);
    }
    return Array.isArray(obj) ? obj : [obj];
  };

  // ../mjtdev-object/dist/object/hasKey.js
  var hasKey = (obj, key) => {
    const keys2 = toMany(key);
    return keys2.filter((key2) => isDefined(obj[key2])).length === keys2.length;
  };

  // ../mjtdev-object/dist/object/headOf.js
  var headOf = first;

  // ../mjtdev-object/dist/object/iff.js
  var iff = (value, mapper) => {
    if (isDefined(value)) {
      return mapper(value);
    }
    return void 0;
  };

  // ../mjtdev-object/dist/object/isBrowser.js
  var isBrowser = () => {
    return typeof window !== "undefined";
  };

  // ../mjtdev-object/dist/object/iffBrowser.js
  var iffBrowser = (producer) => {
    return isBrowser() ? producer() : void 0;
  };

  // ../mjtdev-object/dist/object/iffTyped.js
  var iffTyped = (typeGuard, value, mapper) => {
    if (typeGuard(value)) {
      return iff(value, mapper);
    }
    return void 0;
  };

  // ../mjtdev-object/dist/object/includesUndefined.js
  var includesUndefined = (...arr) => {
    if (isUndefined(arr)) {
      return true;
    }
    arr.findIndex((x) => isUndefined(x)) === -1;
  };

  // ../mjtdev-object/dist/object/isEmpty.js
  var isEmpty = (value) => {
    if (isUndefined(value)) {
      return true;
    }
    if (typeof value === "string") {
      return value.trim().length === 0;
    }
    return false;
  };

  // ../mjtdev-object/dist/object/isNotEmpty.js
  var isNotEmpty = (value) => {
    return !isEmpty(value);
  };

  // ../mjtdev-object/dist/object/keys.js
  var keys = (obj) => {
    return Object.keys(obj);
  };

  // ../mjtdev-object/dist/object/last.js
  var last = (obj) => {
    if (isUndefined(obj)) {
      return void 0;
    }
    return obj[obj.length - 1];
  };

  // ../mjtdev-object/dist/object/map.js
  var mapValue = (value, mapper) => {
    return mapper(value);
  };

  // ../mjtdev-object/dist/object/mapOf.js
  var mapOf = (obj, mapper) => {
    return entries(obj).map((entry) => {
      const [key, value] = entry;
      return mapper(key, value);
    });
  };

  // ../mjtdev-object/dist/object/omit.js
  var omit = (object, key) => {
    const { [key]: deletedKey, ...rest } = object;
    return rest;
  };
  var omitUnsafe = (object, key) => {
    object[key] = void 0;
    return object;
  };

  // ../mjtdev-object/dist/object/orElse.js
  var orElse = (o, e) => {
    if (isDefined(o)) {
      return o;
    }
    return e;
  };

  // ../mjtdev-object/dist/object/orError.js
  var orError = (f, options = {}) => {
    try {
      return f();
    } catch (error) {
      const { message, cause } = options;
      const proximateCause = new Error(message, { cause });
      if (error instanceof Error) {
        error["cause"] = proximateCause;
        return error;
      }
      throw new Error(message, { cause: [error, cause] });
    }
  };

  // ../mjtdev-object/dist/object/removeUndefinedValues.js
  var removeUndefinedValues = (obj) => {
    const cleaned = Object.entries(obj).filter(([k, v]) => isDefined(v));
    return Object.fromEntries(cleaned);
  };

  // ../mjtdev-object/dist/object/tailOf.js
  var tailOf = (obj) => {
    if (isUndefined(obj)) {
      return void 0;
    }
    return obj.slice(1);
  };

  // ../mjtdev-object/dist/object/restOf.js
  var restOf = tailOf;

  // ../mjtdev-object/dist/object/valueOf.js
  var valueOf = (valueProducer) => {
    if (isProducer(valueProducer)) {
      return valueProducer();
    }
    return valueProducer;
  };

  // ../mjtdev-object/dist/object/safe.js
  var safe = (producer, options = {}) => {
    const { quiet = false, def = void 0, onError } = options;
    try {
      return producer();
    } catch (error) {
      if (!quiet) {
        console.error(error);
        if (isDefined(onError)) {
          console.log(valueOf(onError));
        }
      }
      return def;
    }
  };

  // ../mjtdev-object/dist/object/safeAsync.js
  var safeAsync = async (producer, options = {}) => {
    const { quiet = false, def = void 0, onError } = options;
    return safe(async () => {
      const result = producer();
      if (result instanceof Promise) {
        return await result.catch((reason) => {
          if (!quiet) {
            console.error(reason);
            if (isDefined(onError)) {
              console.log(valueOf(onError));
            }
          }
          return def;
        });
      }
      return result;
    });
  };

  // ../mjtdev-object/dist/object/set.js
  var set = (obj, key, value) => {
    return { ...obj, ...Object.fromEntries([[key, value]]) };
  };
  var setUnsafe = (obj, key, value) => {
    obj[key] = value;
    return obj;
  };

  // ../mjtdev-object/dist/object/times.js
  function times(count, mapper) {
    const result = [];
    let stopped = false;
    for (let i = 0; i < count; i++) {
      if (stopped) {
        break;
      }
      const r = mapper(i, () => {
        stopped = true;
      });
      if (isDefined2(r)) {
        result.push(r);
      }
    }
    return result;
  }

  // ../mjtdev-object/dist/object/timesGen.js
  function* timesGen(count, mapper) {
    let stopped = false;
    for (let i = 0; i < count; i++) {
      if (stopped) {
        return;
      }
      yield mapper(i, () => {
        stopped = true;
      });
    }
  }

  // ../mjtdev-object/dist/object/toBoolean.js
  var toBoolean = (value) => {
    if (isUndefined(value)) {
      return false;
    }
    const truthyValues = ["true", "1", "yes", "on"];
    const falsyValues = ["false", "0", "no", "off"];
    if (truthyValues.includes(value.toLowerCase()))
      return true;
    if (falsyValues.includes(value.toLowerCase()))
      return false;
    return false;
  };

  // ../mjtdev-object/dist/object/toMultiMap.js
  var toMultiMap = (maps, options = {}) => {
    const { compact = false } = options;
    return maps.reduce((acc, cur) => {
      Objects.entries(cur).forEach((entry) => {
        const [k, v] = entry;
        const values2 = acc[k] ?? [];
        acc[k] = compact && values2.includes(v) ? values2 : [...values2, v];
      });
      return acc;
    }, {});
  };

  // ../mjtdev-object/dist/object/toNumber.js
  var toNumber = (value) => {
    if (isUndefined(value)) {
      return void 0;
    }
    return Number(value);
  };

  // ../mjtdev-object/dist/object/toPromise.js
  var toPromise = (producer) => {
    const callback = () => {
    };
    return new Promise((resolve, reject) => {
      try {
        resolve(producer(callback));
      } catch (error) {
        reject(error);
      }
    });
  };

  // ../mjtdev-object/dist/object/type/isErrorType.js
  var isErrorType = (value) => {
    return value instanceof Error;
  };

  // ../mjtdev-object/dist/object/tryValue.js
  var tryValue = (value, message) => {
    if (isErrorType(value)) {
      throw new Error(message, { cause: value });
    }
    return value;
  };

  // ../mjtdev-object/dist/object/tuples.js
  var tuple0 = () => {
    return [];
  };
  var tuple1 = (a) => {
    return [a];
  };
  var tuple2 = (a, b) => {
    return [a, b];
  };
  var tuple3 = (a, b, c) => {
    return [a, b, c];
  };
  var tuple4 = (a, b, c, d) => {
    return [a, b, c, d];
  };
  var tuple5 = (a, b, c, d, e) => {
    return [a, b, c, d, e];
  };

  // ../mjtdev-object/dist/object/type/isArrayLike.js
  var isArrayLike = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.length === "number";
  };

  // ../mjtdev-object/dist/object/type/isErrorLike.js
  var isErrorLike = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && (typeof straw.message === "string" || typeof straw.stack === "string" || isDefined(straw.cause));
  };

  // ../mjtdev-object/dist/object/type/isFunction.js
  var isFunction = (maybe) => {
    const straw = maybe;
    return typeof straw === "function";
  };

  // ../mjtdev-object/dist/object/update.js
  var update = (obj, key, mapper) => {
    const value = get(obj, key);
    if (isUndefined2(value)) {
      return obj;
    }
    const updatedValue = mapper(value);
    return set(obj, key, updatedValue);
  };
  var updateUnsafe = (obj, key, mapper) => {
    const value = get(obj, key);
    if (isUndefined2(value)) {
      return obj;
    }
    const updatedValue = mapper(value);
    return setUnsafe(obj, key, updatedValue);
  };

  // ../mjtdev-object/dist/object/values.js
  var values = (obj) => {
    return Object.values(obj);
  };

  // ../mjtdev-object/dist/object/waitTimeout.js
  var waitTimeout = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(void 0);
      }, ms);
    });
  };

  // ../mjtdev-object/dist/object/createSettler.js
  var createSettler = ({ settleAction, settledAfterMs }) => {
    let lastValue = void 0;
    let lastModification = Date.now();
    let settling = false;
    const attemptToSettle = () => {
      if (Date.now() > lastModification + settledAfterMs) {
        if (isDefined(lastValue)) {
          settleAction(lastValue);
        }
        settling = false;
        return;
      }
      settling = true;
      setTimeout(attemptToSettle, settledAfterMs);
    };
    return {
      update: (value) => {
        lastValue = value;
        lastModification = Date.now();
        if (!settling) {
          attemptToSettle();
        }
      }
    };
  };

  // ../mjtdev-object/dist/object/parseIncompleteJson.js
  function parseIncompleteJson(input) {
    let index = 0;
    const length = input.length;
    function skipWhitespace() {
      while (index < length && /\s/.test(input[index])) {
        index++;
      }
    }
    function parseValue() {
      skipWhitespace();
      if (index >= length)
        return void 0;
      const char = input[index];
      if (char === "{") {
        return parseObject();
      } else if (char === "[") {
        return parseArray();
      } else if (char === '"') {
        return parseString();
      } else if (char === "-" || char >= "0" && char <= "9") {
        return parseNumber();
      } else if (input.startsWith("true", index)) {
        index += 4;
        return true;
      } else if (input.startsWith("false", index)) {
        index += 5;
        return false;
      } else if (input.startsWith("null", index)) {
        index += 4;
        return null;
      }
      return void 0;
    }
    function parseObject() {
      const result = {};
      index++;
      while (index < length) {
        skipWhitespace();
        if (input[index] === "}") {
          index++;
          return result;
        }
        const key = parseString();
        if (key === void 0 || typeof key !== "string") {
          break;
        }
        skipWhitespace();
        if (input[index] !== ":") {
          break;
        }
        index++;
        const value = parseValue();
        if (value === void 0) {
          break;
        }
        result[key] = value;
        skipWhitespace();
        if (input[index] === "}") {
          index++;
          return result;
        } else if (input[index] !== ",") {
          break;
        }
        index++;
      }
      return result;
    }
    function parseArray() {
      const result = [];
      index++;
      while (index < length) {
        skipWhitespace();
        if (input[index] === "]") {
          index++;
          return result;
        }
        const value = parseValue();
        if (value !== void 0) {
          result.push(value);
        }
        skipWhitespace();
        if (input[index] === "]") {
          index++;
          return result;
        } else if (input[index] !== ",") {
          break;
        }
        index++;
      }
      return result;
    }
    function parseString() {
      let result = "";
      index++;
      while (index < length) {
        const char = input[index++];
        if (char === '"') {
          return result;
        }
        if (char === "\\") {
          if (index < length) {
            const escapeChar = input[index++];
            if (escapeChar === '"') {
              result += '"';
            } else if (escapeChar === "\\") {
              result += "\\";
            } else if (escapeChar === "/") {
              result += "/";
            } else if (escapeChar === "b") {
              result += "\b";
            } else if (escapeChar === "f") {
              result += "\f";
            } else if (escapeChar === "n") {
              result += "\n";
            } else if (escapeChar === "r") {
              result += "\r";
            } else if (escapeChar === "t") {
              result += "	";
            }
          }
        } else {
          result += char;
        }
      }
      return void 0;
    }
    function parseNumber() {
      const start = index;
      if (input[index] === "-") {
        index++;
      }
      while (index < length && input[index] >= "0" && input[index] <= "9") {
        index++;
      }
      if (input[index] === ".") {
        index++;
        while (index < length && input[index] >= "0" && input[index] <= "9") {
          index++;
        }
      }
      if (input[index] === "e" || input[index] === "E") {
        index++;
        if (input[index] === "-" || input[index] === "+") {
          index++;
        }
        while (index < length && input[index] >= "0" && input[index] <= "9") {
          index++;
        }
      }
      const numberStr = input.slice(start, index);
      const num = Number(numberStr);
      if (isNaN(num)) {
        return void 0;
      }
      return num;
    }
    return parseValue();
  }

  // ../mjtdev-object/dist/object/Objects.js
  var Objects = {
    isErrorLike,
    orError,
    tryValue,
    isErrorType,
    isEmpty,
    isNotEmpty,
    isIterator,
    isArrayLike,
    times,
    first,
    last,
    fix,
    iff,
    iffTyped,
    includesUndefined,
    isDefined,
    isUndefined,
    omit,
    omitUnsafe,
    orElse,
    removeUndefinedValues,
    toMany,
    set,
    setUnsafe,
    get,
    update,
    updateUnsafe,
    entries,
    keys,
    values,
    forEach,
    filter,
    chain,
    fromEntries,
    fromEntriesToMultimap,
    freeze,
    hasKey,
    tuple0,
    tuple1,
    tuple2,
    tuple3,
    tuple4,
    tuple5,
    safe,
    safeAsync,
    valueOf,
    mapValue,
    headOf,
    tailOf,
    restOf,
    toMultiMap,
    timesGen,
    isIterable,
    isBrowser,
    iffBrowser,
    mapOf,
    toPromise,
    all: Promise.all,
    isFunction,
    toNumber,
    toBoolean,
    waitTimeout,
    createSettler,
    parseIncompleteJson
  };

  // ../mjtdev-object/dist/index.js
  var { isErrorLike: isErrorLike2, chain: chain2, entries: entries2, filter: filter2, first: first2, last: last2, forEach: forEach2, iff: iff2, orElse: orElse2, removeUndefinedValues: removeUndefinedValues2, iffTyped: iffTyped2, isDefined: isDefined2, isUndefined: isUndefined2, omit: omit2, omitUnsafe: omitUnsafe2, toMany: toMany2, fromEntries: fromEntries2, safe: safe2, safeAsync: safeAsync2, mapValue: mapValue2, headOf: headOf2, tailOf: tailOf2, restOf: restOf2, times: times2, isIterator: isIterator2, toMultiMap: toMultiMap2, timesGen: timesGen2, isIterable: isIterable2, isArrayLike: isArrayLike2, iffBrowser: iffBrowser2, isBrowser: isBrowser2, toPromise: toPromise2, all, isFunction: isFunction2, isEmpty: isEmpty2, isNotEmpty: isNotEmpty2, tryValue: tryValue2, orError: orError2, isErrorType: isErrorType2, createSettler: createSettler2 } = Objects;

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/utils/utf8.mjs
  function utf8Count(str) {
    var strLength = str.length;
    var byteLength2 = 0;
    var pos = 0;
    while (pos < strLength) {
      var value = str.charCodeAt(pos++);
      if ((value & 4294967168) === 0) {
        byteLength2++;
        continue;
      } else if ((value & 4294965248) === 0) {
        byteLength2 += 2;
      } else {
        if (value >= 55296 && value <= 56319) {
          if (pos < strLength) {
            var extra = str.charCodeAt(pos);
            if ((extra & 64512) === 56320) {
              ++pos;
              value = ((value & 1023) << 10) + (extra & 1023) + 65536;
            }
          }
        }
        if ((value & 4294901760) === 0) {
          byteLength2 += 3;
        } else {
          byteLength2 += 4;
        }
      }
    }
    return byteLength2;
  }
  function utf8EncodeJs(str, output, outputOffset) {
    var strLength = str.length;
    var offset = outputOffset;
    var pos = 0;
    while (pos < strLength) {
      var value = str.charCodeAt(pos++);
      if ((value & 4294967168) === 0) {
        output[offset++] = value;
        continue;
      } else if ((value & 4294965248) === 0) {
        output[offset++] = value >> 6 & 31 | 192;
      } else {
        if (value >= 55296 && value <= 56319) {
          if (pos < strLength) {
            var extra = str.charCodeAt(pos);
            if ((extra & 64512) === 56320) {
              ++pos;
              value = ((value & 1023) << 10) + (extra & 1023) + 65536;
            }
          }
        }
        if ((value & 4294901760) === 0) {
          output[offset++] = value >> 12 & 15 | 224;
          output[offset++] = value >> 6 & 63 | 128;
        } else {
          output[offset++] = value >> 18 & 7 | 240;
          output[offset++] = value >> 12 & 63 | 128;
          output[offset++] = value >> 6 & 63 | 128;
        }
      }
      output[offset++] = value & 63 | 128;
    }
  }
  var sharedTextEncoder = new TextEncoder();
  var TEXT_ENCODER_THRESHOLD = 50;
  function utf8EncodeTE(str, output, outputOffset) {
    sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
  }
  function utf8Encode(str, output, outputOffset) {
    if (str.length > TEXT_ENCODER_THRESHOLD) {
      utf8EncodeTE(str, output, outputOffset);
    } else {
      utf8EncodeJs(str, output, outputOffset);
    }
  }
  var CHUNK_SIZE = 4096;
  function utf8DecodeJs(bytes, inputOffset, byteLength2) {
    var offset = inputOffset;
    var end = offset + byteLength2;
    var units = [];
    var result = "";
    while (offset < end) {
      var byte1 = bytes[offset++];
      if ((byte1 & 128) === 0) {
        units.push(byte1);
      } else if ((byte1 & 224) === 192) {
        var byte2 = bytes[offset++] & 63;
        units.push((byte1 & 31) << 6 | byte2);
      } else if ((byte1 & 240) === 224) {
        var byte2 = bytes[offset++] & 63;
        var byte3 = bytes[offset++] & 63;
        units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
      } else if ((byte1 & 248) === 240) {
        var byte2 = bytes[offset++] & 63;
        var byte3 = bytes[offset++] & 63;
        var byte4 = bytes[offset++] & 63;
        var unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
        if (unit > 65535) {
          unit -= 65536;
          units.push(unit >>> 10 & 1023 | 55296);
          unit = 56320 | unit & 1023;
        }
        units.push(unit);
      } else {
        units.push(byte1);
      }
      if (units.length >= CHUNK_SIZE) {
        result += String.fromCharCode.apply(String, units);
        units.length = 0;
      }
    }
    if (units.length > 0) {
      result += String.fromCharCode.apply(String, units);
    }
    return result;
  }
  var sharedTextDecoder = new TextDecoder();
  var TEXT_DECODER_THRESHOLD = 200;
  function utf8DecodeTD(bytes, inputOffset, byteLength2) {
    var stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength2);
    return sharedTextDecoder.decode(stringBytes);
  }
  function utf8Decode(bytes, inputOffset, byteLength2) {
    if (byteLength2 > TEXT_DECODER_THRESHOLD) {
      return utf8DecodeTD(bytes, inputOffset, byteLength2);
    } else {
      return utf8DecodeJs(bytes, inputOffset, byteLength2);
    }
  }

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/ExtData.mjs
  var ExtData = (
    /** @class */
    /* @__PURE__ */ function() {
      function ExtData2(type, data) {
        this.type = type;
        this.data = data;
      }
      return ExtData2;
    }()
  );

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/DecodeError.mjs
  var __extends = /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var DecodeError = (
    /** @class */
    function(_super) {
      __extends(DecodeError2, _super);
      function DecodeError2(message) {
        var _this = _super.call(this, message) || this;
        var proto = Object.create(DecodeError2.prototype);
        Object.setPrototypeOf(_this, proto);
        Object.defineProperty(_this, "name", {
          configurable: true,
          enumerable: false,
          value: DecodeError2.name
        });
        return _this;
      }
      return DecodeError2;
    }(Error)
  );

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/utils/int.mjs
  var UINT32_MAX = 4294967295;
  function setUint64(view, offset, value) {
    var high = value / 4294967296;
    var low = value;
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
  }
  function setInt64(view, offset, value) {
    var high = Math.floor(value / 4294967296);
    var low = value;
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
  }
  function getInt64(view, offset) {
    var high = view.getInt32(offset);
    var low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
  }
  function getUint64(view, offset) {
    var high = view.getUint32(offset);
    var low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
  }

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/timestamp.mjs
  var EXT_TIMESTAMP = -1;
  var TIMESTAMP32_MAX_SEC = 4294967296 - 1;
  var TIMESTAMP64_MAX_SEC = 17179869184 - 1;
  function encodeTimeSpecToTimestamp(_a) {
    var sec = _a.sec, nsec = _a.nsec;
    if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
      if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
        var rv = new Uint8Array(4);
        var view = new DataView(rv.buffer);
        view.setUint32(0, sec);
        return rv;
      } else {
        var secHigh = sec / 4294967296;
        var secLow = sec & 4294967295;
        var rv = new Uint8Array(8);
        var view = new DataView(rv.buffer);
        view.setUint32(0, nsec << 2 | secHigh & 3);
        view.setUint32(4, secLow);
        return rv;
      }
    } else {
      var rv = new Uint8Array(12);
      var view = new DataView(rv.buffer);
      view.setUint32(0, nsec);
      setInt64(view, 4, sec);
      return rv;
    }
  }
  function encodeDateToTimeSpec(date) {
    var msec = date.getTime();
    var sec = Math.floor(msec / 1e3);
    var nsec = (msec - sec * 1e3) * 1e6;
    var nsecInSec = Math.floor(nsec / 1e9);
    return {
      sec: sec + nsecInSec,
      nsec: nsec - nsecInSec * 1e9
    };
  }
  function encodeTimestampExtension(object) {
    if (object instanceof Date) {
      var timeSpec = encodeDateToTimeSpec(object);
      return encodeTimeSpecToTimestamp(timeSpec);
    } else {
      return null;
    }
  }
  function decodeTimestampToTimeSpec(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    switch (data.byteLength) {
      case 4: {
        var sec = view.getUint32(0);
        var nsec = 0;
        return { sec, nsec };
      }
      case 8: {
        var nsec30AndSecHigh2 = view.getUint32(0);
        var secLow32 = view.getUint32(4);
        var sec = (nsec30AndSecHigh2 & 3) * 4294967296 + secLow32;
        var nsec = nsec30AndSecHigh2 >>> 2;
        return { sec, nsec };
      }
      case 12: {
        var sec = getInt64(view, 4);
        var nsec = view.getUint32(0);
        return { sec, nsec };
      }
      default:
        throw new DecodeError("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(data.length));
    }
  }
  function decodeTimestampExtension(data) {
    var timeSpec = decodeTimestampToTimeSpec(data);
    return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
  }
  var timestampExtension = {
    type: EXT_TIMESTAMP,
    encode: encodeTimestampExtension,
    decode: decodeTimestampExtension
  };

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/ExtensionCodec.mjs
  var ExtensionCodec = (
    /** @class */
    function() {
      function ExtensionCodec2() {
        this.builtInEncoders = [];
        this.builtInDecoders = [];
        this.encoders = [];
        this.decoders = [];
        this.register(timestampExtension);
      }
      ExtensionCodec2.prototype.register = function(_a) {
        var type = _a.type, encode3 = _a.encode, decode3 = _a.decode;
        if (type >= 0) {
          this.encoders[type] = encode3;
          this.decoders[type] = decode3;
        } else {
          var index = 1 + type;
          this.builtInEncoders[index] = encode3;
          this.builtInDecoders[index] = decode3;
        }
      };
      ExtensionCodec2.prototype.tryToEncode = function(object, context) {
        for (var i = 0; i < this.builtInEncoders.length; i++) {
          var encodeExt = this.builtInEncoders[i];
          if (encodeExt != null) {
            var data = encodeExt(object, context);
            if (data != null) {
              var type = -1 - i;
              return new ExtData(type, data);
            }
          }
        }
        for (var i = 0; i < this.encoders.length; i++) {
          var encodeExt = this.encoders[i];
          if (encodeExt != null) {
            var data = encodeExt(object, context);
            if (data != null) {
              var type = i;
              return new ExtData(type, data);
            }
          }
        }
        if (object instanceof ExtData) {
          return object;
        }
        return null;
      };
      ExtensionCodec2.prototype.decode = function(data, type, context) {
        var decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
        if (decodeExt) {
          return decodeExt(data, type, context);
        } else {
          return new ExtData(type, data);
        }
      };
      ExtensionCodec2.defaultCodec = new ExtensionCodec2();
      return ExtensionCodec2;
    }()
  );

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/utils/typedArrays.mjs
  function ensureUint8Array(buffer) {
    if (buffer instanceof Uint8Array) {
      return buffer;
    } else if (ArrayBuffer.isView(buffer)) {
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    } else if (buffer instanceof ArrayBuffer) {
      return new Uint8Array(buffer);
    } else {
      return Uint8Array.from(buffer);
    }
  }
  function createDataView(buffer) {
    if (buffer instanceof ArrayBuffer) {
      return new DataView(buffer);
    }
    var bufferView = ensureUint8Array(buffer);
    return new DataView(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
  }

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/Encoder.mjs
  var DEFAULT_MAX_DEPTH = 100;
  var DEFAULT_INITIAL_BUFFER_SIZE = 2048;
  var Encoder = (
    /** @class */
    function() {
      function Encoder2(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.extensionCodec = (_a = options === null || options === void 0 ? void 0 : options.extensionCodec) !== null && _a !== void 0 ? _a : ExtensionCodec.defaultCodec;
        this.context = options === null || options === void 0 ? void 0 : options.context;
        this.useBigInt64 = (_b = options === null || options === void 0 ? void 0 : options.useBigInt64) !== null && _b !== void 0 ? _b : false;
        this.maxDepth = (_c = options === null || options === void 0 ? void 0 : options.maxDepth) !== null && _c !== void 0 ? _c : DEFAULT_MAX_DEPTH;
        this.initialBufferSize = (_d = options === null || options === void 0 ? void 0 : options.initialBufferSize) !== null && _d !== void 0 ? _d : DEFAULT_INITIAL_BUFFER_SIZE;
        this.sortKeys = (_e = options === null || options === void 0 ? void 0 : options.sortKeys) !== null && _e !== void 0 ? _e : false;
        this.forceFloat32 = (_f = options === null || options === void 0 ? void 0 : options.forceFloat32) !== null && _f !== void 0 ? _f : false;
        this.ignoreUndefined = (_g = options === null || options === void 0 ? void 0 : options.ignoreUndefined) !== null && _g !== void 0 ? _g : false;
        this.forceIntegerToFloat = (_h = options === null || options === void 0 ? void 0 : options.forceIntegerToFloat) !== null && _h !== void 0 ? _h : false;
        this.pos = 0;
        this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
        this.bytes = new Uint8Array(this.view.buffer);
      }
      Encoder2.prototype.reinitializeState = function() {
        this.pos = 0;
      };
      Encoder2.prototype.encodeSharedRef = function(object) {
        this.reinitializeState();
        this.doEncode(object, 1);
        return this.bytes.subarray(0, this.pos);
      };
      Encoder2.prototype.encode = function(object) {
        this.reinitializeState();
        this.doEncode(object, 1);
        return this.bytes.slice(0, this.pos);
      };
      Encoder2.prototype.doEncode = function(object, depth) {
        if (depth > this.maxDepth) {
          throw new Error("Too deep objects in depth ".concat(depth));
        }
        if (object == null) {
          this.encodeNil();
        } else if (typeof object === "boolean") {
          this.encodeBoolean(object);
        } else if (typeof object === "number") {
          if (!this.forceIntegerToFloat) {
            this.encodeNumber(object);
          } else {
            this.encodeNumberAsFloat(object);
          }
        } else if (typeof object === "string") {
          this.encodeString(object);
        } else if (this.useBigInt64 && typeof object === "bigint") {
          this.encodeBigInt64(object);
        } else {
          this.encodeObject(object, depth);
        }
      };
      Encoder2.prototype.ensureBufferSizeToWrite = function(sizeToWrite) {
        var requiredSize = this.pos + sizeToWrite;
        if (this.view.byteLength < requiredSize) {
          this.resizeBuffer(requiredSize * 2);
        }
      };
      Encoder2.prototype.resizeBuffer = function(newSize) {
        var newBuffer = new ArrayBuffer(newSize);
        var newBytes = new Uint8Array(newBuffer);
        var newView = new DataView(newBuffer);
        newBytes.set(this.bytes);
        this.view = newView;
        this.bytes = newBytes;
      };
      Encoder2.prototype.encodeNil = function() {
        this.writeU8(192);
      };
      Encoder2.prototype.encodeBoolean = function(object) {
        if (object === false) {
          this.writeU8(194);
        } else {
          this.writeU8(195);
        }
      };
      Encoder2.prototype.encodeNumber = function(object) {
        if (!this.forceIntegerToFloat && Number.isSafeInteger(object)) {
          if (object >= 0) {
            if (object < 128) {
              this.writeU8(object);
            } else if (object < 256) {
              this.writeU8(204);
              this.writeU8(object);
            } else if (object < 65536) {
              this.writeU8(205);
              this.writeU16(object);
            } else if (object < 4294967296) {
              this.writeU8(206);
              this.writeU32(object);
            } else if (!this.useBigInt64) {
              this.writeU8(207);
              this.writeU64(object);
            } else {
              this.encodeNumberAsFloat(object);
            }
          } else {
            if (object >= -32) {
              this.writeU8(224 | object + 32);
            } else if (object >= -128) {
              this.writeU8(208);
              this.writeI8(object);
            } else if (object >= -32768) {
              this.writeU8(209);
              this.writeI16(object);
            } else if (object >= -2147483648) {
              this.writeU8(210);
              this.writeI32(object);
            } else if (!this.useBigInt64) {
              this.writeU8(211);
              this.writeI64(object);
            } else {
              this.encodeNumberAsFloat(object);
            }
          }
        } else {
          this.encodeNumberAsFloat(object);
        }
      };
      Encoder2.prototype.encodeNumberAsFloat = function(object) {
        if (this.forceFloat32) {
          this.writeU8(202);
          this.writeF32(object);
        } else {
          this.writeU8(203);
          this.writeF64(object);
        }
      };
      Encoder2.prototype.encodeBigInt64 = function(object) {
        if (object >= BigInt(0)) {
          this.writeU8(207);
          this.writeBigUint64(object);
        } else {
          this.writeU8(211);
          this.writeBigInt64(object);
        }
      };
      Encoder2.prototype.writeStringHeader = function(byteLength2) {
        if (byteLength2 < 32) {
          this.writeU8(160 + byteLength2);
        } else if (byteLength2 < 256) {
          this.writeU8(217);
          this.writeU8(byteLength2);
        } else if (byteLength2 < 65536) {
          this.writeU8(218);
          this.writeU16(byteLength2);
        } else if (byteLength2 < 4294967296) {
          this.writeU8(219);
          this.writeU32(byteLength2);
        } else {
          throw new Error("Too long string: ".concat(byteLength2, " bytes in UTF-8"));
        }
      };
      Encoder2.prototype.encodeString = function(object) {
        var maxHeaderSize = 1 + 4;
        var byteLength2 = utf8Count(object);
        this.ensureBufferSizeToWrite(maxHeaderSize + byteLength2);
        this.writeStringHeader(byteLength2);
        utf8Encode(object, this.bytes, this.pos);
        this.pos += byteLength2;
      };
      Encoder2.prototype.encodeObject = function(object, depth) {
        var ext = this.extensionCodec.tryToEncode(object, this.context);
        if (ext != null) {
          this.encodeExtension(ext);
        } else if (Array.isArray(object)) {
          this.encodeArray(object, depth);
        } else if (ArrayBuffer.isView(object)) {
          this.encodeBinary(object);
        } else if (typeof object === "object") {
          this.encodeMap(object, depth);
        } else {
          throw new Error("Unrecognized object: ".concat(Object.prototype.toString.apply(object)));
        }
      };
      Encoder2.prototype.encodeBinary = function(object) {
        var size = object.byteLength;
        if (size < 256) {
          this.writeU8(196);
          this.writeU8(size);
        } else if (size < 65536) {
          this.writeU8(197);
          this.writeU16(size);
        } else if (size < 4294967296) {
          this.writeU8(198);
          this.writeU32(size);
        } else {
          throw new Error("Too large binary: ".concat(size));
        }
        var bytes = ensureUint8Array(object);
        this.writeU8a(bytes);
      };
      Encoder2.prototype.encodeArray = function(object, depth) {
        var size = object.length;
        if (size < 16) {
          this.writeU8(144 + size);
        } else if (size < 65536) {
          this.writeU8(220);
          this.writeU16(size);
        } else if (size < 4294967296) {
          this.writeU8(221);
          this.writeU32(size);
        } else {
          throw new Error("Too large array: ".concat(size));
        }
        for (var _i = 0, object_1 = object; _i < object_1.length; _i++) {
          var item = object_1[_i];
          this.doEncode(item, depth + 1);
        }
      };
      Encoder2.prototype.countWithoutUndefined = function(object, keys2) {
        var count = 0;
        for (var _i = 0, keys_1 = keys2; _i < keys_1.length; _i++) {
          var key = keys_1[_i];
          if (object[key] !== void 0) {
            count++;
          }
        }
        return count;
      };
      Encoder2.prototype.encodeMap = function(object, depth) {
        var keys2 = Object.keys(object);
        if (this.sortKeys) {
          keys2.sort();
        }
        var size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys2) : keys2.length;
        if (size < 16) {
          this.writeU8(128 + size);
        } else if (size < 65536) {
          this.writeU8(222);
          this.writeU16(size);
        } else if (size < 4294967296) {
          this.writeU8(223);
          this.writeU32(size);
        } else {
          throw new Error("Too large map object: ".concat(size));
        }
        for (var _i = 0, keys_2 = keys2; _i < keys_2.length; _i++) {
          var key = keys_2[_i];
          var value = object[key];
          if (!(this.ignoreUndefined && value === void 0)) {
            this.encodeString(key);
            this.doEncode(value, depth + 1);
          }
        }
      };
      Encoder2.prototype.encodeExtension = function(ext) {
        var size = ext.data.length;
        if (size === 1) {
          this.writeU8(212);
        } else if (size === 2) {
          this.writeU8(213);
        } else if (size === 4) {
          this.writeU8(214);
        } else if (size === 8) {
          this.writeU8(215);
        } else if (size === 16) {
          this.writeU8(216);
        } else if (size < 256) {
          this.writeU8(199);
          this.writeU8(size);
        } else if (size < 65536) {
          this.writeU8(200);
          this.writeU16(size);
        } else if (size < 4294967296) {
          this.writeU8(201);
          this.writeU32(size);
        } else {
          throw new Error("Too large extension object: ".concat(size));
        }
        this.writeI8(ext.type);
        this.writeU8a(ext.data);
      };
      Encoder2.prototype.writeU8 = function(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setUint8(this.pos, value);
        this.pos++;
      };
      Encoder2.prototype.writeU8a = function(values2) {
        var size = values2.length;
        this.ensureBufferSizeToWrite(size);
        this.bytes.set(values2, this.pos);
        this.pos += size;
      };
      Encoder2.prototype.writeI8 = function(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setInt8(this.pos, value);
        this.pos++;
      };
      Encoder2.prototype.writeU16 = function(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setUint16(this.pos, value);
        this.pos += 2;
      };
      Encoder2.prototype.writeI16 = function(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setInt16(this.pos, value);
        this.pos += 2;
      };
      Encoder2.prototype.writeU32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setUint32(this.pos, value);
        this.pos += 4;
      };
      Encoder2.prototype.writeI32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setInt32(this.pos, value);
        this.pos += 4;
      };
      Encoder2.prototype.writeF32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setFloat32(this.pos, value);
        this.pos += 4;
      };
      Encoder2.prototype.writeF64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setFloat64(this.pos, value);
        this.pos += 8;
      };
      Encoder2.prototype.writeU64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        setUint64(this.view, this.pos, value);
        this.pos += 8;
      };
      Encoder2.prototype.writeI64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        setInt64(this.view, this.pos, value);
        this.pos += 8;
      };
      Encoder2.prototype.writeBigUint64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setBigUint64(this.pos, value);
        this.pos += 8;
      };
      Encoder2.prototype.writeBigInt64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setBigInt64(this.pos, value);
        this.pos += 8;
      };
      return Encoder2;
    }()
  );

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs
  function encode(value, options) {
    var encoder2 = new Encoder(options);
    return encoder2.encodeSharedRef(value);
  }

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/utils/prettyByte.mjs
  function prettyByte(byte) {
    return "".concat(byte < 0 ? "-" : "", "0x").concat(Math.abs(byte).toString(16).padStart(2, "0"));
  }

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/CachedKeyDecoder.mjs
  var DEFAULT_MAX_KEY_LENGTH = 16;
  var DEFAULT_MAX_LENGTH_PER_KEY = 16;
  var CachedKeyDecoder = (
    /** @class */
    function() {
      function CachedKeyDecoder2(maxKeyLength, maxLengthPerKey) {
        if (maxKeyLength === void 0) {
          maxKeyLength = DEFAULT_MAX_KEY_LENGTH;
        }
        if (maxLengthPerKey === void 0) {
          maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY;
        }
        this.maxKeyLength = maxKeyLength;
        this.maxLengthPerKey = maxLengthPerKey;
        this.hit = 0;
        this.miss = 0;
        this.caches = [];
        for (var i = 0; i < this.maxKeyLength; i++) {
          this.caches.push([]);
        }
      }
      CachedKeyDecoder2.prototype.canBeCached = function(byteLength2) {
        return byteLength2 > 0 && byteLength2 <= this.maxKeyLength;
      };
      CachedKeyDecoder2.prototype.find = function(bytes, inputOffset, byteLength2) {
        var records = this.caches[byteLength2 - 1];
        FIND_CHUNK: for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
          var record = records_1[_i];
          var recordBytes = record.bytes;
          for (var j = 0; j < byteLength2; j++) {
            if (recordBytes[j] !== bytes[inputOffset + j]) {
              continue FIND_CHUNK;
            }
          }
          return record.str;
        }
        return null;
      };
      CachedKeyDecoder2.prototype.store = function(bytes, value) {
        var records = this.caches[bytes.length - 1];
        var record = { bytes, str: value };
        if (records.length >= this.maxLengthPerKey) {
          records[Math.random() * records.length | 0] = record;
        } else {
          records.push(record);
        }
      };
      CachedKeyDecoder2.prototype.decode = function(bytes, inputOffset, byteLength2) {
        var cachedValue = this.find(bytes, inputOffset, byteLength2);
        if (cachedValue != null) {
          this.hit++;
          return cachedValue;
        }
        this.miss++;
        var str = utf8DecodeJs(bytes, inputOffset, byteLength2);
        var slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength2);
        this.store(slicedCopyOfBytes, str);
        return str;
      };
      return CachedKeyDecoder2;
    }()
  );

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/Decoder.mjs
  var __awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __generator = function(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var __asyncValues = function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve({ value: v2, done: d });
      }, reject);
    }
  };
  var __await = function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  };
  var __asyncGenerator = function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function verb(n) {
      if (g[n]) i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  };
  var STATE_ARRAY = "array";
  var STATE_MAP_KEY = "map_key";
  var STATE_MAP_VALUE = "map_value";
  var isValidMapKeyType = function(key) {
    return typeof key === "string" || typeof key === "number";
  };
  var HEAD_BYTE_REQUIRED = -1;
  var EMPTY_VIEW = new DataView(new ArrayBuffer(0));
  var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
  try {
    EMPTY_VIEW.getInt8(0);
  } catch (e) {
    if (!(e instanceof RangeError)) {
      throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
    }
  }
  var DataViewIndexOutOfBoundsError = RangeError;
  var MORE_DATA = new DataViewIndexOutOfBoundsError("Insufficient data");
  var sharedCachedKeyDecoder = new CachedKeyDecoder();
  var Decoder = (
    /** @class */
    function() {
      function Decoder2(options) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.totalPos = 0;
        this.pos = 0;
        this.view = EMPTY_VIEW;
        this.bytes = EMPTY_BYTES;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack = [];
        this.extensionCodec = (_a = options === null || options === void 0 ? void 0 : options.extensionCodec) !== null && _a !== void 0 ? _a : ExtensionCodec.defaultCodec;
        this.context = options === null || options === void 0 ? void 0 : options.context;
        this.useBigInt64 = (_b = options === null || options === void 0 ? void 0 : options.useBigInt64) !== null && _b !== void 0 ? _b : false;
        this.maxStrLength = (_c = options === null || options === void 0 ? void 0 : options.maxStrLength) !== null && _c !== void 0 ? _c : UINT32_MAX;
        this.maxBinLength = (_d = options === null || options === void 0 ? void 0 : options.maxBinLength) !== null && _d !== void 0 ? _d : UINT32_MAX;
        this.maxArrayLength = (_e = options === null || options === void 0 ? void 0 : options.maxArrayLength) !== null && _e !== void 0 ? _e : UINT32_MAX;
        this.maxMapLength = (_f = options === null || options === void 0 ? void 0 : options.maxMapLength) !== null && _f !== void 0 ? _f : UINT32_MAX;
        this.maxExtLength = (_g = options === null || options === void 0 ? void 0 : options.maxExtLength) !== null && _g !== void 0 ? _g : UINT32_MAX;
        this.keyDecoder = (options === null || options === void 0 ? void 0 : options.keyDecoder) !== void 0 ? options.keyDecoder : sharedCachedKeyDecoder;
      }
      Decoder2.prototype.reinitializeState = function() {
        this.totalPos = 0;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack.length = 0;
      };
      Decoder2.prototype.setBuffer = function(buffer) {
        this.bytes = ensureUint8Array(buffer);
        this.view = createDataView(this.bytes);
        this.pos = 0;
      };
      Decoder2.prototype.appendBuffer = function(buffer) {
        if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) {
          this.setBuffer(buffer);
        } else {
          var remainingData = this.bytes.subarray(this.pos);
          var newData = ensureUint8Array(buffer);
          var newBuffer = new Uint8Array(remainingData.length + newData.length);
          newBuffer.set(remainingData);
          newBuffer.set(newData, remainingData.length);
          this.setBuffer(newBuffer);
        }
      };
      Decoder2.prototype.hasRemaining = function(size) {
        return this.view.byteLength - this.pos >= size;
      };
      Decoder2.prototype.createExtraByteError = function(posToShow) {
        var _a = this, view = _a.view, pos = _a.pos;
        return new RangeError("Extra ".concat(view.byteLength - pos, " of ").concat(view.byteLength, " byte(s) found at buffer[").concat(posToShow, "]"));
      };
      Decoder2.prototype.decode = function(buffer) {
        this.reinitializeState();
        this.setBuffer(buffer);
        var object = this.doDecodeSync();
        if (this.hasRemaining(1)) {
          throw this.createExtraByteError(this.pos);
        }
        return object;
      };
      Decoder2.prototype.decodeMulti = function(buffer) {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.reinitializeState();
              this.setBuffer(buffer);
              _a.label = 1;
            case 1:
              if (!this.hasRemaining(1)) return [3, 3];
              return [4, this.doDecodeSync()];
            case 2:
              _a.sent();
              return [3, 1];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      };
      Decoder2.prototype.decodeAsync = function(stream) {
        var _a, stream_1, stream_1_1;
        var _b, e_1, _c, _d;
        return __awaiter(this, void 0, void 0, function() {
          var decoded, object, buffer, e_1_1, _e, headByte, pos, totalPos;
          return __generator(this, function(_f) {
            switch (_f.label) {
              case 0:
                decoded = false;
                _f.label = 1;
              case 1:
                _f.trys.push([1, 6, 7, 12]);
                _a = true, stream_1 = __asyncValues(stream);
                _f.label = 2;
              case 2:
                return [4, stream_1.next()];
              case 3:
                if (!(stream_1_1 = _f.sent(), _b = stream_1_1.done, !_b)) return [3, 5];
                _d = stream_1_1.value;
                _a = false;
                try {
                  buffer = _d;
                  if (decoded) {
                    throw this.createExtraByteError(this.totalPos);
                  }
                  this.appendBuffer(buffer);
                  try {
                    object = this.doDecodeSync();
                    decoded = true;
                  } catch (e) {
                    if (!(e instanceof DataViewIndexOutOfBoundsError)) {
                      throw e;
                    }
                  }
                  this.totalPos += this.pos;
                } finally {
                  _a = true;
                }
                _f.label = 4;
              case 4:
                return [3, 2];
              case 5:
                return [3, 12];
              case 6:
                e_1_1 = _f.sent();
                e_1 = { error: e_1_1 };
                return [3, 12];
              case 7:
                _f.trys.push([7, , 10, 11]);
                if (!(!_a && !_b && (_c = stream_1.return))) return [3, 9];
                return [4, _c.call(stream_1)];
              case 8:
                _f.sent();
                _f.label = 9;
              case 9:
                return [3, 11];
              case 10:
                if (e_1) throw e_1.error;
                return [
                  7
                  /*endfinally*/
                ];
              case 11:
                return [
                  7
                  /*endfinally*/
                ];
              case 12:
                if (decoded) {
                  if (this.hasRemaining(1)) {
                    throw this.createExtraByteError(this.totalPos);
                  }
                  return [2, object];
                }
                _e = this, headByte = _e.headByte, pos = _e.pos, totalPos = _e.totalPos;
                throw new RangeError("Insufficient data in parsing ".concat(prettyByte(headByte), " at ").concat(totalPos, " (").concat(pos, " in the current buffer)"));
            }
          });
        });
      };
      Decoder2.prototype.decodeArrayStream = function(stream) {
        return this.decodeMultiAsync(stream, true);
      };
      Decoder2.prototype.decodeStream = function(stream) {
        return this.decodeMultiAsync(stream, false);
      };
      Decoder2.prototype.decodeMultiAsync = function(stream, isArray) {
        return __asyncGenerator(this, arguments, function decodeMultiAsync_1() {
          var isArrayHeaderRequired, arrayItemsLeft, _a, stream_2, stream_2_1, buffer, e_2, e_3_1;
          var _b, e_3, _c, _d;
          return __generator(this, function(_e) {
            switch (_e.label) {
              case 0:
                isArrayHeaderRequired = isArray;
                arrayItemsLeft = -1;
                _e.label = 1;
              case 1:
                _e.trys.push([1, 15, 16, 21]);
                _a = true, stream_2 = __asyncValues(stream);
                _e.label = 2;
              case 2:
                return [4, __await(stream_2.next())];
              case 3:
                if (!(stream_2_1 = _e.sent(), _b = stream_2_1.done, !_b)) return [3, 14];
                _d = stream_2_1.value;
                _a = false;
                _e.label = 4;
              case 4:
                _e.trys.push([4, , 12, 13]);
                buffer = _d;
                if (isArray && arrayItemsLeft === 0) {
                  throw this.createExtraByteError(this.totalPos);
                }
                this.appendBuffer(buffer);
                if (isArrayHeaderRequired) {
                  arrayItemsLeft = this.readArraySize();
                  isArrayHeaderRequired = false;
                  this.complete();
                }
                _e.label = 5;
              case 5:
                _e.trys.push([5, 10, , 11]);
                _e.label = 6;
              case 6:
                if (false) return [3, 9];
                return [4, __await(this.doDecodeSync())];
              case 7:
                return [4, _e.sent()];
              case 8:
                _e.sent();
                if (--arrayItemsLeft === 0) {
                  return [3, 9];
                }
                return [3, 6];
              case 9:
                return [3, 11];
              case 10:
                e_2 = _e.sent();
                if (!(e_2 instanceof DataViewIndexOutOfBoundsError)) {
                  throw e_2;
                }
                return [3, 11];
              case 11:
                this.totalPos += this.pos;
                return [3, 13];
              case 12:
                _a = true;
                return [
                  7
                  /*endfinally*/
                ];
              case 13:
                return [3, 2];
              case 14:
                return [3, 21];
              case 15:
                e_3_1 = _e.sent();
                e_3 = { error: e_3_1 };
                return [3, 21];
              case 16:
                _e.trys.push([16, , 19, 20]);
                if (!(!_a && !_b && (_c = stream_2.return))) return [3, 18];
                return [4, __await(_c.call(stream_2))];
              case 17:
                _e.sent();
                _e.label = 18;
              case 18:
                return [3, 20];
              case 19:
                if (e_3) throw e_3.error;
                return [
                  7
                  /*endfinally*/
                ];
              case 20:
                return [
                  7
                  /*endfinally*/
                ];
              case 21:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
      Decoder2.prototype.doDecodeSync = function() {
        DECODE: while (true) {
          var headByte = this.readHeadByte();
          var object = void 0;
          if (headByte >= 224) {
            object = headByte - 256;
          } else if (headByte < 192) {
            if (headByte < 128) {
              object = headByte;
            } else if (headByte < 144) {
              var size = headByte - 128;
              if (size !== 0) {
                this.pushMapState(size);
                this.complete();
                continue DECODE;
              } else {
                object = {};
              }
            } else if (headByte < 160) {
              var size = headByte - 144;
              if (size !== 0) {
                this.pushArrayState(size);
                this.complete();
                continue DECODE;
              } else {
                object = [];
              }
            } else {
              var byteLength2 = headByte - 160;
              object = this.decodeUtf8String(byteLength2, 0);
            }
          } else if (headByte === 192) {
            object = null;
          } else if (headByte === 194) {
            object = false;
          } else if (headByte === 195) {
            object = true;
          } else if (headByte === 202) {
            object = this.readF32();
          } else if (headByte === 203) {
            object = this.readF64();
          } else if (headByte === 204) {
            object = this.readU8();
          } else if (headByte === 205) {
            object = this.readU16();
          } else if (headByte === 206) {
            object = this.readU32();
          } else if (headByte === 207) {
            if (this.useBigInt64) {
              object = this.readU64AsBigInt();
            } else {
              object = this.readU64();
            }
          } else if (headByte === 208) {
            object = this.readI8();
          } else if (headByte === 209) {
            object = this.readI16();
          } else if (headByte === 210) {
            object = this.readI32();
          } else if (headByte === 211) {
            if (this.useBigInt64) {
              object = this.readI64AsBigInt();
            } else {
              object = this.readI64();
            }
          } else if (headByte === 217) {
            var byteLength2 = this.lookU8();
            object = this.decodeUtf8String(byteLength2, 1);
          } else if (headByte === 218) {
            var byteLength2 = this.lookU16();
            object = this.decodeUtf8String(byteLength2, 2);
          } else if (headByte === 219) {
            var byteLength2 = this.lookU32();
            object = this.decodeUtf8String(byteLength2, 4);
          } else if (headByte === 220) {
            var size = this.readU16();
            if (size !== 0) {
              this.pushArrayState(size);
              this.complete();
              continue DECODE;
            } else {
              object = [];
            }
          } else if (headByte === 221) {
            var size = this.readU32();
            if (size !== 0) {
              this.pushArrayState(size);
              this.complete();
              continue DECODE;
            } else {
              object = [];
            }
          } else if (headByte === 222) {
            var size = this.readU16();
            if (size !== 0) {
              this.pushMapState(size);
              this.complete();
              continue DECODE;
            } else {
              object = {};
            }
          } else if (headByte === 223) {
            var size = this.readU32();
            if (size !== 0) {
              this.pushMapState(size);
              this.complete();
              continue DECODE;
            } else {
              object = {};
            }
          } else if (headByte === 196) {
            var size = this.lookU8();
            object = this.decodeBinary(size, 1);
          } else if (headByte === 197) {
            var size = this.lookU16();
            object = this.decodeBinary(size, 2);
          } else if (headByte === 198) {
            var size = this.lookU32();
            object = this.decodeBinary(size, 4);
          } else if (headByte === 212) {
            object = this.decodeExtension(1, 0);
          } else if (headByte === 213) {
            object = this.decodeExtension(2, 0);
          } else if (headByte === 214) {
            object = this.decodeExtension(4, 0);
          } else if (headByte === 215) {
            object = this.decodeExtension(8, 0);
          } else if (headByte === 216) {
            object = this.decodeExtension(16, 0);
          } else if (headByte === 199) {
            var size = this.lookU8();
            object = this.decodeExtension(size, 1);
          } else if (headByte === 200) {
            var size = this.lookU16();
            object = this.decodeExtension(size, 2);
          } else if (headByte === 201) {
            var size = this.lookU32();
            object = this.decodeExtension(size, 4);
          } else {
            throw new DecodeError("Unrecognized type byte: ".concat(prettyByte(headByte)));
          }
          this.complete();
          var stack = this.stack;
          while (stack.length > 0) {
            var state = stack[stack.length - 1];
            if (state.type === STATE_ARRAY) {
              state.array[state.position] = object;
              state.position++;
              if (state.position === state.size) {
                stack.pop();
                object = state.array;
              } else {
                continue DECODE;
              }
            } else if (state.type === STATE_MAP_KEY) {
              if (!isValidMapKeyType(object)) {
                throw new DecodeError("The type of key must be string or number but " + typeof object);
              }
              if (object === "__proto__") {
                throw new DecodeError("The key __proto__ is not allowed");
              }
              state.key = object;
              state.type = STATE_MAP_VALUE;
              continue DECODE;
            } else {
              state.map[state.key] = object;
              state.readCount++;
              if (state.readCount === state.size) {
                stack.pop();
                object = state.map;
              } else {
                state.key = null;
                state.type = STATE_MAP_KEY;
                continue DECODE;
              }
            }
          }
          return object;
        }
      };
      Decoder2.prototype.readHeadByte = function() {
        if (this.headByte === HEAD_BYTE_REQUIRED) {
          this.headByte = this.readU8();
        }
        return this.headByte;
      };
      Decoder2.prototype.complete = function() {
        this.headByte = HEAD_BYTE_REQUIRED;
      };
      Decoder2.prototype.readArraySize = function() {
        var headByte = this.readHeadByte();
        switch (headByte) {
          case 220:
            return this.readU16();
          case 221:
            return this.readU32();
          default: {
            if (headByte < 160) {
              return headByte - 144;
            } else {
              throw new DecodeError("Unrecognized array type byte: ".concat(prettyByte(headByte)));
            }
          }
        }
      };
      Decoder2.prototype.pushMapState = function(size) {
        if (size > this.maxMapLength) {
          throw new DecodeError("Max length exceeded: map length (".concat(size, ") > maxMapLengthLength (").concat(this.maxMapLength, ")"));
        }
        this.stack.push({
          type: STATE_MAP_KEY,
          size,
          key: null,
          readCount: 0,
          map: {}
        });
      };
      Decoder2.prototype.pushArrayState = function(size) {
        if (size > this.maxArrayLength) {
          throw new DecodeError("Max length exceeded: array length (".concat(size, ") > maxArrayLength (").concat(this.maxArrayLength, ")"));
        }
        this.stack.push({
          type: STATE_ARRAY,
          size,
          array: new Array(size),
          position: 0
        });
      };
      Decoder2.prototype.decodeUtf8String = function(byteLength2, headerOffset) {
        var _a;
        if (byteLength2 > this.maxStrLength) {
          throw new DecodeError("Max length exceeded: UTF-8 byte length (".concat(byteLength2, ") > maxStrLength (").concat(this.maxStrLength, ")"));
        }
        if (this.bytes.byteLength < this.pos + headerOffset + byteLength2) {
          throw MORE_DATA;
        }
        var offset = this.pos + headerOffset;
        var object;
        if (this.stateIsMapKey() && ((_a = this.keyDecoder) === null || _a === void 0 ? void 0 : _a.canBeCached(byteLength2))) {
          object = this.keyDecoder.decode(this.bytes, offset, byteLength2);
        } else {
          object = utf8Decode(this.bytes, offset, byteLength2);
        }
        this.pos += headerOffset + byteLength2;
        return object;
      };
      Decoder2.prototype.stateIsMapKey = function() {
        if (this.stack.length > 0) {
          var state = this.stack[this.stack.length - 1];
          return state.type === STATE_MAP_KEY;
        }
        return false;
      };
      Decoder2.prototype.decodeBinary = function(byteLength2, headOffset) {
        if (byteLength2 > this.maxBinLength) {
          throw new DecodeError("Max length exceeded: bin length (".concat(byteLength2, ") > maxBinLength (").concat(this.maxBinLength, ")"));
        }
        if (!this.hasRemaining(byteLength2 + headOffset)) {
          throw MORE_DATA;
        }
        var offset = this.pos + headOffset;
        var object = this.bytes.subarray(offset, offset + byteLength2);
        this.pos += headOffset + byteLength2;
        return object;
      };
      Decoder2.prototype.decodeExtension = function(size, headOffset) {
        if (size > this.maxExtLength) {
          throw new DecodeError("Max length exceeded: ext length (".concat(size, ") > maxExtLength (").concat(this.maxExtLength, ")"));
        }
        var extType = this.view.getInt8(this.pos + headOffset);
        var data = this.decodeBinary(
          size,
          headOffset + 1
          /* extType */
        );
        return this.extensionCodec.decode(data, extType, this.context);
      };
      Decoder2.prototype.lookU8 = function() {
        return this.view.getUint8(this.pos);
      };
      Decoder2.prototype.lookU16 = function() {
        return this.view.getUint16(this.pos);
      };
      Decoder2.prototype.lookU32 = function() {
        return this.view.getUint32(this.pos);
      };
      Decoder2.prototype.readU8 = function() {
        var value = this.view.getUint8(this.pos);
        this.pos++;
        return value;
      };
      Decoder2.prototype.readI8 = function() {
        var value = this.view.getInt8(this.pos);
        this.pos++;
        return value;
      };
      Decoder2.prototype.readU16 = function() {
        var value = this.view.getUint16(this.pos);
        this.pos += 2;
        return value;
      };
      Decoder2.prototype.readI16 = function() {
        var value = this.view.getInt16(this.pos);
        this.pos += 2;
        return value;
      };
      Decoder2.prototype.readU32 = function() {
        var value = this.view.getUint32(this.pos);
        this.pos += 4;
        return value;
      };
      Decoder2.prototype.readI32 = function() {
        var value = this.view.getInt32(this.pos);
        this.pos += 4;
        return value;
      };
      Decoder2.prototype.readU64 = function() {
        var value = getUint64(this.view, this.pos);
        this.pos += 8;
        return value;
      };
      Decoder2.prototype.readI64 = function() {
        var value = getInt64(this.view, this.pos);
        this.pos += 8;
        return value;
      };
      Decoder2.prototype.readU64AsBigInt = function() {
        var value = this.view.getBigUint64(this.pos);
        this.pos += 8;
        return value;
      };
      Decoder2.prototype.readI64AsBigInt = function() {
        var value = this.view.getBigInt64(this.pos);
        this.pos += 8;
        return value;
      };
      Decoder2.prototype.readF32 = function() {
        var value = this.view.getFloat32(this.pos);
        this.pos += 4;
        return value;
      };
      Decoder2.prototype.readF64 = function() {
        var value = this.view.getFloat64(this.pos);
        this.pos += 8;
        return value;
      };
      return Decoder2;
    }()
  );

  // ../../node_modules/.pnpm/@msgpack+msgpack@3.0.0-beta2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs
  function decode(buffer, options) {
    var decoder2 = new Decoder(options);
    return decoder2.decode(buffer);
  }

  // ../../node_modules/.pnpm/nats.ws@1.29.2/node_modules/nats.ws/esm/nats.js
  var Empty = new Uint8Array(0);
  var TE = new TextEncoder();
  var TD = new TextDecoder();
  function concat(...bufs) {
    let max = 0;
    for (let i = 0; i < bufs.length; i++) {
      max += bufs[i].length;
    }
    const out = new Uint8Array(max);
    let index = 0;
    for (let i = 0; i < bufs.length; i++) {
      out.set(bufs[i], index);
      index += bufs[i].length;
    }
    return out;
  }
  function encode2(...a) {
    const bufs = [];
    for (let i = 0; i < a.length; i++) {
      bufs.push(TE.encode(a[i]));
    }
    if (bufs.length === 0) {
      return Empty;
    }
    if (bufs.length === 1) {
      return bufs[0];
    }
    return concat(...bufs);
  }
  function decode2(a) {
    if (!a || a.length === 0) {
      return "";
    }
    return TD.decode(a);
  }
  var digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var base = 36;
  var maxSeq = 3656158440062976;
  var minInc = 33;
  var maxInc = 333;
  var totalLen = 12 + 10;
  function _getRandomValues(a) {
    for (let i = 0; i < a.length; i++) {
      a[i] = Math.floor(Math.random() * 255);
    }
  }
  function fillRandom(a) {
    if (globalThis?.crypto?.getRandomValues) {
      globalThis.crypto.getRandomValues(a);
    } else {
      _getRandomValues(a);
    }
  }
  var Nuid = class {
    buf;
    seq;
    inc;
    inited;
    constructor() {
      this.buf = new Uint8Array(totalLen);
      this.inited = false;
    }
    init() {
      this.inited = true;
      this.setPre();
      this.initSeqAndInc();
      this.fillSeq();
    }
    initSeqAndInc() {
      this.seq = Math.floor(Math.random() * maxSeq);
      this.inc = Math.floor(Math.random() * (maxInc - minInc) + minInc);
    }
    setPre() {
      const cbuf = new Uint8Array(12);
      fillRandom(cbuf);
      for (let i = 0; i < 12; i++) {
        const di = cbuf[i] % 36;
        this.buf[i] = digits.charCodeAt(di);
      }
    }
    fillSeq() {
      let n = this.seq;
      for (let i = totalLen - 1; i >= 12; i--) {
        this.buf[i] = digits.charCodeAt(n % base);
        n = Math.floor(n / base);
      }
    }
    next() {
      if (!this.inited) {
        this.init();
      }
      this.seq += this.inc;
      if (this.seq > 3656158440062976) {
        this.setPre();
        this.initSeqAndInc();
      }
      this.fillSeq();
      return String.fromCharCode.apply(String, this.buf);
    }
    reset() {
      this.init();
    }
  };
  var nuid = new Nuid();
  var Events;
  (function(Events2) {
    Events2["Disconnect"] = "disconnect";
    Events2["Reconnect"] = "reconnect";
    Events2["Update"] = "update";
    Events2["LDM"] = "ldm";
    Events2["Error"] = "error";
  })(Events || (Events = {}));
  var DebugEvents;
  (function(DebugEvents2) {
    DebugEvents2["Reconnecting"] = "reconnecting";
    DebugEvents2["PingTimer"] = "pingTimer";
    DebugEvents2["StaleConnection"] = "staleConnection";
    DebugEvents2["ClientInitiatedReconnect"] = "client initiated reconnect";
  })(DebugEvents || (DebugEvents = {}));
  var ErrorCode;
  (function(ErrorCode2) {
    ErrorCode2["ApiError"] = "BAD API";
    ErrorCode2["BadAuthentication"] = "BAD_AUTHENTICATION";
    ErrorCode2["BadCreds"] = "BAD_CREDS";
    ErrorCode2["BadHeader"] = "BAD_HEADER";
    ErrorCode2["BadJson"] = "BAD_JSON";
    ErrorCode2["BadPayload"] = "BAD_PAYLOAD";
    ErrorCode2["BadSubject"] = "BAD_SUBJECT";
    ErrorCode2["Cancelled"] = "CANCELLED";
    ErrorCode2["ConnectionClosed"] = "CONNECTION_CLOSED";
    ErrorCode2["ConnectionDraining"] = "CONNECTION_DRAINING";
    ErrorCode2["ConnectionRefused"] = "CONNECTION_REFUSED";
    ErrorCode2["ConnectionTimeout"] = "CONNECTION_TIMEOUT";
    ErrorCode2["Disconnect"] = "DISCONNECT";
    ErrorCode2["InvalidOption"] = "INVALID_OPTION";
    ErrorCode2["InvalidPayload"] = "INVALID_PAYLOAD";
    ErrorCode2["MaxPayloadExceeded"] = "MAX_PAYLOAD_EXCEEDED";
    ErrorCode2["NoResponders"] = "503";
    ErrorCode2["NotFunction"] = "NOT_FUNC";
    ErrorCode2["RequestError"] = "REQUEST_ERROR";
    ErrorCode2["ServerOptionNotAvailable"] = "SERVER_OPT_NA";
    ErrorCode2["SubClosed"] = "SUB_CLOSED";
    ErrorCode2["SubDraining"] = "SUB_DRAINING";
    ErrorCode2["Timeout"] = "TIMEOUT";
    ErrorCode2["Tls"] = "TLS";
    ErrorCode2["Unknown"] = "UNKNOWN_ERROR";
    ErrorCode2["WssRequired"] = "WSS_REQUIRED";
    ErrorCode2["JetStreamInvalidAck"] = "JESTREAM_INVALID_ACK";
    ErrorCode2["JetStream404NoMessages"] = "404";
    ErrorCode2["JetStream408RequestTimeout"] = "408";
    ErrorCode2["JetStream409MaxAckPendingExceeded"] = "409";
    ErrorCode2["JetStream409"] = "409";
    ErrorCode2["JetStreamNotEnabled"] = "503";
    ErrorCode2["JetStreamIdleHeartBeat"] = "IDLE_HEARTBEAT";
    ErrorCode2["AuthorizationViolation"] = "AUTHORIZATION_VIOLATION";
    ErrorCode2["AuthenticationExpired"] = "AUTHENTICATION_EXPIRED";
    ErrorCode2["ProtocolError"] = "NATS_PROTOCOL_ERR";
    ErrorCode2["PermissionsViolation"] = "PERMISSIONS_VIOLATION";
    ErrorCode2["AuthenticationTimeout"] = "AUTHENTICATION_TIMEOUT";
    ErrorCode2["AccountExpired"] = "ACCOUNT_EXPIRED";
  })(ErrorCode || (ErrorCode = {}));
  function isNatsError(err) {
    return typeof err.code === "string";
  }
  var Messages = class {
    messages;
    constructor() {
      this.messages = /* @__PURE__ */ new Map();
      this.messages.set(ErrorCode.InvalidPayload, "Invalid payload type - payloads can be 'binary', 'string', or 'json'");
      this.messages.set(ErrorCode.BadJson, "Bad JSON");
      this.messages.set(ErrorCode.WssRequired, "TLS is required, therefore a secure websocket connection is also required");
    }
    static getMessage(s) {
      return messages.getMessage(s);
    }
    getMessage(s) {
      return this.messages.get(s) || s;
    }
  };
  var messages = new Messages();
  var NatsError = class _NatsError extends Error {
    name;
    message;
    code;
    permissionContext;
    chainedError;
    api_error;
    constructor(message, code2, chainedError) {
      super(message);
      this.name = "NatsError";
      this.message = message;
      this.code = code2;
      this.chainedError = chainedError;
    }
    static errorForCode(code2, chainedError) {
      const m = Messages.getMessage(code2);
      return new _NatsError(m, code2, chainedError);
    }
    isAuthError() {
      return this.code === ErrorCode.AuthenticationExpired || this.code === ErrorCode.AuthorizationViolation || this.code === ErrorCode.AccountExpired;
    }
    isAuthTimeout() {
      return this.code === ErrorCode.AuthenticationTimeout;
    }
    isPermissionError() {
      return this.code === ErrorCode.PermissionsViolation;
    }
    isProtocolError() {
      return this.code === ErrorCode.ProtocolError;
    }
    isJetStreamError() {
      return this.api_error !== void 0;
    }
    jsError() {
      return this.api_error ? this.api_error : null;
    }
  };
  var Match;
  (function(Match2) {
    Match2[Match2["Exact"] = 0] = "Exact";
    Match2[Match2["CanonicalMIME"] = 1] = "CanonicalMIME";
    Match2[Match2["IgnoreCase"] = 2] = "IgnoreCase";
  })(Match || (Match = {}));
  var RequestStrategy;
  (function(RequestStrategy2) {
    RequestStrategy2["Timer"] = "timer";
    RequestStrategy2["Count"] = "count";
    RequestStrategy2["JitterTimer"] = "jitterTimer";
    RequestStrategy2["SentinelMsg"] = "sentinelMsg";
  })(RequestStrategy || (RequestStrategy = {}));
  var ServiceResponseType;
  (function(ServiceResponseType2) {
    ServiceResponseType2["STATS"] = "io.nats.micro.v1.stats_response";
    ServiceResponseType2["INFO"] = "io.nats.micro.v1.info_response";
    ServiceResponseType2["PING"] = "io.nats.micro.v1.ping_response";
  })(ServiceResponseType || (ServiceResponseType = {}));
  var ServiceErrorHeader = "Nats-Service-Error";
  var ServiceErrorCodeHeader = "Nats-Service-Error-Code";
  var ServiceError = class _ServiceError extends Error {
    code;
    constructor(code2, message) {
      super(message);
      this.code = code2;
    }
    static isServiceError(msg) {
      return _ServiceError.toServiceError(msg) !== null;
    }
    static toServiceError(msg) {
      const scode = msg?.headers?.get(ServiceErrorCodeHeader) || "";
      if (scode !== "") {
        const code2 = parseInt(scode) || 400;
        const description = msg?.headers?.get(ServiceErrorHeader) || "";
        return new _ServiceError(code2, description.length ? description : scode);
      }
      return null;
    }
  };
  function createInbox(prefix = "") {
    prefix = prefix || "_INBOX";
    if (typeof prefix !== "string") {
      throw new Error("prefix must be a string");
    }
    prefix.split(".").forEach((v) => {
      if (v === "*" || v === ">") {
        throw new Error(`inbox prefixes cannot have wildcards '${prefix}'`);
      }
    });
    return `${prefix}.${nuid.next()}`;
  }
  var DEFAULT_HOST = "127.0.0.1";
  var ServiceVerb;
  (function(ServiceVerb2) {
    ServiceVerb2["PING"] = "PING";
    ServiceVerb2["STATS"] = "STATS";
    ServiceVerb2["INFO"] = "INFO";
  })(ServiceVerb || (ServiceVerb = {}));
  function extend(a, ...b) {
    for (let i = 0; i < b.length; i++) {
      const o = b[i];
      Object.keys(o).forEach(function(k) {
        a[k] = o[k];
      });
    }
    return a;
  }
  function render(frame) {
    const cr = "\u240D";
    const lf = "\u240A";
    return TD.decode(frame).replace(/\n/g, lf).replace(/\r/g, cr);
  }
  function timeout(ms, asyncTraces = true) {
    const err = asyncTraces ? NatsError.errorForCode(ErrorCode.Timeout) : null;
    let methods;
    let timer;
    const p = new Promise((_resolve, reject) => {
      const cancel = () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
      methods = {
        cancel
      };
      timer = setTimeout(() => {
        if (err === null) {
          reject(NatsError.errorForCode(ErrorCode.Timeout));
        } else {
          reject(err);
        }
      }, ms);
    });
    return Object.assign(p, methods);
  }
  function delay(ms = 0) {
    let methods;
    const p = new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve();
      }, ms);
      const cancel = () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
      methods = {
        cancel
      };
    });
    return Object.assign(p, methods);
  }
  function deferred() {
    let methods = {};
    const p = new Promise((resolve, reject) => {
      methods = {
        resolve,
        reject
      };
    });
    return Object.assign(p, methods);
  }
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [
        a[j],
        a[i]
      ];
    }
    return a;
  }
  function jitter(n) {
    if (n === 0) {
      return 0;
    }
    return Math.floor(n / 2 + Math.random() * n);
  }
  function backoff(policy = [
    0,
    250,
    250,
    500,
    500,
    3e3,
    5e3
  ]) {
    if (!Array.isArray(policy)) {
      policy = [
        0,
        250,
        250,
        500,
        500,
        3e3,
        5e3
      ];
    }
    const max = policy.length - 1;
    return {
      backoff(attempt) {
        return jitter(attempt > max ? policy[max] : policy[attempt]);
      }
    };
  }
  function nanos(millis2) {
    return millis2 * 1e6;
  }
  function millis(ns) {
    return Math.floor(ns / 1e6);
  }
  function canonicalMIMEHeaderKey(k) {
    const dash = 45;
    const toLower = 97 - 65;
    let upper = true;
    const buf = new Array(k.length);
    for (let i = 0; i < k.length; i++) {
      let c = k.charCodeAt(i);
      if (c === 58 || c < 33 || c > 126) {
        throw new NatsError(`'${k[i]}' is not a valid character for a header key`, ErrorCode.BadHeader);
      }
      if (upper && 97 <= c && c <= 122) {
        c -= toLower;
      } else if (!upper && 65 <= c && c <= 90) {
        c += toLower;
      }
      buf[i] = c;
      upper = c == dash;
    }
    return String.fromCharCode(...buf);
  }
  function headers(code2 = 0, description = "") {
    if (code2 === 0 && description !== "" || code2 > 0 && description === "") {
      throw new Error("setting status requires both code and description");
    }
    return new MsgHdrsImpl(code2, description);
  }
  var HEADER = "NATS/1.0";
  var MsgHdrsImpl = class _MsgHdrsImpl {
    _code;
    headers;
    _description;
    constructor(code2 = 0, description = "") {
      this._code = code2;
      this._description = description;
      this.headers = /* @__PURE__ */ new Map();
    }
    [Symbol.iterator]() {
      return this.headers.entries();
    }
    size() {
      return this.headers.size;
    }
    equals(mh) {
      if (mh && this.headers.size === mh.headers.size && this._code === mh._code) {
        for (const [k, v] of this.headers) {
          const a = mh.values(k);
          if (v.length !== a.length) {
            return false;
          }
          const vv = [
            ...v
          ].sort();
          const aa = [
            ...a
          ].sort();
          for (let i = 0; i < vv.length; i++) {
            if (vv[i] !== aa[i]) {
              return false;
            }
          }
        }
        return true;
      }
      return false;
    }
    static decode(a) {
      const mh = new _MsgHdrsImpl();
      const s = TD.decode(a);
      const lines = s.split("\r\n");
      const h = lines[0];
      if (h !== HEADER) {
        let str = h.replace(HEADER, "").trim();
        if (str.length > 0) {
          mh._code = parseInt(str, 10);
          if (isNaN(mh._code)) {
            mh._code = 0;
          }
          const scode = mh._code.toString();
          str = str.replace(scode, "");
          mh._description = str.trim();
        }
      }
      if (lines.length >= 1) {
        lines.slice(1).map((s2) => {
          if (s2) {
            const idx = s2.indexOf(":");
            if (idx > -1) {
              const k = s2.slice(0, idx);
              const v = s2.slice(idx + 1).trim();
              mh.append(k, v);
            }
          }
        });
      }
      return mh;
    }
    toString() {
      if (this.headers.size === 0 && this._code === 0) {
        return "";
      }
      let s = HEADER;
      if (this._code > 0 && this._description !== "") {
        s += ` ${this._code} ${this._description}`;
      }
      for (const [k, v] of this.headers) {
        for (let i = 0; i < v.length; i++) {
          s = `${s}\r
${k}: ${v[i]}`;
        }
      }
      return `${s}\r
\r
`;
    }
    encode() {
      return TE.encode(this.toString());
    }
    static validHeaderValue(k) {
      const inv = /[\r\n]/;
      if (inv.test(k)) {
        throw new NatsError("invalid header value - \\r and \\n are not allowed.", ErrorCode.BadHeader);
      }
      return k.trim();
    }
    keys() {
      const keys2 = [];
      for (const sk of this.headers.keys()) {
        keys2.push(sk);
      }
      return keys2;
    }
    findKeys(k, match = Match.Exact) {
      const keys2 = this.keys();
      switch (match) {
        case Match.Exact:
          return keys2.filter((v) => {
            return v === k;
          });
        case Match.CanonicalMIME:
          k = canonicalMIMEHeaderKey(k);
          return keys2.filter((v) => {
            return v === k;
          });
        default: {
          const lci = k.toLowerCase();
          return keys2.filter((v) => {
            return lci === v.toLowerCase();
          });
        }
      }
    }
    get(k, match = Match.Exact) {
      const keys2 = this.findKeys(k, match);
      if (keys2.length) {
        const v = this.headers.get(keys2[0]);
        if (v) {
          return Array.isArray(v) ? v[0] : v;
        }
      }
      return "";
    }
    last(k, match = Match.Exact) {
      const keys2 = this.findKeys(k, match);
      if (keys2.length) {
        const v = this.headers.get(keys2[0]);
        if (v) {
          return Array.isArray(v) ? v[v.length - 1] : v;
        }
      }
      return "";
    }
    has(k, match = Match.Exact) {
      return this.findKeys(k, match).length > 0;
    }
    set(k, v, match = Match.Exact) {
      this.delete(k, match);
      this.append(k, v, match);
    }
    append(k, v, match = Match.Exact) {
      const ck = canonicalMIMEHeaderKey(k);
      if (match === Match.CanonicalMIME) {
        k = ck;
      }
      const keys2 = this.findKeys(k, match);
      k = keys2.length > 0 ? keys2[0] : k;
      const value = _MsgHdrsImpl.validHeaderValue(v);
      let a = this.headers.get(k);
      if (!a) {
        a = [];
        this.headers.set(k, a);
      }
      a.push(value);
    }
    values(k, match = Match.Exact) {
      const buf = [];
      const keys2 = this.findKeys(k, match);
      keys2.forEach((v) => {
        const values2 = this.headers.get(v);
        if (values2) {
          buf.push(...values2);
        }
      });
      return buf;
    }
    delete(k, match = Match.Exact) {
      const keys2 = this.findKeys(k, match);
      keys2.forEach((v) => {
        this.headers.delete(v);
      });
    }
    get hasError() {
      return this._code >= 300;
    }
    get status() {
      return `${this._code} ${this._description}`.trim();
    }
    toRecord() {
      const data = {};
      this.keys().forEach((v) => {
        data[v] = this.values(v);
      });
      return data;
    }
    get code() {
      return this._code;
    }
    get description() {
      return this._description;
    }
    static fromRecord(r) {
      const h = new _MsgHdrsImpl();
      for (const k in r) {
        h.headers.set(k, r[k]);
      }
      return h;
    }
  };
  function StringCodec() {
    return {
      encode(d) {
        return TE.encode(d);
      },
      decode(a) {
        return TD.decode(a);
      }
    };
  }
  function JSONCodec(reviver) {
    return {
      encode(d) {
        try {
          if (d === void 0) {
            d = null;
          }
          return TE.encode(JSON.stringify(d));
        } catch (err) {
          throw NatsError.errorForCode(ErrorCode.BadJson, err);
        }
      },
      decode(a) {
        try {
          return JSON.parse(TD.decode(a), reviver);
        } catch (err) {
          throw NatsError.errorForCode(ErrorCode.BadJson, err);
        }
      }
    };
  }
  function isRequestError(msg) {
    if (msg && msg.data.length === 0 && msg.headers?.code === 503) {
      return NatsError.errorForCode(ErrorCode.NoResponders);
    }
    return null;
  }
  var MsgImpl = class {
    _headers;
    _msg;
    _rdata;
    _reply;
    _subject;
    publisher;
    static jc;
    constructor(msg, data, publisher) {
      this._msg = msg;
      this._rdata = data;
      this.publisher = publisher;
    }
    get subject() {
      if (this._subject) {
        return this._subject;
      }
      this._subject = TD.decode(this._msg.subject);
      return this._subject;
    }
    get reply() {
      if (this._reply) {
        return this._reply;
      }
      this._reply = TD.decode(this._msg.reply);
      return this._reply;
    }
    get sid() {
      return this._msg.sid;
    }
    get headers() {
      if (this._msg.hdr > -1 && !this._headers) {
        const buf = this._rdata.subarray(0, this._msg.hdr);
        this._headers = MsgHdrsImpl.decode(buf);
      }
      return this._headers;
    }
    get data() {
      if (!this._rdata) {
        return new Uint8Array(0);
      }
      return this._msg.hdr > -1 ? this._rdata.subarray(this._msg.hdr) : this._rdata;
    }
    respond(data = Empty, opts) {
      if (this.reply) {
        this.publisher.publish(this.reply, data, opts);
        return true;
      }
      return false;
    }
    size() {
      const subj = this._msg.subject.length;
      const reply = this._msg.reply?.length || 0;
      const payloadAndHeaders = this._msg.size === -1 ? 0 : this._msg.size;
      return subj + reply + payloadAndHeaders;
    }
    json(reviver) {
      return JSONCodec(reviver).decode(this.data);
    }
    string() {
      return TD.decode(this.data);
    }
    requestInfo() {
      const v = this.headers?.get("Nats-Request-Info");
      if (v) {
        return JSON.parse(v, function(key, value) {
          if ((key === "start" || key === "stop") && value !== "") {
            return new Date(Date.parse(value));
          }
          return value;
        });
      }
      return null;
    }
  };
  function validateDurableName(name) {
    return minValidation("durable", name);
  }
  function validateStreamName(name) {
    return minValidation("stream", name);
  }
  function minValidation(context, name = "") {
    if (name === "") {
      throw Error(`${context} name required`);
    }
    const bad = [
      ".",
      "*",
      ">",
      "/",
      "\\",
      " ",
      "	",
      "\n",
      "\r"
    ];
    bad.forEach((v) => {
      if (name.indexOf(v) !== -1) {
        switch (v) {
          case "\n":
            v = "\\n";
            break;
          case "\r":
            v = "\\r";
            break;
          case "	":
            v = "\\t";
            break;
          default:
        }
        throw Error(`invalid ${context} name - ${context} name cannot contain '${v}'`);
      }
    });
    return "";
  }
  function validateName(context, name = "") {
    if (name === "") {
      throw Error(`${context} name required`);
    }
    const m = validName(name);
    if (m.length) {
      throw new Error(`invalid ${context} name - ${context} name ${m}`);
    }
  }
  function validName(name = "") {
    if (name === "") {
      throw Error(`name required`);
    }
    const RE = /^[-\w]+$/g;
    const m = name.match(RE);
    if (m === null) {
      for (const c of name.split("")) {
        const mm = c.match(RE);
        if (mm === null) {
          return `cannot contain '${c}'`;
        }
      }
    }
    return "";
  }
  function isFlowControlMsg(msg) {
    if (msg.data.length > 0) {
      return false;
    }
    const h = msg.headers;
    if (!h) {
      return false;
    }
    return h.code >= 100 && h.code < 200;
  }
  function isHeartbeatMsg(msg) {
    return isFlowControlMsg(msg) && msg.headers?.description === "Idle Heartbeat";
  }
  function newJsErrorMsg(code2, description, subject) {
    const h = headers(code2, description);
    const arg = {
      hdr: 1,
      sid: 0,
      size: 0
    };
    const msg = new MsgImpl(arg, Empty, {});
    msg._headers = h;
    msg._subject = subject;
    return msg;
  }
  function checkJsError(msg) {
    if (msg.data.length !== 0) {
      return null;
    }
    const h = msg.headers;
    if (!h) {
      return null;
    }
    return checkJsErrorCode(h.code, h.description);
  }
  var Js409Errors;
  (function(Js409Errors2) {
    Js409Errors2["MaxBatchExceeded"] = "exceeded maxrequestbatch of";
    Js409Errors2["MaxExpiresExceeded"] = "exceeded maxrequestexpires of";
    Js409Errors2["MaxBytesExceeded"] = "exceeded maxrequestmaxbytes of";
    Js409Errors2["MaxMessageSizeExceeded"] = "message size exceeds maxbytes";
    Js409Errors2["PushConsumer"] = "consumer is push based";
    Js409Errors2["MaxWaitingExceeded"] = "exceeded maxwaiting";
    Js409Errors2["IdleHeartbeatMissed"] = "idle heartbeats missed";
    Js409Errors2["ConsumerDeleted"] = "consumer deleted";
  })(Js409Errors || (Js409Errors = {}));
  var MAX_WAITING_FAIL = false;
  function isTerminal409(err) {
    if (err.code !== ErrorCode.JetStream409) {
      return false;
    }
    const fatal = [
      Js409Errors.MaxBatchExceeded,
      Js409Errors.MaxExpiresExceeded,
      Js409Errors.MaxBytesExceeded,
      Js409Errors.MaxMessageSizeExceeded,
      Js409Errors.PushConsumer,
      Js409Errors.IdleHeartbeatMissed,
      Js409Errors.ConsumerDeleted
    ];
    if (MAX_WAITING_FAIL) {
      fatal.push(Js409Errors.MaxWaitingExceeded);
    }
    return fatal.find((s) => {
      return err.message.indexOf(s) !== -1;
    }) !== void 0;
  }
  function checkJsErrorCode(code2, description = "") {
    if (code2 < 300) {
      return null;
    }
    description = description.toLowerCase();
    switch (code2) {
      case 404:
        return new NatsError(description, ErrorCode.JetStream404NoMessages);
      case 408:
        return new NatsError(description, ErrorCode.JetStream408RequestTimeout);
      case 409: {
        const ec = description.startsWith(Js409Errors.IdleHeartbeatMissed) ? ErrorCode.JetStreamIdleHeartBeat : ErrorCode.JetStream409;
        return new NatsError(description, ec);
      }
      case 503:
        return NatsError.errorForCode(ErrorCode.JetStreamNotEnabled, new Error(description));
      default:
        if (description === "") {
          description = ErrorCode.Unknown;
        }
        return new NatsError(description, `${code2}`);
    }
  }
  var QueuedIteratorImpl = class {
    inflight;
    processed;
    received;
    noIterator;
    iterClosed;
    done;
    signal;
    yields;
    filtered;
    pendingFiltered;
    ingestionFilterFn;
    protocolFilterFn;
    dispatchedFn;
    ctx;
    _data;
    err;
    time;
    yielding;
    constructor() {
      this.inflight = 0;
      this.filtered = 0;
      this.pendingFiltered = 0;
      this.processed = 0;
      this.received = 0;
      this.noIterator = false;
      this.done = false;
      this.signal = deferred();
      this.yields = [];
      this.iterClosed = deferred();
      this.time = 0;
      this.yielding = false;
    }
    [Symbol.asyncIterator]() {
      return this.iterate();
    }
    push(v) {
      if (this.done) {
        return;
      }
      if (typeof v === "function") {
        this.yields.push(v);
        this.signal.resolve();
        return;
      }
      const { ingest, protocol } = this.ingestionFilterFn ? this.ingestionFilterFn(v, this.ctx || this) : {
        ingest: true,
        protocol: false
      };
      if (ingest) {
        if (protocol) {
          this.filtered++;
          this.pendingFiltered++;
        }
        this.yields.push(v);
        this.signal.resolve();
      }
    }
    async *iterate() {
      if (this.noIterator) {
        throw new NatsError("unsupported iterator", ErrorCode.ApiError);
      }
      if (this.yielding) {
        throw new NatsError("already yielding", ErrorCode.ApiError);
      }
      this.yielding = true;
      try {
        while (true) {
          if (this.yields.length === 0) {
            await this.signal;
          }
          if (this.err) {
            throw this.err;
          }
          const yields = this.yields;
          this.inflight = yields.length;
          this.yields = [];
          for (let i = 0; i < yields.length; i++) {
            if (typeof yields[i] === "function") {
              const fn = yields[i];
              try {
                fn();
              } catch (err) {
                throw err;
              }
              if (this.err) {
                throw this.err;
              }
              continue;
            }
            const ok = this.protocolFilterFn ? this.protocolFilterFn(yields[i]) : true;
            if (ok) {
              this.processed++;
              const start = Date.now();
              yield yields[i];
              this.time = Date.now() - start;
              if (this.dispatchedFn && yields[i]) {
                this.dispatchedFn(yields[i]);
              }
            } else {
              this.pendingFiltered--;
            }
            this.inflight--;
          }
          if (this.done) {
            break;
          } else if (this.yields.length === 0) {
            yields.length = 0;
            this.yields = yields;
            this.signal = deferred();
          }
        }
      } finally {
        this.stop();
      }
    }
    stop(err) {
      if (this.done) {
        return;
      }
      this.err = err;
      this.done = true;
      this.signal.resolve();
      this.iterClosed.resolve(err);
    }
    getProcessed() {
      return this.noIterator ? this.received : this.processed;
    }
    getPending() {
      return this.yields.length + this.inflight - this.pendingFiltered;
    }
    getReceived() {
      return this.received - this.filtered;
    }
  };
  var IdleHeartbeatMonitor = class {
    interval;
    maxOut;
    cancelAfter;
    timer;
    autoCancelTimer;
    last;
    missed;
    count;
    callback;
    constructor(interval, cb, opts = {
      maxOut: 2
    }) {
      this.interval = interval;
      this.maxOut = opts?.maxOut || 2;
      this.cancelAfter = opts?.cancelAfter || 0;
      this.last = Date.now();
      this.missed = 0;
      this.count = 0;
      this.callback = cb;
      this._schedule();
    }
    cancel() {
      if (this.autoCancelTimer) {
        clearTimeout(this.autoCancelTimer);
      }
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = 0;
      this.autoCancelTimer = 0;
      this.missed = 0;
    }
    work() {
      this.last = Date.now();
      this.missed = 0;
    }
    _change(interval, cancelAfter = 0, maxOut = 2) {
      this.interval = interval;
      this.maxOut = maxOut;
      this.cancelAfter = cancelAfter;
      this.restart();
    }
    restart() {
      this.cancel();
      this._schedule();
    }
    _schedule() {
      if (this.cancelAfter > 0) {
        this.autoCancelTimer = setTimeout(() => {
          this.cancel();
        }, this.cancelAfter);
      }
      this.timer = setInterval(() => {
        this.count++;
        if (Date.now() - this.last > this.interval) {
          this.missed++;
        }
        if (this.missed >= this.maxOut) {
          try {
            if (this.callback(this.missed) === true) {
              this.cancel();
            }
          } catch (err) {
            console.log(err);
          }
        }
      }, this.interval);
    }
  };
  var RetentionPolicy;
  (function(RetentionPolicy2) {
    RetentionPolicy2["Limits"] = "limits";
    RetentionPolicy2["Interest"] = "interest";
    RetentionPolicy2["Workqueue"] = "workqueue";
  })(RetentionPolicy || (RetentionPolicy = {}));
  var DiscardPolicy;
  (function(DiscardPolicy2) {
    DiscardPolicy2["Old"] = "old";
    DiscardPolicy2["New"] = "new";
  })(DiscardPolicy || (DiscardPolicy = {}));
  var StorageType;
  (function(StorageType2) {
    StorageType2["File"] = "file";
    StorageType2["Memory"] = "memory";
  })(StorageType || (StorageType = {}));
  var DeliverPolicy;
  (function(DeliverPolicy2) {
    DeliverPolicy2["All"] = "all";
    DeliverPolicy2["Last"] = "last";
    DeliverPolicy2["New"] = "new";
    DeliverPolicy2["StartSequence"] = "by_start_sequence";
    DeliverPolicy2["StartTime"] = "by_start_time";
    DeliverPolicy2["LastPerSubject"] = "last_per_subject";
  })(DeliverPolicy || (DeliverPolicy = {}));
  var AckPolicy;
  (function(AckPolicy2) {
    AckPolicy2["None"] = "none";
    AckPolicy2["All"] = "all";
    AckPolicy2["Explicit"] = "explicit";
    AckPolicy2["NotSet"] = "";
  })(AckPolicy || (AckPolicy = {}));
  var ReplayPolicy;
  (function(ReplayPolicy2) {
    ReplayPolicy2["Instant"] = "instant";
    ReplayPolicy2["Original"] = "original";
  })(ReplayPolicy || (ReplayPolicy = {}));
  var StoreCompression;
  (function(StoreCompression2) {
    StoreCompression2["None"] = "none";
    StoreCompression2["S2"] = "s2";
  })(StoreCompression || (StoreCompression = {}));
  var ConsumerApiAction;
  (function(ConsumerApiAction2) {
    ConsumerApiAction2["CreateOrUpdate"] = "";
    ConsumerApiAction2["Update"] = "update";
    ConsumerApiAction2["Create"] = "create";
  })(ConsumerApiAction || (ConsumerApiAction = {}));
  function defaultConsumer(name, opts = {}) {
    return Object.assign({
      name,
      deliver_policy: DeliverPolicy.All,
      ack_policy: AckPolicy.Explicit,
      ack_wait: nanos(30 * 1e3),
      replay_policy: ReplayPolicy.Instant
    }, opts);
  }
  var AdvisoryKind;
  (function(AdvisoryKind2) {
    AdvisoryKind2["API"] = "api_audit";
    AdvisoryKind2["StreamAction"] = "stream_action";
    AdvisoryKind2["ConsumerAction"] = "consumer_action";
    AdvisoryKind2["SnapshotCreate"] = "snapshot_create";
    AdvisoryKind2["SnapshotComplete"] = "snapshot_complete";
    AdvisoryKind2["RestoreCreate"] = "restore_create";
    AdvisoryKind2["RestoreComplete"] = "restore_complete";
    AdvisoryKind2["MaxDeliver"] = "max_deliver";
    AdvisoryKind2["Terminated"] = "terminated";
    AdvisoryKind2["Ack"] = "consumer_ack";
    AdvisoryKind2["StreamLeaderElected"] = "stream_leader_elected";
    AdvisoryKind2["StreamQuorumLost"] = "stream_quorum_lost";
    AdvisoryKind2["ConsumerLeaderElected"] = "consumer_leader_elected";
    AdvisoryKind2["ConsumerQuorumLost"] = "consumer_quorum_lost";
  })(AdvisoryKind || (AdvisoryKind = {}));
  var JsHeaders;
  (function(JsHeaders2) {
    JsHeaders2["StreamSourceHdr"] = "Nats-Stream-Source";
    JsHeaders2["LastConsumerSeqHdr"] = "Nats-Last-Consumer";
    JsHeaders2["LastStreamSeqHdr"] = "Nats-Last-Stream";
    JsHeaders2["ConsumerStalledHdr"] = "Nats-Consumer-Stalled";
    JsHeaders2["MessageSizeHdr"] = "Nats-Msg-Size";
    JsHeaders2["RollupHdr"] = "Nats-Rollup";
    JsHeaders2["RollupValueSubject"] = "sub";
    JsHeaders2["RollupValueAll"] = "all";
    JsHeaders2["PendingMessagesHdr"] = "Nats-Pending-Messages";
    JsHeaders2["PendingBytesHdr"] = "Nats-Pending-Bytes";
  })(JsHeaders || (JsHeaders = {}));
  var KvWatchInclude;
  (function(KvWatchInclude2) {
    KvWatchInclude2["LastValue"] = "";
    KvWatchInclude2["AllHistory"] = "history";
    KvWatchInclude2["UpdatesOnly"] = "updates";
  })(KvWatchInclude || (KvWatchInclude = {}));
  var DirectMsgHeaders;
  (function(DirectMsgHeaders2) {
    DirectMsgHeaders2["Stream"] = "Nats-Stream";
    DirectMsgHeaders2["Sequence"] = "Nats-Sequence";
    DirectMsgHeaders2["TimeStamp"] = "Nats-Time-Stamp";
    DirectMsgHeaders2["Subject"] = "Nats-Subject";
  })(DirectMsgHeaders || (DirectMsgHeaders = {}));
  var RepublishHeaders;
  (function(RepublishHeaders2) {
    RepublishHeaders2["Stream"] = "Nats-Stream";
    RepublishHeaders2["Subject"] = "Nats-Subject";
    RepublishHeaders2["Sequence"] = "Nats-Sequence";
    RepublishHeaders2["LastSequence"] = "Nats-Last-Sequence";
    RepublishHeaders2["Size"] = "Nats-Msg-Size";
  })(RepublishHeaders || (RepublishHeaders = {}));
  var kvPrefix = "KV_";
  var ConsumerOptsBuilderImpl = class {
    config;
    ordered;
    mack;
    stream;
    callbackFn;
    max;
    qname;
    isBind;
    filters;
    constructor(opts) {
      this.stream = "";
      this.mack = false;
      this.ordered = false;
      this.config = defaultConsumer("", opts || {});
    }
    getOpts() {
      const o = {};
      o.config = Object.assign({}, this.config);
      if (o.config.filter_subject) {
        this.filterSubject(o.config.filter_subject);
        o.config.filter_subject = void 0;
      }
      if (o.config.filter_subjects) {
        o.config.filter_subjects?.forEach((v) => {
          this.filterSubject(v);
        });
        o.config.filter_subjects = void 0;
      }
      o.mack = this.mack;
      o.stream = this.stream;
      o.callbackFn = this.callbackFn;
      o.max = this.max;
      o.queue = this.qname;
      o.ordered = this.ordered;
      o.config.ack_policy = o.ordered ? AckPolicy.None : o.config.ack_policy;
      o.isBind = o.isBind || false;
      if (this.filters) {
        switch (this.filters.length) {
          case 0:
            break;
          case 1:
            o.config.filter_subject = this.filters[0];
            break;
          default:
            o.config.filter_subjects = this.filters;
        }
      }
      return o;
    }
    description(description) {
      this.config.description = description;
      return this;
    }
    deliverTo(subject) {
      this.config.deliver_subject = subject;
      return this;
    }
    durable(name) {
      validateDurableName(name);
      this.config.durable_name = name;
      return this;
    }
    startSequence(seq) {
      if (seq <= 0) {
        throw new Error("sequence must be greater than 0");
      }
      this.config.deliver_policy = DeliverPolicy.StartSequence;
      this.config.opt_start_seq = seq;
      return this;
    }
    startTime(time) {
      this.config.deliver_policy = DeliverPolicy.StartTime;
      this.config.opt_start_time = time.toISOString();
      return this;
    }
    deliverAll() {
      this.config.deliver_policy = DeliverPolicy.All;
      return this;
    }
    deliverLastPerSubject() {
      this.config.deliver_policy = DeliverPolicy.LastPerSubject;
      return this;
    }
    deliverLast() {
      this.config.deliver_policy = DeliverPolicy.Last;
      return this;
    }
    deliverNew() {
      this.config.deliver_policy = DeliverPolicy.New;
      return this;
    }
    startAtTimeDelta(millis2) {
      this.startTime(new Date(Date.now() - millis2));
      return this;
    }
    headersOnly() {
      this.config.headers_only = true;
      return this;
    }
    ackNone() {
      this.config.ack_policy = AckPolicy.None;
      return this;
    }
    ackAll() {
      this.config.ack_policy = AckPolicy.All;
      return this;
    }
    ackExplicit() {
      this.config.ack_policy = AckPolicy.Explicit;
      return this;
    }
    ackWait(millis2) {
      this.config.ack_wait = nanos(millis2);
      return this;
    }
    maxDeliver(max) {
      this.config.max_deliver = max;
      return this;
    }
    filterSubject(s) {
      this.filters = this.filters || [];
      this.filters.push(s);
      return this;
    }
    replayInstantly() {
      this.config.replay_policy = ReplayPolicy.Instant;
      return this;
    }
    replayOriginal() {
      this.config.replay_policy = ReplayPolicy.Original;
      return this;
    }
    sample(n) {
      n = Math.trunc(n);
      if (n < 0 || n > 100) {
        throw new Error(`value must be between 0-100`);
      }
      this.config.sample_freq = `${n}%`;
      return this;
    }
    limit(n) {
      this.config.rate_limit_bps = n;
      return this;
    }
    maxWaiting(max) {
      this.config.max_waiting = max;
      return this;
    }
    maxAckPending(max) {
      this.config.max_ack_pending = max;
      return this;
    }
    idleHeartbeat(millis2) {
      this.config.idle_heartbeat = nanos(millis2);
      return this;
    }
    flowControl() {
      this.config.flow_control = true;
      return this;
    }
    deliverGroup(name) {
      this.queue(name);
      return this;
    }
    manualAck() {
      this.mack = true;
      return this;
    }
    maxMessages(max) {
      this.max = max;
      return this;
    }
    callback(fn) {
      this.callbackFn = fn;
      return this;
    }
    queue(n) {
      this.qname = n;
      this.config.deliver_group = n;
      return this;
    }
    orderedConsumer() {
      this.ordered = true;
      return this;
    }
    bind(stream, durable) {
      this.stream = stream;
      this.config.durable_name = durable;
      this.isBind = true;
      return this;
    }
    bindStream(stream) {
      this.stream = stream;
      return this;
    }
    inactiveEphemeralThreshold(millis2) {
      this.config.inactive_threshold = nanos(millis2);
      return this;
    }
    maxPullBatch(n) {
      this.config.max_batch = n;
      return this;
    }
    maxPullRequestExpires(millis2) {
      this.config.max_expires = nanos(millis2);
      return this;
    }
    memory() {
      this.config.mem_storage = true;
      return this;
    }
    numReplicas(n) {
      this.config.num_replicas = n;
      return this;
    }
    consumerName(n) {
      this.config.name = n;
      return this;
    }
  };
  function consumerOpts(opts) {
    return new ConsumerOptsBuilderImpl(opts);
  }
  function isConsumerOptsBuilder(o) {
    return typeof o.getOpts === "function";
  }
  var Base64Codec = class {
    static encode(bytes) {
      if (typeof bytes === "string") {
        return btoa(bytes);
      }
      const a = Array.from(bytes);
      return btoa(String.fromCharCode(...a));
    }
    static decode(s, binary = false) {
      const bin = atob(s);
      if (!binary) {
        return bin;
      }
      return Uint8Array.from(bin, (c) => c.charCodeAt(0));
    }
  };
  var Base64UrlPaddedCodec = class _Base64UrlPaddedCodec {
    static encode(bytes) {
      return _Base64UrlPaddedCodec.toB64URLEncoding(Base64Codec.encode(bytes));
    }
    static decode(s, binary = false) {
      return _Base64UrlPaddedCodec.decode(_Base64UrlPaddedCodec.fromB64URLEncoding(s), binary);
    }
    static toB64URLEncoding(b64str) {
      return b64str.replace(/\+/g, "-").replace(/\//g, "_");
    }
    static fromB64URLEncoding(b64str) {
      return b64str.replace(/_/g, "/").replace(/-/g, "+");
    }
  };
  var DataBuffer = class {
    buffers;
    byteLength;
    constructor() {
      this.buffers = [];
      this.byteLength = 0;
    }
    static concat(...bufs) {
      let max = 0;
      for (let i = 0; i < bufs.length; i++) {
        max += bufs[i].length;
      }
      const out = new Uint8Array(max);
      let index = 0;
      for (let i = 0; i < bufs.length; i++) {
        out.set(bufs[i], index);
        index += bufs[i].length;
      }
      return out;
    }
    static fromAscii(m) {
      if (!m) {
        m = "";
      }
      return TE.encode(m);
    }
    static toAscii(a) {
      return TD.decode(a);
    }
    reset() {
      this.buffers.length = 0;
      this.byteLength = 0;
    }
    pack() {
      if (this.buffers.length > 1) {
        const v = new Uint8Array(this.byteLength);
        let index = 0;
        for (let i = 0; i < this.buffers.length; i++) {
          v.set(this.buffers[i], index);
          index += this.buffers[i].length;
        }
        this.buffers.length = 0;
        this.buffers.push(v);
      }
    }
    shift() {
      if (this.buffers.length) {
        const a = this.buffers.shift();
        if (a) {
          this.byteLength -= a.length;
          return a;
        }
      }
      return new Uint8Array(0);
    }
    drain(n) {
      if (this.buffers.length) {
        this.pack();
        const v = this.buffers.pop();
        if (v) {
          const max = this.byteLength;
          if (n === void 0 || n > max) {
            n = max;
          }
          const d = v.subarray(0, n);
          if (max > n) {
            this.buffers.push(v.subarray(n));
          }
          this.byteLength = max - n;
          return d;
        }
      }
      return new Uint8Array(0);
    }
    fill(a, ...bufs) {
      if (a) {
        this.buffers.push(a);
        this.byteLength += a.length;
      }
      for (let i = 0; i < bufs.length; i++) {
        if (bufs[i] && bufs[i].length) {
          this.buffers.push(bufs[i]);
          this.byteLength += bufs[i].length;
        }
      }
    }
    peek() {
      if (this.buffers.length) {
        this.pack();
        return this.buffers[0];
      }
      return new Uint8Array(0);
    }
    size() {
      return this.byteLength;
    }
    length() {
      return this.buffers.length;
    }
  };
  function getLengths(b64) {
    const len = b64.length;
    let validLen = b64.indexOf("=");
    if (validLen === -1) {
      validLen = len;
    }
    const placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
      validLen,
      placeHoldersLen
    ];
  }
  function init(lookup2, revLookup2, urlsafe = false) {
    function _byteLength(validLen, placeHoldersLen) {
      return Math.floor((validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen);
    }
    function tripletToBase64(num) {
      return lookup2[num >> 18 & 63] + lookup2[num >> 12 & 63] + lookup2[num >> 6 & 63] + lookup2[num & 63];
    }
    function encodeChunk(buf, start, end) {
      const out = new Array((end - start) / 3);
      for (let i = start, curTriplet = 0; i < end; i += 3) {
        out[curTriplet++] = tripletToBase64((buf[i] << 16) + (buf[i + 1] << 8) + buf[i + 2]);
      }
      return out.join("");
    }
    return {
      byteLength(b64) {
        return _byteLength.apply(null, getLengths(b64));
      },
      toUint8Array(b64) {
        const [validLen, placeHoldersLen] = getLengths(b64);
        const buf = new Uint8Array(_byteLength(validLen, placeHoldersLen));
        const len = placeHoldersLen ? validLen - 4 : validLen;
        let tmp;
        let curByte = 0;
        let i;
        for (i = 0; i < len; i += 4) {
          tmp = revLookup2[b64.charCodeAt(i)] << 18 | revLookup2[b64.charCodeAt(i + 1)] << 12 | revLookup2[b64.charCodeAt(i + 2)] << 6 | revLookup2[b64.charCodeAt(i + 3)];
          buf[curByte++] = tmp >> 16 & 255;
          buf[curByte++] = tmp >> 8 & 255;
          buf[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup2[b64.charCodeAt(i)] << 2 | revLookup2[b64.charCodeAt(i + 1)] >> 4;
          buf[curByte++] = tmp & 255;
        } else if (placeHoldersLen === 1) {
          tmp = revLookup2[b64.charCodeAt(i)] << 10 | revLookup2[b64.charCodeAt(i + 1)] << 4 | revLookup2[b64.charCodeAt(i + 2)] >> 2;
          buf[curByte++] = tmp >> 8 & 255;
          buf[curByte++] = tmp & 255;
        }
        return buf;
      },
      fromUint8Array(buf) {
        const maxChunkLength = 16383;
        const len = buf.length;
        const extraBytes = len % 3;
        const len2 = len - extraBytes;
        const parts = new Array(Math.ceil(len2 / 16383) + (extraBytes ? 1 : 0));
        let curChunk = 0;
        let chunkEnd;
        for (let i = 0; i < len2; i += maxChunkLength) {
          chunkEnd = i + maxChunkLength;
          parts[curChunk++] = encodeChunk(buf, i, chunkEnd > len2 ? len2 : chunkEnd);
        }
        let tmp;
        if (extraBytes === 1) {
          tmp = buf[len2];
          parts[curChunk] = lookup2[tmp >> 2] + lookup2[tmp << 4 & 63];
          if (!urlsafe) parts[curChunk] += "==";
        } else if (extraBytes === 2) {
          tmp = buf[len2] << 8 | buf[len2 + 1] & 255;
          parts[curChunk] = lookup2[tmp >> 10] + lookup2[tmp >> 4 & 63] + lookup2[tmp << 2 & 63];
          if (!urlsafe) parts[curChunk] += "=";
        }
        return parts.join("");
      }
    };
  }
  var lookup = [];
  var revLookup = [];
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  for (let i = 0, l = code.length; i < l; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  var { byteLength, toUint8Array, fromUint8Array } = init(lookup, revLookup, true);
  var decoder = new TextDecoder();
  var encoder = new TextEncoder();
  function toHexString(buf) {
    return buf.reduce((hex, __byte) => `${hex}${__byte < 16 ? "0" : ""}${__byte.toString(16)}`, "");
  }
  function fromHexString(hex) {
    const len = hex.length;
    if (len % 2 || !/^[0-9a-fA-F]+$/.test(hex)) {
      throw new TypeError("Invalid hex string.");
    }
    hex = hex.toLowerCase();
    const buf = new Uint8Array(Math.floor(len / 2));
    const end = len / 2;
    for (let i = 0; i < end; ++i) {
      buf[i] = parseInt(hex.substr(i * 2, 2), 16);
    }
    return buf;
  }
  function decode1(buf, encoding = "utf8") {
    if (/^utf-?8$/i.test(encoding)) {
      return decoder.decode(buf);
    } else if (/^base64$/i.test(encoding)) {
      return fromUint8Array(buf);
    } else if (/^hex(?:adecimal)?$/i.test(encoding)) {
      return toHexString(buf);
    } else {
      throw new TypeError("Unsupported string encoding.");
    }
  }
  function encode1(str, encoding = "utf8") {
    if (/^utf-?8$/i.test(encoding)) {
      return encoder.encode(str);
    } else if (/^base64$/i.test(encoding)) {
      return toUint8Array(str);
    } else if (/^hex(?:adecimal)?$/i.test(encoding)) {
      return fromHexString(str);
    } else {
      throw new TypeError("Unsupported string encoding.");
    }
  }
  var SHA256 = class {
    hashSize = 32;
    _buf;
    _bufIdx;
    _count;
    _K;
    _H;
    _finalized;
    constructor() {
      this._buf = new Uint8Array(64);
      this._K = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      this.init();
    }
    init() {
      this._H = new Uint32Array([
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
      ]);
      this._bufIdx = 0;
      this._count = new Uint32Array(2);
      this._buf.fill(0);
      this._finalized = false;
      return this;
    }
    update(msg, inputEncoding) {
      if (msg === null) {
        throw new TypeError("msg must be a string or Uint8Array.");
      } else if (typeof msg === "string") {
        msg = encode1(msg, inputEncoding);
      }
      for (let i = 0, len = msg.length; i < len; i++) {
        this._buf[this._bufIdx++] = msg[i];
        if (this._bufIdx === 64) {
          this._transform();
          this._bufIdx = 0;
        }
      }
      const c = this._count;
      if ((c[0] += msg.length << 3) < msg.length << 3) {
        c[1]++;
      }
      c[1] += msg.length >>> 29;
      return this;
    }
    digest(outputEncoding) {
      if (this._finalized) {
        throw new Error("digest has already been called.");
      }
      this._finalized = true;
      const b = this._buf;
      let idx = this._bufIdx;
      b[idx++] = 128;
      while (idx !== 56) {
        if (idx === 64) {
          this._transform();
          idx = 0;
        }
        b[idx++] = 0;
      }
      const c = this._count;
      b[56] = c[1] >>> 24 & 255;
      b[57] = c[1] >>> 16 & 255;
      b[58] = c[1] >>> 8 & 255;
      b[59] = c[1] >>> 0 & 255;
      b[60] = c[0] >>> 24 & 255;
      b[61] = c[0] >>> 16 & 255;
      b[62] = c[0] >>> 8 & 255;
      b[63] = c[0] >>> 0 & 255;
      this._transform();
      const hash = new Uint8Array(32);
      for (let i = 0; i < 8; i++) {
        hash[(i << 2) + 0] = this._H[i] >>> 24 & 255;
        hash[(i << 2) + 1] = this._H[i] >>> 16 & 255;
        hash[(i << 2) + 2] = this._H[i] >>> 8 & 255;
        hash[(i << 2) + 3] = this._H[i] >>> 0 & 255;
      }
      this.init();
      return outputEncoding ? decode1(hash, outputEncoding) : hash;
    }
    _transform() {
      const h = this._H;
      let h0 = h[0];
      let h1 = h[1];
      let h2 = h[2];
      let h3 = h[3];
      let h4 = h[4];
      let h5 = h[5];
      let h6 = h[6];
      let h7 = h[7];
      const w = new Uint32Array(16);
      let i;
      for (i = 0; i < 16; i++) {
        w[i] = this._buf[(i << 2) + 3] | this._buf[(i << 2) + 2] << 8 | this._buf[(i << 2) + 1] << 16 | this._buf[i << 2] << 24;
      }
      for (i = 0; i < 64; i++) {
        let tmp;
        if (i < 16) {
          tmp = w[i];
        } else {
          let a = w[i + 1 & 15];
          let b = w[i + 14 & 15];
          tmp = w[i & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i & 15] + w[i + 9 & 15] | 0;
        }
        tmp = tmp + h7 + (h4 >>> 6 ^ h4 >>> 11 ^ h4 >>> 25 ^ h4 << 26 ^ h4 << 21 ^ h4 << 7) + (h6 ^ h4 & (h5 ^ h6)) + this._K[i] | 0;
        h7 = h6;
        h6 = h5;
        h5 = h4;
        h4 = h3 + tmp;
        h3 = h2;
        h2 = h1;
        h1 = h0;
        h0 = tmp + (h1 & h2 ^ h3 & (h1 ^ h2)) + (h1 >>> 2 ^ h1 >>> 13 ^ h1 >>> 22 ^ h1 << 30 ^ h1 << 19 ^ h1 << 10) | 0;
      }
      h[0] = h[0] + h0 | 0;
      h[1] = h[1] + h1 | 0;
      h[2] = h[2] + h2 | 0;
      h[3] = h[3] + h3 | 0;
      h[4] = h[4] + h4 | 0;
      h[5] = h[5] + h5 | 0;
      h[6] = h[6] + h6 | 0;
      h[7] = h[7] + h7 | 0;
    }
  };
  var BaseRequest = class {
    token;
    received;
    ctx;
    requestSubject;
    mux;
    constructor(mux, requestSubject, asyncTraces = true) {
      this.mux = mux;
      this.requestSubject = requestSubject;
      this.received = 0;
      this.token = nuid.next();
      if (asyncTraces) {
        this.ctx = new Error();
      }
    }
  };
  var RequestMany = class extends BaseRequest {
    callback;
    done;
    timer;
    max;
    opts;
    constructor(mux, requestSubject, opts = {
      maxWait: 1e3
    }) {
      super(mux, requestSubject);
      this.opts = opts;
      if (typeof this.opts.callback !== "function") {
        throw new Error("callback is required");
      }
      this.callback = this.opts.callback;
      this.max = typeof opts.maxMessages === "number" && opts.maxMessages > 0 ? opts.maxMessages : -1;
      this.done = deferred();
      this.done.then(() => {
        this.callback(null, null);
      });
      this.timer = setTimeout(() => {
        this.cancel();
      }, opts.maxWait);
    }
    cancel(err) {
      if (err) {
        this.callback(err, null);
      }
      clearTimeout(this.timer);
      this.mux.cancel(this);
      this.done.resolve();
    }
    resolver(err, msg) {
      if (err) {
        if (this.ctx) {
          err.stack += `

${this.ctx.stack}`;
        }
        this.cancel(err);
      } else {
        this.callback(null, msg);
        if (this.opts.strategy === RequestStrategy.Count) {
          this.max--;
          if (this.max === 0) {
            this.cancel();
          }
        }
        if (this.opts.strategy === RequestStrategy.JitterTimer) {
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.cancel();
          }, this.opts.jitter || 300);
        }
        if (this.opts.strategy === RequestStrategy.SentinelMsg) {
          if (msg && msg.data.length === 0) {
            this.cancel();
          }
        }
      }
    }
  };
  var RequestOne = class extends BaseRequest {
    deferred;
    timer;
    constructor(mux, requestSubject, opts = {
      timeout: 1e3
    }, asyncTraces = true) {
      super(mux, requestSubject, asyncTraces);
      this.deferred = deferred();
      this.timer = timeout(opts.timeout, asyncTraces);
    }
    resolver(err, msg) {
      if (this.timer) {
        this.timer.cancel();
      }
      if (err) {
        if (this.ctx) {
          err.stack += `

${this.ctx.stack}`;
        }
        this.deferred.reject(err);
      } else {
        this.deferred.resolve(msg);
      }
      this.cancel();
    }
    cancel(err) {
      if (this.timer) {
        this.timer.cancel();
      }
      this.mux.cancel(this);
      this.deferred.reject(err ? err : NatsError.errorForCode(ErrorCode.Cancelled));
    }
  };
  var defaultPrefix = "$JS.API";
  function defaultJsOptions(opts) {
    opts = opts || {};
    if (opts.domain) {
      opts.apiPrefix = `$JS.${opts.domain}.API`;
      delete opts.domain;
    }
    return extend({
      apiPrefix: defaultPrefix,
      timeout: 5e3
    }, opts);
  }
  var BaseApiClient = class {
    nc;
    opts;
    prefix;
    timeout;
    jc;
    constructor(nc, opts) {
      this.nc = nc;
      this.opts = defaultJsOptions(opts);
      this._parseOpts();
      this.prefix = this.opts.apiPrefix;
      this.timeout = this.opts.timeout;
      this.jc = JSONCodec();
    }
    getOptions() {
      return Object.assign({}, this.opts);
    }
    _parseOpts() {
      let prefix = this.opts.apiPrefix;
      if (!prefix || prefix.length === 0) {
        throw new Error("invalid empty prefix");
      }
      const c = prefix[prefix.length - 1];
      if (c === ".") {
        prefix = prefix.substr(0, prefix.length - 1);
      }
      this.opts.apiPrefix = prefix;
    }
    async _request(subj, data = null, opts) {
      opts = opts || {};
      opts.timeout = this.timeout;
      let a = Empty;
      if (data) {
        a = this.jc.encode(data);
      }
      let { retries } = opts;
      retries = retries || 1;
      retries = retries === -1 ? Number.MAX_SAFE_INTEGER : retries;
      const bo = backoff();
      for (let i = 0; i < retries; i++) {
        try {
          const m = await this.nc.request(subj, a, opts);
          return this.parseJsResponse(m);
        } catch (err) {
          const ne = err;
          if ((ne.code === "503" || ne.code === ErrorCode.Timeout) && i + 1 < retries) {
            await delay(bo.backoff(i));
          } else {
            throw err;
          }
        }
      }
    }
    async findStream(subject) {
      const q = {
        subject
      };
      const r = await this._request(`${this.prefix}.STREAM.NAMES`, q);
      const names = r;
      if (!names.streams || names.streams.length !== 1) {
        throw new Error("no stream matches subject");
      }
      return names.streams[0];
    }
    getConnection() {
      return this.nc;
    }
    parseJsResponse(m) {
      const v = this.jc.decode(m.data);
      const r = v;
      if (r.error) {
        const err = checkJsErrorCode(r.error.code, r.error.description);
        if (err !== null) {
          err.api_error = r.error;
          throw err;
        }
      }
      return v;
    }
  };
  var ListerImpl = class {
    err;
    offset;
    pageInfo;
    subject;
    jsm;
    filter;
    payload;
    constructor(subject, filter3, jsm, payload) {
      if (!subject) {
        throw new Error("subject is required");
      }
      this.subject = subject;
      this.jsm = jsm;
      this.offset = 0;
      this.pageInfo = {};
      this.filter = filter3;
      this.payload = payload || {};
    }
    async next() {
      if (this.err) {
        return [];
      }
      if (this.pageInfo && this.offset >= this.pageInfo.total) {
        return [];
      }
      const offset = {
        offset: this.offset
      };
      if (this.payload) {
        Object.assign(offset, this.payload);
      }
      try {
        const r = await this.jsm._request(this.subject, offset, {
          timeout: this.jsm.timeout
        });
        this.pageInfo = r;
        const count = this.countResponse(r);
        if (count === 0) {
          return [];
        }
        this.offset += count;
        const a = this.filter(r);
        return a;
      } catch (err) {
        this.err = err;
        throw err;
      }
    }
    countResponse(r) {
      switch (r?.type) {
        case "io.nats.jetstream.api.v1.stream_names_response":
        case "io.nats.jetstream.api.v1.stream_list_response":
          return r.streams?.length || 0;
        case "io.nats.jetstream.api.v1.consumer_list_response":
          return r.consumers?.length || 0;
        default:
          console.error(`jslister.ts: unknown API response for paged output: ${r?.type}`);
          return r.streams?.length || 0;
      }
      return 0;
    }
    async *[Symbol.asyncIterator]() {
      let page = await this.next();
      while (page.length > 0) {
        for (const item of page) {
          yield item;
        }
        page = await this.next();
      }
    }
  };
  function parseSemVer(s = "") {
    const m = s.match(/(\d+).(\d+).(\d+)/);
    if (m) {
      return {
        major: parseInt(m[1]),
        minor: parseInt(m[2]),
        micro: parseInt(m[3])
      };
    }
    throw new Error(`'${s}' is not a semver value`);
  }
  function compare(a, b) {
    if (a.major < b.major) return -1;
    if (a.major > b.major) return 1;
    if (a.minor < b.minor) return -1;
    if (a.minor > b.minor) return 1;
    if (a.micro < b.micro) return -1;
    if (a.micro > b.micro) return 1;
    return 0;
  }
  var Feature;
  (function(Feature2) {
    Feature2["JS_KV"] = "js_kv";
    Feature2["JS_OBJECTSTORE"] = "js_objectstore";
    Feature2["JS_PULL_MAX_BYTES"] = "js_pull_max_bytes";
    Feature2["JS_NEW_CONSUMER_CREATE_API"] = "js_new_consumer_create";
    Feature2["JS_ALLOW_DIRECT"] = "js_allow_direct";
    Feature2["JS_MULTIPLE_CONSUMER_FILTER"] = "js_multiple_consumer_filter";
    Feature2["JS_SIMPLIFICATION"] = "js_simplification";
    Feature2["JS_STREAM_CONSUMER_METADATA"] = "js_stream_consumer_metadata";
    Feature2["JS_CONSUMER_FILTER_SUBJECTS"] = "js_consumer_filter_subjects";
    Feature2["JS_STREAM_FIRST_SEQ"] = "js_stream_first_seq";
    Feature2["JS_STREAM_SUBJECT_TRANSFORM"] = "js_stream_subject_transform";
    Feature2["JS_STREAM_SOURCE_SUBJECT_TRANSFORM"] = "js_stream_source_subject_transform";
    Feature2["JS_STREAM_COMPRESSION"] = "js_stream_compression";
    Feature2["JS_DEFAULT_CONSUMER_LIMITS"] = "js_default_consumer_limits";
    Feature2["JS_BATCH_DIRECT_GET"] = "js_batch_direct_get";
  })(Feature || (Feature = {}));
  var Features = class {
    server;
    features;
    disabled;
    constructor(v) {
      this.features = /* @__PURE__ */ new Map();
      this.disabled = [];
      this.update(v);
    }
    resetDisabled() {
      this.disabled.length = 0;
      this.update(this.server);
    }
    disable(f) {
      this.disabled.push(f);
      this.update(this.server);
    }
    isDisabled(f) {
      return this.disabled.indexOf(f) !== -1;
    }
    update(v) {
      if (typeof v === "string") {
        v = parseSemVer(v);
      }
      this.server = v;
      this.set(Feature.JS_KV, "2.6.2");
      this.set(Feature.JS_OBJECTSTORE, "2.6.3");
      this.set(Feature.JS_PULL_MAX_BYTES, "2.8.3");
      this.set(Feature.JS_NEW_CONSUMER_CREATE_API, "2.9.0");
      this.set(Feature.JS_ALLOW_DIRECT, "2.9.0");
      this.set(Feature.JS_MULTIPLE_CONSUMER_FILTER, "2.10.0");
      this.set(Feature.JS_SIMPLIFICATION, "2.9.4");
      this.set(Feature.JS_STREAM_CONSUMER_METADATA, "2.10.0");
      this.set(Feature.JS_CONSUMER_FILTER_SUBJECTS, "2.10.0");
      this.set(Feature.JS_STREAM_FIRST_SEQ, "2.10.0");
      this.set(Feature.JS_STREAM_SUBJECT_TRANSFORM, "2.10.0");
      this.set(Feature.JS_STREAM_SOURCE_SUBJECT_TRANSFORM, "2.10.0");
      this.set(Feature.JS_STREAM_COMPRESSION, "2.10.0");
      this.set(Feature.JS_DEFAULT_CONSUMER_LIMITS, "2.10.0");
      this.set(Feature.JS_BATCH_DIRECT_GET, "2.11.0");
      this.disabled.forEach((f) => {
        this.features.delete(f);
      });
    }
    set(f, requires) {
      this.features.set(f, {
        min: requires,
        ok: compare(this.server, parseSemVer(requires)) >= 0
      });
    }
    get(f) {
      return this.features.get(f) || {
        min: "unknown",
        ok: false
      };
    }
    supports(f) {
      return this.get(f)?.ok || false;
    }
    require(v) {
      if (typeof v === "string") {
        v = parseSemVer(v);
      }
      return compare(this.server, v) >= 0;
    }
  };
  var ConsumerAPIImpl = class extends BaseApiClient {
    constructor(nc, opts) {
      super(nc, opts);
    }
    async add(stream, cfg, action = ConsumerApiAction.Create) {
      validateStreamName(stream);
      if (cfg.deliver_group && cfg.flow_control) {
        throw new Error("jetstream flow control is not supported with queue groups");
      }
      if (cfg.deliver_group && cfg.idle_heartbeat) {
        throw new Error("jetstream idle heartbeat is not supported with queue groups");
      }
      const cr = {};
      cr.config = cfg;
      cr.stream_name = stream;
      cr.action = action;
      if (cr.config.durable_name) {
        validateDurableName(cr.config.durable_name);
      }
      const nci = this.nc;
      let { min, ok: newAPI } = nci.features.get(Feature.JS_NEW_CONSUMER_CREATE_API);
      const name = cfg.name === "" ? void 0 : cfg.name;
      if (name && !newAPI) {
        throw new Error(`consumer 'name' requires server ${min}`);
      }
      if (name) {
        try {
          minValidation("name", name);
        } catch (err) {
          const m = err.message;
          const idx = m.indexOf("cannot contain");
          if (idx !== -1) {
            throw new Error(`consumer 'name' ${m.substring(idx)}`);
          }
          throw err;
        }
      }
      let subj;
      let consumerName = "";
      if (Array.isArray(cfg.filter_subjects)) {
        const { min: min2, ok } = nci.features.get(Feature.JS_MULTIPLE_CONSUMER_FILTER);
        if (!ok) {
          throw new Error(`consumer 'filter_subjects' requires server ${min2}`);
        }
        newAPI = false;
      }
      if (cfg.metadata) {
        const { min: min2, ok } = nci.features.get(Feature.JS_STREAM_CONSUMER_METADATA);
        if (!ok) {
          throw new Error(`consumer 'metadata' requires server ${min2}`);
        }
      }
      if (newAPI) {
        consumerName = cfg.name ?? cfg.durable_name ?? "";
      }
      if (consumerName !== "") {
        let fs = cfg.filter_subject ?? void 0;
        if (fs === ">") {
          fs = void 0;
        }
        subj = fs !== void 0 ? `${this.prefix}.CONSUMER.CREATE.${stream}.${consumerName}.${fs}` : `${this.prefix}.CONSUMER.CREATE.${stream}.${consumerName}`;
      } else {
        subj = cfg.durable_name ? `${this.prefix}.CONSUMER.DURABLE.CREATE.${stream}.${cfg.durable_name}` : `${this.prefix}.CONSUMER.CREATE.${stream}`;
      }
      const r = await this._request(subj, cr);
      return r;
    }
    async update(stream, durable, cfg) {
      const ci = await this.info(stream, durable);
      const changable = cfg;
      return this.add(stream, Object.assign(ci.config, changable), ConsumerApiAction.Update);
    }
    async info(stream, name) {
      validateStreamName(stream);
      validateDurableName(name);
      const r = await this._request(`${this.prefix}.CONSUMER.INFO.${stream}.${name}`);
      return r;
    }
    async delete(stream, name) {
      validateStreamName(stream);
      validateDurableName(name);
      const r = await this._request(`${this.prefix}.CONSUMER.DELETE.${stream}.${name}`);
      const cr = r;
      return cr.success;
    }
    list(stream) {
      validateStreamName(stream);
      const filter3 = (v) => {
        const clr = v;
        return clr.consumers;
      };
      const subj = `${this.prefix}.CONSUMER.LIST.${stream}`;
      return new ListerImpl(subj, filter3, this);
    }
    pause(stream, name, until) {
      const subj = `${this.prefix}.CONSUMER.PAUSE.${stream}.${name}`;
      const opts = {
        pause_until: until.toISOString()
      };
      return this._request(subj, opts);
    }
    resume(stream, name) {
      return this.pause(stream, name, /* @__PURE__ */ new Date(0));
    }
  };
  function checkFn(fn, name, required = false) {
    if (required === true && !fn) {
      throw NatsError.errorForCode(ErrorCode.ApiError, new Error(`${name} is not a function`));
    }
    if (fn && typeof fn !== "function") {
      throw NatsError.errorForCode(ErrorCode.ApiError, new Error(`${name} is not a function`));
    }
  }
  var TypedSubscription = class extends QueuedIteratorImpl {
    sub;
    adapter;
    subIterDone;
    constructor(nc, subject, opts) {
      super();
      checkFn(opts.adapter, "adapter", true);
      this.adapter = opts.adapter;
      if (opts.callback) {
        checkFn(opts.callback, "callback");
      }
      this.noIterator = typeof opts.callback === "function";
      if (opts.ingestionFilterFn) {
        checkFn(opts.ingestionFilterFn, "ingestionFilterFn");
        this.ingestionFilterFn = opts.ingestionFilterFn;
      }
      if (opts.protocolFilterFn) {
        checkFn(opts.protocolFilterFn, "protocolFilterFn");
        this.protocolFilterFn = opts.protocolFilterFn;
      }
      if (opts.dispatchedFn) {
        checkFn(opts.dispatchedFn, "dispatchedFn");
        this.dispatchedFn = opts.dispatchedFn;
      }
      if (opts.cleanupFn) {
        checkFn(opts.cleanupFn, "cleanupFn");
      }
      let callback = (err, msg) => {
        this.callback(err, msg);
      };
      if (opts.callback) {
        const uh = opts.callback;
        callback = (err, msg) => {
          const [jer, tm] = this.adapter(err, msg);
          if (jer) {
            uh(jer, null);
            return;
          }
          const { ingest } = this.ingestionFilterFn ? this.ingestionFilterFn(tm, this) : {
            ingest: true
          };
          if (ingest) {
            const ok = this.protocolFilterFn ? this.protocolFilterFn(tm) : true;
            if (ok) {
              uh(jer, tm);
              if (this.dispatchedFn && tm) {
                this.dispatchedFn(tm);
              }
            }
          }
        };
      }
      const { max, queue, timeout: timeout2 } = opts;
      const sopts = {
        queue,
        timeout: timeout2,
        callback
      };
      if (max && max > 0) {
        sopts.max = max;
      }
      this.sub = nc.subscribe(subject, sopts);
      if (opts.cleanupFn) {
        this.sub.cleanupFn = opts.cleanupFn;
      }
      if (!this.noIterator) {
        this.iterClosed.then(() => {
          this.unsubscribe();
        });
      }
      this.subIterDone = deferred();
      Promise.all([
        this.sub.closed,
        this.iterClosed
      ]).then(() => {
        this.subIterDone.resolve();
      }).catch(() => {
        this.subIterDone.resolve();
      });
      (async (s) => {
        await s.closed;
        this.stop();
      })(this.sub).then().catch();
    }
    unsubscribe(max) {
      this.sub.unsubscribe(max);
    }
    drain() {
      return this.sub.drain();
    }
    isDraining() {
      return this.sub.isDraining();
    }
    isClosed() {
      return this.sub.isClosed();
    }
    callback(e, msg) {
      this.sub.cancelTimeout();
      const [err, tm] = this.adapter(e, msg);
      if (err) {
        this.stop(err);
      }
      if (tm) {
        this.push(tm);
      }
    }
    getSubject() {
      return this.sub.getSubject();
    }
    getReceived() {
      return this.sub.getReceived();
    }
    getProcessed() {
      return this.sub.getProcessed();
    }
    getPending() {
      return this.sub.getPending();
    }
    getID() {
      return this.sub.getID();
    }
    getMax() {
      return this.sub.getMax();
    }
    get closed() {
      return this.sub.closed;
    }
  };
  var transportConfig;
  function setTransportFactory(config) {
    transportConfig = config;
  }
  function defaultPort() {
    return transportConfig !== void 0 && transportConfig.defaultPort !== void 0 ? transportConfig.defaultPort : 4222;
  }
  function getUrlParseFn() {
    return transportConfig !== void 0 && transportConfig.urlParseFn ? transportConfig.urlParseFn : void 0;
  }
  function newTransport() {
    if (!transportConfig || typeof transportConfig.factory !== "function") {
      throw new Error("transport fn is not set");
    }
    return transportConfig.factory();
  }
  function getResolveFn() {
    return transportConfig !== void 0 && transportConfig.dnsResolveFn ? transportConfig.dnsResolveFn : void 0;
  }
  var CR_LF = "\r\n";
  CR_LF.length;
  var CRLF = DataBuffer.fromAscii(CR_LF);
  var CR = new Uint8Array(CRLF)[0];
  var LF = new Uint8Array(CRLF)[1];
  function protoLen(ba) {
    for (let i = 0; i < ba.length; i++) {
      const n = i + 1;
      if (ba.byteLength > n && ba[i] === CR && ba[n] === LF) {
        return n + 1;
      }
    }
    return 0;
  }
  function extractProtocolMessage(a) {
    const len = protoLen(a);
    if (len > 0) {
      const ba = new Uint8Array(a);
      const out = ba.slice(0, len);
      return TD.decode(out);
    }
    return "";
  }
  var IPv4LEN = 4;
  var ASCII0 = 48;
  var ASCIIA = 65;
  var ASCIIa = 97;
  function ipV4(a, b, c, d) {
    const ip = new Uint8Array(16);
    const prefix = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      255,
      255
    ];
    prefix.forEach((v, idx) => {
      ip[idx] = v;
    });
    ip[12] = a;
    ip[13] = b;
    ip[14] = c;
    ip[15] = d;
    return ip;
  }
  function isIP(h) {
    return parseIP(h) !== void 0;
  }
  function parseIP(h) {
    for (let i = 0; i < h.length; i++) {
      switch (h[i]) {
        case ".":
          return parseIPv4(h);
        case ":":
          return parseIPv6(h);
      }
    }
    return;
  }
  function parseIPv4(s) {
    const ip = new Uint8Array(4);
    for (let i = 0; i < 4; i++) {
      if (s.length === 0) {
        return void 0;
      }
      if (i > 0) {
        if (s[0] !== ".") {
          return void 0;
        }
        s = s.substring(1);
      }
      const { n, c, ok } = dtoi(s);
      if (!ok || n > 255) {
        return void 0;
      }
      s = s.substring(c);
      ip[i] = n;
    }
    return ipV4(ip[0], ip[1], ip[2], ip[3]);
  }
  function parseIPv6(s) {
    const ip = new Uint8Array(16);
    let ellipsis = -1;
    if (s.length >= 2 && s[0] === ":" && s[1] === ":") {
      ellipsis = 0;
      s = s.substring(2);
      if (s.length === 0) {
        return ip;
      }
    }
    let i = 0;
    while (i < 16) {
      const { n, c, ok } = xtoi(s);
      if (!ok || n > 65535) {
        return void 0;
      }
      if (c < s.length && s[c] === ".") {
        if (ellipsis < 0 && i != 16 - 4) {
          return void 0;
        }
        if (i + 4 > 16) {
          return void 0;
        }
        const ip4 = parseIPv4(s);
        if (ip4 === void 0) {
          return void 0;
        }
        ip[i] = ip4[12];
        ip[i + 1] = ip4[13];
        ip[i + 2] = ip4[14];
        ip[i + 3] = ip4[15];
        s = "";
        i += IPv4LEN;
        break;
      }
      ip[i] = n >> 8;
      ip[i + 1] = n;
      i += 2;
      s = s.substring(c);
      if (s.length === 0) {
        break;
      }
      if (s[0] !== ":" || s.length == 1) {
        return void 0;
      }
      s = s.substring(1);
      if (s[0] === ":") {
        if (ellipsis >= 0) {
          return void 0;
        }
        ellipsis = i;
        s = s.substring(1);
        if (s.length === 0) {
          break;
        }
      }
    }
    if (s.length !== 0) {
      return void 0;
    }
    if (i < 16) {
      if (ellipsis < 0) {
        return void 0;
      }
      const n = 16 - i;
      for (let j = i - 1; j >= ellipsis; j--) {
        ip[j + n] = ip[j];
      }
      for (let j = ellipsis + n - 1; j >= ellipsis; j--) {
        ip[j] = 0;
      }
    } else if (ellipsis >= 0) {
      return void 0;
    }
    return ip;
  }
  function dtoi(s) {
    let i = 0;
    let n = 0;
    for (i = 0; i < s.length && 48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57; i++) {
      n = n * 10 + (s.charCodeAt(i) - ASCII0);
      if (n >= 16777215) {
        return {
          n: 16777215,
          c: i,
          ok: false
        };
      }
    }
    if (i === 0) {
      return {
        n: 0,
        c: 0,
        ok: false
      };
    }
    return {
      n,
      c: i,
      ok: true
    };
  }
  function xtoi(s) {
    let n = 0;
    let i = 0;
    for (i = 0; i < s.length; i++) {
      if (48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57) {
        n *= 16;
        n += s.charCodeAt(i) - ASCII0;
      } else if (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 102) {
        n *= 16;
        n += s.charCodeAt(i) - ASCIIa + 10;
      } else if (65 <= s.charCodeAt(i) && s.charCodeAt(i) <= 70) {
        n *= 16;
        n += s.charCodeAt(i) - ASCIIA + 10;
      } else {
        break;
      }
      if (n >= 16777215) {
        return {
          n: 0,
          c: i,
          ok: false
        };
      }
    }
    if (i === 0) {
      return {
        n: 0,
        c: i,
        ok: false
      };
    }
    return {
      n,
      c: i,
      ok: true
    };
  }
  function isIPV4OrHostname(hp) {
    if (hp.indexOf("[") !== -1 || hp.indexOf("::") !== -1) {
      return false;
    }
    if (hp.indexOf(".") !== -1) {
      return true;
    }
    if (hp.split(":").length <= 2) {
      return true;
    }
    return false;
  }
  function isIPV6(hp) {
    return !isIPV4OrHostname(hp);
  }
  function filterIpv6MappedToIpv4(hp) {
    const prefix = "::FFFF:";
    const idx = hp.toUpperCase().indexOf(prefix);
    if (idx !== -1 && hp.indexOf(".") !== -1) {
      let ip = hp.substring(idx + prefix.length);
      ip = ip.replace("[", "");
      return ip.replace("]", "");
    }
    return hp;
  }
  function hostPort(u) {
    u = u.trim();
    if (u.match(/^(.*:\/\/)(.*)/m)) {
      u = u.replace(/^(.*:\/\/)(.*)/gm, "$2");
    }
    u = filterIpv6MappedToIpv4(u);
    if (isIPV6(u) && u.indexOf("[") === -1) {
      u = `[${u}]`;
    }
    const op = isIPV6(u) ? u.match(/(]:)(\d+)/) : u.match(/(:)(\d+)/);
    const port = op && op.length === 3 && op[1] && op[2] ? parseInt(op[2]) : 4222;
    const protocol = port === 80 ? "https" : "http";
    const url = new URL(`${protocol}://${u}`);
    url.port = `${port}`;
    let hostname = url.hostname;
    if (hostname.charAt(0) === "[") {
      hostname = hostname.substring(1, hostname.length - 1);
    }
    const listen = url.host;
    return {
      listen,
      hostname,
      port
    };
  }
  var ServerImpl = class _ServerImpl {
    src;
    listen;
    hostname;
    port;
    didConnect;
    reconnects;
    lastConnect;
    gossiped;
    tlsName;
    resolves;
    constructor(u, gossiped = false) {
      this.src = u;
      this.tlsName = "";
      const v = hostPort(u);
      this.listen = v.listen;
      this.hostname = v.hostname;
      this.port = v.port;
      this.didConnect = false;
      this.reconnects = 0;
      this.lastConnect = 0;
      this.gossiped = gossiped;
    }
    toString() {
      return this.listen;
    }
    async resolve(opts) {
      if (!opts.fn || opts.resolve === false) {
        return [
          this
        ];
      }
      const buf = [];
      if (isIP(this.hostname)) {
        return [
          this
        ];
      } else {
        const ips = await opts.fn(this.hostname);
        if (opts.debug) {
          console.log(`resolve ${this.hostname} = ${ips.join(",")}`);
        }
        for (const ip of ips) {
          const proto = this.port === 80 ? "https" : "http";
          const url = new URL(`${proto}://${isIPV6(ip) ? "[" + ip + "]" : ip}`);
          url.port = `${this.port}`;
          const ss = new _ServerImpl(url.host, false);
          ss.tlsName = this.hostname;
          buf.push(ss);
        }
      }
      if (opts.randomize) {
        shuffle(buf);
      }
      this.resolves = buf;
      return buf;
    }
  };
  var Servers = class {
    firstSelect;
    servers;
    currentServer;
    tlsName;
    randomize;
    constructor(listens = [], opts = {}) {
      this.firstSelect = true;
      this.servers = [];
      this.tlsName = "";
      this.randomize = opts.randomize || false;
      const urlParseFn = getUrlParseFn();
      if (listens) {
        listens.forEach((hp) => {
          hp = urlParseFn ? urlParseFn(hp) : hp;
          this.servers.push(new ServerImpl(hp));
        });
        if (this.randomize) {
          this.servers = shuffle(this.servers);
        }
      }
      if (this.servers.length === 0) {
        this.addServer(`${DEFAULT_HOST}:${defaultPort()}`, false);
      }
      this.currentServer = this.servers[0];
    }
    clear() {
      this.servers.length = 0;
    }
    updateTLSName() {
      const cs = this.getCurrentServer();
      if (!isIP(cs.hostname)) {
        this.tlsName = cs.hostname;
        this.servers.forEach((s) => {
          if (s.gossiped) {
            s.tlsName = this.tlsName;
          }
        });
      }
    }
    getCurrentServer() {
      return this.currentServer;
    }
    addServer(u, implicit = false) {
      const urlParseFn = getUrlParseFn();
      u = urlParseFn ? urlParseFn(u) : u;
      const s = new ServerImpl(u, implicit);
      if (isIP(s.hostname)) {
        s.tlsName = this.tlsName;
      }
      this.servers.push(s);
    }
    selectServer() {
      if (this.firstSelect) {
        this.firstSelect = false;
        return this.currentServer;
      }
      const t = this.servers.shift();
      if (t) {
        this.servers.push(t);
        this.currentServer = t;
      }
      return t;
    }
    removeCurrentServer() {
      this.removeServer(this.currentServer);
    }
    removeServer(server) {
      if (server) {
        const index = this.servers.indexOf(server);
        this.servers.splice(index, 1);
      }
    }
    length() {
      return this.servers.length;
    }
    next() {
      return this.servers.length ? this.servers[0] : void 0;
    }
    getServers() {
      return this.servers;
    }
    update(info, encrypted) {
      const added = [];
      let deleted = [];
      const urlParseFn = getUrlParseFn();
      const discovered = /* @__PURE__ */ new Map();
      if (info.connect_urls && info.connect_urls.length > 0) {
        info.connect_urls.forEach((hp) => {
          hp = urlParseFn ? urlParseFn(hp, encrypted) : hp;
          const s = new ServerImpl(hp, true);
          discovered.set(hp, s);
        });
      }
      const toDelete = [];
      this.servers.forEach((s, index) => {
        const u = s.listen;
        if (s.gossiped && this.currentServer.listen !== u && discovered.get(u) === void 0) {
          toDelete.push(index);
        }
        discovered.delete(u);
      });
      toDelete.reverse();
      toDelete.forEach((index) => {
        const removed = this.servers.splice(index, 1);
        deleted = deleted.concat(removed[0].listen);
      });
      discovered.forEach((v, k) => {
        this.servers.push(v);
        added.push(k);
      });
      return {
        added,
        deleted
      };
    }
  };
  var MuxSubscription = class {
    baseInbox;
    reqs;
    constructor() {
      this.reqs = /* @__PURE__ */ new Map();
    }
    size() {
      return this.reqs.size;
    }
    init(prefix) {
      this.baseInbox = `${createInbox(prefix)}.`;
      return this.baseInbox;
    }
    add(r) {
      if (!isNaN(r.received)) {
        r.received = 0;
      }
      this.reqs.set(r.token, r);
    }
    get(token) {
      return this.reqs.get(token);
    }
    cancel(r) {
      this.reqs.delete(r.token);
    }
    getToken(m) {
      const s = m.subject || "";
      if (s.indexOf(this.baseInbox) === 0) {
        return s.substring(this.baseInbox.length);
      }
      return null;
    }
    all() {
      return Array.from(this.reqs.values());
    }
    handleError(isMuxPermissionError, err) {
      if (err && err.permissionContext) {
        if (isMuxPermissionError) {
          this.all().forEach((r) => {
            r.resolver(err, {});
          });
          return true;
        }
        const ctx = err.permissionContext;
        if (ctx.operation === "publish") {
          const req = this.all().find((s) => {
            return s.requestSubject === ctx.subject;
          });
          if (req) {
            req.resolver(err, {});
            return true;
          }
        }
      }
      return false;
    }
    dispatcher() {
      return (err, m) => {
        const token = this.getToken(m);
        if (token) {
          const r = this.get(token);
          if (r) {
            if (err === null && m.headers) {
              err = isRequestError(m);
            }
            r.resolver(err, m);
          }
        }
      };
    }
    close() {
      const err = NatsError.errorForCode(ErrorCode.Timeout);
      this.reqs.forEach((req) => {
        req.resolver(err, {});
      });
    }
  };
  var Heartbeat = class {
    ph;
    interval;
    maxOut;
    timer;
    pendings;
    constructor(ph, interval, maxOut) {
      this.ph = ph;
      this.interval = interval;
      this.maxOut = maxOut;
      this.pendings = [];
    }
    start() {
      this.cancel();
      this._schedule();
    }
    cancel(stale) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = void 0;
      }
      this._reset();
      if (stale) {
        this.ph.disconnect();
      }
    }
    _schedule() {
      this.timer = setTimeout(() => {
        this.ph.dispatchStatus({
          type: DebugEvents.PingTimer,
          data: `${this.pendings.length + 1}`
        });
        if (this.pendings.length === this.maxOut) {
          this.cancel(true);
          return;
        }
        const ping = deferred();
        this.ph.flush(ping).then(() => {
          this._reset();
        }).catch(() => {
          this.cancel();
        });
        this.pendings.push(ping);
        this._schedule();
      }, this.interval);
    }
    _reset() {
      this.pendings = this.pendings.filter((p) => {
        const d = p;
        d.resolve();
        return false;
      });
    }
  };
  var AssertionError = class extends Error {
    constructor(msg) {
      super(msg);
      this.name = "AssertionError";
    }
  };
  function assert(cond, msg = "Assertion failed.") {
    if (!cond) {
      throw new AssertionError(msg);
    }
  }
  var MIN_READ = 32 * 1024;
  var MAX_SIZE = 2 ** 32 - 2;
  function copy(src, dst, off = 0) {
    const r = dst.byteLength - off;
    if (src.byteLength > r) {
      src = src.subarray(0, r);
    }
    dst.set(src, off);
    return src.byteLength;
  }
  var DenoBuffer = class {
    _buf;
    _off;
    constructor(ab) {
      this._off = 0;
      if (ab == null) {
        this._buf = new Uint8Array(0);
        return;
      }
      this._buf = new Uint8Array(ab);
    }
    bytes(options = {
      copy: true
    }) {
      if (options.copy === false) return this._buf.subarray(this._off);
      return this._buf.slice(this._off);
    }
    empty() {
      return this._buf.byteLength <= this._off;
    }
    get length() {
      return this._buf.byteLength - this._off;
    }
    get capacity() {
      return this._buf.buffer.byteLength;
    }
    truncate(n) {
      if (n === 0) {
        this.reset();
        return;
      }
      if (n < 0 || n > this.length) {
        throw Error("bytes.Buffer: truncation out of range");
      }
      this._reslice(this._off + n);
    }
    reset() {
      this._reslice(0);
      this._off = 0;
    }
    _tryGrowByReslice(n) {
      const l = this._buf.byteLength;
      if (n <= this.capacity - l) {
        this._reslice(l + n);
        return l;
      }
      return -1;
    }
    _reslice(len) {
      assert(len <= this._buf.buffer.byteLength);
      this._buf = new Uint8Array(this._buf.buffer, 0, len);
    }
    readByte() {
      const a = new Uint8Array(1);
      if (this.read(a)) {
        return a[0];
      }
      return null;
    }
    read(p) {
      if (this.empty()) {
        this.reset();
        if (p.byteLength === 0) {
          return 0;
        }
        return null;
      }
      const nread = copy(this._buf.subarray(this._off), p);
      this._off += nread;
      return nread;
    }
    writeByte(n) {
      return this.write(Uint8Array.of(n));
    }
    writeString(s) {
      return this.write(TE.encode(s));
    }
    write(p) {
      const m = this._grow(p.byteLength);
      return copy(p, this._buf, m);
    }
    _grow(n) {
      const m = this.length;
      if (m === 0 && this._off !== 0) {
        this.reset();
      }
      const i = this._tryGrowByReslice(n);
      if (i >= 0) {
        return i;
      }
      const c = this.capacity;
      if (n <= Math.floor(c / 2) - m) {
        copy(this._buf.subarray(this._off), this._buf);
      } else if (c + n > MAX_SIZE) {
        throw new Error("The buffer cannot be grown beyond the maximum size.");
      } else {
        const buf = new Uint8Array(Math.min(2 * c + n, MAX_SIZE));
        copy(this._buf.subarray(this._off), buf);
        this._buf = buf;
      }
      this._off = 0;
      this._reslice(Math.min(m + n, MAX_SIZE));
      return m;
    }
    grow(n) {
      if (n < 0) {
        throw Error("Buffer._grow: negative count");
      }
      const m = this._grow(n);
      this._reslice(m);
    }
    readFrom(r) {
      let n = 0;
      const tmp = new Uint8Array(MIN_READ);
      while (true) {
        const shouldGrow = this.capacity - this.length < MIN_READ;
        const buf = shouldGrow ? tmp : new Uint8Array(this._buf.buffer, this.length);
        const nread = r.read(buf);
        if (nread === null) {
          return n;
        }
        if (shouldGrow) this.write(buf.subarray(0, nread));
        else this._reslice(this.length + nread);
        n += nread;
      }
    }
  };
  var Kind;
  (function(Kind2) {
    Kind2[Kind2["OK"] = 0] = "OK";
    Kind2[Kind2["ERR"] = 1] = "ERR";
    Kind2[Kind2["MSG"] = 2] = "MSG";
    Kind2[Kind2["INFO"] = 3] = "INFO";
    Kind2[Kind2["PING"] = 4] = "PING";
    Kind2[Kind2["PONG"] = 5] = "PONG";
  })(Kind || (Kind = {}));
  function newMsgArg() {
    const ma = {};
    ma.sid = -1;
    ma.hdr = -1;
    ma.size = -1;
    return ma;
  }
  var ASCII_0 = 48;
  var Parser = class {
    dispatcher;
    state;
    as;
    drop;
    hdr;
    ma;
    argBuf;
    msgBuf;
    constructor(dispatcher) {
      this.dispatcher = dispatcher;
      this.state = State.OP_START;
      this.as = 0;
      this.drop = 0;
      this.hdr = 0;
    }
    parse(buf) {
      let i;
      for (i = 0; i < buf.length; i++) {
        const b = buf[i];
        switch (this.state) {
          case State.OP_START:
            switch (b) {
              case cc.M:
              case cc.m:
                this.state = State.OP_M;
                this.hdr = -1;
                this.ma = newMsgArg();
                break;
              case cc.H:
              case cc.h:
                this.state = State.OP_H;
                this.hdr = 0;
                this.ma = newMsgArg();
                break;
              case cc.P:
              case cc.p:
                this.state = State.OP_P;
                break;
              case cc.PLUS:
                this.state = State.OP_PLUS;
                break;
              case cc.MINUS:
                this.state = State.OP_MINUS;
                break;
              case cc.I:
              case cc.i:
                this.state = State.OP_I;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_H:
            switch (b) {
              case cc.M:
              case cc.m:
                this.state = State.OP_M;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_M:
            switch (b) {
              case cc.S:
              case cc.s:
                this.state = State.OP_MS;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_MS:
            switch (b) {
              case cc.G:
              case cc.g:
                this.state = State.OP_MSG;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_MSG:
            switch (b) {
              case cc.SPACE:
              case cc.TAB:
                this.state = State.OP_MSG_SPC;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_MSG_SPC:
            switch (b) {
              case cc.SPACE:
              case cc.TAB:
                continue;
              default:
                this.state = State.MSG_ARG;
                this.as = i;
            }
            break;
          case State.MSG_ARG:
            switch (b) {
              case cc.CR:
                this.drop = 1;
                break;
              case cc.NL: {
                const arg = this.argBuf ? this.argBuf.bytes() : buf.subarray(this.as, i - this.drop);
                this.processMsgArgs(arg);
                this.drop = 0;
                this.as = i + 1;
                this.state = State.MSG_PAYLOAD;
                i = this.as + this.ma.size - 1;
                break;
              }
              default:
                if (this.argBuf) {
                  this.argBuf.writeByte(b);
                }
            }
            break;
          case State.MSG_PAYLOAD:
            if (this.msgBuf) {
              if (this.msgBuf.length >= this.ma.size) {
                const data = this.msgBuf.bytes({
                  copy: false
                });
                this.dispatcher.push({
                  kind: Kind.MSG,
                  msg: this.ma,
                  data
                });
                this.argBuf = void 0;
                this.msgBuf = void 0;
                this.state = State.MSG_END;
              } else {
                let toCopy = this.ma.size - this.msgBuf.length;
                const avail = buf.length - i;
                if (avail < toCopy) {
                  toCopy = avail;
                }
                if (toCopy > 0) {
                  this.msgBuf.write(buf.subarray(i, i + toCopy));
                  i = i + toCopy - 1;
                } else {
                  this.msgBuf.writeByte(b);
                }
              }
            } else if (i - this.as >= this.ma.size) {
              this.dispatcher.push({
                kind: Kind.MSG,
                msg: this.ma,
                data: buf.subarray(this.as, i)
              });
              this.argBuf = void 0;
              this.msgBuf = void 0;
              this.state = State.MSG_END;
            }
            break;
          case State.MSG_END:
            switch (b) {
              case cc.NL:
                this.drop = 0;
                this.as = i + 1;
                this.state = State.OP_START;
                break;
              default:
                continue;
            }
            break;
          case State.OP_PLUS:
            switch (b) {
              case cc.O:
              case cc.o:
                this.state = State.OP_PLUS_O;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_PLUS_O:
            switch (b) {
              case cc.K:
              case cc.k:
                this.state = State.OP_PLUS_OK;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_PLUS_OK:
            switch (b) {
              case cc.NL:
                this.dispatcher.push({
                  kind: Kind.OK
                });
                this.drop = 0;
                this.state = State.OP_START;
                break;
            }
            break;
          case State.OP_MINUS:
            switch (b) {
              case cc.E:
              case cc.e:
                this.state = State.OP_MINUS_E;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_MINUS_E:
            switch (b) {
              case cc.R:
              case cc.r:
                this.state = State.OP_MINUS_ER;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_MINUS_ER:
            switch (b) {
              case cc.R:
              case cc.r:
                this.state = State.OP_MINUS_ERR;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_MINUS_ERR:
            switch (b) {
              case cc.SPACE:
              case cc.TAB:
                this.state = State.OP_MINUS_ERR_SPC;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_MINUS_ERR_SPC:
            switch (b) {
              case cc.SPACE:
              case cc.TAB:
                continue;
              default:
                this.state = State.MINUS_ERR_ARG;
                this.as = i;
            }
            break;
          case State.MINUS_ERR_ARG:
            switch (b) {
              case cc.CR:
                this.drop = 1;
                break;
              case cc.NL: {
                let arg;
                if (this.argBuf) {
                  arg = this.argBuf.bytes();
                  this.argBuf = void 0;
                } else {
                  arg = buf.subarray(this.as, i - this.drop);
                }
                this.dispatcher.push({
                  kind: Kind.ERR,
                  data: arg
                });
                this.drop = 0;
                this.as = i + 1;
                this.state = State.OP_START;
                break;
              }
              default:
                if (this.argBuf) {
                  this.argBuf.write(Uint8Array.of(b));
                }
            }
            break;
          case State.OP_P:
            switch (b) {
              case cc.I:
              case cc.i:
                this.state = State.OP_PI;
                break;
              case cc.O:
              case cc.o:
                this.state = State.OP_PO;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_PO:
            switch (b) {
              case cc.N:
              case cc.n:
                this.state = State.OP_PON;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_PON:
            switch (b) {
              case cc.G:
              case cc.g:
                this.state = State.OP_PONG;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_PONG:
            switch (b) {
              case cc.NL:
                this.dispatcher.push({
                  kind: Kind.PONG
                });
                this.drop = 0;
                this.state = State.OP_START;
                break;
            }
            break;
          case State.OP_PI:
            switch (b) {
              case cc.N:
              case cc.n:
                this.state = State.OP_PIN;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_PIN:
            switch (b) {
              case cc.G:
              case cc.g:
                this.state = State.OP_PING;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_PING:
            switch (b) {
              case cc.NL:
                this.dispatcher.push({
                  kind: Kind.PING
                });
                this.drop = 0;
                this.state = State.OP_START;
                break;
            }
            break;
          case State.OP_I:
            switch (b) {
              case cc.N:
              case cc.n:
                this.state = State.OP_IN;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_IN:
            switch (b) {
              case cc.F:
              case cc.f:
                this.state = State.OP_INF;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_INF:
            switch (b) {
              case cc.O:
              case cc.o:
                this.state = State.OP_INFO;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_INFO:
            switch (b) {
              case cc.SPACE:
              case cc.TAB:
                this.state = State.OP_INFO_SPC;
                break;
              default:
                throw this.fail(buf.subarray(i));
            }
            break;
          case State.OP_INFO_SPC:
            switch (b) {
              case cc.SPACE:
              case cc.TAB:
                continue;
              default:
                this.state = State.INFO_ARG;
                this.as = i;
            }
            break;
          case State.INFO_ARG:
            switch (b) {
              case cc.CR:
                this.drop = 1;
                break;
              case cc.NL: {
                let arg;
                if (this.argBuf) {
                  arg = this.argBuf.bytes();
                  this.argBuf = void 0;
                } else {
                  arg = buf.subarray(this.as, i - this.drop);
                }
                this.dispatcher.push({
                  kind: Kind.INFO,
                  data: arg
                });
                this.drop = 0;
                this.as = i + 1;
                this.state = State.OP_START;
                break;
              }
              default:
                if (this.argBuf) {
                  this.argBuf.writeByte(b);
                }
            }
            break;
          default:
            throw this.fail(buf.subarray(i));
        }
      }
      if ((this.state === State.MSG_ARG || this.state === State.MINUS_ERR_ARG || this.state === State.INFO_ARG) && !this.argBuf) {
        this.argBuf = new DenoBuffer(buf.subarray(this.as, i - this.drop));
      }
      if (this.state === State.MSG_PAYLOAD && !this.msgBuf) {
        if (!this.argBuf) {
          this.cloneMsgArg();
        }
        this.msgBuf = new DenoBuffer(buf.subarray(this.as));
      }
    }
    cloneMsgArg() {
      const s = this.ma.subject.length;
      const r = this.ma.reply ? this.ma.reply.length : 0;
      const buf = new Uint8Array(s + r);
      buf.set(this.ma.subject);
      if (this.ma.reply) {
        buf.set(this.ma.reply, s);
      }
      this.argBuf = new DenoBuffer(buf);
      this.ma.subject = buf.subarray(0, s);
      if (this.ma.reply) {
        this.ma.reply = buf.subarray(s);
      }
    }
    processMsgArgs(arg) {
      if (this.hdr >= 0) {
        return this.processHeaderMsgArgs(arg);
      }
      const args = [];
      let start = -1;
      for (let i = 0; i < arg.length; i++) {
        const b = arg[i];
        switch (b) {
          case cc.SPACE:
          case cc.TAB:
          case cc.CR:
          case cc.NL:
            if (start >= 0) {
              args.push(arg.subarray(start, i));
              start = -1;
            }
            break;
          default:
            if (start < 0) {
              start = i;
            }
        }
      }
      if (start >= 0) {
        args.push(arg.subarray(start));
      }
      switch (args.length) {
        case 3:
          this.ma.subject = args[0];
          this.ma.sid = this.protoParseInt(args[1]);
          this.ma.reply = void 0;
          this.ma.size = this.protoParseInt(args[2]);
          break;
        case 4:
          this.ma.subject = args[0];
          this.ma.sid = this.protoParseInt(args[1]);
          this.ma.reply = args[2];
          this.ma.size = this.protoParseInt(args[3]);
          break;
        default:
          throw this.fail(arg, "processMsgArgs Parse Error");
      }
      if (this.ma.sid < 0) {
        throw this.fail(arg, "processMsgArgs Bad or Missing Sid Error");
      }
      if (this.ma.size < 0) {
        throw this.fail(arg, "processMsgArgs Bad or Missing Size Error");
      }
    }
    fail(data, label = "") {
      if (!label) {
        label = `parse error [${this.state}]`;
      } else {
        label = `${label} [${this.state}]`;
      }
      return new Error(`${label}: ${TD.decode(data)}`);
    }
    processHeaderMsgArgs(arg) {
      const args = [];
      let start = -1;
      for (let i = 0; i < arg.length; i++) {
        const b = arg[i];
        switch (b) {
          case cc.SPACE:
          case cc.TAB:
          case cc.CR:
          case cc.NL:
            if (start >= 0) {
              args.push(arg.subarray(start, i));
              start = -1;
            }
            break;
          default:
            if (start < 0) {
              start = i;
            }
        }
      }
      if (start >= 0) {
        args.push(arg.subarray(start));
      }
      switch (args.length) {
        case 4:
          this.ma.subject = args[0];
          this.ma.sid = this.protoParseInt(args[1]);
          this.ma.reply = void 0;
          this.ma.hdr = this.protoParseInt(args[2]);
          this.ma.size = this.protoParseInt(args[3]);
          break;
        case 5:
          this.ma.subject = args[0];
          this.ma.sid = this.protoParseInt(args[1]);
          this.ma.reply = args[2];
          this.ma.hdr = this.protoParseInt(args[3]);
          this.ma.size = this.protoParseInt(args[4]);
          break;
        default:
          throw this.fail(arg, "processHeaderMsgArgs Parse Error");
      }
      if (this.ma.sid < 0) {
        throw this.fail(arg, "processHeaderMsgArgs Bad or Missing Sid Error");
      }
      if (this.ma.hdr < 0 || this.ma.hdr > this.ma.size) {
        throw this.fail(arg, "processHeaderMsgArgs Bad or Missing Header Size Error");
      }
      if (this.ma.size < 0) {
        throw this.fail(arg, "processHeaderMsgArgs Bad or Missing Size Error");
      }
    }
    protoParseInt(a) {
      if (a.length === 0) {
        return -1;
      }
      let n = 0;
      for (let i = 0; i < a.length; i++) {
        if (a[i] < 48 || a[i] > 57) {
          return -1;
        }
        n = n * 10 + (a[i] - ASCII_0);
      }
      return n;
    }
  };
  var State;
  (function(State2) {
    State2[State2["OP_START"] = 0] = "OP_START";
    State2[State2["OP_PLUS"] = 1] = "OP_PLUS";
    State2[State2["OP_PLUS_O"] = 2] = "OP_PLUS_O";
    State2[State2["OP_PLUS_OK"] = 3] = "OP_PLUS_OK";
    State2[State2["OP_MINUS"] = 4] = "OP_MINUS";
    State2[State2["OP_MINUS_E"] = 5] = "OP_MINUS_E";
    State2[State2["OP_MINUS_ER"] = 6] = "OP_MINUS_ER";
    State2[State2["OP_MINUS_ERR"] = 7] = "OP_MINUS_ERR";
    State2[State2["OP_MINUS_ERR_SPC"] = 8] = "OP_MINUS_ERR_SPC";
    State2[State2["MINUS_ERR_ARG"] = 9] = "MINUS_ERR_ARG";
    State2[State2["OP_M"] = 10] = "OP_M";
    State2[State2["OP_MS"] = 11] = "OP_MS";
    State2[State2["OP_MSG"] = 12] = "OP_MSG";
    State2[State2["OP_MSG_SPC"] = 13] = "OP_MSG_SPC";
    State2[State2["MSG_ARG"] = 14] = "MSG_ARG";
    State2[State2["MSG_PAYLOAD"] = 15] = "MSG_PAYLOAD";
    State2[State2["MSG_END"] = 16] = "MSG_END";
    State2[State2["OP_H"] = 17] = "OP_H";
    State2[State2["OP_P"] = 18] = "OP_P";
    State2[State2["OP_PI"] = 19] = "OP_PI";
    State2[State2["OP_PIN"] = 20] = "OP_PIN";
    State2[State2["OP_PING"] = 21] = "OP_PING";
    State2[State2["OP_PO"] = 22] = "OP_PO";
    State2[State2["OP_PON"] = 23] = "OP_PON";
    State2[State2["OP_PONG"] = 24] = "OP_PONG";
    State2[State2["OP_I"] = 25] = "OP_I";
    State2[State2["OP_IN"] = 26] = "OP_IN";
    State2[State2["OP_INF"] = 27] = "OP_INF";
    State2[State2["OP_INFO"] = 28] = "OP_INFO";
    State2[State2["OP_INFO_SPC"] = 29] = "OP_INFO_SPC";
    State2[State2["INFO_ARG"] = 30] = "INFO_ARG";
  })(State || (State = {}));
  var cc;
  (function(cc2) {
    cc2[cc2["CR"] = "\r".charCodeAt(0)] = "CR";
    cc2[cc2["E"] = "E".charCodeAt(0)] = "E";
    cc2[cc2["e"] = "e".charCodeAt(0)] = "e";
    cc2[cc2["F"] = "F".charCodeAt(0)] = "F";
    cc2[cc2["f"] = "f".charCodeAt(0)] = "f";
    cc2[cc2["G"] = "G".charCodeAt(0)] = "G";
    cc2[cc2["g"] = "g".charCodeAt(0)] = "g";
    cc2[cc2["H"] = "H".charCodeAt(0)] = "H";
    cc2[cc2["h"] = "h".charCodeAt(0)] = "h";
    cc2[cc2["I"] = "I".charCodeAt(0)] = "I";
    cc2[cc2["i"] = "i".charCodeAt(0)] = "i";
    cc2[cc2["K"] = "K".charCodeAt(0)] = "K";
    cc2[cc2["k"] = "k".charCodeAt(0)] = "k";
    cc2[cc2["M"] = "M".charCodeAt(0)] = "M";
    cc2[cc2["m"] = "m".charCodeAt(0)] = "m";
    cc2[cc2["MINUS"] = "-".charCodeAt(0)] = "MINUS";
    cc2[cc2["N"] = "N".charCodeAt(0)] = "N";
    cc2[cc2["n"] = "n".charCodeAt(0)] = "n";
    cc2[cc2["NL"] = "\n".charCodeAt(0)] = "NL";
    cc2[cc2["O"] = "O".charCodeAt(0)] = "O";
    cc2[cc2["o"] = "o".charCodeAt(0)] = "o";
    cc2[cc2["P"] = "P".charCodeAt(0)] = "P";
    cc2[cc2["p"] = "p".charCodeAt(0)] = "p";
    cc2[cc2["PLUS"] = "+".charCodeAt(0)] = "PLUS";
    cc2[cc2["R"] = "R".charCodeAt(0)] = "R";
    cc2[cc2["r"] = "r".charCodeAt(0)] = "r";
    cc2[cc2["S"] = "S".charCodeAt(0)] = "S";
    cc2[cc2["s"] = "s".charCodeAt(0)] = "s";
    cc2[cc2["SPACE"] = " ".charCodeAt(0)] = "SPACE";
    cc2[cc2["TAB"] = "	".charCodeAt(0)] = "TAB";
  })(cc || (cc = {}));
  (function(nacl2) {
    "use strict";
    var u64 = function(h, l) {
      this.hi = h | 0 >>> 0;
      this.lo = l | 0 >>> 0;
    };
    var gf = function(init2) {
      var i, r = new Float64Array(16);
      if (init2) for (i = 0; i < init2.length; i++) r[i] = init2[i];
      return r;
    };
    var randombytes = function() {
      throw new Error("no PRNG");
    };
    var _0 = new Uint8Array(16);
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var gf0 = gf(), gf1 = gf([
      1
    ]), _121665 = gf([
      56129,
      1
    ]), D = gf([
      30883,
      4953,
      19914,
      30187,
      55467,
      16705,
      2637,
      112,
      59544,
      30585,
      16505,
      36039,
      65139,
      11119,
      27886,
      20995
    ]), D2 = gf([
      61785,
      9906,
      39828,
      60374,
      45398,
      33411,
      5274,
      224,
      53552,
      61171,
      33010,
      6542,
      64743,
      22239,
      55772,
      9222
    ]), X = gf([
      54554,
      36645,
      11616,
      51542,
      42930,
      38181,
      51040,
      26924,
      56412,
      64982,
      57905,
      49316,
      21502,
      52590,
      14035,
      8553
    ]), Y = gf([
      26200,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214
    ]), I = gf([
      41136,
      18958,
      6951,
      50414,
      58488,
      44335,
      6150,
      12099,
      55207,
      15867,
      153,
      11085,
      57099,
      20417,
      9344,
      11139
    ]);
    function L32(x, c) {
      return x << c | x >>> 32 - c;
    }
    function ld32(x, i) {
      var u = x[i + 3] & 255;
      u = u << 8 | x[i + 2] & 255;
      u = u << 8 | x[i + 1] & 255;
      return u << 8 | x[i + 0] & 255;
    }
    function dl64(x, i) {
      var h = x[i] << 24 | x[i + 1] << 16 | x[i + 2] << 8 | x[i + 3];
      var l = x[i + 4] << 24 | x[i + 5] << 16 | x[i + 6] << 8 | x[i + 7];
      return new u64(h, l);
    }
    function st32(x, j, u) {
      var i;
      for (i = 0; i < 4; i++) {
        x[j + i] = u & 255;
        u >>>= 8;
      }
    }
    function ts64(x, i, u) {
      x[i] = u.hi >> 24 & 255;
      x[i + 1] = u.hi >> 16 & 255;
      x[i + 2] = u.hi >> 8 & 255;
      x[i + 3] = u.hi & 255;
      x[i + 4] = u.lo >> 24 & 255;
      x[i + 5] = u.lo >> 16 & 255;
      x[i + 6] = u.lo >> 8 & 255;
      x[i + 7] = u.lo & 255;
    }
    function vn(x, xi, y, yi, n) {
      var i, d = 0;
      for (i = 0; i < n; i++) d |= x[xi + i] ^ y[yi + i];
      return (1 & d - 1 >>> 8) - 1;
    }
    function crypto_verify_16(x, xi, y, yi) {
      return vn(x, xi, y, yi, 16);
    }
    function crypto_verify_32(x, xi, y, yi) {
      return vn(x, xi, y, yi, 32);
    }
    function core(out, inp, k, c, h) {
      var w = new Uint32Array(16), x = new Uint32Array(16), y = new Uint32Array(16), t = new Uint32Array(4);
      var i, j, m;
      for (i = 0; i < 4; i++) {
        x[5 * i] = ld32(c, 4 * i);
        x[1 + i] = ld32(k, 4 * i);
        x[6 + i] = ld32(inp, 4 * i);
        x[11 + i] = ld32(k, 16 + 4 * i);
      }
      for (i = 0; i < 16; i++) y[i] = x[i];
      for (i = 0; i < 20; i++) {
        for (j = 0; j < 4; j++) {
          for (m = 0; m < 4; m++) t[m] = x[(5 * j + 4 * m) % 16];
          t[1] ^= L32(t[0] + t[3] | 0, 7);
          t[2] ^= L32(t[1] + t[0] | 0, 9);
          t[3] ^= L32(t[2] + t[1] | 0, 13);
          t[0] ^= L32(t[3] + t[2] | 0, 18);
          for (m = 0; m < 4; m++) w[4 * j + (j + m) % 4] = t[m];
        }
        for (m = 0; m < 16; m++) x[m] = w[m];
      }
      if (h) {
        for (i = 0; i < 16; i++) x[i] = x[i] + y[i] | 0;
        for (i = 0; i < 4; i++) {
          x[5 * i] = x[5 * i] - ld32(c, 4 * i) | 0;
          x[6 + i] = x[6 + i] - ld32(inp, 4 * i) | 0;
        }
        for (i = 0; i < 4; i++) {
          st32(out, 4 * i, x[5 * i]);
          st32(out, 16 + 4 * i, x[6 + i]);
        }
      } else {
        for (i = 0; i < 16; i++) st32(out, 4 * i, x[i] + y[i] | 0);
      }
    }
    function crypto_core_salsa20(out, inp, k, c) {
      core(out, inp, k, c, false);
      return 0;
    }
    function crypto_core_hsalsa20(out, inp, k, c) {
      core(out, inp, k, c, true);
      return 0;
    }
    var sigma = new Uint8Array([
      101,
      120,
      112,
      97,
      110,
      100,
      32,
      51,
      50,
      45,
      98,
      121,
      116,
      101,
      32,
      107
    ]);
    function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
      var z = new Uint8Array(16), x = new Uint8Array(64);
      var u, i;
      if (!b) return 0;
      for (i = 0; i < 16; i++) z[i] = 0;
      for (i = 0; i < 8; i++) z[i] = n[i];
      while (b >= 64) {
        crypto_core_salsa20(x, z, k, sigma);
        for (i = 0; i < 64; i++) c[cpos + i] = (m ? m[mpos + i] : 0) ^ x[i];
        u = 1;
        for (i = 8; i < 16; i++) {
          u = u + (z[i] & 255) | 0;
          z[i] = u & 255;
          u >>>= 8;
        }
        b -= 64;
        cpos += 64;
        if (m) mpos += 64;
      }
      if (b > 0) {
        crypto_core_salsa20(x, z, k, sigma);
        for (i = 0; i < b; i++) c[cpos + i] = (m ? m[mpos + i] : 0) ^ x[i];
      }
      return 0;
    }
    function crypto_stream_salsa20(c, cpos, d, n, k) {
      return crypto_stream_salsa20_xor(c, cpos, null, 0, d, n, k);
    }
    function crypto_stream(c, cpos, d, n, k) {
      var s = new Uint8Array(32);
      crypto_core_hsalsa20(s, n, k, sigma);
      return crypto_stream_salsa20(c, cpos, d, n.subarray(16), s);
    }
    function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
      var s = new Uint8Array(32);
      crypto_core_hsalsa20(s, n, k, sigma);
      return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, n.subarray(16), s);
    }
    function add1305(h, c) {
      var j, u = 0;
      for (j = 0; j < 17; j++) {
        u = u + (h[j] + c[j] | 0) | 0;
        h[j] = u & 255;
        u >>>= 8;
      }
    }
    var minusp = new Uint32Array([
      5,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      252
    ]);
    function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
      var s, i, j, u;
      var x = new Uint32Array(17), r = new Uint32Array(17), h = new Uint32Array(17), c = new Uint32Array(17), g = new Uint32Array(17);
      for (j = 0; j < 17; j++) r[j] = h[j] = 0;
      for (j = 0; j < 16; j++) r[j] = k[j];
      r[3] &= 15;
      r[4] &= 252;
      r[7] &= 15;
      r[8] &= 252;
      r[11] &= 15;
      r[12] &= 252;
      r[15] &= 15;
      while (n > 0) {
        for (j = 0; j < 17; j++) c[j] = 0;
        for (j = 0; j < 16 && j < n; ++j) c[j] = m[mpos + j];
        c[j] = 1;
        mpos += j;
        n -= j;
        add1305(h, c);
        for (i = 0; i < 17; i++) {
          x[i] = 0;
          for (j = 0; j < 17; j++) x[i] = x[i] + h[j] * (j <= i ? r[i - j] : 320 * r[i + 17 - j] | 0) | 0 | 0;
        }
        for (i = 0; i < 17; i++) h[i] = x[i];
        u = 0;
        for (j = 0; j < 16; j++) {
          u = u + h[j] | 0;
          h[j] = u & 255;
          u >>>= 8;
        }
        u = u + h[16] | 0;
        h[16] = u & 3;
        u = 5 * (u >>> 2) | 0;
        for (j = 0; j < 16; j++) {
          u = u + h[j] | 0;
          h[j] = u & 255;
          u >>>= 8;
        }
        u = u + h[16] | 0;
        h[16] = u;
      }
      for (j = 0; j < 17; j++) g[j] = h[j];
      add1305(h, minusp);
      s = -(h[16] >>> 7) | 0;
      for (j = 0; j < 17; j++) h[j] ^= s & (g[j] ^ h[j]);
      for (j = 0; j < 16; j++) c[j] = k[j + 16];
      c[16] = 0;
      add1305(h, c);
      for (j = 0; j < 16; j++) out[outpos + j] = h[j];
      return 0;
    }
    function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
      var x = new Uint8Array(16);
      crypto_onetimeauth(x, 0, m, mpos, n, k);
      return crypto_verify_16(h, hpos, x, 0);
    }
    function crypto_secretbox(c, m, d, n, k) {
      var i;
      if (d < 32) return -1;
      crypto_stream_xor(c, 0, m, 0, d, n, k);
      crypto_onetimeauth(c, 16, c, 32, d - 32, c);
      for (i = 0; i < 16; i++) c[i] = 0;
      return 0;
    }
    function crypto_secretbox_open(m, c, d, n, k) {
      var i;
      var x = new Uint8Array(32);
      if (d < 32) return -1;
      crypto_stream(x, 0, 32, n, k);
      if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
      crypto_stream_xor(m, 0, c, 0, d, n, k);
      for (i = 0; i < 32; i++) m[i] = 0;
      return 0;
    }
    function set25519(r, a) {
      var i;
      for (i = 0; i < 16; i++) r[i] = a[i] | 0;
    }
    function car25519(o) {
      var c;
      var i;
      for (i = 0; i < 16; i++) {
        o[i] += 65536;
        c = Math.floor(o[i] / 65536);
        o[(i + 1) * (i < 15 ? 1 : 0)] += c - 1 + 37 * (c - 1) * (i === 15 ? 1 : 0);
        o[i] -= c * 65536;
      }
    }
    function sel25519(p, q, b) {
      var t, c = ~(b - 1);
      for (var i = 0; i < 16; i++) {
        t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
      }
    }
    function pack25519(o, n) {
      var i, j, b;
      var m = gf(), t = gf();
      for (i = 0; i < 16; i++) t[i] = n[i];
      car25519(t);
      car25519(t);
      car25519(t);
      for (j = 0; j < 2; j++) {
        m[0] = t[0] - 65517;
        for (i = 1; i < 15; i++) {
          m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
          m[i - 1] &= 65535;
        }
        m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
        b = m[15] >> 16 & 1;
        m[14] &= 65535;
        sel25519(t, m, 1 - b);
      }
      for (i = 0; i < 16; i++) {
        o[2 * i] = t[i] & 255;
        o[2 * i + 1] = t[i] >> 8;
      }
    }
    function neq25519(a, b) {
      var c = new Uint8Array(32), d = new Uint8Array(32);
      pack25519(c, a);
      pack25519(d, b);
      return crypto_verify_32(c, 0, d, 0);
    }
    function par25519(a) {
      var d = new Uint8Array(32);
      pack25519(d, a);
      return d[0] & 1;
    }
    function unpack25519(o, n) {
      var i;
      for (i = 0; i < 16; i++) o[i] = n[2 * i] + (n[2 * i + 1] << 8);
      o[15] &= 32767;
    }
    function A(o, a, b) {
      var i;
      for (i = 0; i < 16; i++) o[i] = a[i] + b[i] | 0;
    }
    function Z(o, a, b) {
      var i;
      for (i = 0; i < 16; i++) o[i] = a[i] - b[i] | 0;
    }
    function M(o, a, b) {
      var i, j, t = new Float64Array(31);
      for (i = 0; i < 31; i++) t[i] = 0;
      for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
          t[i + j] += a[i] * b[j];
        }
      }
      for (i = 0; i < 15; i++) {
        t[i] += 38 * t[i + 16];
      }
      for (i = 0; i < 16; i++) o[i] = t[i];
      car25519(o);
      car25519(o);
    }
    function S(o, a) {
      M(o, a, a);
    }
    function inv25519(o, i) {
      var c = gf();
      var a;
      for (a = 0; a < 16; a++) c[a] = i[a];
      for (a = 253; a >= 0; a--) {
        S(c, c);
        if (a !== 2 && a !== 4) M(c, c, i);
      }
      for (a = 0; a < 16; a++) o[a] = c[a];
    }
    function pow2523(o, i) {
      var c = gf();
      var a;
      for (a = 0; a < 16; a++) c[a] = i[a];
      for (a = 250; a >= 0; a--) {
        S(c, c);
        if (a !== 1) M(c, c, i);
      }
      for (a = 0; a < 16; a++) o[a] = c[a];
    }
    function crypto_scalarmult(q, n, p) {
      var z = new Uint8Array(32);
      var x = new Float64Array(80), r, i;
      var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
      for (i = 0; i < 31; i++) z[i] = n[i];
      z[31] = n[31] & 127 | 64;
      z[0] &= 248;
      unpack25519(x, p);
      for (i = 0; i < 16; i++) {
        b[i] = x[i];
        d[i] = a[i] = c[i] = 0;
      }
      a[0] = d[0] = 1;
      for (i = 254; i >= 0; --i) {
        r = z[i >>> 3] >>> (i & 7) & 1;
        sel25519(a, b, r);
        sel25519(c, d, r);
        A(e, a, c);
        Z(a, a, c);
        A(c, b, d);
        Z(b, b, d);
        S(d, e);
        S(f, a);
        M(a, c, a);
        M(c, b, e);
        A(e, a, c);
        Z(a, a, c);
        S(b, a);
        Z(c, d, f);
        M(a, c, _121665);
        A(a, a, d);
        M(c, c, a);
        M(a, d, f);
        M(d, b, x);
        S(b, e);
        sel25519(a, b, r);
        sel25519(c, d, r);
      }
      for (i = 0; i < 16; i++) {
        x[i + 16] = a[i];
        x[i + 32] = c[i];
        x[i + 48] = b[i];
        x[i + 64] = d[i];
      }
      var x32 = x.subarray(32);
      var x16 = x.subarray(16);
      inv25519(x32, x32);
      M(x16, x16, x32);
      pack25519(q, x16);
      return 0;
    }
    function crypto_scalarmult_base(q, n) {
      return crypto_scalarmult(q, n, _9);
    }
    function crypto_box_keypair(y, x) {
      randombytes(x, 32);
      return crypto_scalarmult_base(y, x);
    }
    function crypto_box_beforenm(k, y, x) {
      var s = new Uint8Array(32);
      crypto_scalarmult(s, x, y);
      return crypto_core_hsalsa20(k, _0, s, sigma);
    }
    var crypto_box_afternm = crypto_secretbox;
    var crypto_box_open_afternm = crypto_secretbox_open;
    function crypto_box(c, m, d, n, y, x) {
      var k = new Uint8Array(32);
      crypto_box_beforenm(k, y, x);
      return crypto_box_afternm(c, m, d, n, k);
    }
    function crypto_box_open(m, c, d, n, y, x) {
      var k = new Uint8Array(32);
      crypto_box_beforenm(k, y, x);
      return crypto_box_open_afternm(m, c, d, n, k);
    }
    function add64() {
      var a = 0, b = 0, c = 0, d = 0, m16 = 65535, l, h, i;
      for (i = 0; i < arguments.length; i++) {
        l = arguments[i].lo;
        h = arguments[i].hi;
        a += l & m16;
        b += l >>> 16;
        c += h & m16;
        d += h >>> 16;
      }
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      return new u64(c & m16 | d << 16, a & m16 | b << 16);
    }
    function shr64(x, c) {
      return new u64(x.hi >>> c, x.lo >>> c | x.hi << 32 - c);
    }
    function xor64() {
      var l = 0, h = 0, i;
      for (i = 0; i < arguments.length; i++) {
        l ^= arguments[i].lo;
        h ^= arguments[i].hi;
      }
      return new u64(h, l);
    }
    function R(x, c) {
      var h, l, c1 = 32 - c;
      if (c < 32) {
        h = x.hi >>> c | x.lo << c1;
        l = x.lo >>> c | x.hi << c1;
      } else if (c < 64) {
        h = x.lo >>> c | x.hi << c1;
        l = x.hi >>> c | x.lo << c1;
      }
      return new u64(h, l);
    }
    function Ch(x, y, z) {
      var h = x.hi & y.hi ^ ~x.hi & z.hi, l = x.lo & y.lo ^ ~x.lo & z.lo;
      return new u64(h, l);
    }
    function Maj(x, y, z) {
      var h = x.hi & y.hi ^ x.hi & z.hi ^ y.hi & z.hi, l = x.lo & y.lo ^ x.lo & z.lo ^ y.lo & z.lo;
      return new u64(h, l);
    }
    function Sigma0(x) {
      return xor64(R(x, 28), R(x, 34), R(x, 39));
    }
    function Sigma1(x) {
      return xor64(R(x, 14), R(x, 18), R(x, 41));
    }
    function sigma0(x) {
      return xor64(R(x, 1), R(x, 8), shr64(x, 7));
    }
    function sigma1(x) {
      return xor64(R(x, 19), R(x, 61), shr64(x, 6));
    }
    var K = [
      new u64(1116352408, 3609767458),
      new u64(1899447441, 602891725),
      new u64(3049323471, 3964484399),
      new u64(3921009573, 2173295548),
      new u64(961987163, 4081628472),
      new u64(1508970993, 3053834265),
      new u64(2453635748, 2937671579),
      new u64(2870763221, 3664609560),
      new u64(3624381080, 2734883394),
      new u64(310598401, 1164996542),
      new u64(607225278, 1323610764),
      new u64(1426881987, 3590304994),
      new u64(1925078388, 4068182383),
      new u64(2162078206, 991336113),
      new u64(2614888103, 633803317),
      new u64(3248222580, 3479774868),
      new u64(3835390401, 2666613458),
      new u64(4022224774, 944711139),
      new u64(264347078, 2341262773),
      new u64(604807628, 2007800933),
      new u64(770255983, 1495990901),
      new u64(1249150122, 1856431235),
      new u64(1555081692, 3175218132),
      new u64(1996064986, 2198950837),
      new u64(2554220882, 3999719339),
      new u64(2821834349, 766784016),
      new u64(2952996808, 2566594879),
      new u64(3210313671, 3203337956),
      new u64(3336571891, 1034457026),
      new u64(3584528711, 2466948901),
      new u64(113926993, 3758326383),
      new u64(338241895, 168717936),
      new u64(666307205, 1188179964),
      new u64(773529912, 1546045734),
      new u64(1294757372, 1522805485),
      new u64(1396182291, 2643833823),
      new u64(1695183700, 2343527390),
      new u64(1986661051, 1014477480),
      new u64(2177026350, 1206759142),
      new u64(2456956037, 344077627),
      new u64(2730485921, 1290863460),
      new u64(2820302411, 3158454273),
      new u64(3259730800, 3505952657),
      new u64(3345764771, 106217008),
      new u64(3516065817, 3606008344),
      new u64(3600352804, 1432725776),
      new u64(4094571909, 1467031594),
      new u64(275423344, 851169720),
      new u64(430227734, 3100823752),
      new u64(506948616, 1363258195),
      new u64(659060556, 3750685593),
      new u64(883997877, 3785050280),
      new u64(958139571, 3318307427),
      new u64(1322822218, 3812723403),
      new u64(1537002063, 2003034995),
      new u64(1747873779, 3602036899),
      new u64(1955562222, 1575990012),
      new u64(2024104815, 1125592928),
      new u64(2227730452, 2716904306),
      new u64(2361852424, 442776044),
      new u64(2428436474, 593698344),
      new u64(2756734187, 3733110249),
      new u64(3204031479, 2999351573),
      new u64(3329325298, 3815920427),
      new u64(3391569614, 3928383900),
      new u64(3515267271, 566280711),
      new u64(3940187606, 3454069534),
      new u64(4118630271, 4000239992),
      new u64(116418474, 1914138554),
      new u64(174292421, 2731055270),
      new u64(289380356, 3203993006),
      new u64(460393269, 320620315),
      new u64(685471733, 587496836),
      new u64(852142971, 1086792851),
      new u64(1017036298, 365543100),
      new u64(1126000580, 2618297676),
      new u64(1288033470, 3409855158),
      new u64(1501505948, 4234509866),
      new u64(1607167915, 987167468),
      new u64(1816402316, 1246189591)
    ];
    function crypto_hashblocks(x, m, n) {
      var z = [], b = [], a = [], w = [], t, i, j;
      for (i = 0; i < 8; i++) z[i] = a[i] = dl64(x, 8 * i);
      var pos = 0;
      while (n >= 128) {
        for (i = 0; i < 16; i++) w[i] = dl64(m, 8 * i + pos);
        for (i = 0; i < 80; i++) {
          for (j = 0; j < 8; j++) b[j] = a[j];
          t = add64(a[7], Sigma1(a[4]), Ch(a[4], a[5], a[6]), K[i], w[i % 16]);
          b[7] = add64(t, Sigma0(a[0]), Maj(a[0], a[1], a[2]));
          b[3] = add64(b[3], t);
          for (j = 0; j < 8; j++) a[(j + 1) % 8] = b[j];
          if (i % 16 === 15) {
            for (j = 0; j < 16; j++) {
              w[j] = add64(w[j], w[(j + 9) % 16], sigma0(w[(j + 1) % 16]), sigma1(w[(j + 14) % 16]));
            }
          }
        }
        for (i = 0; i < 8; i++) {
          a[i] = add64(a[i], z[i]);
          z[i] = a[i];
        }
        pos += 128;
        n -= 128;
      }
      for (i = 0; i < 8; i++) ts64(x, 8 * i, z[i]);
      return n;
    }
    var iv = new Uint8Array([
      106,
      9,
      230,
      103,
      243,
      188,
      201,
      8,
      187,
      103,
      174,
      133,
      132,
      202,
      167,
      59,
      60,
      110,
      243,
      114,
      254,
      148,
      248,
      43,
      165,
      79,
      245,
      58,
      95,
      29,
      54,
      241,
      81,
      14,
      82,
      127,
      173,
      230,
      130,
      209,
      155,
      5,
      104,
      140,
      43,
      62,
      108,
      31,
      31,
      131,
      217,
      171,
      251,
      65,
      189,
      107,
      91,
      224,
      205,
      25,
      19,
      126,
      33,
      121
    ]);
    function crypto_hash(out, m, n) {
      var h = new Uint8Array(64), x = new Uint8Array(256);
      var i, b = n;
      for (i = 0; i < 64; i++) h[i] = iv[i];
      crypto_hashblocks(h, m, n);
      n %= 128;
      for (i = 0; i < 256; i++) x[i] = 0;
      for (i = 0; i < n; i++) x[i] = m[b - n + i];
      x[n] = 128;
      n = 256 - 128 * (n < 112 ? 1 : 0);
      x[n - 9] = 0;
      ts64(x, n - 8, new u64(b / 536870912 | 0, b << 3));
      crypto_hashblocks(h, x, n);
      for (i = 0; i < 64; i++) out[i] = h[i];
      return 0;
    }
    function add(p, q) {
      var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
      Z(a, p[1], p[0]);
      Z(t, q[1], q[0]);
      M(a, a, t);
      A(b, p[0], p[1]);
      A(t, q[0], q[1]);
      M(b, b, t);
      M(c, p[3], q[3]);
      M(c, c, D2);
      M(d, p[2], q[2]);
      A(d, d, d);
      Z(e, b, a);
      Z(f, d, c);
      A(g, d, c);
      A(h, b, a);
      M(p[0], e, f);
      M(p[1], h, g);
      M(p[2], g, f);
      M(p[3], e, h);
    }
    function cswap(p, q, b) {
      var i;
      for (i = 0; i < 4; i++) {
        sel25519(p[i], q[i], b);
      }
    }
    function pack(r, p) {
      var tx = gf(), ty = gf(), zi = gf();
      inv25519(zi, p[2]);
      M(tx, p[0], zi);
      M(ty, p[1], zi);
      pack25519(r, ty);
      r[31] ^= par25519(tx) << 7;
    }
    function scalarmult(p, q, s) {
      var b, i;
      set25519(p[0], gf0);
      set25519(p[1], gf1);
      set25519(p[2], gf1);
      set25519(p[3], gf0);
      for (i = 255; i >= 0; --i) {
        b = s[i / 8 | 0] >> (i & 7) & 1;
        cswap(p, q, b);
        add(q, p);
        add(p, p);
        cswap(p, q, b);
      }
    }
    function scalarbase(p, s) {
      var q = [
        gf(),
        gf(),
        gf(),
        gf()
      ];
      set25519(q[0], X);
      set25519(q[1], Y);
      set25519(q[2], gf1);
      M(q[3], X, Y);
      scalarmult(p, q, s);
    }
    function crypto_sign_keypair(pk, sk, seeded) {
      var d = new Uint8Array(64);
      var p = [
        gf(),
        gf(),
        gf(),
        gf()
      ];
      var i;
      if (!seeded) randombytes(sk, 32);
      crypto_hash(d, sk, 32);
      d[0] &= 248;
      d[31] &= 127;
      d[31] |= 64;
      scalarbase(p, d);
      pack(pk, p);
      for (i = 0; i < 32; i++) sk[i + 32] = pk[i];
      return 0;
    }
    var L = new Float64Array([
      237,
      211,
      245,
      92,
      26,
      99,
      18,
      88,
      214,
      156,
      247,
      162,
      222,
      249,
      222,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      16
    ]);
    function modL(r, x) {
      var carry, i, j, k;
      for (i = 63; i >= 32; --i) {
        carry = 0;
        for (j = i - 32, k = i - 12; j < k; ++j) {
          x[j] += carry - 16 * x[i] * L[j - (i - 32)];
          carry = Math.floor((x[j] + 128) / 256);
          x[j] -= carry * 256;
        }
        x[j] += carry;
        x[i] = 0;
      }
      carry = 0;
      for (j = 0; j < 32; j++) {
        x[j] += carry - (x[31] >> 4) * L[j];
        carry = x[j] >> 8;
        x[j] &= 255;
      }
      for (j = 0; j < 32; j++) x[j] -= carry * L[j];
      for (i = 0; i < 32; i++) {
        x[i + 1] += x[i] >> 8;
        r[i] = x[i] & 255;
      }
    }
    function reduce(r) {
      var x = new Float64Array(64), i;
      for (i = 0; i < 64; i++) x[i] = r[i];
      for (i = 0; i < 64; i++) r[i] = 0;
      modL(r, x);
    }
    function crypto_sign(sm, m, n, sk) {
      var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
      var i, j, x = new Float64Array(64);
      var p = [
        gf(),
        gf(),
        gf(),
        gf()
      ];
      crypto_hash(d, sk, 32);
      d[0] &= 248;
      d[31] &= 127;
      d[31] |= 64;
      var smlen = n + 64;
      for (i = 0; i < n; i++) sm[64 + i] = m[i];
      for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];
      crypto_hash(r, sm.subarray(32), n + 32);
      reduce(r);
      scalarbase(p, r);
      pack(sm, p);
      for (i = 32; i < 64; i++) sm[i] = sk[i];
      crypto_hash(h, sm, n + 64);
      reduce(h);
      for (i = 0; i < 64; i++) x[i] = 0;
      for (i = 0; i < 32; i++) x[i] = r[i];
      for (i = 0; i < 32; i++) {
        for (j = 0; j < 32; j++) {
          x[i + j] += h[i] * d[j];
        }
      }
      modL(sm.subarray(32), x);
      return smlen;
    }
    function unpackneg(r, p) {
      var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
      set25519(r[2], gf1);
      unpack25519(r[1], p);
      S(num, r[1]);
      M(den, num, D);
      Z(num, num, r[2]);
      A(den, r[2], den);
      S(den2, den);
      S(den4, den2);
      M(den6, den4, den2);
      M(t, den6, num);
      M(t, t, den);
      pow2523(t, t);
      M(t, t, num);
      M(t, t, den);
      M(t, t, den);
      M(r[0], t, den);
      S(chk, r[0]);
      M(chk, chk, den);
      if (neq25519(chk, num)) M(r[0], r[0], I);
      S(chk, r[0]);
      M(chk, chk, den);
      if (neq25519(chk, num)) return -1;
      if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
      M(r[3], r[0], r[1]);
      return 0;
    }
    function crypto_sign_open(m, sm, n, pk) {
      var i;
      var t = new Uint8Array(32), h = new Uint8Array(64);
      var p = [
        gf(),
        gf(),
        gf(),
        gf()
      ], q = [
        gf(),
        gf(),
        gf(),
        gf()
      ];
      if (n < 64) return -1;
      if (unpackneg(q, pk)) return -1;
      for (i = 0; i < n; i++) m[i] = sm[i];
      for (i = 0; i < 32; i++) m[i + 32] = pk[i];
      crypto_hash(h, m, n);
      reduce(h);
      scalarmult(p, q, h);
      scalarbase(q, sm.subarray(32));
      add(p, q);
      pack(t, p);
      n -= 64;
      if (crypto_verify_32(sm, 0, t, 0)) {
        for (i = 0; i < n; i++) m[i] = 0;
        return -1;
      }
      for (i = 0; i < n; i++) m[i] = sm[i + 64];
      return n;
    }
    var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
    nacl2.lowlevel = {
      crypto_core_hsalsa20,
      crypto_stream_xor,
      crypto_stream,
      crypto_stream_salsa20_xor,
      crypto_stream_salsa20,
      crypto_onetimeauth,
      crypto_onetimeauth_verify,
      crypto_verify_16,
      crypto_verify_32,
      crypto_secretbox,
      crypto_secretbox_open,
      crypto_scalarmult,
      crypto_scalarmult_base,
      crypto_box_beforenm,
      crypto_box_afternm,
      crypto_box,
      crypto_box_open,
      crypto_box_keypair,
      crypto_hash,
      crypto_sign,
      crypto_sign_keypair,
      crypto_sign_open,
      crypto_secretbox_KEYBYTES,
      crypto_secretbox_NONCEBYTES,
      crypto_secretbox_ZEROBYTES,
      crypto_secretbox_BOXZEROBYTES,
      crypto_scalarmult_BYTES,
      crypto_scalarmult_SCALARBYTES,
      crypto_box_PUBLICKEYBYTES,
      crypto_box_SECRETKEYBYTES,
      crypto_box_BEFORENMBYTES,
      crypto_box_NONCEBYTES,
      crypto_box_ZEROBYTES,
      crypto_box_BOXZEROBYTES,
      crypto_sign_BYTES,
      crypto_sign_PUBLICKEYBYTES,
      crypto_sign_SECRETKEYBYTES,
      crypto_sign_SEEDBYTES,
      crypto_hash_BYTES,
      gf,
      D,
      L,
      pack25519,
      unpack25519,
      M,
      A,
      S,
      Z,
      pow2523,
      add,
      set25519,
      modL,
      scalarmult,
      scalarbase
    };
    function checkLengths(k, n) {
      if (k.length !== crypto_secretbox_KEYBYTES) throw new Error("bad key size");
      if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error("bad nonce size");
    }
    function checkBoxLengths(pk, sk) {
      if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error("bad public key size");
      if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
    }
    function checkArrayTypes() {
      for (var i = 0; i < arguments.length; i++) {
        if (!(arguments[i] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array");
      }
    }
    function cleanup(arr) {
      for (var i = 0; i < arr.length; i++) arr[i] = 0;
    }
    nacl2.randomBytes = function(n) {
      var b = new Uint8Array(n);
      randombytes(b, n);
      return b;
    };
    nacl2.secretbox = function(msg, nonce, key) {
      checkArrayTypes(msg, nonce, key);
      checkLengths(key, nonce);
      var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
      var c = new Uint8Array(m.length);
      for (var i = 0; i < msg.length; i++) m[i + crypto_secretbox_ZEROBYTES] = msg[i];
      crypto_secretbox(c, m, m.length, nonce, key);
      return c.subarray(crypto_secretbox_BOXZEROBYTES);
    };
    nacl2.secretbox.open = function(box, nonce, key) {
      checkArrayTypes(box, nonce, key);
      checkLengths(key, nonce);
      var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
      var m = new Uint8Array(c.length);
      for (var i = 0; i < box.length; i++) c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
      if (c.length < 32) return null;
      if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
      return m.subarray(crypto_secretbox_ZEROBYTES);
    };
    nacl2.secretbox.keyLength = crypto_secretbox_KEYBYTES;
    nacl2.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
    nacl2.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
    nacl2.scalarMult = function(n, p) {
      checkArrayTypes(n, p);
      if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
      if (p.length !== crypto_scalarmult_BYTES) throw new Error("bad p size");
      var q = new Uint8Array(crypto_scalarmult_BYTES);
      crypto_scalarmult(q, n, p);
      return q;
    };
    nacl2.scalarMult.base = function(n) {
      checkArrayTypes(n);
      if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
      var q = new Uint8Array(crypto_scalarmult_BYTES);
      crypto_scalarmult_base(q, n);
      return q;
    };
    nacl2.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
    nacl2.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
    nacl2.box = function(msg, nonce, publicKey, secretKey) {
      var k = nacl2.box.before(publicKey, secretKey);
      return nacl2.secretbox(msg, nonce, k);
    };
    nacl2.box.before = function(publicKey, secretKey) {
      checkArrayTypes(publicKey, secretKey);
      checkBoxLengths(publicKey, secretKey);
      var k = new Uint8Array(crypto_box_BEFORENMBYTES);
      crypto_box_beforenm(k, publicKey, secretKey);
      return k;
    };
    nacl2.box.after = nacl2.secretbox;
    nacl2.box.open = function(msg, nonce, publicKey, secretKey) {
      var k = nacl2.box.before(publicKey, secretKey);
      return nacl2.secretbox.open(msg, nonce, k);
    };
    nacl2.box.open.after = nacl2.secretbox.open;
    nacl2.box.keyPair = function() {
      var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
      var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
      crypto_box_keypair(pk, sk);
      return {
        publicKey: pk,
        secretKey: sk
      };
    };
    nacl2.box.keyPair.fromSecretKey = function(secretKey) {
      checkArrayTypes(secretKey);
      if (secretKey.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
      var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
      crypto_scalarmult_base(pk, secretKey);
      return {
        publicKey: pk,
        secretKey: new Uint8Array(secretKey)
      };
    };
    nacl2.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
    nacl2.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
    nacl2.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
    nacl2.box.nonceLength = crypto_box_NONCEBYTES;
    nacl2.box.overheadLength = nacl2.secretbox.overheadLength;
    nacl2.sign = function(msg, secretKey) {
      checkArrayTypes(msg, secretKey);
      if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error("bad secret key size");
      var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
      crypto_sign(signedMsg, msg, msg.length, secretKey);
      return signedMsg;
    };
    nacl2.sign.open = function(signedMsg, publicKey) {
      checkArrayTypes(signedMsg, publicKey);
      if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error("bad public key size");
      var tmp = new Uint8Array(signedMsg.length);
      var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
      if (mlen < 0) return null;
      var m = new Uint8Array(mlen);
      for (var i = 0; i < m.length; i++) m[i] = tmp[i];
      return m;
    };
    nacl2.sign.detached = function(msg, secretKey) {
      var signedMsg = nacl2.sign(msg, secretKey);
      var sig = new Uint8Array(crypto_sign_BYTES);
      for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
      return sig;
    };
    nacl2.sign.detached.verify = function(msg, sig, publicKey) {
      checkArrayTypes(msg, sig, publicKey);
      if (sig.length !== crypto_sign_BYTES) throw new Error("bad signature size");
      if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error("bad public key size");
      var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
      var m = new Uint8Array(crypto_sign_BYTES + msg.length);
      var i;
      for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
      for (i = 0; i < msg.length; i++) sm[i + crypto_sign_BYTES] = msg[i];
      return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
    };
    nacl2.sign.keyPair = function() {
      var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
      var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
      crypto_sign_keypair(pk, sk);
      return {
        publicKey: pk,
        secretKey: sk
      };
    };
    nacl2.sign.keyPair.fromSecretKey = function(secretKey) {
      checkArrayTypes(secretKey);
      if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error("bad secret key size");
      var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
      for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32 + i];
      return {
        publicKey: pk,
        secretKey: new Uint8Array(secretKey)
      };
    };
    nacl2.sign.keyPair.fromSeed = function(seed) {
      checkArrayTypes(seed);
      if (seed.length !== crypto_sign_SEEDBYTES) throw new Error("bad seed size");
      var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
      var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
      for (var i = 0; i < 32; i++) sk[i] = seed[i];
      crypto_sign_keypair(pk, sk, true);
      return {
        publicKey: pk,
        secretKey: sk
      };
    };
    nacl2.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
    nacl2.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
    nacl2.sign.seedLength = crypto_sign_SEEDBYTES;
    nacl2.sign.signatureLength = crypto_sign_BYTES;
    nacl2.hash = function(msg) {
      checkArrayTypes(msg);
      var h = new Uint8Array(crypto_hash_BYTES);
      crypto_hash(h, msg, msg.length);
      return h;
    };
    nacl2.hash.hashLength = crypto_hash_BYTES;
    nacl2.verify = function(x, y) {
      checkArrayTypes(x, y);
      if (x.length === 0 || y.length === 0) return false;
      if (x.length !== y.length) return false;
      return vn(x, 0, y, 0, x.length) === 0 ? true : false;
    };
    nacl2.setPRNG = function(fn) {
      randombytes = fn;
    };
    (function() {
      var crypto1 = typeof globalThis !== "undefined" ? globalThis.crypto || globalThis.msCrypto : null;
      if (crypto1 && crypto1.getRandomValues) {
        var QUOTA = 65536;
        nacl2.setPRNG(function(x, n) {
          var i, v = new Uint8Array(n);
          for (i = 0; i < n; i += QUOTA) {
            crypto1.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
          }
          for (i = 0; i < n; i++) x[i] = v[i];
          cleanup(v);
        });
      } else if (typeof __require !== "undefined") {
        crypto1 = __require("crypto");
        if (crypto1 && crypto1.randomBytes) {
          nacl2.setPRNG(function(x, n) {
            var i, v = crypto1.randomBytes(n);
            for (i = 0; i < n; i++) x[i] = v[i];
            cleanup(v);
          });
        }
      }
    })();
  })(typeof module !== "undefined" && module.exports ? module.exports : globalThis.nacl = globalThis.nacl || {});
  var nacl = typeof module !== "undefined" && module.exports ? module.exports : globalThis.nacl;
  var denoHelper = {
    fromSeed: nacl.sign.keyPair.fromSeed,
    sign: nacl.sign.detached,
    verify: nacl.sign.detached.verify,
    randomBytes: nacl.randomBytes
  };
  var helper;
  function setEd25519Helper(lib) {
    helper = lib;
  }
  var crc16tab = new Uint16Array([
    0,
    4129,
    8258,
    12387,
    16516,
    20645,
    24774,
    28903,
    33032,
    37161,
    41290,
    45419,
    49548,
    53677,
    57806,
    61935,
    4657,
    528,
    12915,
    8786,
    21173,
    17044,
    29431,
    25302,
    37689,
    33560,
    45947,
    41818,
    54205,
    50076,
    62463,
    58334,
    9314,
    13379,
    1056,
    5121,
    25830,
    29895,
    17572,
    21637,
    42346,
    46411,
    34088,
    38153,
    58862,
    62927,
    50604,
    54669,
    13907,
    9842,
    5649,
    1584,
    30423,
    26358,
    22165,
    18100,
    46939,
    42874,
    38681,
    34616,
    63455,
    59390,
    55197,
    51132,
    18628,
    22757,
    26758,
    30887,
    2112,
    6241,
    10242,
    14371,
    51660,
    55789,
    59790,
    63919,
    35144,
    39273,
    43274,
    47403,
    23285,
    19156,
    31415,
    27286,
    6769,
    2640,
    14899,
    10770,
    56317,
    52188,
    64447,
    60318,
    39801,
    35672,
    47931,
    43802,
    27814,
    31879,
    19684,
    23749,
    11298,
    15363,
    3168,
    7233,
    60846,
    64911,
    52716,
    56781,
    44330,
    48395,
    36200,
    40265,
    32407,
    28342,
    24277,
    20212,
    15891,
    11826,
    7761,
    3696,
    65439,
    61374,
    57309,
    53244,
    48923,
    44858,
    40793,
    36728,
    37256,
    33193,
    45514,
    41451,
    53516,
    49453,
    61774,
    57711,
    4224,
    161,
    12482,
    8419,
    20484,
    16421,
    28742,
    24679,
    33721,
    37784,
    41979,
    46042,
    49981,
    54044,
    58239,
    62302,
    689,
    4752,
    8947,
    13010,
    16949,
    21012,
    25207,
    29270,
    46570,
    42443,
    38312,
    34185,
    62830,
    58703,
    54572,
    50445,
    13538,
    9411,
    5280,
    1153,
    29798,
    25671,
    21540,
    17413,
    42971,
    47098,
    34713,
    38840,
    59231,
    63358,
    50973,
    55100,
    9939,
    14066,
    1681,
    5808,
    26199,
    30326,
    17941,
    22068,
    55628,
    51565,
    63758,
    59695,
    39368,
    35305,
    47498,
    43435,
    22596,
    18533,
    30726,
    26663,
    6336,
    2273,
    14466,
    10403,
    52093,
    56156,
    60223,
    64286,
    35833,
    39896,
    43963,
    48026,
    19061,
    23124,
    27191,
    31254,
    2801,
    6864,
    10931,
    14994,
    64814,
    60687,
    56684,
    52557,
    48554,
    44427,
    40424,
    36297,
    31782,
    27655,
    23652,
    19525,
    15522,
    11395,
    7392,
    3265,
    61215,
    65342,
    53085,
    57212,
    44955,
    49082,
    36825,
    40952,
    28183,
    32310,
    20053,
    24180,
    11923,
    16050,
    3793,
    7920
  ]);
  var NKeysErrorCode;
  (function(NKeysErrorCode2) {
    NKeysErrorCode2["InvalidPrefixByte"] = "nkeys: invalid prefix byte";
    NKeysErrorCode2["InvalidKey"] = "nkeys: invalid key";
    NKeysErrorCode2["InvalidPublicKey"] = "nkeys: invalid public key";
    NKeysErrorCode2["InvalidSeedLen"] = "nkeys: invalid seed length";
    NKeysErrorCode2["InvalidSeed"] = "nkeys: invalid seed";
    NKeysErrorCode2["InvalidEncoding"] = "nkeys: invalid encoded key";
    NKeysErrorCode2["InvalidSignature"] = "nkeys: signature verification failed";
    NKeysErrorCode2["CannotSign"] = "nkeys: cannot sign, no private key available";
    NKeysErrorCode2["PublicKeyOnly"] = "nkeys: no seed or private key available";
    NKeysErrorCode2["InvalidChecksum"] = "nkeys: invalid checksum";
    NKeysErrorCode2["SerializationError"] = "nkeys: serialization error";
    NKeysErrorCode2["ApiError"] = "nkeys: api error";
    NKeysErrorCode2["ClearedPair"] = "nkeys: pair is cleared";
  })(NKeysErrorCode || (NKeysErrorCode = {}));
  var Prefix;
  (function(Prefix2) {
    Prefix2[Prefix2["Seed"] = 144] = "Seed";
    Prefix2[Prefix2["Private"] = 120] = "Private";
    Prefix2[Prefix2["Operator"] = 112] = "Operator";
    Prefix2[Prefix2["Server"] = 104] = "Server";
    Prefix2[Prefix2["Cluster"] = 16] = "Cluster";
    Prefix2[Prefix2["Account"] = 0] = "Account";
    Prefix2[Prefix2["User"] = 160] = "User";
  })(Prefix || (Prefix = {}));
  setEd25519Helper(denoHelper);
  function multiAuthenticator(authenticators) {
    return (nonce) => {
      let auth = {};
      authenticators.forEach((a) => {
        const args = a(nonce) || {};
        auth = Object.assign(auth, args);
      });
      return auth;
    };
  }
  function noAuthFn() {
    return () => {
      return;
    };
  }
  function usernamePasswordAuthenticator(user, pass) {
    return () => {
      const u = typeof user === "function" ? user() : user;
      const p = typeof pass === "function" ? pass() : pass;
      return {
        user: u,
        pass: p
      };
    };
  }
  function tokenAuthenticator(token) {
    return () => {
      const auth_token = typeof token === "function" ? token() : token;
      return {
        auth_token
      };
    };
  }
  var DEFAULT_PING_INTERVAL = 2 * 60 * 1e3;
  var DEFAULT_MAX_PING_OUT = 2;
  var DEFAULT_RECONNECT_TIME_WAIT = 2 * 1e3;
  function defaultOptions() {
    return {
      maxPingOut: 2,
      maxReconnectAttempts: 10,
      noRandomize: false,
      pedantic: false,
      pingInterval: DEFAULT_PING_INTERVAL,
      reconnect: true,
      reconnectJitter: 100,
      reconnectJitterTLS: 1e3,
      reconnectTimeWait: DEFAULT_RECONNECT_TIME_WAIT,
      tls: void 0,
      verbose: false,
      waitOnFirstConnect: false,
      ignoreAuthErrorAbort: false
    };
  }
  function buildAuthenticator(opts) {
    const buf = [];
    if (typeof opts.authenticator === "function") {
      buf.push(opts.authenticator);
    }
    if (Array.isArray(opts.authenticator)) {
      buf.push(...opts.authenticator);
    }
    if (opts.token) {
      buf.push(tokenAuthenticator(opts.token));
    }
    if (opts.user) {
      buf.push(usernamePasswordAuthenticator(opts.user, opts.pass));
    }
    return buf.length === 0 ? noAuthFn() : multiAuthenticator(buf);
  }
  function parseOptions(opts) {
    const dhp = `${DEFAULT_HOST}:${defaultPort()}`;
    opts = opts || {
      servers: [
        dhp
      ]
    };
    opts.servers = opts.servers || [];
    if (typeof opts.servers === "string") {
      opts.servers = [
        opts.servers
      ];
    }
    if (opts.servers.length > 0 && opts.port) {
      throw new NatsError("port and servers options are mutually exclusive", ErrorCode.InvalidOption);
    }
    if (opts.servers.length === 0 && opts.port) {
      opts.servers = [
        `${DEFAULT_HOST}:${opts.port}`
      ];
    }
    if (opts.servers && opts.servers.length === 0) {
      opts.servers = [
        dhp
      ];
    }
    const options = extend(defaultOptions(), opts);
    options.authenticator = buildAuthenticator(options);
    [
      "reconnectDelayHandler",
      "authenticator"
    ].forEach((n) => {
      if (options[n] && typeof options[n] !== "function") {
        throw new NatsError(`${n} option should be a function`, ErrorCode.NotFunction);
      }
    });
    if (!options.reconnectDelayHandler) {
      options.reconnectDelayHandler = () => {
        let extra = options.tls ? options.reconnectJitterTLS : options.reconnectJitter;
        if (extra) {
          extra++;
          extra = Math.floor(Math.random() * extra);
        }
        return options.reconnectTimeWait + extra;
      };
    }
    if (options.inboxPrefix) {
      try {
        createInbox(options.inboxPrefix);
      } catch (err) {
        throw new NatsError(err.message, ErrorCode.ApiError);
      }
    }
    if (options.resolve === void 0) {
      options.resolve = typeof getResolveFn() === "function";
    }
    if (options.resolve) {
      if (typeof getResolveFn() !== "function") {
        throw new NatsError(`'resolve' is not supported on this client`, ErrorCode.InvalidOption);
      }
    }
    return options;
  }
  function checkOptions(info, options) {
    const { proto, tls_required: tlsRequired, tls_available: tlsAvailable } = info;
    if ((proto === void 0 || proto < 1) && options.noEcho) {
      throw new NatsError("noEcho", ErrorCode.ServerOptionNotAvailable);
    }
    const tls = tlsRequired || tlsAvailable || false;
    if (options.tls && !tls) {
      throw new NatsError("tls", ErrorCode.ServerOptionNotAvailable);
    }
  }
  var FLUSH_THRESHOLD = 1024 * 32;
  var INFO = /^INFO\s+([^\r\n]+)\r\n/i;
  var PONG_CMD = encode2("PONG\r\n");
  var PING_CMD = encode2("PING\r\n");
  var Connect = class {
    echo;
    no_responders;
    protocol;
    verbose;
    pedantic;
    jwt;
    nkey;
    sig;
    user;
    pass;
    auth_token;
    tls_required;
    name;
    lang;
    version;
    headers;
    constructor(transport, opts, nonce) {
      this.protocol = 1;
      this.version = transport.version;
      this.lang = transport.lang;
      this.echo = opts.noEcho ? false : void 0;
      this.verbose = opts.verbose;
      this.pedantic = opts.pedantic;
      this.tls_required = opts.tls ? true : void 0;
      this.name = opts.name;
      const creds = (opts && typeof opts.authenticator === "function" ? opts.authenticator(nonce) : {}) || {};
      extend(this, creds);
    }
  };
  var SubscriptionImpl = class extends QueuedIteratorImpl {
    sid;
    queue;
    draining;
    max;
    subject;
    drained;
    protocol;
    timer;
    info;
    cleanupFn;
    closed;
    requestSubject;
    constructor(protocol, subject, opts = {}) {
      super();
      extend(this, opts);
      this.protocol = protocol;
      this.subject = subject;
      this.draining = false;
      this.noIterator = typeof opts.callback === "function";
      this.closed = deferred();
      const asyncTraces = !(protocol.options?.noAsyncTraces || false);
      if (opts.timeout) {
        this.timer = timeout(opts.timeout, asyncTraces);
        this.timer.then(() => {
          this.timer = void 0;
        }).catch((err) => {
          this.stop(err);
          if (this.noIterator) {
            this.callback(err, {});
          }
        });
      }
      if (!this.noIterator) {
        this.iterClosed.then(() => {
          this.closed.resolve();
          this.unsubscribe();
        });
      }
    }
    setPrePostHandlers(opts) {
      if (this.noIterator) {
        const uc = this.callback;
        const ingestion = opts.ingestionFilterFn ? opts.ingestionFilterFn : () => {
          return {
            ingest: true,
            protocol: false
          };
        };
        const filter3 = opts.protocolFilterFn ? opts.protocolFilterFn : () => {
          return true;
        };
        const dispatched = opts.dispatchedFn ? opts.dispatchedFn : () => {
        };
        this.callback = (err, msg) => {
          const { ingest } = ingestion(msg);
          if (!ingest) {
            return;
          }
          if (filter3(msg)) {
            uc(err, msg);
            dispatched(msg);
          }
        };
      } else {
        this.protocolFilterFn = opts.protocolFilterFn;
        this.dispatchedFn = opts.dispatchedFn;
      }
    }
    callback(err, msg) {
      this.cancelTimeout();
      err ? this.stop(err) : this.push(msg);
    }
    close() {
      if (!this.isClosed()) {
        this.cancelTimeout();
        const fn = () => {
          this.stop();
          if (this.cleanupFn) {
            try {
              this.cleanupFn(this, this.info);
            } catch (_err) {
            }
          }
          this.closed.resolve();
        };
        if (this.noIterator) {
          fn();
        } else {
          this.push(fn);
        }
      }
    }
    unsubscribe(max) {
      this.protocol.unsubscribe(this, max);
    }
    cancelTimeout() {
      if (this.timer) {
        this.timer.cancel();
        this.timer = void 0;
      }
    }
    drain() {
      if (this.protocol.isClosed()) {
        return Promise.reject(NatsError.errorForCode(ErrorCode.ConnectionClosed));
      }
      if (this.isClosed()) {
        return Promise.reject(NatsError.errorForCode(ErrorCode.SubClosed));
      }
      if (!this.drained) {
        this.draining = true;
        this.protocol.unsub(this);
        this.drained = this.protocol.flush(deferred()).then(() => {
          this.protocol.subscriptions.cancel(this);
        }).catch(() => {
          this.protocol.subscriptions.cancel(this);
        });
      }
      return this.drained;
    }
    isDraining() {
      return this.draining;
    }
    isClosed() {
      return this.done;
    }
    getSubject() {
      return this.subject;
    }
    getMax() {
      return this.max;
    }
    getID() {
      return this.sid;
    }
  };
  var Subscriptions = class {
    mux;
    subs;
    sidCounter;
    constructor() {
      this.sidCounter = 0;
      this.mux = null;
      this.subs = /* @__PURE__ */ new Map();
    }
    size() {
      return this.subs.size;
    }
    add(s) {
      this.sidCounter++;
      s.sid = this.sidCounter;
      this.subs.set(s.sid, s);
      return s;
    }
    setMux(s) {
      this.mux = s;
      return s;
    }
    getMux() {
      return this.mux;
    }
    get(sid) {
      return this.subs.get(sid);
    }
    resub(s) {
      this.sidCounter++;
      this.subs.delete(s.sid);
      s.sid = this.sidCounter;
      this.subs.set(s.sid, s);
      return s;
    }
    all() {
      return Array.from(this.subs.values());
    }
    cancel(s) {
      if (s) {
        s.close();
        this.subs.delete(s.sid);
      }
    }
    handleError(err) {
      if (err && err.permissionContext) {
        const ctx = err.permissionContext;
        const subs = this.all();
        let sub;
        if (ctx.operation === "subscription") {
          sub = subs.find((s) => {
            return s.subject === ctx.subject && s.queue === ctx.queue;
          });
        }
        if (ctx.operation === "publish") {
          sub = subs.find((s) => {
            return s.requestSubject === ctx.subject;
          });
        }
        if (sub) {
          sub.callback(err, {});
          sub.close();
          this.subs.delete(sub.sid);
          return sub !== this.mux;
        }
      }
      return false;
    }
    close() {
      this.subs.forEach((sub) => {
        sub.close();
      });
    }
  };
  var ProtocolHandler = class _ProtocolHandler {
    connected;
    connectedOnce;
    infoReceived;
    info;
    muxSubscriptions;
    options;
    outbound;
    pongs;
    subscriptions;
    transport;
    noMorePublishing;
    connectError;
    publisher;
    _closed;
    closed;
    listeners;
    heartbeats;
    parser;
    outMsgs;
    inMsgs;
    outBytes;
    inBytes;
    pendingLimit;
    lastError;
    abortReconnect;
    whyClosed;
    servers;
    server;
    features;
    connectPromise;
    constructor(options, publisher) {
      this._closed = false;
      this.connected = false;
      this.connectedOnce = false;
      this.infoReceived = false;
      this.noMorePublishing = false;
      this.abortReconnect = false;
      this.listeners = [];
      this.pendingLimit = FLUSH_THRESHOLD;
      this.outMsgs = 0;
      this.inMsgs = 0;
      this.outBytes = 0;
      this.inBytes = 0;
      this.options = options;
      this.publisher = publisher;
      this.subscriptions = new Subscriptions();
      this.muxSubscriptions = new MuxSubscription();
      this.outbound = new DataBuffer();
      this.pongs = [];
      this.whyClosed = "";
      this.pendingLimit = options.pendingLimit || this.pendingLimit;
      this.features = new Features({
        major: 0,
        minor: 0,
        micro: 0
      });
      this.connectPromise = null;
      const servers = typeof options.servers === "string" ? [
        options.servers
      ] : options.servers;
      this.servers = new Servers(servers, {
        randomize: !options.noRandomize
      });
      this.closed = deferred();
      this.parser = new Parser(this);
      this.heartbeats = new Heartbeat(this, this.options.pingInterval || DEFAULT_PING_INTERVAL, this.options.maxPingOut || DEFAULT_MAX_PING_OUT);
    }
    resetOutbound() {
      this.outbound.reset();
      const pongs = this.pongs;
      this.pongs = [];
      const err = NatsError.errorForCode(ErrorCode.Disconnect);
      err.stack = "";
      pongs.forEach((p) => {
        p.reject(err);
      });
      this.parser = new Parser(this);
      this.infoReceived = false;
    }
    dispatchStatus(status) {
      this.listeners.forEach((q) => {
        q.push(status);
      });
    }
    status() {
      const iter = new QueuedIteratorImpl();
      this.listeners.push(iter);
      return iter;
    }
    prepare() {
      if (this.transport) {
        this.transport.discard();
      }
      this.info = void 0;
      this.resetOutbound();
      const pong = deferred();
      pong.catch(() => {
      });
      this.pongs.unshift(pong);
      this.connectError = (err) => {
        pong.reject(err);
      };
      this.transport = newTransport();
      this.transport.closed().then(async (_err) => {
        this.connected = false;
        if (!this.isClosed()) {
          await this.disconnected(this.transport.closeError || this.lastError);
          return;
        }
      });
      return pong;
    }
    disconnect() {
      this.dispatchStatus({
        type: DebugEvents.StaleConnection,
        data: ""
      });
      this.transport.disconnect();
    }
    reconnect() {
      if (this.connected) {
        this.dispatchStatus({
          type: DebugEvents.ClientInitiatedReconnect,
          data: ""
        });
        this.transport.disconnect();
      }
      return Promise.resolve();
    }
    async disconnected(err) {
      this.dispatchStatus({
        type: Events.Disconnect,
        data: this.servers.getCurrentServer().toString()
      });
      if (this.options.reconnect) {
        await this.dialLoop().then(() => {
          this.dispatchStatus({
            type: Events.Reconnect,
            data: this.servers.getCurrentServer().toString()
          });
          if (this.lastError?.code === ErrorCode.AuthenticationExpired) {
            this.lastError = void 0;
          }
        }).catch((err2) => {
          this._close(err2);
        });
      } else {
        await this._close(err);
      }
    }
    async dial(srv) {
      const pong = this.prepare();
      let timer;
      try {
        timer = timeout(this.options.timeout || 2e4);
        const cp = this.transport.connect(srv, this.options);
        await Promise.race([
          cp,
          timer
        ]);
        (async () => {
          try {
            for await (const b of this.transport) {
              this.parser.parse(b);
            }
          } catch (err) {
            console.log("reader closed", err);
          }
        })().then();
      } catch (err) {
        pong.reject(err);
      }
      try {
        await Promise.race([
          timer,
          pong
        ]);
        if (timer) {
          timer.cancel();
        }
        this.connected = true;
        this.connectError = void 0;
        this.sendSubscriptions();
        this.connectedOnce = true;
        this.server.didConnect = true;
        this.server.reconnects = 0;
        this.flushPending();
        this.heartbeats.start();
      } catch (err) {
        if (timer) {
          timer.cancel();
        }
        await this.transport.close(err);
        throw err;
      }
    }
    async _doDial(srv) {
      const { resolve } = this.options;
      const alts = await srv.resolve({
        fn: getResolveFn(),
        debug: this.options.debug,
        randomize: !this.options.noRandomize,
        resolve
      });
      let lastErr = null;
      for (const a of alts) {
        try {
          lastErr = null;
          this.dispatchStatus({
            type: DebugEvents.Reconnecting,
            data: a.toString()
          });
          await this.dial(a);
          return;
        } catch (err) {
          lastErr = err;
        }
      }
      throw lastErr;
    }
    dialLoop() {
      if (this.connectPromise === null) {
        this.connectPromise = this.dodialLoop();
        this.connectPromise.then(() => {
        }).catch(() => {
        }).finally(() => {
          this.connectPromise = null;
        });
      }
      return this.connectPromise;
    }
    async dodialLoop() {
      let lastError;
      while (true) {
        if (this._closed) {
          this.servers.clear();
        }
        const wait = this.options.reconnectDelayHandler ? this.options.reconnectDelayHandler() : DEFAULT_RECONNECT_TIME_WAIT;
        let maxWait = wait;
        const srv = this.selectServer();
        if (!srv || this.abortReconnect) {
          if (lastError) {
            throw lastError;
          } else if (this.lastError) {
            throw this.lastError;
          } else {
            throw NatsError.errorForCode(ErrorCode.ConnectionRefused);
          }
        }
        const now = Date.now();
        if (srv.lastConnect === 0 || srv.lastConnect + wait <= now) {
          srv.lastConnect = Date.now();
          try {
            await this._doDial(srv);
            break;
          } catch (err) {
            lastError = err;
            if (!this.connectedOnce) {
              if (this.options.waitOnFirstConnect) {
                continue;
              }
              this.servers.removeCurrentServer();
            }
            srv.reconnects++;
            const mra = this.options.maxReconnectAttempts || 0;
            if (mra !== -1 && srv.reconnects >= mra) {
              this.servers.removeCurrentServer();
            }
          }
        } else {
          maxWait = Math.min(maxWait, srv.lastConnect + wait - now);
          await delay(maxWait);
        }
      }
    }
    static async connect(options, publisher) {
      const h = new _ProtocolHandler(options, publisher);
      await h.dialLoop();
      return h;
    }
    static toError(s) {
      const t = s ? s.toLowerCase() : "";
      if (t.indexOf("permissions violation") !== -1) {
        const err = new NatsError(s, ErrorCode.PermissionsViolation);
        const m = s.match(/(Publish|Subscription) to "(\S+)"/);
        if (m) {
          err.permissionContext = {
            operation: m[1].toLowerCase(),
            subject: m[2],
            queue: void 0
          };
          const qm = s.match(/using queue "(\S+)"/);
          if (qm) {
            err.permissionContext.queue = qm[1];
          }
        }
        return err;
      } else if (t.indexOf("authorization violation") !== -1) {
        return new NatsError(s, ErrorCode.AuthorizationViolation);
      } else if (t.indexOf("user authentication expired") !== -1) {
        return new NatsError(s, ErrorCode.AuthenticationExpired);
      } else if (t.indexOf("account authentication expired") != -1) {
        return new NatsError(s, ErrorCode.AccountExpired);
      } else if (t.indexOf("authentication timeout") !== -1) {
        return new NatsError(s, ErrorCode.AuthenticationTimeout);
      } else {
        return new NatsError(s, ErrorCode.ProtocolError);
      }
    }
    processMsg(msg, data) {
      this.inMsgs++;
      this.inBytes += data.length;
      if (!this.subscriptions.sidCounter) {
        return;
      }
      const sub = this.subscriptions.get(msg.sid);
      if (!sub) {
        return;
      }
      sub.received += 1;
      if (sub.callback) {
        sub.callback(null, new MsgImpl(msg, data, this));
      }
      if (sub.max !== void 0 && sub.received >= sub.max) {
        sub.unsubscribe();
      }
    }
    processError(m) {
      const s = decode2(m);
      const err = _ProtocolHandler.toError(s);
      const status = {
        type: Events.Error,
        data: err.code
      };
      if (err.isPermissionError()) {
        let isMuxPermissionError = false;
        if (err.permissionContext) {
          status.permissionContext = err.permissionContext;
          const mux = this.subscriptions.getMux();
          isMuxPermissionError = mux?.subject === err.permissionContext.subject;
        }
        this.subscriptions.handleError(err);
        this.muxSubscriptions.handleError(isMuxPermissionError, err);
        if (isMuxPermissionError) {
          this.subscriptions.setMux(null);
        }
      }
      this.dispatchStatus(status);
      this.handleError(err);
    }
    handleError(err) {
      if (err.isAuthError()) {
        this.handleAuthError(err);
      } else if (err.isProtocolError()) {
        this.lastError = err;
      } else if (err.isAuthTimeout()) {
        this.lastError = err;
      }
      if (!err.isPermissionError()) {
        this.lastError = err;
      }
    }
    handleAuthError(err) {
      if (this.lastError && err.code === this.lastError.code && this.options.ignoreAuthErrorAbort === false) {
        this.abortReconnect = true;
      }
      if (this.connectError) {
        this.connectError(err);
      } else {
        this.disconnect();
      }
    }
    processPing() {
      this.transport.send(PONG_CMD);
    }
    processPong() {
      const cb = this.pongs.shift();
      if (cb) {
        cb.resolve();
      }
    }
    processInfo(m) {
      const info = JSON.parse(decode2(m));
      this.info = info;
      const updates = this.options && this.options.ignoreClusterUpdates ? void 0 : this.servers.update(info, this.transport.isEncrypted());
      if (!this.infoReceived) {
        this.features.update(parseSemVer(info.version));
        this.infoReceived = true;
        if (this.transport.isEncrypted()) {
          this.servers.updateTLSName();
        }
        const { version, lang } = this.transport;
        try {
          const c = new Connect({
            version,
            lang
          }, this.options, info.nonce);
          if (info.headers) {
            c.headers = true;
            c.no_responders = true;
          }
          const cs = JSON.stringify(c);
          this.transport.send(encode2(`CONNECT ${cs}${CR_LF}`));
          this.transport.send(PING_CMD);
        } catch (err) {
          this._close(err);
        }
      }
      if (updates) {
        this.dispatchStatus({
          type: Events.Update,
          data: updates
        });
      }
      const ldm = info.ldm !== void 0 ? info.ldm : false;
      if (ldm) {
        this.dispatchStatus({
          type: Events.LDM,
          data: this.servers.getCurrentServer().toString()
        });
      }
    }
    push(e) {
      switch (e.kind) {
        case Kind.MSG: {
          const { msg, data } = e;
          this.processMsg(msg, data);
          break;
        }
        case Kind.OK:
          break;
        case Kind.ERR:
          this.processError(e.data);
          break;
        case Kind.PING:
          this.processPing();
          break;
        case Kind.PONG:
          this.processPong();
          break;
        case Kind.INFO:
          this.processInfo(e.data);
          break;
      }
    }
    sendCommand(cmd, ...payloads) {
      const len = this.outbound.length();
      let buf;
      if (typeof cmd === "string") {
        buf = encode2(cmd);
      } else {
        buf = cmd;
      }
      this.outbound.fill(buf, ...payloads);
      if (len === 0) {
        queueMicrotask(() => {
          this.flushPending();
        });
      } else if (this.outbound.size() >= this.pendingLimit) {
        this.flushPending();
      }
    }
    publish(subject, payload = Empty, options) {
      let data;
      if (payload instanceof Uint8Array) {
        data = payload;
      } else if (typeof payload === "string") {
        data = TE.encode(payload);
      } else {
        throw NatsError.errorForCode(ErrorCode.BadPayload);
      }
      let len = data.length;
      options = options || {};
      options.reply = options.reply || "";
      let headers2 = Empty;
      let hlen = 0;
      if (options.headers) {
        if (this.info && !this.info.headers) {
          throw new NatsError("headers", ErrorCode.ServerOptionNotAvailable);
        }
        const hdrs = options.headers;
        headers2 = hdrs.encode();
        hlen = headers2.length;
        len = data.length + hlen;
      }
      if (this.info && len > this.info.max_payload) {
        throw NatsError.errorForCode(ErrorCode.MaxPayloadExceeded);
      }
      this.outBytes += len;
      this.outMsgs++;
      let proto;
      if (options.headers) {
        if (options.reply) {
          proto = `HPUB ${subject} ${options.reply} ${hlen} ${len}\r
`;
        } else {
          proto = `HPUB ${subject} ${hlen} ${len}\r
`;
        }
        this.sendCommand(proto, headers2, data, CRLF);
      } else {
        if (options.reply) {
          proto = `PUB ${subject} ${options.reply} ${len}\r
`;
        } else {
          proto = `PUB ${subject} ${len}\r
`;
        }
        this.sendCommand(proto, data, CRLF);
      }
    }
    request(r) {
      this.initMux();
      this.muxSubscriptions.add(r);
      return r;
    }
    subscribe(s) {
      this.subscriptions.add(s);
      this._subunsub(s);
      return s;
    }
    _sub(s) {
      if (s.queue) {
        this.sendCommand(`SUB ${s.subject} ${s.queue} ${s.sid}\r
`);
      } else {
        this.sendCommand(`SUB ${s.subject} ${s.sid}\r
`);
      }
    }
    _subunsub(s) {
      this._sub(s);
      if (s.max) {
        this.unsubscribe(s, s.max);
      }
      return s;
    }
    unsubscribe(s, max) {
      this.unsub(s, max);
      if (s.max === void 0 || s.received >= s.max) {
        this.subscriptions.cancel(s);
      }
    }
    unsub(s, max) {
      if (!s || this.isClosed()) {
        return;
      }
      if (max) {
        this.sendCommand(`UNSUB ${s.sid} ${max}\r
`);
      } else {
        this.sendCommand(`UNSUB ${s.sid}\r
`);
      }
      s.max = max;
    }
    resub(s, subject) {
      if (!s || this.isClosed()) {
        return;
      }
      this.unsub(s);
      s.subject = subject;
      this.subscriptions.resub(s);
      this._sub(s);
    }
    flush(p) {
      if (!p) {
        p = deferred();
      }
      this.pongs.push(p);
      this.outbound.fill(PING_CMD);
      this.flushPending();
      return p;
    }
    sendSubscriptions() {
      const cmds = [];
      this.subscriptions.all().forEach((s) => {
        const sub = s;
        if (sub.queue) {
          cmds.push(`SUB ${sub.subject} ${sub.queue} ${sub.sid}${CR_LF}`);
        } else {
          cmds.push(`SUB ${sub.subject} ${sub.sid}${CR_LF}`);
        }
      });
      if (cmds.length) {
        this.transport.send(encode2(cmds.join("")));
      }
    }
    async _close(err) {
      if (this._closed) {
        return;
      }
      this.whyClosed = new Error("close trace").stack || "";
      this.heartbeats.cancel();
      if (this.connectError) {
        this.connectError(err);
        this.connectError = void 0;
      }
      this.muxSubscriptions.close();
      this.subscriptions.close();
      this.listeners.forEach((l) => {
        l.stop();
      });
      this._closed = true;
      await this.transport.close(err);
      await this.closed.resolve(err);
    }
    close() {
      return this._close();
    }
    isClosed() {
      return this._closed;
    }
    drain() {
      const subs = this.subscriptions.all();
      const promises = [];
      subs.forEach((sub) => {
        promises.push(sub.drain());
      });
      return Promise.all(promises).then(async () => {
        this.noMorePublishing = true;
        await this.flush();
        return this.close();
      }).catch(() => {
      });
    }
    flushPending() {
      if (!this.infoReceived || !this.connected) {
        return;
      }
      if (this.outbound.size()) {
        const d = this.outbound.drain();
        this.transport.send(d);
      }
    }
    initMux() {
      const mux = this.subscriptions.getMux();
      if (!mux) {
        const inbox = this.muxSubscriptions.init(this.options.inboxPrefix);
        const sub = new SubscriptionImpl(this, `${inbox}*`);
        sub.callback = this.muxSubscriptions.dispatcher();
        this.subscriptions.setMux(sub);
        this.subscribe(sub);
      }
    }
    selectServer() {
      const server = this.servers.selectServer();
      if (server === void 0) {
        return void 0;
      }
      this.server = server;
      return this.server;
    }
    getServer() {
      return this.server;
    }
  };
  var ServiceApiPrefix = "$SRV";
  var ServiceMsgImpl = class {
    msg;
    constructor(msg) {
      this.msg = msg;
    }
    get data() {
      return this.msg.data;
    }
    get sid() {
      return this.msg.sid;
    }
    get subject() {
      return this.msg.subject;
    }
    get reply() {
      return this.msg.reply || "";
    }
    get headers() {
      return this.msg.headers;
    }
    respond(data, opts) {
      return this.msg.respond(data, opts);
    }
    respondError(code2, description, data, opts) {
      opts = opts || {};
      opts.headers = opts.headers || headers();
      opts.headers?.set(ServiceErrorCodeHeader, `${code2}`);
      opts.headers?.set(ServiceErrorHeader, description);
      return this.msg.respond(data, opts);
    }
    json(reviver) {
      return this.msg.json(reviver);
    }
    string() {
      return this.msg.string();
    }
  };
  var ServiceGroupImpl = class _ServiceGroupImpl {
    subject;
    queue;
    srv;
    constructor(parent, name = "", queue = "") {
      if (name !== "") {
        validInternalToken("service group", name);
      }
      let root = "";
      if (parent instanceof ServiceImpl) {
        this.srv = parent;
        root = "";
      } else if (parent instanceof _ServiceGroupImpl) {
        const sg = parent;
        this.srv = sg.srv;
        if (queue === "" && sg.queue !== "") {
          queue = sg.queue;
        }
        root = sg.subject;
      } else {
        throw new Error("unknown ServiceGroup type");
      }
      this.subject = this.calcSubject(root, name);
      this.queue = queue;
    }
    calcSubject(root, name = "") {
      if (name === "") {
        return root;
      }
      return root !== "" ? `${root}.${name}` : name;
    }
    addEndpoint(name = "", opts) {
      opts = opts || {
        subject: name
      };
      const args = typeof opts === "function" ? {
        handler: opts,
        subject: name
      } : opts;
      validateName("endpoint", name);
      let { subject, handler, metadata, queue } = args;
      subject = subject || name;
      queue = queue || this.queue;
      validSubjectName("endpoint subject", subject);
      subject = this.calcSubject(this.subject, subject);
      const ne = {
        name,
        subject,
        queue,
        handler,
        metadata
      };
      return this.srv._addEndpoint(ne);
    }
    addGroup(name = "", queue = "") {
      return new _ServiceGroupImpl(this, name, queue);
    }
  };
  function validSubjectName(context, subj) {
    if (subj === "") {
      throw new Error(`${context} cannot be empty`);
    }
    if (subj.indexOf(" ") !== -1) {
      throw new Error(`${context} cannot contain spaces: '${subj}'`);
    }
    const tokens = subj.split(".");
    tokens.forEach((v, idx) => {
      if (v === ">" && idx !== tokens.length - 1) {
        throw new Error(`${context} cannot have internal '>': '${subj}'`);
      }
    });
  }
  function validInternalToken(context, subj) {
    if (subj.indexOf(" ") !== -1) {
      throw new Error(`${context} cannot contain spaces: '${subj}'`);
    }
    const tokens = subj.split(".");
    tokens.forEach((v) => {
      if (v === ">") {
        throw new Error(`${context} name cannot contain internal '>': '${subj}'`);
      }
    });
  }
  var ServiceImpl = class _ServiceImpl {
    nc;
    _id;
    config;
    handlers;
    internal;
    _stopped;
    _done;
    started;
    static controlSubject(verb, name = "", id = "", prefix) {
      const pre = prefix ?? ServiceApiPrefix;
      if (name === "" && id === "") {
        return `${pre}.${verb}`;
      }
      validateName("control subject name", name);
      if (id !== "") {
        validateName("control subject id", id);
        return `${pre}.${verb}.${name}.${id}`;
      }
      return `${pre}.${verb}.${name}`;
    }
    constructor(nc, config = {
      name: "",
      version: ""
    }) {
      this.nc = nc;
      this.config = Object.assign({}, config);
      if (!this.config.queue) {
        this.config.queue = "q";
      }
      validateName("name", this.config.name);
      validateName("queue", this.config.queue);
      parseSemVer(this.config.version);
      this._id = nuid.next();
      this.internal = [];
      this._done = deferred();
      this._stopped = false;
      this.handlers = [];
      this.started = (/* @__PURE__ */ new Date()).toISOString();
      this.reset();
      this.nc.closed().then(() => {
        this.close().catch();
      }).catch((err) => {
        this.close(err).catch();
      });
    }
    get subjects() {
      return this.handlers.filter((s) => {
        return s.internal === false;
      }).map((s) => {
        return s.subject;
      });
    }
    get id() {
      return this._id;
    }
    get name() {
      return this.config.name;
    }
    get description() {
      return this.config.description ?? "";
    }
    get version() {
      return this.config.version;
    }
    get metadata() {
      return this.config.metadata;
    }
    errorToHeader(err) {
      const h = headers();
      if (err instanceof ServiceError) {
        const se = err;
        h.set(ServiceErrorHeader, se.message);
        h.set(ServiceErrorCodeHeader, `${se.code}`);
      } else {
        h.set(ServiceErrorHeader, err.message);
        h.set(ServiceErrorCodeHeader, "500");
      }
      return h;
    }
    setupHandler(h, internal = false) {
      const queue = internal ? "" : h.queue ? h.queue : this.config.queue;
      const { name, subject, handler } = h;
      const sv = h;
      sv.internal = internal;
      if (internal) {
        this.internal.push(sv);
      }
      sv.stats = new NamedEndpointStatsImpl(name, subject, queue);
      sv.queue = queue;
      const callback = handler ? (err, msg) => {
        if (err) {
          this.close(err);
          return;
        }
        const start = Date.now();
        try {
          handler(err, new ServiceMsgImpl(msg));
        } catch (err2) {
          sv.stats.countError(err2);
          msg?.respond(Empty, {
            headers: this.errorToHeader(err2)
          });
        } finally {
          sv.stats.countLatency(start);
        }
      } : void 0;
      sv.sub = this.nc.subscribe(subject, {
        callback,
        queue
      });
      sv.sub.closed.then(() => {
        if (!this._stopped) {
          this.close(new Error(`required subscription ${h.subject} stopped`)).catch();
        }
      }).catch((err) => {
        if (!this._stopped) {
          const ne = new Error(`required subscription ${h.subject} errored: ${err.message}`);
          ne.stack = err.stack;
          this.close(ne).catch();
        }
      });
      return sv;
    }
    info() {
      return {
        type: ServiceResponseType.INFO,
        name: this.name,
        id: this.id,
        version: this.version,
        description: this.description,
        metadata: this.metadata,
        endpoints: this.endpoints()
      };
    }
    endpoints() {
      return this.handlers.map((v) => {
        const { subject, metadata, name, queue } = v;
        return {
          subject,
          metadata,
          name,
          queue_group: queue
        };
      });
    }
    async stats() {
      const endpoints = [];
      for (const h of this.handlers) {
        if (typeof this.config.statsHandler === "function") {
          try {
            h.stats.data = await this.config.statsHandler(h);
          } catch (err) {
            h.stats.countError(err);
          }
        }
        endpoints.push(h.stats.stats(h.qi));
      }
      return {
        type: ServiceResponseType.STATS,
        name: this.name,
        id: this.id,
        version: this.version,
        started: this.started,
        metadata: this.metadata,
        endpoints
      };
    }
    addInternalHandler(verb, handler) {
      const v = `${verb}`.toUpperCase();
      this._doAddInternalHandler(`${v}-all`, verb, handler);
      this._doAddInternalHandler(`${v}-kind`, verb, handler, this.name);
      this._doAddInternalHandler(`${v}`, verb, handler, this.name, this.id);
    }
    _doAddInternalHandler(name, verb, handler, kind = "", id = "") {
      const endpoint = {};
      endpoint.name = name;
      endpoint.subject = _ServiceImpl.controlSubject(verb, kind, id);
      endpoint.handler = handler;
      this.setupHandler(endpoint, true);
    }
    start() {
      const jc = JSONCodec();
      const statsHandler = (err, msg) => {
        if (err) {
          this.close(err);
          return Promise.reject(err);
        }
        return this.stats().then((s) => {
          msg?.respond(jc.encode(s));
          return Promise.resolve();
        });
      };
      const infoHandler = (err, msg) => {
        if (err) {
          this.close(err);
          return Promise.reject(err);
        }
        msg?.respond(jc.encode(this.info()));
        return Promise.resolve();
      };
      const ping = jc.encode(this.ping());
      const pingHandler = (err, msg) => {
        if (err) {
          this.close(err).then().catch();
          return Promise.reject(err);
        }
        msg.respond(ping);
        return Promise.resolve();
      };
      this.addInternalHandler(ServiceVerb.PING, pingHandler);
      this.addInternalHandler(ServiceVerb.STATS, statsHandler);
      this.addInternalHandler(ServiceVerb.INFO, infoHandler);
      this.handlers.forEach((h) => {
        const { subject } = h;
        if (typeof subject !== "string") {
          return;
        }
        if (h.handler === null) {
          return;
        }
        this.setupHandler(h);
      });
      return Promise.resolve(this);
    }
    close(err) {
      if (this._stopped) {
        return this._done;
      }
      this._stopped = true;
      let buf = [];
      if (!this.nc.isClosed()) {
        buf = this.handlers.concat(this.internal).map((h) => {
          return h.sub.drain();
        });
      }
      Promise.allSettled(buf).then(() => {
        this._done.resolve(err ? err : null);
      });
      return this._done;
    }
    get stopped() {
      return this._done;
    }
    get isStopped() {
      return this._stopped;
    }
    stop(err) {
      return this.close(err);
    }
    ping() {
      return {
        type: ServiceResponseType.PING,
        name: this.name,
        id: this.id,
        version: this.version,
        metadata: this.metadata
      };
    }
    reset() {
      this.started = (/* @__PURE__ */ new Date()).toISOString();
      if (this.handlers) {
        for (const h of this.handlers) {
          h.stats.reset(h.qi);
        }
      }
    }
    addGroup(name, queue) {
      return new ServiceGroupImpl(this, name, queue);
    }
    addEndpoint(name, handler) {
      const sg = new ServiceGroupImpl(this);
      return sg.addEndpoint(name, handler);
    }
    _addEndpoint(e) {
      const qi = new QueuedIteratorImpl();
      qi.noIterator = typeof e.handler === "function";
      if (!qi.noIterator) {
        e.handler = (err, msg) => {
          err ? this.stop(err).catch() : qi.push(new ServiceMsgImpl(msg));
        };
        qi.iterClosed.then(() => {
          this.close().catch();
        });
      }
      const ss = this.setupHandler(e, false);
      ss.qi = qi;
      this.handlers.push(ss);
      return qi;
    }
  };
  var NamedEndpointStatsImpl = class {
    name;
    subject;
    average_processing_time;
    num_requests;
    processing_time;
    num_errors;
    last_error;
    data;
    metadata;
    queue;
    constructor(name, subject, queue = "") {
      this.name = name;
      this.subject = subject;
      this.average_processing_time = 0;
      this.num_errors = 0;
      this.num_requests = 0;
      this.processing_time = 0;
      this.queue = queue;
    }
    reset(qi) {
      this.num_requests = 0;
      this.processing_time = 0;
      this.average_processing_time = 0;
      this.num_errors = 0;
      this.last_error = void 0;
      this.data = void 0;
      const qii = qi;
      if (qii) {
        qii.time = 0;
        qii.processed = 0;
      }
    }
    countLatency(start) {
      this.num_requests++;
      this.processing_time += nanos(Date.now() - start);
      this.average_processing_time = Math.round(this.processing_time / this.num_requests);
    }
    countError(err) {
      this.num_errors++;
      this.last_error = err.message;
    }
    _stats() {
      const { name, subject, average_processing_time, num_errors, num_requests, processing_time, last_error, data, queue } = this;
      return {
        name,
        subject,
        average_processing_time,
        num_errors,
        num_requests,
        processing_time,
        last_error,
        data,
        queue_group: queue
      };
    }
    stats(qi) {
      const qii = qi;
      if (qii?.noIterator === false) {
        this.processing_time = qii.time;
        this.num_requests = qii.processed;
        this.average_processing_time = this.processing_time > 0 && this.num_requests > 0 ? this.processing_time / this.num_requests : 0;
      }
      return this._stats();
    }
  };
  var ServiceClientImpl = class {
    nc;
    prefix;
    opts;
    constructor(nc, opts = {
      strategy: RequestStrategy.JitterTimer,
      maxWait: 2e3
    }, prefix) {
      this.nc = nc;
      this.prefix = prefix;
      this.opts = opts;
    }
    ping(name = "", id = "") {
      return this.q(ServiceVerb.PING, name, id);
    }
    stats(name = "", id = "") {
      return this.q(ServiceVerb.STATS, name, id);
    }
    info(name = "", id = "") {
      return this.q(ServiceVerb.INFO, name, id);
    }
    async q(v, name = "", id = "") {
      const iter = new QueuedIteratorImpl();
      const jc = JSONCodec();
      const subj = ServiceImpl.controlSubject(v, name, id, this.prefix);
      const responses = await this.nc.requestMany(subj, Empty, this.opts);
      (async () => {
        for await (const m of responses) {
          try {
            const s = jc.decode(m.data);
            iter.push(s);
          } catch (err) {
            iter.push(() => {
              iter.stop(err);
            });
          }
        }
        iter.push(() => {
          iter.stop();
        });
      })().catch((err) => {
        iter.stop(err);
      });
      return iter;
    }
  };
  function NoopKvCodecs() {
    return {
      key: {
        encode(k) {
          return k;
        },
        decode(k) {
          return k;
        }
      },
      value: {
        encode(v) {
          return v;
        },
        decode(v) {
          return v;
        }
      }
    };
  }
  function defaultBucketOpts() {
    return {
      replicas: 1,
      history: 1,
      timeout: 2e3,
      max_bytes: -1,
      maxValueSize: -1,
      codec: NoopKvCodecs(),
      storage: StorageType.File
    };
  }
  var kvOperationHdr = "KV-Operation";
  var kvSubjectPrefix = "$KV";
  var validKeyRe = /^[-/=.\w]+$/;
  var validSearchKey = /^[-/=.>*\w]+$/;
  var validBucketRe = /^[-\w]+$/;
  function validateKey(k) {
    if (k.startsWith(".") || k.endsWith(".") || !validKeyRe.test(k)) {
      throw new Error(`invalid key: ${k}`);
    }
  }
  function validateSearchKey(k) {
    if (k.startsWith(".") || k.endsWith(".") || !validSearchKey.test(k)) {
      throw new Error(`invalid key: ${k}`);
    }
  }
  function hasWildcards(k) {
    if (k.startsWith(".") || k.endsWith(".")) {
      throw new Error(`invalid key: ${k}`);
    }
    const chunks = k.split(".");
    let hasWildcards2 = false;
    for (let i = 0; i < chunks.length; i++) {
      switch (chunks[i]) {
        case "*":
          hasWildcards2 = true;
          break;
        case ">":
          if (i !== chunks.length - 1) {
            throw new Error(`invalid key: ${k}`);
          }
          hasWildcards2 = true;
          break;
        default:
      }
    }
    return hasWildcards2;
  }
  function validateBucket(name) {
    if (!validBucketRe.test(name)) {
      throw new Error(`invalid bucket name: ${name}`);
    }
  }
  var PubHeaders;
  (function(PubHeaders2) {
    PubHeaders2["MsgIdHdr"] = "Nats-Msg-Id";
    PubHeaders2["ExpectedStreamHdr"] = "Nats-Expected-Stream";
    PubHeaders2["ExpectedLastSeqHdr"] = "Nats-Expected-Last-Sequence";
    PubHeaders2["ExpectedLastMsgIdHdr"] = "Nats-Expected-Last-Msg-Id";
    PubHeaders2["ExpectedLastSubjectSequenceHdr"] = "Nats-Expected-Last-Subject-Sequence";
  })(PubHeaders || (PubHeaders = {}));
  var Bucket = class _Bucket {
    js;
    jsm;
    stream;
    bucket;
    direct;
    codec;
    prefix;
    editPrefix;
    useJsPrefix;
    _prefixLen;
    constructor(bucket, js, jsm) {
      validateBucket(bucket);
      this.js = js;
      this.jsm = jsm;
      this.bucket = bucket;
      this.prefix = kvSubjectPrefix;
      this.editPrefix = "";
      this.useJsPrefix = false;
      this._prefixLen = 0;
    }
    static async create(js, name, opts = {}) {
      validateBucket(name);
      const jsm = await js.jetstreamManager();
      const bucket = new _Bucket(name, js, jsm);
      await bucket.init(opts);
      return bucket;
    }
    static async bind(js, name, opts = {}) {
      const jsm = await js.jetstreamManager();
      const info = {
        config: {
          allow_direct: opts.allow_direct
        }
      };
      validateBucket(name);
      const bucket = new _Bucket(name, js, jsm);
      info.config.name = opts.streamName ?? bucket.bucketName();
      Object.assign(bucket, info);
      bucket.stream = info.config.name;
      bucket.codec = opts.codec || NoopKvCodecs();
      bucket.direct = info.config.allow_direct ?? false;
      bucket.initializePrefixes(info);
      return bucket;
    }
    async init(opts = {}) {
      const bo = Object.assign(defaultBucketOpts(), opts);
      this.codec = bo.codec;
      const sc = {};
      this.stream = sc.name = opts.streamName ?? this.bucketName();
      sc.retention = RetentionPolicy.Limits;
      sc.max_msgs_per_subject = bo.history;
      if (bo.maxBucketSize) {
        bo.max_bytes = bo.maxBucketSize;
      }
      if (bo.max_bytes) {
        sc.max_bytes = bo.max_bytes;
      }
      sc.max_msg_size = bo.maxValueSize;
      sc.storage = bo.storage;
      const location = opts.placementCluster ?? "";
      if (location) {
        opts.placement = {};
        opts.placement.cluster = location;
        opts.placement.tags = [];
      }
      if (opts.placement) {
        sc.placement = opts.placement;
      }
      if (opts.republish) {
        sc.republish = opts.republish;
      }
      if (opts.description) {
        sc.description = opts.description;
      }
      if (opts.mirror) {
        const mirror = Object.assign({}, opts.mirror);
        if (!mirror.name.startsWith(kvPrefix)) {
          mirror.name = `${kvPrefix}${mirror.name}`;
        }
        sc.mirror = mirror;
        sc.mirror_direct = true;
      } else if (opts.sources) {
        const sources = opts.sources.map((s) => {
          const c = Object.assign({}, s);
          const srcBucketName = c.name.startsWith(kvPrefix) ? c.name.substring(kvPrefix.length) : c.name;
          if (!c.name.startsWith(kvPrefix)) {
            c.name = `${kvPrefix}${c.name}`;
          }
          if (!s.external && srcBucketName !== this.bucket) {
            c.subject_transforms = [
              {
                src: `$KV.${srcBucketName}.>`,
                dest: `$KV.${this.bucket}.>`
              }
            ];
          }
          return c;
        });
        sc.sources = sources;
        sc.subjects = [
          this.subjectForBucket()
        ];
      } else {
        sc.subjects = [
          this.subjectForBucket()
        ];
      }
      if (opts.metadata) {
        sc.metadata = opts.metadata;
      }
      if (typeof opts.compression === "boolean") {
        sc.compression = opts.compression ? StoreCompression.S2 : StoreCompression.None;
      }
      const nci = this.js.nc;
      const have = nci.getServerVersion();
      const discardNew = have ? compare(have, parseSemVer("2.7.2")) >= 0 : false;
      sc.discard = discardNew ? DiscardPolicy.New : DiscardPolicy.Old;
      const { ok: direct, min } = nci.features.get(Feature.JS_ALLOW_DIRECT);
      if (!direct && opts.allow_direct === true) {
        const v = have ? `${have.major}.${have.minor}.${have.micro}` : "unknown";
        return Promise.reject(new Error(`allow_direct is not available on server version ${v} - requires ${min}`));
      }
      opts.allow_direct = typeof opts.allow_direct === "boolean" ? opts.allow_direct : direct;
      sc.allow_direct = opts.allow_direct;
      this.direct = sc.allow_direct;
      sc.num_replicas = bo.replicas;
      if (bo.ttl) {
        sc.max_age = nanos(bo.ttl);
      }
      sc.allow_rollup_hdrs = true;
      let info;
      try {
        info = await this.jsm.streams.info(sc.name);
        if (!info.config.allow_direct && this.direct === true) {
          this.direct = false;
        }
      } catch (err) {
        if (err.message === "stream not found") {
          info = await this.jsm.streams.add(sc);
        } else {
          throw err;
        }
      }
      this.initializePrefixes(info);
    }
    initializePrefixes(info) {
      this._prefixLen = 0;
      this.prefix = `$KV.${this.bucket}`;
      this.useJsPrefix = this.js.apiPrefix !== "$JS.API";
      const { mirror } = info.config;
      if (mirror) {
        let n = mirror.name;
        if (n.startsWith(kvPrefix)) {
          n = n.substring(kvPrefix.length);
        }
        if (mirror.external && mirror.external.api !== "") {
          const mb = mirror.name.substring(kvPrefix.length);
          this.useJsPrefix = false;
          this.prefix = `$KV.${mb}`;
          this.editPrefix = `${mirror.external.api}.$KV.${n}`;
        } else {
          this.editPrefix = this.prefix;
        }
      }
    }
    bucketName() {
      return this.stream ?? `${kvPrefix}${this.bucket}`;
    }
    subjectForBucket() {
      return `${this.prefix}.${this.bucket}.>`;
    }
    subjectForKey(k, edit = false) {
      const builder = [];
      if (edit) {
        if (this.useJsPrefix) {
          builder.push(this.js.apiPrefix);
        }
        if (this.editPrefix !== "") {
          builder.push(this.editPrefix);
        } else {
          builder.push(this.prefix);
        }
      } else {
        if (this.prefix) {
          builder.push(this.prefix);
        }
      }
      builder.push(k);
      return builder.join(".");
    }
    fullKeyName(k) {
      if (this.prefix !== "") {
        return `${this.prefix}.${k}`;
      }
      return `${kvSubjectPrefix}.${this.bucket}.${k}`;
    }
    get prefixLen() {
      if (this._prefixLen === 0) {
        this._prefixLen = this.prefix.length + 1;
      }
      return this._prefixLen;
    }
    encodeKey(key) {
      const chunks = [];
      for (const t of key.split(".")) {
        switch (t) {
          case ">":
          case "*":
            chunks.push(t);
            break;
          default:
            chunks.push(this.codec.key.encode(t));
            break;
        }
      }
      return chunks.join(".");
    }
    decodeKey(ekey) {
      const chunks = [];
      for (const t of ekey.split(".")) {
        switch (t) {
          case ">":
          case "*":
            chunks.push(t);
            break;
          default:
            chunks.push(this.codec.key.decode(t));
            break;
        }
      }
      return chunks.join(".");
    }
    validateKey = validateKey;
    validateSearchKey = validateSearchKey;
    hasWildcards = hasWildcards;
    close() {
      return Promise.resolve();
    }
    dataLen(data, h) {
      const slen = h ? h.get(JsHeaders.MessageSizeHdr) || "" : "";
      if (slen !== "") {
        return parseInt(slen, 10);
      }
      return data.length;
    }
    smToEntry(sm) {
      return new KvStoredEntryImpl(this.bucket, this.prefixLen, sm);
    }
    jmToEntry(jm) {
      const key = this.decodeKey(jm.subject.substring(this.prefixLen));
      return new KvJsMsgEntryImpl(this.bucket, key, jm);
    }
    async create(k, data) {
      let firstErr;
      try {
        const n = await this.put(k, data, {
          previousSeq: 0
        });
        return Promise.resolve(n);
      } catch (err) {
        firstErr = err;
        if (err?.api_error?.err_code !== 10071) {
          return Promise.reject(err);
        }
      }
      let rev = 0;
      try {
        const e = await this.get(k);
        if (e?.operation === "DEL" || e?.operation === "PURGE") {
          rev = e !== null ? e.revision : 0;
          return this.update(k, data, rev);
        } else {
          return Promise.reject(firstErr);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }
    update(k, data, version) {
      if (version <= 0) {
        throw new Error("version must be greater than 0");
      }
      return this.put(k, data, {
        previousSeq: version
      });
    }
    async put(k, data, opts = {}) {
      const ek = this.encodeKey(k);
      this.validateKey(ek);
      const o = {};
      if (opts.previousSeq !== void 0) {
        const h = headers();
        o.headers = h;
        h.set(PubHeaders.ExpectedLastSubjectSequenceHdr, `${opts.previousSeq}`);
      }
      try {
        const pa = await this.js.publish(this.subjectForKey(ek, true), data, o);
        return pa.seq;
      } catch (err) {
        const ne = err;
        if (ne.isJetStreamError()) {
          ne.message = ne.api_error?.description;
          ne.code = `${ne.api_error?.code}`;
          return Promise.reject(ne);
        }
        return Promise.reject(err);
      }
    }
    async get(k, opts) {
      const ek = this.encodeKey(k);
      this.validateKey(ek);
      let arg = {
        last_by_subj: this.subjectForKey(ek)
      };
      if (opts && opts.revision > 0) {
        arg = {
          seq: opts.revision
        };
      }
      let sm;
      try {
        if (this.direct) {
          const direct = this.jsm.direct;
          sm = await direct.getMessage(this.bucketName(), arg);
        } else {
          sm = await this.jsm.streams.getMessage(this.bucketName(), arg);
        }
        const ke = this.smToEntry(sm);
        if (ke.key !== ek) {
          return null;
        }
        return ke;
      } catch (err) {
        if (err.code === ErrorCode.JetStream404NoMessages) {
          return null;
        }
        throw err;
      }
    }
    purge(k, opts) {
      return this._deleteOrPurge(k, "PURGE", opts);
    }
    delete(k, opts) {
      return this._deleteOrPurge(k, "DEL", opts);
    }
    async purgeDeletes(olderMillis = 30 * 60 * 1e3) {
      const done = deferred();
      const buf = [];
      const i = await this.watch({
        key: ">",
        initializedFn: () => {
          done.resolve();
        }
      });
      (async () => {
        for await (const e of i) {
          if (e.operation === "DEL" || e.operation === "PURGE") {
            buf.push(e);
          }
        }
      })().then();
      await done;
      i.stop();
      const min = Date.now() - olderMillis;
      const proms = buf.map((e) => {
        const subj = this.subjectForKey(e.key);
        if (e.created.getTime() >= min) {
          return this.jsm.streams.purge(this.stream, {
            filter: subj,
            keep: 1
          });
        } else {
          return this.jsm.streams.purge(this.stream, {
            filter: subj,
            keep: 0
          });
        }
      });
      const purged = await Promise.all(proms);
      purged.unshift({
        success: true,
        purged: 0
      });
      return purged.reduce((pv, cv) => {
        pv.purged += cv.purged;
        return pv;
      });
    }
    async _deleteOrPurge(k, op, opts) {
      if (!this.hasWildcards(k)) {
        return this._doDeleteOrPurge(k, op, opts);
      }
      const iter = await this.keys(k);
      const buf = [];
      for await (const k2 of iter) {
        buf.push(this._doDeleteOrPurge(k2, op));
        if (buf.length === 100) {
          await Promise.all(buf);
          buf.length = 0;
        }
      }
      if (buf.length > 0) {
        await Promise.all(buf);
      }
    }
    async _doDeleteOrPurge(k, op, opts) {
      const ek = this.encodeKey(k);
      this.validateKey(ek);
      const h = headers();
      h.set(kvOperationHdr, op);
      if (op === "PURGE") {
        h.set(JsHeaders.RollupHdr, JsHeaders.RollupValueSubject);
      }
      if (opts?.previousSeq) {
        h.set(PubHeaders.ExpectedLastSubjectSequenceHdr, `${opts.previousSeq}`);
      }
      await this.js.publish(this.subjectForKey(ek, true), Empty, {
        headers: h
      });
    }
    _buildCC(k, content, opts = {}) {
      const a = !Array.isArray(k) ? [
        k
      ] : k;
      let filter_subjects = a.map((k2) => {
        const ek = this.encodeKey(k2);
        this.validateSearchKey(k2);
        return this.fullKeyName(ek);
      });
      let deliver_policy = DeliverPolicy.LastPerSubject;
      if (content === KvWatchInclude.AllHistory) {
        deliver_policy = DeliverPolicy.All;
      }
      if (content === KvWatchInclude.UpdatesOnly) {
        deliver_policy = DeliverPolicy.New;
      }
      let filter_subject = void 0;
      if (filter_subjects.length === 1) {
        filter_subject = filter_subjects[0];
        filter_subjects = void 0;
      }
      return Object.assign({
        deliver_policy,
        "ack_policy": AckPolicy.None,
        filter_subjects,
        filter_subject,
        "flow_control": true,
        "idle_heartbeat": nanos(5 * 1e3)
      }, opts);
    }
    remove(k) {
      return this.purge(k);
    }
    async history(opts = {}) {
      const k = opts.key ?? ">";
      const qi = new QueuedIteratorImpl();
      const co = {};
      co.headers_only = opts.headers_only || false;
      let fn;
      fn = () => {
        qi.stop();
      };
      let count = 0;
      const cc2 = this._buildCC(k, KvWatchInclude.AllHistory, co);
      const subj = cc2.filter_subject;
      const copts = consumerOpts(cc2);
      copts.bindStream(this.stream);
      copts.orderedConsumer();
      copts.callback((err, jm) => {
        if (err) {
          qi.stop(err);
          return;
        }
        if (jm) {
          const e = this.jmToEntry(jm);
          qi.push(e);
          qi.received++;
          if (fn && count > 0 && qi.received >= count || jm.info.pending === 0) {
            qi.push(fn);
            fn = void 0;
          }
        }
      });
      const sub = await this.js.subscribe(subj, copts);
      if (fn) {
        const { info: { last: last3 } } = sub;
        const expect = last3.num_pending + last3.delivered.consumer_seq;
        if (expect === 0 || qi.received >= expect) {
          try {
            fn();
          } catch (err) {
            qi.stop(err);
          } finally {
            fn = void 0;
          }
        } else {
          count = expect;
        }
      }
      qi._data = sub;
      qi.iterClosed.then(() => {
        sub.unsubscribe();
      });
      sub.closed.then(() => {
        qi.stop();
      }).catch((err) => {
        qi.stop(err);
      });
      return qi;
    }
    canSetWatcherName() {
      const jsi = this.js;
      const nci = jsi.nc;
      const { ok } = nci.features.get(Feature.JS_NEW_CONSUMER_CREATE_API);
      return ok;
    }
    async watch(opts = {}) {
      const k = opts.key ?? ">";
      const qi = new QueuedIteratorImpl();
      const co = {};
      co.headers_only = opts.headers_only || false;
      let content = KvWatchInclude.LastValue;
      if (opts.include === KvWatchInclude.AllHistory) {
        content = KvWatchInclude.AllHistory;
      } else if (opts.include === KvWatchInclude.UpdatesOnly) {
        content = KvWatchInclude.UpdatesOnly;
      }
      const ignoreDeletes = opts.ignoreDeletes === true;
      let fn = opts.initializedFn;
      let count = 0;
      const cc2 = this._buildCC(k, content, co);
      const subj = cc2.filter_subject;
      const copts = consumerOpts(cc2);
      if (this.canSetWatcherName()) {
        copts.consumerName(nuid.next());
      }
      copts.bindStream(this.stream);
      if (opts.resumeFromRevision && opts.resumeFromRevision > 0) {
        copts.startSequence(opts.resumeFromRevision);
      }
      copts.orderedConsumer();
      copts.callback((err, jm) => {
        if (err) {
          qi.stop(err);
          return;
        }
        if (jm) {
          const e = this.jmToEntry(jm);
          if (ignoreDeletes && e.operation === "DEL") {
            return;
          }
          qi.push(e);
          qi.received++;
          if (fn && (count > 0 && qi.received >= count || jm.info.pending === 0)) {
            qi.push(fn);
            fn = void 0;
          }
        }
      });
      const sub = await this.js.subscribe(subj, copts);
      if (fn) {
        const { info: { last: last3 } } = sub;
        const expect = last3.num_pending + last3.delivered.consumer_seq;
        if (expect === 0 || qi.received >= expect) {
          try {
            fn();
          } catch (err) {
            qi.stop(err);
          } finally {
            fn = void 0;
          }
        } else {
          count = expect;
        }
      }
      qi._data = sub;
      qi.iterClosed.then(() => {
        sub.unsubscribe();
      });
      sub.closed.then(() => {
        qi.stop();
      }).catch((err) => {
        qi.stop(err);
      });
      return qi;
    }
    async keys(k = ">") {
      const keys2 = new QueuedIteratorImpl();
      const cc2 = this._buildCC(k, KvWatchInclude.LastValue, {
        headers_only: true
      });
      const subj = Array.isArray(k) ? ">" : cc2.filter_subject;
      const copts = consumerOpts(cc2);
      copts.bindStream(this.stream);
      copts.orderedConsumer();
      const sub = await this.js.subscribe(subj, copts);
      (async () => {
        for await (const jm of sub) {
          const op = jm.headers?.get(kvOperationHdr);
          if (op !== "DEL" && op !== "PURGE") {
            const key = this.decodeKey(jm.subject.substring(this.prefixLen));
            keys2.push(key);
          }
          if (jm.info.pending === 0) {
            sub.unsubscribe();
          }
        }
      })().then(() => {
        keys2.stop();
      }).catch((err) => {
        keys2.stop(err);
      });
      const si = sub;
      if (si.info.last.num_pending === 0) {
        sub.unsubscribe();
      }
      return keys2;
    }
    purgeBucket(opts) {
      return this.jsm.streams.purge(this.bucketName(), opts);
    }
    destroy() {
      return this.jsm.streams.delete(this.bucketName());
    }
    async status() {
      const nc = this.js.nc;
      const cluster = nc.info?.cluster ?? "";
      const bn = this.bucketName();
      const si = await this.jsm.streams.info(bn);
      return new KvStatusImpl(si, cluster);
    }
  };
  var KvStatusImpl = class {
    si;
    cluster;
    constructor(si, cluster = "") {
      this.si = si;
      this.cluster = cluster;
    }
    get bucket() {
      return this.si.config.name.startsWith(kvPrefix) ? this.si.config.name.substring(kvPrefix.length) : this.si.config.name;
    }
    get values() {
      return this.si.state.messages;
    }
    get history() {
      return this.si.config.max_msgs_per_subject;
    }
    get ttl() {
      return millis(this.si.config.max_age);
    }
    get bucket_location() {
      return this.cluster;
    }
    get backingStore() {
      return this.si.config.storage;
    }
    get storage() {
      return this.si.config.storage;
    }
    get replicas() {
      return this.si.config.num_replicas;
    }
    get description() {
      return this.si.config.description ?? "";
    }
    get maxBucketSize() {
      return this.si.config.max_bytes;
    }
    get maxValueSize() {
      return this.si.config.max_msg_size;
    }
    get max_bytes() {
      return this.si.config.max_bytes;
    }
    get placement() {
      return this.si.config.placement || {
        cluster: "",
        tags: []
      };
    }
    get placementCluster() {
      return this.si.config.placement?.cluster ?? "";
    }
    get republish() {
      return this.si.config.republish ?? {
        src: "",
        dest: ""
      };
    }
    get streamInfo() {
      return this.si;
    }
    get size() {
      return this.si.state.bytes;
    }
    get metadata() {
      return this.si.config.metadata ?? {};
    }
    get compression() {
      if (this.si.config.compression) {
        return this.si.config.compression !== StoreCompression.None;
      }
      return false;
    }
  };
  var osPrefix = "OBJ_";
  var digestType = "SHA-256=";
  function objectStoreStreamName(bucket) {
    validateBucket(bucket);
    return `${osPrefix}${bucket}`;
  }
  function objectStoreBucketName(stream) {
    if (stream.startsWith(osPrefix)) {
      return stream.substring(4);
    }
    return stream;
  }
  var ObjectStoreStatusImpl = class {
    si;
    backingStore;
    constructor(si) {
      this.si = si;
      this.backingStore = "JetStream";
    }
    get bucket() {
      return objectStoreBucketName(this.si.config.name);
    }
    get description() {
      return this.si.config.description ?? "";
    }
    get ttl() {
      return this.si.config.max_age;
    }
    get storage() {
      return this.si.config.storage;
    }
    get replicas() {
      return this.si.config.num_replicas;
    }
    get sealed() {
      return this.si.config.sealed;
    }
    get size() {
      return this.si.state.bytes;
    }
    get streamInfo() {
      return this.si;
    }
    get metadata() {
      return this.si.config.metadata;
    }
    get compression() {
      if (this.si.config.compression) {
        return this.si.config.compression !== StoreCompression.None;
      }
      return false;
    }
  };
  function convertStreamSourceDomain(s) {
    if (s === void 0) {
      return void 0;
    }
    const { domain } = s;
    if (domain === void 0) {
      return s;
    }
    const copy2 = Object.assign({}, s);
    delete copy2.domain;
    if (domain === "") {
      return copy2;
    }
    if (copy2.external) {
      throw new Error("domain and external are both set");
    }
    copy2.external = {
      api: `$JS.${domain}.API`
    };
    return copy2;
  }
  var PullConsumerType;
  (function(PullConsumerType2) {
    PullConsumerType2[PullConsumerType2["Unset"] = -1] = "Unset";
    PullConsumerType2[PullConsumerType2["Consume"] = 0] = "Consume";
    PullConsumerType2[PullConsumerType2["Fetch"] = 1] = "Fetch";
  })(PullConsumerType || (PullConsumerType = {}));
  var ConsumerEvents;
  (function(ConsumerEvents2) {
    ConsumerEvents2["HeartbeatsMissed"] = "heartbeats_missed";
    ConsumerEvents2["ConsumerNotFound"] = "consumer_not_found";
    ConsumerEvents2["StreamNotFound"] = "stream_not_found";
    ConsumerEvents2["ConsumerDeleted"] = "consumer_deleted";
    ConsumerEvents2["OrderedConsumerRecreated"] = "ordered_consumer_recreated";
  })(ConsumerEvents || (ConsumerEvents = {}));
  var ConsumerDebugEvents;
  (function(ConsumerDebugEvents2) {
    ConsumerDebugEvents2["DebugEvent"] = "debug";
    ConsumerDebugEvents2["Discard"] = "discard";
    ConsumerDebugEvents2["Reset"] = "reset";
    ConsumerDebugEvents2["Next"] = "next";
  })(ConsumerDebugEvents || (ConsumerDebugEvents = {}));
  var ACK = Uint8Array.of(43, 65, 67, 75);
  var NAK = Uint8Array.of(45, 78, 65, 75);
  var WPI = Uint8Array.of(43, 87, 80, 73);
  var NXT = Uint8Array.of(43, 78, 88, 84);
  var TERM = Uint8Array.of(43, 84, 69, 82, 77);
  var SPACE = Uint8Array.of(32);
  function toJsMsg(m, ackTimeout = 5e3) {
    return new JsMsgImpl(m, ackTimeout);
  }
  var PullConsumerMessagesImpl = class extends QueuedIteratorImpl {
    consumer;
    opts;
    sub;
    monitor;
    pending;
    inbox;
    refilling;
    pong;
    callback;
    timeout;
    cleanupHandler;
    listeners;
    statusIterator;
    forOrderedConsumer;
    resetHandler;
    abortOnMissingResource;
    bind;
    constructor(c, opts, refilling = false) {
      super();
      this.consumer = c;
      const copts = opts;
      this.opts = this.parseOptions(opts, refilling);
      this.callback = copts.callback || null;
      this.noIterator = typeof this.callback === "function";
      this.monitor = null;
      this.pong = null;
      this.pending = {
        msgs: 0,
        bytes: 0,
        requests: 0
      };
      this.refilling = refilling;
      this.timeout = null;
      this.inbox = createInbox(c.api.nc.options.inboxPrefix);
      this.listeners = [];
      this.forOrderedConsumer = false;
      this.abortOnMissingResource = copts.abort_on_missing_resource === true;
      this.bind = copts.bind === true;
      this.start();
    }
    start() {
      const { max_messages, max_bytes, idle_heartbeat, threshold_bytes, threshold_messages } = this.opts;
      this.closed().then((err) => {
        if (this.cleanupHandler) {
          try {
            this.cleanupHandler(err);
          } catch (_err) {
          }
        }
      });
      const { sub } = this;
      if (sub) {
        sub.unsubscribe();
      }
      this.sub = this.consumer.api.nc.subscribe(this.inbox, {
        callback: (err, msg) => {
          if (err) {
            this.stop(err);
            return;
          }
          this.monitor?.work();
          const isProtocol = msg.subject === this.inbox;
          if (isProtocol) {
            if (isHeartbeatMsg(msg)) {
              return;
            }
            const code2 = msg.headers?.code;
            const description = msg.headers?.description?.toLowerCase() || "unknown";
            const { msgsLeft, bytesLeft } = this.parseDiscard(msg.headers);
            if (msgsLeft > 0 || bytesLeft > 0) {
              this.pending.msgs -= msgsLeft;
              this.pending.bytes -= bytesLeft;
              this.pending.requests--;
              this.notify(ConsumerDebugEvents.Discard, {
                msgsLeft,
                bytesLeft
              });
            } else {
              if (code2 === 400) {
                this.stop(new NatsError(description, `${code2}`));
                return;
              } else if (code2 === 409 && description === "consumer deleted") {
                this.notify(ConsumerEvents.ConsumerDeleted, `${code2} ${description}`);
                if (!this.refilling || this.abortOnMissingResource) {
                  const error = new NatsError(description, `${code2}`);
                  this.stop(error);
                  return;
                }
              } else {
                this.notify(ConsumerDebugEvents.DebugEvent, `${code2} ${description}`);
              }
            }
          } else {
            this._push(toJsMsg(msg, this.consumer.api.timeout));
            this.received++;
            if (this.pending.msgs) {
              this.pending.msgs--;
            }
            if (this.pending.bytes) {
              this.pending.bytes -= msg.size();
            }
          }
          if (this.pending.msgs === 0 && this.pending.bytes === 0) {
            this.pending.requests = 0;
          }
          if (this.refilling) {
            if (max_messages && this.pending.msgs <= threshold_messages || max_bytes && this.pending.bytes <= threshold_bytes) {
              const batch = this.pullOptions();
              this.pull(batch);
            }
          } else if (this.pending.requests === 0) {
            this._push(() => {
              this.stop();
            });
          }
        }
      });
      this.sub.closed.then(() => {
        if (this.sub.draining) {
          this._push(() => {
            this.stop();
          });
        }
      });
      if (idle_heartbeat) {
        this.monitor = new IdleHeartbeatMonitor(idle_heartbeat, (data) => {
          this.notify(ConsumerEvents.HeartbeatsMissed, data);
          this.resetPending().then(() => {
          }).catch(() => {
          });
          return false;
        }, {
          maxOut: 2
        });
      }
      (async () => {
        const status = this.consumer.api.nc.status();
        this.statusIterator = status;
        for await (const s of status) {
          switch (s.type) {
            case Events.Disconnect:
              this.monitor?.cancel();
              break;
            case Events.Reconnect:
              this.resetPending().then((ok) => {
                if (ok) {
                  this.monitor?.restart();
                }
              }).catch(() => {
              });
              break;
            default:
          }
        }
      })();
      this.pull(this.pullOptions());
    }
    _push(r) {
      if (!this.callback) {
        super.push(r);
      } else {
        const fn = typeof r === "function" ? r : null;
        try {
          if (!fn) {
            this.callback(r);
          } else {
            fn();
          }
        } catch (err) {
          this.stop(err);
        }
      }
    }
    notify(type, data) {
      if (this.listeners.length > 0) {
        (() => {
          this.listeners.forEach((l) => {
            if (!l.done) {
              l.push({
                type,
                data
              });
            }
          });
        })();
      }
    }
    resetPending() {
      return this.bind ? this.resetPendingNoInfo() : this.resetPendingWithInfo();
    }
    resetPendingNoInfo() {
      this.pending.msgs = 0;
      this.pending.bytes = 0;
      this.pending.requests = 0;
      this.pull(this.pullOptions());
      return Promise.resolve(true);
    }
    async resetPendingWithInfo() {
      let notFound = 0;
      let streamNotFound = 0;
      const bo = backoff();
      let attempt = 0;
      while (true) {
        if (this.done) {
          return false;
        }
        if (this.consumer.api.nc.isClosed()) {
          console.error("aborting resetPending - connection is closed");
          return false;
        }
        try {
          await this.consumer.info();
          notFound = 0;
          this.pending.msgs = 0;
          this.pending.bytes = 0;
          this.pending.requests = 0;
          this.pull(this.pullOptions());
          return true;
        } catch (err) {
          if (err.message === "stream not found") {
            streamNotFound++;
            this.notify(ConsumerEvents.StreamNotFound, streamNotFound);
            if (!this.refilling || this.abortOnMissingResource) {
              this.stop(err);
              return false;
            }
          } else if (err.message === "consumer not found") {
            notFound++;
            this.notify(ConsumerEvents.ConsumerNotFound, notFound);
            if (this.resetHandler) {
              try {
                this.resetHandler();
              } catch (_) {
              }
            }
            if (!this.refilling || this.abortOnMissingResource) {
              this.stop(err);
              return false;
            }
            if (this.forOrderedConsumer) {
              return false;
            }
          } else {
            notFound = 0;
            streamNotFound = 0;
          }
          const to = bo.backoff(attempt);
          const de = delay(to);
          await Promise.race([
            de,
            this.consumer.api.nc.closed()
          ]);
          de.cancel();
          attempt++;
        }
      }
    }
    pull(opts) {
      this.pending.bytes += opts.max_bytes ?? 0;
      this.pending.msgs += opts.batch ?? 0;
      this.pending.requests++;
      const nc = this.consumer.api.nc;
      this._push(() => {
        nc.publish(`${this.consumer.api.prefix}.CONSUMER.MSG.NEXT.${this.consumer.stream}.${this.consumer.name}`, this.consumer.api.jc.encode(opts), {
          reply: this.inbox
        });
        this.notify(ConsumerDebugEvents.Next, opts);
      });
    }
    pullOptions() {
      const batch = this.opts.max_messages - this.pending.msgs;
      const max_bytes = this.opts.max_bytes - this.pending.bytes;
      const idle_heartbeat = nanos(this.opts.idle_heartbeat);
      const expires = nanos(this.opts.expires);
      return {
        batch,
        max_bytes,
        idle_heartbeat,
        expires
      };
    }
    parseDiscard(headers2) {
      const discard = {
        msgsLeft: 0,
        bytesLeft: 0
      };
      const msgsLeft = headers2?.get(JsHeaders.PendingMessagesHdr);
      if (msgsLeft) {
        discard.msgsLeft = parseInt(msgsLeft);
      }
      const bytesLeft = headers2?.get(JsHeaders.PendingBytesHdr);
      if (bytesLeft) {
        discard.bytesLeft = parseInt(bytesLeft);
      }
      return discard;
    }
    trackTimeout(t) {
      this.timeout = t;
    }
    close() {
      this.stop();
      return this.iterClosed;
    }
    closed() {
      return this.iterClosed;
    }
    clearTimers() {
      this.monitor?.cancel();
      this.monitor = null;
      this.timeout?.cancel();
      this.timeout = null;
    }
    setCleanupHandler(fn) {
      this.cleanupHandler = fn;
    }
    stop(err) {
      if (this.done) {
        return;
      }
      this.sub?.unsubscribe();
      this.clearTimers();
      this.statusIterator?.stop();
      this._push(() => {
        super.stop(err);
        this.listeners.forEach((n) => {
          n.stop();
        });
      });
    }
    parseOptions(opts, refilling = false) {
      const args = opts || {};
      args.max_messages = args.max_messages || 0;
      args.max_bytes = args.max_bytes || 0;
      if (args.max_messages !== 0 && args.max_bytes !== 0) {
        throw new Error(`only specify one of max_messages or max_bytes`);
      }
      if (args.max_messages === 0) {
        args.max_messages = 100;
      }
      args.expires = args.expires || 3e4;
      if (args.expires < 1e3) {
        throw new Error("expires should be at least 1000ms");
      }
      args.idle_heartbeat = args.idle_heartbeat || args.expires / 2;
      args.idle_heartbeat = args.idle_heartbeat > 3e4 ? 3e4 : args.idle_heartbeat;
      if (refilling) {
        const minMsgs = Math.round(args.max_messages * 0.75) || 1;
        args.threshold_messages = args.threshold_messages || minMsgs;
        const minBytes = Math.round(args.max_bytes * 0.75) || 1;
        args.threshold_bytes = args.threshold_bytes || minBytes;
      }
      return args;
    }
    status() {
      const iter = new QueuedIteratorImpl();
      this.listeners.push(iter);
      return Promise.resolve(iter);
    }
  };
  var OrderedConsumerMessages = class extends QueuedIteratorImpl {
    src;
    listeners;
    constructor() {
      super();
      this.listeners = [];
    }
    setSource(src) {
      if (this.src) {
        this.src.resetHandler = void 0;
        this.src.setCleanupHandler();
        this.src.stop();
      }
      this.src = src;
      this.src.setCleanupHandler((err) => {
        this.stop(err || void 0);
      });
      (async () => {
        const status = await this.src.status();
        for await (const s of status) {
          this.notify(s.type, s.data);
        }
      })().catch(() => {
      });
    }
    notify(type, data) {
      if (this.listeners.length > 0) {
        (() => {
          this.listeners.forEach((l) => {
            if (!l.done) {
              l.push({
                type,
                data
              });
            }
          });
        })();
      }
    }
    stop(err) {
      if (this.done) {
        return;
      }
      this.src?.stop(err);
      super.stop(err);
      this.listeners.forEach((n) => {
        n.stop();
      });
    }
    close() {
      this.stop();
      return this.iterClosed;
    }
    closed() {
      return this.iterClosed;
    }
    status() {
      const iter = new QueuedIteratorImpl();
      this.listeners.push(iter);
      return Promise.resolve(iter);
    }
  };
  var PullConsumerImpl = class {
    api;
    _info;
    stream;
    name;
    constructor(api, info) {
      this.api = api;
      this._info = info;
      this.stream = info.stream_name;
      this.name = info.name;
    }
    consume(opts = {
      max_messages: 100,
      expires: 3e4
    }) {
      return Promise.resolve(new PullConsumerMessagesImpl(this, opts, true));
    }
    fetch(opts = {
      max_messages: 100,
      expires: 3e4
    }) {
      const m = new PullConsumerMessagesImpl(this, opts, false);
      const to = Math.round(m.opts.expires * 1.05);
      const timer = timeout(to);
      m.closed().catch(() => {
      }).finally(() => {
        timer.cancel();
      });
      timer.catch(() => {
        m.close().catch();
      });
      m.trackTimeout(timer);
      return Promise.resolve(m);
    }
    next(opts = {
      expires: 3e4
    }) {
      const d = deferred();
      const fopts = opts;
      fopts.max_messages = 1;
      const iter = new PullConsumerMessagesImpl(this, fopts, false);
      const to = Math.round(iter.opts.expires * 1.05);
      if (to >= 6e4) {
        (async () => {
          for await (const s of await iter.status()) {
            if (s.type === ConsumerEvents.HeartbeatsMissed && s.data >= 2) {
              d.reject(new Error("consumer missed heartbeats"));
              break;
            }
          }
        })().catch();
      }
      (async () => {
        for await (const m of iter) {
          d.resolve(m);
          break;
        }
      })().catch(() => {
      });
      const timer = timeout(to);
      iter.closed().then((err) => {
        err ? d.reject(err) : d.resolve(null);
      }).catch((err) => {
        d.reject(err);
      }).finally(() => {
        timer.cancel();
      });
      timer.catch((_err) => {
        d.resolve(null);
        iter.close().catch();
      });
      iter.trackTimeout(timer);
      return d;
    }
    delete() {
      const { stream_name, name } = this._info;
      return this.api.delete(stream_name, name);
    }
    info(cached = false) {
      if (cached) {
        return Promise.resolve(this._info);
      }
      const { stream_name, name } = this._info;
      return this.api.info(stream_name, name).then((ci) => {
        this._info = ci;
        return this._info;
      });
    }
  };
  var OrderedPullConsumerImpl = class {
    api;
    consumerOpts;
    consumer;
    opts;
    cursor;
    stream;
    namePrefix;
    serial;
    currentConsumer;
    userCallback;
    iter;
    type;
    startSeq;
    constructor(api, stream, opts = {}) {
      this.api = api;
      this.stream = stream;
      this.cursor = {
        stream_seq: 1,
        deliver_seq: 0
      };
      this.namePrefix = nuid.next();
      if (typeof opts.name_prefix === "string") {
        minValidation("name_prefix", opts.name_prefix);
        this.namePrefix = opts.name_prefix + this.namePrefix;
      }
      this.serial = 0;
      this.currentConsumer = null;
      this.userCallback = null;
      this.iter = null;
      this.type = PullConsumerType.Unset;
      this.consumerOpts = opts;
      this.startSeq = this.consumerOpts.opt_start_seq || 0;
      this.cursor.stream_seq = this.startSeq > 0 ? this.startSeq - 1 : 0;
    }
    getConsumerOpts(seq) {
      this.serial++;
      const name = `${this.namePrefix}_${this.serial}`;
      seq = seq === 0 ? 1 : seq;
      const config = {
        name,
        deliver_policy: DeliverPolicy.StartSequence,
        opt_start_seq: seq,
        ack_policy: AckPolicy.None,
        inactive_threshold: nanos(5 * 60 * 1e3),
        num_replicas: 1
      };
      if (this.consumerOpts.headers_only === true) {
        config.headers_only = true;
      }
      if (Array.isArray(this.consumerOpts.filterSubjects)) {
        config.filter_subjects = this.consumerOpts.filterSubjects;
      }
      if (typeof this.consumerOpts.filterSubjects === "string") {
        config.filter_subject = this.consumerOpts.filterSubjects;
      }
      if (this.consumerOpts.replay_policy) {
        config.replay_policy = this.consumerOpts.replay_policy;
      }
      if (seq === this.startSeq + 1) {
        config.deliver_policy = this.consumerOpts.deliver_policy || DeliverPolicy.StartSequence;
        if (this.consumerOpts.deliver_policy === DeliverPolicy.LastPerSubject || this.consumerOpts.deliver_policy === DeliverPolicy.New || this.consumerOpts.deliver_policy === DeliverPolicy.Last) {
          delete config.opt_start_seq;
          config.deliver_policy = this.consumerOpts.deliver_policy;
        }
        if (config.deliver_policy === DeliverPolicy.LastPerSubject) {
          if (typeof config.filter_subjects === "undefined" && typeof config.filter_subject === "undefined") {
            config.filter_subject = ">";
          }
        }
        if (this.consumerOpts.opt_start_time) {
          delete config.opt_start_seq;
          config.deliver_policy = DeliverPolicy.StartTime;
          config.opt_start_time = this.consumerOpts.opt_start_time;
        }
        if (this.consumerOpts.inactive_threshold) {
          config.inactive_threshold = nanos(this.consumerOpts.inactive_threshold);
        }
      }
      return config;
    }
    async resetConsumer(seq = 0) {
      this.consumer?.delete().catch(() => {
      });
      seq = seq === 0 ? 1 : seq;
      this.cursor.deliver_seq = 0;
      const config = this.getConsumerOpts(seq);
      config.max_deliver = 1;
      config.mem_storage = true;
      const bo = backoff();
      let ci;
      for (let i = 0; ; i++) {
        try {
          ci = await this.api.add(this.stream, config);
          this.iter?.notify(ConsumerEvents.OrderedConsumerRecreated, ci.name);
          break;
        } catch (err) {
          if (err.message === "stream not found") {
            this.iter?.notify(ConsumerEvents.StreamNotFound, i);
            if (this.type === PullConsumerType.Fetch || this.opts.abort_on_missing_resource === true) {
              this.iter?.stop(err);
              return Promise.reject(err);
            }
          }
          if (seq === 0 && i >= 30) {
            throw err;
          } else {
            await delay(bo.backoff(i + 1));
          }
        }
      }
      return ci;
    }
    internalHandler(serial) {
      return (m) => {
        if (this.serial !== serial) {
          return;
        }
        const dseq = m.info.deliverySequence;
        if (dseq !== this.cursor.deliver_seq + 1) {
          this.notifyOrderedResetAndReset();
          return;
        }
        this.cursor.deliver_seq = dseq;
        this.cursor.stream_seq = m.info.streamSequence;
        if (this.userCallback) {
          this.userCallback(m);
        } else {
          this.iter?.push(m);
        }
      };
    }
    async reset(opts = {
      max_messages: 100,
      expires: 3e4
    }, info) {
      info = info || {};
      const fromFetch = info.fromFetch || false;
      const orderedReset = info.orderedReset || false;
      if (this.type === PullConsumerType.Fetch && orderedReset) {
        this.iter?.src.stop();
        await this.iter?.closed();
        this.currentConsumer = null;
        return;
      }
      if (this.currentConsumer === null || orderedReset) {
        this.currentConsumer = await this.resetConsumer(this.cursor.stream_seq + 1);
      }
      if (this.iter === null || fromFetch) {
        this.iter = new OrderedConsumerMessages();
      }
      this.consumer = new PullConsumerImpl(this.api, this.currentConsumer);
      const copts = opts;
      copts.callback = this.internalHandler(this.serial);
      let msgs = null;
      if (this.type === PullConsumerType.Fetch && fromFetch) {
        msgs = await this.consumer.fetch(opts);
      } else if (this.type === PullConsumerType.Consume) {
        msgs = await this.consumer.consume(opts);
      }
      const msgsImpl = msgs;
      msgsImpl.forOrderedConsumer = true;
      msgsImpl.resetHandler = () => {
        this.notifyOrderedResetAndReset();
      };
      this.iter.setSource(msgsImpl);
    }
    notifyOrderedResetAndReset() {
      this.iter?.notify(ConsumerDebugEvents.Reset, "");
      this.reset(this.opts, {
        orderedReset: true
      });
    }
    async consume(opts = {
      max_messages: 100,
      expires: 3e4
    }) {
      const copts = opts;
      if (copts.bind) {
        return Promise.reject(new Error("bind is not supported"));
      }
      if (this.type === PullConsumerType.Fetch) {
        return Promise.reject(new Error("ordered consumer initialized as fetch"));
      }
      if (this.type === PullConsumerType.Consume) {
        return Promise.reject(new Error("ordered consumer doesn't support concurrent consume"));
      }
      const { callback } = opts;
      if (callback) {
        this.userCallback = callback;
      }
      this.type = PullConsumerType.Consume;
      this.opts = opts;
      await this.reset(opts);
      return this.iter;
    }
    async fetch(opts = {
      max_messages: 100,
      expires: 3e4
    }) {
      const copts = opts;
      if (copts.bind) {
        return Promise.reject(new Error("bind is not supported"));
      }
      if (this.type === PullConsumerType.Consume) {
        return Promise.reject(new Error("ordered consumer already initialized as consume"));
      }
      if (this.iter?.done === false) {
        return Promise.reject(new Error("ordered consumer doesn't support concurrent fetch"));
      }
      const { callback } = opts;
      if (callback) {
        this.userCallback = callback;
      }
      this.type = PullConsumerType.Fetch;
      this.opts = opts;
      await this.reset(opts, {
        fromFetch: true
      });
      return this.iter;
    }
    async next(opts = {
      expires: 3e4
    }) {
      const copts = opts;
      if (copts.bind) {
        return Promise.reject(new Error("bind is not supported"));
      }
      copts.max_messages = 1;
      const d = deferred();
      copts.callback = (m) => {
        this.userCallback = null;
        d.resolve(m);
      };
      const iter = await this.fetch(copts);
      iter.iterClosed.then((err) => {
        if (err) {
          d.reject(err);
        }
        d.resolve(null);
      }).catch((err) => {
        d.reject(err);
      });
      return d;
    }
    delete() {
      if (!this.currentConsumer) {
        return Promise.resolve(false);
      }
      return this.api.delete(this.stream, this.currentConsumer.name).then((tf) => {
        return Promise.resolve(tf);
      }).catch((err) => {
        return Promise.reject(err);
      }).finally(() => {
        this.currentConsumer = null;
      });
    }
    async info(cached) {
      if (this.currentConsumer == null) {
        this.currentConsumer = await this.resetConsumer(this.serial);
        return Promise.resolve(this.currentConsumer);
      }
      if (cached && this.currentConsumer) {
        return Promise.resolve(this.currentConsumer);
      }
      return this.api.info(this.stream, this.currentConsumer.name);
    }
  };
  var ConsumersImpl = class {
    api;
    notified;
    constructor(api) {
      this.api = api;
      this.notified = false;
    }
    checkVersion() {
      const fv = this.api.nc.features.get(Feature.JS_SIMPLIFICATION);
      if (!fv.ok) {
        return Promise.reject(new Error(`consumers framework is only supported on servers ${fv.min} or better`));
      }
      return Promise.resolve();
    }
    async get(stream, name = {}) {
      if (typeof name === "object") {
        return this.ordered(stream, name);
      }
      await this.checkVersion();
      return this.api.info(stream, name).then((ci) => {
        if (ci.config.deliver_subject !== void 0) {
          return Promise.reject(new Error("push consumer not supported"));
        }
        return new PullConsumerImpl(this.api, ci);
      }).catch((err) => {
        return Promise.reject(err);
      });
    }
    async ordered(stream, opts) {
      await this.checkVersion();
      const impl = this.api;
      const sapi = new StreamAPIImpl(impl.nc, impl.opts);
      return sapi.info(stream).then((_si) => {
        return Promise.resolve(new OrderedPullConsumerImpl(this.api, stream, opts));
      }).catch((err) => {
        return Promise.reject(err);
      });
    }
  };
  var StreamImpl = class _StreamImpl {
    api;
    _info;
    constructor(api, info) {
      this.api = api;
      this._info = info;
    }
    get name() {
      return this._info.config.name;
    }
    alternates() {
      return this.info().then((si) => {
        return si.alternates ? si.alternates : [];
      });
    }
    async best() {
      await this.info();
      if (this._info.alternates) {
        const asi = await this.api.info(this._info.alternates[0].name);
        return new _StreamImpl(this.api, asi);
      } else {
        return this;
      }
    }
    info(cached = false, opts) {
      if (cached) {
        return Promise.resolve(this._info);
      }
      return this.api.info(this.name, opts).then((si) => {
        this._info = si;
        return this._info;
      });
    }
    getConsumer(name) {
      return new ConsumersImpl(new ConsumerAPIImpl(this.api.nc, this.api.opts)).get(this.name, name);
    }
    getMessage(query) {
      return this.api.getMessage(this.name, query);
    }
    deleteMessage(seq, erase) {
      return this.api.deleteMessage(this.name, seq, erase);
    }
  };
  var StreamAPIImpl = class extends BaseApiClient {
    constructor(nc, opts) {
      super(nc, opts);
    }
    checkStreamConfigVersions(cfg) {
      const nci = this.nc;
      if (cfg.metadata) {
        const { min, ok } = nci.features.get(Feature.JS_STREAM_CONSUMER_METADATA);
        if (!ok) {
          throw new Error(`stream 'metadata' requires server ${min}`);
        }
      }
      if (cfg.first_seq) {
        const { min, ok } = nci.features.get(Feature.JS_STREAM_FIRST_SEQ);
        if (!ok) {
          throw new Error(`stream 'first_seq' requires server ${min}`);
        }
      }
      if (cfg.subject_transform) {
        const { min, ok } = nci.features.get(Feature.JS_STREAM_SUBJECT_TRANSFORM);
        if (!ok) {
          throw new Error(`stream 'subject_transform' requires server ${min}`);
        }
      }
      if (cfg.compression) {
        const { min, ok } = nci.features.get(Feature.JS_STREAM_COMPRESSION);
        if (!ok) {
          throw new Error(`stream 'compression' requires server ${min}`);
        }
      }
      if (cfg.consumer_limits) {
        const { min, ok } = nci.features.get(Feature.JS_DEFAULT_CONSUMER_LIMITS);
        if (!ok) {
          throw new Error(`stream 'consumer_limits' requires server ${min}`);
        }
      }
      function validateStreamSource(context, src) {
        const count = src?.subject_transforms?.length || 0;
        if (count > 0) {
          const { min, ok } = nci.features.get(Feature.JS_STREAM_SOURCE_SUBJECT_TRANSFORM);
          if (!ok) {
            throw new Error(`${context} 'subject_transforms' requires server ${min}`);
          }
        }
      }
      if (cfg.sources) {
        cfg.sources.forEach((src) => {
          validateStreamSource("stream sources", src);
        });
      }
      if (cfg.mirror) {
        validateStreamSource("stream mirror", cfg.mirror);
      }
    }
    async add(cfg = {}) {
      this.checkStreamConfigVersions(cfg);
      validateStreamName(cfg.name);
      cfg.mirror = convertStreamSourceDomain(cfg.mirror);
      cfg.sources = cfg.sources?.map(convertStreamSourceDomain);
      const r = await this._request(`${this.prefix}.STREAM.CREATE.${cfg.name}`, cfg);
      const si = r;
      this._fixInfo(si);
      return si;
    }
    async delete(stream) {
      validateStreamName(stream);
      const r = await this._request(`${this.prefix}.STREAM.DELETE.${stream}`);
      const cr = r;
      return cr.success;
    }
    async update(name, cfg = {}) {
      if (typeof name === "object") {
        const sc = name;
        name = sc.name;
        cfg = sc;
        console.trace(`\x1B[33m >> streams.update(config: StreamConfig) api changed to streams.update(name: string, config: StreamUpdateConfig) - this shim will be removed - update your code.  \x1B[0m`);
      }
      this.checkStreamConfigVersions(cfg);
      validateStreamName(name);
      const old = await this.info(name);
      const update2 = Object.assign(old.config, cfg);
      update2.mirror = convertStreamSourceDomain(update2.mirror);
      update2.sources = update2.sources?.map(convertStreamSourceDomain);
      const r = await this._request(`${this.prefix}.STREAM.UPDATE.${name}`, update2);
      const si = r;
      this._fixInfo(si);
      return si;
    }
    async info(name, data) {
      validateStreamName(name);
      const subj = `${this.prefix}.STREAM.INFO.${name}`;
      const r = await this._request(subj, data);
      let si = r;
      let { total, limit } = si;
      let have = si.state.subjects ? Object.getOwnPropertyNames(si.state.subjects).length : 1;
      if (total && total > have) {
        const infos = [
          si
        ];
        const paged = data || {};
        let i = 0;
        while (total > have) {
          i++;
          paged.offset = limit * i;
          const r2 = await this._request(subj, paged);
          total = r2.total;
          infos.push(r2);
          const count = Object.getOwnPropertyNames(r2.state.subjects).length;
          have += count;
          if (count < limit) {
            break;
          }
        }
        let subjects = {};
        for (let i2 = 0; i2 < infos.length; i2++) {
          si = infos[i2];
          if (si.state.subjects) {
            subjects = Object.assign(subjects, si.state.subjects);
          }
        }
        si.offset = 0;
        si.total = 0;
        si.limit = 0;
        si.state.subjects = subjects;
      }
      this._fixInfo(si);
      return si;
    }
    list(subject = "") {
      const payload = subject?.length ? {
        subject
      } : {};
      const listerFilter = (v) => {
        const slr = v;
        slr.streams.forEach((si) => {
          this._fixInfo(si);
        });
        return slr.streams;
      };
      const subj = `${this.prefix}.STREAM.LIST`;
      return new ListerImpl(subj, listerFilter, this, payload);
    }
    _fixInfo(si) {
      si.config.sealed = si.config.sealed || false;
      si.config.deny_delete = si.config.deny_delete || false;
      si.config.deny_purge = si.config.deny_purge || false;
      si.config.allow_rollup_hdrs = si.config.allow_rollup_hdrs || false;
    }
    async purge(name, opts) {
      if (opts) {
        const { keep, seq } = opts;
        if (typeof keep === "number" && typeof seq === "number") {
          throw new Error("can specify one of keep or seq");
        }
      }
      validateStreamName(name);
      const v = await this._request(`${this.prefix}.STREAM.PURGE.${name}`, opts);
      return v;
    }
    async deleteMessage(stream, seq, erase = true) {
      validateStreamName(stream);
      const dr = {
        seq
      };
      if (!erase) {
        dr.no_erase = true;
      }
      const r = await this._request(`${this.prefix}.STREAM.MSG.DELETE.${stream}`, dr);
      const cr = r;
      return cr.success;
    }
    async getMessage(stream, query) {
      validateStreamName(stream);
      const r = await this._request(`${this.prefix}.STREAM.MSG.GET.${stream}`, query);
      const sm = r;
      return new StoredMsgImpl(sm);
    }
    find(subject) {
      return this.findStream(subject);
    }
    listKvs() {
      const filter3 = (v) => {
        const slr = v;
        const kvStreams = slr.streams.filter((v2) => {
          return v2.config.name.startsWith(kvPrefix);
        });
        kvStreams.forEach((si) => {
          this._fixInfo(si);
        });
        let cluster = "";
        if (kvStreams.length) {
          cluster = this.nc.info?.cluster ?? "";
        }
        const status = kvStreams.map((si) => {
          return new KvStatusImpl(si, cluster);
        });
        return status;
      };
      const subj = `${this.prefix}.STREAM.LIST`;
      return new ListerImpl(subj, filter3, this);
    }
    listObjectStores() {
      const filter3 = (v) => {
        const slr = v;
        const objStreams = slr.streams.filter((v2) => {
          return v2.config.name.startsWith(osPrefix);
        });
        objStreams.forEach((si) => {
          this._fixInfo(si);
        });
        const status = objStreams.map((si) => {
          return new ObjectStoreStatusImpl(si);
        });
        return status;
      };
      const subj = `${this.prefix}.STREAM.LIST`;
      return new ListerImpl(subj, filter3, this);
    }
    names(subject = "") {
      const payload = subject?.length ? {
        subject
      } : {};
      const listerFilter = (v) => {
        const sr = v;
        return sr.streams;
      };
      const subj = `${this.prefix}.STREAM.NAMES`;
      return new ListerImpl(subj, listerFilter, this, payload);
    }
    async get(name) {
      const si = await this.info(name);
      return Promise.resolve(new StreamImpl(this, si));
    }
  };
  var DirectStreamAPIImpl = class extends BaseApiClient {
    constructor(nc, opts) {
      super(nc, opts);
    }
    async getMessage(stream, query) {
      validateStreamName(stream);
      let qq = query;
      const { last_by_subj } = qq;
      if (last_by_subj) {
        qq = null;
      }
      const payload = qq ? this.jc.encode(qq) : Empty;
      const pre = this.opts.apiPrefix || "$JS.API";
      const subj = last_by_subj ? `${pre}.DIRECT.GET.${stream}.${last_by_subj}` : `${pre}.DIRECT.GET.${stream}`;
      const r = await this.nc.request(subj, payload);
      const err = checkJsError(r);
      if (err) {
        return Promise.reject(err);
      }
      const dm = new DirectMsgImpl(r);
      return Promise.resolve(dm);
    }
    async getBatch(stream, opts) {
      validateStreamName(stream);
      const pre = this.opts.apiPrefix || "$JS.API";
      const subj = `${pre}.DIRECT.GET.${stream}`;
      if (!Array.isArray(opts.multi_last) || opts.multi_last.length === 0) {
        return Promise.reject("multi_last is required");
      }
      const payload = JSON.stringify(opts, (key, value) => {
        if (key === "up_to_time" && value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      const iter = new QueuedIteratorImpl();
      const raw = await this.nc.requestMany(subj, payload, {
        strategy: RequestStrategy.SentinelMsg
      });
      (async () => {
        let gotFirst = false;
        let badServer = false;
        let badRequest;
        for await (const m of raw) {
          if (!gotFirst) {
            gotFirst = true;
            const code2 = m.headers?.code || 0;
            if (code2 !== 0 && code2 < 200 || code2 > 299) {
              badRequest = m.headers?.description.toLowerCase();
              break;
            }
            const v = m.headers?.get("Nats-Num-Pending");
            if (v === "") {
              badServer = true;
              break;
            }
          }
          if (m.data.length === 0) {
            break;
          }
          iter.push(new DirectMsgImpl(m));
        }
        iter.push(() => {
          if (badServer) {
            throw new Error("batch direct get not supported by the server");
          }
          if (badRequest) {
            throw new Error(`bad request: ${badRequest}`);
          }
          iter.stop();
        });
      })();
      return Promise.resolve(iter);
    }
  };
  var DirectMsgImpl = class {
    data;
    header;
    static jc;
    constructor(m) {
      if (!m.headers) {
        throw new Error("headers expected");
      }
      this.data = m.data;
      this.header = m.headers;
    }
    get subject() {
      return this.header.last(DirectMsgHeaders.Subject);
    }
    get seq() {
      const v = this.header.last(DirectMsgHeaders.Sequence);
      return typeof v === "string" ? parseInt(v) : 0;
    }
    get time() {
      return new Date(Date.parse(this.timestamp));
    }
    get timestamp() {
      return this.header.last(DirectMsgHeaders.TimeStamp);
    }
    get stream() {
      return this.header.last(DirectMsgHeaders.Stream);
    }
    json(reviver) {
      return JSONCodec(reviver).decode(this.data);
    }
    string() {
      return TD.decode(this.data);
    }
  };
  var JetStreamManagerImpl = class extends BaseApiClient {
    streams;
    consumers;
    direct;
    constructor(nc, opts) {
      super(nc, opts);
      this.streams = new StreamAPIImpl(nc, opts);
      this.consumers = new ConsumerAPIImpl(nc, opts);
      this.direct = new DirectStreamAPIImpl(nc, opts);
    }
    async getAccountInfo() {
      const r = await this._request(`${this.prefix}.INFO`);
      return r;
    }
    jetstream() {
      return this.nc.jetstream(this.getOptions());
    }
    advisories() {
      const iter = new QueuedIteratorImpl();
      this.nc.subscribe(`$JS.EVENT.ADVISORY.>`, {
        callback: (err, msg) => {
          if (err) {
            throw err;
          }
          try {
            const d = this.parseJsResponse(msg);
            const chunks = d.type.split(".");
            const kind = chunks[chunks.length - 1];
            iter.push({
              kind,
              data: d
            });
          } catch (err2) {
            iter.stop(err2);
          }
        }
      });
      return iter;
    }
  };
  var StoredMsgImpl = class {
    _header;
    smr;
    static jc;
    constructor(smr) {
      this.smr = smr;
    }
    get subject() {
      return this.smr.message.subject;
    }
    get seq() {
      return this.smr.message.seq;
    }
    get timestamp() {
      return this.smr.message.time;
    }
    get time() {
      return new Date(Date.parse(this.timestamp));
    }
    get data() {
      return this.smr.message.data ? this._parse(this.smr.message.data) : Empty;
    }
    get header() {
      if (!this._header) {
        if (this.smr.message.hdrs) {
          const hd = this._parse(this.smr.message.hdrs);
          this._header = MsgHdrsImpl.decode(hd);
        } else {
          this._header = headers();
        }
      }
      return this._header;
    }
    _parse(s) {
      const bs = atob(s);
      const len = bs.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = bs.charCodeAt(i);
      }
      return bytes;
    }
    json(reviver) {
      return JSONCodec(reviver).decode(this.data);
    }
    string() {
      return TD.decode(this.data);
    }
  };
  var StreamsImpl = class {
    api;
    constructor(api) {
      this.api = api;
    }
    get(stream) {
      return this.api.info(stream).then((si) => {
        return new StreamImpl(this.api, si);
      });
    }
  };
  var ObjectInfoImpl = class {
    info;
    hdrs;
    constructor(oi) {
      this.info = oi;
    }
    get name() {
      return this.info.name;
    }
    get description() {
      return this.info.description ?? "";
    }
    get headers() {
      if (!this.hdrs) {
        this.hdrs = MsgHdrsImpl.fromRecord(this.info.headers || {});
      }
      return this.hdrs;
    }
    get options() {
      return this.info.options;
    }
    get bucket() {
      return this.info.bucket;
    }
    get chunks() {
      return this.info.chunks;
    }
    get deleted() {
      return this.info.deleted ?? false;
    }
    get digest() {
      return this.info.digest;
    }
    get mtime() {
      return this.info.mtime;
    }
    get nuid() {
      return this.info.nuid;
    }
    get size() {
      return this.info.size;
    }
    get revision() {
      return this.info.revision;
    }
    get metadata() {
      return this.info.metadata || {};
    }
    isLink() {
      return this.info.options?.link !== void 0 && this.info.options?.link !== null;
    }
  };
  function toServerObjectStoreMeta(meta) {
    const v = {
      name: meta.name,
      description: meta.description ?? "",
      options: meta.options,
      metadata: meta.metadata
    };
    if (meta.headers) {
      const mhi = meta.headers;
      v.headers = mhi.toRecord();
    }
    return v;
  }
  function emptyReadableStream() {
    return new ReadableStream({
      pull(c) {
        c.enqueue(new Uint8Array(0));
        c.close();
      }
    });
  }
  var ObjectStoreImpl = class _ObjectStoreImpl {
    jsm;
    js;
    stream;
    name;
    constructor(name, jsm, js) {
      this.name = name;
      this.jsm = jsm;
      this.js = js;
    }
    _checkNotEmpty(name) {
      if (!name || name.length === 0) {
        return {
          name,
          error: new Error("name cannot be empty")
        };
      }
      return {
        name
      };
    }
    async info(name) {
      const info = await this.rawInfo(name);
      return info ? new ObjectInfoImpl(info) : null;
    }
    async list() {
      const buf = [];
      const iter = await this.watch({
        ignoreDeletes: true,
        includeHistory: true
      });
      for await (const info of iter) {
        if (info === null) {
          break;
        }
        buf.push(info);
      }
      return Promise.resolve(buf);
    }
    async rawInfo(name) {
      const { name: obj, error } = this._checkNotEmpty(name);
      if (error) {
        return Promise.reject(error);
      }
      const meta = this._metaSubject(obj);
      try {
        const m = await this.jsm.streams.getMessage(this.stream, {
          last_by_subj: meta
        });
        const jc = JSONCodec();
        const soi = jc.decode(m.data);
        soi.revision = m.seq;
        return soi;
      } catch (err) {
        if (err.code === "404") {
          return null;
        }
        return Promise.reject(err);
      }
    }
    async _si(opts) {
      try {
        return await this.jsm.streams.info(this.stream, opts);
      } catch (err) {
        const nerr = err;
        if (nerr.code === "404") {
          return null;
        }
        return Promise.reject(err);
      }
    }
    async seal() {
      let info = await this._si();
      if (info === null) {
        return Promise.reject(new Error("object store not found"));
      }
      info.config.sealed = true;
      info = await this.jsm.streams.update(this.stream, info.config);
      return Promise.resolve(new ObjectStoreStatusImpl(info));
    }
    async status(opts) {
      const info = await this._si(opts);
      if (info === null) {
        return Promise.reject(new Error("object store not found"));
      }
      return Promise.resolve(new ObjectStoreStatusImpl(info));
    }
    destroy() {
      return this.jsm.streams.delete(this.stream);
    }
    async _put(meta, rs, opts) {
      const jsopts = this.js.getOptions();
      opts = opts || {
        timeout: jsopts.timeout
      };
      opts.timeout = opts.timeout || jsopts.timeout;
      opts.previousRevision = opts.previousRevision ?? void 0;
      const { timeout: timeout2, previousRevision } = opts;
      const si = this.js.nc.info;
      const maxPayload = si?.max_payload || 1024;
      meta = meta || {};
      meta.options = meta.options || {};
      let maxChunk = meta.options?.max_chunk_size || 128 * 1024;
      maxChunk = maxChunk > maxPayload ? maxPayload : maxChunk;
      meta.options.max_chunk_size = maxChunk;
      const old = await this.info(meta.name);
      const { name: n, error } = this._checkNotEmpty(meta.name);
      if (error) {
        return Promise.reject(error);
      }
      const id = nuid.next();
      const chunkSubj = this._chunkSubject(id);
      const metaSubj = this._metaSubject(n);
      const info = Object.assign({
        bucket: this.name,
        nuid: id,
        size: 0,
        chunks: 0
      }, toServerObjectStoreMeta(meta));
      const d = deferred();
      const proms = [];
      const db = new DataBuffer();
      try {
        const reader = rs ? rs.getReader() : null;
        const sha = new SHA256();
        while (true) {
          const { done, value } = reader ? await reader.read() : {
            done: true,
            value: void 0
          };
          if (done) {
            if (db.size() > 0) {
              const payload = db.drain();
              sha.update(payload);
              info.chunks++;
              info.size += payload.length;
              proms.push(this.js.publish(chunkSubj, payload, {
                timeout: timeout2
              }));
            }
            await Promise.all(proms);
            proms.length = 0;
            info.mtime = (/* @__PURE__ */ new Date()).toISOString();
            const digest = sha.digest("base64");
            const pad = digest.length % 3;
            const padding = pad > 0 ? "=".repeat(pad) : "";
            info.digest = `${digestType}${digest}${padding}`;
            info.deleted = false;
            const h = headers();
            if (typeof previousRevision === "number") {
              h.set(PubHeaders.ExpectedLastSubjectSequenceHdr, `${previousRevision}`);
            }
            h.set(JsHeaders.RollupHdr, JsHeaders.RollupValueSubject);
            const pa = await this.js.publish(metaSubj, JSONCodec().encode(info), {
              headers: h,
              timeout: timeout2
            });
            info.revision = pa.seq;
            if (old) {
              try {
                await this.jsm.streams.purge(this.stream, {
                  filter: `$O.${this.name}.C.${old.nuid}`
                });
              } catch (_err) {
              }
            }
            d.resolve(new ObjectInfoImpl(info));
            break;
          }
          if (value) {
            db.fill(value);
            while (db.size() > maxChunk) {
              info.chunks++;
              info.size += maxChunk;
              const payload = db.drain(meta.options.max_chunk_size);
              sha.update(payload);
              proms.push(this.js.publish(chunkSubj, payload, {
                timeout: timeout2
              }));
            }
          }
        }
      } catch (err) {
        await this.jsm.streams.purge(this.stream, {
          filter: chunkSubj
        });
        d.reject(err);
      }
      return d;
    }
    putBlob(meta, data, opts) {
      function readableStreamFrom(data2) {
        return new ReadableStream({
          pull(controller) {
            controller.enqueue(data2);
            controller.close();
          }
        });
      }
      if (data === null) {
        data = new Uint8Array(0);
      }
      return this.put(meta, readableStreamFrom(data), opts);
    }
    put(meta, rs, opts) {
      if (meta?.options?.link) {
        return Promise.reject(new Error("link cannot be set when putting the object in bucket"));
      }
      return this._put(meta, rs, opts);
    }
    async getBlob(name) {
      async function fromReadableStream(rs) {
        const buf = new DataBuffer();
        const reader = rs.getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            return buf.drain();
          }
          if (value && value.length) {
            buf.fill(value);
          }
        }
      }
      const r = await this.get(name);
      if (r === null) {
        return Promise.resolve(null);
      }
      const vs = await Promise.all([
        r.error,
        fromReadableStream(r.data)
      ]);
      if (vs[0]) {
        return Promise.reject(vs[0]);
      } else {
        return Promise.resolve(vs[1]);
      }
    }
    async get(name) {
      const info = await this.rawInfo(name);
      if (info === null) {
        return Promise.resolve(null);
      }
      if (info.deleted) {
        return Promise.resolve(null);
      }
      if (info.options && info.options.link) {
        const ln = info.options.link.name || "";
        if (ln === "") {
          throw new Error("link is a bucket");
        }
        const os = info.options.link.bucket !== this.name ? await _ObjectStoreImpl.create(this.js, info.options.link.bucket) : this;
        return os.get(ln);
      }
      const d = deferred();
      const r = {
        info: new ObjectInfoImpl(info),
        error: d
      };
      if (info.size === 0) {
        r.data = emptyReadableStream();
        d.resolve(null);
        return Promise.resolve(r);
      }
      let controller;
      const oc = consumerOpts();
      oc.orderedConsumer();
      const sha = new SHA256();
      const subj = `$O.${this.name}.C.${info.nuid}`;
      const sub = await this.js.subscribe(subj, oc);
      (async () => {
        for await (const jm of sub) {
          if (jm.data.length > 0) {
            sha.update(jm.data);
            controller.enqueue(jm.data);
          }
          if (jm.info.pending === 0) {
            const hash = sha.digest("base64");
            const pad = hash.length % 3;
            const padding = pad > 0 ? "=".repeat(pad) : "";
            const digest = `${digestType}${hash}${padding}`;
            if (digest !== info.digest) {
              controller.error(new Error(`received a corrupt object, digests do not match received: ${info.digest} calculated ${digest}`));
            } else {
              controller.close();
            }
            sub.unsubscribe();
          }
        }
      })().then(() => {
        d.resolve();
      }).catch((err) => {
        controller.error(err);
        d.reject(err);
      });
      r.data = new ReadableStream({
        start(c) {
          controller = c;
        },
        cancel() {
          sub.unsubscribe();
        }
      });
      return r;
    }
    linkStore(name, bucket) {
      if (!(bucket instanceof _ObjectStoreImpl)) {
        return Promise.reject("bucket required");
      }
      const osi = bucket;
      const { name: n, error } = this._checkNotEmpty(name);
      if (error) {
        return Promise.reject(error);
      }
      const meta = {
        name: n,
        options: {
          link: {
            bucket: osi.name
          }
        }
      };
      return this._put(meta, null);
    }
    async link(name, info) {
      const { name: n, error } = this._checkNotEmpty(name);
      if (error) {
        return Promise.reject(error);
      }
      if (info.deleted) {
        return Promise.reject(new Error("src object is deleted"));
      }
      if (info.isLink()) {
        return Promise.reject(new Error("src object is a link"));
      }
      const dest = await this.rawInfo(name);
      if (dest !== null && !dest.deleted) {
        return Promise.reject(new Error("an object already exists with that name"));
      }
      const link = {
        bucket: info.bucket,
        name: info.name
      };
      const mm = {
        name: n,
        bucket: info.bucket,
        options: {
          link
        }
      };
      await this.js.publish(this._metaSubject(name), JSON.stringify(mm));
      const i = await this.info(name);
      return Promise.resolve(i);
    }
    async delete(name) {
      const info = await this.rawInfo(name);
      if (info === null) {
        return Promise.resolve({
          purged: 0,
          success: false
        });
      }
      info.deleted = true;
      info.size = 0;
      info.chunks = 0;
      info.digest = "";
      const jc = JSONCodec();
      const h = headers();
      h.set(JsHeaders.RollupHdr, JsHeaders.RollupValueSubject);
      await this.js.publish(this._metaSubject(info.name), jc.encode(info), {
        headers: h
      });
      return this.jsm.streams.purge(this.stream, {
        filter: this._chunkSubject(info.nuid)
      });
    }
    async update(name, meta = {}) {
      const info = await this.rawInfo(name);
      if (info === null) {
        return Promise.reject(new Error("object not found"));
      }
      if (info.deleted) {
        return Promise.reject(new Error("cannot update meta for a deleted object"));
      }
      meta.name = meta.name ?? info.name;
      const { name: n, error } = this._checkNotEmpty(meta.name);
      if (error) {
        return Promise.reject(error);
      }
      if (name !== meta.name) {
        const i = await this.info(meta.name);
        if (i && !i.deleted) {
          return Promise.reject(new Error("an object already exists with that name"));
        }
      }
      meta.name = n;
      const ii = Object.assign({}, info, toServerObjectStoreMeta(meta));
      const ack = await this.js.publish(this._metaSubject(ii.name), JSON.stringify(ii));
      if (name !== meta.name) {
        await this.jsm.streams.purge(this.stream, {
          filter: this._metaSubject(name)
        });
      }
      return Promise.resolve(ack);
    }
    async watch(opts = {}) {
      opts.includeHistory = opts.includeHistory ?? false;
      opts.ignoreDeletes = opts.ignoreDeletes ?? false;
      let initialized = false;
      const qi = new QueuedIteratorImpl();
      const subj = this._metaSubjectAll();
      try {
        await this.jsm.streams.getMessage(this.stream, {
          last_by_subj: subj
        });
      } catch (err) {
        if (err.code === "404") {
          qi.push(null);
          initialized = true;
        } else {
          qi.stop(err);
        }
      }
      const jc = JSONCodec();
      const copts = consumerOpts();
      copts.orderedConsumer();
      if (opts.includeHistory) {
        copts.deliverLastPerSubject();
      } else {
        initialized = true;
        copts.deliverNew();
      }
      copts.callback((err, jm) => {
        if (err) {
          qi.stop(err);
          return;
        }
        if (jm !== null) {
          const oi = jc.decode(jm.data);
          if (oi.deleted && opts.ignoreDeletes === true) {
          } else {
            qi.push(oi);
          }
          if (jm.info?.pending === 0 && !initialized) {
            initialized = true;
            qi.push(null);
          }
        }
      });
      const sub = await this.js.subscribe(subj, copts);
      qi._data = sub;
      qi.iterClosed.then(() => {
        sub.unsubscribe();
      });
      sub.closed.then(() => {
        qi.stop();
      }).catch((err) => {
        qi.stop(err);
      });
      return qi;
    }
    _chunkSubject(id) {
      return `$O.${this.name}.C.${id}`;
    }
    _metaSubject(n) {
      return `$O.${this.name}.M.${Base64UrlPaddedCodec.encode(n)}`;
    }
    _metaSubjectAll() {
      return `$O.${this.name}.M.>`;
    }
    async init(opts = {}) {
      try {
        this.stream = objectStoreStreamName(this.name);
      } catch (err) {
        return Promise.reject(err);
      }
      const max_age = opts?.ttl || 0;
      delete opts.ttl;
      const sc = Object.assign({
        max_age
      }, opts);
      sc.name = this.stream;
      sc.num_replicas = opts.replicas ?? 1;
      sc.allow_direct = true;
      sc.allow_rollup_hdrs = true;
      sc.discard = DiscardPolicy.New;
      sc.subjects = [
        `$O.${this.name}.C.>`,
        `$O.${this.name}.M.>`
      ];
      if (opts.placement) {
        sc.placement = opts.placement;
      }
      if (opts.metadata) {
        sc.metadata = opts.metadata;
      }
      if (typeof opts.compression === "boolean") {
        sc.compression = opts.compression ? StoreCompression.S2 : StoreCompression.None;
      }
      try {
        await this.jsm.streams.info(sc.name);
      } catch (err) {
        if (err.message === "stream not found") {
          await this.jsm.streams.add(sc);
        }
      }
    }
    static async create(js, name, opts = {}) {
      const jsm = await js.jetstreamManager();
      const os = new _ObjectStoreImpl(name, jsm, js);
      await os.init(opts);
      return Promise.resolve(os);
    }
  };
  var ViewsImpl = class {
    js;
    constructor(js) {
      this.js = js;
    }
    kv(name, opts = {}) {
      const jsi = this.js;
      const { ok, min } = jsi.nc.features.get(Feature.JS_KV);
      if (!ok) {
        return Promise.reject(new Error(`kv is only supported on servers ${min} or better`));
      }
      if (opts.bindOnly) {
        return Bucket.bind(this.js, name, opts);
      }
      return Bucket.create(this.js, name, opts);
    }
    os(name, opts = {}) {
      if (typeof crypto?.subtle?.digest !== "function") {
        return Promise.reject(new Error("objectstore: unable to calculate hashes - crypto.subtle.digest with sha256 support is required"));
      }
      const jsi = this.js;
      const { ok, min } = jsi.nc.features.get(Feature.JS_OBJECTSTORE);
      if (!ok) {
        return Promise.reject(new Error(`objectstore is only supported on servers ${min} or better`));
      }
      return ObjectStoreImpl.create(this.js, name, opts);
    }
  };
  var JetStreamClientImpl = class _JetStreamClientImpl extends BaseApiClient {
    consumers;
    streams;
    consumerAPI;
    streamAPI;
    constructor(nc, opts) {
      super(nc, opts);
      this.consumerAPI = new ConsumerAPIImpl(nc, opts);
      this.streamAPI = new StreamAPIImpl(nc, opts);
      this.consumers = new ConsumersImpl(this.consumerAPI);
      this.streams = new StreamsImpl(this.streamAPI);
    }
    jetstreamManager(checkAPI) {
      if (checkAPI === void 0) {
        checkAPI = this.opts.checkAPI;
      }
      const opts = Object.assign({}, this.opts, {
        checkAPI
      });
      return this.nc.jetstreamManager(opts);
    }
    get apiPrefix() {
      return this.prefix;
    }
    get views() {
      return new ViewsImpl(this);
    }
    async publish(subj, data = Empty, opts) {
      opts = opts || {};
      opts.expect = opts.expect || {};
      const mh = opts?.headers || headers();
      if (opts) {
        if (opts.msgID) {
          mh.set(PubHeaders.MsgIdHdr, opts.msgID);
        }
        if (opts.expect.lastMsgID) {
          mh.set(PubHeaders.ExpectedLastMsgIdHdr, opts.expect.lastMsgID);
        }
        if (opts.expect.streamName) {
          mh.set(PubHeaders.ExpectedStreamHdr, opts.expect.streamName);
        }
        if (typeof opts.expect.lastSequence === "number") {
          mh.set(PubHeaders.ExpectedLastSeqHdr, `${opts.expect.lastSequence}`);
        }
        if (typeof opts.expect.lastSubjectSequence === "number") {
          mh.set(PubHeaders.ExpectedLastSubjectSequenceHdr, `${opts.expect.lastSubjectSequence}`);
        }
      }
      const to = opts.timeout || this.timeout;
      const ro = {};
      if (to) {
        ro.timeout = to;
      }
      if (opts) {
        ro.headers = mh;
      }
      let { retries, retry_delay } = opts;
      retries = retries || 1;
      retry_delay = retry_delay || 250;
      let r;
      for (let i = 0; i < retries; i++) {
        try {
          r = await this.nc.request(subj, data, ro);
          break;
        } catch (err) {
          const ne = err;
          if (ne.code === "503" && i + 1 < retries) {
            await delay(retry_delay);
          } else {
            throw err;
          }
        }
      }
      const pa = this.parseJsResponse(r);
      if (pa.stream === "") {
        throw NatsError.errorForCode(ErrorCode.JetStreamInvalidAck);
      }
      pa.duplicate = pa.duplicate ? pa.duplicate : false;
      return pa;
    }
    async pull(stream, durable, expires = 0) {
      validateStreamName(stream);
      validateDurableName(durable);
      let timeout2 = this.timeout;
      if (expires > timeout2) {
        timeout2 = expires;
      }
      expires = expires < 0 ? 0 : nanos(expires);
      const pullOpts = {
        batch: 1,
        no_wait: expires === 0,
        expires
      };
      const msg = await this.nc.request(`${this.prefix}.CONSUMER.MSG.NEXT.${stream}.${durable}`, this.jc.encode(pullOpts), {
        noMux: true,
        timeout: timeout2
      });
      const err = checkJsError(msg);
      if (err) {
        throw err;
      }
      return toJsMsg(msg, this.timeout);
    }
    fetch(stream, durable, opts = {}) {
      validateStreamName(stream);
      validateDurableName(durable);
      let timer = null;
      const trackBytes = (opts.max_bytes ?? 0) > 0;
      let receivedBytes = 0;
      const max_bytes = trackBytes ? opts.max_bytes : 0;
      let monitor = null;
      const args = {};
      args.batch = opts.batch || 1;
      if (max_bytes) {
        const fv = this.nc.features.get(Feature.JS_PULL_MAX_BYTES);
        if (!fv.ok) {
          throw new Error(`max_bytes is only supported on servers ${fv.min} or better`);
        }
        args.max_bytes = max_bytes;
      }
      args.no_wait = opts.no_wait || false;
      if (args.no_wait && args.expires) {
        args.expires = 0;
      }
      const expires = opts.expires || 0;
      if (expires) {
        args.expires = nanos(expires);
      }
      if (expires === 0 && args.no_wait === false) {
        throw new Error("expires or no_wait is required");
      }
      const hb = opts.idle_heartbeat || 0;
      if (hb) {
        args.idle_heartbeat = nanos(hb);
        if (opts.delay_heartbeat === true) {
          args.idle_heartbeat = nanos(hb * 4);
        }
      }
      const qi = new QueuedIteratorImpl();
      const wants = args.batch;
      let received = 0;
      qi.protocolFilterFn = (jm, _ingest = false) => {
        const jsmi = jm;
        if (isHeartbeatMsg(jsmi.msg)) {
          monitor?.work();
          return false;
        }
        return true;
      };
      qi.dispatchedFn = (m) => {
        if (m) {
          if (trackBytes) {
            receivedBytes += m.data.length;
          }
          received++;
          if (timer && m.info.pending === 0) {
            return;
          }
          if (qi.getPending() === 1 && m.info.pending === 0 || wants === received || max_bytes > 0 && receivedBytes >= max_bytes) {
            qi.stop();
          }
        }
      };
      const inbox = createInbox(this.nc.options.inboxPrefix);
      const sub = this.nc.subscribe(inbox, {
        max: opts.batch,
        callback: (err, msg) => {
          if (err === null) {
            err = checkJsError(msg);
          }
          if (err !== null) {
            if (timer) {
              timer.cancel();
              timer = null;
            }
            if (isNatsError(err)) {
              qi.stop(hideNonTerminalJsErrors(err) === null ? void 0 : err);
            } else {
              qi.stop(err);
            }
          } else {
            monitor?.work();
            qi.received++;
            qi.push(toJsMsg(msg, this.timeout));
          }
        }
      });
      if (expires) {
        timer = timeout(expires);
        timer.catch(() => {
          if (!sub.isClosed()) {
            sub.drain().catch(() => {
            });
            timer = null;
          }
          if (monitor) {
            monitor.cancel();
          }
        });
      }
      (async () => {
        try {
          if (hb) {
            monitor = new IdleHeartbeatMonitor(hb, (v) => {
              qi.push(() => {
                qi.err = new NatsError(`${Js409Errors.IdleHeartbeatMissed}: ${v}`, ErrorCode.JetStreamIdleHeartBeat);
              });
              return true;
            });
          }
        } catch (_err) {
        }
        await sub.closed;
        if (timer !== null) {
          timer.cancel();
          timer = null;
        }
        if (monitor) {
          monitor.cancel();
        }
        qi.stop();
      })().catch();
      this.nc.publish(`${this.prefix}.CONSUMER.MSG.NEXT.${stream}.${durable}`, this.jc.encode(args), {
        reply: inbox
      });
      return qi;
    }
    async pullSubscribe(subject, opts = consumerOpts()) {
      const cso = await this._processOptions(subject, opts);
      if (cso.ordered) {
        throw new Error("pull subscribers cannot be be ordered");
      }
      if (cso.config.deliver_subject) {
        throw new Error("consumer info specifies deliver_subject - pull consumers cannot have deliver_subject set");
      }
      const ackPolicy = cso.config.ack_policy;
      if (ackPolicy === AckPolicy.None || ackPolicy === AckPolicy.All) {
        throw new Error("ack policy for pull consumers must be explicit");
      }
      const so = this._buildTypedSubscriptionOpts(cso);
      const sub = new JetStreamPullSubscriptionImpl(this, cso.deliver, so);
      sub.info = cso;
      try {
        await this._maybeCreateConsumer(cso);
      } catch (err) {
        sub.unsubscribe();
        throw err;
      }
      return sub;
    }
    async subscribe(subject, opts = consumerOpts()) {
      const cso = await this._processOptions(subject, opts);
      if (!cso.isBind && !cso.config.deliver_subject) {
        throw new Error("push consumer requires deliver_subject");
      }
      const so = this._buildTypedSubscriptionOpts(cso);
      const sub = new JetStreamSubscriptionImpl(this, cso.deliver, so);
      sub.info = cso;
      try {
        await this._maybeCreateConsumer(cso);
      } catch (err) {
        sub.unsubscribe();
        throw err;
      }
      sub._maybeSetupHbMonitoring();
      return sub;
    }
    async _processOptions(subject, opts = consumerOpts()) {
      const jsi = isConsumerOptsBuilder(opts) ? opts.getOpts() : opts;
      jsi.isBind = isConsumerOptsBuilder(opts) ? opts.isBind : false;
      jsi.flow_control = {
        heartbeat_count: 0,
        fc_count: 0,
        consumer_restarts: 0
      };
      if (jsi.ordered) {
        jsi.ordered_consumer_sequence = {
          stream_seq: 0,
          delivery_seq: 0
        };
        if (jsi.config.ack_policy !== AckPolicy.NotSet && jsi.config.ack_policy !== AckPolicy.None) {
          throw new NatsError("ordered consumer: ack_policy can only be set to 'none'", ErrorCode.ApiError);
        }
        if (jsi.config.durable_name && jsi.config.durable_name.length > 0) {
          throw new NatsError("ordered consumer: durable_name cannot be set", ErrorCode.ApiError);
        }
        if (jsi.config.deliver_subject && jsi.config.deliver_subject.length > 0) {
          throw new NatsError("ordered consumer: deliver_subject cannot be set", ErrorCode.ApiError);
        }
        if (jsi.config.max_deliver !== void 0 && jsi.config.max_deliver > 1) {
          throw new NatsError("ordered consumer: max_deliver cannot be set", ErrorCode.ApiError);
        }
        if (jsi.config.deliver_group && jsi.config.deliver_group.length > 0) {
          throw new NatsError("ordered consumer: deliver_group cannot be set", ErrorCode.ApiError);
        }
        jsi.config.deliver_subject = createInbox(this.nc.options.inboxPrefix);
        jsi.config.ack_policy = AckPolicy.None;
        jsi.config.max_deliver = 1;
        jsi.config.flow_control = true;
        jsi.config.idle_heartbeat = jsi.config.idle_heartbeat || nanos(5e3);
        jsi.config.ack_wait = nanos(22 * 60 * 60 * 1e3);
        jsi.config.mem_storage = true;
        jsi.config.num_replicas = 1;
      }
      if (jsi.config.ack_policy === AckPolicy.NotSet) {
        jsi.config.ack_policy = AckPolicy.All;
      }
      jsi.api = this;
      jsi.config = jsi.config || {};
      jsi.stream = jsi.stream ? jsi.stream : await this.findStream(subject);
      jsi.attached = false;
      if (jsi.config.durable_name) {
        try {
          const info = await this.consumerAPI.info(jsi.stream, jsi.config.durable_name);
          if (info) {
            if (info.config.filter_subject && info.config.filter_subject !== subject) {
              throw new Error("subject does not match consumer");
            }
            const qn = jsi.config.deliver_group ?? "";
            if (qn === "" && info.push_bound === true) {
              throw new Error(`duplicate subscription`);
            }
            const rqn = info.config.deliver_group ?? "";
            if (qn !== rqn) {
              if (rqn === "") {
                throw new Error(`durable requires no queue group`);
              } else {
                throw new Error(`durable requires queue group '${rqn}'`);
              }
            }
            jsi.last = info;
            jsi.config = info.config;
            jsi.attached = true;
            if (!jsi.config.durable_name) {
              jsi.name = info.name;
            }
          }
        } catch (err) {
          if (err.code !== "404") {
            throw err;
          }
        }
      }
      if (!jsi.attached && jsi.config.filter_subject === void 0 && jsi.config.filter_subjects === void 0) {
        jsi.config.filter_subject = subject;
      }
      jsi.deliver = jsi.config.deliver_subject || createInbox(this.nc.options.inboxPrefix);
      return jsi;
    }
    _buildTypedSubscriptionOpts(jsi) {
      const so = {};
      so.adapter = msgAdapter(jsi.callbackFn === void 0, this.timeout);
      so.ingestionFilterFn = _JetStreamClientImpl.ingestionFn(jsi.ordered);
      so.protocolFilterFn = (jm, ingest = false) => {
        const jsmi = jm;
        if (isFlowControlMsg(jsmi.msg)) {
          if (!ingest) {
            jsmi.msg.respond();
          }
          return false;
        }
        return true;
      };
      if (!jsi.mack && jsi.config.ack_policy !== AckPolicy.None) {
        so.dispatchedFn = autoAckJsMsg;
      }
      if (jsi.callbackFn) {
        so.callback = jsi.callbackFn;
      }
      so.max = jsi.max || 0;
      so.queue = jsi.queue;
      return so;
    }
    async _maybeCreateConsumer(jsi) {
      if (jsi.attached) {
        return;
      }
      if (jsi.isBind) {
        throw new Error(`unable to bind - durable consumer ${jsi.config.durable_name} doesn't exist in ${jsi.stream}`);
      }
      jsi.config = Object.assign({
        deliver_policy: DeliverPolicy.All,
        ack_policy: AckPolicy.Explicit,
        ack_wait: nanos(30 * 1e3),
        replay_policy: ReplayPolicy.Instant
      }, jsi.config);
      const ci = await this.consumerAPI.add(jsi.stream, jsi.config);
      if (Array.isArray(jsi.config.filter_subjects && !Array.isArray(ci.config.filter_subjects))) {
        throw new Error(`jetstream server doesn't support consumers with multiple filter subjects`);
      }
      jsi.name = ci.name;
      jsi.config = ci.config;
      jsi.last = ci;
    }
    static ingestionFn(ordered) {
      return (jm, ctx) => {
        const jsub = ctx;
        if (!jm) return {
          ingest: false,
          protocol: false
        };
        const jmi = jm;
        if (!checkJsError(jmi.msg)) {
          jsub.monitor?.work();
        }
        if (isHeartbeatMsg(jmi.msg)) {
          const ingest2 = ordered ? jsub._checkHbOrderConsumer(jmi.msg) : true;
          if (!ordered) {
            jsub.info.flow_control.heartbeat_count++;
          }
          return {
            ingest: ingest2,
            protocol: true
          };
        } else if (isFlowControlMsg(jmi.msg)) {
          jsub.info.flow_control.fc_count++;
          return {
            ingest: true,
            protocol: true
          };
        }
        const ingest = ordered ? jsub._checkOrderedConsumer(jm) : true;
        return {
          ingest,
          protocol: false
        };
      };
    }
  };
  var NatsConnectionImpl = class _NatsConnectionImpl {
    options;
    protocol;
    draining;
    listeners;
    _services;
    constructor(opts) {
      this.draining = false;
      this.options = parseOptions(opts);
      this.listeners = [];
    }
    static connect(opts = {}) {
      return new Promise((resolve, reject) => {
        const nc = new _NatsConnectionImpl(opts);
        ProtocolHandler.connect(nc.options, nc).then((ph) => {
          nc.protocol = ph;
          (async function() {
            for await (const s of ph.status()) {
              nc.listeners.forEach((l) => {
                l.push(s);
              });
            }
          })();
          resolve(nc);
        }).catch((err) => {
          reject(err);
        });
      });
    }
    closed() {
      return this.protocol.closed;
    }
    async close() {
      await this.protocol.close();
    }
    _check(subject, sub, pub) {
      if (this.isClosed()) {
        throw NatsError.errorForCode(ErrorCode.ConnectionClosed);
      }
      if (sub && this.isDraining()) {
        throw NatsError.errorForCode(ErrorCode.ConnectionDraining);
      }
      if (pub && this.protocol.noMorePublishing) {
        throw NatsError.errorForCode(ErrorCode.ConnectionDraining);
      }
      subject = subject || "";
      if (subject.length === 0) {
        throw NatsError.errorForCode(ErrorCode.BadSubject);
      }
    }
    publish(subject, data, options) {
      this._check(subject, false, true);
      this.protocol.publish(subject, data, options);
    }
    publishMessage(msg) {
      return this.publish(msg.subject, msg.data, {
        reply: msg.reply,
        headers: msg.headers
      });
    }
    respondMessage(msg) {
      if (msg.reply) {
        this.publish(msg.reply, msg.data, {
          reply: msg.reply,
          headers: msg.headers
        });
        return true;
      }
      return false;
    }
    subscribe(subject, opts = {}) {
      this._check(subject, true, false);
      const sub = new SubscriptionImpl(this.protocol, subject, opts);
      this.protocol.subscribe(sub);
      return sub;
    }
    _resub(s, subject, max) {
      this._check(subject, true, false);
      const si = s;
      si.max = max;
      if (max) {
        si.max = max + si.received;
      }
      this.protocol.resub(si, subject);
    }
    requestMany(subject, data = Empty, opts = {
      maxWait: 1e3,
      maxMessages: -1
    }) {
      const asyncTraces = !(this.protocol.options.noAsyncTraces || false);
      try {
        this._check(subject, true, true);
      } catch (err) {
        return Promise.reject(err);
      }
      opts.strategy = opts.strategy || RequestStrategy.Timer;
      opts.maxWait = opts.maxWait || 1e3;
      if (opts.maxWait < 1) {
        return Promise.reject(new NatsError("timeout", ErrorCode.InvalidOption));
      }
      const qi = new QueuedIteratorImpl();
      function stop(err) {
        qi.push(() => {
          qi.stop(err);
        });
      }
      function callback(err, msg) {
        if (err || msg === null) {
          stop(err === null ? void 0 : err);
        } else {
          qi.push(msg);
        }
      }
      if (opts.noMux) {
        const stack = asyncTraces ? new Error().stack : null;
        let max = typeof opts.maxMessages === "number" && opts.maxMessages > 0 ? opts.maxMessages : -1;
        const sub = this.subscribe(createInbox(this.options.inboxPrefix), {
          callback: (err, msg) => {
            if (msg?.data?.length === 0 && msg?.headers?.status === ErrorCode.NoResponders) {
              err = NatsError.errorForCode(ErrorCode.NoResponders);
            }
            if (err) {
              if (stack) {
                err.stack += `

${stack}`;
              }
              cancel(err);
              return;
            }
            callback(null, msg);
            if (opts.strategy === RequestStrategy.Count) {
              max--;
              if (max === 0) {
                cancel();
              }
            }
            if (opts.strategy === RequestStrategy.JitterTimer) {
              clearTimers();
              timer = setTimeout(() => {
                cancel();
              }, 300);
            }
            if (opts.strategy === RequestStrategy.SentinelMsg) {
              if (msg && msg.data.length === 0) {
                cancel();
              }
            }
          }
        });
        sub.requestSubject = subject;
        sub.closed.then(() => {
          stop();
        }).catch((err) => {
          qi.stop(err);
        });
        const cancel = (err) => {
          if (err) {
            qi.push(() => {
              throw err;
            });
          }
          clearTimers();
          sub.drain().then(() => {
            stop();
          }).catch((_err) => {
            stop();
          });
        };
        qi.iterClosed.then(() => {
          clearTimers();
          sub?.unsubscribe();
        }).catch((_err) => {
          clearTimers();
          sub?.unsubscribe();
        });
        try {
          this.publish(subject, data, {
            reply: sub.getSubject()
          });
        } catch (err) {
          cancel(err);
        }
        let timer = setTimeout(() => {
          cancel();
        }, opts.maxWait);
        const clearTimers = () => {
          if (timer) {
            clearTimeout(timer);
          }
        };
      } else {
        const rmo = opts;
        rmo.callback = callback;
        qi.iterClosed.then(() => {
          r.cancel();
        }).catch((err) => {
          r.cancel(err);
        });
        const r = new RequestMany(this.protocol.muxSubscriptions, subject, rmo);
        this.protocol.request(r);
        try {
          this.publish(subject, data, {
            reply: `${this.protocol.muxSubscriptions.baseInbox}${r.token}`,
            headers: opts.headers
          });
        } catch (err) {
          r.cancel(err);
        }
      }
      return Promise.resolve(qi);
    }
    request(subject, data, opts = {
      timeout: 1e3,
      noMux: false
    }) {
      try {
        this._check(subject, true, true);
      } catch (err) {
        return Promise.reject(err);
      }
      const asyncTraces = !(this.protocol.options.noAsyncTraces || false);
      opts.timeout = opts.timeout || 1e3;
      if (opts.timeout < 1) {
        return Promise.reject(new NatsError("timeout", ErrorCode.InvalidOption));
      }
      if (!opts.noMux && opts.reply) {
        return Promise.reject(new NatsError("reply can only be used with noMux", ErrorCode.InvalidOption));
      }
      if (opts.noMux) {
        const inbox = opts.reply ? opts.reply : createInbox(this.options.inboxPrefix);
        const d = deferred();
        const errCtx = asyncTraces ? new Error() : null;
        const sub = this.subscribe(inbox, {
          max: 1,
          timeout: opts.timeout,
          callback: (err, msg) => {
            if (err) {
              if (errCtx && err.code !== ErrorCode.Timeout) {
                err.stack += `

${errCtx.stack}`;
              }
              sub.unsubscribe();
              d.reject(err);
            } else {
              err = isRequestError(msg);
              if (err) {
                if (errCtx) {
                  err.stack += `

${errCtx.stack}`;
                }
                d.reject(err);
              } else {
                d.resolve(msg);
              }
            }
          }
        });
        sub.requestSubject = subject;
        this.protocol.publish(subject, data, {
          reply: inbox,
          headers: opts.headers
        });
        return d;
      } else {
        const r = new RequestOne(this.protocol.muxSubscriptions, subject, opts, asyncTraces);
        this.protocol.request(r);
        try {
          this.publish(subject, data, {
            reply: `${this.protocol.muxSubscriptions.baseInbox}${r.token}`,
            headers: opts.headers
          });
        } catch (err) {
          r.cancel(err);
        }
        const p = Promise.race([
          r.timer,
          r.deferred
        ]);
        p.catch(() => {
          r.cancel();
        });
        return p;
      }
    }
    flush() {
      if (this.isClosed()) {
        return Promise.reject(NatsError.errorForCode(ErrorCode.ConnectionClosed));
      }
      return this.protocol.flush();
    }
    drain() {
      if (this.isClosed()) {
        return Promise.reject(NatsError.errorForCode(ErrorCode.ConnectionClosed));
      }
      if (this.isDraining()) {
        return Promise.reject(NatsError.errorForCode(ErrorCode.ConnectionDraining));
      }
      this.draining = true;
      return this.protocol.drain();
    }
    isClosed() {
      return this.protocol.isClosed();
    }
    isDraining() {
      return this.draining;
    }
    getServer() {
      const srv = this.protocol.getServer();
      return srv ? srv.listen : "";
    }
    status() {
      const iter = new QueuedIteratorImpl();
      iter.iterClosed.then(() => {
        const idx = this.listeners.indexOf(iter);
        this.listeners.splice(idx, 1);
      });
      this.listeners.push(iter);
      return iter;
    }
    get info() {
      return this.protocol.isClosed() ? void 0 : this.protocol.info;
    }
    async context() {
      const r = await this.request(`$SYS.REQ.USER.INFO`);
      return r.json((key, value) => {
        if (key === "time") {
          return new Date(Date.parse(value));
        }
        return value;
      });
    }
    stats() {
      return {
        inBytes: this.protocol.inBytes,
        outBytes: this.protocol.outBytes,
        inMsgs: this.protocol.inMsgs,
        outMsgs: this.protocol.outMsgs
      };
    }
    async jetstreamManager(opts = {}) {
      const adm = new JetStreamManagerImpl(this, opts);
      if (opts.checkAPI !== false) {
        try {
          await adm.getAccountInfo();
        } catch (err) {
          const ne = err;
          if (ne.code === ErrorCode.NoResponders) {
            ne.code = ErrorCode.JetStreamNotEnabled;
          }
          throw ne;
        }
      }
      return adm;
    }
    jetstream(opts = {}) {
      return new JetStreamClientImpl(this, opts);
    }
    getServerVersion() {
      const info = this.info;
      return info ? parseSemVer(info.version) : void 0;
    }
    async rtt() {
      if (!this.protocol._closed && !this.protocol.connected) {
        throw NatsError.errorForCode(ErrorCode.Disconnect);
      }
      const start = Date.now();
      await this.flush();
      return Date.now() - start;
    }
    get features() {
      return this.protocol.features;
    }
    get services() {
      if (!this._services) {
        this._services = new ServicesFactory(this);
      }
      return this._services;
    }
    reconnect() {
      if (this.isClosed()) {
        return Promise.reject(NatsError.errorForCode(ErrorCode.ConnectionClosed));
      }
      if (this.isDraining()) {
        return Promise.reject(NatsError.errorForCode(ErrorCode.ConnectionDraining));
      }
      return this.protocol.reconnect();
    }
  };
  var ServicesFactory = class {
    nc;
    constructor(nc) {
      this.nc = nc;
    }
    add(config) {
      try {
        const s = new ServiceImpl(this.nc, config);
        return s.start();
      } catch (err) {
        return Promise.reject(err);
      }
    }
    client(opts, prefix) {
      return new ServiceClientImpl(this.nc, opts, prefix);
    }
  };
  var KvStoredEntryImpl = class {
    bucket;
    sm;
    prefixLen;
    constructor(bucket, prefixLen, sm) {
      this.bucket = bucket;
      this.prefixLen = prefixLen;
      this.sm = sm;
    }
    get key() {
      return this.sm.subject.substring(this.prefixLen);
    }
    get value() {
      return this.sm.data;
    }
    get delta() {
      return 0;
    }
    get created() {
      return this.sm.time;
    }
    get revision() {
      return this.sm.seq;
    }
    get operation() {
      return this.sm.header.get(kvOperationHdr) || "PUT";
    }
    get length() {
      const slen = this.sm.header.get(JsHeaders.MessageSizeHdr) || "";
      if (slen !== "") {
        return parseInt(slen, 10);
      }
      return this.sm.data.length;
    }
    json() {
      return this.sm.json();
    }
    string() {
      return this.sm.string();
    }
  };
  var KvJsMsgEntryImpl = class {
    bucket;
    key;
    sm;
    constructor(bucket, key, sm) {
      this.bucket = bucket;
      this.key = key;
      this.sm = sm;
    }
    get value() {
      return this.sm.data;
    }
    get created() {
      return new Date(millis(this.sm.info.timestampNanos));
    }
    get revision() {
      return this.sm.seq;
    }
    get operation() {
      return this.sm.headers?.get(kvOperationHdr) || "PUT";
    }
    get delta() {
      return this.sm.info.pending;
    }
    get length() {
      const slen = this.sm.headers?.get(JsHeaders.MessageSizeHdr) || "";
      if (slen !== "") {
        return parseInt(slen, 10);
      }
      return this.sm.data.length;
    }
    json() {
      return this.sm.json();
    }
    string() {
      return this.sm.string();
    }
  };
  var JetStreamSubscriptionImpl = class extends TypedSubscription {
    js;
    monitor;
    constructor(js, subject, opts) {
      super(js.nc, subject, opts);
      this.js = js;
      this.monitor = null;
      this.sub.closed.then(() => {
        if (this.monitor) {
          this.monitor.cancel();
        }
      });
    }
    set info(info) {
      this.sub.info = info;
    }
    get info() {
      return this.sub.info;
    }
    _resetOrderedConsumer(sseq) {
      if (this.info === null || this.sub.isClosed()) {
        return;
      }
      const newDeliver = createInbox(this.js.nc.options.inboxPrefix);
      const nci = this.js.nc;
      nci._resub(this.sub, newDeliver);
      const info = this.info;
      info.config.name = nuid.next();
      info.ordered_consumer_sequence.delivery_seq = 0;
      info.flow_control.heartbeat_count = 0;
      info.flow_control.fc_count = 0;
      info.flow_control.consumer_restarts++;
      info.deliver = newDeliver;
      info.config.deliver_subject = newDeliver;
      info.config.deliver_policy = DeliverPolicy.StartSequence;
      info.config.opt_start_seq = sseq;
      const req = {};
      req.stream_name = this.info.stream;
      req.config = info.config;
      const subj = `${info.api.prefix}.CONSUMER.CREATE.${info.stream}`;
      this.js._request(subj, req, {
        retries: -1
      }).then((v) => {
        const ci = v;
        const jinfo = this.sub.info;
        jinfo.last = ci;
        this.info.config = ci.config;
        this.info.name = ci.name;
      }).catch((err) => {
        const nerr = new NatsError(`unable to recreate ordered consumer ${info.stream} at seq ${sseq}`, ErrorCode.RequestError, err);
        this.sub.callback(nerr, {});
      });
    }
    _maybeSetupHbMonitoring() {
      const ns = this.info?.config?.idle_heartbeat || 0;
      if (ns) {
        this._setupHbMonitoring(millis(ns));
      }
    }
    _setupHbMonitoring(millis2, cancelAfter = 0) {
      const opts = {
        cancelAfter: 0,
        maxOut: 2
      };
      if (cancelAfter) {
        opts.cancelAfter = cancelAfter;
      }
      const sub = this.sub;
      const handler = (v) => {
        const msg = newJsErrorMsg(409, `${Js409Errors.IdleHeartbeatMissed}: ${v}`, this.sub.subject);
        const ordered = this.info?.ordered;
        if (!ordered) {
          this.sub.callback(null, msg);
        } else {
          if (!this.js.nc.protocol.connected) {
            return false;
          }
          const seq = this.info?.ordered_consumer_sequence?.stream_seq || 0;
          this._resetOrderedConsumer(seq + 1);
          this.monitor?.restart();
          return false;
        }
        return !sub.noIterator;
      };
      this.monitor = new IdleHeartbeatMonitor(millis2, handler, opts);
    }
    _checkHbOrderConsumer(msg) {
      const rm = msg.headers.get(JsHeaders.ConsumerStalledHdr);
      if (rm !== "") {
        const nci = this.js.nc;
        nci.publish(rm);
      }
      const lastDelivered = parseInt(msg.headers.get(JsHeaders.LastConsumerSeqHdr), 10);
      const ordered = this.info.ordered_consumer_sequence;
      this.info.flow_control.heartbeat_count++;
      if (lastDelivered !== ordered.delivery_seq) {
        this._resetOrderedConsumer(ordered.stream_seq + 1);
      }
      return false;
    }
    _checkOrderedConsumer(jm) {
      const ordered = this.info.ordered_consumer_sequence;
      const sseq = jm.info.streamSequence;
      const dseq = jm.info.deliverySequence;
      if (dseq != ordered.delivery_seq + 1) {
        this._resetOrderedConsumer(ordered.stream_seq + 1);
        return false;
      }
      ordered.delivery_seq = dseq;
      ordered.stream_seq = sseq;
      return true;
    }
    async destroy() {
      if (!this.isClosed()) {
        await this.drain();
      }
      const jinfo = this.sub.info;
      const name = jinfo.config.durable_name || jinfo.name;
      const subj = `${jinfo.api.prefix}.CONSUMER.DELETE.${jinfo.stream}.${name}`;
      await jinfo.api._request(subj);
    }
    async consumerInfo() {
      const jinfo = this.sub.info;
      const name = jinfo.config.durable_name || jinfo.name;
      const subj = `${jinfo.api.prefix}.CONSUMER.INFO.${jinfo.stream}.${name}`;
      const ci = await jinfo.api._request(subj);
      jinfo.last = ci;
      return ci;
    }
  };
  var JetStreamPullSubscriptionImpl = class extends JetStreamSubscriptionImpl {
    constructor(js, subject, opts) {
      super(js, subject, opts);
    }
    pull(opts = {
      batch: 1
    }) {
      const { stream, config, name } = this.sub.info;
      const consumer = config.durable_name ?? name;
      const args = {};
      args.batch = opts.batch || 1;
      args.no_wait = opts.no_wait || false;
      if ((opts.max_bytes ?? 0) > 0) {
        const fv = this.js.nc.features.get(Feature.JS_PULL_MAX_BYTES);
        if (!fv.ok) {
          throw new Error(`max_bytes is only supported on servers ${fv.min} or better`);
        }
        args.max_bytes = opts.max_bytes;
      }
      let expires = 0;
      if (opts.expires && opts.expires > 0) {
        expires = opts.expires;
        args.expires = nanos(expires);
      }
      let hb = 0;
      if (opts.idle_heartbeat && opts.idle_heartbeat > 0) {
        hb = opts.idle_heartbeat;
        args.idle_heartbeat = nanos(hb);
      }
      if (hb && expires === 0) {
        throw new Error("idle_heartbeat requires expires");
      }
      if (hb > expires) {
        throw new Error("expires must be greater than idle_heartbeat");
      }
      if (this.info) {
        if (this.monitor) {
          this.monitor.cancel();
        }
        if (expires && hb) {
          if (!this.monitor) {
            this._setupHbMonitoring(hb, expires);
          } else {
            this.monitor._change(hb, expires);
          }
        }
        const api = this.info.api;
        const subj = `${api.prefix}.CONSUMER.MSG.NEXT.${stream}.${consumer}`;
        const reply = this.sub.subject;
        api.nc.publish(subj, api.jc.encode(args), {
          reply
        });
      }
    }
  };
  function msgAdapter(iterator, ackTimeout) {
    if (iterator) {
      return iterMsgAdapter(ackTimeout);
    } else {
      return cbMsgAdapter(ackTimeout);
    }
  }
  function cbMsgAdapter(ackTimeout) {
    return (err, msg) => {
      if (err) {
        return [
          err,
          null
        ];
      }
      err = checkJsError(msg);
      if (err) {
        return [
          err,
          null
        ];
      }
      return [
        null,
        toJsMsg(msg, ackTimeout)
      ];
    };
  }
  function iterMsgAdapter(ackTimeout) {
    return (err, msg) => {
      if (err) {
        return [
          err,
          null
        ];
      }
      const ne = checkJsError(msg);
      if (ne !== null) {
        return [
          hideNonTerminalJsErrors(ne),
          null
        ];
      }
      return [
        null,
        toJsMsg(msg, ackTimeout)
      ];
    };
  }
  function hideNonTerminalJsErrors(ne) {
    if (ne !== null) {
      switch (ne.code) {
        case ErrorCode.JetStream404NoMessages:
        case ErrorCode.JetStream408RequestTimeout:
          return null;
        case ErrorCode.JetStream409:
          if (isTerminal409(ne)) {
            return ne;
          }
          return null;
        default:
          return ne;
      }
    }
    return null;
  }
  function autoAckJsMsg(data) {
    if (data) {
      data.ack();
    }
  }
  function parseInfo(s) {
    const tokens = s.split(".");
    if (tokens.length === 9) {
      tokens.splice(2, 0, "_", "");
    }
    if (tokens.length < 11 || tokens[0] !== "$JS" || tokens[1] !== "ACK") {
      throw new Error(`not js message`);
    }
    const di = {};
    di.domain = tokens[2] === "_" ? "" : tokens[2];
    di.account_hash = tokens[3];
    di.stream = tokens[4];
    di.consumer = tokens[5];
    di.redeliveryCount = parseInt(tokens[6], 10);
    di.redelivered = di.redeliveryCount > 1;
    di.streamSequence = parseInt(tokens[7], 10);
    di.deliverySequence = parseInt(tokens[8], 10);
    di.timestampNanos = parseInt(tokens[9], 10);
    di.pending = parseInt(tokens[10], 10);
    return di;
  }
  var JsMsgImpl = class {
    msg;
    di;
    didAck;
    timeout;
    constructor(msg, timeout2) {
      this.msg = msg;
      this.didAck = false;
      this.timeout = timeout2;
    }
    get subject() {
      return this.msg.subject;
    }
    get sid() {
      return this.msg.sid;
    }
    get data() {
      return this.msg.data;
    }
    get headers() {
      return this.msg.headers;
    }
    get info() {
      if (!this.di) {
        this.di = parseInfo(this.reply);
      }
      return this.di;
    }
    get redelivered() {
      return this.info.redeliveryCount > 1;
    }
    get reply() {
      return this.msg.reply || "";
    }
    get seq() {
      return this.info.streamSequence;
    }
    doAck(payload) {
      if (!this.didAck) {
        this.didAck = !this.isWIP(payload);
        this.msg.respond(payload);
      }
    }
    isWIP(p) {
      return p.length === 4 && p[0] === WPI[0] && p[1] === WPI[1] && p[2] === WPI[2] && p[3] === WPI[3];
    }
    async ackAck(opts) {
      opts = opts || {};
      opts.timeout = opts.timeout || this.timeout;
      const d = deferred();
      if (!this.didAck) {
        this.didAck = true;
        if (this.msg.reply) {
          const mi = this.msg;
          const proto = mi.publisher;
          const trace = !(proto.options?.noAsyncTraces || false);
          const r = new RequestOne(proto.muxSubscriptions, this.msg.reply, {
            timeout: opts.timeout
          }, trace);
          proto.request(r);
          try {
            proto.publish(this.msg.reply, ACK, {
              reply: `${proto.muxSubscriptions.baseInbox}${r.token}`
            });
          } catch (err) {
            r.cancel(err);
          }
          try {
            await Promise.race([
              r.timer,
              r.deferred
            ]);
            d.resolve(true);
          } catch (err) {
            r.cancel(err);
            d.reject(err);
          }
        } else {
          d.resolve(false);
        }
      } else {
        d.resolve(false);
      }
      return d;
    }
    ack() {
      this.doAck(ACK);
    }
    nak(millis2) {
      let payload = NAK;
      if (millis2) {
        payload = StringCodec().encode(`-NAK ${JSON.stringify({
          delay: nanos(millis2)
        })}`);
      }
      this.doAck(payload);
    }
    working() {
      this.doAck(WPI);
    }
    next(subj, opts = {
      batch: 1
    }) {
      const args = {};
      args.batch = opts.batch || 1;
      args.no_wait = opts.no_wait || false;
      if (opts.expires && opts.expires > 0) {
        args.expires = nanos(opts.expires);
      }
      const data = JSONCodec().encode(args);
      const payload = DataBuffer.concat(NXT, SPACE, data);
      const reqOpts = subj ? {
        reply: subj
      } : void 0;
      this.msg.respond(payload, reqOpts);
    }
    term(reason = "") {
      let term = TERM;
      if (reason?.length > 0) {
        term = StringCodec().encode(`+TERM ${reason}`);
      }
      this.doAck(term);
    }
    json() {
      return this.msg.json();
    }
    string() {
      return this.msg.string();
    }
  };
  var VERSION = "1.29.2";
  var LANG = "nats.ws";
  var WsTransport = class {
    version;
    lang;
    closeError;
    connected;
    done;
    socket;
    options;
    socketClosed;
    encrypted;
    peeked;
    yields;
    signal;
    closedNotification;
    constructor() {
      this.version = VERSION;
      this.lang = LANG;
      this.connected = false;
      this.done = false;
      this.socketClosed = false;
      this.encrypted = false;
      this.peeked = false;
      this.yields = [];
      this.signal = deferred();
      this.closedNotification = deferred();
    }
    async connect(server, options) {
      const connected = false;
      const connLock = deferred();
      if (options.tls) {
        connLock.reject(new NatsError("tls", ErrorCode.InvalidOption));
        return connLock;
      }
      this.options = options;
      const u = server.src;
      if (options.wsFactory) {
        const { socket, encrypted } = await options.wsFactory(server.src, options);
        this.socket = socket;
        this.encrypted = encrypted;
      } else {
        this.encrypted = u.indexOf("wss://") === 0;
        this.socket = new WebSocket(u);
      }
      this.socket.binaryType = "arraybuffer";
      this.socket.onopen = () => {
        if (this.isDiscarded()) {
          return;
        }
      };
      this.socket.onmessage = (me) => {
        if (this.isDiscarded()) {
          return;
        }
        this.yields.push(new Uint8Array(me.data));
        if (this.peeked) {
          this.signal.resolve();
          return;
        }
        const t = DataBuffer.concat(...this.yields);
        const pm = extractProtocolMessage(t);
        if (pm !== "") {
          const m = INFO.exec(pm);
          if (!m) {
            if (options.debug) {
              console.error("!!!", render(t));
            }
            connLock.reject(new Error("unexpected response from server"));
            return;
          }
          try {
            const info = JSON.parse(m[1]);
            checkOptions(info, this.options);
            this.peeked = true;
            this.connected = true;
            this.signal.resolve();
            connLock.resolve();
          } catch (err) {
            connLock.reject(err);
            return;
          }
        }
      };
      this.socket.onclose = (evt) => {
        if (this.isDiscarded()) {
          return;
        }
        this.socketClosed = true;
        let reason;
        if (this.done) return;
        if (!evt.wasClean) {
          reason = new Error(evt.reason);
        }
        this._closed(reason);
      };
      this.socket.onerror = (e) => {
        if (this.isDiscarded()) {
          return;
        }
        const evt = e;
        const err = new NatsError(evt.message, ErrorCode.Unknown, new Error(evt.error));
        if (!connected) {
          connLock.reject(err);
        } else {
          this._closed(err);
        }
      };
      return connLock;
    }
    disconnect() {
      this._closed(void 0, true);
    }
    async _closed(err, internal = true) {
      if (this.isDiscarded()) {
        return;
      }
      if (!this.connected) return;
      if (this.done) return;
      this.closeError = err;
      if (!err) {
        while (!this.socketClosed && this.socket.bufferedAmount > 0) {
          await delay(100);
        }
      }
      this.done = true;
      try {
        this.socket.close(err ? 1002 : 1e3, err ? err.message : void 0);
      } catch (err2) {
      }
      if (internal) {
        this.closedNotification.resolve(err);
      }
    }
    get isClosed() {
      return this.done;
    }
    [Symbol.asyncIterator]() {
      return this.iterate();
    }
    async *iterate() {
      while (true) {
        if (this.isDiscarded()) {
          return;
        }
        if (this.yields.length === 0) {
          await this.signal;
        }
        const yields = this.yields;
        this.yields = [];
        for (let i = 0; i < yields.length; i++) {
          if (this.options.debug) {
            console.info(`> ${render(yields[i])}`);
          }
          yield yields[i];
        }
        if (this.done) {
          break;
        } else if (this.yields.length === 0) {
          yields.length = 0;
          this.yields = yields;
          this.signal = deferred();
        }
      }
    }
    isEncrypted() {
      return this.connected && this.encrypted;
    }
    send(frame) {
      if (this.isDiscarded()) {
        return;
      }
      try {
        this.socket.send(frame.buffer);
        if (this.options.debug) {
          console.info(`< ${render(frame)}`);
        }
        return;
      } catch (err) {
        if (this.options.debug) {
          console.error(`!!! ${render(frame)}: ${err}`);
        }
      }
    }
    close(err) {
      return this._closed(err, false);
    }
    closed() {
      return this.closedNotification;
    }
    isDiscarded() {
      if (this.done) {
        this.discard();
        return true;
      }
      return false;
    }
    discard() {
      this.done = true;
      try {
        this.socket?.close();
      } catch (_err) {
      }
    }
  };
  function wsUrlParseFn(u, encrypted) {
    const ut = /^(.*:\/\/)(.*)/;
    if (!ut.test(u)) {
      if (typeof encrypted === "boolean") {
        u = `${encrypted === true ? "https" : "http"}://${u}`;
      } else {
        u = `https://${u}`;
      }
    }
    let url = new URL(u);
    const srcProto = url.protocol.toLowerCase();
    if (srcProto === "ws:") {
      encrypted = false;
    }
    if (srcProto === "wss:") {
      encrypted = true;
    }
    if (srcProto !== "https:" && srcProto !== "http") {
      u = u.replace(/^(.*:\/\/)(.*)/gm, "$2");
      url = new URL(`http://${u}`);
    }
    let protocol;
    let port;
    const host = url.hostname;
    const path = url.pathname;
    const search = url.search || "";
    switch (srcProto) {
      case "http:":
      case "ws:":
      case "nats:":
        port = url.port || "80";
        protocol = "ws:";
        break;
      case "https:":
      case "wss:":
      case "tls:":
        port = url.port || "443";
        protocol = "wss:";
        break;
      default:
        port = url.port || encrypted === true ? "443" : "80";
        protocol = encrypted === true ? "wss:" : "ws:";
        break;
    }
    return `${protocol}//${host}:${port}${path}${search}`;
  }
  function connect(opts = {}) {
    setTransportFactory({
      defaultPort: 443,
      urlParseFn: wsUrlParseFn,
      factory: () => {
        return new WsTransport();
      }
    });
    return NatsConnectionImpl.connect(opts);
  }

  // src/error/errorToText.ts
  var errorToTextAsync = async (error) => {
    if (typeof error == "string") {
      return error;
    }
    if (error instanceof Error) {
      return [error.message, error.stack].filter(isDefined2).join("\n");
    }
    if (error instanceof Response) {
      const text = await error.text();
      return `${error.url} ${error.status} ${error.statusText} ${text}`;
    }
    return safe2(() => JSON.stringify(error, void 0, 2));
  };

  // src/error/errorToErrorDetail.ts
  var errorToErrorDetail = async ({
    error,
    extra,
    stack
  }) => {
    if (error instanceof Error) {
      const cause = isDefined2(error.cause) ? await errorToErrorDetail({ error: error.cause }) : void 0;
      return {
        message: error.message,
        stack: error.stack ?? stack,
        extra,
        cause
      };
    }
    return {
      message: await errorToTextAsync(error),
      stack,
      extra
    };
  };

  // src/natsHeadersToRecord.ts
  var natsHeadersToRecord = (headers2) => {
    if (isUndefined2(headers2)) {
      return void 0;
    }
    const keys2 = headers2.keys();
    const result = {};
    for (const key of keys2) {
      result[key] = headers2.get(key);
    }
    return result;
  };

  // src/connectListenerToSubscription.ts
  var connectListenerToSubscription = async ({
    connection,
    subject,
    listener,
    options = {},
    env = {}
  }) => {
    const { log = () => {
    } } = options;
    log("connectListenerToSubscription: subject: ", subject);
    const subscription = connection.subscribe(subject);
    for await (const message of subscription) {
      try {
        const detail = decode(
          new Uint8Array(message.data)
        );
        const requestHeaders = natsHeadersToRecord(
          message.headers
        );
        const abortController = new AbortController();
        if (isDefined2(requestHeaders?.["abort-subject"])) {
          const abortSubject = requestHeaders["abort-subject"];
          const abortSubscription = connection.subscribe(abortSubject, {
            max: 1,
            callback: () => {
              console.log("aborting!!!!");
              abortController.abort();
              abortSubscription.unsubscribe();
              message.respond();
            }
          });
        }
        const send = (response, options2 = {}) => {
          const responseHeaders = headers(
            options2.code,
            options2.codeDescription
          );
          if (isDefined2(options2.headers)) {
            for (const [key, value] of Object.entries(options2.headers)) {
              responseHeaders.set(key, value);
            }
          }
          if (isUndefined2(response)) {
            connection.publish(message.reply);
            return;
          }
          const responseMsg = encode(response);
          message.respond(responseMsg, {
            headers: responseHeaders
          });
        };
        const sendError = async (error, options2 = {}) => {
          const errorDetail = await errorToErrorDetail({
            error,
            extra: [message.subject]
          });
          const responseHeaders = headers(
            options2.code ?? 500,
            options2.codeDescription ?? "Error"
          );
          if (isDefined2(options2.headers)) {
            for (const [key, value] of Object.entries(options2.headers)) {
              responseHeaders.set(key, value);
            }
          }
          message.respond(encode(errorDetail), {
            headers: responseHeaders
          });
        };
        const result = await listener({
          detail,
          headers: requestHeaders,
          env,
          signal: abortController.signal,
          send,
          sendError
        });
        const reply = message.reply;
        if (isUndefined2(reply)) {
          continue;
        }
        send(result);
      } catch (error) {
        log("connectListenerToSubscription: error", error);
        const errorDetail = await errorToErrorDetail({
          error,
          extra: [message.subject]
        });
        const hs = headers(500, "Listener Error");
        message.respond(encode(errorDetail), {
          headers: hs
        });
      }
    }
  };

  // src/recordToNatsHeaders.ts
  var recordToNatsHeaders = (record) => {
    const hs = headers();
    if (isUndefined2(record)) {
      return hs;
    }
    for (const [key, value] of Object.entries(record)) {
      hs.set(key, value);
    }
    return hs;
  };

  // src/createConnection.ts
  var createConnection = async ({
    server,
    subscribers = {},
    options = {},
    env = {}
  }) => {
    const { log = () => {
    } } = options;
    log("createConnection: server: ", server);
    const connection = await connect({ servers: [...toMany2(server)] });
    const entries3 = Object.entries(subscribers);
    log("createConnection: entries: ", entries3);
    for (const [subject, listener] of entries3) {
      if (isUndefined2(listener)) {
        continue;
      }
      connectListenerToSubscription({
        connection,
        subject,
        listener,
        options,
        env
      });
    }
    return {
      connection: {
        close: () => connection.close(),
        drain: () => connection.drain(),
        flush: () => connection.flush(),
        stats: () => connection.stats(),
        status: () => connection.status()
      },
      requestMany: async (props) => {
        const {
          request,
          subject,
          headers: headers2,
          options: options2 = {},
          onResponse,
          signal
        } = props;
        const requestMsg = encode(request);
        const { timeoutMs = 60 * 1e3 } = options2;
        const hs = recordToNatsHeaders(headers2);
        if (isDefined2(signal)) {
          const abortSubject = `abort.${Date.now()}.${crypto.randomUUID()}`;
          hs?.set("abort-subject", abortSubject);
          signal.addEventListener("abort", () => {
            connection.publish(abortSubject);
          });
        }
        const iterable = await connection.requestMany(
          subject,
          requestMsg,
          {
            maxWait: timeoutMs,
            headers: hs,
            strategy: RequestStrategy.SentinelMsg
          }
        );
        for await (const resp of iterable) {
          iterable;
          if (signal?.aborted) {
            return;
          }
          if (isUndefined2(resp.data) || resp.data.byteLength === 0) {
            break;
          }
          const responseData = decode(new Uint8Array(resp.data));
          if (resp.headers?.hasError) {
            throw new Error(`Error response on subject: ${subject}`, {
              cause: responseData
            });
          }
          await onResponse(responseData);
        }
      },
      request: async (props) => {
        const { request, subject, headers: headers2, options: options2 = {} } = props;
        const requestMsg = encode(request);
        const { timeoutMs = 60 * 1e3 } = options2;
        const hs = recordToNatsHeaders(headers2);
        const resp = await connection.request(subject, requestMsg, {
          timeout: timeoutMs,
          headers: hs
        });
        const responseData = decode(new Uint8Array(resp.data));
        if (resp.headers?.hasError) {
          throw new Error(`Error response on subject: ${subject}`, {
            cause: responseData
          });
        }
        return responseData;
      }
    };
  };

  // src/Messages.ts
  var Messages2 = { createConnection, connectListenerToSubscription };
})();
