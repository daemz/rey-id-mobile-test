type Attributes = {[key: string]: string | undefined | number | boolean};

export const removeUndefinedAttributes = (value: Attributes): Attributes => {
  const stringifiedJson = JSON.stringify(value);
  return JSON.parse(stringifiedJson);
};

export const getRandomString = (bytes: number): string =>
  Math.random().toString(bytes).substring(2, 15) +
  Math.random().toString(bytes).substring(2, 15);

export const replaceAllDuplicateLineBreaks = (sentence: string): string => {
  return sentence.replace(/\\n/g, '\n');
};

export const recursiveParse = (jsonObject: string) => {
  try {
    if (jsonObject && typeof jsonObject === 'object') {
      return jsonObject;
    }
    return recursiveParse(JSON.parse(jsonObject));
  } catch {
    return jsonObject;
  }
};

export const lowerCaseFirstChar = (camelWords: string): string => {
  return camelWords?.charAt(0).toLowerCase() + camelWords?.slice(1);
};

export const concatenateSnakeCase = (snakeCase: string): string => {
  return snakeCase?.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
