// задача №3

let n = -100;
let m = 100;

let range = Math.abs(n-m);
let numberInRange = Math.round(Math.random()*range);
let min = Math.min(n,m);
let randomNumber = min + numberInRange;

if(Math.abs(randomNumber%2) === 1) {
 console.log(randomNumber);
} else if(randomNumber === Math.max(n,m)) {
    console.log(randomNumber - 1);
} else {
 console.log(randomNumber + 1);
}
