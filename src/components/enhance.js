/**
 * Progressive Enhancement System for Open Library Web Components
 *
 * This module provides functions to enhance standard HTML elements with web components.
 * It allows for progressive enhancement where HTML works without JavaScript and is
 * upgraded when the script loads.
 *
 * Usage:
 * 1. Add data-ol-* attributes to standard HTML elements
 * 2. Import and call enhanceAll() on page load
 * 3. For dynamic content, call enhanceAll() after inserting new HTML
 */

import './index.js'; // Import all component definitions
import { enhanceButtons } from './ol-button-enhancer.js';
import { enhanceHeadings } from './ol-heading-enhancer.js';
import { enhanceButtonGroups } from './ol-button-group-enhancer.js';

/**
 * Enhance all supported components in the given root element
 * @param {HTMLElement|Document} root - Root element to search for enhanceable elements
 * @returns {Object} - Count of enhanced elements by type
 */
export function enhanceAll(root = document) {
  const results = {
    headings: enhanceHeadings(root),
    buttons: enhanceButtons(root),
    buttonGroups: enhanceButtonGroups(root),
  };

  const total = Object.values(results).reduce((sum, count) => sum + count, 0);

  if (total > 0) {
    console.log('✨ Enhanced elements:', results, `(${total} total)`);
  }

  return results;
}

/**
 * Initialize enhancement on page load
 */
function init() {
  enhanceAll();
}

// Run on initial load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export individual enhancers for selective use
export { enhanceButtons, enhanceHeadings, enhanceButtonGroups };


