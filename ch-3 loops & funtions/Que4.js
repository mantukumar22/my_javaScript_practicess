function findMean( a, b, c, d, e){
    let sum = a + b + c + d + e;
    let mean = sum / 5;
    return mean;
}

let Mean = findMean(10 , 20 , 30 , 40 , 50);
console.log("The mean is :" + Mean);