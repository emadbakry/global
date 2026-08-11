// if (document.body.classList.contains("cart")) {
// 	const removeClassInterval = setInterval(() => {
// 		const form = document.querySelector('.cart .main-content form.product-form[id^="item-"]');

// 		if (form) {
// 			form.classList.remove("product-form");
// 			clearInterval(removeClassInterval);
// 			console.log('✅ تمت إزالة الكلاس "project-form" في صفحة السلة.');
// 		}
// 	}, 5);
// 	setTimeout(() => {
// 		clearInterval(removeClassInterval);
// 	}, 8000);
// }

// you can use this file to fix issues directly for all theme users, great for quick fixes before salla accept fixes.

// add style element
var style = document.createElement("style");
// add type using setAttribute

style.setAttribute("type", "text/css");

// add css content
style.innerHTML = `
/* hi */

[dir="rtl"] .header-innerLeft .text-xl + salla-cart-summary {
	margin-right: 0.3rem;
}
.dark .cart salla-modal .s-loyalty-prize-item,
.dark .cart salla-modal salla-list-tile .s-list-tile-item,
.dark .cart .shadow-default.mb-5.rounded-md.p-3.xs\:p-7 .s-list-tile-item {
	background-color: transparent !important;
	color: var(--dm-text-main) !important;
}
/*
body:not(.cls-80b) img.lazy*[data^="data"] {
    transform: scale(1.1);
}
body:not(.cls-80b) img.lazy.loaded {
    opacity: 1;
    transform: scale(1);
}
*/

#app.header-hidden.fixed-pinned-cls .store-header .inner {
	top: -250px;
}


/* all below codes is in the theme: 11 august 4 am */
/* all below codes is in the theme: 11 august 4 am */




	/* later */

/* Cart sticky summary: pad only when a mobile nav exists (set by JS) */
#app salla-cart-summary-card.s-cart-summary-card {
	bottom: 0 !important;
	padding-bottom: var(--aali-mobile-nav-pad, 0px);
}

@media (min-width: 1024px) {
	#app salla-cart-summary-card.s-cart-summary-card {
		padding-bottom: 1.25rem;
	}
}

#app.cart .wa-widget,
#app.cart .scroll-progress-wrapper.active {
	bottom: var(--aali-cart-fab-bottom, 16px);
}

@media only screen and (max-width: 640px) {
	body#app #wa-widget-send-button  {
        bottom:calc(var(--mobile-nav-height) + 7rem) !important;
    }
}

body:not(.cls-85) .sq-awesome-banners salla-slider[display-all-url] .s-slider-block__title {
	justify-content: space-between;
}

body:not(.cls-83) .product-block .sale-ratio {
	font-weight: 600;
}
.s-block--fixed-banner.no-bg img {
	background-color: transparent;
}
.s-block-special-testimonials .swiper-pagination {
	display: none;
}


#app.pc-effect-zoom-shine:not(.product-ratio-unset):not(.cls-81) .product-block__thumb,
#app.pc-effect-zoom:not(.product-ratio-unset):not(.cls-81) .product-block__thumb {
	overflow: hidden;
}


.action-btns-small custom-salla-product-card .showPreviewBtn:not(.preview-btn-down) {
	width: 34px;
	height: 34px;
}
.action-btns-small custom-salla-product-card .showPreviewBtn.preview-btn-down {
	height: 34px;
}

body:not(.cls-80) .aali-animation {
	animation-direction: alternate;
}


.header-innerRight .close-mobile-menu {
	display: none;
}

body:not(.cls-77) section.sq-awesome-banners.section-is-slider:not(.auto-size) .banner-entry.lazy__bg.lazy[style*="background-image"] {
	opacity: 1;
}

.dark #tabbyPromoWrapper [class*="styles__containerPortal"] {
    --snippetTextColor: var(--dm-text-main) !important;
    --snippetLinkTextColor: var(--dm-text-main) !important;
}

.dark #app #tabbyPromoWrapper,
.dark #app .tamara-product-widget {
	background: var(--dm-bg-main) !important;
    color: var(--dm-text-main) !important;
    border:1px solid var(--dm-text-sec) !important;
}


/* tempo till update  released */
.footer-social-outer li.rounded-sm ~ li {
	border-radius:.125rem;
}
.footer-social-outer li.rounded-md ~ li {
	border-radius:.375rem;
}
.footer-social-outer li.rounded-xl ~ li {
	border-radius:.675rem;
}
.footer-social-outer li.rounded-full ~ li {
	border-radius:50rem;
}
/* tempo till update  released */


#app.product-single .details-slider .s-slider-container .swiper-wrapper img {
	max-height: unset;
	object-fit: cover;
}
	
@media only screen and (max-width: 640px) {
	#app.product-single .details-slider .s-slider-container .swiper-wrapper img {
			max-height: 65vh;
			object-fit: contain;
	}
}

#app.product-ratio-4\/3.pc-effect-zoom-shine:not(.product-ratio-unset) .product-block__thumb a:after,
#app.product-ratio-5\/3.pc-effect-zoom-shine:not(.product-ratio-unset) .product-block__thumb a:after {
	top: -20%;
	width: 130%;
	height: 130%;
}

body.action-btns-small salla-add-product-button apple-pay-button {
	--apple-pay-button-height: 34px;
}

.action-btns-small .s-add-product-button-main .s-add-product-button-mini-checkout {
	--salla-fast-checkout-button-height: 2rem;
}


html:not(.dark) .tamara-clr1 .tamara-product-widget span {
	color: var(--custom-color1) !important;
}








/* tempo styles for ratings edit */


.s-comments-item-like-btn .s-button-text {
    display: flex;
    flex-direction: row-reverse;
    gap: 0.5rem;
}

.s-comments-item-like-btn {
    margin-top: 0.5rem;
}

.s-rating-modal-product-details-main .s-comments-item-like-btn span svg {
    height: 0.75rem;
    width: 0.75rem;
}
.dark .s-rating-modal-product-details-main .s-comments-item-like-btn button {
	color: var(--dm-text-sec);
}
.dark .s-file-upload-wrapper .filepond--drop-label {
	background: var(--dm-bg-sec);
    color: var(--dm-text-sec);
}
.dark .s-file-upload-wrapper .filepond--drop-label .s-rating-modal-filepond-placeholder-icon svg {
	fill: var(--dm-text-sec);
}

.s-rating-modal-contact {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.375rem;
    --tw-bg-opacity: 1;
    background-color: rgba(243, 244, 246, 1);
    background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
    padding: 0.5rem;
}
.s-rating-modal-contact p {
    font-size: 1rem;
    line-height: 1.5rem;
    --tw-text-opacity: 1;
    color: rgba(31, 41, 55, 1);
    color: rgba(31, 41, 55, var(--tw-text-opacity));
}

.s-rating-modal-contact-icons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.s-rating-modal-contact-icons span {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: rgba(229, 231, 235, 1);
    border-color: rgba(229, 231, 235, var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    padding: 0.375rem;
}
	.s-rating-modal-contact-icons span svg {
    height: 1rem;
    width: 1rem;
    fill: #414042;
    fill: var(--color-primary);
}


/* tempo styles for ratings edit */


#app.tab-1-on .next-tab2 + [id^="best-offers-"][id$="-slider"],
#app.tab-1-on .next-tab2 + .s-block.s-block--best-offers {
	display: none !important;
}

#app.tab-2-on .next-tab1 + [id^="best-offers-"][id$="-slider"],
#app.tab-2-on .next-tab1 + .s-block.s-block--best-offers {
	display: none !important;
}

#app.tab-2-on .next-tab2 + [id^="best-offers-"][id$="-slider"],
#app.tab-2-on .next-tab2 + .s-block.s-block--best-offers {
	display: block !important;
}

body#app.hide-img-btm-rad.p-border-on:not(.cls-8734gb) custom-salla-product-card.product-block .product-block__thumb:not(.s-product-card-image) {
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}

.dark salla-products-slider .color-danger.t-red {
	color: var(--red-color, #fff) !important;
}

.dark .s-product-options-colors-item span + div p {
	color: var(--dm-text-sec) !important;
}

.dark .s-product-options-thumbnails-wrapper div p {
	color: var(--dm-text-sec) !important;
}

body.modal-is-closed salla-button#cart-submit button,
body.modal-is-closed salla-button#cart-submit {
	pointer-events: auto;
	}
body.modal-is-closed salla-button#cart-submit button .s-button-text.s-button-hide {
	opacity: 1;
	}
	
body.modal-is-closed salla-button#cart-submit button .s-button-loader {
	opacity: 0;
}

.mobile-nav-outer.no-titles .mobile-nav--item .s-cart-summary-count {
    display: block;
}


.s-rating-modal-product-img-wrap {
    width: 3.5rem;
}

.sq-awesome-banners .banner-outer .banner-texts .banner__title {
  font-size: 80%;
}
.action-btns-small:not(.cls-btn46) salla-add-product-button button[product-id] {
	height: 2rem;
	font-size: 0.8rem;
}

.s-block h3,
.banner__title {
    line-height: normal;
}

.footer-has-bg .store-footer__inner {
	background-color: transparent !important;
}

.dark #app.btns-gradient .cart-submit-wrap .s-button-primary .s-button-text {
	color: var(--dm-main-text) !important;
}

.titles-line-underline .tabs__item .s-slider-block__title:after {
	display: none;
}

.product-block .s-product-options-wrapper {
	display: none;
}
	






.dark .s-comments-filter-label,
.dark .s-reviews-summary-row-rate,
.dark .s-reviews-summary-count,
.dark .s-reviews-summary-average,
.dark .s-comments-title,
.dark .s-comments-item-timestamp,
.dark .s-comments-item-content,
.dark .s-comments-item-user-info-name {
	color: var(--dm-text-main) !important;
}
.dark .s-reviews-summary-header .s-rating-stars-selected {
	fill: #fbbf24;
	color: #fbbf24;
}
.dark button.s-comments-item-like-btn {
	background-color: transparent !important;
	border-color: var(--dm-text-main) !important;
	color: var(--dm-text-main) !important;
}
.dark button.s-comments-item-like-btn span {
	fill: var(--dm-text-main) !important;
	color: var(--dm-text-main) !important;
}

.dark salla-button.s-comments-item-like-btn.liked button.s-comments-item-like-btn {
	background-color: var(--dm-text-main) !important;
	border-color: var(--dm-text-main) !important;
	color: var(--dm-bg-main) !important;
}
.dark salla-button.s-comments-item-like-btn.liked button.s-comments-item-like-btn span {
	fill: var(--dm-bg-main) !important;
	color: var(--dm-bg-main) !important;
}
.dark body.btns-gradient salla-button.s-comments-item-like-btn.liked button.s-comments-item-like-btn span {
	fill: var(--gradient-text-color) !important;
	color: var(--gradient-text-color) !important;
}


.dark .s-progress-bar-progress {
	background-color: var(--dm-text-main) !important;
}


.dark .s-comments .s-infinite-scroll-btn.s-button-btn {
	border-color: var(--dm-text-main) !important;
}



.dark .s-comments-count-label {
	color: var(--dm-text-main) !important;
}
.dark .s-comments-item-has-order-check-text {
	color: var(--dm-text-sec) !important;
}



.dark .s-booking-field-reservations-item {
	color: var(--dm-text-sec) !important;
	border-color: var(--dm-text-sec) !important;
}
.dark .s-booking-field-reservations-icon svg {
	fill: var(--dm-text-sec) !important;
}

salla-product-options[config] div[data-show-when] {
	/*	display: block !important; */
}

body.remove-old-slider .s-block--hero-slider.s-block--full-bg:not(.come-back) {
	display: none !important;
}
 
body:not(.line-brk).app-body .product__description {
	line-break: unset;
}
#app.line-brk .product__description {
	line-break: anywhere;
}

.know-more.no-bg .know-more-inner{
	background: transparent !important;
}

.mm-ocd__content {
    overflow-y: scroll;
}


.pc-less-spaces .product-block .product-title .title {
  margin-top: 0;
  margin-bottom: 0;
}
.pc-less-spaces .product-block .price-wrapper {
  margin-bottom: 0;
}

.dark salla-installment {
	color: var(--dm-text-main) !important;
}
.dark salla-installment tamara-widget[type="tamara-summary"] {
	--inline-outlined-background-color-hover: var(--dm-bg-sec);
}


body.footer-hide-social-title .store-footer .footer-social-item a {
	height: 36px;
	width: 36px;
}



/* features */
.enhanced-features.new .s-block--features__item {
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: auto auto;
	align-items: center;
	gap: 0.75rem 1.5rem;
	z-index: 1;
	padding: 1rem;
}
.enhanced-features.new .s-block--features__item h4 {
	grid-column: 2;
	grid-row: 1;
	font-size: 1.25rem;
	text-align: start;
	margin-bottom: 0;
	align-self: flex-end;
}

.enhanced-features.new .s-block--features__item p {
	grid-column: 2;
	grid-row: 2;
	text-align: start;
	align-self: flex-start;
}

.enhanced-features.new .feature-icon {
	grid-column: 1;
	grid-row: 1 / -1;
	margin-bottom: 0;
	padding: 0.25rem;
	border-radius: 1rem;
	position: relative;
	background-color: var(--f-bg-color);
	border-radius: 0.75rem;
}

.enhanced-features.new .feature-icon:after {
	content: "";
	display: block;
	width: 120%;
	height: 120%;
	background: inherit;
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	opacity: 0.55;
	z-index: -1;
	border-radius: inherit;
}

#app.h-counter .preview__inner .count-down_wrapper {
	display: none;
}
	
.p-card-centered .product-block .price-wrapper > div:first-of-type {
	justify-content: center;
}

/* product single */
/* salla-modal input,
salla-modal select,
salla-modal textarea, */
.app-body form input,
form input.s-form-control,
form select.s-form-control,
form select,
form textarea.s-form-control,
form textarea {
	font-size: 16px;
}
/* product single */


body .s-comments.s-comments-product:has(salla-reviews-summary:empty):has(.s-comments-header:empty):has(salla-comment-form:empty) {
    display: none;
}

.cart .price-2.item-price > i {
	display: inline-block;
}



.store-footer.icons-rounded-none .s-social-link a,
.store-footer.icons-rounded-none .s-contacts-icon {
	border-radius: 0;
}
.store-footer.icons-rounded-sm .s-social-link a,
.store-footer.icons-rounded-sm .s-contacts-icon {
	border-radius: 0.125rem;
}
.store-footer.icons-rounded-md .s-social-link a,
.store-footer.icons-rounded-md .s-contacts-icon {
	border-radius: 0.375rem;
}
.store-footer.icons-rounded-xl .s-social-link a,
.store-footer.icons-rounded-xl .s-contacts-icon {
	border-radius: 0.625rem;
}
.store-footer.icons-rounded-full .s-social-link a,
.store-footer.icons-rounded-full .s-contacts-icon {
	border-radius: 10rem;
}


salla-modal .s-comments-item-images-slider {
    max-height: 70vh;
    overflow-y: scroll;
}
salla-trust-badges {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}
@media (max-width: 1024px) {
	salla-trust-badges {
	justify-content: center !important;
	}
}

.hdr-rad.hdr-small .app-inner:not(#splash-screen-2 ~ .app-inner) #mainnav:not(.fixed-pinned) {
	border-radius: var(--header-rad);
}
.categs_slider.grid {
	display: flex;
}
.hrz-pc--no-bg .s-product-card-image {
	background: transparent;
}
.footer-social-outer {margin-top: 8px;}
@media (max-width: 492px) {
	.footer-social-outer {margin-top: 12px;}
}

.my-lazy:not(.my-loaded) { 
	max-height: 100px;
}

.s-quantity-input-input, .salla-input-quantity-pp .s-quantity-input-input {
	border-radius: 0;
}
.dark .s-reviews-summary-recommendation-percentage {color: var(--dm-text-main) !important}
.dark .s-comments-item-user-info-name-with-margin {color: var(--dm-text-main) !important}
.dark .s-cart-item-offers-regular-price, .dark .s-cart-item-offers-free-label, .dark .s-cart-item-offers-line{color: var(--dm-text-main) !important}

#app .points-ways__list .way-item {
	background-color: var(--lm-bg-sec);
}
#app .points-ways__list .way-item__content p {
	color: var(--color-primary);
}
.loyalty .loyalty__banner,
.loyalty .product-entry {
	background-color: var(--lm-bg-sec);
}
.loyalty__banner-content .info p {
	color: var(--color-primary);
}
body .s-gifting-widget .s-list-tile-item {
	background-color: var(--lm-bg-sec);
}
#app .s-gifting-modal .s-modal-body {
	background-color: var(--lm-bg-sec);
}
#app .s-gifting-modal .s-modal-close {
	background-color: var(--lm-bg-sec);
}
#app .s-file-upload-wrapper .filepond--drop-label,
#app .s-gifting-modal .s-form-control {
	background: var(--lm-bg-color);
}
#app .s-gifting-filepond-placeholder-text {
	color: var(--color-primary);
}
.dark .s-button-primary-outline {
	fill: var(--dm-text-main) !important;
	color: var(--dm-text-main) !important;
}
#app.cart .loyalty_points-wrapper,
#app.cart .s-list-tile-item,
#app .main-content.blog-category {
	background-color: var(--lm-bg-sec);
}

/* tempo style to hide arrows when images length is 1 only */
.product-single .details-slider [tabindex="-1"] {
	display: none !important;
}

.no-ratings-arrows .s-block-special-testimonials .s-slider-nav-arrow {
	display: none !important;
}
body .brand-logo {
	min-width: 50px;
}

salla-conditional-offer.s-conditional-offer-container {
	background: var(--lm-bg-sec);
}
salla-conditional-offer.s-conditional-offer-container .s-conditional-offer-progress-line-inactive {
	background: var(--color-primary) !important;
    opacity: 0.2 !important;
}
.dark salla-conditional-offer.s-conditional-offer-container {
	background: var(--dm-bg-sec) !important;
	color: var(--dm-text-main) !important;
}
.dark salla-conditional-offer.s-conditional-offer-container .s-conditional-offer-progress-line-inactive {
	background: var(--dm-text-main) !important;
    opacity: 0.2 !important;
}
.dark salla-conditional-offer.s-conditional-offer-container .s-conditional-offer-progress-line-active {
		background: var(--dm-text-main) !important;
}
.dark salla-conditional-offer.s-conditional-offer-container .s-conditional-offer-title,
.dark salla-conditional-offer.s-conditional-offer-container .s-conditional-offer-checkpoint-label {
	color: var(--dm-text-main) !important;}


.dark .s-breadcrumb-arrow svg {
	fill: var(--dm-text-sec) !important;
}
.dark salla-breadcrumb {
	color: var(--dm-text-sec) !important;
}

.dark .s-loyalty-program-banner-container {
	border-width: 0;
	color: var(--dm-text-main) !important;
	background-color: var(--dm-bg-sec) !important; 
}
.dark .s-loyalty-program-banner-container-banner-subtitle,
.dark .s-loyalty-program-banner-container-banner-title {
		color: var(--dm-text-sec) !important;
}
.dark .s-loyalty-program-banner-container button {
	background-color: var(--dm-bg-main) !important;
	color: var(--dm-text-main) !important;
	border-width:0;
}

.s-cookies-bar {
	bottom: 0 !important;
	transition: bottom 0.3s ease-in-out !important;
	bottom: calc(var(--mobile-nav-height, 0) - 0.6rem) !important;
}

.fixed-pinned-cls .s-cookies-bar {
	bottom: calc(var(--mobile-nav-height, 0) - 0.6rem) !important;
}

.header-mob-localization-btn {
	width: 2.5rem;
	min-width: 2.5rem;
}

[dir="ltr"] .mburger {
	margin-right: 0.5rem;
}
[dir="rtl"] .mburger {
	margin-left: 0.5rem;
}

.brands-index .brand-item,
.brands-index .brand-char,
.brands-index .brands-nav__item,
.brands-single .brand-page__banner img,
.brands-single header.flex-col > img {
	background-color: var(--lm-bg-sec);
}


.s-conditional-offer-checkpoint {
	border-color: var(--dm-text-sec) !important;
	border-width: 1px !important;
}
.dark .s-conditional-offer-active-checkpoint {
	border-color: var(--dm-text-main) !important;
	border-width: 2px !important;
}


body .s-bought-together-entry {
	background-color: var(--lm-bg-sec);
}
body .s-bought-together-subtitle {
	color: var(--color-primary);
	opacity: 0.8;
}
.dark body .s-bought-together-entry {
	background-color: var(--dm-bg-sec) !important;
	color: var(--dm-text-main) !important;
}
.dark body .s-bought-together-subtitle {
	color: var(--dm-text-sec) !important;
}
.dark .s-bought-together-title {
	color: var(--dm-text-main) !important;}


body .s-loyalty-program-banner-container {
	background-color: var(--lm-bg-sec);
}
body .s-loyalty-program-banner-container-banner-subtitle {
	color: var(--color-primary);
	opacity: 0.8;
}


.s-installment-mispay-wrapper, .s-installment-madfu-wrapper, .s-installment-emkan-wrapper, .s-installment-rajehi-wrapper {
	background-color: var(--lm-bg-sec);
}
.dark .s-installment-mispay-wrapper, .dark .s-installment-madfu-wrapper, .dark .s-installment-emkan-wrapper, .dark .s-installment-rajehi-wrapper {
	background-color: var(--dm-bg-sec) !important;
}

.dark .s-loyalty-points-banner-container,
.dark .s-cashback-banner-container {
	background-color: var(--dm-bg-sec) !important;
	color: var(--dm-text-main) !important;
}
.dark .s-loyalty-points-banner-description,
.dark .s-cashback-banner-value {
	color: var(--dm-text-main) !important;
	opacity: 0.9;
}

body .s-loyalty-program-panel-exchange-wrapper {
	background-color: transparent;
	box-shadow: none;
}
.dark .s-loyalty-program-panel-exchange-wrapper {
	background-color: var(--dm-bg-sec) !important;
}
.dark .s-loyalty-program-panel-exchange-wrapper .s-button-primary-link {
	color: var(--dm-text-main) !important;
}

.dark .s-list-tile-item {
	background-color: var(--dm-bg-sec) !important;
}

.s-gifting-widget-vertical .s-list-tile-item-subtitle {
	color: var(--color-primary);
	opacity: 0.8;
}
.dark .s-gifting-widget-vertical .s-list-tile-item-subtitle,
.dark .s-gifting-widget-vertical .s-list-tile-item-title svg {
	fill: var(--dm-text-main) !important;
	color: var(--dm-text-main) !important;
}

body .product-entry__image {
	background-color: transparent;
}


body .s-orders-table-tbody-tr {
    background-color: var(--lm-bg-sec) !important;
    border-color: var(--lm-bg-color) !important;
    color: var(--color-primary) !important;
}

.order-details-table .single-order-header-item .text-primary,
body .s-orders-status-container,
body .s-orders-mobile-title {
	color: var(--color-primary-light) !important;
}


#app .s-order-totals-card-panel {
	background-color: var(--lm-bg-sec) !important;
    color: var(--color-primary-light) !important;
}
#app .s-order-totals-card-label,
#app .s-order-totals-card-row-inner,
#app .s-order-totals-card-total,
#app .s-order-totals-card-list, .dark #app .s-order-totals-card-label {
	color: var(--color-primary) !important;
}

`;
// append style element
document.getElementsByTagName("head")[0].appendChild(style);

