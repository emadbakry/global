// you can use this file to fix issues directly for all theme users, great for quick fixes before salla accept fixes.

// add style element
var style = document.createElement("style");
// add type using setAttribute

style.setAttribute("type", "text/css");

// add css content
style.innerHTML = `
/* hi */

html:not(.dark) .product-single .total-price.t-red {
	color: var(--red-color,#ef4444);
}


.index#app #fullscreen-banner-0 .bg__image {
    height: 75vh;
    height: 80vh;
    height: var(--fs-desk-height,80vh);
    min-height: 20vh
}

@media only screen and (min-width: 492px) and (max-width:1024px) {
    .index#app #fullscreen-banner-0 .bg__image {
        height:90vh;
        height: var(--fs-tablet-height,90vh);
        min-height: 20vh
    }
}

@media only screen and (max-width: 492px) {
    .index#app #fullscreen-banner-0 .bg__image {
        height:90vh;
        height: var(--fs-mob-height,90vh);
        min-height: 20vh
    }
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

html:not(.dark) #app.product-card-bg-on .s-block--slider-with-bg {
	background-color: transparent;
	
}
.dark #app .s-block--slider-with-bg {
	background-color: transparent;
}
#app.index .s-products-list-wrapper.s-products-list-horizontal-cards {
	grid-template-columns: repeat(1,1fr);
}
@media only screen and (min-width: 992px) {
	#app.index .s-products-list-wrapper.s-products-list-horizontal-cards {
		grid-template-columns: repeat(2,1fr);
	}
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
