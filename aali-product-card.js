if (window.customCardProps?.custom_pc) {
	window.run_product_card = function (_this) {
		let lang = document.documentElement.getAttribute("lang");
		const remained = salla.lang.get("pages.products.remained");
		const donationPH = salla.lang.get("pages.products.donation_placeholder");
		const startingPrice = salla.lang.get("pages.products.starting_price");
		const outOfStock = salla.lang.get("pages.products.out_of_stock");
		const calories = salla.lang.get("pages.products.calories");

		// Custom props
		_this.product_preview_down = window.customCardProps?.product_preview_down;
		_this.p_atc_btn_hidden = window.customCardProps?.p_atc_btn_hidden;
		_this.product_preview_icon_hide = window.customCardProps?.product_preview_icon_hide;
		_this.preview_text = window.customCardProps?.preview_text;
		_this.is_price_ratio_on = window.customCardProps?.is_price_ratio_on;
		_this.price_ratio_place = window.customCardProps?.price_ratio_place;
		_this.price_ratio_word = window.customCardProps?.price_ratio_word;
		_this.small_atc = window.customCardProps?.small_atc;
		_this.show_pc_ratings = window.customCardProps?.show_pc_ratings;

		if (_this.show_pc_ratings === "hide") {
			_this.show_pc_ratings = false;
		}

		let product_ration_html;
		if (_this?.product?.is_on_sale) {
			_this.product_ratio_percent = Math.round(
				((_this.product?.regular_price - _this.product?.sale_price) / _this.product?.regular_price) * 100,
			);
			product_ration_html = `
                <div class="sale-ratio-wrapper ${
									_this.price_ratio_place === "down"
										? "price-ratio-down relative"
										: "price-ratio-over badge badge--ribbon badge--primary whitespace-nowrap absolute left-4 right-auto top-4"
								}">
                    <span class="sale-ratio">${_this.price_ratio_word}${_this.product_ratio_percent}%</span>
                </div>`;
		}

		_this.innerHTML = `
            <div class="${_this.horizontal ? `s-product-card-image flex` : ""} product-block__thumb relative ${
							_this.product.rating ? "has-rating" : ""
						}">
                ${
									_this.product.is_on_sale && _this.is_price_ratio_on && _this.price_ratio_place === "over" ? product_ration_html || "" : ""
								}
                ${
									_this.product.promotion_title
										? `<span class="badge badge--ribbon badge--primary absolute right-0 top-0 p-3 rounded-sm my-bg-light">${_this.product.promotion_title}</span>`
										: ""
								}
                ${
									_this.showQuantity && _this.product.quantity
										? `<span class="badge badge--ribbon badge--primary">${remained} ${_this.product.quantity}</span>`
										: ""
								}
                ${
									_this.showQuantity && _this.product.is_out_of_stock
										? `<div class="out-badge ${_this.horizontal ? "" : "max-w-[calc(100%-60px)]"}">${outOfStock}</div>`
										: ""
								}
                <a href="${_this.product.url}" class="thumb-wrapper px-0 flex flex-col" aria-label="${_this.product.name}">
                    <img class="lazy-load m-auto" width="200" height="200" src="https://cdn.salla.sa/form-builder/8GB0kPNvHGvpOmDhwK8bzTkUn8mgvV4d7K4YTKvM.png" data-src="${
											_this.product.image.url
										}" alt="${_this.product.image.alt}" />
                </a>
                ${
									_this.product_preview_down
										? ""
										: `<div onclick="window.showPreview(this)" data-id="${_this.product.id}" title="عرض سريع" data-img="${_this.product.image.url}" class="showPreviewBtn absolute"><i class="sicon-eye"></i></div>`
								}
            </div>
            ${
							_this.showWishlist
								? `<span class="btn--product-like"><salla-button loader-position="center" shape="icon" size="small" color="danger" class="btn--delete" onclick="salla.wishlist.remove(${_this.product.id})"><i class="sicon-cancel"></i></salla-button></span>`
								: ""
						}
            <div class="relative wide ${_this.horizontal ? "s-product-card-content" : "product-block-outer"} donating-wrap">
                <div class="product-block__info pb-1">
                    <a href="${_this.product.url}" class="product-title px-3">
                        <div class="product-category-name"></div>
                        <p class="product-subtitle pc-t">${_this.product.subtitle || ""}</p> 
                        <h2 class="title title--primary title--small my-2 pc-t">${_this.product.name}</h2>
                    </a>
                    ${
											_this.product.rating && _this.show_pc_ratings
												? `<span class="rating-wrapper pc-rating"><salla-rating-stars value="${_this.product.rating.stars}"></salla-rating-stars></span>`
												: ""
										}
                    ${
											_this.product.calories
												? `<div class="font-sm mt-5 mb-10"><i class="d-inline-block sicon-fire color-danger t-red mr-1 ml-0"></i><strong>${_this.product.calories}</strong> ${calories}</div>`
												: ""
										}
                    ${
											_this.product.is_donation
												? `<salla-progress-bar donation="${
														_this.product.is_donation
													}"></salla-progress-bar><div class="border-color mb-2.5 w-full">${
														_this.product.can_donate
															? `<label for="donation-amount" class="block text-sm mb-2.5">قيمة التبرع <span class="text-red-500 t-red">*</span></label><input type="text" data-digits id="donation-amount" name="donating_amount" class="h-9 form-input" placeholder="${donationPH}"/>`
															: ""
													}</div>`
												: ""
										}
                    <div class="price-wrapper mb-2.5 px-2">
                        ${
													_this.product.is_on_sale
														? `<span class="color-danger text-danger t-red text-primary text-lg font-bold">${salla.money(
																_this.product.sale_price,
															)}</span><small class="before-price pc-t text-sm mx-2 line-through">${salla.money(
																_this.product.regular_price,
															)}</small>`
														: _this.product.starting_price
															? `${startingPrice}<span class="pc-t mx-1">${salla.money(_this.product.starting_price)}</span>`
															: `<span class="pc-t">${salla.money(_this.product.price)}</span>`
												}
                        ${
													_this.product?.is_on_sale && _this.is_price_ratio_on && _this.price_ratio_place === "down"
														? product_ration_html || ""
														: ""
												}
                    </div>
                    ${
											!_this.hideAddBtn
												? `<div class="btn btn--floated btn--add-to-cart btn--add-to-cart ${
														_this.product.status === "out" ? "disabled" : ""
													}"><salla-add-product-button class="w-full aaliicon-add-to-cart-outer" product-status="${
														_this.product.status
													}" product-type="${_this.product.type}" product-id="${_this.product.id}" loader-position="end">${
														_this.product.add_to_cart_label || ""
													}</salla-add-product-button></div>`
												: ""
										}
                    ${
											!_this.product_preview_down
												? `<div onclick="window.showPreview(this);" data-id="${_this.product.id}" title="عرض سريع" data-img="${
														_this.product.image.url
													}" class="showPreviewBtn static preview-btn-down"><i class="sicon-eye mx-1 ${
														_this.product_preview_icon_hide ? "hidden" : ""
													}"></i><span class="mx-1">${_this.preview_text}</span></div>`
												: ""
										}
                </div>
            </div>`;
	};
}
