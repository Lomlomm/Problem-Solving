function toUpper(animal){
    return animal.toUpperCase();
}

function lCat(cat){
    return cat.startsWith("L")
}

const animals = ["cats", "dogs", "leopard", "mouses", "elephant", "tiger", "lion"]
const upperAnimals = animals.map(toUpper)
console.log(upperAnimals)

const filtered = upperAnimals.filter(lCat)
const filtered2 = upperAnimals.filter((cat) => cat.startsWith("L"));
console.log(filtered)
console.log(filtered2)

for(const animal of animals){
    console.log(animal)
}

for(let i = 10; i>=0; i--){
    console.log(i)
}

