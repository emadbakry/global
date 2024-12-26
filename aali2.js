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

@media (min-width: 640px) {
	.sticky-product-bar .sticky-product-bar__price {
		display: none !important;
	}
	#app.is-sticky-product-bar .sticky-product-bar__quantity {
		width: 100%;
	}
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
	display: block !important;
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

let fixOptionsInterval = setInterval(() => {
	let options = document.querySelector("salla-product-options");
	if (options) {
		options.removeAttribute("config");
		clearInterval(fixOptionsInterval);
	}
}, 10);

let fixQuantity = setInterval(() => {
	let form = document.querySelector(".product-form");
	if (form) {
		form.setAttribute("onchange", "salla.product.getPrice(new FormData(event.currentTarget))");
		clearInterval(fixQuantity);
	}
	if (!document.body.classList.contains("product-single")) {
		clearInterval(fixQuantity);
	}
}, 10);
