const button = document.getElementById('button');
const notifications = document.getElementById('notifications');

function createNotification(message = null) {
  if (!message) {
    return console.error('Message is required');
  }
  const notif = document.createElement('div');
  notif.classList.add('notification');
  notif.innerHTML = `
    <img
      src="assets/check-circle.svg"
      alt="Success"
      class="notification__icon"
    />
    ${message}
  `;
  notifications.appendChild(notif);

  setTimeout(() => notif.classList.add('visible'), 100);
  setTimeout(() => {
    notif.classList.remove('visible');
    setTimeout(() => notif.remove(), 100);
  }, 3000);
}

button.addEventListener('click', () => {
  createNotification('Your account has been created! &#128640;');
});