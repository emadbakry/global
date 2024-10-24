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

[dir="rtl"] .header-innerLeft .text-xl + salla-cart-summary {
	margin-right: 0.3rem;
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


/* all below codes is in the theme: 11 august 4 am */
/* all below codes is in the theme: 11 august 4 am */
/* all below codes is in the theme: 11 august 4 am */
/* all below codes is in the theme: 11 august 4 am */
/* all below codes is in the theme: 11 august 4 am */


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
/* later */
[dir="rtl"] .sm-price custom-salla-product-card .price-wrapper .t-red + .before-price.text-sm {
	font-size: 0.60rem;
	margin-right: 0.20rem;
}
[dir="rtl"] .sm-price custom-salla-product-card .price-wrapper .color-danger {
	font-size: 1rem;
}
/* later */
/* the above is tranfered to theme */

.dark .sq-awesome-banners.section-is-slider .s-slider-block__title {
	color: var(--dm-text-main) !important;
}

/* later */
.hdr-small .top-navbar {
	padding: 0;
}
	/* later */


#wa-widget-send-button {
	bottom: calc(var(--mobile-nav-height) + 1rem) !important;
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






/* tempo classes for digital card */

.s-product-options-digital-card-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem
}

.s-product-options-digital-card-option {
    display: flex;
    height: -moz-fit-content;
    height: fit-content;
    min-height: 40px;
    min-width: 100px;
    max-width: calc((100% - 1rem) / 3);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 0.375rem;
    padding: 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
    outline-style: solid;
    outline-width: 1px;
    outline-color: #e5e7eb
}

.s-product-options-digital-card-option * {
    pointer-events: none
}

.s-product-options-digital-card-option:has(input:checked) {
    color: var(--color-primary-dark);
    outline-style: solid;
    outline-width: 1px;
    outline-color: #414042;
    outline-color: var(--color-primary)
}

.s-product-options-country-flag {
    height: 24px;
    width: 24px;
    border-radius: 9999px
}

.s-product-options-digital-card-out-of-stock {
    height: 2.5rem
}

.s-product-options-digital-card-option input {
    all: unset
}

.s-product-options-digital-card-option input:checked {
    all: unset
}

.s-product-options-digital-card-option input:invalid {
    all: unset
}

@media (min-width: 640px) {
    .s-product-options-option-booking .s-product-options-option-content {
        margin-top:-2.5rem
    }
}

.s-product-options-digital-card-option-stock-out {
    opacity: 0.4
}

/* tempo classes for digital card */



/* tempo styles for ratings edit */
.s-rating-modal-product-details-main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
	
#app .s-rating-modal-product {
    display: flex;
    flex-direction: column;
}

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

html:not(.dark) .rating-header {
    color: var(--color-primary, #444444);
}
/* tempo styles for ratings edit */


.sub-nav-header .categ-entry h3 {
	line-height: normal;
}

#app .mobile-menu .close-mobile-menu {
	display: none !important;
}
#app.mm-ocd-opened .mobile-menu .close-mobile-menu {
	display: none !important;
}



@media only screen and (min-width: 1024px) {
    #app .footer-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .footer-container > div {
        grid-column: span 1;
    }
}


.dark #app.red-sold-quan .sold-times-wrapper .sicon-fire,
.dark #app.red-sold-quan .sold-word,
.dark #app.red-sold-quan .sold-times .injaz_count {
	color: var(--red-color, red) !important;
}

.s-block-division + .s-block {
	z-index: 2;
}

@media only screen and (max-width: 1024px) {
	.prod-single-centered .ql-video {
		text-align: center;
		margin: auto;
	}
}

.mySlider .brand-item img.bg-contain {
    object-fit: contain;
}
.mySlider .brand-item img:not(.bg-contain) {
    object-fit: cover;
}

body .question-outer {
	font-family: inherit;
}

