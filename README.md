# Motion Provider — Next.js Starter

_Animate your React components in seconds not hours with Motion Provider_. This repository is a starter template for **Next.js projects** pre-wired with Motion Provider API's, it comes with end-to-end type safety for your animations.

---

## Why this starter?

This starter is built for engineers who want to ship delightful, high-performance motion experiences quickly:

- Minimal setup: opinionated defaults so you can prototype animations fast.
- TypeScript-first: safety and DX for complex motion logic.
- Tailwind CSS: utility-driven styling that pairs well with motion-based UI.
- Framer Motion-ready patterns: predictable, reusable motion primitives.

## Features

- Next.js (TypeScript)
- Tailwind CSS
- Example pages and components showcasing common motion patterns

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- Motion Provider

## Quick start

### Prerequisites

- Node.js >=20
- npm (or yarn/pnpm)

### Clone and install

> Caution: Motion Provider is under major development and only accessible via npm. Please consider that currently this repository may break at any time. Thank you for your patience!

```bash
# clone
git clone https://github.com/Motion-Provider/nextjs-starter.git
# or with SSH
git clone git@github.com:Motion-Provider/nextjs-starter.git
# or with CLI
gh repo clone Motion-Provider/nextjs-starter

cd nextjs-starter

# install
npm install
```

### Run the dev server

```bash
npm run dev
# Visit http://localhost:3000
```

### Build and preview

```bash
npm run build
npm run start
# or to preview the production build locally
npm run build && npm run start
```

### Deploy

This starter is compatible with common deployment platforms (Vercel, Netlify, Cloudflare Pages). For Vercel, just import the repository and use the default build command (`npm run build`) and publish directory.

## Usage & examples

> Check out official playground with interactive examples and documentation [motionprovider.dev](https://motionprovider.dev/) to see the real capabilities.

- [Official Repo](https://github.com/Motion-Provider/motion-provider)
- [Minimal Temporary API Docs](https://www.npmjs.com/package/motion-provider?activeTab=readme)

## Tests

This starter provides a place to add tests. Recommended tools:

- Jest + React Testing Library for unit testing components
- Playwright / Cypress for end-to-end tests

## Contributing

> Email me first! hello@burakdev.com

Contributions, issues, and feature requests are very welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "feat: add ..."`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

Please keep PRs focused and include screenshots or GIFs for visual changes.

## Troubleshooting

- If animations look janky, check for expensive renders or layout thrashing. Use React Profiler and the browser performance tab.

## License

This repository is distributed under the MIT License ©2025 — [Burak Bilen](https://burakdev.com).
