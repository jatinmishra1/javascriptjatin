// getName();
// // console.log(getNames)
// console.log(x);
// var  x=10;
// function getName (){
//     console.log("my name is mishra ji")
// }


//so hoisting is the phenomenon in the js by using which you can access the variables even before initializing it and will not get an error

var c=100;
function a(){
   
   c=90;
    function b(){
        console.log(c)
        
    }
    b();
    console.log(b);

}
console.log(c)
a();
var b=10;