// fix mobile nav, tempoo
// function ready() {
// 	document.body.classList.add("mobile-nav-is-on");
// }
// if (document.readyState == "loading") {
// 	document.addEventListener("DOMContentLoaded", ready);
// } else {
// 	ready();
// }
// fix mobile nav, tempo

function changeATC() {
	// if client wants to change atc text
	if (document.body.classList.contains("atc-2")) {
		// if client has set atc text using custom-title1
		// first get custom title 1
		let computedStyleBody = window.getComputedStyle(document.getElementById("app"));
		let atc_word = computedStyleBody.getPropertyValue("--custom-title1");
		if (atc_word.length > 2) {
			// if custome title exist and has more than 2 char
			document.body.style.setProperty("--custom-title1", `${atc_word}`);
			document.body.classList.add("custom-atc-text");
			// let atc = atc_word.slice(1, -1);
		} else {
			//if not
			console.log("could not find atc text using c-data or the one came from Aali theme, make sure to type a text in (custom-title1)");
		}
	}
}
if (document.readyState == "complete") {
	changeATC();
} else {
	document.addEventListener("DOMContentLoaded", changeATC);
}

// document.querySelectorAll(".load-img-onclick").forEach((link) => {
// 	link.addEventListener("click", (event) => {
// 		event.preventDefault();
// 		let modal = document.querySelector("#" + link.dataset.modalId),
// 			img = modal.querySelector("img"),
// 			imgSrc = img.dataset.src;
// 		modal.open();

