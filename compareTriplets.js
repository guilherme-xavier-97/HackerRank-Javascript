/* Two arrays in input, with three positions. The positions will be compared one by one. 
For each number in array 1 bigger than the corresponding  number in array 2, Alice earn one point. 
For each number in array 2 bigger than the corresponding  number in array 1, Bob earn one point.
If the numbers are equals, nobody earn. 
The output must be an array with the sum of the points from Alice and Bob */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function compareTriplets(a, b) {
    
    // need to initialize the variables with an integer, otherwise a NaN error occurs
    var alicePoints = 0
    var bobPoints = 0
    
    for(let i=0; i<3; i++){
        if(a[i] > b[i]) {
            alicePoints++
        } else if (a[i] < b[i]) {
            bobPoints++
        }
    }
    
    var totalPoints = [alicePoints, bobPoints]
    return totalPoints

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
