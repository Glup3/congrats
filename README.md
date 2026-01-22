# Congrats

A simple digital congratulations cards app powered by [Astro](https://astro.build) and [PocketBase](https://pocketbase.io).

## Tech Stack

- **Astro** - Static site generator and web framework
- **PocketBase** - Backend with database, auth, and file storage
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Content collections
│   ├── pages/          # Astro pages (routes)
│   └── styles/         # Global styles
├── public/             # Static assets
├── astro.config.mjs    # Astro configuration
└── package.json
```

## Environment Variables

Copy `.env.example` to `.env` and configure the secrets.
Follow [Docs: https://pocketbase.io/docs/authentication/#api-keys] to get the token.

## Learn More

- [Astro Docs](https://docs.astro.build)
- [PocketBase Docs](https://pocketbase.io/docs/)