// 		if (img.classList.contains("loaded")) return;

// 		img.src = imgSrc;
// 		img.classList.add("loaded");
// 	});
// });

// page visitors, works only foe stores that have noti moni app
if (document.body.classList.contains("visits")) {
	function getPageVisitors() {
		const visitorsCounter = document.querySelector(
			"body.product-single .products_visitors_counter .altumcode-products-visitors-counter-main .altumcode-products-visitors-counter-number",
		);
		if (visitorsCounter) {
			const visitorsCount = visitorsCounter.textContent;
			console.log(visitorsCount);

			// Create a new div to hold the visitors count
			const newDiv = document.createElement("div");
			newDiv.classList.add("visitors-count");
			newDiv.innerHTML = `
			<div class="bg-white py-2.5 mb-5 rounded-md w-full inline-flex text-sm dm-bg-sec dm-text-main">
				<div class="visitors-count-inner px-4 text-red-400 t-red w-full">
      				<div class="page-visitors-wrapper flex justify-between w-full">
        				<div class="right-wrapper">
          					<i class="sicon-eye align-middle rtl:ml-1.5 ltr:mr-1.5 dm-text-main"></i>
          					<span class="page-visitors-word mx-2 dm-text-main">
            					يشاهد هذا المنتج الآن
          					</span>
        				</div>
        				<span class="page-visitors-count">
        				  ${visitorsCount}
        				</span>
     			 	</div>
	  			</div>
	  		</div>
    `;

			// Get the "salla-installment" element and append the new div
			const salla_installment = document.querySelector(".product-single .main-content salla-installment");
			if (salla_installment) {
				salla_installment.insertAdjacentElement("beforebegin", newDiv);
			}

			// Hide the original visitors counter
			const productsVisitorsCounter = document.querySelector(".products_visitors_counter");
			if (productsVisitorsCounter) {
				productsVisitorsCounter.style.display = "none !important";
				productsVisitorsCounter.classList.add("hide-visits-aali");
			}
		}
	}

	// observe it
	let second_step = false;
	let page_visitors_interval = setInterval(() => {
		let counter_of_visitors = document.querySelector(
			"body.product-single .products_visitors_counter .altumcode-products-visitors-counter-main .altumcode-products-visitors-counter-number",
		);
		if (counter_of_visitors && !second_step) {
			// clearInterval(page_visitors_interval);
			getPageVisitors();
			console.log("page visitors found");
			second_step = true;
		}
		// if (second_step) {
		// 	// continue getting new values
		// 	// get new target counter
		// 	let new_ele = document.querySelector("body.product-single .page-visitors-count");
		// 	if (new_ele && counter_of_visitors) {
		// 		console.log(counter_of_visitors);
		// 		new_ele.innerHTML = counter_of_visitors.textContent;
		// 	}
		// }
		if (!document.body.classList.contains("product-single")) {
			clearInterval(page_visitors_interval);
		}
	}, 200);
	// observe it
}
// page visitors, works only foe stores that have noti moni app

