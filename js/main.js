(function($) {
    "use strict";
    var $body = $("body")
      , $window = $(window);
/*================================================================ animate ===================================================================*/
    $('.filter').on('click', function(event) {
        $('.filter').removeClass("active");
        $(this).addClass('active');
        $(".portfolio-wrapper").removeClass("hid");
        $(".portfolio").hide("fast");
        var dataFilter = $(this).attr("data-filter");
        $(".portfolio" + dataFilter).show("fast");
    });
    $window.on('scroll', function() {
        if ($(".navbar").offset().top > 1) {
            $(".navbar-default").addClass("small");
            $(".about-contact1").css("color", "#e52c00");
            scrollTop: 1000
        } else {
            $(".navbar-default").removeClass("small");
            $(".about-contact1").css("color", "white");
        }
    });
    if ($(window).width() > 767) {
        $window.on('scroll', function() {
            if ($(".navbar").offset().top > 25) {
                $(".flex > ul").css("display", "flex");
                scrollTop: 1000
            } else {
                $(".flex > ul").css("display", "none");
            }
        });
        jQuery(document).ready(function() {
        jQuery('.wow').addClass("hid").viewportChecker({
            classToAdd: 'vis animated bounceInLeft',
            offset: 1
        });
    });
    }
    ;$("#trig, #burger").click(function() {
        $(".burger-open").fadeToggle(400);
        $(".navbar-default").toggleClass("burger-nav");
    });
    $('.burger-open').on('click', 'a', function(event) {
        $('#trig, #burger')[0].click();
    });
    $('.menubar-grid, .burger-open').on('click', 'a', function(event) {
        var $anchor = $(this).attr('href')
          , top = $($anchor).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
        event.preventDefault();
    });
    $body.scrollspy({
        target: ".navbar-collapse",
        offset: 76
    });

}
)(jQuery);
$('.Count').each(function() {
    "use strict";
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$('.checkbox').on('click', function() {
    var block = $(this).data('block');
    var id = $(this).attr('id');
    $('.checkbox').each(function(k, v) {
        if (v.id != id) {
            v.checked = false;
        }
    });
    $('.blocks > div').slideUp();
    $('.blocks > div').removeClass('show');
    if ($(this).is(':checked')) {
        $('.' + block).slideDown();
        $('.' + block).addClass('show');
    }
});



$(".see-work").click(function(){
    if ($("#portfoliolist").css('height') == '760px') {
    $("#portfoliolist").animate({height: $("#portfoliolist")[0].scrollHeight}, 0);
    $(this).html("Свернуть<span class='anim-arrow2'>&#8595;</span>").css("animation-name", "botton-work");
    return
} else {
	$("#portfoliolist").css("height", "760px");
    $(this).html("Посмотреть всё<span class='anim-arrow'>&#8595;</span>").css("animation-name", "botton-work2");
}
});

/*================================================================ Form ===================================================================*/
$(document).ready(function() {
    $("form").submit(function() {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        var message = $(formNm).find(".msgs");
        var formTitle = $(formNm).find(".title-general");
        $.ajax({
            type: "POST",
            url: '../contact-form.php',
            data: formNm.serialize(),
            success: function(data) {
                message.html(data).css({
                    "padding": "20px",
                    "transform": "translateX(0%)"
                });
                $('input, textarea').not(':input[type=submit], :input[type=hidden]').val('');
                $('input:checked').prop('checked', false);
                setTimeout(function() {
                    $('.msgs').html('').css("padding", "0");
                    $(".cd-panel").removeClass("is-visible");
                }, 3000);
            },
            error: function(jqXHR, text, error) {
                message.html(error);
                formTitle.css("display", "none");
                setTimeout(function() {
                    $('.formTitle').css("display", "block");
                    $('.msgs').html('');
                    $('input, textarea').not(':input[type=submit], :input[type=hidden]').val('');
                }, 3000);
            }
        });
        return false;
    });
    var $input = $('.form-fieldset > input');
    $input.blur(function(e) {
        $(this).toggleClass('filled', !!$(this).val());
    });
});

$(document).ready(function() {
    $(".block-1 input").attr("name", "card[]");
    $(".block-3 input").attr("name", "shop[]");
    $(".block-4 input").attr("name", "orig[]");
});
