# GuitarLA Project Architecture

## 1. Overview
This project is a guitar store built with Next.js, React, and TypeScript. It uses the Next.js App Router and a client component to handle cart state in the browser.

## 2. Full Folder Structure
- `app/`
  - `layout.tsx`: global layout, imports styles, and defines the HTML wrapper.
  - `page.tsx`: main page that renders the `App` component.
- `public/`
  - `img/`: static images used by the store, including `logo.svg`, product images, cart icon, and header image.
  - `index.html`: static HTML file visible in the project tree for reference.
- `src/`
  - `App.tsx`: root application component that uses the shopping cart hook.
  - `index.css`: global CSS styles and Bootstrap variable overrides.
  - `components/`
    - `Header.tsx`: header component, logo, and dropdown cart display.
    - `Guitar.tsx`: product card component for each guitar.
  - `data/`
    - `db.ts`: static guitar data used by the app.
  - `hooks/`
    - `useCart.ts`: cart state hook, including persistence to `localStorage`.
  - `types/`
    - `index.ts`: TypeScript type definitions for `Guitar` and `CartItem`.
- Root files:
  - `ARCHITECTURE.md`: this architecture document.
  - `package.json`: project dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration for Next.js.
  - `next-env.d.ts`: Next.js type declarations.
  - `README.md`: project documentation.

## 3. Design decisions
- Next.js is used for a modern React application structure and routing.
- The root `App` component is a client component (`"use client"`) because it uses React hooks and browser-only APIs like `localStorage`.
- Bootstrap CSS is imported in `app/layout.tsx` for quick global styling.
- The cart is maintained in local component state and stored in `localStorage` with `useEffect`.
- Static product data is kept in `src/data/db.ts` so the app can render without an external API.

## 4. Running the project
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app in the browser:
   ```
   http://localhost:3001
   ```

> Note: If port `3000` is already in use, Next.js may start on another port such as `3001`.

## 5. Building for production
```bash
npm run build
```

## 6. Important notes
- The app no longer serves from `index.html`; it runs from `app/page.tsx` using Next.js.
- The `index.html` file now redirects to the running development server URL.
- If the browser appears blank, verify that the Next.js server is running and that you are using the correct port (`localhost:3001` or the port shown in the terminal).
