const validators = {
  isNotEmpty: (v) => v.length > 0,
  minValue:
    (min = 0) =>
    (v) =>
      v > min,
  allowRange: (min, max) => (v) => v > min && v < max,
};

export default validators;
