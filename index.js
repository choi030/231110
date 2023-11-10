gsap.registerPlugin(ScrollTrigger);
// header menu
const showNav = gsap.from(".h_pc_menu", {
  opacity: 0,
  paused: true,
  duration: 0.3,
});

ScrollTrigger.create({
  start: "top top",
  end: 99999,

  onUpdate: (self) => {
    self.direction === -1 ? showNav.play() : showNav.reverse();
  },
});

const 헤더 = document.querySelector(".h_pc_menu");
const about = document.querySelector(".about");
const logoW = document.querySelector(".h_logo a:nth-child(2)");
const logo = document.querySelector(".logo");
const contact = document.querySelector(".contact");
const introImg = document.querySelector('.intro_imgs')
const introTxt = document.querySelector('.intro_txt')

addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const abouts = about.offsetTop;
  const contactS = contact.offsetTop;
  const introImgS = introImg.offsetTop;
  const introTxtS = introImg.offsetTop;

  if (scrollY > abouts) {
    헤더.classList.add("active");
    logo.style.display = "none";
    logoW.style.display = "block";
  } else {
    헤더.classList.remove("active");
    logo.style.display = "block";
    logoW.style.display = "none";
  }

  if (scrollY > contactS) {
    헤더.classList.remove("active");
    logoW.style.display = "none";
    logo.style.display = "block";
  }
  if (scrollY < introImgS) {
    introImg.style.transform = `translateY(-${scrollY / 10}px)`;
  }
  if (scrollY < introTxtS) {
    introTxt.style.transform = `translateY(-${scrollY / 10}px)`;
  }

  /*   if (scrollY > contactS) {
    헤더.classList.remove('active');
    logoW.style.display = 'none';
    logo.style.display = 'block';
  } else{
    헤더.classList.add('active');
    logoW.style.display = 'block';
    logo.style.display = 'none';

  }; */
});

// about clicle
gsap.from(".a_circle_bg", {
  scrollTrigger: {
    trigger: ".about",
    start: "-50% 20%",
    end: "start start",
    scrub: 0.8,
    onLeave: function () {
      console.log("첫번째 이벤트 완료");
    },
  },
  scale: 0,
});

gsap.from(".metro_bg", {
  scrollTrigger: {
    trigger: ".about",
    start: "-70% 20%",
    end: "start start",
    scrub: 0.8,
    onLeave: function () {
      console.log("첫번째 이벤트 완료");
    },
  },
  translateY: 0,
});

//main_intro
const meteor = document.querySelectorAll(".meteor");
const meteor1 = document.querySelector("#m_1");
const meteor2 = document.querySelector("#m_2");
const meteor3 = document.querySelector("#m_3");
const meteor4 = document.querySelector("#m_4");
const h1 = document.querySelector("#h1");
const h3 = document.querySelector("#h3");
const h4 = document.querySelector("#h4");
addEventListener("mousemove", (e) => {
  //마우스의 실시간 좌표확인
  let x = e.clientX;
  let y = e.clientY;
  meteor1.style.transform = `translate(${-x / -50}px, ${
    y / 70 + 10
  }px) rotate(15deg)`;
  meteor2.style.transform = `translate(${-x / -50}px, ${
    y / 70 + 10
  }px) rotate(15deg)`;
  meteor3.style.transform = `translate(${-x / -50}px, ${
    y / 70 + 10
  }px) rotate(15deg)`;
  meteor4.style.transform = `translate(${x / -50}px, ${
    y / 70 + 10
  }px)  rotate(15deg)`;
  h1.style.transform = `translate(${-x / -50}px, ${y / 70 + 10}px)`;
  h3.style.transform = `translate(${30 - x / 60}px, ${40 - y / 50}px)`;
  h4.style.transform = `translate(${30 - x / 60}px, ${y / 50}px)`;
});

const h_bg = document.querySelector("#pc_bg");
const h_bg_m = document.querySelector("#m_bg");

addEventListener("scroll", () => {
  h_bg.style.transform = `translateY(-${scrollY / 8}px)`;
});
addEventListener("scroll", () => {
  h_bg_m.style.transform = `translateY(-${scrollY / 8}px)`;
});

//스크롤 이벤트
const container = document.querySelector(".smooth-scroll-container");

gsap.to(".smooth-scroll-item", {
  y: -500, // 원하는 애니메이션 효과 설정
  scrollTrigger: {
    trigger: container,
    start: "top top", // 트리거가 언제 시작될지 설정
    end: "bottom bottom", // 트리거가 언제 끝날지 설정
    scrub: 2, // 스크롤 속도에 따라 애니메이션을 부드럽게 조절 (1은 100% 부드러움)
  },
});

// brochure
const brochurOpenBtn = document.querySelector(".inner_brochur_btn");
const bsrochurCloseBtn = document.querySelector(".brochure_close_btn");
const brochureModal = document.querySelector(".c_brochure_modal");
// 모달 열기
brochurOpenBtn.addEventListener("click", () => {
  brochureModal.style.display = "block";
});
// 모달 닫기
bsrochurCloseBtn.addEventListener("click", () => {
  brochureModal.style.display = "none";
});
//토글메뉴----------------

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

const mainSticky = document.querySelector(".main_sticky");

ScrollTrigger.create({
  trigger: mainSticky,
  start: "center center",
  pin: true,
  pinSpacing: false,
});
