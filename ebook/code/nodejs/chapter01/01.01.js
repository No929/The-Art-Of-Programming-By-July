//只移第一位

function left_shift_one(str) {
    return str.slice(1, str.length) + str.slice(0, 1)
}

//暴力移位法，一位一位的移
exports.leftshift1 = function(str, n) {
    n %= str.length

    while (n--) {
        str = left_shift_one(str)
    }

    return str
}

//反转函数

function reverse(str) {
    //这里我们用数组反转
    return str.split('').reverse().join('')

    //另一种反转解法
    //var t
    //var from = 0
    //var arr = str.split('')
    //var to = arr.length - 1

    //while (from < to) {
    //    t = arr[from]
    //    arr[from++] = arr[to]
    //    arr[to--] = t
    //}
    //return arr.join('')
}

//三步反转法
exports.leftshift2 = function(str, n) {
    //反转左部
    //反转右部
    var len = str.length;
    str = reverse(str.slice(0, n)) + reverse(str.slice(n, len));

    //整个反转一下
    return reverse(str)
}
