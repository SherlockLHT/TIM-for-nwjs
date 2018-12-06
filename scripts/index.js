var win = nw.Window.get();
//win.showDevTools();

var menu = new nw.Menu({type:'menubar'});//创建菜单条

//添加菜单项
menu.append(new nw.MenuItem({
    label: 'Item A',
    click: function(){
        alert("Click item A");
    }
}));
menu.append(new nw.MenuItem({
    type: 'separator'
}));
menu.append(new nw.MenuItem({
    label: 'Item B',
    click: function(){
        alert("Click item B");
    }
}));



win.menu = menu;//将创建的菜单栏设置为窗口属性