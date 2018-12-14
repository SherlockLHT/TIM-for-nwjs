var win = nw.Window.get();//获取当前窗口的window对象
//win.x = 1450;
//win.y = 50;
win.x = 450;
win.y = 70;
//win.showDevTools();

var menu = require("./scripts/menu");//加载其他模块
// window.onload=function(){
//     menu.temp();
//     console.log(222);
// }

function moveWin(x, y){
    win.x = x;
    win.y = y;
}

window.onload=function(){
    console.log("ready");
    initButton();

    document.querySelector("body").onclick=function(e){
        console.log("double click");
        //e.preventDefault();
    }
    
}

// var menu = new nw.Menu({type:'menubar'});//创建菜单条

// //添加菜单项
// menu.append(new nw.MenuItem({
//     label: '最小化',
//     click: function(){
//         win.minimize();
//     }
// }));
// menu.append(new nw.MenuItem({
//     type: 'separator'
// }));
// menu.append(new nw.MenuItem({
//     label: 'Item B',
//     click: function(){
//         console.log("x pos: " + win.x);
//         console.log("y pos: " + win.y);
//     }
// }));

// win.menu = menu;//将创建的菜单栏设置为窗口属性
// //win.menu = null;//移除菜单

// //监听最小化事件
// win.on('minimize', function(){
//     console.log("最小化");
// });
// //win.removeAllListeners('minimize');//移除最小化监听事件