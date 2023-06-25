const arr = new Array(100, true, "CW");
console.log(arr);

const arrtwo = new Array(10);
console.log(arrtwo);

const arrthree = [100, "CW", false];
console.log(arrthree);

const colors = ["RED", "GREEN", "BLUE"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[colors.length - 2]);
// sondan ikinci elemanı getir

// Array is Array

const colorsone = ["RED", "GREEN", "BLUE"];
console.log(typeof colorsone);

console.log(Array.isArray(colorsone));
console.log(colors instanceof Array);

const variables = "1";
console.log(Array.isArray(variables));
console.log(variables instanceof Array);

let str = "Brown";
str[0] = "b";
console.log(str);

const change = ["BLUE", "GREEN", "BROWN"];
change[1] = "gray";
console.log(change);
let a = "PINK";
change[3] = a;
console.log(change);
