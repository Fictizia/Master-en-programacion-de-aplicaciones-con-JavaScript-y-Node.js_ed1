Es un proveedor de servicios de google que da servicios, los llamados 'pain in the ass', para que sea menos doloroso.
No es sólo una bbdd, es una suite de servicios, y especialmente un back como servicio.

podemos tener autentificación analíticas, reportes, bbdd en tiempo real, almacenamiento de archivos, hosting..... cosas que normalmente
se desarrolla en back, y 
te das de alta
instalas las dependencias de node 'npm install firebase -save'
                                  'npm install firebase -admin'
                                  
guardar datos:
metodo set() si hay algo lo piso y si no hay nada lo creo. 
update() actualiza y no mata lo que haya
push() crea un identificador para lo que metes
transaction() quiero meter 3 cosas del tirón y no quiero que haya ningún proceso en medio, se meten y luego lo demás
set()

mar ref = new Firevase("https:// url...");
var userRef = ref.child("users");
userRef.set({
    name: John;
    age : 26;
})

EVENTOS

Hay un nuevo evento! Value! es básicamente un evento q reacciona cuando hay un cambio. Para ello se utiliza snapshot, al q se le aplica el metodo
val:
snapshot.val() : nos trae una instantanea del estado de la bbdd en el momento.
Evento child_changed
chil_removed
once() Una vez
on() Todas las veces.

para quitar todos los eventos ref.off()


Boton desloguearte: ref.unaut()