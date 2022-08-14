(function ($) {
  "use strict";

  $(document).ready(function () {
    // PRELOADER
    $("body").toggleClass("loaded");
    setTimeout(function () {
      $("body").addClass("loaded");
    }, 3000);

    // PORTFOLIO DIRECTION AWARE HOVER EFFECT
    var item = $("#bl-work-items>div");
    var elementsLength = item.length;
    for (var i = 0; i < elementsLength; i++) {
      $(item[i]).hoverdir();
    }

    // TEXT ROTATOR
    $("#selector").animatedHeadline({
      animationType: "clip",
    });

    // BOX LAYOUT
    Boxlayout.init();

    // REMOVE # FROM URL
    $("a[href='#']").on("click", function (e) {
      e.preventDefault();
    });

    // AJAX CONTACT FORM
    // $(".contactform").on("submit", function() {
    //     $(".output_message").text("Message Sent!");
    //     window.location.href = window.location.href;
    //     // var form = $(this);
    //     // $.ajax({
    //     //     url: form.attr("action"),
    //     //     method: form.attr("method"),
    //     //     data: form.serialize(),
    //     //     success: function(result) {
    //     //         if (result == "success") {
    //     //             $(".contactform").find(".output_message").addClass("success");
    //     //
    //     //         } else {
    //     //             $(".contactform").find(".output_message").addClass("error");
    //     //             $(".output_message").text("Error Sending!");
    //     //         }
    //     //     }
    //     // });

    // });

    // MATERIAL CAROUSEL
    $(".carousel.carousel-slider").carousel({
      fullWidth: true,
      indicators: true,
    });

    // RESUME CARDS ANIMATION
    if ($(window).width() > 800) {
      $(".resume-list-item, .resume-card").on("click", function () {
        $(".resume-list-item").removeClass("is-active");
        var e = parseInt($(this).data("index"), 10);
        $("#resume-list-item-" + e).addClass("is-active");
        console.log(e);
        var k = 0;
        for (let a = 0; a < 5; a++) {
          if (a != e) {
            find[k] = a;
            k++;
          }
        }
        var t = find[0],
          n = find[1],
          i = find[2],
          j = find[3];
        console.log(t, n, i, j);
        $(".resume-card").removeClass(
          "front back back-back back-back-back back-back-back-back"
        ),
          $(".resume-card-" + e).addClass("front"),
          $(".resume-card-" + t).addClass("back"),
          $(".resume-card-" + n).addClass("back-back"),
          $(".resume-card-" + i).addClass("back-back-back"),
          $(".resume-card-" + j).addClass("back-back-back-back");
      });
    }
  });
})(jQuery);
