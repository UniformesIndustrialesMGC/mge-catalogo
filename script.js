function showWhatsAppOptions() {
  document.getElementById("whatsappModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeWhatsAppOptions() {
  document.getElementById("whatsappModal").classList.remove("active");
  document.body.style.overflow = "";
}

function closeModalOutside(event) {
  if (event.target.id === "whatsappModal") {
    closeWhatsAppOptions();
  }
}

function openWhatsApp(productName) {
  const message = `Hola, vi su catálogo de MGE Textiles + Uniformes y me interesa el producto: ${productName}. Me gustaría solicitar una cotización.`;
  const url = `https://wa.me/522221365686?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeWhatsAppOptions();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
