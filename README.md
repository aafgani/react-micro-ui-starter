# React + TypeScript + Vite

This is a starter project using **React**, **Vite**, and **TypeScript**, developed inside a **VS Code Devcontainer**.  
The devcontainer ensures a reproducible Node.js environment with all dependencies isolated.

---

## 🚀 Project Description

This project is a playground to learn React with TypeScript.  
It uses [Vite](https://vitejs.dev/) as the build tool for a fast and modern development experience.

---

## 🧱 Tech Stack

- [React](https://react.dev/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – static typing
- [Vite](https://vitejs.dev/) – lightning-fast dev server & bundler
- [ESLint](https://eslint.org/) – linting and code quality
- [DevContainers](https://containers.dev/) – reproducible dev environments

---

## 📁 Project Structure

```
├── .devcontainer/ # VS Code DevContainer config
├── src/
│ ├── api/ # API clients
│ ├── components/ # Reusable UI components
│ ├── models/ # Shared TypeScript types/interfaces
│ ├── App.tsx # Main app
│ ├── main.tsx # Entry point
│ └── index.css # Global styles
├── .eslintrc.json # ESLint config
├── tsconfig.json # TypeScript config
├── vite.config.ts # Vite config
└── package.json
```

## 🚀 **Getting Started**

## 🐳 Get the App Running on Docker

You can run the app either by building and running the image individually, or by using Docker Compose to spin up the entire stack.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/react-micro-ui-starter.git
cd react-micro-ui-starter
```

### 2. Open in VS Code with Dev Containers

- VS Code
- Dev Container Extension
- Docker

Then just “Reopen in Container” in VS Code.

### 3. Start the Dev Server

```
npm install
npm run dev
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
