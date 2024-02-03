// you can use this file to fix issues directly for all theme users, great for quick fixes before salla accept fixes.

// add style element
var style = document.createElement("style");
// add type using setAttribute

style.setAttribute("type", "text/css");

// add css content

style.innerHTML = `
/*
@media only screen and (max-width: 492px) {
	.preview-modal salla-slider {
		min-height: unset;
	}
}
*/

@media only screen and (max-width: 1024px) {
	.app-body .mm-ocd--open .mobile-menu {
		display: block;
	}
}

#app .mm-ocd .mm-ocd__content #mobile-menu {
	background-color: var(--sidebar-bg-color) !important;
	color: var(--sidebar-text-color) !important;
}

@media only screen and (min-width: 1024px) {
	#app .s-block-division {
		margin-top: 2rem;
		margin-top: var(--mt-desk);
	}
}

/* tempo fix for fags container of login modal */

.dark .s-block--categories a.dm-text-main {
	background-color: var(--dm-bg-sec) !important;
}
body .s-modal-container {
  z-index:200;
}
html.dark .product-single .total-price {
	color: var(--preview-text-color) !important;
}
.modal-is-open .mobile-nav-inner  {
visibility: hidden !important;
}

.modal-is-open .scroll-progress-wrapper,
.modal-is-open .wa-widget-outer {
	visibility: hidden !important;
	transition: all 0.3s 0.1s !important;
}


.dark body .preview__inner {
	--preview-bg-color: var(--dm-menus-bg);
	--preview-text-color: var(--dm-menus-text);
	background-color: var(--preview-bg-color, #ffffff);
	color: var(--preview-text-color, #ffffff);
}
.dark .s-login-modal-tab .iti__flag-container {
	color: var(--dm-text-sec) !important;
}
.dark body[class*="product-index"] .s-block--testimonials .testimonial {
	background-color: var(--dm-bg-sec)!important;
}

.dark .sub-nav-header .categ-entry h3,
.dark #btn-show-more {
	color: var(--dm-text-main) !important;
	background-color: var(--dm-bg-sec) !important;
}

.small-atc custom-salla-product-card .before-price {
	display: block;
}

.dark .product-single salla-slider.details-slider .swiper-slide {
	background-color: var(--dm-bg-main) !important;
}
.dark .product-single .s-comments-product {
	background-color: var(--dm-bg-sec) !important;
}
.dark .index .testimonial {
	background-color: var(--dm-bg-sec) !important;
}
.dark .product-single .s-comments-product .flex span,
.dark .product-single .s-comments-product .flex h2 {
	color: var(--dm-text-main) !important;
}

// #app.index {
// 	background-color: #ffffff !important;
// }
			
.dark #app .enhanced-features .feature-icon[style*="transp"] {
	background-color: transparent !important;
}
.dark body#app .dm-btn-in-bg-sec {
    background: var(--dm-text-sec)!important;
    color: var(--dm-bg-main)!important;
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

// fix header burger icon being hidden

let br_icon = document.querySelector(`.store-header  .header-menu-icon`);

// remove ssssicon-menu class
br_icon.classList.remove("ssssicon-menu");
// if does not contain class starts with sicon
if (![...br_icon.classList].some((cls) => "sicon" === cls.slice(0, 5))) {
	// if has svg inside
	if (br_icon.querySelector("svg")) {
		// do nothing
	} else {
		// add sicon class
		br_icon.classList.add("sicon-right");
	}
}
