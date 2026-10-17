import { test } from "node:test";
import assert from "node:assert/strict";
import { greet, clampCount, nextCount } from "../public/utils.js";

test("greet() naam ke saath", () => {
  assert.equal(greet("Ali"), "Hello, Ali!");
});

test("greet() khali naam par default message", () => {
  assert.equal(greet(""), "Hello, World!");
  assert.equal(greet("   "), "Hello, World!");
});

test("clampCount() 0 se 10 ke andar rakhta hai", () => {
  assert.equal(clampCount(-5), 0);
  assert.equal(clampCount(5), 5);
  assert.equal(clampCount(99), 10);
});

test("nextCount() barhta aur ghatta hai", () => {
  assert.equal(nextCount(3, 1), 4);
  assert.equal(nextCount(3, -1), 2);
});

test("nextCount() limits se bahar nahi jata", () => {
  assert.equal(nextCount(10, 1), 10);
  assert.equal(nextCount(0, -1), 0);
});
