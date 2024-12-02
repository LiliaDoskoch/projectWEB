function subscribe() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    // Перевірка на правильність формату email
    if (!validateEmail(email)) {
        message.style.color = "red";
        message.innerText = "Будь ласка, введіть коректну адресу електронної пошти.";
        return;
    }

    message.style.color = "green";
    message.innerText = "Дякуємо за підписку!";


}

// Валідація формату email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
