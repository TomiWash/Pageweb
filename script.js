
// funcion que hace que abra la imagen es decir "ampliado"
function openImage(element) {
    const imgSrc = element.src;
    const modal = document.createElement("div");
    modal.classList.add("fixed", "inset-0", "bg-black", "bg-opacity-75", "flex", "items-center", "justify-center");
  
    const img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("max-w-full", "max-h-full", "rounded-lg");
  
    modal.appendChild(img);
    document.body.appendChild(modal);
  
    modal.addEventListener("click", () => {
      modal.remove();
    });
  }
  
  // valida el formulario para el contacto
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Todos los campos son obligatorios.");
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert("Por favor ingresa un email válido.");
      return;
    }
  
    alert("Mensaje enviado con éxito.");
  });

  function toggleInfo(id) {
    const infoDiv = document.getElementById(id);
    const button = infoDiv.nextElementSibling;

    if (infoDiv.classList.contains("max-h-20")) {
        // expande la información
        infoDiv.classList.remove("max-h-20");
        infoDiv.classList.add("max-h-screen");
        button.textContent = "Mostrar menos información";
    } else {
        // contrae la información
        infoDiv.classList.remove("max-h-screen");
        infoDiv.classList.add("max-h-20");
        button.textContent = "Mostrar más información";
    }
}

  