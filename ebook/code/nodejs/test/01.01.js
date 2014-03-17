var assert = require('assert');
var leftshift1 = require('../chapter01/01.01').leftshift1;
var leftshift2 = require('../chapter01/01.01').leftshift2;

describe('左旋字符串', function() {
    var sourceStr = 'abcdefg';
    describe('暴力移位法', function() {
        it('左旋正常', function() {
            assert.equal(leftshift1(sourceStr, 1), 'bcdefga')
            assert.equal(leftshift1(sourceStr, 2), 'cdefgab')
            assert.equal(leftshift1(sourceStr, 3), 'defgabc')
            assert.equal(leftshift1(sourceStr, 4), 'efgabcd')
            assert.equal(leftshift1(sourceStr, 8), 'bcdefga')
        });
    });

    describe('三步反转法', function() {
        it('左旋正常', function() {
            assert.equal(leftshift2(sourceStr, 1), 'bcdefga')
            assert.equal(leftshift2(sourceStr, 2), 'cdefgab')
            assert.equal(leftshift2(sourceStr, 3), 'defgabc')
            assert.equal(leftshift2(sourceStr, 4), 'efgabcd')
        });
    });
});
