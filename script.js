// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){

      target.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

    }

  });

});

// ================= REVEAL ANIMATION =================

const reveals = document.querySelectorAll(
  ".card, .step, .tech span, .section h2, .center-text"
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("reveal","active");

    }

  });

},{
  threshold:0.15
});

reveals.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

// ================= PARALLAX HERO =================

window.addEventListener("scroll", () => {

  const hero = document.querySelector(".hero");

  hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;

});
