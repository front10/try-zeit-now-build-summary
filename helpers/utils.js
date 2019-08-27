/**
 * Return true if item is an object
 * @param {*} item
 */
const isObject = item =>
  item && typeof item === "object" && !Array.isArray(item);

/**
 * Deep merge between two objects
 * @param {Obj} target
 * @param {Obj} source
 */
const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  }
  return mergeDeep(target, ...sources);
};

export { mergeDeep };
