$(function(){
	$('.nav_toggle').click(function(){
		$('.nav').toggleClass('min');
	});

	// checkbox
	$("#checkall").each(function(index){

		var group = $(this).data("group");
		var parent = $(this);

		parent.change(function(){
	    	$(group).prop('checked', parent.prop("checked"));
		});
		$(group).change(function(){
	    	parent.prop('checked', false);
	    	if ($(group+':checked').length == $(group).length ){
	        	parent.prop('checked', true);
	    	}
		});
	});
});
