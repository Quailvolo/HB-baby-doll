// Подсказки для загадок
document.querySelectorAll('.hint-btn').forEach(button => {
  button.addEventListener('click', () => {
    const hint = button.nextElementSibling;
    if (hint && hint.classList.contains('hint-text')) {
      hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
    }
  });
});

// Переход между загадками и показ финального текста квеста
const riddles = document.querySelectorAll('.riddle');
const nextButtons = document.querySelectorAll('.next-btn');
const finishBlock = document.getElementById('quest-finish');
const riddlesContainer = document.getElementById('riddles-container');
const questIntroText = document.querySelector('.quest-intro');

nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentRiddle = button.closest('.riddle');
    const currentIndex = parseInt(currentRiddle.dataset.index, 10);

    // Скрыть текущую загадку
    currentRiddle.style.display = 'none';

    // Показать следующую загадку или финальный текст
    const nextRiddle = document.querySelector(`.riddle[data-index="${currentIndex + 1}"]`);
    if (nextRiddle) {
      nextRiddle.style.display = 'block';
    } else {
      // Показать только заголовок и финальный текст
      finishBlock.style.display = 'block';
      finishBlock.classList.add('show');

      // Скрыть контейнер с загадками и вводный абзац
      if (riddlesContainer) riddlesContainer.style.display = 'none';
      if (questIntroText) questIntroText.style.display = 'none';
    }
  });
});

// Работа с блоком "9 причин"
document.addEventListener('DOMContentLoaded', () => {
  const showReasonsBtn = document.getElementById('show-reasons-btn');
  const reasonCards = document.querySelectorAll('.reason-card');
  const toFinalBtn = document.getElementById('to-final-btn');
  const finalSection = document.querySelector('.final');

  if (showReasonsBtn) {
    showReasonsBtn.addEventListener('click', () => {
      reasonCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.classList.add('flipped');
        }, index * 300);
      });

      showReasonsBtn.style.display = 'none';

      setTimeout(() => {
        toFinalBtn.style.display = 'block';
      }, reasonCards.length * 300 + 500);
    });
  }

  // Кнопка "Далее" к финальному блоку
  toFinalBtn.addEventListener('click', () => {
    if (finalSection) finalSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// При загрузке показать первую загадку
document.addEventListener('DOMContentLoaded', () => {
  riddles.forEach((riddle, index) => {
    riddle.style.display = index === 0 ? 'block' : 'none';
  });
});

