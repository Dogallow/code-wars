// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


function getSum( a,b )
{
   //Good luck!
//   Return the sum of the range of numbers between two numbers(parameters) INCLUSIVE
//   If a and b are the same numbers return a or b
  if(a === b) return a;
  let total = 0
  let min = Math.min(a,b);
  let max = Math.max(a,b);
  for (let i = min; i<=max; i++){
    total += i;

  }
  console.log(total)
  return total
}
