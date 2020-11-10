import {config.js} from "./config.js"
/* function random (min, max) {} Broj koji je veci ili jednak sa min ili
manji ili jednak sa max. Sme da primi samo broj, Potrebno je validirati
ulazne parametre, ispisati gresku*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // !!! Da li ovde treba trim () //
return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomIntInclusive(2, 7));
/*Potrebno je vratiti najmanji broj koji se nalazi u nizu (array.length >5)
Niz ne mora da bde samo niy brojeva vec moze da sadrzi bilo sta kao clan niza
U slucaju da ne postoji ni jedan broj u nizu vratiti false. Potrebno je
validirati f-iju i prikayati adekvatnu gresku u slucaju neispravno unetog
niza. */

function minIntegerFromArray(array) {
 return Math.min.apply (Math, nums)
 /* !!!Da li je potrebno i Math.min.apply (null, nums)
 ili ovde moze i spred operator

  Math.min(...array)
  u tom slucaju var je min u configu
  */
}

/*funkcija minIntegerFromString(string){} U stringu >=10 karaktera.
funckija mora da proveri da li u stringu postoje celi brojevi
i da kao rezultat vrati najmanji OD postojacih brojeva ili false ako nije
nadjen ni jedan. Potrebno je validirati f-iju i pokazati adekvatnu gresku
u slucaju neispravno unetog stringa. */
function minIntegerFromString(string) {
  // ne znam//
return String.prototype.split(string)
}
/* Funkcija ima dva ulazna paramtera, prvi je niz stringova, a drugi je tip
koji moze imati vrednost 0 ili 1. Funkcija kao reyultat treba da vrati
sve tringove koji su uneti spojene u jedan, ali po odredjenom redosledu.
redosled se odredjuje premo odredjenom tipu. za tip 0 vraca se string
spojen od najmanjeg ka najvecem, za tip 1 vraca od najveceg ka najmanjem*/
function concatStringByLength(arrayOfStrings, type) {
//ovo su varovi//
 arrayOfStrings.sort
//ovo su varovi//
arrayOfStrings.reverse
}
