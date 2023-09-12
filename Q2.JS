// for(let key in object){

// }


const user={
    name:"ajtin",
    address:{
        personal:{
            city:"jammu",
            state:"kashmir"
        },
        office:{
            city:"up",
            state:"pradesh"
        }
    },
    landmark:{
        place:{
            home:"love",
            house:"how"
        }
    }
}

let findObj={};
// let parent="user";
let magic=( object,parent)=>{
    for(let key in object){
        // console.log(object[key])
        if(typeof object[key]==='object'){
            parent=parent+"_"+key;
            magic(object[key],parent)
        }else {
            findObj[parent+"_"+key]=object[key]
        }
    }
}

magic(user,"user");
console.log(findObj)

