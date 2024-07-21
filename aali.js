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

.dark .product-single.product-des-force-light:not(.cls-1) .product__description span {
	color: var(--dm-text-sec) !important;
	background-color: transparent !important;
}
.dark .product-single.product-des-force-light:not(.cls-2) .product__description strong {
	color: var(--dm-text-sec) !important;
	background-color: transparent !important;
}
.dark .product-single.product-des-force-light:not(.cls-3) .product__description a {
	color: var(--dm-text-sec) !important;
	background-color: transparent !important;
}

body:not(.fake-atc) .aaliicon-add-to-cart-outer .s-button-text:before {
	margin-left: 0.4rem;
}

.dark .s-quantity-input-decrease-button {
	fill: var(--dm-text-main, #ffffff);
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

[dir="rtl"] .product__description ul {
	margin-right: 22px;
}
[dir="ltr"] .product__description ul {
	margin-left: 22px;
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

/*
.s-product-options-colors-wrapper input[type=radio]+label span[style*="background-color: rgb(232, 232, 232)"]:after {
	background-color: #000000;
}
.s-product-options-colors-wrapper input[type=radio]+label span[style*="background-color: rgb(256, 256, 256)"]:after {
	background-color: #000000;
}
*/
#app .s-product-options-colors-wrapper input[type=radio]+label span:after {
	/* background: linear-gradient(45deg, black 0%, black 50%, #ffffff 50%) !important;*/
	border: 2px solid #111111;
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

/* for stores with custom atc text came from custom title 1 */
 
.custom-atc-text.atc-2#app .pm-content salla-add-product-button button[product-id].s-button-primary .s-button-text,
.custom-atc-text.atc-2#app custom-salla-product-card salla-add-product-button button[product-id].s-button-primary .s-button-text {
	font-size: 0;
}
.custom-atc-text.atc-2#app .pm-content salla-add-product-button button[product-id].s-button-primary .s-button-text:after,
.custom-atc-text.atc-2#app custom-salla-product-card salla-add-product-button button[product-id].s-button-primary .s-button-text:after {
	content: var(--custom-title1, "إضافة للسلة");
	font-size: 0.875rem;
	vertical-align: middle;
}

/*
@media only screen and (max-width: 767px) {
	#app.is-sticky-product-bar .sticky-product-bar salla-add-product-button button[product-id].s-button-primary .s-button-text:after {
		display: none;
	}
}
*/

/* for stores with custom atc text came from custom title 1 */


/* make product thumbs go down*/
.product-single.thumb-down .details-slider .s-slider-thumbs {
	position: static;
}
/* make product thumbs go down*/


body#app .s-block--features__item .feature-icon i {
	font-size: calc(var(--f-width,2rem)/3.5 + var(--f-height,2rem)/3.5);
}

[dir="rtl"] .header-innerLeft salla-cart-summary {
	margin-right: 0.7rem;
}

@media only screen and (min-width: 1024px) {
.s-block--one-wide-banner .f {
	padding-left: 10px;
	padding-right: 10px;
}
}


#app.btns-gradient .s-button-primary:not(.dm-btn-in-bg-sec) .s-button-text {
	color: var(--gradient-text-color) !important;
}


#app.btns-gradient.cart .cart-submit-wrap .s-button-element {
	border-radius: 0;
}
#app.btns-gradient .btn-gradient,
body#app.btns-gradient .s-button-primary {
	background: linear-gradient(45deg, var(--gradient-second), var(--gradient-first)) !important;
	border-width: 0 !important;
	color: var(--gradient-text-color) !important;
	fill: var(--gradient-text-color) !important ;
}

.dark .s-rating-stars-reviews {
	color: var(--dm-text-sec);
}

.s-block-awesome-btn button i {
	vertical-align: middle;
}

.mob-user--left-only .header-signInBtn {
	order: unset;
}

body.dm-icon-left .toggler-left {
	display: flex !important;
}

/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
[dir="rtl"] .product__description ol,
[dir="rtl"] .product__description ul {
	margin-right: 22px;
}
[dir="ltr"] .product__description ol,
[dir="ltr"] .product__description ul {
	margin-left: 22px;
}




#app.header-hidden.fixed-pinned-cls .store-header .inner {
	top: -250px;
}


@media only screen and (max-width: 640px) {
	.product-single.is-sticky-product-bar .sticky-product-bar .p-quan-container {
		display: flex;
	}
	.pm-content salla-add-product-button {
	flex-wrap: wrap;
	}
	.pm-content salla-add-product-button salla-quick-buy {
		margin-top: 0.8rem;
	}
}

.product-single .sticky-product-bar .p-quan-container {
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0.6rem;
}
.is-sticky-product-bar .sticky-product-bar salla-add-product-button {
	width: 100%;
}
.is-sticky-product-bar .sticky-product-bar {
	flex-direction: column;
}
.is-sticky-product-bar .sticky-product-bar .sticky-product-bar__quantity salla-quantity-input,
.is-sticky-product-bar .sticky-product-bar .sticky-product-bar__quantity .s-quantity-input-container,
.is-sticky-product-bar .sticky-product-bar .sticky-product-bar__quantity {
	width: 100%;
}
.is-sticky-product-bar .sticky-product-bar .sticky-product-bar__quantity .s-quantity-input-container {
	justify-content: space-between;
}

