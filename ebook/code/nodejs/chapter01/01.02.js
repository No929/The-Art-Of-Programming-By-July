/**
 * 暴力轮询，b中每一个字符都在a中查一遍
 */
exports.compare1 = function(a, b) {

    if (b.length > a.length) {
        return false
    }

    var lena = a.length
    var lenb = b.length

    var arra = a.split('')
    var arrb = b.split('')

    var ia = 0
    var ib = 0

    for (; ib < lenb; ib++) {
        for (ia = 0; ia < lena; ia++) {
            if (arra[ia] == arrb[ib]) { //找到了，跳下一个
                break
            } else if (ia == lena - 1) {
                //找了一轮，还是没有找到，那就是没有啦
                return false
            }
        }
    }

    return true

}

/**
 *  先排序，两个字符串同时轮询
 */
exports.compare2 = function(a, b) {
    function sort(str) {
        return str.split('').sort()
    }

    var arra = sort(a)
    var arrb = sort(b)

    var ia = 0
    var ib = 0
    var lena = arra.length
    var lenb = arrb.length

    for (; ib < lenb;) {
        while (ia < lena && arra[ia] < arrb[ib]) {
            //尝试在a中找到b
            ia++
        }

        if (ia == lena || arra[ia] > arrb[ib]) {
            //找了一遍，没找着
            return false
        }

        //找到了，跳b的下一个字符接着找
        ib++
    }

    return true
}

/**
 * 搞一个长度为26的数组，因为只有26个大写英文字母
 * 某一项出现了，标记为1，再看B的每个字符对应的那一位，是否为1
 * 此方法由于c语言中字符串可以直接相减而成功
 * js里需要用charCodeAt来取到对应的数字
 * 此方法会进行 a.length + b.length 次
 */
exports.compare3 = function(a, b) {
    var have = new Array(26)

    var ia = 0
    var ib = 0

    var arra = a.split('')
    var arrb = b.split('')

    var lena = arra.length
    var lenb = arrb.length

    var codeAboutA = 'A'.charCodeAt()

    for (; ia < lena; ia++) {
        have[arra[ia].charCodeAt() - codeAboutA] = 1
    }

    for (; ib < lenb; ib++) {
        if (have[arrb[ib].charCodeAt() - codeAboutA] === undefined) {
            return false
        }
    }

    return true;
}

/**
 * 利用hashtable和一个计数变量,先把b里的在hashtable里标记一下
 * 同时记下总数m，然后循环a，在hashtable里对应位为1的时候
 * 减少m，m为0的时候就是true
 * 此法最多进行 a.length + b.length次，最少进行 b.length * 2 次
 */
exports.compare4 = function(a, b) {
    var hash = {}

    var ia = 0
    var ib = 0

    var arra = a.split('')
    var arrb = b.split('')

    var lena = arra.length
    var lenb = arrb.length

    var m = 0

    for (; ib < lenb; ib++) {
        if (!hash[arrb[ib]]) {
            hash[arrb[ib]] = 1
            m++
        }
    }

    for (; ia < lena; ia++) {
        if (hash[arra[ia]]) {
            m--

            if (m === 0) {
                break
            }
        }
    }

    return m === 0
}

/**
* 素数容易超出整数限制，暂时不用
*/
exports.compare5 = function(a, b) {
    var p = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101
    ]

    var f = 1
    var arra = a.split('')
    var arrb = b.split('')

    var i, x

    for (i = 0; i < arra.length; ++i) {
        x = p[arra[i].charCodeAt() - 65];
        if (f % x) {
            f *= x;
        }
    }

    for (i = 0; i < arrb.length; ++i) {
        x = p[arrb[i].charCodeAt() - 65];
        if (f % x) {
            return false;
        }
    }
    return true;
}


/**
 * 实质还是hashtable，不过是用一个整数代替了hashtable
 */
exports.compare6 = function(a, b) {
    var i = 0

    var arra = a.split('')
    var arrb = b.split('')

    var lena = arra.length
    var lenb = arrb.length

    var hash = 0;

    for (i = 0; i < lena; ++i) {
        hash |= (1 << (arra[i].charCodeAt()));
    }

    for (i = 0; i < lenb; ++i) {
        if ((hash & (1 << (arrb[i].charCodeAt()))) === 0) {
            return false;
        }
    }

    return true;
}
