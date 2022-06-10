// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    let firstCat = [...cats, 'Broom']
    return firstCat;
}
function prependCat(){
    let lastCat = ["Arnold", ...cats]
    return lastCat;
}
function removeLastCat(){
    let newCat = cats.slice(0,2)
    return newCat;
}
function removeFirstCat(){
    let aCat = cats.slice(1)
    return aCat;
}