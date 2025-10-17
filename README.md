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
