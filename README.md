<h1 align="center">Personal portfolio/blog</h1>

<p align="center">
    <a href="#installation">Installation</a>
    &nbsp; • &nbsp;
    <a href="#how-to-run-it">How to run it</a>
    &nbsp; • &nbsp;
    <a href="#license">License</a>
    &nbsp; • &nbsp;
    <a href="#tech-and-frameworks-used">Tech and frameworks used</a>
</p>

<p align="center">
  <img src="https://github.com/grdnmsz/portfolio/actions/workflows/checks.yml/badge.svg" alt="presubmit-checks" />
  <img src="https://img.shields.io/website-up-down-green-red/https/gordonmes.dev.svg?label=gordonmes.dev" alt="up-down-badge"/>
  <img src="https://img.shields.io/github/license/grdnmsz/portfolio" alt="license-badge">
  <img src="https://badges.depfu.com/badges/cd7c0211dda141c2ffb2658d1e9c5d9c/count.svg" alt="deps-badge" />
</p>

These are the sources for my personal blog/portfolio. I have been maintaining and expanding it for a while now as I am hoping it could give guidances to developpers as the same goals as me!

## Installation

1. Clone repo

```bash
git clone https://github.com/grdnmsz/portfolio.git
```

2. Install dependencies
   In the project folder :

```bash
npm i
```

### Run tests

Note : typescript files are not meant to be compiled in this project. Type-checking is fair enough for my use case.

1. Lint:

```bash
npm run lint
```

2. Type:

```bash
npm run type-check
```

3. Unit, integration:

```bash
npm run test
```

## How to run it

- Development mode:

```bash
npm start
```

- Local build:

```bash
npm run build
```

- Serve a local build:

```bash
npm run serve
```

## License

This project is under the [MIT license](https://github.com/grdnmsz/portfolio/blob/master/LICENSE).

## Tech and frameworks used

- [Gatsby](https://www.gatsbyjs.com/), an open source frontend framework for creating rich, optimized websites
- [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework made for building cool interfaces
- Hosted on [Vercel](https://vercel.com), an all-in-one static and jamstack deployment, with global CDN
