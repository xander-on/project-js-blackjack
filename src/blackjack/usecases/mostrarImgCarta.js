export const mostrarImgCarta = (carta, turno, $divShowCartas) => {

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  $divShowCartas[turno].append(imgCarta);
}