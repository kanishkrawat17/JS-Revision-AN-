let data = [
    { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
    { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
];

// console.log(data[0].rainfall.length);
// console.log(data.length);
function calcRain (data){
    for(let i = 0 ; i < data.length ; i++){
        let sum = 0;
        let avg = 0
        // console.log(data[i].rainfall);
        let arrRainfall = data[i].rainfall;
        for(let j = 0 ; j < arrRainfall ; j++){
            sum += arrRainfall[j];
        }
        avg = sum / arrRainfall.length;
        console.log(avg);
    }
}
calcRain(data);


