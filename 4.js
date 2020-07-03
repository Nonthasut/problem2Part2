function evenArraySum(array) {
    let sum = 0;
    array.forEach((data) => {
        if (data % 2 == 0) {
            sum += data
        }
    })
return sum
} evenArraySum([5, 8, 6, 7, 1])