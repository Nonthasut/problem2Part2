function numberOfSquare(height, width) {
    let dataGDC = []
    let prepareData = []
    let factorOfData = []
    let widthOfSquare = []

    dataGDC.push(height, width)

    dataGDC.sort((a, b) => { return a - b })
    for (i = 0; i <= dataGDC.length - 1; i++) {
        for (j = 1; j <= dataGDC[dataGDC.length - 1]; j++) {
            prepareData.push([dataGDC[i], j])
        }
    }


    for (k = 0; k <= prepareData.length - 1; k++) {
        if (prepareData[k][0] % prepareData[k][1] === 0) {
            factorOfData.push(prepareData[k][1])
        }
    }

    factorOfData.sort((a, b) => { return a - b })

    for (m = 0; m <= factorOfData.length - 1; m++){
        if(factorOfData[m]===factorOfData[m+(dataGDC.length-1)]){
        widthOfSquare.push(factorOfData[m])
        factorOfData.slice(0,dataGDC.length)
        }
    }

    widthOfSquare.sort((a,b)=>{return a-b})

    let areaOfSquare = (widthOfSquare[widthOfSquare.length-1])**2
    let allSizeOfArea = height*width
    let quatityOfSquare = allSizeOfArea/areaOfSquare
        
    return quatityOfSquare
} numberOfSquare(2,8 )