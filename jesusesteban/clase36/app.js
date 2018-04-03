		function saveItem(){

			// Inputs
		    var nombre = document.getElementById("name").value;
		    var telefono = document.getElementById("phone").value;
		    var dataTable = document.getElementById("data-table");
			
			// Guardamos los datos en localstorage
			localStorage.setItem('nombre', nombre);
			localStorage.setItem('telefono', telefono);
			

			// Mostramos los datos en el HTML	
			var dataNombre = localStorage.getItem('nombre');
			var dataTelefono = localStorage.getItem('telefono');

			document.getElementById("data-nombre").innerHTML = dataNombre;
			document.getElementById("data-telefono").innerHTML = dataTelefono;
			
			
		}



	    //Click boton
	    document.getElementById("anadir").addEventListener("click", function(){
            saveItem();
        });
	    
	    
	    
	    
	    /*
	    document.getElementById("anadir").addEventListener("click", function(){
            var nombre = document.getElementById("name").value;
            var telefono = document.getElementById("phone").value;
            localStorage.setItem("Nombre", nombre);
            localStorage.setItem("Teléfono", telefono);
        });
	    */

     //   // Borrar Contacto
	    // document.getElementById("delete").addEventListener("click", function(){
     //       var nombre = document.getElementById("name").value;
     //       var telefono = document.getElementById("phone").value;
     //       localStorage.removeItem(nombre);
     //       localStorage.removeItem(telefono);
     //   });

     //   // BorrarTodo
	    // document.getElementById("delete-all").addEventListener("click", function(){
     //       localStorage.clear();
     //   });

     //   // RecuperarContacto
	    // document.getElementById("recovery").addEventListener("click", function(){
     //       var nombre = document.getElementById("name").value;
     //       var telefono = document.getElementById("phone").value;
     //       localStorage.getItem(nombre);
     //       localStorage.getItem(telefono);
     //   });
	    