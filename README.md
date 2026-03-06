# Brian Hoff – Portfolio

Personal portfolio site for **Brian Hoff**, Shopify / Shopify Plus developer. Hosted on GitHub Pages at [bhoff5.github.io](https://bhoff5.github.io).

## Contents

- **Summary** – Short professional summary
- **Portfolio** – Selected work (Graf Lantz, Feltory, Glob, bootcamp projects)
- **Core skills** – Shopify Plus, Liquid, JavaScript, jQuery, React, HTML5, CSS3
- **Additional skills** – SCSS, SEO, Tailwind, GSAP, and more
- **Contact** – Résumé download and email

## Tech

- Static HTML/CSS/JS
- [GSAP](https://greensock.com/gsap/) + ScrollTrigger for animations
- [Smooth Scrollbar](https://github.com/idiotWu/smooth-scrollbar), [Swiper](https://swiperjs.com/), [Lightgallery](https://sachinchoolur.github.io/lightGallery)
- Google Fonts (Poppins, Noto Serif JP, Roboto)
- **Design tokens** – `assets/css/design-tokens.css` defines the color palette, type scale, and font stack. Edit this file to change the overall look (e.g. `--color-text`, `--color-accent`, `--font-body`) without touching `theme.css`.
- **Design presets** – `assets/css/design-presets.css` adds theme presets (Warm, Forest, Rose, Minimal, Midnight). Use the floating “Theme” switcher (bottom-left) to try them; the choice is stored in `localStorage`. To ship without the switcher, remove the `#preset-switcher` div and its `<script>` from `index.html`.
- Scripts load with `defer` for better initial parse performance
- Canonical URL, Open Graph, Twitter cards, and JSON-LD Person schema for SEO and sharing
- Accessibility: skip link, focus-visible styles, `prefers-reduced-motion` (CSS and GSAP), descriptive alt text

GitHub Pages will serve `404.html` automatically for unknown URLs. `sitemap.xml` and `robots.txt` are included for crawlers.

## Run locally

Open `index.html` in a browser or use a simple static server, e.g.:

```bash
npx serve .
```

## License

Portfolio content and design © Brian Hoff.
