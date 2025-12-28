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
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function applyBubbleLayout() {
  const isMobile = window.matchMedia("(max-width: 480px)").matches;

  document.querySelectorAll(".project-bubble").forEach((bubble) => {
    bubble.style.setProperty(
      "--x",
      bubble.dataset[isMobile ? "xMobile" : "xDesktop"]
    );
    bubble.style.setProperty(
      "--y",
      bubble.dataset[isMobile ? "yMobile" : "yDesktop"]
    );
  });
}

window.addEventListener("resize", applyBubbleLayout);
window.addEventListener("DOMContentLoaded", applyBubbleLayout);
