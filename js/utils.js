/**
 * Utility Functions Module
 * Common helper functions for the portfolio
 */

const Utils = {
  // DOM Utilities
  querySelector(selector) {
    return document.querySelector(selector);
  },

  querySelectorAll(selector) {
    return document.querySelectorAll(selector);
  },

  getElementById(id) {
    return document.getElementById(id);
  },

  // Element Manipulation
  addClass(element, className) {
    if (element) element.classList.add(className);
  },

  removeClass(element, className) {
    if (element) element.classList.remove(className);
  },

  toggleClass(element, className, force) {
    if (element) element.classList.toggle(className, force);
  },

  hasClass(element, className) {
    return element ? element.classList.contains(className) : false;
  },

  // Event Listeners
  addEventListener(element, event, handler) {
    if (element) element.addEventListener(event, handler);
  },

  removeEventListener(element, event, handler) {
    if (element) element.removeEventListener(event, handler);
  },

  // Text and HTML
  setText(element, text) {
    if (element) element.textContent = text;
  },

  getText(element) {
    return element ? element.textContent : '';
  },

  setHTML(element, html) {
    if (element) element.innerHTML = html;
  },

  getHTML(element) {
    return element ? element.innerHTML : '';
  },

  // Attributes
  setAttribute(element, attr, value) {
    if (element) element.setAttribute(attr, value);
  },

  getAttribute(element, attr) {
    return element ? element.getAttribute(attr) : null;
  },

  removeAttribute(element, attr) {
    if (element) element.removeAttribute(attr);
  },

  // Data Attributes
  setData(element, key, value) {
    if (element) element.dataset[key] = value;
  },

  getData(element, key) {
    return element ? element.dataset[key] : null;
  },

  // String Utilities
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  trim(str) {
    return str.trim();
  },

  isEmpty(str) {
    return !str || str.trim().length === 0;
  },

  // Array Utilities
  flatten(arr) {
    return arr.reduce((flat, item) => {
      return flat.concat(Array.isArray(item) ? this.flatten(item) : item);
    }, []);
  },

  unique(arr) {
    return [...new Set(arr)];
  },

  // Object Utilities
  merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
  },

  // Date Utilities
  getCurrentYear() {
    return new Date().getFullYear();
  },

  formatDate(date, format = 'DD/MM/YYYY') {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();

    return format
      .replace('DD', day)
      .replace('MM', month)
      .replace('YYYY', year);
  },

  // Validation Utilities
  isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  },

  // Debounce Function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle Function
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Local Storage
  setLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('localStorage error:', e);
    }
  },

  getLocalStorage(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('localStorage error:', e);
      return null;
    }
  },

  removeLocalStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('localStorage error:', e);
    }
  },

  // Console Utilities
  log(message, data = null) {
    if (data) {
      console.log(message, data);
    } else {
      console.log(message);
    }
  },

  error(message, error = null) {
    if (error) {
      console.error(message, error);
    } else {
      console.error(message);
    }
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Utils;
}
