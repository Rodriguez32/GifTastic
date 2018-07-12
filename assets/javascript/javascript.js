/* GifTastic */
// button for event listener
$("button").on("click", function() {
        var bird = $(this).attr("data-bird");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        bird + "&api_key=IzkxH5nTOLLsfaxktzTqrDHHsNaWopf9&limit=10";


// loads AJAx call
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);
// the image is inside the data key. this variable set to results will bring image
        var results = response.data;
// for loop to put ratings on each gif
        for (var i = 0; i < results.length; i++) {
        var birdDiv = $("<div>");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);

        var birdImage = $("<img>");

        birdImage.attr("src", results[i].images.fixed_height.url);
        console.log(birdImage);
        birdImage.attr("data-still",results[i].images.fixed_height_small_still.url); // still image
        birdImage.attr("data-animate",results[i].images.fixed_height_small.url); // animated image
        birdImage.attr("data-state", "still"); // set the image state


        birdDiv.append(p);
        birdDiv.append(birdImage);

        $("#gifs-go-here").append(birdDiv);   
                
}

        
        });
        
});



        