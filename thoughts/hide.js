function hide() {
  if (window.top != window) {
    let backs = document.getElementsByClassName("back")
    backs[0].hidden = true
    backs[1].hidden = true
  }
}
