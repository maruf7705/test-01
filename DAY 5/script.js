let a = 5;
let b = 2;

a += 4;

console.log("a=",a)
console.log("5 == 2",a==b)
b +=7;
console.log("b =",b)
console.log("a == b", a==b)

let c = 7
let d = "7"

console.log("c !== d",c!==d)

let x = 5;
let y = 2;
let cond1 = x>y ;
let cond2 = x ===5;

console.log("cond1 && cond2",cond1 && cond2)


let x1 = 5;
let y1 = 2;
let cond01 = x1>y1 ;
let cond02 = x1 ===6;

console.log("cond1 || cond2",cond01 || cond02)
console.log("cond1 && cond2",!(cond01 && cond02))