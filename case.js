function contents(id) {
  document.getElementsByClassName('scene')[0].innerHTML = document.getElementById(id == null ? 'closed' : 'open').innerHTML;
  document.getElementById('contents').innerHTML = document.getElementById(id).innerHTML
}
