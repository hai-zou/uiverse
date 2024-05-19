//获取到开始的点击按钮
var btn = document.querySelector('.btn')
//获取到所有的选项
var all = document.querySelectorAll('.box')
//获取最终结果的容器
var result = document.querySelector('.result p')

//定义一个定时器
var timer

btn.onclick = function () {
  //每次点击前关闭定时器
  clearInterval(timer)

  //定义一个时间戳
  var date = new Date()

  function run() {
    //每一次执行前将所有边框重置为透明
    for (var i = 0; i < all.length; i++) {
      all[i].style.borderColor = 'transparent'
    }

    //生成一个 0-7 的随机数
    var num = Math.floor(Math.random() * 8)
    all[num].style.borderColor = 'red'

    //当时间超过三秒的时候关闭定时器
    if (new Date() - date > 3000) {
      clearInterval(timer)
      result.innerText = all[num].innerText
    }
  }
  timer = setInterval(run, 100)
}