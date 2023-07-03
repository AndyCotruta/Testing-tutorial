// sum.ts
export const sum = (a: number, b: number): number => {
  return a + b;
};

export const isNumber = (a: any): boolean => {
  if (isNaN(a)) {
    return false;
  } else if (typeof a === "number") {
    return true;
  } else {
    return false;
  }
};
