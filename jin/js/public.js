// 导航条

var as = document.querySelectorAll('.head_box li a')

for(var i = 0;i<as.length;i++){
    as[i].onmouseover = function(){
        for(var j = 0;j<as.length;j++){
            as[j].style.borderBottom = ''
        }
        this.style.borderBottom = '2px solid darkred'
    }
}