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


$(document).ready(function () {
    $('#toggle-btn').click(function () {
        $('body').toggleClass('overflow');
        $('.wrapper_blur').toggleClass('on');
        $('.header_nav_media').toggleClass('position');
        $(this).toggleClass('pos');


    });
    if ($(window).width() > '767') {
        $('.button').click(function () {

            $('.wrapper_blur').toggleClass('on');

            $('.close').click(function () {
                $('.wrapper_blur').removeClass('on');
            });


            $(document).ready(function () {
                $('.modal').click(function (e) {
                    $('.wrapper_blur').removeClass('on');
                })


                    .on('click', '.modal-content', function (e) {
                        e.stopPropagation();

                    })
                    .on('click', 'password_recovery', function (e) {
                        $('.modal-child').on('show.bs.modal', function (e) {
                            var modalParent = $(this).attr('data-modal-parent');
                            $(modalParent).css('opacity', ' 0 !important');
                        });

                        $('.modal-child').on('hidden.bs.modal', function (e) {
                            var modalParent = $(this).attr('data-modal-parent');
                            $(modalParent).css('opacity', 1);
                        })

                    })

            });
            $(document).ready(function () {
                $('.text_visibility').click(function () {
                    $('.form_group--radio').toggleClass('active_label');
                });
                $('.modal-content').click(function () {
                    textq = $('input:checked').val();
                    $('.text_visibility').text(textq);

                });
                $('.form_group--radio-input').click(function () {
                    if ($('.form_group--radio').hasClass('active_label')) {
                        $('.form_group--radio').removeClass('active_label');
                    }
                })
            })

            $('.header_nav_media nav').toggleClass("of")
        })
    }
})
