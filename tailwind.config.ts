// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // VS Code Dark+ Theme
        'vscode-bg': 'rgb(30, 30, 30)',        // #1e1e1e
        'vscode-fg': 'rgb(212, 212, 212)',     // #d4d4d4
        'vscode-sidebar': 'rgb(37, 37, 38)',   // #252526
        'vscode-editor': 'rgb(60, 60, 60)',    // #3c3c3c
        'vscode-blue': 'rgb(0, 122, 204)',     // #007acc
        'vscode-gold': 'rgb(255, 193, 7)',     // #ffc107 (gold accent)
      },
    },
  },
  plugins: [],
};