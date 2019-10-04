function scrollElements() {
  var h = $(window).height();
  var w = $(window).width();

  var ratio = 1200 / 1050;
  // var margin_width = (w - height * ratio) / 2;
  // var margin_height = (height - w / ratio) * 0.5;
  var portrait_ratio = 1056 / 2500;
  var th = w / 100;
  var tw = w / 10;
  var tmargin = (w - tw * 4) / 2;
  if (w <= 1000) {
    th = th * 2.4;
    tw = tw * 2.4;
    tmargin = (w - tw * 4) / 2;
  } else if (w <= 2000) {
    th = th * 1.8;
    tw = tw * 1.8;
    tmargin = (w - tw * 4) / 2;
  }

  var scrollTopVal = $(this).scrollTop() < 0 ? 0 : $(this).scrollTop();
  // var portrait_margin_width =
  //   (w - height * portrait_ratio * (1 + scrollTopVal / height)) / 2;

  $(".johnContainer").css("width", tw * 4 + "px");

  $(".danContainer").css("width", tw * 4 + "px");

  if (scrollTopVal <= 900) {
    $(".johnContainer").css(
      "margin-left",
      // portrait_margin_width - w / 2 + (scrollTopVal / height) * (w / 2) + "px"
      scrollTopVal / 3 - 300 + tmargin + "px"
    );
    $(".danContainer").css(
      "margin-left",
      // portrait_margin_width - (scrollTopVal / height) * (w / 2) + "px"
      -(scrollTopVal / 3) + 300 + tmargin + "px"
    );
  } else if (scrollTopVal > 900) {
    $(".johnContainer").css(
      "margin-left",
      // portrait_margin_width - w / 2 + (scrollTopVal / height) * (w / 2) + "px"
      900 / 3 - 300 + tmargin + "px"
    );
    $(".danContainer").css(
      "margin-left",
      // portrait_margin_width - (scrollTopVal / height) * (w / 2) + "px"
      -(900 / 3) + 300 + tmargin + "px"
    );
  }
  console.log(scrollTopVal);
  // $(".danContainer").css("height", height * (1 + scrollTopVal / height) + "px");

  // $(".nameContainer").css("width", th + "px " + tw + "px");
  if (scrollTopVal < 3500) {
    $("#brian").css("opacity", (scrollTopVal - 200) / 2000);
    $("#fullStack").css("opacity", (scrollTopVal - 1500) / 2000);
    $("#developer").css("opacity", (scrollTopVal - 1500) / 2000);
  } else if (scrollTopVal >= 3500) {
    $("#brian").css("opacity", 0);
    $("#fullStack").css("opacity", 0);
    $("#developer").css("opacity", 0);
  }

  $("#brian")
    .css("font-size", tw / 9 + "px")
    .css("height", th + "px")
    .css("width", tw + "px")
    .css("top", 4.8 * th + "px")
    .css("left", 0.8 * tw + "px");

  $("#fullStack")
    .css("font-size", tw / 9 + "px")
    .css("height", th + "px")
    .css("width", tw + "px")
    .css("top", 9.3 * th + "px")
    .css("left", 2.5 * tw + "px");

  $("#developer")
    .css("font-size", tw / 9 + "px")
    .css("height", th + "px")
    .css("width", tw + "px")
    .css("top", 15.5 * th + "px")
    .css("left", 2.8 * tw + "px");

  // else if (scrollTopVal > 2000) {
  //   $("#brian")
  //     .css("font-size", tw / 15 + "px")
  //     .css("top", 0 * th + "px")
  //     .css("left", 0.8 * tw + "px");

  //   $("#fullStack")
  //     .css("font-size", tw / 15 + "px")
  //     .css("top", 0 * th + "px")
  //     .css("left", 1.5 * tw + "px");

  //   $("#developer")
  //     .css("font-size", tw / 15 + "px")
  //     .css("top", 0 * th + "px")
  //     .css("left", 2.2 * tw + "px");
  // }

  if (scrollTopVal <= 3500) {
    $(".triangle").css("border-width", th + "px " + tw + "px");
    $(".triangle-blue").css("opacity", 1);
    $(".triangle-red").css("opacity", 1);

    $("#trr1")
      .css("top", 0 * th + "px")
      .css("left", 2 * tw + "px");

    $("#trb2")
      .css("top", 1 * th + "px")
      .css("left", 3 * tw + "px");

    $("#tlb3")
      .css("top", 2 * th + "px")
      .css("left", 1 * tw + "px");

    $("#trr4")
      .css("top", 2 * th + "px")
      .css("left", 2 * tw + "px");

    $("#tlb5")
      .css("top", 3 * th + "px")
      .css("left", 2 * tw + "px");

    $("#trr6")
      .css("top", 4 * th + "px")
      .css("left", 2 * tw + "px");

    $("#tlb7")
      .css("top", 4 * th + "px")
      .css("left", 3 * tw + "px");

    $("#tlb8")
      .css("top", 5 * th + "px")
      .css("left", 2 * tw + "px");

    $("#trr9")
      .css("top", 5 * th + "px")
      .css("left", 3 * tw + "px");

    $("#tlr10")
      .css("top", 6 * th + "px")
      .css("left", 1 * tw + "px");

    $("#tlr11")
      .css("top", 7 * th + "px")
      .css("left", 0 * tw + "px");

    $("#trb12")
      .css("top", 7 * th + "px")
      .css("left", 1 * tw + "px");

    $("#tlr13")
      .css("top", 7 * th + "px")
      .css("left", 2 * tw + "px");

    $("#trb14")
      .css("top", 7 * th + "px")
      .css("left", 3 * tw + "px");

    $("#tlr15")
      .css("top", 8 * th + "px")
      .css("left", 1 * tw + "px");

    $("#trb16")
      .css("top", 8 * th + "px")
      .css("left", 2 * tw + "px");

    $("#trb17")
      .css("top", 9 * th + "px")
      .css("left", 1 * tw + "px");

    $("#trb18")
      .css("top", 10 * th + "px")
      .css("left", 0 * tw + "px");

    $("#tlr19")
      .css("top", 10 * th + "px")
      .css("left", 1 * tw + "px");

    $("#trb20")
      .css("top", 10 * th + "px")
      .css("left", 2 * tw + "px");

    $("#tlr21")
      .css("top", 11 * th + "px")
      .css("left", 2 * tw + "px");

    $("#trb22")
      .css("top", 11 * th + "px")
      .css("left", 3 * tw + "px");

    $("#tlb23")
      .css("top", 12 * th + "px")
      .css("left", 1 * tw + "px");

    $("#tlr24")
      .css("top", 13 * th + "px")
      .css("left", 0 * tw + "px");

    $("#tlb25")
      .css("top", 13 * th + "px")
      .css("left", 2 * tw + "px");

    $("#trr26")
      .css("top", 13 * th + "px")
      .css("left", 3 * tw + "px");

    $("#tlr27")
      .css("top", 14 * th + "px")
      .css("left", 1 * tw + "px");

    $("#tlb28")
      .css("top", 14 * th + "px")
      .css("left", 3 * tw + "px");

    $("#tlb29")
      .css("top", 15 * th + "px")
      .css("left", 0 * tw + "px");

    $("#tlr30")
      .css("top", 15 * th + "px")
      .css("left", 2 * tw + "px");

    $("#tlr31")
      .css("top", 16 * th + "px")
      .css("left", 1 * tw + "px");

    $("#trb32")
      .css("top", 16 * th + "px")
      .css("left", 2 * tw + "px");

    $("#tlb33")
      .css("top", 18 * th + "px")
      .css("left", 1 * tw + "px");

    $("#trr34")
      .css("top", 18 * th + "px")
      .css("left", 2 * tw + "px");
    $("#skills").css("opacity", 0);
  }
  // else if (scrollTopVal > 2000 && scrollTopVal <= 3000) {

  //   $(".triangle-blue").css("opacity", 1);
  //   $(".triangle-red").css("opacity", 1);
  //   $("#trr1")
  //     .css("top", 0 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#trb2")
  //     .css("top", 1 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlb3")
  //     .css("top", 2 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#trr4")
  //     .css("top", 2 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlb5")
  //     .css("top", 3 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#trr6")
  //     .css("top", 4 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlb7")
  //     .css("top", 4 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlb8")
  //     .css("top", 5 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#trr9")
  //     .css("top", 5 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlr10")
  //     .css("top", 6 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#tlr11")
  //     .css("top", 7 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#trb12")
  //     .css("top", 7 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#tlr13")
  //     .css("top", 7 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#trb14")
  //     .css("top", 7 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlr15")
  //     .css("top", 8 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#trb16")
  //     .css("top", 8 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#trb17")
  //     .css("top", 9 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#trb18")
  //     .css("top", 10 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#tlr19")
  //     .css("top", 10 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#trb20")
  //     .css("top", 10 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlr21")
  //     .css("top", 11 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#trb22")
  //     .css("top", 11 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlb23")
  //     .css("top", 12 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#tlr24")
  //     .css("top", 13 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#tlb25")
  //     .css("top", 13 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#trr26")
  //     .css("top", 13 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlr27")
  //     .css("top", 14 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#tlb28")
  //     .css("top", 14 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlb29")
  //     .css("top", 15 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#tlr30")
  //     .css("top", 15 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlr31")
  //     .css("top", 16 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#trb32")
  //     .css("top", 16 * th + "px")
  //     .css("left", 2 * tw + "px");

  //   $("#tlb33")
  //     .css("top", 18 * th + "px")
  //     .css("left", 1 * tw + "px");

  //   $("#trr34")
  //     .css("top", 18 * th + "px")
  //     .css("left", 2 * tw + "px");
  // }
  else if (scrollTopVal > 3000) {
    $("#skills").css("opacity", 1);
    $("#skills").css("opacity", 1);
    $(".triangle-blue")
      .css("left", 0 * tw + "px")
      .css("opacity", 0)
      .css("border-width", th + "px " + tw / 2 + "px");
    $(".triangle-red")
      .css("left", 3.5 * tw + "px")
      .css("opacity", 0)
      .css("border-width", th + "px " + tw / 2 + "px");
    $(".triangle-blue").css("top", 12 * th + "px");
    $(".triangle-red").css("top", 12 * th + "px");
    $("#tlb33").css("opacity", 1);
    $("#trr34").css("opacity", 1);
  }
}

