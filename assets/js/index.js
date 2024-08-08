gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText, InertiaPlugin);

let scroll;
let transitionOffset = 1225;

CustomEase.create("draw", "0.4, 0.6, -0.1, 1");

initPageTransitions();

// Animation - Page Loader
function initLoaderHome() {
  var tl = gsap.timeline();

  tl.set("html", {
    cursor: "wait",
  });

  tl.set("html", {
    cursor: "auto",
  });

  tl.set(".fade-in-last", {
    autoAlpha: 0,
  });

  tl.set(".slide-in-last", {
    autoAlpha: 0,
    y: "20px",
  });

  tl.set(".loading-screen", {
    scaleY: 0,
  });

  tl.set(".loader-images figure", {
    display: "none",
  });

  tl.set(".loader-images figure:nth-child(1)", {
    display: "block",
  });

  tl.set(".default-header .swipe-cover", {
    scaleY: 1,
    rotate: 0.001,
    opacity: 1,
  });

  if (document.querySelector(".loader-overlay")) {
    tl.set(".loader-overlay", {
      autoAlpha: 1,
    });
  }

  tl.to(".default-header .swipe-cover", {
    duration: 1.25,
    ease: "Expo.easeInOut",
    stagger: 0.1,
    scaleY: 0,
    rotate: 0.001,
  });

  tl.to(
    ".loader-images figure:nth-child(2)",
    {
      duration: 0.001,
      display: "block",
    },
    "< 1.25"
  );

  tl.to(
    ".loader-images figure:nth-child(3)",
    {
      duration: 0.001,
      display: "block",
    },
    "< 0.5"
  );

  tl.to(
    ".loader-images figure:nth-child(4)",
    {
      duration: 0.001,
      display: "block",
    },
    "< 0.5"
  );

  tl.to(
    ".loader-images figure:nth-child(5)",
    {
      duration: 0.001,
      display: "block",
    },
    "< 0.5"
  );

  tl.call(
    function () {
      scroll.stop();
      $(".loader-images").addClass("is-loading");
    },
    null,
    0
  );

  tl.call(
    function () {
      initCheckWindowHeight();
    },
    null,
    0.5
  );

  tl.call(
    function () {
      $(".loader-images").removeClass("is-loading").addClass("is-loaded");
    },
    null,
    3.5
  );

  tl.call(
    function () {
      pageTransitionOutAnimation();
      scroll.start();
    },
    null,
    3.5
  );
}

// Animation - Page Loader
function initLoader() {
  var tl = gsap.timeline();

  tl.set("html", {
    cursor: "wait",
  });

  tl.set("html", {
    cursor: "auto",
  });

  tl.call(
    function () {
      scroll.stop();
    },
    null,
    0
  );

  tl.call(
    function () {
      pageTransitionOut();
    },
    null,
    0.1
  );
}

// Animation - Page Leave
function pageTransitionIn() {
  var tl = gsap.timeline();

  tl.to("main", {
    duration: 1.2,
    scale: 0.925,
    rotate: 0.001,
    y: "-7.5vh",
    ease: "Power3.easeInOut",
    clearProps: "all",
  });

  tl.to(
    "main .main-dark-overlay",
    {
      duration: 1.2,
      ease: "Expo.easeInOut",
      opacity: 0.75,
      clearProps: "all",
    },
    "<"
  );

  tl.to(
    ".loading-screen",
    {
      duration: 1.2,
      scaleY: 1,
      ease: "Expo.easeInOut",
    },
    "<"
  );

  tl.call(
    function () {
      scroll.stop();
    },
    null,
    0
  );
}

// Animation - Page Enter
function pageTransitionOut() {
  var tl = gsap.timeline();

  if (document.querySelector(".default-header .swipe-cover")) {
    tl.set(".default-header .swipe-cover", {
      scaleY: 1,
      rotate: 0.001,
      opacity: 1,
    });
  }

  tl.call(
    function () {
      pageTransitionOutAnimation();
    },
    null,
    0
  );

  tl.call(
    function () {
      scroll.start();
    },
    null,
    0
  );

  tl.call(
    function () {
      scroll.start();
    },
    null,
    0.2
  );

  tl.call(
    function () {
      initCheckWindowHeight();
    },
    null,
    0.5
  );
}