// if (document.querySelector("#more-content")) {
// 	const articleElement = document.querySelector("#more-content");
// 	if (articleElement) {
// 		const lastChild = articleElement.lastChild;
// 		if (lastChild && lastChild.nodeType === Node.TEXT_NODE && lastChild.textContent.trim() === "قراءة المزيد") {
// 			articleElement.removeChild(lastChild);
// 			articleElement.style.maxHeight = "unset";
// 		}
// 	}
// }

// document.addEventListener("DOMContentLoaded", function () {
// 	const productDescription = document.querySelector(".product__description");

// 	if (productDescription) {
// 		const article = productDescription.querySelector("article");

// 		// Set classes on the article
// 		if (article) {
// 			article.className = "article article--main relative overflow-hidden transition-all max-h-0 duration-300 p-4";
// 			// Set initial max-height to 2.5rem
// 			article.style.maxHeight = "2.5rem";

// 			// Remove the first child if it's a text node
// 			if (article.firstChild && article.firstChild.nodeType === Node.TEXT_NODE) {
// 				article.removeChild(article.firstChild);
// 			}
// 		}

// 		// Add click event for the "Show More" button
// 		const btnShowMore = document.getElementById("btn-show-more");
// 		if (btnShowMore) {
// 			btnShowMore.addEventListener("click", function (e) {
// 				if (article) {
// 					// Add the class to the button
// 					e.target.classList.add("is-expanded");

