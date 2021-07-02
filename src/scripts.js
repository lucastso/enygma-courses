function setupVideos() {
  for (const video of document.querySelectorAll("video")) {
    video.controls = false;
    video.addEventListener("mouseover", () => {
      video.controls = "controls";
    });
    video.addEventListener("mouseout", () => {
      video.controls = false;
    });
  }
}
window.addEventListener("load", setupVideos, false);

const allSections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("hidden");
});
