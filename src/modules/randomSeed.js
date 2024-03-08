export const randomSeed = (seed) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}