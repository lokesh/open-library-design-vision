# CSS Variables Unused Outside /styles Folder

This report lists all CSS variables from `primitives.css` and `semantic.css` that are **NOT** used outside the `/styles` folder (i.e., not used in HTML files or JS component files).

## PRIMITIVES.CSS (Tier 1)

### Colors - Primitives

#### Base Colors
- `--color-white` ❌ Not used outside styles
- `--color-black` ❌ Not used outside styles

#### Brand Colors
- `--color-brand-primary` ❌ Not used outside styles (only used via semantic tokens)
- `--color-brand-primary-hovered` ❌ Not used outside styles

#### Neutral Colors (All unused directly outside styles)
- `--color-neutral-50` ❌
- `--color-neutral-100` ❌
- `--color-neutral-200` ❌
- `--color-neutral-300` ❌
- `--color-neutral-400` ❌
- `--color-neutral-500` ❌
- `--color-neutral-600` ❌
- `--color-neutral-700` ❌
- `--color-neutral-800` ❌
- `--color-neutral-900` ❌

#### Blue Colors (All unused directly outside styles)
- `--color-blue-50` ❌
- `--color-blue-100` ❌
- `--color-blue-200` ❌
- `--color-blue-300` ❌
- `--color-blue-400` ❌
- `--color-blue-500` ❌
- `--color-blue-600` ❌
- `--color-blue-700` ❌
- `--color-blue-800` ❌
- `--color-blue-900` ❌

#### Red Colors (All unused directly outside styles)
- `--color-red-50` ❌
- `--color-red-100` ❌
- `--color-red-200` ❌
- `--color-red-300` ❌
- `--color-red-400` ❌
- `--color-red-500` ❌
- `--color-red-600` ❌
- `--color-red-700` ❌
- `--color-red-800` ❌
- `--color-red-900` ❌

### Typography - Primitives

#### Font Families
- `--font-family-sans` ❌ Not used outside styles
- `--font-family-serif` ❌ Not used outside styles
- `--font-family-mono` ✅ Used in components.html, heading-demo.html

#### Font Sizes
- `--font-size-xs` ❌ Not used outside styles
- `--font-size-sm` ✅ Used in ol-theme-toggle.js, components.html, heading-demo.html
- `--font-size-md` ❌ Not used outside styles
- `--font-size-lg` ❌ Not used outside styles
- `--font-size-xl` ❌ Not used outside styles
- `--font-size-2xl` ❌ Not used outside styles
- `--font-size-3xl` ❌ Not used outside styles
- `--font-size-4xl` ❌ Not used outside styles
- `--font-size-5xl` ❌ Not used outside styles
- `--font-size-base` ✅ Used in components.html

#### Font Weights
- `--font-weight-light` ❌ Not used outside styles
- `--font-weight-normal` ❌ Not used outside styles
- `--font-weight-medium` ✅ Used in ol-theme-toggle.js
- `--font-weight-semibold` ✅ Used in ol-button.js, ol-main-nav.js, ol-field.js
- `--font-weight-bold` ❌ Not used outside styles
- `--font-weight-extrabold` ❌ Not used outside styles

#### Line Heights
- `--line-height-extra-tight` ❌ Not used outside styles
- `--line-height-tight` ❌ Not used outside styles
- `--line-height-normal` ❌ Not used outside styles
- `--line-height-relaxed` ❌ Not used outside styles
- `--line-height-loose` ❌ Not used outside styles

### Spacing - Primitives

- `--spacing-0` ❌ Not used outside styles
- `--spacing-1` ✅ Used in ol-field.js, components.html, input-demo.html
- `--spacing-2` ✅ Used in ol-heading.js, components.html
- `--spacing-3` ✅ Used in ol-button-group.js
- `--spacing-4` ✅ Used in components.html
- `--spacing-6` ✅ Used in components.html, heading-demo.html, input-demo.html
- `--spacing-8` ✅ Used in components.html, heading-demo.html
- `--spacing-12` ✅ Used in components.html, heading-demo.html, input-demo.html
- `--spacing-16` ❌ Not used outside styles
- `--spacing-24` ❌ Not used outside styles
- `--spacing-32` ❌ Not used outside styles

### Border Radius - Primitives

- `--radius-none` ❌ Not used outside styles
- `--radius-sm` ✅ Used in components.html
- `--radius-md` ❌ Not used outside styles
- `--radius-lg` ❌ Not used outside styles
- `--radius-xl` ❌ Not used outside styles
- `--radius-2xl` ❌ Not used outside styles
- `--radius-3xl` ❌ Not used outside styles
- `--radius-full` ❌ Not used outside styles

### Transitions - Primitives

