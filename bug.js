function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; //Original Code
}
console.log(foo(1,2)); //3
console.log(foo(null, 5));//null
console.log(foo(1,null));//null
console.log(foo(null,null));//null