.-mt-8 {
	margin-top: -2rem;
}
@media (max-width: 767px) {
	.md\:-mt-8 {
		margin-top: -2rem;
	}
}

.small-p-title custom-salla-product-card .title {
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
    line-height: normal;
}

body:not(.cls7864) .store-header .sicon-shopping-basket {
	transform: scale(0.92);
}


.sq-awesome-banners .banner-outer .banner-texts .banner__title {
	line-height: normal;
}

.product-block salla-rating-stars {
	display: flex;
	margin: 0.3rem 0;
}

.s-cart-summary-wrapper .cart-sum-icon {
	transform: scale(0.85);
}

body:not(.cls-promotion1).product-single .sidebar .promotion-title {
	background-color: var(--badge-bg-color, red);
    color: #ffffff;
    color: var(--badge-text-color, #ffffff);
}

.p-card-centered .product-block salla-rating-stars {
	justify-content: center;
}


.pc-less-spaces custom-salla-product-card.product-block .title {
	line-height: normal;
}


.fire .sold-times-wrapper .sicon-fire:before {
	display: none;
}
.fire .sold-times-wrapper .sicon-fire {
	margin-top: -6px;
	display: inline-block;
	width: 20px;
	height: 20px;
	background-image:url('https://raw.githubusercontent.com/theme-aali/videos/main/aali/fire.svg');
	background-repeat: no-repeat;
	background-position: center;
}

.hdr-srch-left .sicon-search {
    margin-bottom: -3px
}


.simple-brand-shape .product-brand-second-word,
.simple-brand-shape .product-brand-first-word,
.simple-brand-shape .product-brand-content h4 {
	display: none;
}

#app .product-brand-wrapper.simple-brand-shape {
	border: none;
    background: transparent !important;
	padding: 0;
}


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
			"body.product-single .products_visitors_counter .altumcode-products-visitors-counter-main .altumcode-products-visitors-counter-number"
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
			"body.product-single .products_visitors_counter .altumcode-products-visitors-counter-main .altumcode-products-visitors-counter-number"
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

document.addEventListener("DOMContentLoaded", function () {
	const productDescription = document.querySelector(".product__description");

	if (productDescription) {
		const article = productDescription.querySelector("article");

		// Set classes on the article
		if (article) {
			article.className = "article article--main relative overflow-hidden transition-all max-h-0 duration-300 p-4";
			// Set initial max-height to 2.5rem
			article.style.maxHeight = "2.5rem";

			// Remove the first child if it's a text node
			if (article.firstChild && article.firstChild.nodeType === Node.TEXT_NODE) {
				article.removeChild(article.firstChild);
			}
		}

		// Add click event for the "Show More" button
		const btnShowMore = document.getElementById("btn-show-more");
		if (btnShowMore) {
			btnShowMore.addEventListener("click", function (e) {
				if (article) {
					// Add the class to the button
					e.target.classList.add("is-expanded");

					// Set the max-height to the scrollHeight to expand the content
					article.style.maxHeight = article.scrollHeight + "px";
				} else {
					// Remove the button if no article is found
					e.target.remove();
				}
			});
		}
	}
});

window.initial_home_tabs = function (_this) {
	document.body.classList.add(`tabs-on`);
	let selected = _this.getAttribute("selected") || 1;
	document.body.classList.add(`tab-${selected}-on`);
	window.set_home_tabs(`tab-${selected}`);
};

