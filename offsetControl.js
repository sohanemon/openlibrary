let prevOffset;
window.onload = () => {
  prevOffset = $("second-nav").offsetTop;
};
window.addEventListener("scroll", (e) => {
  if ($("second-nav").offsetTop <= prevOffset) {
    $("second-nav").classList.remove("shadow-md");
  } else {
    $("second-nav").classList.add("shadow-md");
  }
});
