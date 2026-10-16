import React, { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import { formatINR } from '../utils/productFilters';
import { CheckCircle2, Copy, Check, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export interface OrderData {
  orderId: string;
  items: Product[];
  total: number;
  orderDate: string;
}

interface OrderSuccessModalProps {
  orderData: OrderData | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  orderData,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!orderData) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [orderData, onClose]);

  if (!orderData) return null;

  const handleCopyOrderId = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(orderData.orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="order-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="order-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-success-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Celebration Header */}
        <div className="order-modal-header">
          <div className="order-success-badge" aria-hidden="true">
            <CheckCircle2 size={44} className="order-check-icon" />
          </div>

          <span className="order-pretitle">Payment Confirmed</span>
          <h2 id="order-success-title" className="order-modal-title font-serif">
            Order Placed Successfully!
          </h2>
          <p className="order-modal-subtext">
            Thank you for curating with FORME. Your order has been placed and is being prepared with white-glove care.
          </p>
        </div>

        {/* Order Meta Box */}
        <div className="order-meta-card">
          <div className="order-meta-col">
            <span className="meta-label">Order Reference</span>
            <div className="order-id-copy-wrap">
              <strong className="meta-value order-id">{orderData.orderId}</strong>
              <button
                type="button"
                className="copy-order-btn"
                onClick={handleCopyOrderId}
                aria-label="Copy Order ID"
                title="Copy Order ID"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="order-meta-col">
            <span className="meta-label">Order Date</span>
            <span className="meta-value">{orderData.orderDate}</span>
          </div>

          <div className="order-meta-col">
            <span className="meta-label">Payment Mode</span>
            <span className="meta-value">Instant Prepaid / Card</span>
          </div>
        </div>

        {/* Purchased Items List */}
        <div className="order-items-section">
          <h3 className="order-items-heading">
            Purchased Items ({orderData.items.length})
          </h3>

          <div className="order-items-scroll">
            {orderData.items.map((item) => (
              <div key={item.id} className="order-item-row">
                <img
                  src={item.image}
                  alt={item.name}
                  className="order-item-thumb"
                />
                <div className="order-item-details">
                  <span className="order-item-category">{item.category}</span>
                  <h4 className="order-item-name">{item.name}</h4>
                  {item.materialOrSpec && (
                    <span className="order-item-spec">{item.materialOrSpec}</span>
                  )}
                </div>
                <div className="order-item-price-col">
                  <span className="order-item-price">{formatINR(item.price)}</span>
                  <span className="order-item-qty">Qty: 1</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Summary */}
        <div className="order-summary-box">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatINR(orderData.total)}</span>
          </div>
          <div className="summary-row">
            <span>Express White-Glove Dispatch</span>
            <span className="free-tag">Complimentary (₹0)</span>
          </div>
          <div className="summary-row total-row">
            <span>Total Paid</span>
            <strong className="grand-total">{formatINR(orderData.total)}</strong>
          </div>
        </div>

        {/* Dispatch & Assurance banner */}
        <div className="order-assurances">
          <div className="assurance-pill">
            <Truck size={16} aria-hidden="true" />
            <span>Estimated delivery in 2–4 business days</span>
          </div>
          <div className="assurance-pill">
            <ShieldCheck size={16} aria-hidden="true" />
            <span>100% Authentic Guaranteed</span>
          </div>
        </div>

        {/* Modal Action Button */}
        <div className="order-modal-actions">
          <button
            type="button"
            className="continue-shopping-btn"
            onClick={onClose}
          >
            <span>Continue Exploring Catalog</span>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
