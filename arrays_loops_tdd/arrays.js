const cars = [
    "carro 1", 
    "carro 2", 
    "carro 3"
]
console.log(cars);

const fruits = ["banana", "apple", "mango", "grapes"]
console.log(fruits.toString());

console.log(fruits.join(" · "))
let fruit = fruits.pop()
console.log(fruits)

length = fruits.push(fruit)
console.log(fruits)
console.log(length)

fruit = fruits.shift()
fruits.unshift(fruit)
fruits.unshift("kiwi")
console.log(fruits)

fruits[fruits.length] = "Lemon"
console.log(fruits)

let myGirls = ['Mia', 'Monica']
let myBoys = ['Sebastian', 'Chandler']

const love = myGirls.concat(myBoys)
love.concat("Me")
console.log(love)

fruits.splice(2,0, "Strawberry", "Watermelon")
console.log(fruits)

let citrus = fruits.slice(fruits.length-1)
console.log(citrus)