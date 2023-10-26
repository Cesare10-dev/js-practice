//JS practice

const array = [1, 2, 3, 4, 5];
array.push(9);
console.log(array);

const newArray = new Array(1, 2, 3, 5, 4);
console.log(newArray);

const copyArray = [...array];
copyArray.push(8);
console.log(copyArray);
