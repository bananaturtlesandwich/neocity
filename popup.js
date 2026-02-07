function popup(id) {
  const popup = document.getElementById('popup');
  popup.hidden = false;
  popup.scrollTop = 0;
}

function pop() {
  document.getElementById('popup').hidden = false;
}

function dismiss() {
  document.getElementById('popup').hidden = true;
}
