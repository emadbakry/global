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
	// Star: guest login uses [slot="login-btn"] (+ .s-user-menu-login-btn)
	function isLoggedIn() {
		try {
			if (window.salla && salla.config && typeof salla.config.isGuest === "function" && !salla.config.isGuest()) {
				return true;
			}
		} catch (e) {}

		return !!document.querySelector("salla-user-menu .s-user-menu-trigger");
	}

	function hideLoginIfLoggedIn() {
		if (!isLoggedIn()) return;

		// Hide guest sign-in only — keep .s-user-menu-trigger (account avatar)
		document
			.querySelectorAll(
				'salla-user-menu [slot="login-btn"], salla-user-menu .s-user-menu-login-btn'
			)
			.forEach(function (el) {
				if (el.closest(".s-user-menu-trigger")) return;
				el.style.display = "none";
			});
	}

	function run() {
		hideLoginIfLoggedIn();
		[500, 1500, 3000].forEach(function (delay) {
			setTimeout(hideLoginIfLoggedIn, delay);
		});
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", run);
	} else {
		run();
	}

	window.addEventListener("load", run);

	if (window.salla && salla.event && salla.event.on) {
		salla.event.on("auth::login", hideLoginIfLoggedIn);
		salla.event.on("profile::info.fetched", hideLoginIfLoggedIn);
	}

	if (typeof MutationObserver !== "undefined") {
		var scheduled = false;
		var observer = new MutationObserver(function () {
			if (scheduled) return;
			scheduled = true;
			requestAnimationFrame(function () {
				scheduled = false;
				hideLoginIfLoggedIn();
			});
		});
		observer.observe(document.documentElement, { childList: true, subtree: true });
	}
})();

