// const and let
// const person ={
//     name:'John',
//     age: 33
//   } 
//   person.name ='Jack';
//   console.log(person)

// const nums = [1,2,3,4];
// nums.push(5);
// console.log(nums)


// Arrow function
// function sayHello(){
//     console.log('Hello')
// }

// const sayHello = () => {
// console.log(`Hello ${name}`);
// }
// sayHello('Brad');

const fruits = ['Apples' , 'Oranges', 'Grapes'];
// foreach

// fruits.forEach((fruit, index)=>{
//  console.log(fruit)
// })

// map
const singleFruit = fruits.map((fruit)=>fruit.slice(0,-1).toUpperCase());
// console.log(singleFruit);


// // filter
// const people = [
//     {id:1, name: 'Karen'},
//     {id:2, name: 'Bob'},
//     {id:1, name: 'Sharon'},
// ];

// const peopleNew = people.filter(person => person.id !== 2);
// console.log(peopleNew);

// spread operator 
const arr = [1,2,3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];
// console.log(arr2);
//  console.log(arr3);


// const person1 = {
//     name: 'Brad',
//     age: 36
// };

// const person2 = {
//     ...person1,
//     email: 'brad@gmail.com'
// };

// console.log(person2);


// destructuring

const  profile ={
    name : 'john doe',
    address:{
        street: '40 main street',
        city: 'Norway'
    },
    hobbies:['movies', 'music']
}

const{name,address,hobbies} = profile;
console.log(name,address.street,hobbies[0])
console.log(profile.name)

const {street,city} = profile.address
console.log(street,city)


// two types of components: functional and class based(state)
// methods functions inside of  class
 class person{

 }




const app = () => {
    return (
        <div className = "App">
        </div>
    )
}

const Header = () => {
    return (
        <header>
<h1>
    shopping list
</h1>
        </header>
    )
}
// hoisting is the default behaviour of js of moving declarations to the top
//  state of a componebt at any point in time 
// props is for sharing data between parent and children
export function footer(){
    return (
        <footer>

        </footer>
    )
}
export default Header