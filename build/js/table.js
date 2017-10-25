$(document).ready(function () {
	let width = 0;

    jQuery(".slide-right").on("click", function () {
        width += 132;
        if( width > jQuery("#accounts-table .table").width() - jQuery('.tables-wrapper').width() ){
            width = jQuery("#accounts-table .table").width() - jQuery('.tables-wrapper').width();
        }
        jQuery("#accounts-table").animate({scrollLeft: width}, 200);
    });
    jQuery(".slide-left").on("click", function () {
        width -= 132;
        if( width < 0 ){
            width = 0;
        }
        jQuery("#accounts-table").animate({scrollLeft: width}, 200);
    });
});