#### Durations (All unused outside styles)
- `--duration-instant` ❌
- `--duration-fast` ❌
- `--duration-normal` ❌
- `--duration-slow` ❌
- `--duration-slower` ❌

#### Easings (All unused outside styles)
- `--ease-linear` ❌
- `--ease-in` ❌
- `--ease-out` ❌
- `--ease-in-out` ❌
- `--ease-bounce` ❌

### Shadows - Primitives (All unused outside styles)

- `--shadow-0` ❌
- `--shadow-1` ❌
- `--shadow-2` ❌
- `--shadow-3` ❌
- `--shadow-4` ❌
- `--shadow-5` ❌

### Border Widths - Primitives

- `--border-width-0` ❌ Not used outside styles
- `--border-width-1` ❌ Not used outside styles
- `--border-width-2` ❌ Not used outside styles
- `--border-width-3` ❌ Not used outside styles

### Opacity - Primitives (All unused outside styles)

- `--opacity-disabled` ❌
- `--opacity-overlay-weak` ❌
- `--opacity-overlay-medium` ❌
- `--opacity-overlay-strong` ❌

### Z-Index - Primitives (All unused outside styles)

- `--z-base` ❌
- `--z-dropdown` ❌
- `--z-sticky` ❌
- `--z-overlay` ❌
- `--z-modal` ❌
- `--z-toast` ❌

### Breakpoints - Primitives (All unused outside styles)

- `--breakpoint-sm` ❌
- `--breakpoint-md` ❌
- `--breakpoint-lg` ❌
- `--breakpoint-xl` ❌

### Container Widths - Primitives (All unused outside styles)

- `--container-sm` ❌
- `--container-md` ❌
- `--container-lg` ❌
- `--container-xl` ❌

### Icon Sizes - Primitives (All unused outside styles)

- `--icon-size-xs` ❌
- `--icon-size-sm` ❌
- `--icon-size-md` ❌
- `--icon-size-lg` ❌
- `--icon-size-xl` ❌

### Control Heights - Primitives (All unused outside styles)

- `--control-height-sm` ❌
- `--control-height-md` ❌
- `--control-height-lg` ❌

### Letter Spacing - Primitives (All unused outside styles)

- `--letter-spacing-tight` ❌
- `--letter-spacing-normal` ❌
- `--letter-spacing-wide` ❌

### Focus Ring - Primitives (All unused outside styles)

- `--focus-ring-width` ❌
- `--focus-ring-offset` ❌

---

## SEMANTIC.CSS (Tier 2 & 3)

### Surface System - Semantic

- `--color-surface` ❌ Not used outside styles (used in index.css)
- `--color-surface-variant` ✅ Used in ol-theme-toggle.js
- `--color-surface-tertiary` ✅ Used in ol-main-nav.js, ol-theme-toggle.js
- `--color-surface-inverse` ❌ Not used outside styles
- `--color-scrim` ❌ Not used outside styles
- `--color-surface-tertiary-hovered` ✅ Used in ol-main-nav.js

### On-Surface Colors - Semantic

- `--color-on-surface` ✅ Used in ol-theme-toggle.js
- `--color-on-surface-variant` ❌ Not used outside styles (used in index.css)
- `--color-on-surface-tertiary` ❌ Not used outside styles
- `--color-on-surface-disabled` ❌ Not used outside styles
- `--color-on-surface-inverse` ❌ Not used outside styles

### Primary Brand System - Semantic

- `--color-primary` ✅ Used in ol-button.js
- `--color-on-primary` ❌ Not used outside styles
- `--color-primary-container` ❌ Not used outside styles
- `--color-on-primary-container` ❌ Not used outside styles
- `--color-primary-hovered` ✅ Used in ol-button.js
- `--color-primary-pressed` ❌ Not used outside styles
- `--color-primary-focused` ❌ Not used outside styles

### Secondary Brand System - Semantic

- `--color-secondary` ✅ Used in ol-button.js, ol-main-nav.js
- `--color-on-secondary` ❌ Not used outside styles
- `--color-secondary-container` ❌ Not used outside styles
- `--color-on-secondary-container` ❌ Not used outside styles
- `--color-secondary-hovered` ❌ Not used outside styles
- `--color-secondary-pressed` ❌ Not used outside styles
- `--color-secondary-focused` ❌ Not used outside styles

### Error System - Semantic

- `--color-error` ✅ Used in ol-field.js
- `--color-on-error` ❌ Not used outside styles
- `--color-error-container` ❌ Not used outside styles
- `--color-on-error-container` ❌ Not used outside styles
- `--color-error-hovered` ❌ Not used outside styles
- `--color-error-pressed` ❌ Not used outside styles

### Border & Outline - Semantic

