//1 - Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.
      
      var cadena = "hola pepe hola pepe pipa hola hol adios hola";
      var buscar = "hola";
      var con = 0;
      
      var pos = cadena.indexOf(buscar);
      
      while(pos != -1) {
         con++;
         pos = cadena.indexOf(buscar, pos + 1);
      }
      
      console.log("La cadena '" + buscar + "' aparece " + con + " veces");