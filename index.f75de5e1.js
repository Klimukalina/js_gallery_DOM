"use strict";
const thumbs = document.getElementById("thumbs");
const largeImg = document.getElementById("largeImg");
thumbs.addEventListener("click", (e)=>{
    e.preventDefault();
    largeImg.src = e.target.closest(".list-item__link").href;
});

//# sourceMappingURL=index.f75de5e1.js.map
