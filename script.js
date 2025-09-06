document.addEventListener("click", function (e) {
  if (!e.target.closest("nav")) {
    window.location.href = "projects.html";
  }
});
