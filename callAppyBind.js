let name={
    firstname:"jatin",
    lastname:"mishar",
    printfullname:()=>{
        console.log(this.firstname+" "+this.lastname);
    }
}

let name2={
    firstname:"sachin",
    lastname:"tendulkar"
}

//function borrowing 

// name.printfullname.call(name2);
//it is like we have borrowed function some other one

///        BUT IT CAN ALSO BE DONE AS


let names={
    firstname:"jatin",
    lastname:"mishar",
   
}
let printfullname=function(hometown,state){
    console.log(this.firstname+" "+this.lastname+" "+ "from"+" "+hometown+" "+state);
}

let names2={
    firstname:"sachin",
    lastname:"tendulkar"
}

//function borrowing 
printfullname.call(names,'Allahabad',"UP");//so in call function first argument always be the reference and second will be parametres
printfullname.call(names2,'Rajghar',"ra");


// now lets see aplly method
//only difference between call and apply is in the fashon of passing the arguments

// we pass the argumenst in tha form of array in apply method
printfullname.apply(names2,['Rajghar',"ra"]);

// RECAP--so in call method we pass second argumenst seperately whereas in apply method we pass second arguments as arraylist


//         BIND METHODS
let funct=printfullname.bind(names2,'Rajghar',"ra");
//so bind will do...it will create the copy of printfullname and bind it with names2 object and return the function a
//as you can see in the console
funct()
// console.log(funct)

// so the only difference between call and bind is tha it gives the function which can be invoked later
//rather then invoking at the same time when it is called