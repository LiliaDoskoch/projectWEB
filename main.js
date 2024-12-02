// Testimonials Section 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});





function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function subscribe() {
  const email = document.getElementById('emailInput').value;

  if (!validateEmail(email)) {
    alert('Будь ласка, введіть дійсну email-адресу.');
    return;
  }

  // Показуємо модальне вікно
  document.getElementById('successModal').style.display = 'flex';

  // Закриваємо модальне вікно через 5 секунд
  setTimeout(closeModal, 5000);
}

function closeModal() {
  document.getElementById('successModal').style.display = 'none';
}

