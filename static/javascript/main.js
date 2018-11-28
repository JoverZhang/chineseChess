/*
* @Author: Marte
* @Date:   2018-11-17 18:02:27
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-19 20:18:51
*/

'use strict';
var map = new Array(10);
var qipan = document.getElementById('qipan').getElementsByTagName("div");
var Qizi = {
    1: 'shuai',
    2: 'rlshi',
    3: 'rlxiang',
    4: 'rlma',
    5: 'rlche',
    6: 'rlpao',
    7: 'bing1',
    11: 'jiang',
    12: 'blshi',
    13: 'blxiang',
    14: 'blma',
    15: 'blche',
    16: 'blpao',
    17: 'zu1',
}

function init() {
    //生成棋盘
    for (var i = 0; i <= 9; i++)
        map[i] = new Array(9);
    //将棋盘初始化为0
    for (var i = 0; i < 10; i++)
        for (var j = 0; j < 9; j++)
            map[i][j] = 0;

    //初始化棋子位置
    map[0][0] = 15;
    map[0][1] = 14;
    map[0][2] = 13;
    map[0][3] = 12;
    map[0][4] = 11;
    map[0][5] = 12;
    map[0][6] = 13;
    map[0][7] = 14;
    map[0][8] = 15;
    map[2][1] = 16;
    map[2][7] = 16;
    map[3][0] = 17;
    map[3][2] = 17;
    map[3][4] = 17;
    map[3][6] = 17;
    map[3][8] = 17;

    map[9][0] = 5;
    map[9][1] = 4;
    map[9][2] = 3;
    map[9][3] = 2;
    map[9][4] = 1;
    map[9][5] = 2;
    map[9][6] = 3;
    map[9][7] = 4;
    map[9][8] = 5;
    map[7][1] = 6;
    map[7][7] = 6;
    map[6][0] = 7;
    map[6][2] = 7;
    map[6][4] = 7;
    map[6][6] = 7;
    map[6][8] = 7;
    ///////////////

    //棋盘初始化
    for (var i = 0, len = qizi.length; i < len; i++) {
        //设置棋子标签的属性index
        qizi[i].setAttribute('index', i);
        //设置棋子onclick
        if (getQiziType(i)) {
            qizi[i].setAttribute('onclick', 'move(this)')
        }
    }
}

function rendering() {
    var flag = 0;
    for (var i = 0; i < 10; i++)
        for (var j = 0; j < 9; j++) {
            qipan[flag].className = Qizi[map[i][j]];
            flag += 1;
        }
}

function getYX(num) {
    var flag = 0;
    for (var i = 0; i < 10; i++)
        for (var j = 0; j < 9; j++) {
            if (flag == num)
                return {'y': i, 'x': j};
            flag += 1;
        }
}

function getQiziType(num) {
    var flag = 0;
    for (var i = 0; i < 10; i++)
        for (var j = 0; j < 9; j++) {
            if (flag == num)
                return map[i][j];
            flag += 1;
        }
}

function YXtoIndex(y, x) {
    var flag = 0
    for (var i = 0; i <= y; i++)
        if (i == y)
            for (var j = 0; j < x; j++)
                flag += 1;
        else
            flag += 9;
    return flag;
}

function initQiziOnclick() {
    for (var i = 0, len = qizi.length; i < len; i++)
        //设置棋子onclick
        if (getQiziType(i))
            qizi[i].setAttribute('onclick', 'move(this)')
        else
            qizi[i].removeAttribute('onclick', 'move(this)')
}

function removeQiziOnclick() {
    for (var i = 0, len = qizi.length; i < len; i++)
        qizi[i].removeAttribute('onclick', 'move(this)')
}

function own(origin, target) {
    if (origin - 10 < 0 && target - 10 > 0 || origin - 10 > 0 && target - 10 < 0)
        return 1;
    return 0;
}



function onload() {

    init();
    rendering();
}
