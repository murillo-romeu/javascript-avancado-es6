// rest operator ...

function sum(a, ...xargs) {
  return xargs.reduce((acc, value) =>acc+value, 0)
}

console.log(sum('a', 1,2,3,4,5))