const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      //   if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  { threshold: 1 }
);

cards.forEach((card) => {
  observer.observe(card);
});

const lastCardObserver = new IntersectionObserver(
  (entries) => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector(".card:last-child"));
  },
  { rootMargin: "200px" }
);

loadNewCards();

lastCardObserver.observe(document.querySelector(".card:last-child"));

function loadNewCards() {
  const container = document.querySelector(".card-container");

  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.textContent = "This is a card";
    observer.observe(div);
    container.appendChild(div);
  }
}
