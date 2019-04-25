
$('.spoiler').on('click', 'button', function(){
 //show the spoiler text
  $(".spoiler span").show();
//hide the 'reveal spoiler' button
  $(".spoiler button").hide();
});
//Create the "reveal Spoiler " button
const $button = $('<button> Reveal Spoiler</button>');
//Append to web page
$('.spoiler').append($button);

//hide the spoiler on page load
$('.spoiler span').hide();


