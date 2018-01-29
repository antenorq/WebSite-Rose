$( document ).ready(function()
{

    var $doc = $('html, body');

    $('.item_menu').click(function()
	{
	    $doc.animate(
	    {
	        scrollTop: $( $.attr(this, 'ancora') ).offset().top
	    }, 
	    1000);
	    return false;
	});

    $(".item_menu").click(function()
	{
        $('.collapse').collapse('hide');
    });

});


