function changeStringtoThaiDate(date) {
    let numOfdate = '';
    let numOfmonth = '';
    let numOfyear = '';
    let arrMonth = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน',
        'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
    date = date.split("")
    let dashFirstIndex = date.findIndex(item => {
        return item == "-";
    })
    if (dashFirstIndex == 2) {
        numOfdate += date[0] + date[1]
        date.splice(0, 3)
    } else if (dashFirstIndex == 1) {
        numOfdate += date[0]
        date.splice(0, 2)
    } else {
        return 'error'
    }
    let dashSecondIndex = date.findIndex(item => {
        return item == "-";
    })
    if (dashSecondIndex == 2) {
        numOfmonth += date[0] + date[1]
        date.splice(0, 3)
    } else if (dashSecondIndex == 1) {
        numOfmonth += date[0]
        date.splice(0, 2)
    } else {
        return 'error'
    }
    for (i = 0; i <= date.length - 1; i++) {
        numOfyear += date[i]
    }
    Number(numOfdate), Number(numOfmonth), Number(numOfyear)

    if (numOfmonth <= 0 || numOfmonth >= 13) {
        return 'error'
    }
    else if (numOfdate <= 0 || numOfdate >= 32) {
        return 'error'
    }
    else if (numOfmonth == 1 || numOfmonth == 3 || numOfmonth == 5 || numOfmonth == 7 || numOfmonth == 8 || numOfmonth == 10 || numOfmonth == 12) {
        if (numOfdate > 31) {
            return 'error'
        }
    } else if (numOfmonth == 2) {
        if (numOfdate > 28) {
            return 'error'
        }
    }

    else if (numOfmonth == 4 || numOfmonth == 6 || numOfmonth == 9 || numOfmonth == 11) {
        if (numOfdate > 30) {
            return 'error'
        }
    }


  

    return "วันที่ " + numOfdate + " " + arrMonth[numOfmonth - 1] + " พ.ศ. " + (Number(numOfyear) + 543)
} changeStringtoThaiDate('0-04-1995')