// Custom Script 
// CopyRights : http://webthemez.com

/*
Theme by: WebThemez.com
Note: Please use our back link in your site
*/	

$('document').ready(function () {
	 $.backstretch([
      "/assets/image1.jpg"
    , "/assets/image2.jpg"
    , "/assets/image3.jpg"
  ], {duration: 3000, fade: 1250});
  
  customScripts.init();
	$('#services .col-md-3, #features, #aboutUs, #clients, #portfolio, #plans, #contactUs .parlex-back').css('opacity','0');
	
	$( "#menuToggle" ).toggle(function() {
	  $(this).find('i').removeClass('fa-bars').addClass('fa-remove');
	  $('#mainNav').animate({"right":"0px"}, "slow");
	}, function() {
	  $('#mainNav').animate({"right":"-200px"}, "slow");
	  $(this).find('i').removeClass('fa-remove').addClass('fa-bars');
	});
	
});

$(function() {
  var nextYear = "2018/01/01 00:00:00 GMT+0530";
  var htmlTemp = "<div>%D<span>day%!d</span></div><div>%H<span>hrs</span></div><div>%M<span>min</span></div><div>%S<span>sec</span></div>";
    
  $('.countdown.styled').countdown(nextYear, function(event) {
    $(this).html(event.strftime(htmlTemp));
  });
});

var customScripts = {
  onePageNav: function () {
    $('#mainNav').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 950,
      scrollThreshold: 0.2,
      filter: '',
      easing: 'swing',
      begin: function () {
        //I get fired when the animation is starting
      },
      end: function () {
        //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
					$('.header').removeClass('addBg');
				}
			},
      scrollChange: function ($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
    });
		
		$("a[href='#top']").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
		$("a[href='#basics']").click(function () {
      $("html, body").animate({ scrollTop: $('#services').offset().top}, "slow"); 
      return false;
    });
  },   
	waySlide: function(){
		  	/* Waypoints Animations
		   ------------------------------------------------------ */		   			  			
			$('#services').waypoint(function() {				
			$('#services .col-md-3').addClass( 'animated fadeInUp show' );   
			}, { offset: 800}); 
			$('#aboutUs').waypoint(function() {				
			$('#aboutUs').addClass( 'animated fadeInUp show' );   
			}, { offset: 800}); 
			$('#contactUs').waypoint(function() {				
			$('#contactUs .parlex-back').addClass( 'animated fadeInUp show' );   
			}, { offset: 800}); 
			 						 
		}, 
    init: function () {
      customScripts.onePageNav();  
		  customScripts.waySlide(); 
    }
}