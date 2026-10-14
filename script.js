const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀' : '◐';
});
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('senderName').value.trim();
  const email = document.getElementById('senderEmail').value.trim();
  const message = document.getElementById('senderMessage').value.trim();
  const feedback = document.getElementById('formFeedback');
  // Replace with your own email address before publishing.
  const recipient = 'YOUR_EMAIL@example.com';
  if (recipient === 'YOUR_EMAIL@example.com') {
    feedback.textContent = 'Add your real email in script.js to activate this contact form.';
    return;
  }
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  feedback.textContent = 'Opening your email application…';
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
