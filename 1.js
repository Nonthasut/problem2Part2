function checkCharacter(string) {
    if (typeof string != 'string') {
        return 'Not the string type'
    } else if (typeof string == 'string') {

        string = string.split("")
        let capitalCheck = string.every((isCapital) => {
            return isCapital === isCapital.toUpperCase()
        })
        let lowerCheck = string.every((isLower) => {
            return isLower === isLower.toLowerCase()
        })
        if(capitalCheck===true){
            return 'All character are uppercase.'
        }else if(lowerCheck===true){
            return 'All character are lowercase.'
        }else{
            return 'All character are mix.'
        }
    }
} checkCharacter('world')




