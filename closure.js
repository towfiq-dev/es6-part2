// function outerfunction(){
//   function innerfunction(){
//     console.log('this is the inner function');
//   }
//   return innerfunction
// }
// const result = outerfunction()
// console.log(result);
function counter(){
  let count = 0
  function increment(){
    console.log('value of count', count);
    
  }
  return increment
}
const count1 =counter()
count1()