/* GifTastic */

$(document).ready(function() {
// array for buttons
var topics = ["Parrot" , "Owl" , "Eagle", "Hummingbird"];

for (var i = 0; i < topics.length; i++) {
        var button = $(" <button> " + topics[i] + " <button> ")
       $("#showButton").append(button);
}
// function only blinks on page but is not running
function addNewButton() {
        console.log(addNewButton);
        $("showButton").on("click", function() {
                  var bird = $("#topicInput").val().trim();
                  if (bird == ""){
                          return false;
                  }
                  topic.push(bird);

                  showButton();
                  return false;
        });
        
}
// function is not responding. However when I first started project I made buttons on html
// Then the ajax call like below. And that had my giphs showing on my page. 
function showGifs(){
        var birds = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + birds
         + "&api_key=IzkxH5nTOLLsfaxktzTqrDHHsNaWopf9&limit=10";
        console.log(queryURL);

        $.ajax({
                url:queryURL,
                method: "GET"
        })
        .then(function(response) {
        console.log(response);        
                
        var results = response.data;

                for (var i = 0; i < results.length; i++) {
                        var birdDiv = $("<div>");
                        var rating = results[i].rating;
                        var p = $("<p>").text("Rating: " + rating);

                        var birdImage = $("<img>");
                        
                        // If I activate this it shows gifs but not the birds ones
                        //birdImage.attr("src", results[i].images.fixed_height.url);
                        console.log(birdImage);
                        //still image and animated image
                        birdImage.attr("data-still",results[i].images.fixed_height_still.url);
                        birdImage.attr("data-animate",results[i].images.fixed_height_small.url);
                        birdImage.attr("data-state", "still");
                        birdImage.addClass("image");
                        birdDiv.append(birdImage);

                        birdDiv.append(p);
                        birdDiv.append(birdImage);

                        $("#seeGifs").append(birdImage);     
                }

                
        })

}
//calling the functions
addNewButton();
showGifs();

//event listeners
$(document).on("click", "topics", showGifs);
$(document).on("click", ".image", function () {
        var state = (this).attr("data-state");
        if (state == "still") {
                $(this).attr("src", $(this).data("animate"));
                $(this).attr("data-state", "animate");
        } else{
                $(this).attr("src", $(this).data("still"));
                $(this).attr("data-state", "still");
        }
});



});










        





        