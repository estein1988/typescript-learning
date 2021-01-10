//arrays
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, true, false]

//Classes
class Car {

}

let car: Car = new Car();

//Object
let point: {x: number; y: number } = {
    x: 10,
    y: 20
}

//Function
//between : and = is the annotation; after = symbol, 
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}


////////When to use Annotations//////////////////

//1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const cordinates: {x: number; y: number} = JSON.parse(json);
console.log(cordinates);


//2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}


//3) Corner case - Variable whose type cannot be inferred correctly
//trying to find user's favorite type of media (could be an image, blog post, url, etc)
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}