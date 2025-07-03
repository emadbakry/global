// hi!, this i fallback script file to fix problems of theme directly when URGANT!
console.log("hi!");

let style = document.createElement("style");

style.innerHTML = `
.mm-ocd__content:has(.brands-menu) {
  overflow: unset;
}
 
#offers-menu.h-screen {
  height: auto;
}

div.swal2-container {
  z-index: 99999;
}`;

document.getElementsByTagName("head")[0].appendChild(style);

const starCoupon = document.querySelector("star-coupons");

if (starCoupon) {
	// إضافة دالة جديدة
	starCoupon.myCustomFunction = function () {
		console.log("This is my custom function");
	};

	// تعديل الدالة الموجودة
	const originalApplyCode = starCoupon.applyCode.bind(starCoupon);
	starCoupon.applyCode = async function (button) {
		console.log("hi - before original function");
		await originalApplyCode(button);
		console.log("hi - after original function");
	};
}
