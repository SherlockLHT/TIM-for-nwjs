function initButton(){
    console.log("init button");
    var all_buttons = document.querySelectorAll(".menu-bar li img");
    console.log(all_buttons.length);
    all_buttons.forEach(function(button, index){
        button.onmouseover=function(){
            var image = this.src;
            this.src = image.replace(".png", "-hover.png");
        }
        button.onmouseleave=function(){
            var image = this.src;
            this.src = image.replace("-hover", "");
        }
    });
    document.querySelector("#close-button").onclick=function(){
        console.log("close");
        win.close();
    }
    document.querySelector("#minimize-button").onclick=function(){
        win.minimize();
    }
    document.querySelector("#drop-down-button").onclick=function(){
        console.log("drop down");
    }
}

//exports.initButton = initButton;