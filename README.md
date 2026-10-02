# Francesco Platania: game & level design portfolio

Static site built with [Astro](https://astro.build). No client framework: the only JavaScript is a small
lightbox and the autoplay for looping VFX clips.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`.

## Edit content

| What | Where |
| --- | --- |
| Projects (text, roles, contributions, links, media) | `src/data/projects.ts` |
| Intro, contacts, experience, education, skills | `src/data/site.ts` |
| Images (optimised to WebP at build time) | `src/assets/<project>/` |
| Videos + poster frames | `public/videos/<name>.mp4` and `<name>.jpg` |
| CV | `public/cv/Francesco_Platania_CV.pdf` |

The **Download CV** buttons only appear when the PDF exists at that exact path.

To add a project, add an entry to the `projects` array; its page is generated at `/projects/<slug>/`.
Set `featured: true` to show it in the top grid on the home page.

To add a video, compress it first (keeps the repo and page weight small):

```bash
ffmpeg -i input.mp4 -vf "scale='min(1280,iw)':-2" -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k public/videos/name.mp4
```

```bash
ffmpeg -ss 2 -i input.mp4 -frames:v 1 -q:v 4 public/videos/name.jpg
```

The raw, uncompressed media in `/assets` is git-ignored.

## Deploy

### GitHub Pages

1. Push this repo to GitHub with `main` as the default branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.

`.github/workflows/deploy.yml` builds and publishes on every push to `main`, and sets the site URL and
base path automatically (works for both `user.github.io` and `user.github.io/repo`).

### Netlify

Import the repo in Netlify. `netlify.toml` already sets the build command (`npm run build`) and the
publish directory (`dist`).
