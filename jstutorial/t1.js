// function reverseWords(str) {
//     // Go for it
//     // return str.split('').reverse().join('');

//     let a=str.split('')
//     console.log(a);
//     // for(let  i of str)

//   }

//   console.log(reverseWords('double  spaced  words'));
// let  str='Hi i am Himanshu'

// let a=str.split()
// for(let i of a){
//     console.log(i);
//     let b=a.reverse()
//     console.log(b);
    
// }
// console.log(a);
//spread oprator use array and object
// let a=[1,5,5,5,57,78,8,78,7,8]
// let b=['uhusa','huqdfh',...a]
// console.log(b);
// function myFuntion(a,b) {
    
// }
// const a="ball bat"

// let  b=a.replaceAll(/[bl]/g,'c')
// console.log(b)
// console.log(a)
//array method
//for each method only use in array
// const  arr=[1,2,3,4,5]
// arr.forEach(item=>{
//     console.log(item);
// }) 
//include method retuns only true and false check value present or not

// const  arr=[1,2,3,4,5]
// console.log(arr.includes(2));



// filter method create new array with only element passed the conditin
// const  arr=[1,2,3,4,5]
// const arr1=arr.filter(num=>num>=2);
// console.log(arr1);

// map method create new array by calling the provided funtion in every element 
const  arr=[1,2,3,4,5]
const  arr1=arr.map(num=>num/2);
console.log(arr1);

//reduce method applies a function against an accumalater an each in array (left to  right)  to reduce in single value
// reduce add all the element inside the array and give  output in sigle value
// const  arr=[10,2,3,4,5]
// const sum=arr.reduce((total ,value )=>total*value,2);
// console.log(sum); 


//some method check if at  least on arrays item passed the condition it return true
// const  arr=[1,2,3,4,5]
// const large=arr.some(num=>num>2)
// console.log(large);
// const small=arr.some(num=>num<0)
// console.log(small);

//every method in every method all condtion is true
// const  arr=[1,2,3,4,5]
// const checkCondition=arr.every(num=>num>=5)
// console.log(checkCondition);

// //sort  this method sort array in ascending or descending order
// const  arr=[1,5,3,10,8]
// //const arr1=[a,d,r,c,e,g]
// let a= arr.sort()
// console.log(a);
// console.log(a("Hello"));
//  let a= functionBelow=(greet)=> {
//    return `${greet} world`;
// }
// console.log(a("Hi"));


//toString method  convert array in string 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a=fruits.toString();
// console.log(a);


//join method is joins array elements into a string
// let  fruits = ["Banana", "Orange", "Apple", "Mango"];
// let a=fruits.join('""')
// console.log(a);


//pop method remove last element of array 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let a=fruits.pop();
// console.log(a);
//push method add element in the last of in array
// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits.push("kiwi")
// console.log(fruits);

//shift  method in array remove first element of array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

// unshift  method add element  in front of  array 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("hijadduhasd");
// console.log(fruits);
// function findNextSquare(sq) {
//     // Return the next square if sq is a perfect  square, -1 otherwise
//     let nsq=Math.sqrt(sq) 
//      if(parseInt(sq/nsq) === nsq){
//       let a= Math.sqrt(sq) 
//       let b=a +1
//       return Math.pow(b,2)
//      } 

//     return -1
//   }
//   console.log(findNextSquare(114 ));
// Simple object
// const simpleObject = {
//     firstName: 'param',
//     lastname: 'Harrison',
//     isMarried: true,
//   };
//   // Cloned simple object
//   const clonedSimpleObject = { ...simpleObject };
  
//   simpleObject.firstName = 'ABC';
//   clonedSimpleObject.firstName = 'XYZ';
//   console.log(simpleObject.firstName);
//   console.log(clonedSimpleObject);
//   console.log(simpleObject);

//array destucturing
//  let nums =[5,6,7,3,6,8]
//  console.log(nums)
//  let [a,b,c,d,e,f]=nums;
//  console.log(a);
 //array destucturing swap value
//  let  a=4;
//  let b=6;
//  [a,b]=[b,a]
//  console.log(a,b);


//object destucturing
// let user={
//   name:'himanshu',
//   age:23,
//   city:'katni'
// };
// let {name,age,city}=user;
// console.log(name);
// console.log(age);
// console.log(city);

// let number= [100,200,300,400]
// let iter =number[Symbol.iterator]();
// (iter.next());
// (iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function* myFuntion(){
//   yield 10;
//   yield 20;
//   yield 30;
// }
// let gen=myFuntion()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// let n=10;
// for(let i=1; i<=n;i++){
//     for(let j=1; j<n-i; j++){
//         console.log("")
//     }
//     for(let k = 0; k < 2 * i - 1; k++){
//         console.log("*")
//     }
//     console.log()
    
    
    
// }

// function myFuntion(){
//     console.log('hello')
    
// } myFuntion()


// );
// console.log("start");
// let arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach(r=>{
//     console.log(r);
// })
// console.log("End")


// function myFunction() {
//     console.log('hello1')
// }
// function myFunction1(){
//     console.log('hello2');
//     myFunction()
   
// }
// myFunction1()

// function geeky(callback){
   
//     callback(101);
   
// }
// geeky(
//     (a)=>{
//         console.log(a);
//     })


// console.log("start")
// function getName(name,callback)
// setTimeout(()=>{
//     console.log("inside set timeout")
//     callback(name);


// },2000)

// function getHobbies(name,callback) {
//     setTimeout(()=>{
//         console.log("inside hobbies setTimeout")
//         callback(['cricket','reading','dancing']);
//     },2000)
    
// }

// const sequenceSum = (begin, end, step) => {
//     let sum=0;

//     for(let i=begin;i<=end;i++){
//        sum+=step
//     }
//     return sum
//  };
//  console.log(sequenceSum(1,5,1))



// const myFunction=()=> {
    
// console.log('hello world')  
// myFunction() 
// }
// myFunction()



// const json = {"result":true, "age":42};
// const obj = JSON.parse(json);

// console.log(obj);

// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);  //parse is used to convert JSON to object`

// console.log(typeof(obj));

// let json1 = JSON.stringify(obj) //stringify is used to convert object to JSON format
// console.log(typeof(json1));

const student =[1,2,3,4,5,6]

// using for...in
for ( let key of student ) {

    // display the properties
    console.log( `${key}`);
}