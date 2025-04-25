let page = "product-index-search";
console.log("testttt");

// salla.onReady(() => {
salla.event.once("salla-products-list::products.fetched", (res) => {
	app.element(".main-content svg").innerHTML = "";
});
// });
