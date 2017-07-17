<<<<<<< HEAD
var mostrar=function(texto){
    document.write(texto);
    document.write("<hr>");    
}

var mercurio=3;
var venus=8;
var tierra=10;
var marte=4;
var jupiter=25;
var saturno=10;
var urano=8;
var neptuno=11;

var nombre = prompt("Cuál es tu nombre?");

var masa = parseInt(prompt("Cuál es tu masa?"));

var planeta = prompt("¿Qué planeta te gustaría saber tu peso?");


=======

if(planeta == "mercurio"){
var peso = mercurio*masa;
    mostrar("Hola" + nombre + ". Tu peso es  " + peso + " Klg en " + planeta);
}

if(planeta == "venus"){
var peso = venus*masa;
    mostrar("Hola" + nombre + ". Tu peso es  " + peso + " Klg en " + planeta);
}

if(planeta == "tierra"){
var peso = tierra*masa;
    mostrar("Hola" + nombre + ". Tu peso es  " + peso + " Klg en " + planeta);
}
>>>>>>> 93edbde34f573a03ee7ca81a7f6c4546fa7e3f80
