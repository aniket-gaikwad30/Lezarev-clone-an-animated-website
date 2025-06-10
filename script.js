function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}

function navAnimation() {
  const nav = document.querySelector("nav");
  let tl; // Store timeline reference

  nav.addEventListener("mouseenter", function () {
    // Kill existing timeline if it's still running
    if (tl) tl.kill();

    tl = gsap.timeline();

    tl.set(".nav-part2 h5", { display: "block" });

    tl.to("#nav-bottom", {
      height: "26vh",
      duration: 0.5,
      ease: "power2.out",
    });

    tl.fromTo(
      ".nav-part2 h5 span",
      { y: 25 },
      {
        y: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out",
      },
      "-=0.3"
    );
  });

  nav.addEventListener("mouseleave", function () {
    if (tl) tl.kill();

    tl = gsap.timeline();

    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.in",
    });

    tl.to(
      "#nav-bottom",
      {
        height: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      "-=0.2"
    );

    tl.set(".nav-part2 h5", { display: "none" });
  });
}


function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 40,
        y: dets.y - elem.getBoundingClientRect().y - 100,
      });
    });
  });
}

function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });

  var sections = document.querySelectorAll(".sec-right");

  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}

function page6Animations() {
  gsap.from("#btm6-part2 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#btm6-part2",
      scroller: "#main",
      // markers:true,
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}

locomotiveAnimation();

navAnimation();

page2Animation();

page3VideoAnimation();

page6Animations();

loadingAnimation();