// Animation - Page Enter
function pageTransitionOutAnimation() {
  var tl = gsap.timeline();

  if (document.querySelector(".loader-overlay")) {
    tl.set(".loader-overlay", {
      autoAlpha: 0,
    });
  }

  tl.set(".loading-screen", {
    scaleY: 0,
  });

  tl.set(".default-header .main-nav-bar .col", {
    autoAlpha: 0,
    y: "0.15em",
  });

  tl.set(".default-header .main-nav-bar .border-bottom", {
    scaleX: 0,
    opacity: 0,
  });

  tl.set(".default-header .single-word-inner", {
    yPercent: 125,
    rotate: 5,
  });

  if (document.querySelector(".slide-in-last")) {
    tl.set(".slide-in-last", {
      autoAlpha: 0,
      y: "20px",
    });
  }

  if (document.querySelector(".slide-in-first")) {
    tl.set(".slide-in-first", {
      autoAlpha: 0,
      y: "20px",
    });
  }

  if (document.querySelector(".fade-in-first")) {
    tl.set(".fade-in-first", {
      autoAlpha: 0,
    });
  }

  if (document.querySelector(".fade-in-last")) {
    tl.set(".fade-in-last", {
      autoAlpha: 0,
    });
  }

  tl.to(".default-header .main-nav-bar .border-bottom", {
    duration: 1.75,
    opacity: 1,
    ease: "draw",
    scaleX: 1,
    clearProps: "all",
    delay: 0.05,
    onComplete: () => {
      $(".loader-images").removeClass("is-loaded");
    },
  });

  tl.to(
    ".default-header .main-nav-bar .col",
    {
      duration: 1.25,
      ease: "Power3.easeOut",
      stagger: 0.15,
      autoAlpha: 1,
      y: "0em",
      clearProps: "all",
    },
    "< 0.1"
  );

  if (document.querySelector(".default-header .col-header-text.long-text")) {
    tl.to(
      ".default-header .single-word-inner",
      {
        duration: 1.5,
        ease: "Expo.easeOut",
        stagger: 0.0133,
        yPercent: 0,
        rotate: 0.001,
        clearProps: "all",
      },
      "< 0.2"
    );
  } else {
    tl.to(
      ".default-header .single-word-inner",
      {
        duration: 1.5,
        ease: "Expo.easeOut",
        stagger: 0.033,
        yPercent: 0,
        rotate: 0.001,
        clearProps: "all",
      },
      "< 0.2"
    );
  }

  if (document.querySelector(".slide-in-first")) {
    tl.to(
      ".slide-in-first",
      {
        duration: 1.25,
        ease: "Power3.easeOut",
        stagger: 0.1,
        autoAlpha: 1,
        y: "0em",
        clearProps: "all",
      },
      "<"
    );
  }

  if (document.querySelector(".fade-in-first")) {
    tl.to(
      ".fade-in-first",
      {
        duration: 1.25,
        ease: "Power3.easeOut",
        stagger: 0,
        autoAlpha: 1,
        clearProps: "all",
      },
      "<"
    );
  }

  if (document.querySelector(".default-header .col-header-text.long-text")) {
    tl.to(
      ".fade-in-last",
      {
        duration: 0.5,
        ease: "Power1.easeInOut",
        stagger: 0.1,
        autoAlpha: 1,
        clearProps: "all",
      },
      "< 0.25"
    );
  } else {
    tl.to(
      ".fade-in-last",
      {
        duration: 0.5,
        ease: "Power1.easeInOut",
        stagger: 0.1,
        autoAlpha: 1,
        clearProps: "all",
      },
      "< 0.15"
    );
  }

  if (document.querySelector(".slide-in-last")) {
    tl.to(
      ".slide-in-last",
      {
        duration: 1.25,
        ease: "Power3.easeOut",
        stagger: 0.1,
        autoAlpha: 1,
        y: "0em",
        clearProps: "all",
      },
      "< 0.15"
    );
  }
  if (document.querySelector(".default-header .swipe-cover")) {
    tl.to(
      ".default-header .swipe-cover",
      {
        duration: 1.25,
        ease: "draw",
        stagger: 0.1,
        scaleY: 0,
        rotate: 0.001,
        clearProps: "all",
      },
      "<"
    );
  }

  tl.call(
    function () {
      $("body").removeClass("no-nav-animate");
    },
    null,
    0.2
  );
}

