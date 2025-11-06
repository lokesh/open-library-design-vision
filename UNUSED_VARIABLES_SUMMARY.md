# CSS Variables Unused Outside /styles - Quick Summary

This is a condensed list of CSS variables from `primitives.css` and `semantic.css` that are **NOT** used outside the `/styles` folder.

## Quick Stats

- **Total Variables**: 240
- **Unused Outside /styles**: ~183 (76%)
- **Used Outside /styles**: ~57 (24%)
- **Undefined but Used**: 8 variables ⚠️

---

## PRIMITIVES.CSS - Unused Variables (~113 total)

### Colors (ALL 45 unused outside /styles)
```
All primitive colors are only used via semantic tokens:
--color-white, --color-black
--color-brand-primary, --color-brand-primary-hovered
--color-neutral-50 through --color-neutral-900 (10 variables)
--color-blue-50 through --color-blue-900 (10 variables)
--color-red-50 through --color-red-900 (10 variables)
```

### Typography (14 unused)
```
Font Families:
--font-family-sans
--font-family-serif
(--font-family-mono is USED)

Font Sizes:
--font-size-xs, --font-size-md, --font-size-lg
--font-size-xl, --font-size-2xl, --font-size-3xl
--font-size-4xl, --font-size-5xl
(--font-size-sm is USED)

Font Weights:
--font-weight-light, --font-weight-normal
--font-weight-bold, --font-weight-extrabold
(--font-weight-medium, --font-weight-semibold are USED)

Line Heights (ALL 5):
--line-height-extra-tight, --line-height-tight
--line-height-normal, --line-height-relaxed, --line-height-loose
```

### Spacing (3 unused)
```
--spacing-0, --spacing-16, --spacing-24, --spacing-32

USED: --spacing-1, --spacing-2, --spacing-3, --spacing-4,
      --spacing-6, --spacing-8, --spacing-12
```

### Border Radius (7 unused)
```
--radius-none, --radius-md, --radius-lg
--radius-xl, --radius-2xl, --radius-3xl, --radius-full

USED: --radius-sm
```

### Transitions & Animations (ALL 9 unused)
```
Durations: --duration-instant, --duration-fast, --duration-normal,
           --duration-slow, --duration-slower

Easings: --ease-linear, --ease-in, --ease-out,
         --ease-in-out, --ease-bounce
```

### Shadows (ALL 6 unused)
```
--shadow-0, --shadow-1, --shadow-2
--shadow-3, --shadow-4, --shadow-5
```

### Border Widths (ALL 4 unused)
```
--border-width-0, --border-width-1
--border-width-2, --border-width-3
```

### Opacity (ALL 4 unused)
```
--opacity-disabled, --opacity-overlay-weak
--opacity-overlay-medium, --opacity-overlay-strong
```

### Z-Index (ALL 6 unused)
```
--z-base, --z-dropdown, --z-sticky
--z-overlay, --z-modal, --z-toast
```

### Breakpoints & Containers (ALL 8 unused)
```
Breakpoints: --breakpoint-sm, --breakpoint-md,
             --breakpoint-lg, --breakpoint-xl

Containers: --container-sm, --container-md,
            --container-lg, --container-xl
```

### Icon Sizes (ALL 5 unused)
```
--icon-size-xs, --icon-size-sm, --icon-size-md
--icon-size-lg, --icon-size-xl
```

### Control Heights (ALL 3 unused)
```
--control-height-sm, --control-height-md, --control-height-lg
```

### Letter Spacing (ALL 3 unused)
```
--letter-spacing-tight, --letter-spacing-normal, --letter-spacing-wide
```

### Focus Ring Primitives (2 unused)
```
--focus-ring-width, --focus-ring-offset
```

---

## SEMANTIC.CSS - Unused Variables (~50 total)

### Surface System (4 unused)
```
Unused:
--color-surface (used only in index.css)
--color-surface-inverse
--color-scrim

Used outside /styles:
--color-surface-variant
--color-surface-tertiary
--color-surface-tertiary-hovered
```

### On-Surface Colors (4 unused)
```
Unused:
--color-on-surface-variant (used only in index.css)
--color-on-surface-tertiary
--color-on-surface-disabled
--color-on-surface-inverse

Used: --color-on-surface
```

### Primary System (4 unused)
```
Unused:
--color-on-primary
--color-primary-container
--color-on-primary-container
--color-primary-pressed
--color-primary-focused

Used: --color-primary, --color-primary-hovered
```

