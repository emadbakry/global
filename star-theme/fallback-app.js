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
