// Warte, bis der DOM vollständig geladen ist, bevor das Skript ausgeführt wird
document.addEventListener('DOMContentLoaded', function() {
  // Beispiel: Button-Klick (zum Testen)
  document.getElementById('clickMe').addEventListener('click', function() {
    alert('Button wurde geklickt!');
  });

  // Schließt das Modal, wenn außerhalb des Inhalts geklickt wird
  const modal = document.getElementById("modal"); 
  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Schließen-Schaltfläche im Modal
  const closeBtn = document.querySelector(".close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }
});

// Daten für die Module – alle Einträge identisch formatiert
const moduleData = [
  {
    title: "Drehen",
    description: "Hier kannst du ausführliche Informationen zu Drehen einfügen. Rotationssymmetrische Bearbeitung ist ein wichtiger Teil der Werkstattarbeit.",
    additional: "Zusätzliche Informationen oder Details zu Drehen.",
    image: "static/images/bild1.jpg",
    moreInfoUrl: "drehen_info",
    projectsUrl: "wifi_projekte"
  },
  {
    title: "Fräsen",
    description: "Hier kannst du detaillierte Informationen zum Fräsen einfügen. Zerspanende Verfahren wie Fräsen sind essenziell.",
    additional: "Zusätzliche Informationen oder Details zu Fräsen.",
    image: "static/images/bild2.jpg",
    moreInfoUrl: "fraesen_info",
    projectsUrl: "wifi_projekte"
  },
  {
    title: "3D-Druck",
    description: "3D-Druck ermöglicht schichtweises und innovatives Arbeiten. Hier sind alle wichtigen Details dazu.",
    additional: "Zusätzliche Informationen oder Details zu 3D-Druck.",
    image: "static/images/bild3.jpg",
    moreInfoUrl: "3d_druck_info",
    projectsUrl: "3d_druck_projekte"
  },
  {
    title: "CAD",
    description: "CAD bietet präzise Konstruktionen. Details zu den Grundlagen und wichtigen Projekten findest du hier.",
    additional: "Zusätzliche Informationen oder Details zu CAD.",
    image: "static/images/bild4.jpg",
    moreInfoUrl: "cad_info",
    projectsUrl: "cad_projekte"
  },
  {
    title: "Über uns",
    description: "Hier findest du Informationen über die Idee und das Team hinter diesem Projekt.",
    additional: "Zusätzliche Informationen oder Details zu Über uns.",
    image: "static/images/bild5.jpg",
    moreInfoUrl: "ueber_uns_info",
    projectsUrl: "wifi_projekte"
  },
  {
    title: "AI-Assistent",
    description: "Hier findest du Informationen über unseren AI-Assistenten.",
    additional: "Weitere Details zu unserem AI-Assistenten.",
    image: "static/images/bild7.jpg",
    moreInfoUrl: "ai_assistent_info",
    projectsUrl: "ai_assistent_projekte"
  },
  {
    title: "CAE",
    description: "Informationen zu CAE, Simulation und Analyse.",
    additional: "Weitere Details zu CAE.",
    image: "static/images/bild8.png",
    moreInfoUrl: "cae_info",
    projectsUrl: "cae_projekte"
  },
  {
    title: "Lasertechnik",
    description: "Hier erfährst du alles über unsere Lasertechnik.",
    additional: "Weitere Details zur Lasertechnik.",
    image: "static/images/bild6.jpg",
    moreInfoUrl: "lasertechnik_info",
    projectsUrl: "lasertechnik_projekte"
  }
];

// Modal öffnen: Füllt das Modal mit den entsprechenden Daten und zeigt es an
function openModal(index) {
  const modal = document.getElementById("modal");
  const modalTitle = modal.querySelector("#modal-title");
  const modalDescription = modal.querySelector("#modal-description");
  const modalAdditional = modal.querySelector("#modal-additional");
  const modalImage = modal.querySelector("#modal-image");

  // Link-Elemente im Modal
  const moreInfoLink = modal.querySelector("#more-info-link");
  const projectsLink = modal.querySelector("#projects-link");

  // Daten aus dem Array laden
  const data = moduleData[index];
  modalTitle.textContent = data.title;
  modalDescription.textContent = data.description;
  modalAdditional.textContent = data.additional || "";
  modalImage.src = data.image;

  // URLs setzen
  moreInfoLink.href = data.moreInfoUrl;
  projectsLink.href = data.projectsUrl;

  // Modal anzeigen
  modal.style.display = "flex";
}

// Modal schließen: Blendet das Modal aus
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Stelle sicher, dass die Funktionen global verfügbar sind
window.openModal = openModal;
window.closeModal = closeModal;