function initPageTransitions() {
  // Reset scroll on page next
  history.scrollRestoration = "manual";

  barba.hooks.afterEnter(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  });

  barba.hooks.leave(() => {
    initBasicFunctions();
  });

  // Functions Before
  function initResetDataBefore() {
    $("body").addClass("no-nav-animate");
  }

  // Functions After
  function initResetDataAfter() {
    $("[data-navigation-status]").attr("data-navigation-status", "not-active");
    $("[data-scrolling-direction]").attr("data-scrolling-direction", "down");
    $("[data-scrolling-started]").attr("data-scrolling-started", "false");
  }

  barba.init({
    sync: true,
    debug: false,
    timeout: 7000,
    transitions: [
      {
        name: "to-home",
        from: {},
        to: {
          namespace: ["home"],
        },
        once(data) {
          initSmoothScroll(data.next.container);
          initScript();
          initLoaderHome();
        },
      },
      {
        name: "self",
        async leave(data) {
          pageTransitionIn(data.current);
          initResetDataBefore();
          await delay(transitionOffset);
          initBarbaNavUpdate(data);
          initResetDataAfter();
          scroll.destroy();
          data.current.container.remove();
        },
        async enter(data) {
          pageTransitionOut(data.next);
        },
        async beforeEnter(data) {
          ScrollTrigger.getAll().forEach((t) => t.kill());
          initSmoothScroll(data.next.container);
          initScript();
        },
      },
      {
        name: "default",
        once(data) {
          initSmoothScroll(data.next.container);
          initScript();
          initLoader();
        },
        async leave(data) {
          pageTransitionIn(data.current);
          initResetDataBefore();
          await delay(transitionOffset);
          initBarbaNavUpdate(data);
          initResetDataAfter();
          scroll.destroy();
          data.current.container.remove();
        },
        async enter(data) {
          pageTransitionOut(data.next);
        },
        async beforeEnter(data) {
          ScrollTrigger.getAll().forEach((t) => t.kill());
          initSmoothScroll(data.next.container);
          initScript();
        },
      },
    ],
  });

  function initSmoothScroll(container) {
    // Lenis: https://github.com/studio-freight/lenis
    scroll = new Lenis({
      // wrapper: container,
      // content: container.querySelector('[data-scroll-container]'),
      duration: 1,
    });

    function raf(time) {
      scroll.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    scroll.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      scroll.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();
  }
}

// Don't touch
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

/**
 * Fire all scripts on page load
 */
function initScript() {
  initCheckWindowHeight();
  initBasicFunctions();
  initLazyLoad();
  initScrollTriggerPlayVideoInview();
  initLenisCheckScrollUpDown();
  initScrollToAnchorLenis();
  initScrollTriggerDataBackground();
  initSplitText();
  initTimeZone();
  initAutoSliderDrag();
  initBearlyDigitalContactForm();
}

/**
 * Barba Update Links outside Main on page Transition
 */
function initBarbaNavUpdate(data) {
  const updateItems = $(data.next.html).find("[data-barba-update]");

  $("[data-barba-update]").each(function (index) {
    if ($(updateItems[index]).get(0)) {
      const newLinkStatus = $(updateItems[index])
        .get(0)
        .getAttribute("data-link-status");
      $(this).attr("data-link-status", newLinkStatus);
    }
  });
}

/**
 * Window Inner Height Check
 */
