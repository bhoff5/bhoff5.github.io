function scrollElements() {
  let h = $(window).height();
  let w = $(window).width();
  let leftContainer = $(".leftContainer");
  let rightContainer = $(".rightContainer");
  let label_brian = $("#brian");
  let label_fullstack = $("#fullStack");
  let label_developer = $("#developer");
  console.log("test");

  var ratio = 1200 / 1050;
  // var margin_width = (w - height * ratio) / 2;
  // var margin_height = (height - w / ratio) * 0.5;
  var portrait_ratio = 1056 / 2500;
  let th;
  let tw;
  if (w <= 1000) {
    th = h / 35;
    tw = w / 4;
    $(".backgrounds").css("top", 4 * th + "px");
  } else {
    th = h / 25;
    tw = w / 5;
    $(".backgrounds").css("top", 0);
  }
  var tmargin = (w - tw * 4) / 2;
  // if (w <= 1000) {
  //   th = th * 6.4;
  //   tw = tw * 2.4;
  //   tmargin = (w - tw * 4) / 2;
  // }
  // else if (w <= 2000) {
  //   th = th * 2.8;
  //   tw = tw * 1.8;
  //   tmargin = (w - tw * 4) / 2;
  // }
  var scrollTopVal = $(this).scrollTop() < 0 ? 0 : $(this).scrollTop();
  // var portrait_margin_width =
  //   (w - height * portrait_ratio * (1 + scrollTopVal / height)) / 2;

  leftContainer.css("width", tw * 4 + "px");

  rightContainer.css("width", tw * 4 + "px");

  // if (scrollTopVal <= 700) {
  //   $(".leftContainer").css("margin-left", 900 / 3 - 300 + tmargin + "px");
  //   $(".rightContainer").css("margin-left", -(900 / 3) + 300 + tmargin + "px");
  //   $(".leftContainer").css(
  //     "transform",
  //     // "translateX(" + (scrollTopVal / 3 - 300) + "px)"
  //     "translateX(" + (700 / 3 - 300) + "px)"
  //   );
  //   $(".rightContainer").css(
  //     "transform",
  //     // "translateX(" + (scrollTopVal / 3 - 300) * -1 + "px)"
  //     "translateX(" + (700 / 3 - 300) * -1 + "px)"
  //   );
  if (scrollTopVal <= 900) {
    leftContainer.css("margin-left", 900 / 3 - 300 + tmargin + "px");
    rightContainer.css("margin-left", -(900 / 3) + 300 + tmargin + "px");
    leftContainer.css(
      "transform",
      "translateX(" + (scrollTopVal / 3 - 300) + "px)"
    );
    rightContainer.css(
      "transform",
      "translateX(" + (scrollTopVal / 3 - 300) * -1 + "px)"
    );
  } else if (scrollTopVal > 900) {
    leftContainer.css("margin-left", 900 / 3 - 300 + tmargin + "px");
    rightContainer.css("margin-left", -(900 / 3) + 300 + tmargin + "px");
    leftContainer.css(
      "transform",
      "translateX(" + (900 / 3 - 300) + "px)"
    );
    rightContainer.css(
      "transform",
      "translateX(" + (900 / 3 - 300) * -1 + "px)"
    );
  }

  if (scrollTopVal < 2000) {
    label_brian.css("opacity", 1);
    label_fullstack.css("opacity", 1);
    label_developer.css("opacity", 1);
  } else if (scrollTopVal >= 2000) {
    label_brian.css("opacity", 0);
    label_fullstack.css("opacity", 0);
    label_developer.css("opacity", 0);
  }

  if (scrollTopVal < 1800) {
    $("#body").css("background-color", "rgba(255, 254, 249, 1)");
  } else if (scrollTopVal >= 1800) {
    $("#body").css(
      "background-color",
      "rgba(255, 254, 249," + 1800 / scrollTopVal / 1 + ")"
    );
  }

  $(".myName")
    .css("height", th + "px")
    .css("width", tw + "px");

  label_brian
    .css("top", 4.8 * th + "px")
    .css("left", 0.8 * tw + "px");

  label_fullstack
    .css("top", 9.3 * th + "px")
    .css("left", 2.5 * tw + "px");

  label_developer
    .css("top", 15.5 * th + "px")
    .css("left", 2.8 * tw + "px");

  if (w <= 1000) {
    $(".myName").css("font-size", tw / 8 + "px");
    label_brian
      .css("top", 4.0 * th + "px")
      .css("left", 0.8 * tw + "px");

    label_fullstack
      .css("top", 9.0 * th + "px")
      .css("left", 2.8 * tw + "px");

    label_developer
      .css("top", 17 * th + "px")
      .css("left", 2.8 * tw + "px");
  } else if (w <= 2000) {
    $(".myName").css("font-size", tw / 9 + "px");
    label_brian
      .css("top", 4.8 * th + "px")
      .css("left", 0.8 * tw + "px");

    label_fullstack
      .css("top", 9.3 * th + "px")
      .css("left", 2.5 * tw + "px");

    label_developer
      .css("top", 15.5 * th + "px")
      .css("left", 2.8 * tw + "px");
  } else {
    $(".myName").css("font-size", tw / 11 + "px");
    label_brian
      .css("top", 4.8 * th + "px")
      .css("left", 0.8 * tw + "px");

    label_fullstack
      .css("top", 9.3 * th + "px")
      .css("left", 2.5 * tw + "px");

    label_developer
      .css("top", 15.5 * th + "px")
      .css("left", 2.8 * tw + "px");
  }

  if (scrollTopVal <= 2000) {
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

    $("#trr35")
      .css("top", 10 * th + "px")
      .css("left", 3 * tw + "px");
  } else if (scrollTopVal > 2000) {
    // $("#skills").css("z-index", 9999);
    $(".triangle-blue")
      // .css("left", 0 * tw + "px")
      .css("left", 0)
      .css("opacity", 0)
      .css("border-width", th + "px " + tw / 2 + "px");
    $(".triangle-red")
      .css("left", 3.5 * tw + "px")
      .css("opacity", 0)
      .css("border-width", th + "px " + tw / 2 + "px");

    $(".triangle-blue").css("top", h / 2.5 + "px");
    $(".triangle-red").css("top", h / 2.5 + "px");
    $("#tlb33").css("opacity", 1);
    $("#trr34").css("opacity", 1);
    $("#trr34").css("pointer-events", "bounding-box");
    $("#tlb33").css("pointer-events", "bounding-box");
  }

  if (scrollTopVal <= 2000) {
    $("#catalog").css("opacity", 0);
    $("#catalog").css("display", "none");
    $(".backgrounds").css("pointer-events", "none");
    $(".ca3-scroll-down-link").show()
  } else if (scrollTopVal > 2000) {
    console.log(scrollTopVal);
    $(".backgrounds").css("pointer-events", "none");
    $("#catalog").css("display", "block");
    $("#catalog").css("opacity", 1);
    $(".ca3-scroll-down-link").hide();

  }

  let view = $("#flipbook").turn("view");

  if (view.indexOf(0) > -1) {
    $("#flipbook").turn("next");
  }
  $("#flipbook").bind("turning", function(event, page, view) {
    if (page == 1) {
      event.preventDefault();
    }
  });
  $("#flipbook").bind("turning", function(event, page, view) {
    if (page == 8) {
      $("#trr34").css("opacity", 0);
    } else {
      $("#trr34").css("opacity", 1);
    }
  });
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
}

var lastAction = "";
var animating = false;
var navShown = false;
$(document).ready(function() {
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

$(document).ready(function() {
  $("body,html").animate({ scrollTop: 156 }, 800);
});

$(function() {
  $('.ca3-scroll-down-link').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
