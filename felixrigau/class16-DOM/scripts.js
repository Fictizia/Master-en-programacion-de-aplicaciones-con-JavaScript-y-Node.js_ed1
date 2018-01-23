// 1 - Saca una lista de los cursos disponibles en Fictizia en las 4 areas de formación y conviertelo en Markdown. Características:
//
// Cada Bloque de cursos debe estar identificado por el título correspondiente.
// Cada curso debe contener el enlace al mismo y especificar el número de horas entre parentesis.
// Tu solución

function showFictiziaCourses() {

  var fictiziaAreas,
      coursesByArea,
      titleArea,
      titleCourse,
      hoursCourse,
      url,
      id;

  //Get the fictizia's areas
  fictiziaAreas = document.querySelector("#areasIndex").children;

  console.log("# Cursos de Fictizia");
  console.log("\n");

  for (var i = 0; i < fictiziaAreas.length; i++) {
    console.log("## "+ fictiziaAreas[i].innerText);
    console.log("\n");

    //Get the fictizia's areas id. ex: web_Tab
    id = fictiziaAreas[i].id.split("_");

    //id[0] gives the common element between tabs's and areas's id. ex: web
    //Find the link <a> that contains the courses list
    coursesAndHoursByArea = document.querySelectorAll("#"+id[0] + "_Area li a");
    console.log("**Total de cursos: "+coursesAndHoursByArea.length+"**\n");
    for (var j = 0; j < coursesAndHoursByArea.length; j++) {
      titleCourse = coursesAndHoursByArea[j].children[0].innerText;
      //Clean 4 unwanted space blanks
      titleCourse = titleCourse.replace("    ","");
      hoursCourse = coursesAndHoursByArea[j].children[1].innerText;
      //Get the number of hours through RegEx
      hoursCourse = hoursCourse.match("[0-9]{1,}");
      url = coursesAndHoursByArea[j].href;
      console.log("- \["+ titleCourse +" \("+ hoursCourse + " horas" +"\)\]\("+ url +"\)");
    }
    console.log("\n");
  }
}

// 2 - Hagamos la web del Metro más divertida.
//
// Saca el estado actual de todas las líneas del metro de Madrid por consola.
// Tu solución
function realStateMadridMetroLines() {
  var lines = document.querySelectorAll(".txt a");
  for (var i = 0; i < lines.length; i++) {
    console.log(lines[i].innerText);
    console.log("\n");
  }
}

// 3 - Diseña un script que sustituya todas las imágenes de las entradas de Tecnología del Mundo Today por imágenes dummy de gatitos.
//
// Tu solución
//http://www.elmundotoday.com/noticias/tecnologia/

function minionsParty() {
  images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].src = "https://www.neostuff.net/wp-content/uploads/2013/07/nombres-de-minions-personajes-y-curiosidades.jpg";
    images[i].srcset = "https://www.neostuff.net/wp-content/uploads/2013/07/nombres-de-minions-personajes-y-curiosidades.jpg";
  }
}
