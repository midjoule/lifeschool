import 'bootstrap';

$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}

	
	// Scrool to section
	$('section').scroll(function(){window.scrollTo(0, window.scrollY-70);});

	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});


/*toggle menu on mouseover event
- inspired by : https://webdesign.tutsplus.com/tutorials/how-to-make-the-bootstrap-navbar-dropdown-work-on-hover--cms-33840
- check also : https://stackoverflow.com/questions/48820404/bootstrap-4-keeping-parent-of-dropdown-a-clickable-link
*/
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 992px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      },
    );
    $dropdownToggle.click(
      function () {
        location.href = this.href;
      }
    );	  
  } else {
    $dropdown.off("mouseenter mouseleave");
    $dropdownToggle.off("click");
  }
});


/* Resize the facebook embeded page
*/

//Resize Facebook feed
$(window).on('resize', function () {
	setTimeout(function () { changeFBPagePlugin() }, 500);
});

$(window).on('load', function () {
	setTimeout(function () { changeFBPagePlugin() }, 1500);
});

changeFBPagePlugin = function () {
	var container_width = Number($('.fb-container').width()).toFixed(0);
	var container_height = Number($('.fb-container').height()).toFixed(0);
	
	if (!isNaN(container_width) && !isNaN(container_height)) 
		$(".fb-page").attr("data-width", container_width).attr("data-height", container_height);
	
	if (typeof FB !== 'undefined') 
		FB.XFBML.parse();

};




