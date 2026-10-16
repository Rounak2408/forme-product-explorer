import React, { useEffect } from 'react';
import type { OrderData } from './OrderSuccessModal';
import { formatINR } from '../utils/productFilters';
import { CheckCircle2, X, ShoppingBag } from 'lucide-react';

interface OrderToastProps {
  order: OrderData | null;
  onClose: () => void;
  onViewDetails?: () => void;
}

export const OrderToast: React.FC<OrderToastProps> = ({
  order,
  onClose,
  onViewDetails
}) => {
  useEffect(() => {
    if (!order) return;

    // Auto-dismiss after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [order, onClose]);

  if (!order) return null;

  const firstItem = order.items[0];
  const isMultiple = order.items.length > 1;

  return (
    <div
      className="order-toast-container"
      role="status"
      aria-live="assertive"
    >
      <div className="order-toast-card">
        {/* Progress timer bar */}
        <div className="toast-progress-bar" />

        <div className="toast-content-wrapper">
          {/* Success Check Badge */}
          <div className="toast-icon-badge" aria-hidden="true">
            <CheckCircle2 size={22} className="toast-check-icon" />
          </div>

          {/* Toast Text Details */}
          <div className="toast-text-area">
            <div className="toast-header-row">
              <span className="toast-status-tag">Purchase Confirmed</span>
              <span className="toast-order-id">{order.orderId}</span>
            </div>

            <h4 className="toast-title">Your Order Successfully Purchased!</h4>

            <div className="toast-product-preview">
              {firstItem && (
                <img
                  src={firstItem.image}
                  alt={firstItem.name}
                  className="toast-product-img"
                />
              )}
              <div className="toast-product-info">
                <span className="toast-product-name">
                  {firstItem?.name}
                  {isMultiple && ` + ${order.items.length - 1} more`}
                </span>
                <span className="toast-product-price">
                  {formatINR(order.total)} · Express Dispatch
                </span>
              </div>
            </div>

            {/* Quick Action Link */}
            {onViewDetails && (
              <button
                type="button"
                className="toast-view-details-btn"
                onClick={onViewDetails}
              >
                <ShoppingBag size={13} aria-hidden="true" />
                <span>View Full Invoice & Details</span>
              </button>
            )}
          </div>

          {/* Dismiss button */}
          <button
            type="button"
            className="toast-dismiss-btn"
            onClick={onClose}
            aria-label="Dismiss notification"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
