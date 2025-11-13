# OL-Dropdown-Button Component

A split dropdown button web component built with Lit, featuring a main action button and a secondary dropdown trigger.

## Overview

The `ol-dropdown-button` component provides a dual-action button where:
- The left side acts as a primary action button
- The right side (with chevron) opens a dropdown menu
- A visual divider separates the two interaction areas

## Features

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `string` | `'primary'` | Button style: `'primary'`, `'secondary'`, or `'destructive'` |
| `size` | `string` | `'medium'` | Button size: `'small'`, `'medium'`, or `'large'` |
| `fullWidth` | `boolean` | `false` | Makes button take full width of container |
| `open` | `boolean` | `false` | Controls dropdown visibility (can be set programmatically) |

### Slots

| Slot | Description |
|------|-------------|
| (default) | Main button label text |
| `dropdown` | Content to display in the dropdown menu |

### Events

| Event | Description |
|-------|-------------|
| `click` | Standard click event fired when main button (left side) is clicked |

## Behavior

### Main Button (Left Side)
- Clicking emits a standard `click` event
- Closes dropdown if it's currently open
- Can be listened to with standard event listeners

### Chevron Button (Right Side)
- Clicking toggles the dropdown open/closed
- Shows a down chevron (▾) that rotates 180° when open

### Dropdown
- Appears centered below the button
- Maximum width of 200px
- Scales from 90% to 100% over 200ms when opening
- No gap between button and dropdown
- Has a subtle shadow for elevation

### Interactions

**Click Outside to Close**
- Clicking anywhere outside the component closes the dropdown

**Keyboard Support**
- `Escape` key closes the dropdown and returns focus to the chevron button

**Focus Management**
- When dropdown opens, focus automatically moves to the first tabbable element
- Supports standard tabbable elements: buttons, links, inputs, etc.

## Usage Examples

### Basic Usage

```html
<ol-dropdown-button variant="primary">
  Actions
  <div slot="dropdown" style="padding: 8px;">
    <button>Edit</button>
    <button>Delete</button>
  </div>
</ol-dropdown-button>
```

### With Click Event Listener

```html
<ol-dropdown-button id="myButton" variant="secondary">
  Save
  <div slot="dropdown" style="padding: 8px;">
    <button>Save Draft</button>
    <button>Save & Publish</button>
  </div>
</ol-dropdown-button>

<script>
  const btn = document.getElementById('myButton');
  btn.addEventListener('click', () => {
    console.log('Main action clicked!');
    // Perform primary action
  });
</script>
```

### All Variants

```html
<!-- Primary (default) -->
<ol-dropdown-button variant="primary">
  Primary
  <div slot="dropdown">...</div>
</ol-dropdown-button>

<!-- Secondary -->
<ol-dropdown-button variant="secondary">
  Secondary
  <div slot="dropdown">...</div>
</ol-dropdown-button>

<!-- Destructive -->
<ol-dropdown-button variant="destructive">
  Delete
  <div slot="dropdown">...</div>
</ol-dropdown-button>
```

### All Sizes

```html
<ol-dropdown-button size="small">Small</ol-dropdown-button>
<ol-dropdown-button size="medium">Medium</ol-dropdown-button>
<ol-dropdown-button size="large">Large</ol-dropdown-button>
```

### Full Width

```html
<ol-dropdown-button full-width>
  Full Width Button
  <div slot="dropdown">...</div>
</ol-dropdown-button>
```

### Rich Dropdown Content

```html
<ol-dropdown-button variant="secondary">
  Account
  <div slot="dropdown" style="padding: 12px; min-width: 180px;">
    <p style="margin: 0 0 8px 0; font-weight: bold;">John Doe</p>
    <a href="#profile">View Profile</a>
    <a href="#settings">Settings</a>
    <hr style="margin: 8px 0;">
    <button>Sign Out</button>
  </div>
</ol-dropdown-button>
```

## Styling

The component uses CSS variables from the design system:

### Colors
- `--color-brand-primary` - Primary variant colors
- `--color-bg-elevated` - Dropdown background
- `--color-border` - Borders and divider
- `--color-text` - Text colors

### Spacing
- `--button-padding-x`, `--button-padding-y` - Button padding
- `--button-sm-padding-x`, `--button-sm-padding-y` - Small button padding

### Other
- `--radius-button` - Border radius
- `--focus-ring-width` - Focus indicator width
- `--z-index-dropdown` - Dropdown stacking order (1000)

## Accessibility

- Uses `aria-expanded` on chevron button to indicate dropdown state
- Uses `aria-haspopup="true"` to indicate dropdown presence
- Keyboard accessible with Escape key to close
- Focus management ensures keyboard users can navigate dropdown content
- Proper focus indicators via `focus-visible`

## Implementation Details

### Files Modified
1. `/src/components/ol-dropdown-button.js` - Component implementation
2. `/src/components/index.js` - Component registration
3. `/styles/primitives.css` - Added `--z-index-dropdown` variable
4. `/components.html` - Added demo section
5. `/dropdown-test.html` - Comprehensive test page

### Technical Notes
- Built with Lit 3.x
- Uses Shadow DOM for encapsulation
- Event listeners for outside clicks are properly cleaned up on disconnect
- Focus management finds first tabbable element using standard selectors
- Dropdown positioning uses CSS transforms for smooth animations

## Testing

A comprehensive test page is available at `/dropdown-test.html` which includes:

1. Basic Variants Test
2. Sizes Test
3. Full Width Test
4. Click Events Test (with event logger)
5. Focus Management Test
6. Keyboard Interaction Test
7. Click Outside to Close Test
8. Main Button Closes Dropdown Test
9. Custom Dropdown Content Test

### Running Tests

1. Start the dev server: `npm run dev`
2. Navigate to `http://localhost:5173/dropdown-test.html`
3. Interact with each test section to verify functionality

## Browser Compatibility

Works in all modern browsers that support:
- Web Components / Custom Elements
- Shadow DOM
- ES2015+ JavaScript
- CSS Custom Properties

## Differences from ol-button

**Supported (same as ol-button):**
- `variant` property (primary, secondary, destructive)
- `size` property (small, medium, large)
- `fullWidth` property

**Not Supported:**
- `loading` property
- `type` property (submit, reset, button)

**Additional Features:**
- Split button with dropdown
- `open` property for dropdown state
- `dropdown` slot for menu content
- Focus management
- Click outside to close
- Keyboard support

