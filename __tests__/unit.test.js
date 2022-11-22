// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber tests
test('checks valid phone number', () => {
    expect(functions.isPhoneNumber("541-116-1279")).toBe(true); // should be true
});
test('checks valid phone number', () => {
    expect(functions.isPhoneNumber("111-222-3333")).toBe(true); // should be true
});
test('checks invalid phone number', () => {
    expect(functions.isPhoneNumber("hello")).toBe(false); // should be false
});
test('checks invalid phone number', () => {
    expect(functions.isPhoneNumber("911")).toBe(false); // should be false
});

// isEmail tests
test('checks valid email', () => {
    expect(functions.isEmail("nrejai@ucsd.edu")).toBe(true); // should be true
});
test('checks valid email', () => {
    expect(functions.isEmail("nikkirejai@gmail.com")).toBe(true); // should be true
});
test('checks invalid email', () => {
    expect(functions.isEmail("drake@hotlinebling.come")).toBe(false); // should be false
});
test('checks invalid email', () => {
    expect(functions.isEmail("541-552-1917")).toBe(false); // should be false
});

// isStrongPassword tests
test('checks strong password', () => {
    expect(functions.isStrongPassword("HelloWorld2022")).toBe(true); // should be true
});
test('checks strong password', () => {
    expect(functions.isStrongPassword("CodingMaster99")).toBe(true); // should be true
});
test('checks weak password', () => {
    expect(functions.isStrongPassword("not-valid")).toBe(false); // should be false
});
test('checks weak password', () => {
    expect(functions.isStrongPassword("17")).toBe(false); // should be false
});

// isDate tests
test('checks valid date', () => {
    expect(functions.isDate("10/14/2002")).toBe(true); // should be true
});
test('checks valid date', () => {
    expect(functions.isDate("11/21/2022")).toBe(true); // should be true
});
test('checks invalid date', () => {
    expect(functions.isDate("January 1st, 1999")).toBe(false); // should be false
});
test('checks invalid date', () => {
    expect(functions.isDate("Thanksgiving")).toBe(false); // should be false
});

// // isHexColor tests
test('checks valid hex color', () => {
    expect(functions.isHexColor("ABC123")).toBe(true); // should be true
});
test('checks valid hex color', () => {
    expect(functions.isHexColor("FFFFFF")).toBe(true); // should be true
});
test('checks invalid hex color', () => {
    expect(functions.isHexColor("white")).toBe(false); // should be false
});
test('checks invalid hex color', () => {
    expect(functions.isHexColor("lavendar")).toBe(false); // should be false
});