import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../public/index.html", import.meta.url), "utf8");

test("index.html mein title maujood hai", () => {
  assert.match(html, /<title>CI\/CD Practice App<\/title>/);
});

test("index.html CSS aur JS files ko link karta hai", () => {
  assert.match(html, /href="style\.css"/);
  assert.match(html, /src="script\.js"/);
});

test("index.html mein zaroori buttons aur elements hain", () => {
  for (const id of ["name-input", "greet-btn", "greeting", "inc-btn", "dec-btn", "count"]) {
    assert.ok(html.includes(`id="${id}"`), `id="${id}" missing hai`);
  }
});
