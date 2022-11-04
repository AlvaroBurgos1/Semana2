'user strict'

function Ejercicio1(){
  
  let i=1;
  let mod=2;
  while(i<=100){
    if(i%mod==0){
      console.log("numero: "+i);
    }
    i++;
  }
  
  }
  


function Ejercicio2(){

  let i=1;
  let cont=0;
  while(i<=150){
      cont=cont+i;
       i++;
  }
  console.log("La sumatoria de 1 a 150 es: "+cont);

}

function Ejercicio3(){
  'user strict'
const miArray=new Array();
var num;
// ciclo del 1 al 10
for(let i=0;i<=9;i++)
{
    let name = prompt("Introduce un numero");
    miArray.push(name);
}
//document.write(miArray);
console.log("Los números leidos son: "+ miArray);


let array = miArray; //este es otro arreglo para ver si se podia copiar
console.log("Este es mi otro arreglo: "+ array); //esta es la prueba de que si lo hace

let sum = 0;
for (let i = 0; i < array.length; i++) {
    num= parseInt(array[i]);
    sum=sum+num;
}
console.log("Los 10 productos cuestan: " +sum);

}


function Ejercicio6(){
  'user strict'
  const miArray=new Array();
  var num;
  let sum = 0;
  let n = prompt("Cuantas notas deseas registrar:");
      
  for(let i=1;i<=n;i++)
  {
      let name = prompt("Introduce la nota numero : "+i);
      miArray.push(name);
  }
  
  document.write("Las notas registradas son: "+ miArray);

}

function Ejercicio5(){
  let i=1;
let mod=3;
let n=0;
while(i<=50){
  console.log("numero: "+i);
  if(i%mod==0){
   
    n++;
  }
  i++;
}
console.log("la cantidad de numeros multiplos de 3 es: "+n)
}


function Ejercicio7(){

  const miArray=new Array();
  let num=0;
  let sum = 0;
  let n = prompt("Cuantas numeros deseas registrar:");
  let mod=2;
      
  for(let i=1;i<=n;i++)
  {
      let name = prompt("Introduce el numero : "+i);
      miArray.push(name);
  }
  
  
  
  for (let i = 0; i < miArray.length; i++) {
      if(miArray[i]%mod!=0){
     
          num++;
        }
    }
  document.write("Las numeros registrados son: "+ miArray+"<br>");
  document.write("los impares son: "+ num);

}


function Ejercicio8(){


const miArray=new Array();
let num=0;
let sum = 0;
let n = prompt("Cuantas numeros deseas registrar:");
let mod=2;
    
for(let i=1;i<=n;i++)
{
    let name = prompt("Introduce el numero : "+i);
    miArray.push(name);
}

let m = Math.min.apply(null, miArray);
console.log(m);

for (let i = 0; i < miArray.length; i++) {
    document.write("sueldo registrado: "+ miArray[i]+"<br>");
  }

document.write("el sueldo mas bajo es: "+ m);

}


function Ejercicio9 (){

  'user strict'

  let num=1;
  let b = 0;
  let e = 0;
  b = prompt("Ingresa la base:");
  e = prompt("Ingresa el exponente:");
  
      
  for(let i=1;i<=e;i++)
  {
    num=num*b;  
  }
  
  document.write(b+" elevado a "+e+" es: "+ num);

}


function Ejercicio10(){

  'user strict'
const miArray=new Array();
var num;
let sum = 0;
let n = prompt("de que tamaño quiere el arreglo:");
    
for(let i=1;i<=n;i++)
{
    let name = Math.floor(Math.random() * 2) ;
    miArray.push(name);
}

console.log("el arreglo es: "+ miArray);


}

function Ejercicio11(){
  'user strict'
const miArray=new Array();
var num;
let sum = 0;
let n = prompt("Ingresar un valor impar para el tamaño del arreglo:");
while( n %2==0){
    alert("EL NUMERO INGRESADO DEBE SER IMPAR")
     n = prompt("2 de que tamaño quiere el arreglo:");
} 

for(let i=1;i<=n;i++)
{
    let name = i* 2 ;
    miArray.push(name);
}

console.log("el arreglo es: "+ miArray);



}

function Ejercicio12(){
  'user strict'
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i <= 100; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);

}

function Ejercicio13(){

const miArray=new Array();
var num;
let sum = 0;
let i=1;
let n =1;
while( n <=100){
   
     if(i %2==0){
        miArray.push(i);
        n++;
        sum=sum+i;
     }
     i++;
} 
console.log("el arreglo es: "+ miArray);
console.log("la suma es: "+ sum);

}

function Ejercicio14(){

   const miArray=new Array();
   let num=0;
   let sum = 0;
   let n = prompt("Cuantas numeros deseas registrar:");
   let mod=2;
       
   for(let i=1;i<=n;i++)
   {
       let name = prompt("Introduce el numero : "+i);
       miArray.push(name);
   }
   
   for (let i = 0; i < miArray.length; i++) {
       if(miArray[i]<0){
      
           num++;
         }
         else{
           sum++;
         }
     }
   document.write("Las numeros registrados son: "+ miArray+"<br>");
   document.write("los negativos son: "+ num);
   document.write(" y los positivos son: "+ sum);
   }
