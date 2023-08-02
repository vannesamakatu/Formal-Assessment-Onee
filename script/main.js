//when document loads
$(document).ready(function(){

    console.log("hello");

// home---------------------------------------------    
$(".hero-image").animate({top:'-=100px'})

// browse------------------------------------------------
// hide all description text from the plant cards
$("#descriptionText").hide();

});

// when plant card is clicked
$(".card").click(function(){

//Toggle the price & description text 
$("#priceText").toggle();
$("#descriptionText").toggle();

// Resize the image to fit the additional content
$(".card-img-top").toggleClass("small")
});

//Remove items in wishlist

    // When the "Click to Remove" button is clicked
    $("#plant-table").on("click", function() {
      // Remove 
      $("tr").remove();
    });

  







