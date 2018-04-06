
// Creamos un array vacio para añadir todos los contactos que vayamos creando
var contactos = [];

// ADD CONTACT
function addContact(contacto){

	// Inputs
    var nombre = document.getElementById("name").value,
        telefono = document.getElementById("phone").value,
        mail = document.getElementById("mail").value;
	
    // var contacto
    var contacto = {
        nombre: nombre,
        telefono: telefono,
        mail: mail
    };

	
    // Guardamos los datos en localstorage
    if (nombre && telefono && mail) {
        contactos.push(contacto);
        localStorage.setItem("contactos",JSON.stringify(contactos));
        printContact(contacto, contactos.length -1);
        return true;
    }else {
        console.log("NO guarda los datos");
        return false;
    }



}

// Mostramos los datos en el HTML	
function printContact(contacto, indice){

    var dataTable = document.querySelector(".data-table");
    dataTable.innerHTML += 
        "<li class=\"data-list\" data-id=\""+indice+"\">"+
            "<span class=\"data-nombre\">"+"Nombre: "+contacto.nombre+"</span>"+
            "<span class=\"data-telefono\">"+"Teléfono: "+contacto.telefono+"</span>"+
            "<span class=\"data-mail\">"+"Mail: "+contacto.mail+"</span>"+
            "<button data-delete=\""+indice+"\" type=\"button\" class=\"delete btn btn-danger\">"+ "Borrar Contacto"+"</button>"+
        "</li>";
}

document.getElementById("anadir").addEventListener("click", function(){
    addContact();
});


// Borramos un contacto
function deleteContact(){


}

document.querySelector(".data-table").addEventListener("click", function(){
    deleteContact();
});


// Borramos todos los contactos 
function deleteAll(){
    localStorage.clear();
    
    var deleteAll = document.querySelectorAll('.data-table li');
    for(var i=0; li=deleteAll[i]; i++) {
        li.parentNode.removeChild(li);
    }    
}

document.getElementById("delete-all").addEventListener("click", function(){
    deleteAll();
});



// Recuperamos un contacto 
function recoveryContact(){
    console.log("Recuperar contacto");
}

document.getElementById("recovery").addEventListener("click", function(){
    recoveryContact();
});
