const telephoneCheckBrazil = require('./telefoneBrasil.js');
 
//Testa números válidos:
test('Números válidos', () => {
  expect(telephoneCheckBrazil("1111111111")).toBe(true);
  expect(telephoneCheckBrazil("11911111111")).toBe(true);
  expect(telephoneCheckBrazil("11 1111 1111")).toBe(true);
  expect(telephoneCheckBrazil("11 911111111")).toBe(true);
  expect(telephoneCheckBrazil("(11) 1111-1111")).toBe(true);
  expect(telephoneCheckBrazil("(11) 911111111")).toBe(true);
  expect(telephoneCheckBrazil("(11) 91111-1111")).toBe(true);
  expect(telephoneCheckBrazil("(11) 9 11111111")).toBe(true);
  expect(telephoneCheckBrazil("(11) 9 1111 1111")).toBe(true);
});
//Testa números inválidos:
test('Números inválidos', () => {
    expect(telephoneCheckBrazil("(11) 8 21111 11111")).toBe(false);
    expect(telephoneCheckBrazil("(11) 9 21111 11111")).toBe(false);
    expect(telephoneCheckBrazil("(11) 9 21111 1111")).toBe(false);
    expect(telephoneCheckBrazil("(aaaaaaaaaaa")).toBe(false);
    expect(telephoneCheckBrazil("(aa)a aaaaa aaaa")).toBe(false);
    expect(telephoneCheckBrazil("(aa) a aaaa1a aaaa")).toBe(false);
  });
