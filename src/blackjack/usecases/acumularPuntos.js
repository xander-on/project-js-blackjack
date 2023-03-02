import { cardValue } from './';



// turno 0 = primer jugador y el ultimo sera la compu
export const acumularPuntos = ( carta, puntosJugadores, turno, $puntajes ) => {
  puntosJugadores[turno] = puntosJugadores[turno] + cardValue(carta);
  $puntajes[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
}