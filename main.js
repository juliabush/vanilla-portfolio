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
function openModal(wrapper) {
  wrapper.querySelector(".modal").style.display = "flex";
}

function closeModal(e) {
  e.stopPropagation();
  e.target.closest(".modal").style.display = "none";
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
