function notify(message) {
  const notifyDiv = document.querySelector('#notification');
  notifyDiv.textContent = message;
  notifyDiv.style.display = 'block';

  notifyDiv.addEventListener('click', () => {
    notifyDiv.style.display = 'none';
  });
}