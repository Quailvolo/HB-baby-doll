// Подсказки
document.querySelectorAll('.hint-btn').forEach(button => {
  button.addEventListener('click', () => {
    const hint = button.nextElementSibling;
    if (hint && hint.classList.contains('hint-text')) {
      hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
    }
  });
});

// Переход от одной загадки к следующей
const riddles = document.querySelectorAll('.riddle');
const nextButtons = document.querySelectorAll('.next-btn');
const finishBlock = document.getElementById('quest-finish');

nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentRiddle = button.closest('.riddle');
    const currentIndex = parseInt(currentRiddle.dataset.index, 10);

    currentRiddle.style.display = 'none';

    const nextRiddle = document.querySelector(`.riddle[data-index="${currentIndex + 1}"]`);

    if (nextRiddle) {
  nextRiddle.style.display = 'block';
} else {
  finishBlock.style.display = 'block';
  finishBlock.classList.add('show');

  // Скрываем текст и кнопку "Погнали" в блоке quest
  const questIntroText = document.querySelector('.quest p');
  const questStartBtn = document.querySelector('.quest button:not(.next-btn):not(#to-reasons-btn)');

  if (questIntroText) questIntroText.style.display = 'none';
  if (questStartBtn) questStartBtn.style.display = 'none';
}
});
});

// Переход к блоку "9 причин"
const toReasonsBtn = document.getElementById('to-reasons-btn');
const reasonsSection = document.querySelector('.reasons');

toReasonsBtn.addEventListener('click', () => {
  reasonsSection.scrollIntoView({ behavior: 'smooth' });
});

// Блок "9 причин"
document.addEventListener('DOMContentLoaded', () => {
  const showReasonsBtn = document.getElementById('show-reasons-btn');
  const reasonsGrid = document.getElementById('reasons-grid');
  const reasonCards = document.querySelectorAll('.reason-card');
  const toFinalBtn = document.getElementById('to-final-btn');

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

  toFinalBtn.addEventListener('click', () => {
    document.querySelector('.final').scrollIntoView({ behavior: 'smooth' });
  });
}); 

