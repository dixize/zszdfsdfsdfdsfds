// Функция переключения шагов
function nextStep(step) {
    // Скрываем все шаги
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    // Показываем нужный
    document.getElementById('step' + step).classList.add('active');
    // Двигаем прогресс
    const bar = document.getElementById('bar');
    bar.style.width = (step * 33.3) + '%';
}

// Открыть/закрыть модалку
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Скролл к квизу
function scrollToQuiz() {
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}
