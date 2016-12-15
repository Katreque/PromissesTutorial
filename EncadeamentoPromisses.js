var p1 = function() {
 return Promise.resolve(999);
}

var p2 = function() {
  return Promise.resolve(999.9);
}

var p3 = function() {
  return Promise.resolve(999.99);
}

p1().then((r) => {
  console.log(r)
})
.then((r) => {
  console.log(r)
})
.then((r) => {
  console.log(r)
})
