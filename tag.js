function filter(tag) {
  for (const element of document.querySelectorAll("details")) {
    element.hidden = tag != "all" && !element.getAttribute('tags').includes(tag);
  }
  document.getElementById("desc").innerHTML = document.getElementById(tag).innerHTML;
}
