// bubbing and (capturing or tricking)
//bubbling is like form in to out  as bubble goes out
//capturing is like form out to in 
//default inbubbling

// so what happend is
//when we have grand parent ->parent->child
//lile we have three divs
<div id="grandparent">
    <div id="parent">
        <div id="child">

        </div>
    </div>
</div>

document.querySelector("#grandparent").
addEventListener("click",()=>{
    console.log("grand parent clicked")
})

document.querySelector("#parent").
addEventListener("click",()=>{
    console.log(" parent clicked")
})

document.querySelector("#child").
addEventListener("click",()=>{
    console.log("childt clicked")
})

// now if we click on child div then output will be
// child clicked
//parent clicked
//grand parent clicked
// you can see output is from inwards to outwars this is what known as bubbling

//we have third parameter in addEventListener also whcih is by default false,if we make that true it will act like capturing

document.querySelector("#child").
addEventListener("click",()=>{
    console.log("childt clicked")
},true)
// so these are usecapture flags
// now output will be lkike,but remember make true in all the event listener

//grand parent clicked
//parent clicked
// child clicked



document.querySelector("#grandparent").
addEventListener("click",()=>{
    console.log("grand parent clicked")
},true)//capturing

document.querySelector("#parent").
addEventListener("click",()=>{
    console.log(" parent clicked")
},false)//bubbling

document.querySelector("#child").
addEventListener("click",()=>{
    console.log("childt clicked")
},true)//capturing

//so output will be as code runs capturig happend
//after then bubbling happens
//so
//grand parent clicked
//child clicke
//parent clicked

//remember first capturing cycling happens then bubbling cycle happens

//as bubbling and capturing are quite expensive things we have to stop it some time  howww??
// so we use e.stopPropogation();
document.querySelector("#child").
addEventListener("click",(e)=>{
    console.log("childt clicked")
    e.stopPropogation();
},true)//capturing
