# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server on http://localhost:3000
npm run build        # Production build
npm run preview      # Preview production build
```

## Environment Setup

Set `GEMINI_API_KEY` in `.env.local` for API functionality.

## Architecture

This is a React 19 + TypeScript + Vite wholesale jewelry e-commerce storefront.

**Key files:**
- `App.tsx` - Main layout: Header, Hero, FilterBar, product grid, CustomDesignSection, Footer
- `types.ts` - TypeScript interfaces: `Product`, `NavLink`, `Category`
- `constants.ts` - Static data: `NAV_LINKS`, `CATEGORIES`, `PRODUCTS` arrays

**Component structure:**
- Components in `components/` are presentational React functional components
- `ProductCard` receives a `Product` prop and handles badge styling via `getBadgeStyle()`
- All components use Tailwind CSS with dark mode support (`dark:` variants)
- Material Symbols icons used throughout (via `material-symbols-outlined` class)

**Styling:**
- Tailwind CSS utility classes (no separate CSS files)
- Primary color: `text-primary`, `bg-primary` (gold/yellow theme)
- Responsive breakpoints: `sm:`, `md:`, `lg:` prefixes
- Max content width: 1440px (`max-w-[1440px]`)

**Path alias:** `@` maps to project root (configured in `vite.config.ts`)
