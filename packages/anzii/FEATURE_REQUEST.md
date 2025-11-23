# Feature Request

## Summary

Add dark mode support to the web dashboard.

## Motivation

Many users work late at night and find the bright interface harsh on the eyes. Dark mode improves usability and accessibility, and it’s a standard feature in similar tools.

## Proposed Solution

Introduce a toggle in the user settings to switch between light and dark themes. Use CSS variables for colors so the theme can be switched dynamically without reloading the page. Example:

```css
:root {
  --background-color: #ffffff;
  --text-color: #000000;
}

[data-theme="dark"] {
  --background-color: #1e1e1e;
  --text-color: #f5f5f5;
}
```