### Secondary System (5 unused)
```
Unused:
--color-on-secondary
--color-secondary-container
--color-on-secondary-container
--color-secondary-hovered
--color-secondary-pressed
--color-secondary-focused

Used: --color-secondary
```

### Error System (5 unused)
```
Unused:
--color-on-error
--color-error-container
--color-on-error-container
--color-error-hovered
--color-error-pressed

Used: --color-error
```

### Borders & Outlines (3 unused)
```
Unused:
--color-border-subtle
--color-border-strong
--color-outline-error

Used: --color-border-default, --color-outline-focus
```

### Links (ALL 3 unused outside /styles)
```
--color-link (used only in index.css)
--color-link-hovered (used only in index.css)
--color-link-visited (used only in index.css)
```

### Elevation (ALL 6 unused)
```
--elevation-none, --elevation-subtle, --elevation-low
--elevation-medium, --elevation-high, --elevation-highest
```

### Focus Ring (2 unused)
```
--focus-ring-color
--focus-ring (used via component tokens, not directly)
```

### Typography Semantic (9 unused)
```
Heading sizes (used in index.css only):
--font-h1-size, --font-h2-size, --font-h3-size
--font-h4-size, --font-h5-size, --font-h6-size

Body:
--font-body-weight
--font-body-line-height
--font-body-lg-size

Code (ALL):
--font-code-family, --font-code-size
```

### Spacing Semantic (1 unused)
```
Unused: --spacing-text-bottom

Used: --spacing-heading-bottom, --spacing-section
      --spacing-field, --spacing-component
      --spacing-element, --spacing-inline
```

### Radius Semantic (5 unused)
```
Unused:
--radius-container, --radius-overlay
--radius-badge, --radius-notification
--radius-avatar, --radius-image

Used: --radius-button, --radius-input, --radius-card
```

### Border Widths Semantic (1 unused)
```
Unused: --border-width-media (used only in index.css)

Used: --border-width-control
```

---

## COMPONENT TOKENS - Unused Variables (~20 total)

### Button Component (10 unused)
```
Unused:
--button-container, --button-on-container
--button-container-hovered, --button-container-pressed
--button-font-size, --button-font-weight
--button-border-width, --button-focus-ring
--button-sm-font-size
--button-lg-padding-x, --button-lg-padding-y, --button-lg-font-size

Used:
--button-padding-x, --button-padding-y
--button-sm-padding-x, --button-sm-padding-y
```

### Card Component (2 unused)
```
Unused:
--card-shadow, --card-shadow-hover

Used (ALL in ol-card.js):
--card-surface, --card-on-surface
--card-outline, --card-padding, --card-border-width
```

### Badge Component (ALL 4 unused)
```
--badge-padding-x, --badge-padding-y
--badge-font-size, --badge-font-weight
```

### Notification Component (ALL 5 unused)
```
--notification-surface, --notification-on-surface
--notification-padding, --notification-shadow
--notification-max-width
```

### Input Component (NONE unused!)
```
All 15 input component tokens are used in ol-input.js
```

### Heading Component (NONE unused!)
```
All 8 heading size tokens are used in ol-heading.js
```

---

## ⚠️ UNDEFINED VARIABLES BEING USED

These variables are referenced in code but **NOT defined** in primitives.css or semantic.css:

```
--color-text-primary (should be --color-on-surface)
--color-text-secondary (should be --color-on-surface-variant)
--color-text-link (should be --color-link)
--color-bg-secondary (should be --color-surface-variant)
--color-bg-hover (undefined)
--color-background-secondary (should be --color-surface-variant)
--color-border (should be --color-border-default)
--font-size-base (should be --font-size-md or --font-body-size)
```

**Used in**: ol-field.js, ol-heading.js, components.html, heading-demo.html, input-demo.html

---

## Recommendations

1. **Primitives are working as intended** - They're meant to be used via semantic tokens, not directly
2. **Consider removing unused component tokens** (badge, notification, card shadows, button containers)
3. **Fix undefined variables** - Replace with correct semantic tokens
4. **Consider removing** unused semantic tokens if not planning to use them soon:
   - Link colors (if links are styled via index.css only)
   - Container/badge/notification components (if not building these)
   - Secondary/primary "container" color systems (if not using this pattern)
   - Elevation tokens (if not using shadows via tokens)

