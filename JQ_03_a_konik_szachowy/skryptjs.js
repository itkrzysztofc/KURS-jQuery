$(function() {
	var t = 100;
	$("button").click(function() {
		$("#wynik")
		.hide(100)
		.animate({
			left: '200px',
			top: '100px'
		}).show(t)
		.animate({
			left: '200px',
			top: '250px'
		})
		.hide(t)
		.show(t)
		.animate({
			left: '200px',
			top: '400px'
		})
		.hide(t)
		.show(t)
		.animate({
			left: '350px',
			top: '400px'
		})
		.hide(t)
		.show(t)
		.animate({
			left: '200px',
			top: '100px'
		})
		.hide(t)
		.show(t)
		;
	});
});