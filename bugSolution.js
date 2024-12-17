function foo(a, b) {
  // Handle null or undefined values
  a = a === null || a === undefined ? 0 : a;
  b = b === null || b === undefined ? 0 : b;

  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric inputs
  }

  return a + b; // Addition with proper null handling
}
console.log(foo(1,2)); //3
console.log(foo(null, 5));//5
console.log(foo(1,null));//1
console.log(foo(null,null));//0
console.log(foo(1,"a"));//NaN