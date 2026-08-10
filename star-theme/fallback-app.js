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
	function isLoggedIn() {
		try {
			if (window.salla && salla.config && typeof salla.config.isGuest === "function" && !salla.config.isGuest()) {
				return true;
			}
		} catch (e) {}

		return !!(
			document.querySelector("salla-user-menu .s-user-menu-trigger") ||
			document.querySelector("salla-user-menu .s-user-menu-avatar") ||
			document.querySelector("salla-user-menu .s-user-menu-dropdown")
		);
	}

	function hideLoginIfLoggedIn() {
		if (!isLoggedIn()) return;

		// Hide guest sign-in only — keep .s-user-menu-trigger (account avatar)
		var selectors = [
			'salla-user-menu [slot="login-btn"]',
			"salla-user-menu .header-signInBtn",
			"salla-user-menu .s-user-menu-login-btn",
			"salla-user-menu .s-user-menu-login",
			".header-signInBtn",
			".s-user-menu-login-btn",
		];

		document.querySelectorAll(selectors.join(",")).forEach(function (el) {
			if (el.closest(".s-user-menu-trigger")) return;
			el.style.display = "none";
		});

		document.querySelectorAll("salla-user-menu a, salla-user-menu button, salla-user-menu .s-button").forEach(function (el) {
			if (el.closest(".s-user-menu-trigger") || el.closest(".s-user-menu-dropdown")) return;
			var text = (el.textContent || "").replace(/\s+/g, " ").trim();
			if (text === "تسجيل الدخول" || text === "Login" || text === "Sign in" || text === "Sign In") {
				el.style.display = "none";
			}
		});
	}

	function run() {
		hideLoginIfLoggedIn();
		[300, 800, 1500, 3000, 5000].forEach(function (delay) {
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

