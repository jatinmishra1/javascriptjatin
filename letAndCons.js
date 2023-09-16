
let a=100;
console.log(a);

//see when code runs for memory execution conetxt ..memory to variable is alloted in different zone not in global execution context
//and  we can acess only these let values only they rae initialzed ,hence from time of memory allocation of let to initialization
//phase is known as Temporal Dead Zone
//see there is seperate space for let and cost they are not initialized in gloabl execution context
//see if you initialize some variable with var they got to attached with window object ...so you can acees them in console by doing
//window.var
//but this is not true for let and const becuase they are initialized in differenr space


//there are major three types of Error
//1-typeError--in this you are changing the value of constant variable
//2-Syntax Error---this occurs when you do not initialize const value you just do like [const b;] which i swrong//missing synatax
//or you want to re-declare
//3-reference error----when js engine tries to find out specific variable and it does not able to find it
