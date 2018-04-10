### Ejercicio de expresión regular para dni:

**REGEX para DNI:** Con letra en mayúscula o minúscula:

"^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKETa-z]{1}$"

**REGEX para DNI o NIE:** Con letras en mayúscula o minúscula:

(^[X|x]?[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKETa-z]{1}$)|(^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKETa-z]{1}$)

Refactorizar, pero para que pille el NIE y DNI tanto nuevo como antiguso(nies...):
([XYZxyz]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKEtrwagmyfpdxbnjzsqvhlcke]|[Xx]{1}[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKEtrwagmyfpdxbnjzsqvhlcke]{1})|([0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKEtrwagmyfpdxbnjzsqvhlcke]{1})

