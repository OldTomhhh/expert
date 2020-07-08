function Lunbo(imgs, btns, lis, j, carousel) {
    this.imgs = imgs;
    this.btns = btns;
    this.lis = lis;
    this.j = j;
    this.carousel = carousel;
}

Lunbo.prototype.init = function () {//初始化
    this.autoplay(1)
    this.band()
}
Lunbo.prototype.band = function () {//绑定事件
    var me = this
    for (var i in this.btns) {
        this.btns[i].onclick = function () {
            if (this.innerHTML == '右') {
                me.go(1)
            } else {
                me.go(-1)
            }
        }
    }
    for (var k in this.lis) {
        this.lis[k].onclick = function () {
            me.j = parseInt(this.getAttribute("num"))
            me.go();
        }
    }
    this.carousel.onmouseover = function () {
        me.autoplay(2)
    }
    this.carousel.onmouseout = function () {
        me.autoplay(1)
    }

}
Lunbo.prototype.go = function (a) {//动画开始
    if (a !== undefined) {
        this.j += a
        if (this.j == 4) {
            this.j = 0
        } else if (this.j == -1) {
            this.j = 2
        }
    }
    console.log(this.j)
    for (var i in this.lis) {
        this.imgs[i].className = "";
        this.lis[i].className = "";
    }
    this.imgs[this.j].className = "active";
    this.lis[this.j].className = "active";
}
Lunbo.prototype.autoplay = function (b) {//自动播放
    var me = this
    if (b == 1) {
        this.timer = setInterval(function () {
            me.go(1)

        }, 1000)
    } else if (b == 2) {
        clearInterval(this.timer)
    }
}


var imgs = document.querySelectorAll('.banner img')
var btns = document.querySelectorAll('.banner button')
var lis = document.querySelectorAll('.banner li')
var carousel = document.querySelector(".banner");
var lun1 = new Lunbo(imgs, btns, lis, 0, carousel)

lun1.init()