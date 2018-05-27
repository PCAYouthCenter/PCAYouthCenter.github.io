/*global $*/

//resizes the carousel
function resize(){
    var carouselWidth = carouselHeight * aspectRatio;
    var carouselHeight = parseInt($(window).height()) - parseInt(headerHeight);
    
    var imgWidth = $("body").prop("clientWidth");
    var imgHeight = $("body").prop("clientWidth") / aspectRatio;
    
    if(window.innerWidth / aspectRatio > carouselHeight){//window width is greater, add padding to width only
        //resize to webpage
        resizeImage(imgWidth, imgHeight);//maintain aspect ratio
        resizeCarousel(imgWidth, carouselHeight);//only display image from bottom of header to bottom of viewport
    }else{//possible height is greater, just maintain aspect ratio
        //resize to webpage
        resizeImage(imgWidth, imgHeight);
        resizeCarousel(imgWidth, imgHeight);
    }
}

function resizeImage(width, height){
    $(".carousel-image").css("width", width + "px");
    $(".carousel-image").css("height", height + "px");
}

function resizeCarousel(width, height){
    $(".carousel-item").css("width", width + "px");
    $(".carousel-item").css("height", height + "px");
    $(".carousel-inner").css("width", width + "px");
    $(".carousel-inner").css("height", height + "px");
}

var aspectRatio = 16/9;
function pageLoad(){
    resize();
    $(window).resize(resize);
    
    //position article title to "stick" to header when scrolling
    $(".article-title").css("top", parseInt(headerHeight) - 1 + "px");
}