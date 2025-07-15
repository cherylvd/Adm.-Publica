function mostrarInfo(elemento) {
  const info = document.getElementById("info");
  const ramo = elemento.textContent;

  // Aquí puedes personalizar la información de cada ramo
  const descripciones = {
    "Nivelación de Matemáticas": "Curso de repaso y nivelación de contenidos matemáticos básicos.",
    "Taller de Habilidades TIC": "Introducción al uso de tecnologías de información.",
    "Taller de Habilidades Comunicativas": "Mejora de la expresión oral y escrita.",
    "Administración": "Fundamentos de la administración pública y privada.",
    "Contabilidad": "Principios contables básicos y su aplicación práctica."
  };

  info.textContent = descripciones[ramo] || "Información no disponible.";
  info.style.display = "block";
}

