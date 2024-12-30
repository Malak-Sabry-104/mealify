const btn = document.querySelector(".btn-to-top");
function goUp() {
  scroll({
    top: 0,
    behavior: "smooth",
  });
}
btn.addEventListener("click", goUp);
window.addEventListener("scroll", (e) => {
  if (scrollY < 300) {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
});
