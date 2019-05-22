$(document).ready(function ($) {


    

	window.addEventListener('scroll', onScroll);

    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
            
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
            //$(".logo-cont img").attr("src", "images/index/logo-dark.png");
        } else {
            $("header" ).removeClass("scrolled");
            //$(".logo-cont img").attr("src", "images/index/logo.png");
        }
    }
    onScroll();
    
	var menuVisible = false;
    $(".toggle-button" ).click(function(){
        
        if (!menuVisible) 
        {
            $(".mobile-menu-cont").slideToggle();
            $(".toggle-button" ).addClass("open");
            menuVisible = true;
        }
        else
        {
            $(".mobile-menu-cont").slideToggle();
            $(".toggle-button" ).removeClass("open");
            menuVisible = false;
        }
    });
    
   $(".mobile-menu-cont").hide();

   $('.mobile-menu ul.sub-menu').hide();

    $(".mobile-menu .sub-menu").each(function( index ) {
        var mainMenuItem = $(this).parent(".menu-item"); 
       // var arrow = jQuery("<div class='open-arrow'><span>&#x25BC;</span></div>"); 
       var arrow = jQuery("<div class='open-arrow'><i class='fa fa-angle-down'></i></div>"); 
        $(mainMenuItem).append(arrow);   

       
        $(arrow).click(function(){
            $(mainMenuItem).find('ul.sub-menu').slideToggle();
            $(arrow).toggleClass("rotate");
        });
    });

    
    


    $(window).on('resize', function(){
          onResize();
    });
    onResize();

    function onResize()
    {
        var win = $(window);
    }

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
    
});