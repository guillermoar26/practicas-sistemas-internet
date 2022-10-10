import { assertEquals, assertNotEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import { arrayModificado } from "./practica1DiegoGuille.ts";
   
Deno.test(function addTest() {
  assertEquals(arrayModificado([200, 4, 3]), [ 12, 600, 800 ]);
});

Deno.test(function addTest() {
  assertNotEquals(arrayModificado([ [ 1, 2, 3 ], 2, [ 4, 5, 6 ] ]), [6,3,2]);
});

Deno.test(function addTest() {
  assertEquals(arrayModificado([[1,2],3]), [6,3,2]);
});

Deno.test(function addTest() {
  assertEquals(arrayModificado([["1",2],3]), [6,3,2]);
});