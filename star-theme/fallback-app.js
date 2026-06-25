// hi!, this i fallback script file to fix problems of theme directly when URGANT!

(function () {
	if (window.__starCustomElementsDefinePatched) return;
	window.__starCustomElementsDefinePatched = true;

	const nativeDefine = customElements.define.bind(customElements);
	customElements.define = function (name, constructor, options) {
		if (customElements.get(name)) return;
		return nativeDefine(name, constructor, options);
	};
})();

console.log('hi!');

let style = document.createElement('style');

style.innerHTML = `
.mm-ocd__content:has(.brands-menu) {
  overflow: unset;
}
 
#offers-menu.h-screen {
  height: auto;
}

div.swal2-container {
  z-index: 99999;
}
  

#app.show-search-results-as-prod-card .s-search-product-not-available[style*="block"] {
  filter: unset;
}
.store-footer .contact-social ul {
  justify-content: center;
}
.gov-details-section {
  flex-wrap: wrap;
}

.quick-categ-item img {
  width: 100%;
}
`;

document.getElementsByTagName('head')[0].appendChild(style);
