import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="footer-glyph">F</span>
            <span className="footer-brand-title">FORME</span>
          </div>
          <p className="footer-bio">
            An editorial product catalog engineered for tactile discovery. Thoughtfully
            composed typography, calibrated spacing, and zero-compromise craft.
          </p>
        </div>

        <div className="footer-shortcuts" aria-label="Accessibility keyboard shortcuts">
          <span className="shortcut-title">Navigation Shortcuts</span>
          <div className="shortcut-list">
            <div className="shortcut-item">
              <kbd>/</kbd>
              <span>Focus search field</span>
            </div>
            <div className="shortcut-item">
              <kbd>Esc</kbd>
              <span>Close active overlays</span>
            </div>
            <div className="shortcut-item">
              <kbd>Tab</kbd>
              <span>Navigate interactive items</span>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of the catalog"
          >
            <span>Back to top</span>
            <ArrowUp size={16} aria-hidden="true" />
          </button>
          <p className="footer-copy">
            © {new Date().getFullYear()} FORME Inc. Round 2 Practical Assessment by TechCrestaX.
          </p>
        </div>
      </div>
    </footer>
  );
};
