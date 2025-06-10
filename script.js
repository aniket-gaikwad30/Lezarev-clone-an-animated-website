console.log("Welcome to LAZAREV!");

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


navAnimation();


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
        y: dets.y - elem.getBoundingClientRect().y -100,
      });
    });
  });
}

page2Animation();



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

page3VideoAnimation();