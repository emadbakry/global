// hi!, this i fallback script file to fix problems of theme directly when URGANT!
console.log('hi!');

let style = document.createElement('style');

style.innerHTML = `
.mm-ocd__content:has(.brands-menu) {
  overflow: unset;
}
 
#offers-menu.h-screen {
  height: auto;
}

div.swal2-container {
  z-index: 99999;
}
  

#app.show-search-results-as-prod-card .s-search-product-not-available[style*="block"] {
  filter: unset;
}
.store-footer .contact-social ul {
  justify-content: center;
}
.gov-details-section {
  flex-wrap: wrap;
}

.quick-categ-item img {
  width: 100%;
}

/* ===== salla-bullet-delivery: map-based flow ===== */

salla-bullet-delivery {
  display: block;
  margin-bottom: 0.5rem;
}

.s-bullet-delivery-inner {
  border-radius: 0.5rem;
}

.s-bullet-delivery-tabs {
  gap: 0.5rem;
}
.s-bullet-delivery-tab {
  border: 1px solid transparent;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}
.s-bullet-delivery-tab:hover {
  opacity: 0.85;
}
.s-bullet-delivery-tab--active {
  border-color: currentColor !important;
}

salla-bullet-delivery .s-bullet-delivery-modal .s-modal-body {
  padding: 0;
  overflow: visible;
}
salla-bullet-delivery .s-bullet-delivery-modal .s-modal-body:has(.s-searchable-dropdown--open) {
  overflow: visible;
}

.s-bullet-delivery-search-row {
  gap: 0.5rem;
}
.s-bullet-delivery-search-row .s-bullet-delivery-search {
  border-radius: 0.375rem;
}

.s-bullet-delivery-location-btn {
  border-radius: 0.375rem;
  transition: opacity 0.2s ease;
}
.s-bullet-delivery-location-btn:hover {
  opacity: 0.85;
}

.s-bullet-delivery-field-row .s-bullet-delivery-field {
  border-radius: 0.375rem;
}

.s-bullet-delivery-addresses-list {
  gap: 0.5rem;
}
.s-bullet-delivery-address-item {
  border-radius: 0.5rem;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;
}
.s-bullet-delivery-address-item:not(.s-bullet-delivery-address-item--disabled):hover {
  opacity: 0.9;
}
.s-bullet-delivery-address-item--selected {
  border-color: currentColor !important;
}
.s-bullet-delivery-address-item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.s-bullet-delivery-saved-addresses-empty {
  text-align: center;
  padding: 1.5rem;
}

.s-bullet-delivery-add-address-form {
  gap: 0.75rem;
}
.s-bullet-delivery-form-actions {
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.s-bullet-delivery-allocation-out-of-coverage {
  border-radius: 0.375rem;
  background-color: #fef2f2;
  padding: 0.75rem;
}
.s-bullet-delivery-allocation-out-of-coverage-text {
  color: #991b1b;
}

.s-bullet-delivery-branches-wrap {
  gap: 0.5rem;
}
.s-bullet-delivery-branch-item {
  border-radius: 0.5rem;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;
}
.s-bullet-delivery-branch-item:hover:not(.s-bullet-delivery-branch-item--disabled) {
  opacity: 0.9;
}
.s-bullet-delivery-branch-item--selected {
  border-color: currentColor !important;
}
.s-bullet-delivery-branch-item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.s-bullet-delivery-branch-search-wrap {
  border-radius: 0.375rem;
}
.s-bullet-delivery-branch-search-input {
  background: transparent;
}

.s-bullet-delivery-cart-view {
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.s-bullet-delivery-cart-view:hover {
  opacity: 0.9;
}

.s-bullet-delivery-market-warning-overlay {
  z-index: 99999;
}
.s-bullet-delivery-market-warning {
  border-radius: 0.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.s-bullet-delivery-radio {
  accent-color: currentColor;
}

.s-map-modal-body {
  overflow: hidden;
  position: relative;
}
.s-map-element {
  height: 400px;
  width: 100%;
}
@media (max-width: 640px) {
  .s-map-element {
    height: 55vh;
  }
}
.s-map-search-wrapper {
  position: absolute;
  top: 0;
  z-index: 11;
  margin: 1rem;
  width: calc(100% - 2rem);
}
.s-map-search-wrapper input {
  width: 100%;
  height: 40px;
  padding: 0.625rem;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  font-size: 16px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}
.s-map-search-results {
  background: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 0.25rem;
  max-height: 200px;
  overflow-y: auto;
}
.s-map-my-location-button {
  position: absolute;
  bottom: 1.5rem;
  z-index: 10;
}

.s-searchable-dropdown {
  position: relative;
}
.s-searchable-dropdown-trigger {
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: border-color 0.2s ease;
}
.s-searchable-dropdown-trigger--open {
  border-color: currentColor !important;
}
.s-searchable-dropdown-panel {
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 50;
}
.s-searchable-dropdown-search-input {
  background: transparent;
  border-bottom: 1px solid #e5e7eb;
}
.s-searchable-dropdown-item {
  transition: background-color 0.15s ease;
  cursor: pointer;
}

/* ===== end salla-bullet-delivery ===== */
`;

document.getElementsByTagName('head')[0].appendChild(style);
