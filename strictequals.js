export const strictEquals = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return false;
  }

  if (isNaN(a / b) && isNaN(b / a)) {
    return true;
  }

  return Object.is(a, b);
};
