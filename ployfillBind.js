let name={
    firstname:"jatin",
    lastname:"mishra"
}

let printfuntion=function(hometown,state,countery){
    console.log(`my name is ${this.firstname} ${this.lastname} from ${hometown} in ${state} on ${countery}`)
}

let printname=printfuntion.bind(name,"jharkahnd");
printname("bengal","south africa");

Function.prototype.mybind=function(...args){
    //this->printfunction
    let obj=this;
    params=args.slice(1)//it will remove first element from the list and give the rest
    //but here is trick that params is the array and we can not pass array in call method so we have to use apply here
    return function(...args2){
        // printfuntion()
        // obj.call(args[0])
        obj.apply(args[0],[...params,...args2])
    }
}

let printname2=printfuntion.mybind(name,"dehradun");
// printname2()
printname2("UP","india")


//every function in js has access to bind method ,...so to do so for mybind....that every function get acces to mybind
//we need to like Funtion.prototype.mybind



//and as we see when we attach any function with bind this gives us the function which we can call any time
// so means we have to return function in this.
//and as we see as soon as we call printname printfuntion function gets called 
//so we have to do so 
//when we call printfunction.mybind we get printfunction by this variable inside mybind