function initCheckWindowHeight() {
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

/**
 * Basic Functions
 */
function initBasicFunctions() {
  // Toggle Navigation
  $('[data-navigation-toggle="toggle"]').click(function () {
    if (
      $("[data-navigation-status]").attr("data-navigation-status") ==
      "not-active"
    ) {
      $("[data-navigation-status]").attr("data-navigation-status", "active");
      scroll.stop();
    } else {
      $("[data-navigation-status]").attr(
        "data-navigation-status",
        "not-active"
      );
      scroll.start();
    }
  });

  // Close Navigation
  $('[data-navigation-toggle="close"]').click(function () {
    $("[data-navigation-status]").attr("data-navigation-status", "not-active");
    scroll.start();
  });

  // Key ESC - Close Navigation
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      if (
        $("[data-navigation-status]").attr("data-navigation-status") == "active"
      ) {
        $("[data-navigation-status]").attr(
          "data-navigation-status",
          "not-active"
        );
        scroll.start();
      }
    }
  });

  // Hover Projects add class to siblings
  $(".auto-slider-slides li").hover(function () {
    $(this).siblings().toggleClass("no-hover");
  });

  // Section Awards hover active
  $("[data-section-stacked-status]").each(function () {
    var sectionStacked = $(this);
    var stackedIndex = 2;

    sectionStacked.find(".col-table").on("mouseenter mouseleave", function () {
      if (sectionStacked.attr("data-section-stacked-status") == "not-active") {
        sectionStacked.attr("data-section-stacked-status", "active");
        gsap.fromTo(
          sectionStacked.find(".visual-box-list"),
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.25,
            ease: "draw",
          }
        );
      } else {
        sectionStacked.attr("data-section-stacked-status", "not-active");
        gsap.fromTo(
          sectionStacked.find(".visual-box-list"),
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1.25,
            ease: "draw",
          }
        );
      }
    });

    sectionStacked.find("[data-table-row-index]").on("mouseenter", function () {
      let dataTableRowIndex = $(this).attr("data-table-row-index");

      if (
        sectionStacked
          .find('[data-table-visual-index="' + dataTableRowIndex + '"]')
          .attr("data-table-visual-status") == "not-active"
      ) {
        stackedIndex = stackedIndex + 1;
        sectionStacked
          .find('[data-table-visual-index="' + dataTableRowIndex + '"]')
          .attr("data-table-visual-status", "active")
          .siblings()
          .attr("data-table-visual-status", "not-active");
        sectionStacked
          .find('[data-table-row-index="' + dataTableRowIndex + '"]')
          .attr("data-table-row-status", "active")
          .siblings()
          .attr("data-table-row-status", "not-active");
        sectionStacked
          .find('[data-table-visual-index="' + dataTableRowIndex + '"]')
          .css("z-index", stackedIndex);

        // gsap.fromTo(sectionStacked.find('[data-table-visual-index="' + dataTableRowIndex + '"]'), {
        //    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        // },{
        //    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        //    scale: 1,
        //    duration: 1.25,
        //    ease: "draw"
        // });
      }
    });
  });

  // Section Footer hover active

  $("[data-small-image-index]").on("mouseenter mouseleave", function () {
    let dataImageIndex = $(this).attr("data-small-image-index");

    if ($(this).attr("data-small-image-status") == "not-active") {
      $('[data-small-image-index="' + dataImageIndex + '"]').attr(
        "data-small-image-status",
        "active"
      );
    } else {
      $("[data-small-image-index").attr(
        "data-small-image-status",
        "not-active"
      );
    }
  });

  // Variable width form input
  $("[data-input-variable-width]").each(function () {
    var dataInput = $(this);

    dataInput.find(".input").on("input", function () {
      dataInput
        .find(".input-text-replace")
        .text(dataInput.find(".input").val());
    });

    dataInput.find(".input").on("focus input", function () {
      if (
        dataInput.find(".input-text-replace").text() ==
        $(this).attr("data-placeholder")
      ) {
        dataInput.addClass("blinker-start");
      } else {
        dataInput.removeClass("blinker-start");
      }
    });

    dataInput.find(".input").on("focusout", function () {
      if ($(this).attr("placeholder") == "") {
        $(this).attr("placeholder", $(this).attr("data-placeholder"));
        dataInput
          .find(".input-text-replace")
          .text($(this).attr("data-placeholder"));
      }
      dataInput.removeClass("blinker-start");
    });
  });

  // Show error or hide error on .has-error
  $("form.textform")
    .find("input")
    .on("validation-failed validation-succeeded", function (event) {
      if ($("form.textform").find(".has-error").length == 0) {
        $("form.textform").removeClass("form-has-error");
      } else {
        $("form.textform").addClass("form-has-error");
      }
    });
}

