// hi!, this i fallback script file to fix problems of theme directly when URGANT!
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

(function () {
	'use strict';
	if (window.__starProductSinglePriceHotfix) return;
	function productJsLoaded() { return typeof window.fslightbox !== 'undefined'; }
	function waitForAppAndSalla() {
		return new Promise((resolve, reject) => {
			let attempts = 0;
			function check() {
				if (typeof window.app !== 'undefined' && typeof salla !== 'undefined' && salla.onReady) {
					salla.onReady().then(resolve).catch(reject);
					return;
				}
				if (++attempts >= 100) return reject(new Error('[Star] price hotfix: app/salla not ready'));
				setTimeout(check, 100);
			}
			check();
		});
	}
	function init() {
		if (window.__starProductSinglePriceHotfix) return;
		const form = document.querySelector('.product-form');
		if (!form) return;
		if (productJsLoaded()) return;
		window.__starProductSinglePriceHotfix = true;
		app.watchElements({
			totalPrice: '.total-price',
			productWeight: '.product-weight',
			beforePrice: '.before-price',
			startingPriceTitle: '.starting-price-title',
		});
		function refreshPrice() {
			if (!form.reportValidity()) return;
			salla.product.getPrice(new FormData(form));
		}
		form.addEventListener('change', refreshPrice);
		form.querySelectorAll('salla-product-options').forEach((el) => el.addEventListener('changed', refreshPrice));
		form.querySelectorAll('salla-quantity-input').forEach((el) => {
			el.addEventListener('change', refreshPrice);
			el.addEventListener('changed', refreshPrice);
		});
		salla.event.on('product::price.updated.failed', () => {
			app.element('.price-wrapper')?.classList.add('hidden');
			app.element('.out-of-stock')?.classList.remove('hidden');
			app.anime?.('.out-of-stock', { scale: [0.88, 1] });
		});
		salla.product.event.onPriceUpdated((res) => {
			const data = res.data;
			const isOnSale = data.has_sale_price && data.regular_price > data.price;
			app.element('.out-of-stock')?.classList.add('hidden');
			app.element('.price-wrapper')?.classList.remove('hidden');
			app.startingPriceTitle?.classList.add('hidden');
			app.productWeight?.forEach?.((el) => { el.innerHTML = data.weight || ''; });
			app.totalPrice?.forEach?.((el) => { el.innerHTML = salla.money(data.price); });
			app.beforePrice?.forEach?.((el) => { el.innerHTML = salla.money(data.regular_price); });
			app.toggleClassIf?.('.price_is_on_sale', 'showed', 'hidden', () => isOnSale);
			app.toggleClassIf?.('.starting-or-normal-price', 'hidden', 'showed', () => isOnSale);
			app.anime?.('.total-price, .product-weight', { scale: [0.88, 1] });
		});
		console.info('[Star] product single price hotfix active');
	}
	function bootstrap() {
		if (!document.querySelector('.product-form')) return;
		waitForAppAndSalla().then(init).catch((e) => console.warn(e.message));
	}
	document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', bootstrap) : bootstrap();
})();
