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
`;
// append style element

document.getElementsByTagName("head")[0].appendChild(style);

// fix header burger icon being hidden

let b_icon = document.querySelector(`.store-header  .header-menu-icon`);

// remove ssssicon-menu class
b_icon.classList.remove("ssssicon-menu");
// if does not contain class starts with sicon
if (!b_icon.classList.contains("sicon")) {
	// if has svg inside
	if (b_icon.querySelector("svg")) {
		// do nothing
	} else {
		// add sicon class
		b_icon.classList.add("sicon-right");
	}
}
