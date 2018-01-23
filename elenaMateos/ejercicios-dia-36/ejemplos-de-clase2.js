(function(){
/* -- Necesitaremos:
---- EDITAR Y BORRAR ---
*/
// Selectores
var slcTarea = document.getElementById("tarea")
var slcLista = document.getElementById("lista")
var slcTextInfo = document.getElementById("txt-info")

// Funciones
function updateList(value){
  var currentTasks = JSON.parse(localStorage.getItem("tareas")) || [];
  var now = new Date();
  var taskId = "tr-"+now.getTime()
  var taskContent =  {
    "title": value,
    "date": now.getTime(),
    "id": taskId
}
  currentTasks.push(taskContent)
  localStorage.setItem("tareas", JSON.stringify(currentTasks))
  localStorage.setItem(taskId, JSON.stringify(taskContent))
  updateHtml(value);
}

function updateHtml(item){
  slcTextInfo.style.display = "none";
  slcLista.innerHTML += `<li data-id="${item.id}">${item.title} [ <span data-action="edit">editar</span> | <span data-action="delete">Borrar</span> ]</li>`;
}

// Eventos
slcTarea.addEventListener("keypress", function(e){
  if(e.keyCode === 13){
    updateList(slcTarea.value.trim())
    slcTarea.value = "";
  }
} )

slcLista.addEventListener("click", function(e){
  if(e.target.nodeName === "SPAN"){
    var actionRequested = e.target.getAttribute("data-action");
    var idRequested = e.target.parentNode.getAttribute("data-id")
    console.log("Me pides...", actionRequested, "en", idRequested);
  }


})

// Arranque
var items = JSON.parse(localStorage.getItem("tareas"))
if(Array.isArray(items)){
  items.forEach(function(item){
    updateHtml(item)
  })
} else {
  slcTextInfo.style.display = "block"
}

})()
