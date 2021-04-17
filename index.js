// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = function(name){
    return drivers.push(name);
}

const destructivelyPrependDriver = function(name){
    return drivers.unshift(name);
}
const destructivelyRemoveLastDriver = function(){
    return drivers.pop();
}

const destructivelyRemoveFirstDriver = function(){
    return drivers.shift();
}

const appendDriver = function(name){
    let newArray;
    return newArray = [...drivers, name];
}

const prependDriver = function(name){
    let newArray;
    return newArray = [name,...drivers];
}

const removeLastDriver = function(){
    let newArray;
    return newArray = drivers.slice(0,2);
}

const removeFirstDriver = function(){
    let newArray;
    return newArray = drivers.slice(1,3);
}