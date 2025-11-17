/**
 * Progressive enhancement for ol-button component
 * Finds standard HTML buttons with data-ol-button attribute and upgrades them
 */

export function enhanceButtons(root = document) {
  const buttons = root.querySelectorAll('[data-ol-button]:not([data-ol-enhanced])');

  buttons.forEach(button => {
    // Create web component wrapper
    const olButton = document.createElement('ol-button');

    // Copy attributes from data attributes
    const variant = button.dataset.variant || 'primary';
    const size = button.dataset.size || 'medium';
    const fullWidth = button.hasAttribute('data-full-width');

    olButton.setAttribute('variant', variant);
    olButton.setAttribute('size', size);
    olButton.setAttribute('type', button.type || 'button');
    if (fullWidth) olButton.setAttribute('full-width', '');

    // Copy content
    olButton.innerHTML = button.innerHTML;

    // Copy standard classes (not data attributes)
    if (button.className) {
      olButton.className = button.className;
    }

    // Copy any event listeners by cloning attributes that start with 'on'
    Array.from(button.attributes).forEach(attr => {
      if (attr.name.startsWith('on')) {
        olButton.setAttribute(attr.name, attr.value);
      }
    });

    // Replace original button with enhanced version
    button.parentNode.replaceChild(olButton, button);

    // Mark as enhanced
    olButton.setAttribute('data-ol-enhanced', 'true');
  });

  return buttons.length;
}


