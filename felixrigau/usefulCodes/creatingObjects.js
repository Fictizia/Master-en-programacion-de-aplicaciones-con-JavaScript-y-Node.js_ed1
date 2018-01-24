//*************************** BUILDIN AND DEFINING A JAVASCRIPT OBJECT *****************************

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name's: " + this.name);
};

var felix = new Person("Felix Pablo");

//A OTHER OBJECT

function Developer(tecnologies) {
  this.tecnologies = tecnologies;
}

Developer.prototype.showTecnologies = function () {
  console.log(this.tecnologies.join());
};

// INHERIRANCE BETWEEN OBJECTS

Developer.prototype = Object.create(Person.prototype);
