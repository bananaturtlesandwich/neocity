function filter(tag) {
  for (const element of document.querySelectorAll("details")) {
    const tags = element.getAttribute('tags');
    if (tags == null) continue;
    element.hidden = tag != "all" && !tags.includes(tag);
  }
  document.getElementById("desc").innerHTML = document.getElementById(tag).innerHTML;
}
