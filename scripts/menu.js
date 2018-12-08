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
}

//exports.initButton = initButton;