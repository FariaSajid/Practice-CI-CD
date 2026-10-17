// Pure functions: inko tests mein asaani se check kiya ja sakta hai.

export const MIN_COUNT = 0;
export const MAX_COUNT = 10;

export function greet(name) {
  const clean = (name || "").trim();
  return clean === "" ? "Hello, World!" : `Hello, ${clean}!`;
}

export function clampCount(value) {
  return Math.min(MAX_COUNT, Math.max(MIN_COUNT, value));
}

export function nextCount(current, step) {
  return clampCount(current + step);
}
