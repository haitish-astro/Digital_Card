# Mobility Plus Digital Card

Static, mobile-first digital business card for Mobility Plus. The site uses only
HTML, CSS, and vanilla JavaScript and is intended for GitHub Pages.

## Edit Card Information

Edit `js/config.js` only. Replace placeholder values for the representative,
company, phone, email, website, address, services, `publicUrl`, logo, and
photo. Public visitors cannot edit this information from the website.

The `publicUrl` value is the exact permanent GitHub Pages URL used by the QR
code, Copy Link, and Share Card features. Keep it free of tracking parameters
and temporary session links.

The QR code is generated locally in the browser by `js/app.js`. No external
QR-code API, paid service, backend, or QR-code library is used.

The Add to Home Screen button keeps the site static. iPhone Safari does not let
websites trigger Add to Home Screen directly, so the button shows the required
manual steps. Android browsers may show a native install prompt when available;
otherwise the same button shows manual shortcut instructions.

Home-screen icons are committed under `assets/icons/`, and the static
`site.webmanifest` uses relative paths. There is no service worker or offline
cache layer.

## Preview Locally

Open `index.html` directly in a browser, or run a simple static server from the
repository root:

```text
python -m http.server 4175 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4175/`.

## Publish With GitHub Pages

1. Commit and push changes to `main`.
2. In GitHub, open the repository settings.
3. Go to Pages.
4. Set Source to `Deploy from a branch`.
5. Select branch `main` and folder `/root`.
6. Save and wait for GitHub Pages to publish.

Expected public URL:

```text
https://haitish-astro.github.io/Digital_Card/
```
