//function along with lexical bundeled togheter form a closures
function x(){
    var x=7;
    function y(){
        console.log(x);
    }
    return y;
}
var fxn=x();
console.log(x)
console.log(fxn);
fxn();

//advantages of clousers
//it is used in function currying
//it is used in once function
//it is used in function currying

//disadvantages
//it uses a lot of memmory as it all time it form clousres which may reuire scope of its parent to parent to parent

//garbage collectors--are somthing which freezes the  utilized memory and free  that memory so that can  used elsewhere

//how garbage collectors and closures are connected