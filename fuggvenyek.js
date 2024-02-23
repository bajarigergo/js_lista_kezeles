export function lista_kiir(SZEMELYLISTA) {
  for (let index = 0; index < SZEMELYLISTA.length; index++) {
    console.log(`${SZEMELYLISTA[index].nev} tel:${SZEMELYLISTA[index].tel}`);
  }
}


export function cardOsszeallit(LISTA) {
    let txt = "<div>";
    for (let index = 0; index < LISTA.length; index++) {
      txt += `<div><p>Név: ${LISTA[index].nev}</p>`;
      txt += `<p>Tel: ${LISTA[index].tel}</p>`;
      txt += `<p>Kor: ${LISTA[index].kor}</p></div>`;
    }
    txt += "</div>";
    console.log(txt);
    return txt;
  }
