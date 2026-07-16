# AGENTS.md

## Project Identity

This repository is the official Mobility Plus digital business card. Treat the public website as a static, read-only business card for visitors and as official company material controlled only through repository changes.

## Permanent Requirements

- Build a completely static website using only HTML, CSS, and vanilla JavaScript.
- Do not use React, Next.js, Node.js, npm, databases, backend servers, authentication, paid APIs, analytics, inquiry forms, customer accounts, or subscription services.
- The site must be hostable for free with GitHub Pages.
- Use relative asset paths that work from a GitHub Pages project URL, such as `https://OWNER.github.io/mobility-plus-digital-card/`.
- Keep all editable company and representative information in one clearly labeled configuration file.
- Public visitors may only view and interact with the card.
- Public visitors must never be able to edit official company information.
- Do not create an admin dashboard, edit mode, login page, or content-management system.
- Only people with write access to this GitHub repository may change official information.
- Visitors must be able to call, text, email, open the company website, save the contact, copy the card link, share the card, and display its QR code.
- The QR code must link to the permanent public webpage.
- Anyone who opens the card must be able to display the same QR code and share it with another person.
- The QR code must not expire.
- Generate a valid downloadable vCard that works with iPhone and Android.
- Do not collect or store customer information.
- Do not expose passwords, GitHub tokens, API keys, personal home addresses, or private information.
- Keep the website mobile-first, accessible, professional, secure, and fast.
- Minimize dependencies.
- Do not use externally hosted QR-code generation APIs.
- Update `README.md` whenever setup, configuration, or deployment behavior changes.
- Run appropriate checks after every significant implementation task.
- Clearly identify placeholder information.

## Forbidden Implementation Choices

Do not add package managers, build tools, server runtimes, serverless functions, external tracking scripts, hosted form services, account systems, or editable public state. Avoid adding any dependency unless it is absolutely necessary for a static browser feature and can be committed locally with its license.

QR generation must happen locally in the browser or from committed static assets. Never call a remote QR-code service at runtime.

## Configuration Rule

All official editable information must live in one clearly labeled configuration file, for example `assets/js/card-config.js`. That file should contain company and representative details, public contact methods, the permanent card URL, vCard fields, QR target, visible labels, and any explicitly marked placeholder values.

Implementation files may read from this configuration file, but they must not duplicate official company or representative details elsewhere unless there is a strong technical reason and the duplication is documented.

## Proposed Static Structure

Use this structure unless there is a clear reason to adjust it:

```text
/
  index.html
  README.md
  AGENTS.md
  assets/
    css/
      styles.css
    js/
      card-config.js
      app.js
      qr.js
    img/
      logo-placeholder.svg
      representative-placeholder.jpg
    downloads/
      .gitkeep
```

Expected roles:

- `index.html`: semantic, accessible, mobile-first page shell.
- `assets/css/styles.css`: all project styling.
- `assets/js/card-config.js`: the single editable source for official card data.
- `assets/js/app.js`: card rendering, actions, vCard generation, copy/share behavior, and UI interactions.
- `assets/js/qr.js`: local QR-code generation only, with no external API calls.
- `assets/img/`: committed images and clearly labeled placeholders.
- `assets/downloads/`: optional static downloadable assets if needed.

All references between these files must use relative paths such as `assets/css/styles.css`, not root-relative paths such as `/assets/css/styles.css`.

## Visitor Features

The finished card must support these public actions without collecting visitor data:

- Tap to call.
- Tap to text.
- Tap to email.
- Open the company website.
- Save contact through a generated `.vcf` vCard download.
- Copy the permanent card link.
- Share the permanent card link through the Web Share API when available, with a clipboard fallback.
- Display a non-expiring QR code for the permanent public webpage.

The vCard should be generated from the configuration file and should include only approved public business information.

## Accessibility, Privacy, and Security

- Use semantic HTML and meaningful button/link labels.
- Ensure keyboard access for every interactive control.
- Preserve visible focus states.
- Keep color contrast accessible.
- Avoid storing data in cookies, local storage, session storage, or remote services unless a future requirement explicitly allows it.
- Avoid logging personal or sensitive information.
- Do not commit secrets, tokens, credentials, private addresses, or private customer information.

## Placeholder Policy

If required business details are unknown, use clearly labeled placeholder values. Placeholder text, filenames, and comments should make it obvious what still needs official replacement before launch.

Never present guessed business information as official.

## README Expectations

Update `README.md` whenever changes affect setup, configuration, deployment, editing official card data, GitHub Pages behavior, or manual verification steps. Keep README instructions compatible with a no-build, static GitHub Pages workflow.

## Checks After Significant Work

After significant implementation work, run checks appropriate to the change. At minimum, verify:

- The site can be opened as static files without a build step.
- Relative asset paths work for a GitHub Pages project URL.
- No forbidden frameworks, package files, backend code, analytics, forms, or auth flows were introduced.
- Public information comes from the single configuration file.
- Placeholder values are clearly identified.
- Call, text, email, website, copy, share, QR, and vCard behaviors still work.
- The vCard imports correctly on iPhone and Android expectations.
- The QR code points to the permanent public webpage and does not depend on an expiring service.
- The page remains mobile-first, accessible by keyboard, professional, secure, and fast.

Document any checks that could not be run.

## Current Instruction

Do not build the website until explicitly asked. This file may be created before implementation begins, but no site files should be added solely because this file exists.
