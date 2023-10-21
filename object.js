

// var a={};
// var b=a;
// if(a==b){
// // console.log("hello")
// }
//  if(a===b){
// // console.log("hello2")
// }

// ////////////////////////////////////////////////////////////////////////////////
// const  user={
//     name:"jatin",
//     sirname:"mishta",
//     age:20,
//     vijay:"jai"
// }
// const clone={}

// //here i am trying to clone or copy the user object into clone object and they both object must be independent .
// //that is there reference must be different
// for(let key in user){
//     if(key!=='vijay'){
//         clone[key]=user[key];
//     }

// }
// if(clone==user){
//     // console.log("clone and user are same")
// }else{
//     // console.log("they are different")
// }
// // console.log(clone)

// clone.name="ravi"
// // console.log(user)
// // console.log(clone)
// //////////////////////////////////////////////////////////////////////////


// //for copying the method we can also use Object.assign()

// const second=Object.assign({},clone,user);
// // console.log(second)
// if(second==clone){
//     // console.log("second and cloen same hai");
// }else{
//     // console.log("second and cloen same nhi  hai");
// }
// ///
// //NESTED CLONE
// const user1={
//     name:'ajtin',
//     size:{
//         age:20,
//         age2:40
//     }
// }

// const user2=Object.assign({},user1);
// // console.log(user2)
// if(user1==user2){
//     // console.log("both user are euqla")
// }else{
//     // console.log("both user are euqla!!!!!!!!!!!!!")
// }
// if(user1.size===user2.size){
//     // console.log("PPPPPPPPP")
// }


// //so as you can see nested object still have same reference which quite problen for use to solve this we use
// //StructuredClone

// const user3=structuredClone(user2);
// if(user3.size===user2.size){
//     // console.log("hello solved")
// }else{
//     // console.log("yes they are now pointing towards different address")
// }


// //this Structured clone helps to clone all objects and primituve datatypes .....except Functions,,,it does not work in case of
// //functions
// const user5={
//     name:'ajtin',
//     size:{
//         age:20,
//         age2:40
//     },
//     fn:(name)=>{
//         // console.log(name)
//     }
// }

// const user4=structuredClone(user3);//see on doing this you will get an error
//                                     //DOMException [DataCloneError]: (name)=>{
//                                     //     console.log(name)
//                                     // } could not be cloned.
// if(user3.size===user2.size){
//     // console.log("hello solved")
// }else{
//     // console.log("yes they are now pointing towards different address")
// }
// /////////////////////



// ///                    THIS
// const user6={
//     name:"jatin",
//     fn:()=>{
//         // console.log(this.name)
//     }
// }
// user6.fn()
// //see this is giving undefined 


// const user7={
//     name:"jatin",
//     fn:function(){
//         // console.log(this.name)
//     }
// }
// user7.fn()
// //this is giving jatin

// ///why ??????????????????????????????????????????//

// // Please note that arrow functions are special: they have no this.
// //  When this is accessed inside an arrow function, it is taken from outside.


// //arraor functions
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
  
//     showList() {
//       this.students.forEach(
//         student => console.log(this.title + ': ' + student)
//       );
//     }
//   };
  
// //   group.showList();
// //   As we remember from the chapter Object methods, 
// //   "this", arrow functions do not have this. If this is accessed, it is taken from the outside.

// // let groups = {
// //     title: "Our Group",
// //     students: ["John", "Pete", "Alicesss"],
// //     showList:()=> {
// //       this.students.forEach(function(student) {
// //         // Error: Cannot read property 'title' of undefined
// //         console.log(this.title + ': ' + student);
        
// //       });
// //     }
// //   };
  
// //   groups.showList();

// // // summary
// // Arrow functions:

// // Do not have this
// // Do not have arguments
// // Can’t be called with new
// // They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance

// const users={
//     name:{
//         sirname:{
//             gotra:"vishu"
//         }
//     }
// }
// // console.log(users.name.sirname.gotra)
// // console.log(users?.aakash)
// const sep=null;
// // console.log(sep?.log)
// // import _ from 'lodash';
// const _=require("lodash")


// const id=Symbol("id");
// console.log(id)
// const id2=Symbol("ids");
// console.log(id2)
// const obj10={
   
//     name:"jatin",
//     age:"12"
// }
// const obj9={
//     name:"jatin",
//     age:"12"
// }

// const obs1=JSON.stringify(obj10);
// const obs2=JSON.stringify(obj9);
// console.log(obs1,obs2)
// if(obs1==obs2){
//     console.log("both are equal");
// }else{
//     console.log("not equal")
// }
// const same=_.isEqual(obj9,obj10)
// console.log(same)

// //as you can see we can compare two objects with the help of two methods 
// //1-converting object to string type by JSON.stringify ,but this will lead to wrong results if order are not same 
// //2-so in that condition will go with the lodash library of javascript which helps us to compare two objects




// // console.time("CHECK END")
// // let i=0;
// // while(i<100000000000){
// //     console.log(i)
// //     i++;
// // }

// // console.timeEnd("CHECK END")

// var userss={
//     name:"jatin"
// }

// let admin =userss
// admin.name="raj";
// userss=null
// console.log(admin.name)


// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
  
//     return {
//       father: man,
//       mother: woman
//     }
//   }
  
//   let family = marry({
//     name: "John"
//   }, {
//     name: "Ann"
//   });
//   delete family.father.wife
//   console.log(family)


// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       console.log(user.name);
//     }
  
//   };
  
//   user.sayHi();

// function sayHi() {
//     console.log( this.name );
//   }
//   const game={}
//   game.f=sayHi;
//   game.name="mishra";
//   game.f()
//   const game2={
//     name:"katuhal"
//   }
//   game2.f=sayHi;
//   game2.f()


// function user(name,user){
//     this.name=name;
//     this.user=user
// }

// let admin =new user("jack","bhadwa");
// let admin2=new user("jj","roastr")

// admin.name="raks"
// console.log(admin,admin2)

// for(var i=0;i<=5;i++){
//     function name(ind){
//         setTimeout(() => {
//             console.log(ind)
//         }, 1000);
//     }
//     name(i)
// }