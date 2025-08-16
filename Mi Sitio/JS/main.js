document.addEventListener("DOMContentLoaded", function () {
  // Agregar al carrito (de paso)
  const botonesCarrito = document.querySelectorAll("button");
  botonesCarrito.forEach(function (boton) {
    boton.addEventListener("click", function () {
      if (boton.closest(".blog-post")) return; // evita alert en el blog
      alert("Producto agregado al carrito 🛒");
    });
  });

  // Filtrado de categorías en el blog
  const botonesFiltro = document.querySelectorAll(".filtros button");
  const posts = document.querySelectorAll(".blog-post");

  if (botonesFiltro.length && posts.length) {
    botonesFiltro.forEach((boton) => {
      boton.addEventListener("click", function () {
        const categoria = this.getAttribute("data-filtro");

        // Activar botón
        botonesFiltro.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // Filtrar posts
        posts.forEach((post) => {
          if (categoria === "todos" || post.classList.contains(categoria)) {
            post.style.display = "block";
          } else {
            post.style.display = "none";
          }
        });
      });
    });
  }
});


