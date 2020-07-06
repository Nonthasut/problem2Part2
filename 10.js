
// Give up --*

// function squareRoot(number) {
//     let data = []
//     let prepareData = []
//     let canDivide = []
//     let isPrimeCounter = 0
//     let isPrime = []
//     let factorOfNumber = []

//     data.push(number)

//     for (i = 0; i <= data.length - 1; i++) {
//         for (j = 2; j <= data[data.length - 1]; j++) {
//             prepareData.push([data[i], j])
//         }
//     }

//     for (k = 0; k <= prepareData.length - 1; k++) {
//         if (prepareData[k][0] % prepareData[k][1] === 0) {
//             canDivide.push(prepareData[k][1])
//         }
//     }

//     for (l = 0; l <= canDivide.length - 1; l++) {
//         for (m = 1; m <= canDivide[canDivide.length - 1]; m++) {
//             if (canDivide[l] % m === 0) {
//                 isPrimeCounter++
//             }
//         }
//         if (isPrimeCounter < 3) {
//             isPrime.push(canDivide[l])
//             isPrimeCounter = 0
//         } else if (isPrimeCounter > 2) {
//             isPrimeCounter = 0
//         }
//     }


//     for (n = 0; n <= isPrime.length - 1; n++) {
//         while (number % isPrime[n] == 0) {
//             number / isPrime[n]
//             factorOfNumber.push(isPrime[n])
//         }
//     }
//     let index = 0
//     while (number % isPrime[index] == 0 && isPrime.length != 0) {
//         if (number % isPrime[index] == 0) {
//             number / isPrime[index]
//             factorOfNumber.push(isPrime[index])
//         }else if(number % isPrime[index] != 0){
//             isPrime.shift()
//             index++
//         }
//     }

//     console.log(factorOfNumber)
//     console.log(isPrime)
//     return canDivide
// } squareRoot(100)