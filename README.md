# CustomiseUI

A lightweight, themeable React component library with scoped theming support. Designed for fast prototyping and production-ready UI, with components that adapt to **light**, **dark**, or **custom** themes.

---

## Features

- **Themeable**: Scoped theme system with `light`, `dark`, and `custom` themes.  
- **Custom Colors**: Override theme colors dynamically with JS.  
- **Base Components**: Pre-styled components like Button, Card, Input, Checkbox, Radio, Select, Text, and Box.  
- **TailwindCSS Powered**: Fully compatible with Tailwind utilities.  
- **Scoped Styling**: Components can adopt the theme within a region without affecting global styles.  

---

## Installation

~~~bash
# Using npm
npm install customise-ui

# Using yarn
yarn add customise-ui

# Using pnpm
pnpm add customise-ui
~~~

---

## Usage

~~~tsx
import React from "react";
import { ThemeProvider, CUButton, CUCard, CUText, CUInput } from "customise-ui";

const App = () => {
  return (
    <ThemeProvider
      config={{
        initialTheme: "custom",
        customColors: { bg: "#1a1a1a", text: "#fff", primary: "#ff5722" },
      }}
    >
      <CUText size="xl" weight="bold">Themed Components</CUText>
      <CUCard>
        <CUInput label="Name" placeholder="Enter your name" />
        <CUButton>Submit</CUButton>
      </CUCard>
    </ThemeProvider>
  );
};

export default App;
~~~

---

## Components

| Component | Description |
|-----------|-------------|
| `CUButton` | Button element with theme-aware colors |
| `CUCard` | Card container with padding, shadow, and border |
| `CUInput` | Text input with label support |
| `CUCheckbox` | Checkbox with optional label |
| `CURadio` | Radio button with label |
| `CUSelect` | Select dropdown with label |
| `CUText` | Paragraph text with size and weight options |
| `CUBox` | Flexible div wrapper for layout and spacing |

---

## Theming

The library supports **scoped themes** using `ThemeProvider`:

- `initialTheme`: `"light" | "dark" | "custom"`  
- `customColors`: Object with `bg`, `text`, `primary` keys to override the default theme colors.

~~~tsx
<ThemeProvider
  config={{
    initialTheme: "custom",
    customColors: { bg: "#222", text: "#fff", primary: "#ff9800" },
  }}
>
  {/* Your themed components */}
</ThemeProvider>
~~~

Components inside the provider automatically inherit theme colors. Components outside the provider use **default colors** defined in CSS variables.

---

## Styling

- Based on **TailwindCSS** utility classes.  
- CSS variables control theme colors: `--color-bg`, `--color-text`, `--color-primary`.  
- You can override styles per component using `className`.

---

## Contributing

1. Fork the repo  
2. Run `npm install`  
3. Make changes in `src/components` or `src/context`  
4. Test using the playground in `src/playground`  
5. Build the library: `npm run build`  

---

## License

MIT © Mihir Bambhaniya