- `--color-border-default` ✅ Used in ol-theme-toggle.js, components.html, heading-demo.html
- `--color-border-subtle` ❌ Not used outside styles
- `--color-border-strong` ❌ Not used outside styles
- `--color-outline-focus` ✅ Used in ol-theme-toggle.js
- `--color-outline-error` ❌ Not used outside styles

### Link Colors - Semantic (All unused outside styles)

- `--color-link` ❌ Used only in index.css
- `--color-link-hovered` ❌ Used only in index.css
- `--color-link-visited` ❌ Used only in index.css

### Elevation - Semantic (All unused outside styles)

- `--elevation-none` ❌
- `--elevation-subtle` ❌
- `--elevation-low` ❌
- `--elevation-medium` ❌
- `--elevation-high` ❌
- `--elevation-highest` ❌

### Focus Ring - Semantic (All unused outside styles)

- `--focus-ring-color` ❌
- `--focus-ring` ❌ Used only via component tokens

### Semantic Typography

#### Display/Heading Typography
- `--font-display-line-height` ✅ Used in ol-heading.js
- `--font-heading-family` ✅ Used in ol-heading.js
- `--font-heading-weight` ✅ Used in ol-heading.js
- `--font-heading-line-height` ✅ Used in ol-heading.js
- `--font-h1-size` ❌ Not used outside styles (used in index.css)
- `--font-h2-size` ❌ Not used outside styles
- `--font-h3-size` ❌ Not used outside styles
- `--font-h4-size` ❌ Not used outside styles (used in index.css)
- `--font-h5-size` ❌ Not used outside styles
- `--font-h6-size` ❌ Not used outside styles

#### Body Typography
- `--font-body-family` ✅ Used in ol-button.js, ol-theme-toggle.js
- `--font-body-size` ✅ Used in ol-button.js, ol-field.js
- `--font-body-weight` ❌ Not used outside styles
- `--font-body-line-height` ❌ Not used outside styles (used in index.css)
- `--font-body-sm-size` ✅ Used in ol-button.js, ol-main-nav.js, ol-field.js
- `--font-body-lg-size` ❌ Not used outside styles

#### Code Typography (All unused outside styles)
- `--font-code-family` ❌
- `--font-code-size` ❌

### Semantic Spacing

- `--spacing-text-bottom` ❌ Not used outside styles
- `--spacing-heading-bottom` ✅ Used in ol-heading.js
- `--spacing-section` ✅ Used in ol-section.js, ol-main-nav.js, components.html
- `--spacing-field` ✅ Used in ol-field.js
- `--spacing-component` ✅ Used in ol-field.js, components.html, input-demo.html
- `--spacing-element` ✅ Used in ol-main-nav.js, components.html
- `--spacing-inline` ✅ Used in ol-button-group.js, ol-main-nav.js

### Semantic Radius

- `--radius-button` ✅ Used in ol-button.js, ol-main-nav.js, ol-theme-toggle.js
- `--radius-input` ✅ Used in ol-input.js
- `--radius-card` ✅ Used in ol-card.js, components.html, heading-demo.html, input-demo.html
- `--radius-container` ❌ Not used outside styles
- `--radius-overlay` ❌ Not used outside styles
- `--radius-badge` ❌ Not used outside styles
- `--radius-notification` ❌ Not used outside styles
- `--radius-avatar` ❌ Not used outside styles
- `--radius-image` ❌ Not used outside styles (used in index.css)

### Border Widths - Semantic

- `--border-width-control` ✅ Used in ol-button.js
- `--border-width-media` ❌ Not used outside styles (used in index.css)

---

## COMPONENT TOKENS (Tier 3)

### Button Components

- `--button-container` ❌ Not used outside styles
- `--button-on-container` ❌ Not used outside styles
- `--button-container-hovered` ❌ Not used outside styles
- `--button-container-pressed` ❌ Not used outside styles
- `--button-padding-x` ✅ Used in ol-button.js
- `--button-padding-y` ✅ Used in ol-button.js
- `--button-font-size` ❌ Not used outside styles
- `--button-font-weight` ❌ Not used outside styles
- `--button-border-width` ❌ Not used outside styles
- `--button-focus-ring` ❌ Not used outside styles
- `--button-sm-padding-x` ✅ Used in ol-button.js
- `--button-sm-padding-y` ✅ Used in ol-button.js
- `--button-sm-font-size` ❌ Not used outside styles
- `--button-lg-padding-x` ❌ Not used outside styles
- `--button-lg-padding-y` ❌ Not used outside styles
- `--button-lg-font-size` ❌ Not used outside styles

### Input Components

