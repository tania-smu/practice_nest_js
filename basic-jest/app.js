const typeTriangle = require("./triangle");

// assert declaration, native bawaan dari node.js
const assert = require("assert");

try {
  // response strict harus sesuai yang di-declare
  assert.strictEqual(typeTriangle(4, 4, 4), "Segitiga sama sisi");
  assert.strictEqual(typeTriangle(4, 3, 4), "Segitiga sama sisi");
  console.log("test")
} catch (error) {
  console.error(error);
}

// best practice triangle.test.js bukan di app.js jadi per bentuk biar macem-macem tidak semua di app.js

// because it's native, when success it shows nothing but when error it shows the error:
// actual - expected
// + 'Segitiga sama kaki'
// - 'Segitiga sama sisi'