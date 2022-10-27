let animals = [
  { name: "camel", icon: "🐫", food: "🌵" },
  { name: "cow", value: "🐄", food: "🌾" },
];

let animal = animals.find((a) => a.name === "camel");

console.log(animal);
console.log(animal.food);
