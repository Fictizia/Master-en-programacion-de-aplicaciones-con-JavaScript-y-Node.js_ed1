// 1 - Junta estos tres Arrays ["Oscar", ...], [9897667, ...], [false, ...] de tal forma que construyan un único Array anidado [["Oscar", 9897667, false], [etc...]]

// Variante (Diferentes longitudes)

function joinArrays(people, ids, smoker) {

    if(Array.isArray(people) && Array.isArray(ids) && Array.isArray(smoker)){

        var i = 0;

        people.forEach(function (element,i,array) {

            array[i] = [element];

            if(ids[i] || ids[i] === false){
                array[i].push(ids[i]);
            }else{
                array[i].push(null);
            }
            if(smoker[i] || smoker[i] === false){
                array[i].push(smoker[i]);
            }else{
                array[i].push(null);
            }

            i++;
        });

    }else{
        console.log("You must to enter 3 arrays as parameters!");
    }
    console.log(people);
}

// 2 - Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares.
//Opcional: Ordena los números pares e impares en sus respectivos arrays

function randomNumber() {
	var number = Math.random() * (100 - 1) + 1;
    return Math.round(number);
}

function oddAndEvenRandomNumbers() {

    console.log("Array con 100 numeros aleatorios.\n");
    var numbers = new Array(100);
    for (var i = 0; i < numbers.length; i++) {
    	numbers[i] = randomNumber()
    }
    console.log(numbers);

    //array con nuemros impares
    console.log("Array con los numero pares.\n");
    odds = numbers.filter(function(element) {
    	return element%2 != 0
    });
    odds = odds.sort();
    console.log(odds);

    //array con nuemros pares
    console.log("Array con los numero pares.\n");
    evens = numbers.filter(function(element) {
    	return element%2 == 0
    });
    evens = evens.sort();
    console.log(evens);
}

// 3 - Vamos a gestionar la lista de asistentes de un evento.

// Características:

// Cada asistente recibirá el identificador de su posición en el Array.
// El identificador no puede cambiar una vez reservado el asiento.
// Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
// Los nuevos asistentes seran asigandos primero a asientos desocupados.
// Opcional:

// Verifica antes de asignar un asistente que no se registro previamente.

var Event = {
  listParticipants: [],
  removeParticipant: function(name) {
    var position = this.listParticipants.indexOf(name);
    if (position !== -1) {
      this.listParticipants[position] = "";
      console.log("The participant has been successfully removed");
      console.log(this.listParticipants.toString());
    } else {
      console.log("OH! The participant don't exist!");
    }
  },

  addParticipant: function(name) {
    if (this.listParticipants.length != 0) {
      if (this.listParticipants.indexOf(name) == -1) { // checks that the participant isn't already registed
        var position = this.listParticipants.indexOf(""); // get the position of the first empty position
        if (position == -1) { // if there are no empty positions push the participant into the list
          this.listParticipants.push(name);
          console.log("The participant has been successfully registed");
          console.log(this.listParticipants.toString());
        } else { // else, I get the first empty position and insert it in.
          this.listParticipants[position] = name;
          console.log("The participant has been successfully registed");
          console.log(this.listParticipants.toString());
        }
      } else {
        console.log("The participant has been registed already");
      }
    } else {
      this.listParticipants.push(name);
      console.log("The participant has been successfully registed");
      console.log(this.listParticipants.toString());
    }
  }
};