salla.onReady(() => {
	window.showPreview = function (target) {
		target.classList.add("s-button-loader");
		let productId = target.dataset.id;
		let productImg = target.dataset.img; // you may need it later
		let previewModal = document.getElementById("preview-modal");
		previewModal.classList.add("showPreview");
		salla.product
			.getDetails(productId, [
				"images",
				"sold_quantity",
				"category",
				"options",
				"brand",
				"tags",
				"notify_availability",
				"rating",
				"donation",
			])
			.then((response) => {
				console.log(response.data);
				console.log(response);
				if (response.status == 200) {
					let product = response.data;
					document.body.classList.add("preview-is-on");
					previewModal.classList.add("transitionPreview");
					previewModal.classList.add("transitionPreview2");
					// show preview modal
					let content = `
			                <div onclick="hidePreview()" class="preview__close btn--close border border-2 border-gray-100 btn--close !hidden md:!flex">
								<i class="text-lg align-text-bottom sicon-cancel"></i>
							</div>
			 <salla-slider
			      id="main-slider-modal"
			      class="home-slider main-slider ${product.images.length == 1 ? "only-one-img" : ""}"
			      auto-play
			      ${product.images.length > 1 ? "loop" : ""}
				  listen-to-thumbnails-option
			      type="fullwidth">
			        <div slot="items">
			            ${product.images.map((image, i) => {
										return `
			                <div class="swiper-lazy-wrap w-full min-h-[200px] lg:min-h-[200px] " data-slid-index="${i}" data-img-id="${image.id}">
			                    <div data-background="${image.url}" name="${product.name}" class="swiper-lazy"></div>

			                </div>
			           `;
									})}
			        </div>
			    </salla-slider>
			<div class="pm-content">
				<div class="prodContentTop flex relative justify-end">
						<salla-button class="btn--wishlist mx-2 s-button-wrap hydrated ${
							salla.storage.get("salla::wishlist", []).includes(product.id) ? "is-added" : "not-added"
						}" id="popup-wishlist-btn-${product.id}" data-id="${product.id}" onclick="salla.wishlist.toggle(${
						product.id
					})" shape="icon" fill="outline" loader-position="center" color="light" size="medium" width="normal">

                    	    <i class="sicon-heart"></i>
						</span>

						</salla-button> 
						<salla-social-share 
						platforms="facebook,twitter,whatsapp,email,copy_link"
						class="mx-2"
						url="${product.url}"
						url-name="${product.name}"
						>

						</salla-social-share>
				</div>
				<h2 class="pm-content__title">${product.name}</h2>

				 <div class="sold-times-wrapper flex my-4 justify-between w-fit">
					${
						product.sold_quantity
							? `
                                    <div class="right-wrapper">
                                        <i class="sicon-fire rtl:ml-1.5 ltr:mr-1.5"></i>
                                    	<span class="sold-word mx-2">
                                        	${salla.lang.get("pages.products.sold")}
										</span>
                                    </div>
                                    <span class="sold-times">
                                        <salla-counter
										on="true"
										count_to="${product.sold_quantity}"
										speed="60"
										>
										<div class="injaz_count">${product.sold_quantity}</div>
									</salla-counter>
                                    </span>
										`
							: ""
					}
                </div>
					${
						product.rating
							? `
					<div class="pm-content__rating">
						<salla-rating-stars value="${product.rating.stars}"
						reviews="${product.rating.count}">
						</salla-rating-stars>
					</div>
					`
							: ""
					}
				<div class="pm-content__price my-2">
						 <h4 class="not-total-price ${product.is_on_sale ? "text-red-500 t-red" : ""} font-bold text-xl inline-block">
                                    ${
																			typeof product.price == "object"
																				? `${product.price.amount} ${salla.config.currency().symbol}`
																				: `
                                    ${product.price} ${salla.config.currency().symbol}
									`
																		}
                                </h4>
                                ${
																	product.is_on_sale
																		? `
                                    <span class="not-before-price line-through">
                                        ${product.regular_price}${salla.config.currency().symbol} 
										</span>`
																		: ""
																}

						<div class="line" style="border-bottom:1px solid #e5e5e5; padding-bottom:1rem;"></div>
						${
							product.discount_ends && product.discount_ends > Math.floor(Date.now() / 1000)
								? `
							<div class="count-down_wrapper ">
								<salla-count-down
								date="${new Date(product.discount_ends * 1000).toLocaleString("en-US", { timeZone: "UTC" })}"
								color="#baf2e5"
								boxed=true
								digits="en"
								labeled="true"
								size="md">
								</salla-count-down>
							</div>
								`
								: ""
						}

				</div>
				<div class="pm-content__description">${product.description.replace(/<\/?[^>]+(>|$|\s\/>)/g, " ").slice(0, 150)}...</div>
				<a href="${product.url}" class="preview--more-btn btn !justify-start my-2">
					<i class="sicon-share mx-1"></i>
					<span>
						${salla.lang.get("pages.products.read_more")}
					</span>
				</a>




			
					<form class="form product-form" enctype="multipart/form-data" method="post"
                      onchange="salla.product.getPrice(new FormData(event.currentTarget))"
                      onsubmit="return salla.form.onSubmit('cart.addItem', event)" >
                    <input type="hidden" name="id" value="${product.id}">
					
					<salla-product-options options="${product.options}" product-id="${product.id}">
						</salla-product-options>
                    <section class="sticky-product-barrrrrrr p-5 rounded-md rounded-b-none">
						 
                        ${
													product.is_hidden_quantity || product.type === "booking"
														? `<input type="hidden" value="1" name="quantity"/>`
														: `
                            <div class="sticky-product-bar__quantity !mb-4 center-between">
                                <label class="form-label font-bold">
                                    ${salla.lang.get("pages.products.quantity")}
                                </label>
                                <salla-quantity-input max="9999" value="1" name="quantity"
                                                      class="border-gray-200 flex justify-end"></salla-quantity-input>
                            </div>`
												}
                        <div class="sticky-product-bar__price center-between">
                            <label class="form-label">
                                <b class="block">
                                    ${salla.lang.get("pages.products.price")}
                                </b>
                            </label>
                            <div class="rtl:space-x-reverse space-x-1">
                                <h4 class="total-price ${product.is_on_sale ? "text-red-400 t-red" : ""} font-bold text-xl inline-block">
								${
									typeof product.price == "object"
										? `${product.price.amount} ${salla.config.currency().symbol}`
										: `
                                    ${product.price} ${salla.config.currency().symbol}
									`
								}
                                </h4>
                                ${
																	product.is_on_sale
																		? `
                                    <span class="before-price text-gray-400 line-through">
                                        ${product.regular_price}${salla.config.currency().symbol} 
										</span>`
																		: ""
																}
                            </div>
                        </div>
                        <salla-add-product-button
                                quick-buy
                                support-sticky-bar="false"
                                amount="${product.base_currency_price}"
                                class="mt-5 w-full sticky-product-bar__btn"
                                product-status="${product.status}"
                                product-type="${product.type}"
                                product-id="${product.id}"
                                loader-position="end"
                                type="submit"
                                width="wide"
								product-status="${product.status}"
                                
                                ${
																	product.notify_availability
																		? `
                                    ${product.notify_availability.subscribed ? "is-subscribed" : ""}
                                    channels="${product.notify_availability.channels.join("")}"
                                    subscribed-options="${JSON.stringify(product.notify_availability.subscribed_options)}"
                                    ${product.notify_availability.options ? "notify-options-availability" : ""}`
																		: ""
																}
																${product.add_to_cart_label}
																>
                        </salla-add-product-button>
						
                    </section>
                   
                </form>
					<salla-quick-order class="mt-5 md:-mb-2 block"></salla-quick-order>
					<div class="line" style="border-bottom:1px solid #e5e5e5; padding-bottom:1rem;"></div>
				
			</div>

			`;
					// console.log(product.base_currency_price);
					let previewInner = document.querySelector(".preview__inner");
					previewInner.innerHTML = content;

					target.classList.remove("s-button-loader");

					// end if status 200
				} else {
					target.classList.remove("s-button-loader");
					previewModal.classList.remove("showPreview");
				}
			}); // end fetch
	};
	// end
});