// 					// Set the max-height to the scrollHeight to expand the content
// 					article.style.maxHeight = article.scrollHeight + "px";
// 				} else {
// 					// Remove the button if no article is found
// 					e.target.remove();
// 				}
// 			});
// 		}
// 	}
// });

// window.initial_home_tabs = function (_this) {
// 	document.body.classList.add(`tabs-on`);
// 	let selected = _this.getAttribute("selected") || 1;
// 	document.body.classList.add(`tab-${selected}-on`);
// 	window.set_home_tabs(`tab-${selected}`);
// };

// if (!document.body.classList.contains("options-on")) {
// 	let fixOptionsInterval = setInterval(() => {
// 		let options = document.querySelector("salla-product-options");
// 		if (options) {
// 			options.removeAttribute("config");
// 			clearInterval(fixOptionsInterval);
// 		}
// 	}, 10);
// }
// let fixQuantity = setInterval(() => {
// 	let form = document.querySelector('.product-form');
// 	if (form) {
// 		form.setAttribute('onchange', 'salla.product.getPrice(new FormData(event.currentTarget))');
// 		clearInterval(fixQuantity);
// 	}
// 	if (!document.body.classList.contains('product-single')) {
// 		clearInterval(fixQuantity);
// 	}
// }, 10);

// function fixFooterDes() {
// 	let store_des = document.querySelector('.store-footer .max-w-sm.leading-6.mb-6 ');
// 	if (store_des) {
// 		if (store_des.textContent.includes('insert')) {
// 			store_des.textContent = store_des.textContent.slice(0, 10).slice(10).slice(-5).slice(5, 15);
// 		}
// 	}
// }

