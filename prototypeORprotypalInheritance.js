// https://www.youtube.com/watch?v=wstwjQ1yqWQ&list=PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0&index=4


let arr =["ashi","moto"]

let object={
    name:"ajtin",
    city:"lurpur"
}

let myname=()=>{

}


// so what JS do with all type of object  whether is is aaray or function or object it attaches a object under which we get all the
//properties which we can use such as  call,bind,insert,update etc 
//so prototype is nothing a object which attached over every object you  made without letting you know and
//with the help of this ponly you can acess these properies
//you can use by simply (.) operator


//it comes by __proto__
//object.__proto__.name
//mynam.__proto__.bind()


//NEVER EVER DO THIS ,,ONLY FOR DEMONSTARTION

let object2={
    name:"jk"
};

object2.__proto__=object;
// console.log(object2.__proto__);
// so  this is how object2 is inheriting propeties of object 1
// as you can se we have chnaged the prototype of our object
console.log(object2.city)