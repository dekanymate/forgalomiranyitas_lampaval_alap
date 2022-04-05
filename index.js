window.addEventListener("load",init)
function CLASS(elem) {
    return document.getElementsByClassName(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}

function init(){
    var piros = $(".piros")[0];
    var sarga = $(".sarga")[0];
    var zold = $(".zold")[0];
    var sarga = document.querySelector(".sarga")
    var zold = document.querySelector(".zold")
    sarga.style.opacity = 0.2;
    zold.style.opacity = 0.2;

    setInterval(
        function(){
            piros.style.opacity = 1;
            sarga.style.opacity = 1;
            zold.style.opacity  =0.2;
        }
        ,2000);
    
    setInterval(
        function(){
            piros.style.opacity = 0.2;
            sarga.style.opacity = 0.2;
            zold.style.opacity = 1;
            if(zold.style.opacity = 1){
                CLASS("auto")[0].classList.add("balroljobbra")
            }
        }
        ,5000);
    
    
}

