// assuming each user_id is a positive integer
let arr_even = [];
let arr_odd =  [];

for(let i = 1; i < 100; i++){
    if(i % 2 === 0){
        arr_even.push(i);
    } else {
        arr_odd.push(i);
    }
}

console.log('user_id with even number array = ' + arr_even);
console.log('user_id with odd number array = ' + arr_odd);
