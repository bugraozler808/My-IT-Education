// ===========================================
//                FOR  LOOP
// ===========================================
console.log("**** LOOPS IN ARRAYS");

const rakamlar = [13, 5, 89, 54, 2];
let toplam = 0;
for (let i = 0; i < rakamlar.length; i++) {
  toplam += rakamlar[i];
  console.log(toplam);
}

// gredes'in ortalamasını hesaplayınız.

const grades = [55, 77, 23, 89, 100, 44, 33];
let plus = 0;
for (let a = 0; a < grades.length; a++) {
  plus += grades[a];
}
console.log("AVG:", (plus / grades.length).toFixed(1));
