
$('.spoiler').on('click', 'button', function(event){
  console.log(event.target)
 //show the spoiler text
  // $(".spoiler span").show();
//hide the 'reveal spoiler' button
  $("event.target").hide();
});
//Create the "reveal Spoiler " button
const $button = $('<button> Reveal Spoiler</button>');
//Append to web page
$('.spoiler').append($button);

//hide the spoiler on page load
$('.spoiler span').hide();


