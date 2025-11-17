/**
 * Progressive enhancement for ol-button-group component
 * Finds divs with data-ol-button-group attribute and upgrades them
 */

export function enhanceButtonGroups(root = document) {
  const groups = root.querySelectorAll('[data-ol-button-group]:not([data-ol-enhanced])');

  groups.forEach(group => {
    // Create web component wrapper
    const olButtonGroup = document.createElement('ol-button-group');

    // Find and slot buttons appropriately
    const children = Array.from(group.children);

    children.forEach((child, index) => {
      // First child goes to primary-action slot
      if (index === 0) {
        child.setAttribute('slot', 'primary-action');
      } else {
        // Rest go to secondary-actions slot
        child.setAttribute('slot', 'secondary-actions');
      }

      // Move child to the new component
      olButtonGroup.appendChild(child);
    });

    // Copy standard classes
    if (group.className) {
      olButtonGroup.className = group.className;
    }

    // Replace original div with enhanced version
    group.parentNode.replaceChild(olButtonGroup, group);

    // Mark as enhanced
    olButtonGroup.setAttribute('data-ol-enhanced', 'true');
  });

  return groups.length;
}


