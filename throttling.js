// it is basically done  for performance optimisation
//something like debouncing

const expensive=function(){
    // console.log("expensive");

}
window.addEventListener("resize",expensive());
//so as you can see on resizing the window each and every time this event will be fired and expensive function will be called
//this will be happen 100 -1000;s of time which we reduce the performance and make the page slow and somewhat like hanged type
// so what we will do is ...we will add some time that after 500ms only this listener will act and that expensive function will
//be called.


const betterExpensive =throttle(expensive,limit);
// now instead of calling expensive function we will call better expensive function
window.addEventListener("resize",betterExpensive);
// now suppose the milmit is 100ms then only after 100 ms function will be called which is betterExpensive
//despite of how many time  you resized b/w 100ms


const throttle=(expensive,limit)=>{
    let flag=true;
    //it is imp because we have use closure  for flag 
return function(){
    if(flag){
        expensive();
        flag=false;
        setTimeout(()=>{
            flag=true;
        },limit)
    }
   
   
}
}