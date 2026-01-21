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
  const modal = wrapper.querySelector(".modal");
  modal.style.display = "flex";

  modal.addEventListener("click", closeModal);
  modal.querySelector(".modal-content").addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

function closeModal(e) {
  e.currentTarget.style.display = "none";
}

function applyBubbleLayout() {
  const isMobile = window.matchMedia("(max-width: 480px)").matches;

  document.querySelectorAll(".project-bubble").forEach((bubble) => {
    bubble.style.setProperty(
      "--x",
      bubble.dataset[isMobile ? "xMobile" : "xDesktop"],
    );
    bubble.style.setProperty(
      "--y",
      bubble.dataset[isMobile ? "yMobile" : "yDesktop"],
    );
  });
}

window.addEventListener("resize", applyBubbleLayout);
window.addEventListener("DOMContentLoaded", applyBubbleLayout);
