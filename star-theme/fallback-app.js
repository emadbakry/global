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

(function () {
	var INTERVAL_MS = 20;
	var MAX_MS = 10000;
	var AFTER_FIND_MS = 500;
	var started = Date.now();
	var done = false;

	function statusKey(id) {
		return "statusAd-" + id;
	}

	function isDismissed(id) {
		if (!id) return false;
		return localStorage.getItem(statusKey(id)) === "dismissed";
	}

	function markDismissed(id) {
		if (!id) return;
		localStorage.setItem(statusKey(id), "dismissed");
	}

	function resizeHost(host) {
		if (!host) return;

		var visible = [];
		host.querySelectorAll(".s-advertisement").forEach(function (ad) {
			if (ad.getAttribute("data-star-ad-hidden") === "1") return;
			if (ad.style.display === "none") return;
			if (ad.hasAttribute("hidden")) return;
			visible.push(ad);
		});

		if (!visible.length) {
			host.style.height = "0px";
			host.style.opacity = "0";
			host.style.overflow = "hidden";
			host.style.pointerEvents = "none";
		} else {
			var h = 0;
			visible.forEach(function (ad) {
				h += ad.offsetHeight || ad.scrollHeight || 0;
			});
			host.style.height = h + "px";
			host.style.opacity = "1";
			host.style.overflow = "";
			host.style.pointerEvents = "";
		}

		if (typeof window.setHeaderHeight === "function") {
			window.setHeaderHeight();
		}
	}

	function hideAd(ad, host) {
		if (!ad) return;
		ad.style.display = "none";
		ad.setAttribute("hidden", "");
		ad.setAttribute("data-star-ad-hidden", "1");
		markDismissed(ad.getAttribute("data-id"));
		resizeHost(host || ad.closest("salla-advertisement"));
	}

	function applyStoredDismissals(host, ads) {
		// Skip first ad — Salla owns it
		for (var i = 1; i < ads.length; i++) {
			var ad = ads[i];
			var id = ad.getAttribute("data-id");
			if (isDismissed(id)) {
				ad.style.display = "none";
				ad.setAttribute("hidden", "");
				ad.setAttribute("data-star-ad-hidden", "1");
			}
		}
		resizeHost(host);
	}

	function bindExtraAds() {
		var host = document.querySelector("salla-advertisement");
		if (!host) return false;

		var ads = host.querySelectorAll(".s-advertisement");
		if (ads.length <= 1) {
			console.log("[star-ads] only one ad — skip");
			return true;
		}

		applyStoredDismissals(host, ads);

		for (var i = 1; i < ads.length; i++) {
			(function (ad) {
				if (ad.dataset.starAdCloseBound === "1") return;
				ad.dataset.starAdCloseBound = "1";

				var btn = ad.querySelector(".s-advertisement-action");
				if (!btn) return;

				btn.addEventListener(
					"click",
					function (e) {
						e.preventDefault();
						e.stopPropagation();
						hideAd(ad, host);
					},
					true
				);
			})(ads[i]);
		}

		console.log("[star-ads] ready — bound ads 2.." + ads.length);
		return true;
	}

	var timer = setInterval(function () {
		if (done) return;

		if (Date.now() - started > MAX_MS) {
			clearInterval(timer);
			console.warn("[star-ads] timed out waiting for salla-advertisement");
			return;
		}

		if (!document.querySelector("salla-advertisement")) return;

		done = true;
		clearInterval(timer);
		setTimeout(bindExtraAds, AFTER_FIND_MS);
	}, INTERVAL_MS);
})();

