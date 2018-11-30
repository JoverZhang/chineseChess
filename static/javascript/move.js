/*
* @Author: Marte
* @Date:   2018-11-17 22:03:23
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-19 16:05:15
*/

// var qipan2Move = document.getElementById('qipan2Move')
// var qiziMove = document.getElementById('qipan2Move').getElementsByTagName("div");


'use strict';

var inMove = 0;
var position = [0, 0];

function jiang(type, y, x) {
    inMove = 1;
    try {
        if (map[y + 1][x] == 0 && y + 1 != 3) {
            qipan[YXtoIndex(y + 1, x)].className = 'canMove'
            qizi[YXtoIndex(y + 1, x)].setAttribute('onclick', 'move(this)')
        }
        else if (y + 1 != 3 && own(map[position[0]][position[1]], map[y + 1][x]))
            qizi[YXtoIndex(y + 1, x)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y - 1][x] == 0) {
            qipan[YXtoIndex(y - 1, x)].className = 'canMove'
            qizi[YXtoIndex(y - 1, x)].setAttribute('onclick', 'move(this)')
        }
        else if (own(map[position[0]][position[1]], map[y - 1][x]))
            qizi[YXtoIndex(y - 1, x)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y][x + 1] == 0 && x + 1 != 6) {
            qipan[YXtoIndex(y, x + 1)].className = 'canMove'
            qizi[YXtoIndex(y, x + 1)].setAttribute('onclick', 'move(this)')
        }
        else if (x + 1 != 6 && own(map[position[0]][position[1]], map[y][x + 1]))
            qizi[YXtoIndex(y, x + 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y][x - 1] == 0 && x - 1 != 2) {
            qipan[YXtoIndex(y, x - 1)].className = 'canMove'
            qizi[YXtoIndex(y, x - 1)].setAttribute('onclick', 'move(this)')
        }
        else if (x - 1 != 2 && own(map[position[0]][position[1]], map[y][x - 1]))
            qizi[YXtoIndex(y, x - 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    for (var i = y; i < 10; i++)
        if (map[i][x] == 1) {
            qizi[YXtoIndex(i, x)].setAttribute('onclick', 'move(this)');
            break;
        }
}

function shuai(type, y, x) {
    inMove = 1;
    try {
        if (map[y + 1][x] == 0) {
            qipan[YXtoIndex(y + 1, x)].className = 'canMove'
            qizi[YXtoIndex(y + 1, x)].setAttribute('onclick', 'move(this)')
        }
        else if (own(map[position[0]][position[1]], map[y + 1][x]))
            qizi[YXtoIndex(y + 1, x)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y - 1][x] == 0 && y - 1 != 6) {
            qipan[YXtoIndex(y - 1, x)].className = 'canMove'
            qizi[YXtoIndex(y - 1, x)].setAttribute('onclick', 'move(this)')
        }
        else if (y - 1 != 6 && own(map[position[0]][position[1]], map[y - 1][x]))
            qizi[YXtoIndex(y - 1, x)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y][x + 1] == 0 && x + 1 != 6) {
            qipan[YXtoIndex(y, x + 1)].className = 'canMove'
            qizi[YXtoIndex(y, x + 1)].setAttribute('onclick', 'move(this)')
        }
        else if (x + 1 != 6 && own(map[position[0]][position[1]], map[y][x + 1]))
            qizi[YXtoIndex(y, x + 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y][x - 1] == 0 && x - 1 != 2) {
            qipan[YXtoIndex(y, x - 1)].className = 'canMove'
            qizi[YXtoIndex(y, x - 1)].setAttribute('onclick', 'move(this)')
        }
        else if (x - 1 != 2 && own(map[position[0]][position[1]], map[y][x - 1]))
            qizi[YXtoIndex(y, x - 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    for (var i = y; i > -1; i--)
        if (map[i][x] == 11) {
            qizi[YXtoIndex(i, x)].setAttribute('onclick', 'move(this)');
            break;
        }
}

function shi(tyoe, y, x) {
    inMove = 1;
    try {
        if (map[y + 1][x + 1] == 0 && x + 1 != 6 && y + 1 != 3) {
            qipan[YXtoIndex(y + 1, x + 1)].className = 'canMove'
            qizi[YXtoIndex(y + 1, x + 1)].setAttribute('onclick', 'move(this)')
        }
        else if (x + 1 != 6 && y + 1 != 3 && own(map[position[0]][position[1]], map[y + 1][x + 1]))
            qizi[YXtoIndex(y + 1, x + 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y - 1][x + 1] == 0 && x + 1 != 6 && y - 1 != 6) {
            qipan[YXtoIndex(y - 1, x + 1)].className = 'canMove'
            qizi[YXtoIndex(y - 1, x + 1)].setAttribute('onclick', 'move(this)')
        }
        else if (x + 1 != 6 && y - 1 != 6 && own(map[position[0]][position[1]], map[y - 1][x + 1]))
            qizi[YXtoIndex(y - 1, x + 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y - 1][x - 1] == 0 && x - 1 != 2 && y - 1 != 6) {
            qipan[YXtoIndex(y - 1, x - 1)].className = 'canMove'
            qizi[YXtoIndex(y - 1, x - 1)].setAttribute('onclick', 'move(this)')
        }
        else if (x - 1 != 2 && y - 1 != 6 && own(map[position[0]][position[1]], map[y - 1][x - 1]))
            qizi[YXtoIndex(y - 1, x - 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y + 1][x - 1] == 0 && x - 1 != 2 && y + 1 != 3) {
            qipan[YXtoIndex(y + 1, x - 1)].className = 'canMove'
            qizi[YXtoIndex(y + 1, x - 1)].setAttribute('onclick', 'move(this)')
        }
        else if (x - 1 != 2 && y + 1 != 3 && own(map[position[0]][position[1]], map[y + 1][x - 1]))
            qizi[YXtoIndex(y + 1, x - 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
}

function xiang(type, y, x) {
    inMove = 1;
    try {
        if (map[y + 2][x + 2] == 0 && map[y + 1][x + 1] == 0 && y != 4) {
            qipan[YXtoIndex(y + 2, x + 2)].className = 'canMove'
            qizi[YXtoIndex(y + 2, x + 2)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y + 1][x + 1] == 0 && y != 4 && own(map[position[0]][position[1]], map[y + 2][x + 2]))
            qizi[YXtoIndex(y + 2, x + 2)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y + 2][x - 2] == 0 && map[y + 1][x - 1] == 0 && y != 4) {
            qipan[YXtoIndex(y + 2, x - 2)].className = 'canMove'
            qizi[YXtoIndex(y + 2, x - 2)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y + 1][x - 1] == 0 && y != 4 && own(map[position[0]][position[1]], map[y + 2][x - 2]))
            qizi[YXtoIndex(y + 2, x - 2)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y - 2][x - 2] == 0 && map[y - 1][x - 1] == 0 && y != 5) {
            qipan[YXtoIndex(y - 2, x - 2)].className = 'canMove'
            qizi[YXtoIndex(y - 2, x - 2)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y - 1][x - 1] == 0 && y != 5 && own(map[position[0]][position[1]], map[y - 2][x - 2]))
            qizi[YXtoIndex(y - 2, x - 2)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y - 2][x + 2] == 0 && map[y - 1][x + 1] == 0 && y != 5) {
            qipan[YXtoIndex(y - 2, x + 2)].className = 'canMove'
            qizi[YXtoIndex(y - 2, x + 2)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y - 1][x + 1] == 0 && y != 5 && own(map[position[0]][position[1]], map[y - 2][x + 2]))
            qizi[YXtoIndex(y - 2, x + 2)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
}

function ma(type, y, x) {
    inMove = 1;
    try {
        if (map[y + 2][x + 1] == 0 && map[y + 1][x] == 0) {
            qipan[YXtoIndex(y + 2, x + 1)].className = 'canMove'
            qizi[YXtoIndex(y + 2, x + 1)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y + 1][x] == 0 && own(map[position[0]][position[1]], map[y + 2][x + 1]))
            qizi[YXtoIndex(y + 2, x + 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y + 2][x - 1] == 0 && map[y + 1][x] == 0) {
            qipan[YXtoIndex(y + 2, x - 1)].className = 'canMove'
            qizi[YXtoIndex(y + 2, x - 1)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y + 1][x] == 0 && own(map[position[0]][position[1]], map[y + 2][x - 1]))
            qizi[YXtoIndex(y + 2, x - 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y - 2][x + 1] == 0 && map[y - 1][x] == 0) {
            qipan[YXtoIndex(y - 2, x + 1)].className = 'canMove'
            qizi[YXtoIndex(y - 2, x + 1)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y - 1][x] == 0 && own(map[position[0]][position[1]], map[y - 2][x + 1]))
            qizi[YXtoIndex(y - 2, x + 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y - 2][x - 1] == 0 && map[y - 1][x] == 0) {
            qipan[YXtoIndex(y - 2, x - 1)].className = 'canMove'
            qizi[YXtoIndex(y - 2, x - 1)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y - 1][x] == 0 && own(map[position[0]][position[1]], map[y - 2][x - 1]))
            qizi[YXtoIndex(y - 2, x - 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y + 1][x + 2] == 0 && map[y][x + 1] == 0) {
            qipan[YXtoIndex(y + 1, x + 2)].className = 'canMove'
            qizi[YXtoIndex(y + 1, x + 2)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y][x + 1] == 0 && own(map[position[0]][position[1]], map[y + 1][x + 2]))
            qizi[YXtoIndex(y + 1, x + 2)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y + 1][x - 2] == 0 && map[y][x - 1] == 0) {
            qipan[YXtoIndex(y + 1, x - 2)].className = 'canMove'
            qizi[YXtoIndex(y + 1, x - 2)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y][x - 1] == 0 && own(map[position[0]][position[1]], map[y + 1][x - 2]))
            qizi[YXtoIndex(y + 1, x - 2)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y - 1][x + 2] == 0 && map[y][x + 1] == 0) {
            qipan[YXtoIndex(y - 1, x + 2)].className = 'canMove'
            qizi[YXtoIndex(y - 1, x + 2)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y][x + 1] == 0 && own(map[position[0]][position[1]], map[y - 1][x + 2]))
            qizi[YXtoIndex(y - 1, x + 2)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y - 1][x - 2] == 0 && map[y][x - 1] == 0) {
            qipan[YXtoIndex(y - 1, x - 2)].className = 'canMove'
            qizi[YXtoIndex(y - 1, x - 2)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y][x - 1] == 0 && own(map[position[0]][position[1]], map[y - 1][x - 2]))
            qizi[YXtoIndex(y - 1, x - 2)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }

}

function che(type, y, x) {
    inMove = 1;
// down
    for (var i = y + 1; i < 10; i++)
        if (map[i][x] == 0) {
            qipan[YXtoIndex(i, x)].className = 'canMove'
            qizi[YXtoIndex(i, x)].setAttribute('onclick', 'move(this)')
        }
        else {
            if (own(map[position[0]][position[1]], map[i][x]))
                qizi[YXtoIndex(i, x)].setAttribute('onclick', 'move(this)')
            break;
        }
// up
    for (var i = y - 1; i > -1; i--)
        if (map[i][x] == 0) {
            qipan[YXtoIndex(i, x)].className = 'canMove'
            qizi[YXtoIndex(i, x)].setAttribute('onclick', 'move(this)')
        }
        else {
            if (own(map[position[0]][position[1]], map[i][x]))
                qizi[YXtoIndex(i, x)].setAttribute('onclick', 'move(this)')
            break;
        }
// right
    for (var i = x + 1; i < 9; i++)
        if (map[y][i] == 0) {
            qipan[YXtoIndex(y, i)].className = 'canMove'
            qizi[YXtoIndex(y, i)].setAttribute('onclick', 'move(this)')
        }
        else {
            if (own(map[position[0]][position[1]], map[y][i]))
                qizi[YXtoIndex(y, i)].setAttribute('onclick', 'move(this)')
            break;
        }
// left
    for (var i = x - 1; i > -1; i--)
        if (map[y][i] == 0) {
            qipan[YXtoIndex(y, i)].className = 'canMove'
            qizi[YXtoIndex(y, i)].setAttribute('onclick', 'move(this)')
        }
        else {
            if (own(map[position[0]][position[1]], map[y][i]))
                qizi[YXtoIndex(y, i)].setAttribute('onclick', 'move(this)')
            break;
        }
}

function pao(type, y, x) {
    inMove = 1;
// down
    for (var i = y + 1; i < 10; i++)
        if (map[i][x] == 0) {
            qipan[YXtoIndex(i, x)].className = 'canMove'
            qizi[YXtoIndex(i, x)].setAttribute('onclick', 'move(this)')
        }
        else if (map[i][x] != 0) {
            for (var j = i + 1; j < 10; j++)
                if (map[j][x] != 0) {
                    qizi[YXtoIndex(j, x)].setAttribute('onclick', 'move(this)')
                    break;
                }
            break;
        }

//up
    for (var i = y - 1; i > -1; i--)
        if (map[i][x] == 0) {
            qipan[YXtoIndex(i, x)].className = 'canMove'
            qizi[YXtoIndex(i, x)].setAttribute('onclick', 'move(this)')
        }
        else if (map[i][x] != 0) {
            for (var j = i - 1; j > -1; j--)
                if (map[j][x] != 0) {
                    qizi[YXtoIndex(j, x)].setAttribute('onclick', 'move(this)')
                    break;
                }
            break;
        }
// right
    for (var i = x + 1; i < 9; i++)
        if (map[y][i] == 0) {
            qipan[YXtoIndex(y, i)].className = 'canMove'
            qizi[YXtoIndex(y, i)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y][i] != 0) {
            for (var j = i + 1; j < 9; j++)
                if (map[y][j] != 0) {
                    qizi[YXtoIndex(y, j)].setAttribute('onclick', 'move(this)')
                    break;
                }
            break;
        }
// left
    for (var i = x - 1; i > -1; i--)
        if (map[y][i] == 0) {
            qipan[YXtoIndex(y, i)].className = 'canMove'
            qizi[YXtoIndex(y, i)].setAttribute('onclick', 'move(this)')
        }
        else if (map[y][i] != 0) {
            for (var j = i - 1; j > -1; j--)
                if (map[y][j] != 0) {
                    qizi[YXtoIndex(y, j)].setAttribute('onclick', 'move(this)')
                    break;
                }
            break;
        }
}

function zu1(type, y, x) {
    inMove = 1;
    try {
        if (map[y + 1][x] == 0) {
            qipan[YXtoIndex(y + 1, x)].className = 'canMove';
            qizi[YXtoIndex(y + 1, x)].setAttribute('onclick', 'move(this)');
        }
        else if (own(map[position[0]][position[1]], map[y + 1][x]))
            qizi[YXtoIndex(y + 1, x)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y][x + 1] == 0 && y + 1 >= 6) {
            qipan[YXtoIndex(y, x + 1)].className = 'canMove'
            qizi[YXtoIndex(y, x + 1)].setAttribute('onclick', 'move(this)')
        }
        else if (y + 1 >= 6 && own(map[position[0]][position[1]], map[y][x + 1]))
            qizi[YXtoIndex(y, x + 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y][x - 1] == 0 && y + 1 >= 6) {
            qipan[YXtoIndex(y, x - 1)].className = 'canMove'
            qizi[YXtoIndex(y, x - 1)].setAttribute('onclick', 'move(this)')
        }
        else if (y + 1 >= 6 && own(map[position[0]][position[1]], map[y][x - 1]))
            qizi[YXtoIndex(y, x - 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
}

function bing1(type, y, x) {
    inMove = 1;
    try {
        if (map[y - 1][x] == 0) {
            qipan[YXtoIndex(y - 1, x)].className = 'canMove';
            qizi[YXtoIndex(y - 1, x)].setAttribute('onclick', 'move(this)');
        }
        else if (own(map[position[0]][position[1]], map[y - 1][x]))
            qizi[YXtoIndex(y - 1, x)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y][x + 1] == 0 && y - 1 <= 3) {
            qipan[YXtoIndex(y, x + 1)].className = 'canMove'
            qizi[YXtoIndex(y, x + 1)].setAttribute('onclick', 'move(this)')
        }
        else if (y - 1 <= 3 && own(map[position[0]][position[1]], map[y][x + 1]))
            qizi[YXtoIndex(y, x + 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
    try {
        if (map[y][x - 1] == 0 && y - 1 <= 3) {
            qipan[YXtoIndex(y, x - 1)].className = 'canMove'
            qizi[YXtoIndex(y, x - 1)].setAttribute('onclick', 'move(this)')
        }
        else if (y - 1 <= 3 && own(map[position[0]][position[1]], map[y][x - 1]))
            qizi[YXtoIndex(y, x - 1)].setAttribute('onclick', 'move(this)')
    } catch (err) {
    }
}

function move(obj) {
    var index = obj.getAttribute('index');
    var YX = getYX(index);
    var type = getQiziType(index);
    if (inMove == 0) {
        removeQiziOnclick()
        qizi[index].setAttribute('onclick', 'move(this)')
        position = [YX['y'], YX['x']];
        if (type == 1)
            shuai(type, YX['y'], YX['x']);
        else if (type == 2)
            shi(type, YX['y'], YX['x']);
        else if (type == 3)
            xiang(type, YX['y'], YX['x']);
        else if (type == 4)
            ma(type, YX['y'], YX['x']);
        else if (type == 5)
            che(type, YX['y'], YX['x']);
        else if (type == 6)
            pao(type, YX['y'], YX['x']);
        else if (type == 7)
            bing1(type, YX['y'], YX['x']);
        else if (type == 11)
            jiang(type, YX['y'], YX['x']);
        else if (type == 12)
            shi(type, YX['y'], YX['x']);
        else if (type == 13)
            xiang(type, YX['y'], YX['x']);
        else if (type == 14)
            ma(type, YX['y'], YX['x']);
        else if (type == 15)
            che(type, YX['y'], YX['x']);
        else if (type == 16)
            pao(type, YX['y'], YX['x']);
        else if (type == 17)
            zu1(type, YX['y'], YX['x']);

    }
    else if (position[0] == YX['y'] && position[1] == YX['x']) {
        initQiziOnclick(down)
        rendering()
        inMove = 0;
        // down = 0
        // key += 1;
    }
    else {
        type = map[position[0]][position[1]]
        // alert(YX['y']+' '+ YX['x'])
        map[position[0]][position[1]] = 0;
        map[YX['y']][YX['x']] = type
        rendering()
        initQiziOnclick(down)
        inMove = 0;
        down = 0
        key += 1;
    }
}
