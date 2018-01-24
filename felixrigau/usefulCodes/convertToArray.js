//Option 1

var elementList; //Any object that is a list of elements but is not an array object. For instance: NodeList

var nodesArray = Array.prototype.slice.call(elementList);

//Option 2
var nodesArray = [].slice.call(elementList);
