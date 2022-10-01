import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";
import { getMultiple, getRandom } from "./mod.ts";

Deno.test("Get Random Test #1", async () => {
  const value = await getRandom("neko");
  assertEquals(Object.keys(value).length > 0, true);
});

Deno.test("Get Random Test #2", async () => {
  const value = await getRandom();
  assertEquals(Object.keys(value).length > 0, true);
});

Deno.test("Get Multiple Test", async () => {
  const value = await getMultiple("kitsune");
  assertEquals(value.length > 0, true);
});