function handleDP_Link(order_num) {
	let DP_link = document.createElement("div");
	DP_link.setAttribute("class", "flex space-x-2 rtl:space-x-reverse justify-between");
	DP_link.innerHTML = `<a href="https://${window.location.host}/${document.documentElement.lang}/orders/digital/${order_num}" class="text-primary" target="_blank">
	المحتوى الرقمي
	<i class="sicon-arrow-up-left"></i>
	</a>`;
	let h1 = document.querySelector(".main-content h1");
	DP_link.insertAdjacentElement("afterbegin", h1);
	document.querySelector(".main-content").insertAdjacentElement("afterbegin", DP_link);
}
function addDigitalProductsLink() {
	let printBtn = document.querySelector("[onclick*='print']");
	if (printBtn) {
		let onclickContent = printBtn.getAttribute("onclick");
		if (onclickContent) {
			onclickContent = onclickContent.split("/print/")[1].split("'")[0];
			if (onclickContent) {
				console.log(onclickContent);
				if (typeof (onclickContent / 1) === "number") {
					handleDP_Link(onclickContent);
				}
			}
		}
	}
}
if (document.body.classList.contains("customer-orders-single") && document.body.classList.contains("dp")) {
	addDigitalProductsLink();
}
// fix product des that has &nbsp;
// document.querySelectorAll('.product__description').forEach((element) => {
// 	element.innerHTML = element.innerHTML.replace(/&nbsp;/g, ' ').trim();
// });

// document.addEventListener('DOMContentLoaded', function () {
// 	let counter = 1;

// 	// نحصل على كل عناصر faq-item في كل الأقسام
// 	const allFaqInputs = document.querySelectorAll('.faq-item input[type="checkbox"]');

// 	allFaqInputs.forEach((input) => {
// 		const parent = input.closest('.faq-item');
// 		const label = parent.querySelector('label');

// 		if (label) {
// 			const newId = `faq-fixed-${counter}`;

// 			// تحديث id و for
// 			input.id = newId;
// 			label.setAttribute('for', newId);

// 			counter++;
// 		}
// 	});
// });

// document.addEventListener('DOMContentLoaded', function () {
// 	// Find all elements with onclick containing 'cart.deleteItem'
// 	const deleteButtons = document.querySelectorAll('[onclick*="cart.deleteItem"]');

// 	deleteButtons.forEach(function (button) {
// 		// Get the current onclick attribute value
// 		const currentOnclick = button.getAttribute('onclick');

// 		// Use regex to find and replace the number parameter with string
// 		// This pattern matches: deleteItem(number) and converts to deleteItem('number')
// 		const updatedOnclick = currentOnclick.replace(/salla\.cart\.deleteItem\((\d+)\)/g, "salla.cart.deleteItem('$1')");

// 		// Update the onclick attribute with the new string parameter
// 		button.setAttribute('onclick', updatedOnclick);

// 		console.log('Updated onclick from:', currentOnclick);
// 		console.log('Updated onclick to:', updatedOnclick);
// 	});

