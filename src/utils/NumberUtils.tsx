function toFixedNumber(num: number, digits: number, base: number = 10): number {
  const pow = Math.pow(base, digits);
  return Math.round(num*pow) / pow;
}

export {toFixedNumber};
