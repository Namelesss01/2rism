const menuLinks = [...document.getElementsByClassName("menu_link")];

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.forEach((oldLink) => oldLink.classList.remove("active"));

    link.classList.add("active");
  });
});
