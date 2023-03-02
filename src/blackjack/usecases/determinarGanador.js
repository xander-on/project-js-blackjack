


export const determinarGanador = ( puntosJugadores ) => {

  const [ puntosJugador1, puntosComputadora ] = puntosJugadores;

  setTimeout(()=>{
    if( puntosJugador1 === puntosComputadora ){
      alert(`Empate`);
    }else if( puntosJugador1 > 21 || puntosComputadora < 22 && puntosComputadora > puntosJugador1){
      alert('la computadora gana 🖥');
    }else {
      alert('🏆 Ganaste!!!');
    }
  } ,60 );
}
