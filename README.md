# GuitarLA

GuitarLA is a Next.js app built with React and TypeScript. It renders a guitar catalog with a shopping cart and supports English/Spanish UI text.

## Project structure

- `app/`
  - `layout.tsx`: global HTML layout and app styles.
  - `page.tsx`: main entry page rendering the React app.
- `src/`
  - `App.tsx`: root client component and cart logic.
  - `App.css`: custom app styles.
  - `index.css`: global CSS styles.
  - `components/`: UI components.
  - `data/`: static guitar data.
  - `hooks/`: cart hook using `localStorage`.
  - `types/`: TypeScript type definitions.
- `public/`: static assets.
- `package.json`: dependencies and scripts.
- `tsconfig.json`: TypeScript configuration.
- `next-env.d.ts`: Next.js type declarations.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal, usually `http://localhost:3000` or `http://localhost:3001`.

## Build

```bash
npm run build
```

## Notes

- This project uses Next.js App Router.
- Legacy Vite files have been removed from the source tree.
- The app runs from `app/page.tsx`.