function resizeElements() {
  var h = $(window).height();
  var actualH = h;
  var w = $(window).width();
  if (w <= 500) {
    var height = h <= 320 ? 320 : h;
  } else {
    var height = h < 750 ? 750 : h;
  }

  var ratio = 1200 / 1050;
  var margin_width = (w - height * ratio) / 2;
  var margin_height = (height - w / ratio) * 0.5;
  var portrait_ratio = 1056 / 1735;

  $("section").css("min-height", 1400);
  // $("#cover").css(
  //   "height",
  //   $("#about").height() + $("#work").height() + $("#notes").height() + "px"
  // );
  // //$('.covers').css('width',w+'px');
  // $(".coverLeft").css(
  //   "height",
  //   $("#cover").height() + $("#about").height() + $("#work").height() + "px"
  // );
  // $(".coverRight").css(
  //   "height",
  //   $("#cover").height() +
  //     $("#about").height() +
  //     $("#work").height() +
  //     $("#notes").height() +
  //     "px"
  // );

  // var averageHeight =
  //   ($("#cover").height() +
  //     $("#about").height() +
  //     $("#work").height() +
  //     $("#notes").height()) /
  //   4;
  // if (w / actualH < ratio) {
  //   $(".backgroundContainer").css("width", (h + 60 * 4) * ratio + "px");
  //   $(".backgroundContainer").css("height", h + 60 * 4 + "px");

  //   $(".backgroundContainerRight").css("width", (h + 60 * 4) * ratio + "px");
  //   $(".backgroundContainerRight").css("height", h + 60 * 4 + "px");
  // } else {
  //   $(".backgroundContainer").css("width", w + 60 * 4 * ratio + "px");
  //   $(".backgroundContainer").css("height", w / ratio + 60 * 4 + "px");

  //   $(".backgroundContainerRight").css("width", w + 60 * 4 * ratio + "px");
  //   $(".backgroundContainerRight").css("height", w / ratio + 60 * 4 + "px");
  // }
}

