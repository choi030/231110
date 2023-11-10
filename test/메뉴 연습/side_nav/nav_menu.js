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
