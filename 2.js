function pow(a, n) {
    let sum =a
    const exponent = a
    i = 0
    while (i < n-1) {
        sum *= exponent
        i++
    } 
    return sum
} pow(5, 3)