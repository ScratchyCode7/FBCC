  // Mobile menu elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileNav = document.getElementById('mobile-nav');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

// Image modal elements
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModalButton = document.getElementById('close-modal');
const churchBuildingImg = document.getElementById('church-building-img');

function openMobileMenu() {
  mobileNav.classList.remove('translate-x-full');
  mobileMenuOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileNav.classList.add('translate-x-full');
  mobileMenuOverlay.style.display = 'none';
  document.body.style.overflow = '';
}

function openImageModal(imageSrc) {
  modalImage.src = imageSrc;
  imageModal.classList.remove('hidden');
  setTimeout(() => {
    imageModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }, 10);
}

function closeImageModal() {
  imageModal.classList.remove('show');
  setTimeout(() => {
    imageModal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 300);
}

if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', openMobileMenu);
}
if (closeMobileMenuButton) {
  closeMobileMenuButton.addEventListener('click', closeMobileMenu);
}
if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);
}

if (churchBuildingImg) {
  churchBuildingImg.addEventListener('click', () => openImageModal(churchBuildingImg.src));
}
if (closeModalButton) {
  closeModalButton.addEventListener('click', closeImageModal);
}
if (imageModal) {
  imageModal.addEventListener('click', (event) => {
    if (event.target === imageModal) {
      closeImageModal();
    }
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
});
