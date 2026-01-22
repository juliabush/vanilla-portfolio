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
  e.stopPropagation();
  const modal = e.target.closest(".modal");
  if (modal) modal.style.display = "none";
}

function applyBubbleLayout() {
  const isMobile = window.matchMedia("(max-width: 480px)").matches;
  const isTablet = window.matchMedia(
    "(min-width: 481px) and (max-width: 1024px)",
  ).matches;

  document.querySelectorAll(".project-bubble").forEach((bubble) => {
    let x;
    let y;

    if (isMobile) {
      x = bubble.dataset.xMobile;
      y = bubble.dataset.yMobile;
    } else if (isTablet) {
      x = bubble.dataset.xTablet ?? bubble.dataset.xDesktop;
      y = bubble.dataset.yTablet ?? bubble.dataset.yDesktop;
    } else {
      x = bubble.dataset.xDesktop;
      y = bubble.dataset.yDesktop;
    }

    bubble.style.setProperty("--x", x);
    bubble.style.setProperty("--y", y);
  });
}

window.addEventListener("resize", applyBubbleLayout);
window.addEventListener("DOMContentLoaded", applyBubbleLayout);
