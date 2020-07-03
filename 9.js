let number = +prompt('Add number')
let result = ""
let answer = ""
result += number
result = result.split("")
if (result.includes(".") === true) {
    let decimalIndex = result.findIndex(item => {
        return item == ".";
    })
    result = result.sort()
    result.shift()
    for (i = 0; i <= result.length -1; i++) {
        answer += result[result.length - i - 1]
    }
    answer /= 10 ** (result.length-decimalIndex)

} else if (result.includes(".") === false) {
    result = result.sort()
    for (i = 0; i <= result.length - 1; i++) {
        answer += result[result.length - i - 1]
    }
}
alert(answer)




