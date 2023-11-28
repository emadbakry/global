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
