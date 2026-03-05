# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hush is a marketing/landing page website for an Android notification management app. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build
- `npm run lint` — Lint with Biome (`biome check`)
- `npm run format` — Format with Biome (`biome format --write`)

No test framework is configured.

## Architecture

- **Framework:** Next.js App Router (`src/app/`)
- **Styling:** Tailwind CSS v4 with CSS variables defined in `src/app/globals.css` (light theme only)
- **Linting/Formatting:** Biome (not ESLint/Prettier) — config in `biome.json`
- **Animations:** motion-provider library
- **Path alias:** `@/*` maps to `./src/*`

## Key Structure

- `src/app/page.tsx` — Home page composing Navbar, Background, Announcement, Hero, PhoneMockup, Footer
- `src/app/privacy/page.tsx` — Privacy policy page
- `src/app/layout.tsx` — Root layout with Inter font, global metadata
- `src/components/` — All UI components (no nested directories)
- `src/constants/` — Static data (`features.ts`, `nav-links.ts`)

## Style Conventions

- Biome formatter: 2-space indent, space style
- Tailwind v4 theme uses `@theme inline` directive with CSS custom properties
- Color tokens: `--background`, `--foreground`, `--accent`, `--accent-light`, `--surface`, `--muted`
