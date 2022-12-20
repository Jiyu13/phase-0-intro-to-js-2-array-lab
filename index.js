// Write your solution here!

// assign an initial value of ["Milo", "Otis", "Garfield"] to an arry called cats
const cats = ["Milo", "Otis", "Garfield"];


// appends a cat to the end of the cats array
function destructivelyAppendCat() {
    return cats.push("Ralph");
}


// prepends a cat to the beginning of the cats array:
function destructivelyPrependCat() {
    return cats.unshift("Bob");
}


// removes the last cat from the cats array:
function destructivelyRemoveLastCat() {
    return cats.pop();
}


// removes the first cat from the cats array:
function destructivelyRemoveFirstCat() {
    return cats.shift();
}


// appends a cat to the cats array and returns a new array, leaving the cats array unchanged:
function appendCat() {
    return [...cats, "Broom"]; 
}


// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged:
function prependCat() {
    return ["Arnold", ...cats];
}


// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged:
function removeLastCat() {
    return cats.slice(0, 2);
}


// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}