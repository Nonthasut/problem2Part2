function pow(a, n) {
    let result = a
    i=0
    while(i<=n) {
        result *= a
        i++
    }return result
}pow(5,3)