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


if(planeta == "marte"){
var peso = marte*masa;
    mostra("Hola" + nombre + ". Tu peso es " + peso + " kilogramos en " + planeta);
}

if(planeta == "jupiter"){
var peso = jupiter*masa;
     mostra("Hola" + nombre + ". Tu peso es " + peso + " kilogramos en " + planeta);
}

if(planeta == "saturno"){
var peso = saturno*masa;
    mostra("Hola" + nombre + ". Tu peso es " + peso + " kilogramos en " + planeta);}

if(planeta == "urano"){
var peso = urano*masa;
     mostra("Hola" +nombre + ". Tu peso es " + peso + " kilogramos en " + planeta);
}

if(planeta == "neptuno"){
var peso = neptuno*masa;
     mostra("Hola" +nombre + ". Tu peso es " + peso + " kilogramos en " + planeta);
}
if(planeta == "mercurio"){
var peso = mercurio*masa;
    alert("Hola " + nombre + ". Tu peso es  " + peso + " kilogramos en " + planeta);
}
if(planeta == "venus"){
var peso = venus*masa;
    alert("Hola " + nombre + ". Tu peso es  " + peso + " kilogramos en " + planeta);
}

if(planeta == "tierra"){
var peso = tierra*masa;
    alert("Hola " + nombre + ". Tu peso es  " + peso + " kilogramos en " + planeta);
}
