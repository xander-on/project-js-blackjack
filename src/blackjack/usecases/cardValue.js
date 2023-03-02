
/**
 * Recibe un String y devuelve el valor de dicha carta
 * @param {String} carta Es un string con el nombre de la carta 
 * @returns {Number} Valor de la carta
 */

export const cardValue = ( carta ) =>{
  let valor = carta.slice(0, -1);

  return isNaN( valor ) 
          ? valor === 'A'
            ? 11
            : 10
          : parseInt(valor);
}