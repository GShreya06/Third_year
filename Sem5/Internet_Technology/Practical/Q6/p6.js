class Pet {
    constructor(name, age, weight, breed, food) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.breed = breed;
        this.food = food;
    }
}
function dog() {
    name = document.getElementById('name').value;
    age = document.getElementById('age').value;
    weight = document.getElementById('weight').value;
    breed = document.getElementById('breed').value;
    food = document.getElementById('food').value;
    mypet = new Pet(name, age, weight, breed, food)
    pet = JSON.stringify(mypet)
    console.log("JS OBJECT")
    console.log(mypet)
    console.log("EQUIVALENT JSON")
    console.log(pet)
}

