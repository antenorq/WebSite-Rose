$( document ).ready(function()
{

    var $doc = $('html, body');

    $('.ancora').click(function()
	{
	    $doc.animate(
	    {
	        scrollTop: $( $.attr(this, 'ancora') ).offset().top
	    }, 
	    1000);
	    return false;
	});

    $(".ancora").click(function()
	{
        $('.collapse').collapse('hide');
    });

});


