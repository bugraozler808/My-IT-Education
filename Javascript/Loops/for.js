// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****");

for (let i = 1; i < 100; i++) {
  console.log("Cohort 14");
}

for (let i = 1; i < 100; i *= 2) {
  console.log(`${i}-FS14`);
}
// for(let i = 1; i<100; i*=2 ){
//     console.log(`${i}-FS14`);
// }
//  1-FS14
//  2-FS14
//  4-FS14
//  8-FS14
//  16-FS14
//  32-FS14
//  64-FS14

//? 1 DEN N KADAR SAYILARI TOPLAYAN KODU YAZINIZ.

const n = prompt("enter your number");
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
  console.log(`sum: ${sum}`);
}

// 0-100 arasında n adet rasgele tamsayı üreten kodu yazınız.

const number = prompt("how many numbers");
// Math.random() 0-1 arasında rasgele sayı uretir
for (let sayac = 1; sayac <= number; sayac++) {
  const rasgelesayı = Math.round(Math.random() * 100);
  console.log(`${sayac}. sayınız : ${rasgelesayı}`);
}

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.
