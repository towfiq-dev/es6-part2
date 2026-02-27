const heroNames = [
  {name: 'rittik', age: 20, prof: 'actor'},
  {name: 'sakib', age: 30, prof: 'krisi'},
  {name: 'runa', age: 60, prof: 'sing'},
  {name: 'laila', age: 50, prof: 'song'},
  {name: 'hero', age: 44, prof: 'actor'},
  {name: 'khan', age: 34, prof: 'movie'}
]

// const result = heroNames.filter((hero)=> hero.prof == 'actor')
// console.log(result);

const result = heroNames.filter((hero)=> hero.age >= 30)
console.log(result);
