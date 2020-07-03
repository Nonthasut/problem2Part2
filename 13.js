let answer = 0;
function maxPairSum(array) {
    array.sort(function (a, b) { return b - a })
    answer+=array[array.length-1]+array[array.length-2]
    return answer
} maxPairSum([5,4,3, 2, 1])