// 	console.log(`Updated ${deleteButtons.length} cart delete buttons`);
// });

function fix_footer_title() {
	let footer_contact_title = document.querySelector(".footer-contact .hidden .s-contacts-title");
	if (!footer_contact_title) return;
	footer_contact_title.innerHTML = footer_contact_title.innerHTML.split("hide-title=")[0];
}
document.addEventListener("DOMContentLoaded", fix_footer_title);
setTimeout(() => {
	fix_footer_title();
}, 2000);

(function () {
	if (!document.body.classList.contains("cart")) return;

	var fabBuffer = 10;

	function getMobileNav() {
		return (
			document.querySelector(".mobile-nav-inner") ||
			document.querySelector("#mobile-nav") ||
			document.querySelector(".mobile-nav-outer") ||
			document.querySelector(".mobile-nav")
		);
	}

	function isVisible(el) {
		if (!el) return false;
		var style = window.getComputedStyle(el);
		if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") {
			return false;
		}
		var rect = el.getBoundingClientRect();
		return rect.width > 0 && rect.height > 0;
	}

	function getMobileNavHeight() {
		// Desktop / no mobile nav → 0
		if (window.innerWidth > 1023) return 0;

		var nav = getMobileNav();
		if (!nav || !isVisible(nav)) return 0;

		var height = nav.offsetHeight || Math.round(nav.getBoundingClientRect().height) || 0;
		if (height < 8) return 0;

		var buffer =
			typeof window.mob_height_related_val === "number" ? window.mob_height_related_val : 0;
		return height + buffer;
	}

	function queryInCartCard(card, selector) {
		var el = card.querySelector(selector);
		if (!el && card.shadowRoot) el = card.shadowRoot.querySelector(selector);
		return el;
	}

	function getCartFabBottom(card, navPad) {
		if (!card) return Math.max(navPad, fabBuffer);

		var cardRect = card.getBoundingClientRect();
		var topEdge = cardRect.top;
		var sheetWrap = queryInCartCard(card, ".s-cart-summary-card-sheet-wrap");

		if (sheetWrap) {
			var sheetRect = sheetWrap.getBoundingClientRect();
			if (sheetRect.height > 0) topEdge = Math.min(topEdge, sheetRect.top);
		}

		return Math.max(navPad, window.innerHeight - topEdge + fabBuffer);
	}

	function setCartMobileNavPad() {
		var navPad = getMobileNavHeight();
		var card = document.querySelector("salla-cart-summary-card");
		var fabBottom = getCartFabBottom(card, navPad);

		document.body.style.setProperty("--aali-mobile-nav-pad", navPad + "px");
		document.body.style.setProperty("--aali-cart-fab-bottom", fabBottom + "px");
		// Keep theme consumers in sync; 0 when no mobile menu
		document.body.style.setProperty("--mobile-nav-height", navPad + "px");
	}

	function schedule() {
		setCartMobileNavPad();
		[100, 300, 600, 1000].forEach(function (delay) {
			setTimeout(setCartMobileNavPad, delay);
		});
	}

	function bindCard(card) {
		if (!card || card.__aaliCartNavPadBound) return;
		card.__aaliCartNavPadBound = true;

		if (typeof ResizeObserver !== "undefined") {
			var ro = new ResizeObserver(setCartMobileNavPad);
			ro.observe(card);
			var sheetWrap = queryInCartCard(card, ".s-cart-summary-card-sheet-wrap");
			if (sheetWrap) ro.observe(sheetWrap);
		}

		card.addEventListener("transitionend", setCartMobileNavPad);
	}

	function watchCard() {
		var card = document.querySelector("salla-cart-summary-card");
		if (card) {
			bindCard(card);
			setCartMobileNavPad();
			return;
		}
		if (typeof MutationObserver === "undefined") return;

		var observer = new MutationObserver(function () {
			var found = document.querySelector("salla-cart-summary-card");
			if (!found) return;
			bindCard(found);
			setCartMobileNavPad();
			observer.disconnect();
		});
		observer.observe(document.body, { childList: true, subtree: true });
	}

	schedule();
	watchCard();
	document.addEventListener("DOMContentLoaded", function () {
		watchCard();
		schedule();
	});
	window.addEventListener("load", schedule);
	window.addEventListener("resize", setCartMobileNavPad);

	document.addEventListener("click", function (e) {
		if (!e.target.closest("salla-cart-summary-card")) return;
		schedule();
	});
})();

/* TEMP: remove after 2026-08-11 23:30 (Arabia) — product card options hotfix */
(function () {
	var expiresAt = new Date("2026-08-11T23:30:00+03:00");
	if (Date.now() >= expiresAt.getTime()) return;

	window.run_product_card = function (card) {
		var on =
			window.product_options_in_pc === true ||
			window.product_options_in_pc === 1 ||
			window.product_options_in_pc === "1" ||
			window.product_options_in_pc === "true";

		if (on || card.dataset.pcFixed) return;
		card.dataset.pcFixed = "1";

		// 1) remove options
		card.querySelectorAll("salla-product-options").forEach(function (el) {
			el.remove();
		});

		// 2) move ATC outside the form
		var form = card.querySelector("form.product-form");
		var oldBtn = card.querySelector(".btn--add-to-cart");
		if (!form || !oldBtn || !card.product) return;

		oldBtn.remove();

		var wrap = document.createElement("div");
		wrap.className = "btn btn--floated btn--add-to-cart";
		wrap.innerHTML =
			'<salla-add-product-button class="w-full aaliicon-add-to-cart-outer" product-id="' +
			card.product.id +
			'" product-type="' +
			(card.product.type || "") +
			'" loader-position="end"></salla-add-product-button>';

		form.insertAdjacentElement("afterend", wrap);
	};
})();

