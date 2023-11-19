const togglebar = document.getElementById("togglebar")
const navlist = document.getElementById("navlist")

togglebar.addEventListener("click", () => {
  navlist.classList.toggle("navlist-active")
})