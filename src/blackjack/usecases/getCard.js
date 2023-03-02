/**
 * Esta funcion recibe un deck y retorna una carta
 * @param {Array<String>} deck Es un arreglo de String
 * @returns {String} retorna una carta de la baraja
 */


//pedir carta
export const getCard = ( deck ) => {
  if(!deck || deck.length === 0) throw 'No hay cartas en el deck';
  return deck.pop();
}
