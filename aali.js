// you can use this file to fix issues directly for all theme users, great for quick fixes before salla accept fixes.

// add style element
var style = document.createElement("style");
// add type using setAttribute

style.setAttribute("type", "text/css");

// add css content

style.innerHTML = `
/*
.cart .container:not(.tempo-class-3945) .main-content form + div.cart-banners-after-items {
    display: none;
}
.cart .container:not(.tempo-class-3945) .main-content form:first-of-type + div.cart-banners-after-items {
    display: block;
}

.cart .container:not(.tempo-class-3945) .main-content .cart-banners-before-items {
    display: none;
}
.cart .container:not(.tempo-class-3945) .main-content .cart-banners-before-items:first-of-type {
    display: block;
}
*/


[class="preview__inner"] {
	background-color: #fff;
}
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

function tempoFunction() {
	let i = 1;
	if (document.body.classList.contains("logo_centered")) {
		let i = 0;
	}
	let menuToggler = document.querySelectorAll(".s-user-menu-toggler");
	if (menuToggler[i] && menuToggler[i].classList.contains("opened")) {
		// if menu is opened
		let user_menu_close_btn = document.querySelectorAll(".s-user-menu-dropdown-header-close");
		if (user_menu_close_btn.length > 0) {
			user_menu_close_btn[i].click();
		}
	} else {
		// if menu is closed
		let userMenuTrigger = document.querySelectorAll(".s-user-menu-trigger");
		if (userMenuTrigger.length > 0) {
			setTimeout(() => {
				userMenuTrigger[i].click();
			}, 20);
		}
	}
}
window.tempoFunction = tempoFunction;

// fix user menu when logo is not centered
let menu_trigger = document.querySelector('.mobile-nav--item[onclick*="User"]');
if (menu_trigger) {
	menu_trigger.setAttribute("onclick", "window.tempoFunction();");
}
// fix user menu when logo is not centered
