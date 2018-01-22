//1 - Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

function countTimesAppears(phrase, character) {

  //var text = Array.prototype.slice.call(phrase);//Convertir el String en un Array
  var text = text.split("");

  var counter = 0;

  text.forEach(function(element) {
    if (element === character) {
      counter++;
    }
  });

  console.log(counter);

}
