// Escriba un programa de JavaScript para mostrar el día y la hora actuales en el siguiente formato.
// Hoy es : Lunes.

var today = new Date();
var day = today.getDay();
var daylist = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves ", "Viernes", "Sabado"];

console.log("Hoy es : " + daylist[day] + ".");
