/*global $ pageLoad*/
var headerHeight;
$(document).ready(function() {
    $("#header").load("header.html", function() {
        console.log("Loaded Header.");
        headerHeight = $("#navbar").css("height");
        $("#main").css("margin-top", headerHeight);
        
        pageLoad();
    });
    $("#footer").load( "footer.html", function() {
        console.log("Loaded Footer.");
    });
});