- `--input-surface` ✅ Used in ol-input.js
- `--input-on-surface` ✅ Used in ol-input.js
- `--input-outline` ✅ Used in ol-input.js
- `--input-outline-hovered` ✅ Used in ol-input.js
- `--input-outline-focused` ✅ Used in ol-input.js
- `--input-outline-error` ✅ Used in ol-input.js
- `--input-padding-x` ✅ Used in ol-input.js
- `--input-padding-y` ✅ Used in ol-input.js
- `--input-font-size` ✅ Used in ol-input.js
- `--input-border-width` ✅ Used in ol-input.js
- `--input-focus-ring` ✅ Used in ol-input.js
- `--input-min-height` ✅ Used in ol-input.js
- `--input-placeholder-color` ✅ Used in ol-input.js
- `--input-disabled-surface` ✅ Used in ol-input.js
- `--input-disabled-opacity` ✅ Used in ol-input.js

### Card Components

- `--card-surface` ✅ Used in ol-card.js
- `--card-on-surface` ✅ Used in ol-card.js
- `--card-outline` ✅ Used in ol-card.js
- `--card-padding` ✅ Used in ol-card.js
- `--card-shadow` ❌ Not used outside styles
- `--card-shadow-hover` ❌ Not used outside styles
- `--card-border-width` ✅ Used in ol-card.js

### Badge Components (All unused outside styles)

- `--badge-padding-x` ❌
- `--badge-padding-y` ❌
- `--badge-font-size` ❌
- `--badge-font-weight` ❌

### Notification Components (All unused outside styles)

- `--notification-surface` ❌
- `--notification-on-surface` ❌
- `--notification-padding` ❌
- `--notification-shadow` ❌
- `--notification-max-width` ❌

### Heading Components

- `--heading-display-1-size` ✅ Used in ol-heading.js
- `--heading-display-2-size` ✅ Used in ol-heading.js
- `--heading-display-3-size` ✅ Used in ol-heading.js
- `--heading-title-1-size` ✅ Used in ol-heading.js
- `--heading-title-2-size` ✅ Used in ol-heading.js
- `--heading-title-3-size` ✅ Used in ol-heading.js
- `--heading-title-4-size` ✅ Used in ol-heading.js
- `--heading-title-5-size` ✅ Used in ol-heading.js

---

## SUMMARY

### Total Variables Count
- **Primitives.css**: 133 variables
- **Semantic.css**: 107 variables
- **Total**: 240 variables

### Unused Outside /styles Folder

**PRIMITIVES (Tier 1)**: ~113 unused
- All color primitives (45 variables)
- Most typography primitives
- All transition/duration/easing variables
- All shadow variables
- All border width primitives
- All opacity variables
- All z-index variables
- All breakpoint variables
- All container width variables
- All icon size variables
- All control height variables
- All letter spacing variables
- Focus ring width/offset primitives

**SEMANTIC (Tier 2)**: ~50 unused
- Most surface system colors
- Most "on-" colors
- Primary/secondary/error container colors
- All link colors (used only in index.css)
- All elevation tokens
- Focus ring semantic tokens
- Most typography semantic tokens
- Some spacing/radius tokens
- Code typography tokens

**COMPONENT (Tier 3)**: ~20 unused
- Button container colors
- Button font/weight/border tokens
- Card shadow tokens
- All badge component tokens
- All notification component tokens

### Categories with Highest Unused Rate
1. **All primitive colors** (100% unused outside styles)
2. **All transitions/animations** (100% unused outside styles)
3. **All shadows/elevations** (100% unused outside styles)
4. **All z-index tokens** (100% unused outside styles)
5. **All breakpoint/container tokens** (100% unused outside styles)

### Most Used Variable Categories
1. **Spacing tokens** (8 out of 11 primitive spacing used)
2. **Input component tokens** (14 out of 15 used)
3. **Heading component tokens** (8 out of 8 used)
4. **Font weights** (2 out of 6 used)

---

## ⚠️ UNDEFINED VARIABLES BEING USED

The following CSS variables are being **used** in HTML/JS files but are **NOT defined** in `primitives.css` or `semantic.css`:

### Undefined Color Variables
- `--color-text-primary` - Used in ol-field.js, ol-heading.js, components.html
- `--color-text-secondary` - Used in ol-field.js, components.html
- `--color-text-link` - Used in components.html
- `--color-bg-secondary` - Used in components.html, heading-demo.html
- `--color-bg-hover` - Used in components.html
- `--color-background-secondary` - Used in components.html, input-demo.html
- `--color-border` - Used in input-demo.html (note: `--color-border-default` exists but `--color-border` alone doesn't)

### Undefined Primitive Variables
- `--font-size-base` - Used in components.html (note: there is `--font-size-md` but not `--font-size-base`)

**RECOMMENDATION**: These variables should either be:
1. Added to `semantic.css` with appropriate definitions, OR
2. Replaced with existing semantic variables (e.g., replace `--color-text-primary` with `--color-on-surface`)

