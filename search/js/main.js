//用户欢迎
    iziToast.settings({
        timeout: 3000,
        backgroundColor: '#ffffff40',
        titleColor: '#efefef',
        messageColor: '#efefef',
        progressBar: false,
        close: false,
        closeOnEscape: true,
        position: 'topCenter',
        transitionIn: 'bounceInDown',
        transitionOut: 'flipOutX',
        displayMode: 'replace',
        layout: '1'
    });
    setTimeout(function () {
        iziToast.show({
            title: hello,
            message: ' '
        });
    }, 800);

}, false)

//进入问候
now = new Date(), hour = now.getHours()
if (hour < 6) {
    var hello = "凌晨好，记得下次别熬夜啦！";
} else if (hour < 9) {
    var hello = "早上好，起床了！";
} else if (hour < 12) {
    var hello = "上午好，摸鱼程序已启动";
} else if (hour < 14) {
    var hello = "中午好，干饭了食堂我来啦！";
} else if (hour < 17) {
    var hello = "下午好，打卡下班";
} else if (hour < 19) {
    var hello = "傍晚好，要看电影吗？";
} else if (hour < 22) {
    var hello = "晚上好，不早了快睡吧晚安";
} else {
    var hello = "夜深了，睡不着吗？";
}

//获取时间
var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    dt = new Date();
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    var weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    var day = dt.getDay();
    var h = dt.getHours();
    var m = dt.getMinutes();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    $("#time_text").html(h + '<span id="point">:</span>' + m);
    $("#day").html(mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + weekday[day]);
    t = setTimeout(time, 1000);
}

//获取天气
//每日限量 100 次
fetch('https://yiketianqi.com/api?unescape=1&version=v6&appid=43986679&appsecret=TksqGZT7')
    .then(response => response.json())
    .then(data => {
        //$('#wea_text').html(data.wea + '&nbsp;' + data.tem_night + '℃' + '&nbsp;~&nbsp;' + data.tem_day + '℃')
        $('#wea_text').text(data.wea)
        $('#tem1').text(data.tem1)
        $('#tem2').text(data.tem2)
    })
    .catch(console.error)

//搜索按钮
$(".sou-button").click(function () {
    iziToast.show({
        message: '行为异常#10086',
    });
    // $('#search-submit').click();
});

//控制台输出
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`
var styleContent = `
color: rgb(30,152,255);
`
var title1 = 'Snavigation'
var title2 = `
 _____ __  __  _______     ____     __
|_   _|  \\/  |/ ____\\ \\   / /\\ \\   / /
  | | | \\  / | (___  \\ \\_/ /  \\ \\_/ / 
  | | | |\\/| |\\___ \\  \\   /    \\   /  
 _| |_| |  | |____) |  | |      | |   
|_____|_|  |_|_____/   |_|      |_|                                                     
`
var content = `
版 本 号：1.0
更新日期：2022-03-22

Github:  https://github.com/imsyy/Snavigation
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)
