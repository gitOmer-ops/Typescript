type ItemType = "Book" | "Bike" | "Laptop";

type ItemObject = {

    name: string;
    price: number;
    type: ItemType;
    
};

const Book: ItemObject = {

    name: "The Hobbit",
    price: 5,
    type: "Book",

};

const Bike: ItemObject = {

    name: "Kawasaki H2",
    price: 62000,
    type: "Bike",

};

const Laptop: ItemObject = {

    name: "Macbook Pro",
    price: 999,
    type: "Laptop",

};

console.log(Book);
console.log(Bike);
console.log(Laptop);