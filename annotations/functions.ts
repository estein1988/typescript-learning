const add = (a: number, b: number): number => {
    return a + b;
}

const addReturnAnnotaionRemoved = (a: number, b: number) => {
    return a + b;
}

//seems best practice to use return value annotation (: number), because then linter picks up you need a return statement
const subtract = (a: number, b: number): number => {
    return a - b;
}

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number{
    return a * b;
}

//: void is used with no return values in functions
const logger = (message: string): void => {
    console.log(message);
}

//corner case
const throwError = (message: string): never => {
    throw new Error(message)
}

//corner case  - more real world
const throwErrorReal = (message: string): string => {
    if(!message){
        throw new Error(message)
    }
    return message
}

//non-desructured
const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: String}): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}

//destructured
const logWeatherDestructured = ({date, weather}: {date: Date, weather: String}): void => {
    console.log(date)
    console.log(weather)
}

const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 39,
        lng: -104
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const { age }: {age: number} = profile
// const {coords: {lat, lng} } = profile
const {
    coords: {lat, lng} 
}: {coords: {lat: number; lng: number} } = profile