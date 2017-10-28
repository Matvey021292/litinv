var tabsFn = (function() {

    function init() {
        setHeight();
    }

    function setHeight() {
        var $tabPane = $('.tab-pane'),
            tabsHeight = $('.nav-tabs').height();
    }

    $(init);
})();

var tabsFn = (function () {

    function init() {
        setHeight();
    }

    function setHeight() {
        var $tabPane = $('.tab-pane'),
            tabsHeight = $('.nav-tabs').height();
    }

    $(init);
})();


$('.modal-child').on('show.bs.modal', function () {
    var modalParent = $(this).attr('data-modal-parent');
    $(modalParent).css('opacity', 0);
    // $('body').addClass('modal-open-open');
});
 
$('.modal-child').on('hidden.bs.modal', function () {
    var modalParent = $(this).attr('data-modal-parent');
    $(modalParent).css('opacity', 1);
    // $('body').removeClass('modal-open-open');
});

$(document).ready(function() {
$("a.contact").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 4000);
return false;
});
});
    


