var assert = require('assert');
var compare1 = require('../chapter01/01.02').compare1;
var compare2 = require('../chapter01/01.02').compare2;
var compare3 = require('../chapter01/01.02').compare3;
var compare4 = require('../chapter01/01.02').compare4;
var compare5 = require('../chapter01/01.02').compare5;
var compare6 = require('../chapter01/01.02').compare6;

describe('字符串是否包含问题', function() {
    var str1 = 'ABCDEFGHLMNOPQRS';
    var str2 = 'DCGSRQPO';
    var str3 = 'DCGSRQPZ';

    describe('暴力轮询', function() {
        it('查找正常', function() {
            assert.strictEqual(true, compare1(str1, str2))
            assert.strictEqual(false, compare1(str1, str3))
        });
    });

    describe('普通排序', function() {
        it('查找正常', function() {
            assert.strictEqual(true, compare2(str1, str2))
            assert.strictEqual(false, compare2(str1, str3))
        });
    });
    describe('计数比较', function() {
        it('查找正常', function() {
            assert.strictEqual(true, compare3(str1, str2))
            assert.strictEqual(false, compare3(str1, str3))
        });
    });
    describe('hashtable', function() {
        it('查找正常', function() {
            assert.strictEqual(true, compare4(str1, str2))
            assert.strictEqual(false, compare4(str1, str3))
        });
    });
   // describe('素数相乘', function() {
   //     it('查找正常', function() {
   //         assert.strictEqual(true, compare5(str1, str2))
   //         assert.strictEqual(false, compare5(str1, str3))
   //     });
   // });
    describe('位运算', function() {
        it('查找正常', function() {
            assert.strictEqual(true, compare6(str1, str2))
            assert.strictEqual(false, compare6(str1, str3))
        });
    });
});