var lastAction = "";
var animating = false;
var navShown = false;
$(document).ready(function() {
  // var h = $(window).height();
  // var scrollElement = "html, body";
  // $("html, body").each(function() {
  //   var initScrollTop = $(this).attr("scrollTop");
  //   $(this).attr("scrollTop", initScrollTop + 1);
  //   if ($(this).attr("scrollTop") == initScrollTop + 1) {
  //     scrollElement = this.nodeName.toLowerCase();
  //     $(this).attr("scrollTop", initScrollTop);
  //     return false;
  //   }
  // });

  // $(".down a").click(function(event) {
  //   event.preventDefault();
  //   animating = true;

  //   $(".down a").removeClass("active");
  //   $(this).addClass("active");

  //   var $this = $(this),
  //     target = this.hash,
  //     $target = $(target);

  //   if (target == "#contact") {
  //     $(scrollElement)
  //       .stop()
  //       .animate(
  //         {
  //           scrollTop: $target.offset().top - h + $target.height()
  //         },
  //         500,
  //         "swing",
  //         function() {
  //           animating = false;
  //         }
  //       );
  //   } else {
  //     $(scrollElement)
  //       .stop()
  //       .animate(
  //         {
  //           scrollTop: $target.offset().top
  //         },
  //         500,
  //         "swing",
  //         function() {
  //           animating = false;
  //         }
  //       );
  //   }
  // });
  // $(".mobileNav").click(function(event) {
  //   event.preventDefault();
  //   if (!navShown) {
  //     $(this).addClass("active");
  //     $(".navOverlay").addClass("shown");
  //     navShown = true;
  //   } else if (navShown) {
  //     $(this).removeClass("active");
  //     $(".navOverlay").removeClass("shown");
  //     navShown = false;
  //   }
  // });

  // $(".navItem a").click(function(event) {
  //   event.preventDefault();
  //   animating = true;

  //   var $this = $(this),
  //     target = this.hash,
  //     $target = $(target);

  //   if (target == "#contact") {
  //     $(scrollElement)
  //       .stop()
  //       .animate(
  //         {
  //           scrollTop: $target.offset().top - h + $target.height()
  //         },
  //         500,
  //         "swing",
  //         function() {
  //           animating = false;
  //         }
  //       );
  //   } else {
  //     $(scrollElement)
  //       .stop()
  //       .animate(
  //         {
  //           scrollTop: $target.offset().top
  //         },
  //         500,
  //         "swing",
  //         function() {
  //           animating = false;
  //         }
  //       );
  //   }

  //   $(".mobileNav").removeClass("active");
  //   $(".navOverlay").removeClass("shown");
  //   navShown = false;
  // });

  // $(".downCenter a").click(function(event) {
  //   event.preventDefault();

  //   var $this = $(this),
  //     target = this.hash,
  //     $target = $(target);

  //   if (target == "#contact") {
  //     $(scrollElement)
  //       .stop()
  //       .animate(
  //         {
  //           scrollTop: $target.offset().top - h + $target.height()
  //         },
  //         500,
  //         "swing",
  //         function() {}
  //       );
  //   } else {
  //     $(scrollElement)
  //       .stop()
  //       .animate(
  //         {
  //           scrollTop: $target.offset().top
  //         },
  //         500,
  //         "swing",
  //         function() {}
  //       );
  //   }
  // });

  $(window).resize(function(e) {
    resizeElements();
    scrollElements();
  });
  resizeElements();
  scrollElements();
  $(window).scroll(function() {
    scrollElements();
  });
  $(window).on("touchstart", function(ev) {
    scrollElements();
  });
  $(window).on("touchmove", function(ev) {
    scrollElements();
  });
  $(window).on("touchend", function(ev) {
    scrollElements();
  });
});
