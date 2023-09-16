//what is block
//it is combinig multiple js statemenst into the group
//also known as compound statement

//block scope
console.log(a);
var a=100;

console.log(a);
{
    //this is shadowing as this var a is now taking over old a ,so and it also modifies the value of a
    //as we know a have space in global context so ,ass soon as value of a chnages it chnages all over the world of context
    //and because of this only value of a got chnaged out this scope also
    //but this is not the case in let and const as they have block level scope only
var a=10;
    let b=20;
    const c=200;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b);
// console.log(c);

///now yoy can see a has global level scope
//where as b and c has block level scope
//because var has global level scope and let and const has block level scope

let cc=50;
{
    let cc=500;
    console.log(cc);
}
console.log(cc)


const ct=80;
{
    const ct=900;
    console.log(ct);
}
console.log(ct)

//illegal shadoing that is you are doing shadoing using diff keywords
// let aa=10;
// {
//     var aa=20;
//it is because something which is declared should not cross the boundary of scope
//but as we know var has function level scope due to which it becomes global of that function due to which there become conflicts
//some same name declaration with diff keyword
// }

// //but this is valid
// var aa=10;
// {
//     let aa=10;
// }
