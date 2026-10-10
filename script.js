const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = open ? '×' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

const dateInput = document.querySelector('input[name="eventDate"]');
if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.min = localToday;
}

document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const service = link.getAttribute('data-service');
    const checkbox = [...document.querySelectorAll('input[name="services"]')].find(input => input.value === service);
    if (checkbox) checkbox.checked = true;
  });
});

const form = document.getElementById('inquiry-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const selectedServices = data.getAll('services');
  if (!selectedServices.length) {
    status.textContent = 'Please select at least one service so we can understand what you need.';
    document.querySelector('.services-field').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const subject = `Event inquiry — ${data.get('eventType')} — ${data.get('eventDate')}`;
  const body = [
    'THE LIQUOR DISTRICT — EVENT INQUIRY',
    '',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Email: ${data.get('email')}`,
    `Event type: ${data.get('eventType')}`,
    `Event date: ${data.get('eventDate')}`,
    `Estimated guest count: ${data.get('guests')}`,
    `Event city / venue area: ${data.get('location') || 'Not provided'}`,
    `Services requested: ${selectedServices.join(', ')}`,
    '',
    'Event details:',
    data.get('details') || 'Not provided'
  ].join('\n');
  status.textContent = 'Your email app should open with the inquiry details. Review it and press Send to submit your inquiry.';
  window.location.href = `mailto:theliquordistrict@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
