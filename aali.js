// you can use this file to fix issues directly for all theme users, great for quick fixes before salla accept fixes.

// add style element
var style = document.createElement("style");
// add type using setAttribute

style.setAttribute("type", "text/css");

// add css content
style.innerHTML = `
/* hi */

@media only screen and (max-width: 492px) {
	.cntr .s-block--features__item:first-of-type {
		grid-column: span 2 !important;
	}
}
#app.app-body .global-animated-ads + .store-header {
	margin-top: 0;
}
#app.header-merged .global-animated-ads + .store-header {
	margin-top: 38px;
}

#app .s-product-options-colors-wrapper .s-product-options-colors-item {
	margin-left: 0.6rem; 
	margin-right: 0.6rem; 
 	width: auto;
}

.dark .product-single.product-des-force-light .product__description a {
	color: var(--dm-text-sec) !important;
	background-color: transparent !important;
}

.dark .product-single.product-des-force-light .product__description strong {
	color: var(--dm-text-sec) !important;
	background-color: transparent !important;
}

body:not(.fake-atc) .aaliicon-add-to-cart-outer .s-button-text:before {
	margin-left: 0.4rem;
}

body:not(.fake-atc) .aaliicon-add-to-cart-outer .s-button-text:before {
	transform: none;
	position: static;
	vertical-align: middle;
	margin-left: 4px;
	margin-top: -2px;
	display: inline-block;
}


.h-b .product-brand-wrapper {
	display: none;
}

[dir="ltr"] body:not(.fake-atc) .aaliicon-add-to-cart-outer .s-button-text:before {
	margin-right: 4px;
}


html:not(.dark) .product-single .total-price.t-red {
	color: var(--red-color,#ef4444);
}
.mob-n-li span {
	text-align: center;
}
/* test */
/*
body img.lazy*[data^="data"] {
    transform: scale(1.1);
}
body img.lazy.loaded {
    opacity: 1;
    transform: scale(1);
}
*/
/* test */
// .animated-ads--content li {
// 	animation-name: marquee !important;
// }
#app.app-body .s-block-fullscreen-banners.height-auto .bg__image video {
	position: relative;
}
custom-salla-product-card .price-wrapper .t-red + .before-price.text-sm {
	font-size: 0.8rem;
    margin-left: 0;
	display: inline-block;
}
#app.index .s-products-list-wrapper.s-products-list-horizontal-cards {
	grid-template-columns: repeat(1,1fr);
}
@media only screen and (min-width: 992px) {
	#app.index .s-products-list-wrapper.s-products-list-horizontal-cards {
		grid-template-columns: repeat(2,1fr);
	}
}
@media only screen and (min-width: 767px) {
	.before-after-wrapper {
		width: 66vmin;
    	margin: auto;
	}
}


.index#app #fullscreen-banner-0 .bg__image {
    height: 75vh;
    height: 80vh;
    height: var(--fs-desk-height,80vh);
    min-height: 10vh
}
@media only screen and (min-width: 492px) and (max-width:1024px) {
    .index#app #fullscreen-banner-0 .bg__image {
        height:90vh;
        height: var(--fs-tablet-height,90vh);
        min-height: 10vh
    }
}
@media only screen and (max-width: 492px) {
    .index#app #fullscreen-banner-0 .bg__image {
        height:90vh;
        height: var(--fs-mob-height,90vh);
        min-height: 12vh
    }
}

@media only screen and (max-width: 492px) {
	#app.prod_line_count_on.prod_vertical.p-line-count-mob-2.app-body.product-single .similar-products .s-products-slider-card  {
	    max-width: 50%;   
	}
}

.store-header .sicon-search {
	vertical-align: middle;
	display: flex;
}

html:not(.dark) .s-localization-modal-label {
	color: inherit !important;
}

.header-is-dark#app #mainnav .desktop-menu-item .sub-menu {
	background-color: var(--header-bg-color) !important;
    color: var(--header-text-color) !important;
}


body.p-thumbs-down.product-single .details-slider .s-slider-thumbs {
	position: static;
	top: unset;
}


/* tempo: cuz of loyalti */
.dark .cart .shadow-default.mb-5.rounded-md.p-3.xs\:p-7 {
	background-color: var(--dm-bg-sec) !important;
	color: var(--dm-text-main) !important;
}
.dark .cart salla-modal .s-loyalty-prize-item,
.dark .cart salla-modal salla-list-tile .s-list-tile-item,
.dark .cart .shadow-default.mb-5.rounded-md.p-3.xs\:p-7 .s-list-tile-item {
	background-color: transparent !important;
	color: var(--dm-text-main) !important;
}
.dark .cart salla-modal .s-loyalty-prize-item .s-loyalty-prize-item-subtitle {
	color: var(--dm-text-sec) !important;
}

.dark .s-loyalty-header-subtitle {
	color: var(--dm-text-main) !important;
}

.dark .s-modal-wrapper .s-tabs-header-item:not(.s-tabs-active) {
	background-color: var(--color-primary-d) !important;
}
/* tempo: cuz of loyalti */

#app .s-block--slider-with-bg .s-slider-block__display-all {
	padding-left: 1rem;
	padding-right: 1rem;
}
`;
// append style element
document.getElementsByTagName("head")[0].appendChild(style);

// fix mobile nav, tempo
function ready() {
	document.body.classList.add("mobile-nav-is-on");
}
if (document.readyState == "loading") {
	document.addEventListener("DOMContentLoaded", ready);
} else {
	ready();
}
// fix mobile nav, tempo
