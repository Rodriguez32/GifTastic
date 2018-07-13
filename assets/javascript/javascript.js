/* GifTastic */

$(document).ready(function() {
// array for buttons
var topics = ["Parrot" , "Owl" , "Eagle", "Hummingbird"];

for (var i = 0; i < topics.length; i++) {
        var button = $(" <button> " + topics[i] + " <button> ")
       $("#showButton").append(button);
}

function addNewButton() {
        $("addGif").on("click", function() {
                  var bird = $("#topicInput").val().trim();
                  if (bird == ""){
                          return false;
                  }
                  topic.push(bird);

                  showButton();
                  return false;
        });
        
}

function showGifs(){
        var birds = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        birds + "&api_key=IzkxH5nTOLLsfaxktzTqrDHHsNaWopf9&limit=10";
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

                        birdImage.attr("src", results[i].images.fixed_height.url);
                        console.log(birdImage);
                        
                        birdDiv.append(p);
                        birdDiv.append(birdImage);

                        $("#seeGifs").append(birdImage);     
                }

                
        })

}



});











        





        