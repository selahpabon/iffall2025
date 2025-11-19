let lastScrollTop = 0;
let showingFirst = true;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const aboutSection = document.querySelector('.aboutus');
  const text1 = aboutSection.querySelector('.text-1');
  const text2 = aboutSection.querySelector('.text-2');


  const sectionTop = aboutSection.offsetTop;
  const sectionHeight = aboutSection.offsetHeight;
  const triggerPoint = sectionTop + sectionHeight * 0.6; 
  const exitPoint = sectionTop + sectionHeight * 0.9;    

  const inView = currentScroll > sectionTop - window.innerHeight / 2 &&
               currentScroll < sectionTop + sectionHeight;


if (inView) {
  if (currentScroll > triggerPoint && showingFirst) {
    text1.classList.remove('active');
    text2.classList.add('active');
    showingFirst = false;
  } 
  else if (currentScroll < exitPoint && !showingFirst) {
    text2.classList.remove('active');
    text1.classList.add('active');
    showingFirst = true;
  }
}

  if (inView) {
    if (currentScroll > lastScrollTop && showingFirst) {
      
      text1.classList.remove('active');
      text2.classList.add('active');
      showingFirst = false;
    } 
    else if (currentScroll < lastScrollTop && !showingFirst) {
      
      text2.classList.remove('active');
      text1.classList.add('active');
      showingFirst = true;
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ART SECTION 
window.addEventListener("scroll", () => {
  const artSection = document.querySelector(".art");
  const artText = document.querySelector(".art-text");
  const artGrid = document.querySelector(".art-grid");

  if (!artSection || !artText || !artGrid) return;

  const sectionTop = artSection.offsetTop;
  const sectionHeight = artSection.offsetHeight;
  const scrollY = window.scrollY + window.innerHeight / 2; 

  const triggerPoint = sectionTop + sectionHeight * 0.50;
  const endPoint = sectionTop + sectionHeight * 0.75;

  if (scrollY > triggerPoint && scrollY < endPoint) {
    artText.classList.add("fade-out");
    artGrid.classList.add("show");


    const cards = artGrid.querySelectorAll(".card");
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add("show"), i * 150);
    });
  } else {
    artText.classList.remove("fade-out");
    artGrid.classList.remove("show");

    const cards = artGrid.querySelectorAll(".card");
    cards.forEach(card => card.classList.remove("show"));
  }
});
