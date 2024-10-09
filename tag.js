function filter(tag) {
  for (const element of document.querySelectorAll("details")) {
    element.hidden = !element.getAttribute('tags').includes(tag);
  }
}
