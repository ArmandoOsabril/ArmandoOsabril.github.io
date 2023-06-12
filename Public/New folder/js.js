function Menu(e) {
  let list = document.querySelector("ul");
  let nav = document.getElementById("navbar");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[70px]"),
      list.classList.add("opacity-100"),
      nav.classList.add("bg-[#F5F5F5]"))
    : ((e.name = "menu"),
      list.classList.remove("top-[70px]"),
      list.classList.remove("opacity-100"),
      nav.classList.remove("bg-[#F5F5F5]"));
}
