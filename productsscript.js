function openModal(id) {
  document.getElementById(id + '-modal').style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id + '-modal').style.display = 'none';
}

window.onclick = function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

  const cards = document.querySelectorAll('.product-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.8s ease-out forwards";
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`; // staggered delay
    observer.observe(card);
  });
