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
	function hideLoginIfLoggedIn() {
		var loggedIn =
			(window.salla && salla.config && typeof salla.config.isGuest === "function" && !salla.config.isGuest()) ||
			!!document.querySelector("salla-user-menu .s-user-menu-trigger");

		if (!loggedIn) return;

		// Hide guest sign-in only — keep .s-user-menu-trigger (account avatar)
		document
			.querySelectorAll(
				'salla-user-menu [slot="login-btn"], salla-user-menu .s-user-menu-login-btn'
			)
			.forEach(function (el) {
				el.style.display = "none";
			});
	}

	function run() {
		hideLoginIfLoggedIn();
		setTimeout(hideLoginIfLoggedIn, 500);
		setTimeout(hideLoginIfLoggedIn, 1500);
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", run);
	} else {
		run();
	}

	if (window.salla && salla.event && salla.event.on) {
		salla.event.on("auth::login", hideLoginIfLoggedIn);
		salla.event.on("profile::info.fetched", hideLoginIfLoggedIn);
	}
})();

