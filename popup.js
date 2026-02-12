function popup(id) {
  const popup = document.getElementById('popup');
  popup.innerHTML = document.getElementById(id).innerHTML;
  popup.hidden = false;
  popup.scrollTop = 0;
}

function pop() {
  document.getElementById('popup').hidden = false;
}
