$(function () {
	/*  Owl carousel
 	================================================*/

	if ($(".owl-carousel").length > 0) {

		$(".owl-carousel").owlCarousel({

			margin: 25,
			stagePadding: 25,
			nav: true,
			navText: [
				"<i class='glyphicon glyphicon-chevron-left'></i>",
				"<i class='glyphicon glyphicon-chevron-right'></i>"
			],
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 4
				},
				1000: {
					items: 8
				}
			}

		});
	}











});




