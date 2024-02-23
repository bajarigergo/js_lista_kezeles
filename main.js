import { SZEMELYLISTA } from "./adat.js";
import { lista_kiir, cardOsszeallit } from "./fuggvenyek.js";

console.log(SZEMELYLISTA);

lista_kiir(SZEMELYLISTA);

const LISTAELEM = document.getElementById("lista");
console.log(LISTAELEM);

LISTAELEM.innerHTML = "<h3>Címlista</h3>";
LISTAELEM.innerHTML += listaOsszeallit(SZEMELYLISTA);

function listaOsszeallit(LISTA) {
  let txt = "<ul>";
  for (let index = 0; index < LISTA.length; index++) {
    txt += `<li>${LISTA[index].nev} tel:${LISTA[index].tel}</li>`;
  }
  txt += "</ul>";
  console.log(txt);
  return txt;
}

const KARTYA = document.getElementById("cardContainer");
console.log(KARTYA);

KARTYA.innerHTML = "<h3>Kártya</h3>";
KARTYA.innerHTML += cardOsszeallit(SZEMELYLISTA);
