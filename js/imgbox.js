const windowHeight = window.innerHeight;

// 스크롤 이벤트 핸들러
function scrollAction() {
  const scrollElements = document.querySelectorAll('.imgbox');

  if (!scrollElements) {
    return;
  }

  scrollElements.forEach((scrollElement) => {
    const scrollHeight = scrollElement.getBoundingClientRect().top;
    scrollElement.classList.toggle('scrollAction', windowHeight > scrollHeight);
  });
}

// 실행
document.addEventListener('scroll', function () {
  scrollAction();
});
