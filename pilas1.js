/* INTENTOS EXTRAÑOS 1
var nombres = [];
	

function Stack(nombre, apellido){
	

	this.añadirnombre = function (nombre){
				nombres.push(nombre)
	};
	this.pop=

	
};

var nombre = new Stack();
nombre.push("Roxana");
nombre.push("Roxana");
nombre.push("Roxana");
nombre.push("Roxana");


var nombres = new Nombres ();
nombres.añadirnombre;
nombres.añadirapellido;
*/

var nombres = [];
var nombe = [];
var apellido = [];

function Stack() {
  var items = [];

  this.push = function(element){
    items.push(element);
  };
  this.pop = function(){
    return items.pop();
  };
  this.peek = function() {
    return items[items.length - 1];
  };
  this.isEmpty = function(){
    return items.length == 0;
  };
  this.size = function(){
    return items.length;
  };
  this.clear = function(){
    items = [];
  };
  this.print = function(){
    console.log(items.toString());
  };
}

var nombre = new Pila();
nombre.push("Juan");
nombre.push("Roberto");
nombre.push("Laura");
nombre.push("Ana");
nombre.push("Hanna");

var apellido = new Pila();
apellido.push("Jiménez");
apellido.push("Lara");
apellido.push("Joshu");
apellido.push("Rodriguez")
apellido.push("Azueta");

nombres = nombre.forEach(function(nombres){
		return nombre + apellido;
		})