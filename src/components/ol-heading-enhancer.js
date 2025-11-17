/**
 * Progressive enhancement for ol-heading component
 * Finds standard HTML headings with data-ol-heading attribute and upgrades them
 */

export function enhanceHeadings(root = document) {
  const headings = root.querySelectorAll('[data-ol-heading]:not([data-ol-enhanced])');

  headings.forEach(heading => {
    // Create web component wrapper
    const olHeading = document.createElement('ol-heading');

    // Copy attributes
    olHeading.setAttribute('element', heading.tagName.toLowerCase());
    olHeading.setAttribute('size', heading.dataset.size || 'title-1');
    if (heading.dataset.icon) {
      olHeading.setAttribute('icon', heading.dataset.icon);
    }

    // Copy content
    olHeading.innerHTML = heading.innerHTML;

    // Copy standard classes (not data attributes)
    if (heading.className) {
      olHeading.className = heading.className;
    }

    // Preserve ID for anchor links
    if (heading.id) {
      olHeading.id = heading.id;
    }

    // Replace original heading with enhanced version
    heading.parentNode.replaceChild(olHeading, heading);

    // Mark as enhanced
    olHeading.setAttribute('data-ol-enhanced', 'true');
  });

  return headings.length;
}


