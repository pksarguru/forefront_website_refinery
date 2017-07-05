// setting tabs height in organization section

var biggestHeight = 0;
// Loop through elements children to find & set the biggest height

$(document).on('turbolinks:load',function(){
  $(".tab-pane *").each(function(){
    // If this elements height is bigger than the biggestHeight
    if ($(this).height() > biggestHeight ) {
      // Set the biggestHeight to this Height
      biggestHeight = $(this).height();
    }
  });

  // Set the container height
  $(".tab-content").height(biggestHeight);
});
