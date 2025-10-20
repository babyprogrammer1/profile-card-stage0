function updateTime () {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (!timeElement) return; // don't error on pages without a time element
  timeElement.textContent = `Current Time: ${Date.now()} ms`;
}
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setInterval(updateTime, 1000);

  // Contact form handling: show a submitting message on submit, then show a success confirmation on success.
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return; // nothing to do on pages without the contact form

  const successMsg = document.querySelector('[data-testid="test-contact-success"]');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Immediately show a submitting state so users get feedback that their action registered
    if (successMsg) {
      successMsg.hidden = false;
      successMsg.textContent = 'Sending...';
      successMsg.setAttribute('role', 'status');
      successMsg.setAttribute('aria-live', 'polite');
      successMsg.tabIndex = -1; // make focusable for programmatic focus
      successMsg.focus();
    }

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    let valid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    if (!name || !name.value.trim()) {
      const el = document.querySelector('[data-testid="test-contact-error-name"]');
      if (el) el.textContent = 'Name is required.';
      valid = false;
    }

    if (!email || !email.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      const el = document.querySelector('[data-testid="test-contact-error-email"]');
      if (el) el.textContent = 'Enter a valid email.';
      valid = false;
    }

    if (!subject || !subject.value.trim()) {
      const el = document.querySelector('[data-testid="test-contact-error-subject"]');
      if (el) el.textContent = 'Subject is required.';
      valid = false;
    }

    if (!message || message.value.trim().length < 10) {
      const el = document.querySelector('[data-testid="test-contact-error-message"]');
      if (el) el.textContent = 'Message must be at least 10 characters.';
      valid = false;
    }

    if (valid) {
      // Simulate a successful send (replace with real network request as needed)
      if (successMsg) {
        successMsg.textContent = 'Thank you! Your message has been sent.';
        successMsg.hidden = false;
        // keep the message visible and focused for screen reader users
        successMsg.focus();
      }
      contactForm.reset();
    } else {
      // Hide the transient sending text if validation failed and focus the first error
      if (successMsg) successMsg.hidden = true;
      const firstError = document.querySelector('.error:not(:empty)');
      if (firstError) {
        // try to focus the related input if possible
        const related = firstError.previousElementSibling;
        if (related && typeof related.focus === 'function') related.focus();
      }
    }
  });
});