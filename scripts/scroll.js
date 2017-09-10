$(document).ready(function(){
    $("a").click(function(e){
        var linkHref = $(this).attr("href");
        if(linkHref.indexOf('#') == 0) {
            var $target = $(linkHref);
            $("html, body").animate({ scrollTop: $target.offset().top - 50 }, 700,function(){
                window.location.hash = linkHref;
            });
            e.preventDefault();
        }
    });
});