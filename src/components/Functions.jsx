export function scrollLeft() {
  const container = document.getElementById("promo-scroll");
  container.scrollBy({ left: -300, behavior: "smooth" });
}

export function scrollRight() {
  const container = document.getElementById("promo-scroll");
  container.scrollBy({ left: 300, behavior: "smooth" });
}