/**
 * Lazy Load
 */
function initLazyLoad() {
  // https://github.com/verlok/vanilla-lazyload
  var lazyLoadInstance = new LazyLoad({
    container: document.querySelector("[data-scroll-container]"),
    elements_selector: ".lazy",
  });
}

/**
 * Play Video Inview
 */
function initScrollTriggerPlayVideoInview() {
  let allVideoDivs = gsap.utils.toArray(".playpauze");

  allVideoDivs.forEach((videoDiv, i) => {
    let videoElem = videoDiv.querySelector("video");

    ScrollTrigger.create({
      scroller: document.querySelector("[data-scroll-container]"),
      trigger: videoElem,
      start: "0% 120%",
      end: "100% -20%",
      onEnter: () => videoElem.play(),
      onEnterBack: () => videoElem.play(),
      onLeave: () => videoElem.pause(),
      onLeaveBack: () => videoElem.pause(),
    });
  });
}

/**
 * Lenis - Check Scroll up or Down
 */

function initLenisCheckScrollUpDown() {
  var lastScrollTop = 0;
  var threshold = 50;
  var thresholdTop = 50;

  function startCheckScroll() {
    scroll.on("scroll", (e) => {
      var nowScrollTop = e.targetScroll;

      if (Math.abs(lastScrollTop - nowScrollTop) >= threshold) {
        // Check Scroll Direction
        if (nowScrollTop > lastScrollTop) {
          $("[data-scrolling-direction]").attr(
            "data-scrolling-direction",
            "down"
          );
        } else {
          $("[data-scrolling-direction]").attr(
            "data-scrolling-direction",
            "up"
          );
        }
        lastScrollTop = nowScrollTop;

        // Check if Scroll Started
        if (nowScrollTop > thresholdTop) {
          $("[data-scrolling-started]").attr("data-scrolling-started", "true");
        } else {
          $("[data-scrolling-started]").attr("data-scrolling-started", "false");
        }
      }
    });
  }
  startCheckScroll();

  // Reset instance
  barba.hooks.after(() => {
    startCheckScroll();
  });
}

/**
 * Lenis - ScrollTo Anchor Links
 */
function initScrollToAnchorLenis() {
  $("[data-anchor-target]").click(function () {
    let targetScrollToAnchorLenis = $(this).attr("data-anchor-target");
    scroll.scrollTo(targetScrollToAnchorLenis, {
      duration: 1,
      easing: (x) =>
        x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
    });
  });
}

/**
 * Scrolltrigger - Check Theme of Sections
 */
function initScrollTriggerDataBackground() {
  // Calculate offset navigation
  const navHeight = $(".main-navigation").height();

  // Check Theme (Dark/Light)
  $("[data-theme-section]").each(function () {
    var themeName = $(this).attr("data-theme-section");
    var singleSection = gsap.utils.toArray(
      '[data-theme-section="' + themeName + '"]'
    );

    singleSection.forEach((singleSection) => {
      ScrollTrigger.create({
        trigger: singleSection,
        start: () => "0% " + navHeight,
        end: "100% " + navHeight,
        onEnter: () => functionAddTheme(),
        onEnterBack: () => functionAddTheme(),
        markers: false,
      });
      function functionAddTheme() {
        if ($("[data-theme-nav]").attr("data-theme-nav") == themeName) {
        } else {
          $("[data-theme-nav]").attr("data-theme-nav", themeName);
        }
      }
    });
  });

  // Check Background Color
  $("[data-bg-section]").each(function () {
    var bgColorName = $(this).attr("data-bg-section");
    var singleBgColor = gsap.utils.toArray(
      '[data-bg-section="' + bgColorName + '"]'
    );

    singleBgColor.forEach((singleBgColor) => {
      ScrollTrigger.create({
        trigger: singleBgColor,
        start: () => "0% " + navHeight,
        end: "100% " + navHeight,
        onEnter: () => functionAddTheme(),
        onEnterBack: () => functionAddTheme(),
        markers: false,
      });
      function functionAddTheme() {
        if ($("[data-bg-nav]").attr("data-bg-nav") == bgColorName) {
        } else {
          $("[data-bg-nav]").attr("data-bg-nav", bgColorName);
        }
      }
    });
  });
}

