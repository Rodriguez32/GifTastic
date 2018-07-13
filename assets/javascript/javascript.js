/* GifTastic */

$(document).ready(function() {
// array for buttons
var topics = ["Parrot", "Owl", "Eagle", "Hummingbird"];

// function to display buttons
function showgifButtons(){
        $("#showButton").empty();
        for(var i = 0; i < topics.length; i++) {
                var gifButton = $("<button>");
                console.log(gifButton);
                gifButton.addClass("birds");
                console.log(addClass);
                gifButton.attr("data-name", topics[i]);
                gifButton.text(topics[i]);
                $("#showButton").append(gifButton);
        }
}


});



//var bird = $(this).attr("data-bird");
        //var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        //bird + "&api_key=IzkxH5nTOLLsfaxktzTqrDHHsNaWopf9&limit=10";









        





        