.s-add-product-button-main .s-add-product-button-mini-checkout-content {
	display: flex;
    align-items: center;
    flex-direction: row-reverse;
}

.s-add-product-button-main .s-add-product-button-mini-checkout-content svg {
	height: 1.2rem;
    width: 1.2rem;
    fill: currentColor;
	margin-right: 0.4rem;
}

[dir=rtl] .s-add-product-button-main .s-add-product-button-mini-checkout-content svg {
	margin-right: 0;
	margin-left: 0.4rem;
}


.pm-content salla-add-product-button .s-add-product-button-main,
.sticky-product-bar salla-add-product-button .s-add-product-button-main {
	width: 100%;
    display: flex;
    column-gap: 1rem;
    justify-content: space-between;
}
.is-sticky-product-bar .sticky-product-bar salla-add-product-button .s-add-product-button-main salla-button {
	width: auto;
	flex-grow: 1;
}
body .s-add-product-button-main salla-mini-checkout-widget {
	display: block;
	flex-grow: 1;
	flex-shrink: 0;
	--salla-fast-checkout-button-border-radius: var(--add-to-cart-radius, 4px);
}
.mobile-nav-is-on.show-mobile-nav.is-sticky-product-bar .sticky-product-bar {
	padding-bottom: calc(2px + var(--mobile-nav-height))!important;
}
[dir="rtl"] body.is-sticky-product-bar .sticky-product-bar salla-add-product-button {
	margin-right: 0;
	margin-left: 0;
	width: 100%;
}


@media only screen and (max-width: 380px) {
	.product-single:not(.rev-quk-btn-h) salla-add-product-button salla-mini-checkout-widget {
		--salla-fast-checkout-button-height: 34px;
	}
}

@media only screen and (min-width: 768px) {
	body .sticky-product-bar salla-add-product-button {
		flex-wrap: wrap;
		row-gap: 1rem;

	}
}


@media only screen and (max-width: 640px) {
	body.product-single.is-sticky-product-bar .wa-widget,
	body.product-single.is-sticky-product-bar .scroll-progress-wrapper {
		bottom: calc(var(--mobile-nav-height) + 6.5rem);
	}
	
}

@media only screen and (max-width: 767px) {
	body#app.hide-mob-header-cart.mobile_nav_cart_on .store-header salla-cart-summary {
		margin-right: 0;
		margin-left: 0;
	}
}

.dark .s-add-product-button-mini-checkout-content {
	color: var(--dm-text-main, #fff);
	border-color: var(--dm-text-main, #fff);
}
.dark body .s-add-product-button-main salla-mini-checkout-widget {
	--color-primary: var(--dm-text-sec, #fff);
}
 
custom-salla-product-card .showPreviewBtn {
	border-radius: var(--add-to-cart-radius,4px);
}


.mobile-menu .close-mobile-menu {
	display: block !important;
}

body.footer-cls-1 .footer-contact a {
	background-color: var(--footer-bg-color);
}

[dir="rtl"] .sm-price custom-salla-product-card .price-wrapper .t-red + .before-price.text-sm {
	font-size: 0.60rem;
	margin-right: 0.20rem;
}
[dir="rtl"] .sm-price custom-salla-product-card .price-wrapper .color-danger {
	font-size: 1rem;
}
/* the above is tranfered to theme */

.dark .sq-awesome-banners.section-is-slider .s-slider-block__title {
	color: var(--dm-text-main) !important;
}

.hdr-small .top-navbar {
	padding: 0;
}


#wa-widget-send-button {
	bottom: calc(var(--mobile-nav-height) + 1rem) !important;
}
@media only screen and (max-width: 640px) {
	body#app #wa-widget-send-button  {
        bottom:calc(var(--mobile-nav-height) + 7rem) !important;
    }
}

.sq-awesome-banners salla-slider[display-all-url] .s-slider-block__title {
	justify-content: space-between;
}

body .product-block .sale-ratio {
	font-weight: 600;
}
	
`;
// append style element
document.getElementsByTagName("head")[0].appendChild(style);

// fix mobile nav, tempoo
function ready() {
	document.body.classList.add("mobile-nav-is-on");
}
if (document.readyState == "loading") {
	document.addEventListener("DOMContentLoaded", ready);
} else {
	ready();
}
// fix mobile nav, tempo

function all() {
	let all_videos = document.querySelectorAll(".bg__image video");
	all_videos.forEach((video) => {
		let video_wrapper = video.querySelector(".bg__image");
		setTimeout(() => {
			if (document.body.classList.contains("vid")) {
				if (video) {
					video.removeAttribute("muted");
					video.play();
					setTimeout(() => {
						video.play();
					}, 3000);
				}
				if (video_wrapper) {
					video_wrapper.addEventListener("click", () => {
						if (video.paused) {
							video.play();
						} else {
							video.pause();
						}
					});
				}
			}
		}, 2000);
	});
}

// when loaded
if (document.readyState == "complete") {
	all();
} else {
	document.addEventListener("DOMContentLoaded", all);
}

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
