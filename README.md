# lean

Personal GitHub Pages site for lean.

The site is a minimal developer portfolio featuring lean's work on web products,
native iPhone apps, and open-source infrastructure tools. It uses a restrained
monochrome system, compact editorial typography, clear project rows, subtle
motion, and an accessible light/dark theme.

## Projects

- [buffer.lol](https://buffer.lol) — browser-based network diagnostics and developer tools
- [7331.cloud](https://7331.cloud) — anonymous image hosting with short retention and a companion [Go CLI](https://github.com/1337lean/7331-cli)
- [Envguard](https://github.com/1337lean/envguard) — dependency-free dotenv contract validation without secret exposure
- [Certpulse](https://github.com/1337lean/certpulse) — batch TLS certificate, protocol, and OCSP checks
- [Relaybox](https://github.com/1337lean/relaybox) — durable webhook capture, verification, forwarding, and inspection
- [Gatehouse](https://github.com/1337lean/gatehouse) — release-bundle policy checks for CI and deployment boundaries
- [IP Lens](https://buffer.lol/ip-lens) — a privacy-focused native iPhone toolkit for IP intelligence
- [Neon Tether](https://github.com/1337lean/neon-tether) — a one-thumb orbital score-chaser for iPhone
- [Kevin](https://github.com/1337lean/kevin) — a modular Discord bot with a Telegram AI companion

Live site: <https://1337lean.github.io>

## Stack

- HTML
- CSS
- JavaScript
- GitHub Pages
- Responsive, accessible product previews

## Local Development

Open `index.html` directly in a browser, or run a small static server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Files

```text
index.html        Page structure and content
styles.css        Minimal responsive visual system and restrained motion
script.js         Theme preference, progressive reveals, and header behavior
assets/           Optimized imagery for projects with app icons
README.md         Project notes
```

## Deployment

This repository is published with GitHub Pages from the `main` branch root.
