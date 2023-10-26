//JS practice

const array = [1, 2, 3, 4, 5];
array.push(9);

const newArray = new Array(1, 2, 3, 5, 4);

const copyArray = [...array];
copyArray.push(8);

const arrayTest = [1, 2, 3, 4, 5];
arrayTest.push(9);

const obj = {
  name: "Cesare",
  age: 36,
  status: "single",
};
delete obj.status;
obj.work = "developer";
const copyObj = Object.entries(obj);
console.log(obj);
console.log(copyObj);