(function () {
	// Aali: guest login uses .header-signInBtn (+ shared salla-user-menu login classes)
	function isLoggedIn() {
		try {
			if (window.salla && salla.config && typeof salla.config.isGuest === "function" && !salla.config.isGuest()) {
				return true;
			}
		} catch (e) {}

		return !!document.querySelector("salla-user-menu .s-user-menu-trigger");
	}

	function hideLoginIfLoggedIn() {
		if (!isLoggedIn()) return;

		// Hide guest sign-in only — keep .s-user-menu-trigger (account avatar)
		document
			.querySelectorAll(
				'salla-user-menu .header-signInBtn, salla-user-menu [slot="login-btn"], salla-user-menu .s-user-menu-login-btn, .header-signInBtn'
			)
			.forEach(function (el) {
				if (el.closest(".s-user-menu-trigger")) return;
				el.style.display = "none";
			});
	}

	function run() {
		hideLoginIfLoggedIn();
		[500, 1500, 3000].forEach(function (delay) {
			setTimeout(hideLoginIfLoggedIn, delay);
		});
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", run);
	} else {
		run();
	}

	window.addEventListener("load", run);

	if (window.salla && salla.event && salla.event.on) {
		salla.event.on("auth::login", hideLoginIfLoggedIn);
		salla.event.on("profile::info.fetched", hideLoginIfLoggedIn);
	}

	if (typeof MutationObserver !== "undefined") {
		var scheduled = false;
		var observer = new MutationObserver(function () {
			if (scheduled) return;
			scheduled = true;
			requestAnimationFrame(function () {
				scheduled = false;
				hideLoginIfLoggedIn();
			});
		});
		observer.observe(document.documentElement, { childList: true, subtree: true });
	}
})();

/* elia cookies (1858040761): add WhatsApp to footer salla-social from store API */
(function () {
	var ELIA_STORE_ID = 1858040761;

	var WHATSAPP_SVG =
		'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">' +
		'<title>whatsapp</title>' +
		'<path d="M16 2c-7.732 0-14 6.268-14 14 0 2.472 0.644 4.792 1.772 6.808l-1.868 6.832 7.018-1.836c1.956 1.072 4.188 1.684 6.578 1.684 7.732 0 14-6.268 14-14s-6.268-14-14-14zM16 27.2c-2.172 0-4.208-0.596-5.956-1.632l-0.428-0.252-4.164 1.088 1.112-4.060-0.276-0.44c-1.14-1.812-1.788-3.952-1.788-6.228 0-6.18 5.020-11.2 11.2-11.2s11.2 5.020 11.2 11.2-5.020 11.2-11.2 11.2zM23.296 19.936c-0.316-0.156-1.868-0.924-2.156-1.028-0.288-0.108-0.5-0.156-0.712 0.156s-0.816 1.028-1 1.24c-0.184 0.212-0.368 0.236-0.684 0.080s-1.336-0.492-2.544-1.568-0.94-0.836-1.576-1.868-1.76-2.184s-0.020-0.488 0.136-0.644c0.14-0.14 0.316-0.368 0.476-0.552 0.16-0.184 0.212-0.316 0.316-0.524 0.104-0.208 0.052-0.392-0.028-0.548s-0.712-1.716-0.976-2.352c-0.256-0.608-0.516-0.524-0.712-0.536-0.184-0.010-0.396-0.012-0.608-0.012s-0.552 0.080-0.844 0.392c-0.292 0.316-1.116 1.088-1.116 2.652s1.144 3.076 1.304 3.288c0.16 0.212 2.248 3.432 5.444 4.812 0.76 0.328 1.352 0.524 1.816 0.672 0.764 0.244 1.46 0.208 2.008 0.128 0.612-0.092 1.868-0.764 2.132-1.504 0.264-0.74 0.264-1.376 0.184-1.504s-0.292-0.212-0.608-0.368z"></path>' +
		"</svg>";

	function isEliaStore() {
		try {
			return Number(salla.config.get("store.id")) === ELIA_STORE_ID;
		} catch (e) {
			return false;
		}
	}

	function getWhatsAppNumber() {
		try {
			var direct = salla.config.get("store.contacts.whatsapp");
			if (direct) return String(direct).trim();

			var contacts = salla.config.get("store.contacts");
			if (contacts && contacts.whatsapp) return String(contacts.whatsapp).trim();
		} catch (e) {}

		return "";
	}

	function toWaMeUrl(number) {
		var digits = String(number).replace(/\D/g, "");
		return digits ? "https://wa.me/" + digits : "";
	}

	function addWhatsAppToSocial() {
		if (!isEliaStore()) return;

		var number = getWhatsAppNumber();
		var href = toWaMeUrl(number);
		if (!href) return;

		document.querySelectorAll("salla-social .s-social-list").forEach(function (ul) {
			if (ul.querySelector("[data-aali-whatsapp]") || ul.querySelector('a[href*="wa.me"]')) return;

			var li = document.createElement("li");
			li.className = "s-social-link";
			li.innerHTML =
				'<a href="' +
				href +
				'" rel="noopener" target="_blank" title="whatsapp" aria-label="whatsapp" data-aali-whatsapp="1">' +
				'<span class="s-social-icon">' +
				WHATSAPP_SVG +
				"</span></a>";
			ul.appendChild(li);
		});
	}

	function run() {
		if (!window.salla || !salla.onReady) {
			setTimeout(run, 100);
			return;
		}

		salla.onReady(function () {
			if (!isEliaStore()) return;
			addWhatsAppToSocial();
			[500, 1500, 3000].forEach(function (delay) {
				setTimeout(addWhatsAppToSocial, delay);
			});
		});
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", run);
	} else {
		run();
	}

	window.addEventListener("load", run);
})();
