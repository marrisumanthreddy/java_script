//function declaration
 function add(a,b){
    return a+b;
 }
 console.log(add(4,7));

//
 console.log(sub(3,7));
 function sub(x,y){
    return x-y;
 }

 // function expression
//ex:1
/* const multiply= function(g,h){
   return g*h;
 }
console.log(multiply(7,3));*/

//ex:2
/*console.log(multiply(7,3));// cannot access 'multiply' before the intialization.
const multiply= function(g,h){
   return g*h;
 }*/

//ex:3
 /*var multiply=function(g,h){
    return g*h;
 }
console.log(multiply(7,3))
*/

//difference declaration and expression
console.log(declared());
function declared(){
    return "Iam a Declared Function!";
}//output: Iam a Declared Function!

console.log(expression());
const expression=function(){
    return"Iam a Expression Function";
}//output:cannot access 'expression' before initialization.

