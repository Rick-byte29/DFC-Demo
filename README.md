# DFC Demo

## Open the website files

The complete website is in the [`dist` folder](./dist) on the **main** branch.

- [Website HTML](./dist/index.html)
- [Stylesheet](./dist/style.css)
- [Menu and enquiry JavaScript](./dist/app.js)
- [All four food images](./dist/assets)
- [Download the complete repository](https://github.com/Rick-byte29/DFC-Demo/archive/refs/heads/main.zip)

To run the site, download and extract the repository, then open `dist/index.html` in your browser, or use the local server command below. GitHub's file view displays source code, not the rendered website.

Responsive, long-form DFC restaurant website with menu categories and call/WhatsApp enquiry buttons. No cart or checkout.

## Run locally

From the repository directory:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. No package installation or build is required. Deploy the `dist` directory with any static website host.

## Files

- `dist/index.html` — page content
- `dist/style.css` — responsive layout and animations
- `dist/app.js` — menu items and enquiry links
- `dist/assets/` — bundled food imagery

Contact links currently use +91 9101035255. Menu details and images are illustrative. DFC is independent of KFC.

Fonts are loaded from Google Fonts. Food imagery is sourced from Pexels and Rawpixel.
