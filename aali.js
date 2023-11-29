// you can use this file to fix issues directly for all theme users, great for quick fixes before salla accept fixes.

// add style element
var style = document.createElement("style");
// add type using setAttribute

style.setAttribute("type", "text/css");

// add css content

style.innerHTML = `
.store-header .mburger i {
    color: var(--header-text-color);
}
.cart .container:not(.tempo-class-3945) .main-content form + div.cart-banners-after-items {
    display: none;
}
.cart .container:not(.tempo-class-3945) .main-content form:first-of-type + div.cart-banners-after-items {
    display: block;
}
/* for before banners */
.cart .container:not(.tempo-class-3945) .main-content .cart-banners-before-items {
    display: none;
}
.cart .container:not(.tempo-class-3945) .main-content .cart-banners-before-items:first-of-type {
    display: block;
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
