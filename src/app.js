//Дуфолтний імпорт
// import qwerty from "./js/calculator"
// console.log(qwerty);


// console.log(qwerty.add(2,6));
// console.log((qwerty.minus(10, 5)));



//=============================


//іменований імпорт

// import {add, minus, myltiply, devide} from "./js/calculator"

// console.log(add(5,5));

// console.log(minus(10, 7));

// console.log(myltiply(10, 7));

// console.log(devide(10, 2));


import users from "../users.json"
import {render} from "./js/render"
const listRef = document.querySelector(".js-list")

render(users, listRef)
