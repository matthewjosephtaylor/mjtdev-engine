type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
type JSONObject = { [key: string]: JSONValue };
type JSONArray = JSONValue[];

export function parseIncompleteJson(input: string): JSONValue | undefined {
  let index = 0;
  const length = input.length;

  function skipWhitespace() {
    while (index < length && /\s/.test(input[index])) {
      index++;
    }
  }

  function parseValue(): JSONValue | undefined {
    skipWhitespace();
    if (index >= length) return undefined;

    const char = input[index];

    if (char === "{") {
      return parseObject();
    } else if (char === "[") {
      return parseArray();
    } else if (char === '"') {
      return parseString();
    } else if (char === "-" || (char >= "0" && char <= "9")) {
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

    return undefined;
  }

  function parseObject(): JSONObject {
    const result: JSONObject = {};
    index++; // Skip '{'

    while (index < length) {
      skipWhitespace();

      if (input[index] === "}") {
        index++; // Skip '}'
        return result;
      }

      const key = parseString();
      if (key === undefined || typeof key !== "string") {
        break;
      }

      skipWhitespace();
      if (input[index] !== ":") {
        break;
      }
      index++; // Skip ':'

      const value = parseValue();
      if (value === undefined) {
        break;
      }

      result[key] = value;

      skipWhitespace();
      if (input[index] === "}") {
        index++; // Skip '}'
        return result;
      } else if (input[index] !== ",") {
        break;
      }

      index++; // Skip ','
    }

    // If we reach here, the JSON object is incomplete
    return result;
  }

  function parseArray(): JSONArray {
    const result: JSONArray = [];
    index++; // Skip '['

    while (index < length) {
      skipWhitespace();

      if (input[index] === "]") {
        index++; // Skip ']'
        return result;
      }

      const value = parseValue();
      if (value !== undefined) {
        result.push(value);
      }

      skipWhitespace();
      if (input[index] === "]") {
        index++; // Skip ']'
        return result;
      } else if (input[index] !== ",") {
        break;
      }

      index++; // Skip ','
    }

    // If we reach here, the JSON array is incomplete
    return result;
  }

  function parseString(): string | undefined {
    let result = "";
    index++; // Skip opening '"'

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
            result += "\t";
          }
        }
      } else {
        result += char;
      }
    }

    return undefined; // Incomplete string
  }

  function parseNumber(): number | undefined {
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
      return undefined; // Invalid number
    }

    return num;
  }

  return parseValue();
}
