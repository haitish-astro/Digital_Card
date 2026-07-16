# Mobility Plus Digital Card

Official static digital business card for Mobility Plus.

## Project Structure

```text
/
  index.html
  css/
    styles.css
  js/
    config.js
    app.js
  assets/
    images/
      .gitkeep
    icons/
      .gitkeep
  .gitignore
  AGENTS.md
  PROJECT_PLAN.md
  README.md
```

All editable business and representative information belongs in `js/config.js`.
The current values are fictional placeholders and must be replaced with approved
public Mobility Plus information before launch.

## Local Preview

No install step, package manager, or build process is required.

Open `index.html` directly in a browser to preview the current static page.
For example, double-click the file from the project folder or use your browser's
File > Open option.

The site must remain compatible with GitHub Pages, so use relative paths such as
`css/styles.css` and `js/app.js`.

## Repository Workflow

This workspace is connected to:

```text
https://github.com/haitish-astro/mobility-plus-digital-card.git
```

The local `main` branch tracks `origin/main`. After future files are created or changed, publish them to GitHub with:

```text
git status
git add <changed-files>
git commit -m "Describe the change"
git push
```

Keep the site static and follow `AGENTS.md` for all project requirements.
