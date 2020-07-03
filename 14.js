let speed, distance
let result = 0;
function jump(speed, distance) {
    if (distance % speed == 0) {
        return result += distance / speed
    }
    else if (distance % speed != 0) {
        return Math.ceil(distance / speed)
    }
} jump(speed, distance)