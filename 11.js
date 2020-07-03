function dotProduct(vector1, vector2) {
    let sum = 0;
    let count
    if (vector1.length < vector2.length) {
        count = vector2.length - 1
    } else if (vector1.length < vector2.length) {
        count = vector1.length - 1
    }
    for (i = 0; i <= count; i++) {
        if (vector1[i] === undefined) {
            sum += vector2[i] * 0;
        } else if (vector2[i] === undefined) {
            sum += vector1[i] * 0;
        } else {
            sum += vector2[i] * vector1[i]
        }
    }  return sum
} dotProduct([3,4], [2,8,9,11])

