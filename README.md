# Ryan Basque Portfolio

A modern Next.js portfolio website built with TypeScript, styled-components, and atomic design principles.

## 🚀 Features

- **TypeScript**: Full type safety across the entire application
- **Next.js 13+**: App Router with server-side rendering
- **Styled Components**: CSS-in-JS styling with dynamic theming
- **Atomic Design**: Organized component architecture (Atoms, Molecules, Organisms)
- **Responsive Design**: Mobile-first approach with flexible layouts

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about-me/          # About Me page
│   │   ├── page.tsx
│   │   └── styles.ts
│   ├── layout.tsx
│   ├── page.tsx           # Home page
│   └── styles.ts
├── components/
│   ├── atoms/             # Basic building blocks
│   │   ├── Button/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Heading/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── Text/
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── molecules/         # Component combinations
│   │   └── Card/
│   │       ├── index.tsx
│   │       └── styles.ts
│   └── index.ts          # Component exports
```

## 🧪 Atomic Design Methodology

### Atoms
Basic building blocks that can't be broken down further:
- **Button**: Interactive element with variants (primary, secondary, outline)
- **Heading**: Typography component with different levels (h1-h6)
- **Text**: Text component with variants (body, caption, subtitle)

### Molecules
Groups of atoms bonded together:
- **Card**: Container component combining Heading, Text, and Button

## 🎨 Styling

The project uses styled-components for styling with:
- Dynamic props for variant-based styling
- Consistent design tokens
- Responsive design patterns
- TypeScript integration

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
