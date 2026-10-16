import React, { useState } from 'react';
import type { Category } from '../types/product';
import {
  ArrowUp,
  Truck,
  ShieldCheck,
  RefreshCw,
  Lock,
  ArrowRight,
  Check
} from 'lucide-react';

interface FooterProps {
  onSelectCategory?: (category: Category | 'All') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleCategoryClick = (category: Category | 'All') => {
    if (onSelectCategory) {
      onSelectCategory(category);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      {/* 1. Value Pillars Ribbon */}
      <div className="footer-pillars-ribbon">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Truck size={18} aria-hidden="true" />
              </div>
              <div className="pillar-text">
                <strong>Express White-Glove Shipping</strong>
                <span>Complimentary delivery across India</span>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <ShieldCheck size={18} aria-hidden="true" />
              </div>
              <div className="pillar-text">
                <strong>100% Certified Authentic</strong>
                <span>Direct from vetted artisanal workshops</span>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <RefreshCw size={18} aria-hidden="true" />
              </div>
              <div className="pillar-text">
                <strong>14-Day Seamless Returns</strong>
                <span>Hassle-free doorstep collection</span>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Lock size={18} aria-hidden="true" />
              </div>
              <div className="pillar-text">
                <strong>Encrypted & Safe Checkout</strong>
                <span>Cards, UPI & NetBanking protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="container footer-main">
        <div className="footer-columns-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-title-wrap">
              <span className="footer-glyph">F</span>
              <span className="footer-brand-title">FORME</span>
            </div>
            <p className="footer-bio">
              Thoughtfully curated essentials across technology, style, and everyday living.
              Crafted with archival restraint, calibrated typography, and timeless aesthetics.
            </p>
            <div className="footer-region-badge">
              <span className="region-indicator"></span>
              <span>India · INR (₹)</span>
            </div>
          </div>

          {/* Column 2: Collections Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Collections</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleCategoryClick('All')}
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleCategoryClick('Electronics')}
                >
                  Electronics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleCategoryClick('Clothing')}
                >
                  Clothing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleCategoryClick('Accessories')}
                >
                  Accessories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleCategoryClick('Home')}
                >
                  Home & Living
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => handleCategoryClick('Footwear')}
                >
                  Footwear
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="footer-col">
            <h4 className="footer-heading">Assistance</h4>
            <ul className="footer-links-list">
              <li>
                <span className="footer-info-item">White-Glove Dispatch</span>
              </li>
              <li>
                <span className="footer-info-item">Track Active Consignment</span>
              </li>
              <li>
                <span className="footer-info-item">Material Care Guide</span>
              </li>
              <li>
                <span className="footer-info-item">Returns & Exchanges</span>
              </li>
              <li>
                <span className="footer-info-item">Artisanal Warranty</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col footer-col-newsletter">
            <h4 className="footer-heading">Join The Archive</h4>
            <p className="newsletter-desc">
              Subscribe to receive private previews, new arrivals, and editorial release notes.
            </p>
            
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="newsletter-input"
                />
                <button
                  type="submit"
                  className="newsletter-submit-btn"
                  aria-label="Subscribe to newsletter"
                >
                  {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
                </button>
              </div>
              {subscribed && (
                <span className="newsletter-success-note">
                  ✓ Thank you. You are now subscribed to FORME.
                </span>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal & Back to Top Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright">
            © {new Date().getFullYear()} FORME Inc. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <span>Privacy Policy</span>
            <span className="legal-dot">•</span>
            <span>Terms of Service</span>
            <span className="legal-dot">•</span>
            <span>Shipping Policy</span>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
