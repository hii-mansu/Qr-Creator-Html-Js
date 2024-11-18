var input = document.querySelector(".info input");
var btn = document.querySelector(".info button");
var img = document.querySelector(".items .imgsec img");

btn.addEventListener("click", function(){
    var url = input.value;
    if(!url){
        alert("Enter URL First");
    }
    else{
        img.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
        img.alt=`qr code for ${url}`;
    }
})