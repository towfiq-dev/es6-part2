// const numbers = [1,2,3,4,5]
// const result = numbers.reduce(function(privious, current){
// return privious + current
// },0)

// console.log(result);




const nums =[2,4,6,8,10]

const result = nums.reduce(function(previous, current){
return previous + current
}, 0)
console.log(result);






const array = [1,2,3,4,5,6,7,8,9]
const results = array.reduce(function(previous, current){
  return previous + current
}, 0)
console.log(results); 

const arr = [1,2,3,4,5]
const valuew = arr.reduce((old, news)=> old + news, 0)
console.log(valuew);

const towfiq = [1,3,2,5,5]
const foll = towfiq.reduce((old, news)=> old + news, 0)
console.log(foll);
