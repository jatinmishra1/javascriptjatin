// execution context is like a big box which is having two component inside it
//one is memory component which stores key->value pair inside it  ..this memory component is also known as variable environment
//so it is sort of component or environment in whichh all the variables and functions are stored in the form of key->value pair
//second is code component ,where code is executed line by ...i.e one line at a time ,it is also nknown as thread of execution
//code is executed in manner one line at time
//js is single threaded synchronous language
//i.e one liine command at a time and in single manner




//when js  code runs execution context got formed
//it has two comp one is memory and one is code comp
//this execution context is created in two phases one is memory creatoion phase,it is very critical phase
//so in this pahse it allot memmory to variable and undefined
//so basically it allocate undefined to variable and stores function as it is in the first go
//after that second phase get started,and js once again goes to the code line by line and now it allocates the actual value to 
//the variables in the memory and now code is going line by lines ...but as soon it gots function invocation....it makes new execution 
//context for that function and this execution conect will again have two componenst memory and code
//now for the function memory creation phase will first happen and then code creation and so on

//call stack
//we have call stcak and global execution context is pushedi inside the stack
//and sfter that as function got invokes their execution context fomred got pushed  into stack and soon as they return their
//code gest comp,thier execution context got deleted and pooped out form stack
//so this call stack is for managing the execution stack
//call stack maintains the order of execution context for all the functions 