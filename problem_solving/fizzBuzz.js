let answer = parseInt(prompt("Dame un número: "))

for (let i = 1; i <= answer; i++){
    if(i%5 === 0 && i%3 === 0){
        console.log("FizzBuzz")
    }
    else if (i%5 === 0){
        console.log("Buzz")
    }
    else if (i%3 === 0){
        console.log("Fizz")
    }
    else{
        console.log(i)
    }
}