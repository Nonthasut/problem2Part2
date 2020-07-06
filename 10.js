function squareRoot(number) {
    let factorOf2 = []
    let factorOf3 = []
    let factorOf5 = []
    let factorOf7 = []
    let factorNotEratos =[]
    let RootNumber = []
    let RemainInRootNumber = []

    while (number % 2 == 0 && number > 0) {
        number /= 2
        factorOf2.push(2)
        if (factorOf2.length == 2) {
           for(i=0;i<2;i++){
            RootNumber.push(factorOf2.shift())
           }
        }
    }
    while (number % 3 == 0 && number > 0) {
        number /= 3
        factorOf3.push(3)
        if(factorOf3.length==2){
            for(i=0;i<2;i++){
                RootNumber.push(factorOf3.shift())
            }
        }

    }
    while (number % 5 == 0 && number > 0) {
        number /= 5
        factorOf5.push(5)
        if(factorOf5.length==2){
            for(i=0;i<2;i++){
                RootNumber.push(factorOf5.shift())
            }
        }
    }
    while (number % 7 == 0 && number > 0) {
        number /= 7
        factorOf7.push(7)
        if(factorOf7.length==2){
            for(i=0;i<2;i++){
                RootNumber.push(factorOf7.shift())
            }
        }
    }
    if ((number % 2 != 0) && (number % 3 != 0) && (number % 5 != 0) && (number % 7 != 0) && (number > 1)) {
     factorNotEratos.push(number)
    }


    // factorOf2 = factorOf2.slice(0,(factorOf2.length/2))
    // factorOf3 = factorOf3.slice(0,(factorOf3.length/2))
    // factorOf5 = factorOf5.slice(0,(factorOf5.length/2))
    // factorOf7 = factorOf7.slice(0,(factorOf7.length/2))


    // RootNumber = RootNumber.reduce((result,factor)=>{return result*factor})
    // RemainInRootNumber=factorNotEratos.concat(factorOf2).concat(factorOf3).concat(factorOf5).concat(factorOf7)
    // RemainInRootNumber= RemainInRootNumber.reduce((result,factor)=>{return result*factor})
    


    console.log(factorOf2)
    console.log(factorOf3)
    console.log(factorOf5)
    console.log(factorOf7)
    console.log(factorNotEratos)
    console.log(RootNumber)
    console.log(RemainInRootNumber)

    // return RootNumber+" root "+RemainInRootNumber}
    
    return RootNumber

} squareRoot(121)