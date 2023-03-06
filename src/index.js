let variableSinValor;

let booleano1 = true;
let booleano2 = false;

const PI = 3.14;

const TAU = PI * 2;

let booleanoAnd = (booleano1 && booleano2);

let booleanoNot = (!booleano1);

let booleanoMix0 = ((booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2)));

let incrementarDesp = 2;
resultadoDesp = incrementarDesp++;

let incrementarAntes = 2;
resultadoAntes = ++incrementarAntes;

let contarHasta10_2 = 0;
for (let i = 0; i <= 10; i++) {
    contarHasta10_2 = i;
};

let postI = 0;
let postJ = 0;
for (let i = 0; i <= 10; i++) {
    postI = postI + postJ++;
};

let sumaPares = 0;
for (let i = 0; i < 10; i++){
    if (i % 2 === 0) {
        sumaPares += i;
    };
    console.log(sumaPares)
};

let variableValorNumerico = 2;

const MiNombre = "tu nombre";

const MiNumeroFav = 0;

let booleanoOr = (booleano1 || booleano2);

let booleanoMix1 = ((booleano1 && (TAU/2 === PI)) || (variableValorNumerico >= MiNumeroFav));

let seisNoEsNueve = (6 !== 9);

var booleanoMix2 = ((variableValorNumerico > 0) || variableValorNumerico < -(MiNumeroFav * TAU));

let valorSuma = (MiNumeroFav + variableValorNumerico);

let valorResta = (MiNumeroFav - variableValorNumerico);

let valorMultiplicacion = (MiNumeroFav * variableValorNumerico);

let valorDivision = (MiNumeroFav / 3);

let contarHasta10 = 0;
while (contarHasta10 < 10){
    contarHasta10++;
};

let preI = 0;
let preJ = 0;
for (let i = 0; i < 11; i++){
    preI += ++preJ;
};

let sumaImpares = 0;
for (let i = 0; i < 10; i++){
    if (i % 2 !== 0){
        sumaImpares += i;
    }
};