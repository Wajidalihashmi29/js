let score = "33"
console.log(score);
console.log(typeof(score));

let value = Number(score)
console.log(typeof value);
console.log(value);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = null
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1/string => true; null/empty/0 => false 