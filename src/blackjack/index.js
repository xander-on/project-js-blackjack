import { 
  crearDeck, 
  acumularPuntos, 
  getCard, 
  turnoComputadora, 
  mostrarImgCarta 
} from './usecases/';

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['J','Q','K','A'];

let puntosJugadores = [];

//referencias DOM
const $btnPedir   = document.querySelector('#btnPedir');
const $btnDetener = document.querySelector('#btnDetener');
const $btnNuevo   = document.querySelector('#btnNuevo');

const $divShowCartas  = document.querySelectorAll('.divShowCartas');
const $puntajesHTML   = document.querySelectorAll('small');



const blockDisblockbtns = (block) => {
  $btnPedir.disabled = block;
  $btnDetener.disabled = block;
}


const inicializarJuego = ( numeroJugadores = 2 ) => {
  console.clear();
  puntosJugadores = [];
  for( let i = 0; i< numeroJugadores; i++) puntosJugadores.push(0);

  deck = crearDeck(tipos, especiales);
  $puntajesHTML.forEach( elem => elem.innerText = 0 );
  $divShowCartas.forEach( elem => elem.innerHTML = '');

  blockDisblockbtns( false );
}

//eventos
$btnPedir.addEventListener('click', () => {

  const carta = getCard(deck);
  const puntosJugador = acumularPuntos(carta, puntosJugadores, 0, $puntajesHTML);

  mostrarImgCarta(carta, 0, $divShowCartas)

  if( puntosJugador > 21 ){ 
    blockDisblockbtns(true);
    turnoComputadora(puntosJugador, $puntajesHTML, deck, puntosJugadores, $divShowCartas);
  }else if( puntosJugador === 21 ){
    blockDisblockbtns(true);
    turnoComputadora(puntosJugador, $puntajesHTML, deck, puntosJugadores, $divShowCartas);
  }

});


$btnDetener.addEventListener( 'click', () => {
  blockDisblockbtns(true);
  turnoComputadora( puntosJugadores[0], $puntajesHTML, deck, puntosJugadores, $divShowCartas );
});


$btnNuevo.addEventListener( 'click' , () => inicializarJuego() );




