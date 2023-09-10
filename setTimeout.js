console.log("script start");


const id=setTimeout(()=>{
    console.log("hello");
},1000);
for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },500)
    console.log("JJ")
}
clearTimeout(id)
console.log("script end")

//so we knew in our call stack firsly global execution context get formed
//then our first line will run and as you can see we are gettin script start in our console
// now we can see as we encountered setTimeout which is not provided by javascript,it is provided by web browser
//so it will go to web browser api section and it will return it after one second
// now third line is our script end which we got our in console
//now broswer is keeping seeing and as soon as one second got completed browser handel this code to call back queue
//not even loop is monitoring call back stack and as soon as it will be empty ,even loop will put that fun from CBQ to CBS
// see what you have to notice is that ,even if 1 second got completed but it will not print untill the call stack is not emplty
//and event loop is not bale to put that fun int call back stack
//se as setTimeout return an id so if we want to not to run that we can pass that id into function which is clearTimeout,so that will not run
//run
