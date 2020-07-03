function toChange(money){
    let thousandBanknote =0
    let fiveHundredBanknote =0
    let oneHundredBanknote =0
    let fiftyBanknote =0
    let twentyBanknote =0
    let tenCoin =0
    let fiveCoin =0
    let twoCoin =0
    let oneCoin =0
   thousandBanknote= Math.floor(money/1000)
   money=money-(thousandBanknote*1000)
   fiveHundredBanknote = Math.floor(money/500)
   money=money-(fiveHundredBanknote*500)
   oneHundredBanknote= Math.floor(money/100)
   money=money-(oneHundredBanknote*100)
   fiftyBanknote= Math.floor(money/50)
   money=money-(fiftyBanknote*50)
   twentyBanknote= Math.floor(money/20)
   money=money-(twentyBanknote*20)
   tenCoin= Math.floor(money/10)
   money=money-(tenCoin*10)
   fiveCoin= Math.floor(money/5)
   money=money-(fiveCoin*5)
   twoCoin= Math.floor(money/2)
   money=money-(twoCoin*2) 
   oneCoin = Math.floor(money/1)
   money=money-(oneCoin)
   return 'แบงค์1000บาท '+thousandBanknote+'ใบ'+','+'แบงค์500บาท '+fiveHundredBanknote+'ใบ'+','+'แบงค์100บาท '+oneHundredBanknote+'ใบ'+','+'แบงค์50บาท '+fiftyBanknote+'ใบ'+','+'เหรียญ10บาท '+tenCoin+'เหรียญ'+','+'เหรียญ5บาท '+fiftyBanknote+'เหรียญ'+','+'เหรียญ2บาท '+twoCoin+'เหรียญ'+','+'เหรียญ1บาท '+oneCoin+'เหรียญ'
}toChange(788)