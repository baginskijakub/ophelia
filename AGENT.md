# Ophelia - Agent Guide

## Build/Lint/Test Commands
- `npm run dev` - Start all apps in dev mode with hot reload
- `npm run build` - Build all packages and apps
- `npm run lint` - Lint all packages with ESLint
- `npm run check-types` - Type check all packages
- `npm run format` - Format code with Prettier
- Database: `cd packages/db && npm run db:generate` for Drizzle migrations

## Architecture
Turborepo monorepo with 4 apps (platform, docs, apply, waitlist) and 6 packages (db, ui, types, eslint-config, typescript-config, utils). Platform app runs on port 3003. Database uses Drizzle ORM with PostgreSQL/Supabase. UI package provides shared React components with CSS modules.

## Code Style
- **Imports**: Named imports for React, @ophelia/ namespace for internal packages
- **Components**: PascalCase names, lowercase-hyphen files (button.tsx), Props interfaces
- **TypeScript**: Strict types, discriminated unions, HTML attribute extensions
- **Error Handling**: Custom tryCatch utility returning Result<T, E>, context validation
- **Formatting**: Prettier for TS/TSX/MD files, ESLint with only-warn plugin
- **Database**: Drizzle schema with snake_case columns, camelCase in TypeScript

No testing framework configured. Use TypeScript 5.8.2, React 19, Next.js 15.3.2.
