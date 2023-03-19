const navbar = document.getElementById("nav-list");
const menuBtn = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", () => {
	if (navbar.style.height == "0px") navbar.style.height = "40vh";
	else navbar.style.height = "0px";
});
