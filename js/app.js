
$('.spoiler').on('click', 'button', function(event){
  console.log(event.target)
  //show the spoiler text
  $(this).prev().show();
  //hide the 'reveal spoiler' button
  $(this).hide();
});
//Create the "reveal Spoiler " button
const $button = $('<button> Reveal Spoiler</button>');
//Append to web page
$('.spoiler').append($button);

//hide the spoiler on page load
$('.spoiler span').hide();


let text = '';
$('.spoiler-input').keypress((e) => {
  text = e.target.value;
  if (e.which === 13) { // enter key
    console.log('Enter key pressed.', text)
    const $spoiler = $(`<div class="spoiler-container spoiler-react" data-text='` + text +`' />}`);
    $('.spoiler-react-container').append($spoiler);
    $('.spoiler-input').val('');
  }
});