/**
 * GSAP Split Text
 */
function initSplitText() {
  var splitTextWords = new SplitText(".split-words", {
    type: "words",
    wordsClass: "single-word",
  });
  $(".split-words .single-word").wrapInner('<div class="single-word-inner">');

  var splitNumber = new SplitText(".split-number", {
    type: "chars",
    wordsClass: "single-char",
  });
}

/**
 * Time Zone
 */
function initTimeZone() {
  // Time zone
  // https://stackoverflow.com/questions/39418405/making-a-live-clock-in-javascript/67149791#67149791
  // https://stackoverflow.com/questions/8207655/get-time-of-specific-timezone
  // https://stackoverflow.com/questions/63572780/how-to-update-intl-datetimeformat-with-new-date

  $("[data-timezone]").each(function (index) {
    var timeIndexID = "time-index-id-" + index;
    $(this).attr("id", timeIndexID);

    const timeSpan = document.querySelector("#" + timeIndexID);
    const timeZone = $(this).data("timezone");

    const optionsTime = {
      timeZone: timeZone,
      // timeZoneName: 'short',
      // year: 'numeric',
      // month: 'numeric',
      // day: 'numeric',
      hour: "2-digit",
      // hour12: 'true',
      hourCycle: "h12",
      minute: "numeric",
      // second: 'numeric',
    };

    const formatter = new Intl.DateTimeFormat([], optionsTime);
    updateTime();
    setInterval(updateTime, 1000);

    function updateTime() {
      const dateTime = new Date();
      const formattedDateTime = formatter.format(dateTime);
      timeSpan.textContent = formattedDateTime;
    }
  });
}

/**
 * Auto Slider Drag
 */
