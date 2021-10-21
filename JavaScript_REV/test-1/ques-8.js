// decToBin

function decToBin(num){
    let sum = 0;
    let i = 0;
    let rem = 0;
    let n = 1;
    while (num > 0){
        rem = num % 2;
        num =  (parseInt) (num / 2);
        sum = sum + (rem *Math.pow(10,i));
        i++;
    }
    return sum;
}

console.log(decToBin(45))

// let a = 9;
// let b = 2;
// console.log(a/b);

