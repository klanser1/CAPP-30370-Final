window.onload
console.log (window.innerWidth);

 $('#change_season').on("click", function(){
    var $central_park = $('#central_park');
    $central_park.attr('src', 'centralparkwinter.jpg');
    $central_park.attr('alt', 'Central Park in Winter');
  });

header = $('#header');
	$(header).on('click', function() {
		console.log( 'Width: ' + children.('header').width() );
		console.log( 'Height: ' + children.('header').height() );
		});