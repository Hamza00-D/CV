// Récupérer les références des éléments HTML
const downloadButton = document.getElementById('downloadBtn');
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close');

// Événement pour afficher le pop-up
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(openPopup, 5000);
});

// Fonction pour afficher le pop-up
function openPopup() {
  popup.style.display = 'block';
}

// Événement pour fermer le pop-up en cliquant sur le bouton de fermeture
closeButton.addEventListener('click', closePopup);

// Événement pour fermer le pop-up en cliquant en dehors du contenu
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    closePopup();
  }
});

// Fonction pour fermer le pop-up
function closePopup() {
  popup.style.display = 'none';
}

// Récupérer les références des éléments HTML
const skills = document.querySelectorAll('.skill');

// Événement au chargement de la page pour animer les barres de progression
window.addEventListener('DOMContentLoaded', animateProgress);

// Fonction pour animer les barres de progression
function animateProgress() {
  skills.forEach((skill) => {
    const progress = skill.querySelector('.progress');
    const progressValue = parseInt(skill.dataset.progress);
    progress.style.width = progressValue + '%';
  });
}

