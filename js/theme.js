/**
 * Theme Management Module
 * Handles dark mode toggle and theme persistence
 */

const ThemeManager = {
  // Configuration
  STORAGE_KEY: 'portfolio-theme',
  DARK_CLASS: 'dark-mode',
  LIGHT_CLASS: 'light-mode',

  // Initialize theme
  init() {
    this.applyTheme(this.getSavedTheme() || this.getSystemTheme());
    this.attachEventListeners();
  },

  // Get saved theme preference
  getSavedTheme() {
    return localStorage.getItem(this.STORAGE_KEY);
  },

  // Get system theme preference
  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  },

  // Apply theme
  applyTheme(theme) {
    const html = document.documentElement;
    const isDark = theme === 'dark';

    html.classList.toggle(this.DARK_CLASS, isDark);
    html.classList.toggle(this.LIGHT_CLASS, !isDark);

    // Update CSS variables
    this.updateCSSVariables(isDark);

    // Save preference
    localStorage.setItem(this.STORAGE_KEY, theme);
  },

  // Update CSS custom properties
  updateCSSVariables(isDark) {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--bg-primary', '#0f172a');
      root.style.setProperty('--bg-secondary', '#1e293b');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#cbd5e1');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8fafc');
      root.style.setProperty('--text-primary', '#0f172a');
      root.style.setProperty('--text-secondary', '#475569');
    }
  },

  // Toggle theme
  toggle() {
    const currentTheme = this.getSavedTheme() || this.getSystemTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
    this.dispatchThemeChangeEvent(newTheme);
  },

  // Attach event listeners
  attachEventListeners() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggle());
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getSavedTheme()) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  },

  // Dispatch custom event
  dispatchThemeChangeEvent(theme) {
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  },

  // Get current theme
  getCurrentTheme() {
    return this.getSavedTheme() || this.getSystemTheme();
  }
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
} else {
  ThemeManager.init();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeManager;
}
