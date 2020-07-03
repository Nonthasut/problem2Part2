function isTheSameAnagram(string1, string2) {
    let word1 = ""
    let word2 = ""
    string1 = string1.split("").sort()
    for (i = 0; i <= string1.length - 1; i++) {
        word1 += string1[i]
    }
    string2 = string2.split("").sort()
    for (i = 0; i <= string2.length - 1; i++) {
        word2 += string2[i]
    }
    return word1 === word2
} isTheSameAnagram('sam', 'mas')