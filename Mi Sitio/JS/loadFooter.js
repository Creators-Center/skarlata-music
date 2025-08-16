document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(err => console.error("Error al cargar el footer:", err));
});
