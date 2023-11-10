// gsap.plugin
gsap.registerPlugin(ScrollTrigger);
// header menu
const showNav = gsap
  .from(".h_pc_menu", {
    opacity: 0,
    paused: true,
    duration: 0.3,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,

  onUpdate: (self) => {
    self.direction === -1 ? showNav.play() : showNav.reverse();
  },
});

//scrollsmoother

// 스크롤 스무딩 효과를 적용할 요소 선택
const container = document.querySelector(".smooth-scroll-container");
const run = document.querySelector("img.run");
const robot = document.querySelector("img.robot");
const i_info1 = document.querySelector(".i_infotxt");
const i_info2 = document.querySelector(".i_video h2");
const i_info3 = document.querySelector(".boo");

// ScrollTrigger를 사용하여 요소를 트리거하고 애니메이션을 정의
gsap.to(".smooth-scroll-item", {
  y: -500, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: container,
    start: "top top", // 트리거가 언제 시작될지 설정
    end: "bottom bottom", // 트리거가 언제 끝날지 설정
    scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});
gsap.to(".run", {
  x: -200, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: run,
    start: "top center", // 트리거가 언제 시작될지 설정
    end: "bottom center", // 트리거가 언제 끝날지 설정
    scrub: 3, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});
gsap.to(".robot", {
  x: 150, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: robot,
    start: "top bottom", // 트리거가 언제 시작될지 설정
    end: "bottom bottom", // 트리거가 언제 끝날지 설정
    scrub: 3, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});
gsap.to(".i_infotxt", {
  y: -60, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: i_info1,
    start: "top bottom", // 트리거가 언제 시작될지 설정
    end: "bottom center", // 트리거가 언제 끝날지 설정
    scrub: 3, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});

gsap.to(".i_video h2", {
  y: -50, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: i_info1,
    start: "top bottom", // 트리거가 언제 시작될지 설정
    end: "bottom center", // 트리거가 언제 끝날지 설정
    scrub: 7, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});
gsap.to(".i_boo", {
  y: -100, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: i_info3,
    start: "top bottom", // 트리거가 언제 시작될지 설정
    end: "bottom center", // 트리거가 언제 끝날지 설정
    scrub: 7, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});

//토글메뉴 **************************************************************************************************
const elem = document.querySelector("#nav-bg"),
  toggleBtn = document.querySelector("#toggle-btn"),
  elemH = elem.getBoundingClientRect().height,
  elemW = elem.getBoundingClientRect().width;

let open = false;
let scale, offsetX, offsetY;

const calculateValues = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  //const cssStyles = getComputedStyle(elem);
  //const offsetValue = Number(cssStyles.getPropertyValue('--offset-value'));
  const offsetValue = Number(
    getComputedStyle(elem).getPropertyValue("--offset-value")
  );

  //  Offsets to center the circle
  /*   offsetX = (w/2) - (elemW/2) - offsetValue;
  offsetY = (h/2) - (elemH/2) - offsetValue; */
  offsetX = 50; // 가로 위치 (픽셀)
  offsetY = 10; // 세로 위치 (픽셀)

  // Good old pythagoras
  const radius = Math.sqrt(h ** 2 + w ** 2);
  scale = radius / (elemW / 2) / 1 + 0.1; // Add '.1' to compensate for Safari sub pixel blur issue
  return scale;
};

const openMenu = () => {
  elem.style.setProperty("--translate-x", `${offsetX}px`);
  elem.style.setProperty("--translate-y", `-${offsetY}px`);
  elem.style.setProperty("--scale", scale);
};
const closeMenu = () => {
  elem.style.setProperty("--scale", 1);
  elem.style.setProperty("--translate-x", 0);
  elem.style.setProperty("--translate-y", 0);
};
const animateMenu = () => {
  open ? openMenu() : closeMenu();
};

const toggleMenu = () => {
  open = !open;
  animateMenu();
  toggleBtn.classList.toggle("shown");
};

const resizeHandler = () => {
  window.requestAnimationFrame(() => {
    calculateValues();
    animateMenu();
  });
};

calculateValues();

//toggleBtn.onclick = toggleMenu;
toggleBtn.addEventListener("click", toggleMenu, false);
window.addEventListener("resize", resizeHandler, false);

// footer family
const fClose = document.querySelector(".family_close span");
const fSubBg = document.querySelector(".family_bg");
const fOpen = document.querySelector(".family button");

fClose.addEventListener("click", () => {
  fSubBg.style.display = "none";
});

fOpen.addEventListener("click", () => {
  fSubBg.style.display = "block";
});
