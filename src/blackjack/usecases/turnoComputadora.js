
import { getCard, acumularPuntos, mostrarImgCarta, determinarGanador } from "./";


/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, $puntajesHTML, deck, puntosJugadores, $divShowCartas ) => {

  if( !puntosMinimos ) throw new Error('puntosMinimos son necesario');
  if( !$puntajesHTML )   throw new Error('Argumento puntosHTML es necesario');
  if( !deck )          throw new Error('El Deck es necesario');

  let puntosComputadora = 0;
  let turnoComputadora = puntosJugadores.length - 1;
  do{
    const carta = getCard(deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores, turnoComputadora, $puntajesHTML);
    mostrarImgCarta( carta, turnoComputadora, $divShowCartas )
  }while( puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  determinarGanador( puntosJugadores );
}
