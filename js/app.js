
//hide the spoiler on page load
$('.spoiler span').hide();
//when the button is pressed,
$('.spoiler button').click(function(){
//show the spoiler text
$('.spoiler span').show();
//hide the 'reveal spoiler' button 
$('.spoiler button').hide();
// alert("i was clicked")
});
