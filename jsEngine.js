//js engine works in three stages
//parsing--->compilation--->execution
//durign this parsing this code is broken into tokens
//and there is also known as synatx parser
//ans the job of syntax parser is to convert take this code and covert this into AST---i.e Abstract Syntax Tree


//then comes compilation and execution stage
//there are two things interpreter and compiler
//so js and used both as interpreter and copiler and thats why it is called as just in time compilation laguage and it all depends on js engine
//how to use ,js can also be used only as compiler or interepreter or both

//and these all are done using memroy heap and call stack



//Read about Mark and sweep algorithm
//inlining
//inline caching
//copy ehision


//reduce function
const arr=[1,2,13,4,5,6];
const sum=arr.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc;
},200);
console.log(sum);

//filter method
const nums=arr.filter((num)=>{
return num>2
})
console.log(nums)

//map function
const f_map=arr.map((nums)=>{
return nums=nums*2;
})
console.log(f_map)
//hence you can see mapnever changes the original array
//filter method
const numst=arr.filter((num)=>{
    return num>2
    })
    console.log(numst)

    const max_val=arr.reduce((acc,curr)=>{
        if(curr>acc){
            acc=curr;
        }
        return acc;
    })
    console.log(max_val)