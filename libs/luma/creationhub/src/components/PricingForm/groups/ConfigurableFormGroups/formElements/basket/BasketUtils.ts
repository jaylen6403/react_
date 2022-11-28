export function parseWeight(weight: number | undefined) {
  if (weight === undefined) {
    return '';
  }
  return Math.round(weight * 100);
}
