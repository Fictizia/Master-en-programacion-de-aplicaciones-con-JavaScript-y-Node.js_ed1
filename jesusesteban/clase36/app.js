// ADD CONTACT
function addContact(){

	// Inputs
    var nombre = document.getElementById("name").value,
        telefono = document.getElementById("phone").value,
        mail = document.getElementById("mail").value,
        dataTable = document.getElementById("data-table");
	
	// Guardamos los datos en localstorage
	
	localStorage.setItem('nombre', nombre);
	localStorage.setItem('telefono', telefono);
	localStorage.setItem('mail', mail);
	
	
	// Mostramos los datos en el HTML	
	var dataNombre = localStorage.getItem('nombre'),
	    dataTelefono = localStorage.getItem('telefono'),
	    dataMail = localStorage.getItem('mail');

    document.querySelector('.data-nombre').innerHTML = dataNombre;
    document.querySelector('.data-telefono').innerHTML = dataTelefono;
    document.querySelector('.data-mail').innerHTML = dataMail;

}

document.getElementById("anadir").addEventListener("click", function(){
    addContact();
});


// DELETE CONTACT
function deleteContact(){
    console.log("Borro un solo contacto");
    localStorage.removeItem('nombre');
    localStorage.removeItem('telefono');
    localStorage.removeItem('mail');
}

document.getElementById("delete").addEventListener("click", function(){
    deleteContact();
});


// DELETE ALL
function deleteAll(){
    console.log("Borro todos los contactos contacto");
    localStorage.clear();
}

document.getElementById("delete-all").addEventListener("click", function(){
    deleteAll();
});



// RECOVERY CONTACT
function recoveryContact(){
    console.log("Recuperar contacto");
    localStorage.getItem('nombre');
    localStorage.getItem('telefono');
    localStorage.getItem('mail');
}

document.getElementById("recovery").addEventListener("click", function(){
    recoveryContact();
});
