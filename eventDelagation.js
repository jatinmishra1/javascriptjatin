//to handel event listeners

// so  basic idea of event delegation is to improve performance
//so idea is that despite of adding avent listener of every element inside parent, add event listener to parent only
//and it will do the working with the help of bubbling and capturing 
<div id="category">
    <ul>
        <li id="laptop">laptop</li>
        <li id="camera">camera</li>
        <li id="phones">phones</li>
        <li id="mobile">mobile</li>
    </ul>
</div>
document.querySelector("#category").
addEventListener("click",(e)=>{
    if(e.target.tagName==='LI'){
        window.location.href="/"+e.target.id
    }
console.log(e.target.id)

})

//Advantages
//1-less use of memory
//2-more efficient
//3-less code
//4-less dom manipulation

//limitations
//1-all the events are not bubbled up  like blur ,focus,resizing of window etc
