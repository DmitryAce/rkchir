function truncateText() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const textElement = card.querySelector('.text');
    const maxLength = 40; // Максимальная длина текста

    if (textElement.textContent.length > maxLength) {
      textElement.textContent = textElement.textContent.slice(0, maxLength) + '…';
    }
  });
}

truncateText();
