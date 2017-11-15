var texto = `Minions ipsum poopayee gelatooo baboiii hahaha butt tank yuuu! 
Para tú. Underweaaar aaaaaah bee do bee do bee do tulaliloo bananaaaa 
po kass uuuhhh me want bananaaa! Hahaha tank yuuu! Hana dul sae chasy 
wiiiii tatata bala tu uuuhhh underweaaar bananaaaa poulet tikka masala 
para tú jiji hana dul sae. Aaaaaah tank yuuu! 
Baboiii belloo! Baboiii daa hana dul sae belloo! Me want bananaaa!`;
var separador = " ";
var bananas = dividirCadena(texto, separador);

function dividirCadena(texto,separador) {
   var miBanana = texto.split(separador);
   return miBanana;
}

function dameBanana(elemento) {
  return elemento === 'bananaaaa';
}
var filtrados = bananas.filter(dameBanana);

function tamañoValido(elemento) {
  return elemento === 10;
}
var filtrados = [true, 134, 10, 0, null, "Hola"].filter(tamañoValido);