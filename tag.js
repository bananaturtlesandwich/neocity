function filter(tag) {
  for (const element of document.querySelectorAll("[tags]")) {
    const tags = element.getAttribute('tags');
    element.hidden = !(tag == "all" || tags.includes(tag));
  }
  const desc = document.getElementById("desc");
  if (desc != null) desc.innerHTML = document.getElementById(tag).innerHTML;
}
