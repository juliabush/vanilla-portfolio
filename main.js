document.querySelectorAll(".project-bubble").forEach((bubble) => {
  bubble.addEventListener("click", () => {
    const target = bubble.getAttribute("data-link");
    if (target) window.location.href = target;
  });
  bubble.addEventListener("mouseenter", () => {
    bubble.classList.add("hover");
  });
  bubble.addEventListener("mouseleave", () => {
    bubble.classList.remove("hover");
  });
});
