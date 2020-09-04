/*global $ pageLoad*/
var headerHeight;
$(document).ready(function() {
    loadContent();
    $("#header").load("header.html", function() {
        console.log("Loaded Header.");
        headerHeight = $("#navbar").css("height");
        $("#main").css("margin-top", headerHeight);

        pageLoad();
    });
    $("#footer").load( "footer.html", function() {
        console.log("Loaded Footer.");
    });

    //redirect popup
    $("#popup-area").load("popup.html", function(){
        console.log("Loaded redirect message.");
    });

    //for dropdown menu
    $(document).on("hide.bs.dropdown", ".dropdown", function (event) {
        $(event.target).find(">.dropdown-menu:first").slideUp(200);
    });

    $(document).on("show.bs.dropdown", ".dropdown", function (event) {
        $(event.target).find(">.dropdown-menu:first").slideDown(200);
    });
});

function loadContent(pageName){
    //fetch document using jsonp (appended ?callback=? at end of url)
    var json;
    $.getJSON("https://script.google.com/macros/s/AKfycbzFvMyNfX9QfnnLVNvrG16xG_qatUA9RekFFcgrGahp8QP5wTQF/exec?callback=?",
            {id: "1KjalwnM5gxG2Ob-UjXYDLlznXpZQrgRziOIedRKwW9c", name: pageName}, insertContent);
}

function insertContent(json){
    for(var i in json){ // loop through groups of ids
        for(var j = 0; j < json[i].length; j++){ // loop through ids
            if(json[i][j]){ //make sure value is present
                if(json[i][j].match(/^(https:\/\/|http:\/\/)/)){ // match http:// or https:// we are dealing with an image (or some url) here
                    $("#" + i + "-" + j).attr("src", json[i][j]);
                    console.log(json[i][j]);
                }else{ // normal html
                    $("#" + i + "-" + j).html(json[i][j]);
                }
            }
        }
    }
    //TODO Lazy loading
    /*$('img').Lazy({
        effect: "fadeIn",
        effectTime: 200,
        threshold: 0
    });*/
}
