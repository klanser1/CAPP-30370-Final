 $('#change_season').on("click", function(){
    var $central_park = $('#central_park');
    $central_park.attr('src', 'centralparkwinter.jpg');
    $central_park.attr('alt', 'Central Park in Winter');
  });

 $(document).on('click','img', function() {
  var $this = $(this);
  console.log('Alt: ', $(this).attr("alt"));
	console.log('Width: ', $(this).width());
	console.log('Height: ', $(this).height());
	});
						
  $(document).on('click', 'h1,h2', function() {
  var $this = $(this);
	console.log('Alt Text: ', $(this).text());
	console.log('Color: ', $(this).css('color'));
	console.log('Font-size: ', $(this).css('font-size'));
  });
  

console.log('Width: ', $(window).width());

 $(window).resize(function(){
    $('width').text($(window).width());
    console.log('Width: ', $(window).width());
	});

