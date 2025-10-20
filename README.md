Profile Card — Stage 0

This repository contains a small accessible, responsive Profile Card implemented with plain HTML, CSS and vanilla JavaScript.

Files
- index.html — the profile card HTML markup (semantic tags + data-testids required by tests)
- style.css — responsive and accessible styles used by the page
- script.js — updates the current time (milliseconds) 

Quick checklist of required data-testids (present in `index.html`)
- test-profile-card
- test-user-name
- test-user-bio
- test-user-time
- test-user-avatar
- test-user-social-links
- test-user-social-twitter
- test-user-social-linkedin
- test-user-social-github
- test-user-hobbies
- test-user-dislikes

How to run locally

- Double-click `index.html` in the file explorer to open in your default browser.
- Note: some browser features (like fetching remote images) are fine when opening the file directly.

Manual smoke checks
- Verify the time element (`data-testid="test-user-time"`) shows a numeric millisecond value and updates every second.
- Tab through the page and ensure focus outlines are visible for links and any interactive elements.
- Click each social link; they should open in a new tab and include `rel="noopener noreferrer"`.
- Resize the browser to narrow/mobile and wide/desktop widths and ensure the layout stacks and then moves avatar left / content right.

Notes
- No build step required — plain static files.
- If you'd like an automated test harness (Jest + jsdom or Playwright), tell me and I can add a minimal setup.

---
Generated: Oct 16, 2025

---
Stage 1 Addendum (Oct 20, 2025)

This project was extended to Stage 1 with two additional pages and validation behavior:

- `contact.html` — Contact form implementing client-side validation and accessible error/success feedback.
	- Required data-testids: `test-contact-name`, `test-contact-email`, `test-contact-subject`, `test-contact-message`, `test-contact-submit`, `test-contact-error-name`, `test-contact-error-email`, `test-contact-error-subject`, `test-contact-error-message`, and `test-contact-success`.
	- Validation rules (implemented in `script.js`): all fields required; email must match a basic name@example.com pattern; message must be at least 10 characters. On success the success confirmation is shown and the form resets.

- `about.html` — About page using semantic structure with `main data-testid="test-about-page"` and sections with `test-about-bio`, `test-about-goals`, `test-about-confidence`, `test-about-future-note`, and `test-about-extra`.

Accessibility highlights:
- Inputs use `<label for>` and `aria-describedby` to link errors.
- Error spans and the success message use `aria-live="polite"` and the success message has `role="status"` so screen readers announce changes.

Manual tests:
- Submit an empty contact form — inline errors should appear and focus should go to the first invalid field.
- Use `bob@` as email — email error should appear.
- Use a short message (<10 chars) — message error should appear.
- Fill everything correctly — the page shows "Sending..." then "Thank you! Your message has been sent." and the form resets.

