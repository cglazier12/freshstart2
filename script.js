$(function() {
	$('.toggler').on('click', function() {
		$('nav').slideToggle(500);
  });
});


function submitFirstName(event)
{
	event.preventDefault();
	// on submit, test the name field//
	 let firstName = document.getElementById ('name');
	 
	 if (firstName.value) {
		 alert('Success! Your info was submitted.');
	 } else {
		 alert('invalud first name. Please try again')
	 }
}