function initAutoSliderDrag() {
  // Source: https://codepen.io/GreenSock/pen/GRdMrZL
  // 2nd Source: https://codepen.io/GreenSock/pen/qBYqYGg

  $("[data-auto-slider-init]").each(function () {
    const boxes = gsap.utils.toArray(".auto-slider-single-slide");

    let activeElement;

    const loop = horizontalLoop(boxes, {
      paused: false,
      draggable: true, // make it draggable
      center: false, // active element is the one in the center of the container rather than th left edge
      onChange: (element, index) => {
        // when the active element changes, this function gets called.
        activeElement && activeElement.classList.remove("is-active");
        element.classList.add("is-active");
        activeElement = element;
      },
    });

    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let onChange = config.onChange,
        lastIndex = 0,
        tl = gsap.timeline({
          repeat: -1,
          onUpdate:
            onChange &&
            function () {
              let i = tl.closestIndex();
              if (lastIndex !== i) {
                lastIndex = i;
                onChange(items[i], i);
              }
            },
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () =>
            tl.totalTime(tl.rawTime() + tl.duration() * 10),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        spaceBefore = [],
        xPercents = [],
        curIndex = 0,
        center = config.center,
        pixelsPerSecond = (config.speed || 1) * 50,
        snap =
          config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        timeOffset = 0,
        container =
          center === true
            ? items[0].parentNode
            : gsap.utils.toArray(center)[0] || items[0].parentNode,
        totalWidth,
        getTotalWidth = () =>
          items[length - 1].offsetLeft +
          (xPercents[length - 1] / 100) * widths[length - 1] -
          startX +
          spaceBefore[0] +
          items[length - 1].offsetWidth *
            gsap.getProperty(items[length - 1], "scaleX") +
          (parseFloat(config.paddingRight) || 0),
        populateWidths = () => {
          let b1 = container.getBoundingClientRect(),
            b2;
          items.forEach((el, i) => {
            widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(
              (parseFloat(gsap.getProperty(el, "x", "px")) / widths[i]) * 100 +
                gsap.getProperty(el, "xPercent")
            );
            b2 = el.getBoundingClientRect();
            spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
            b1 = b2;
          });
          gsap.set(items, {
            // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
            xPercent: (i) => xPercents[i],
          });
          totalWidth = getTotalWidth();
        },
        timeWrap,
        populateOffsets = () => {
          timeOffset = center
            ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth
            : 0;
          center &&
            times.forEach((t, i) => {
              times[i] = timeWrap(
                tl.labels["label" + i] +
                  (tl.duration() * widths[i]) / 2 / totalWidth -
                  timeOffset
              );
            });
        },
        getClosest = (values, value, wrap) => {
          let i = values.length,
            closest = 1e10,
            index = 0,
            d;
          while (i--) {
            d = Math.abs(values[i] - value);
            if (d > wrap / 2) {
              d = wrap - d;
            }
            if (d < closest) {
              closest = d;
              index = i;
            }
          }
          return index;
        },
        populateTimeline = () => {
          let i, item, curX, distanceToStart, distanceToLoop;
          tl.clear();
          for (i = 0; i < length; i++) {
            item = items[i];
            curX = (xPercents[i] / 100) * widths[i];
            distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
            distanceToLoop =
              distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(
              item,
              {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
              },
              0
            )
              .fromTo(
                item,
                {
                  xPercent: snap(
                    ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                  ),
                },
                {
                  xPercent: xPercents[i],
                  duration:
                    (curX - distanceToLoop + totalWidth - curX) /
                    pixelsPerSecond,
                  immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
              )
              .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
          }
          timeWrap = gsap.utils.wrap(0, tl.duration());
        },
        refresh = (deep) => {
          let progress = tl.progress();
          tl.progress(0, true);
          populateWidths();
          deep && populateTimeline();
          populateOffsets();
          deep && tl.draggable
            ? tl.time(times[curIndex], true)
            : tl.progress(progress, true);
        },
        proxy;
      gsap.set(items, { x: 0 });
      populateWidths();
      populateTimeline();
      populateOffsets();
      window.addEventListener("resize", () => refresh(true));
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          // if we're wrapping the timeline's playhead, make the proper adjustments
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        if (time < 0 || time > tl.duration()) {
          vars.modifiers = { time: timeWrap };
        }
        curIndex = newIndex;
        vars.overwrite = true;
        gsap.killTweensOf(proxy);
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.closestIndex = (setCurrent) => {
        let index = getClosest(times, tl.time(), tl.duration());
        setCurrent && (curIndex = index);
        return index;
      };
      tl.times = times;
      tl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      if (config.draggable && typeof Draggable === "function") {
        proxy = document.createElement("div");
        let wrap = gsap.utils.wrap(0, 1),
          ratio,
          startProgress,
          draggable,
          dragSnap,
          align = () =>
            tl.progress(
              wrap(startProgress + (draggable.startX - draggable.x) * ratio)
            ),
          syncIndex = () => tl.closestIndex(true);
        typeof InertiaPlugin === "undefined" &&
          console.warn(
            "InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"
          );
        draggable = Draggable.create(proxy, {
          trigger: items[0].parentNode,
          type: "x",
          onPressInit() {
            gsap.killTweensOf(tl);
            startProgress = tl.progress();
            refresh();
            ratio = 1 / totalWidth;
            gsap.set(proxy, { x: startProgress / -ratio });
          },
          onDrag: align,
          onThrowUpdate: align,
          inertia: true,
          maxDuration: 1.5,
          throwResistance: 2000,
          snap: (value) => {
            let time = -(value * ratio) * tl.duration(),
              wrappedTime = timeWrap(time),
              snapTime = times[getClosest(times, wrappedTime, tl.duration())],
              dif = snapTime - wrappedTime;
            Math.abs(dif) > tl.duration() / 2 &&
              (dif += dif < 0 ? tl.duration() : -tl.duration());
            return (time + dif) / tl.duration() / -ratio;
          },
          onRelease: syncIndex,
          onThrowComplete: syncIndex,
        })[0];
        tl.draggable = draggable;
      }
      tl.closestIndex(true);
      onChange && onChange(items[curIndex], curIndex);
      return tl;
    }
  });
}

/**
 * Plugin Custom Contact Form Bearly Digital
*/

/*
function initBearlyDigitalContactForm() {
  window.bearly.loadforms();
}*/




