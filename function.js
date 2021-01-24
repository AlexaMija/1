import { num, array, string, arrayOfStrings } from "./config.js";
/* function random (min, max) {} Broj koji je veci ili jednak sa min ili
manji ili jednak sa max. Sme da primi samo broj, Potrebno je validirati
ulazne parametre, ispisati gresku*/
var result = " "
function random(min, max) {
  if (typeof != number) {
  return "Error! It's not a number!"
  }
return Math.floor(Math.random() * (max - min + 1) + min);
  return result
}
console.log(random(num))
/*Potrebno je vratiti najmanji broj koji se nalazi u nizu (array.length >5)
Niz ne mora da bude samo niz brojeva vec moze da sadrzi bilo sta kao clan niza
U slucaju da ne postoji ni jedan broj u nizu vratiti false. Potrebno je
validirati f-iju i prikazati adekvatnu gresku u slucaju neispravno unetog
niza. */
function minIntegerFromArray(array) {
  if (array.length != number) {
    return false
  } else {
    return Math.min(...array)
  }
    console.log(minIntegerFromArray(array))
/* return Math.min.apply (Math, nums)
  !!!Da li je potrebno i Math.min.apply (null, nums)
 ili ovde moze i spred operator
  */

/*funkcija minIntegerFromString(string){} U stringu >=10 karaktera.
funckija mora da proveri da li u stringu postoje celi brojevi
i da kao rezultat vrati najmanji OD postojacih brojeva ili false ako nije
nadjen ni jedan. Potrebno je validirati f-iju i pokazati adekvatnu gresku
u slucaju neispravno unetog stringa. */
var result = ""
function minIntegerFromString(string) {
  if (string.length != number) {
    return result
  } else {
    if (string.includes(number))
    return Math.min(...string)
  }
}
}
console.log(minIntegerFromArray(string))
//return String.prototype.split(string)//
/* Funkcija ima dva ulazna paramtera, prvi je niz stringova, a drugi je tip
koji moze imati vrednost 0 ili 1. Funkcija kao rezultat treba da vrati
sve stringove koji su uneti spojene u jedan, ali po odredjenom redosledu.
redosled se odredjuje prema odredjenom tipu.Za tip 0 vraca se string
spojen od najmanjeg ka najvecem, za tip 1 vraca od najveceg ka najmanjem*/
function concatStringByLength(arrayOfStrings, type) {
var array1 = arrayOfStrings.sort
var array2 = arrayOfStrings.reverse
};
console.log(concatStringByLength(array1))
console.log(concatStringByLength(array2))
