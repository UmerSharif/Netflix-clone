const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem() {}

tabItems.forEach(item => item.addEventListener("click", selectItem));
