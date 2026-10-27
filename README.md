# Karan Rajput | Portfolio

A responsive, single-page developer portfolio built with plain HTML, CSS, and JavaScript. No frameworks or build tools required.

**Live site:** _add your GitHub Pages link here after deploying_

## Features
- Terminal-style hero with a typewriter role animation
- Animated tech-grid background and cursor spotlight
- Light and dark theme toggle (remembered per visit)
- Responsive layout with a mobile navigation menu
- Scroll reveal animations that respect reduced-motion settings
- Accessible focus states and semantic sections

## Project structure
```
karan-rajput-portfolio/
├── index.html        # Page structure and content
├── css/
│   └── style.css     # Styles, theme tokens, and layout
├── js/
│   └── main.js       # Typewriter, theme toggle, menu, and animations
├── assets/           # Images or a resume PDF, once verified
├── .gitignore
└── README.md
```

## Customising
- **Colours:** edit the variables at the top of `css/style.css` (`--blue`, `--bg`, etc.).
- **Content:** edit `index.html`. Items marked with the dashed `placeholder` style should be replaced with verified details, then the placeholder class can be removed.
- **Typing phrases:** edit the `roles` array in `js/main.js`.

## Run locally
Open `index.html` in a browser, or run a simple local server:
```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000.

## Deploy on GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Choose the `main` branch and the `/ (root)` folder, then save.
5. After a minute or two, the site appears at `https://<your-username>.github.io/<repository-name>/`.

## Contact
- Email: karanrajput.connect@gmail.com
- LinkedIn: https://linkedin.com/in/karanrajput08
- GitHub: https://github.com/Karanrajput0803
