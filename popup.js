function popup(id) {
  const popup = document.getElementById('popup');
  popup.innerHTML = document.getElementById(id).innerHTML;
  popup.hidden = false;
  document.getElementById('close').hidden = false;
}

function dismiss() {
  document.getElementById('popup').hidden = true;
  document.getElementById('close').hidden = true;
}
