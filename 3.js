function thaiTypeof(variable) {
    let result;
    if (typeof variable === 'string') {
        result = 'ข้อความ'
    }
    else if (typeof variable == 'number') {
        result = 'ตัวเลข'
    } else if (typeof variable == 'object') {
        result = 'ออปเจ็คต์'
    } else if (typeof variable == 'function') {
        result = 'ฟังค์ชั่น'
    } else if (typeof variable == 'boolean') {
        result = 'บูลีน'
    }
    else if (typeof variable == 'undefined') {
        result = 'ระบุไม่ได้'
    }
    else if (typeof variable == 'symbol') {
        result = 'สัญลักษณ์'
    }
    else if (typeof variable == 'bigint') {
        result = 'ตัวเลขจำนวนเต็ม'
    }else {
        result = 'เกิดข้อผิดพลาด'
    }
  
return result
} thaiTypeof()