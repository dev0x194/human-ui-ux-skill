# React web example

Create a Vite React TypeScript scaffold with the current supported Vite/React versions, then replace its `src/App.tsx` and `src/App.css` with the two files here.

```sh
npm create vite@latest daymark-react -- --template react-ts
cd daymark-react
npm install
npm run dev
```

This example has functional task checkboxes and a local demo interest button. It deliberately does not pretend to submit to a backend. The CSS requests Google Fonts but has local fallbacks; self-host fonts where required by privacy/offline constraints. Works with no extra React component library.
