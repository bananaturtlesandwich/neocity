function turn(left, right, header = true) {
  document.getElementById('left').innerHTML = header ? `<u>${left}</u><br>` + document.getElementById(left).innerHTML : document.getElementById(left).innerHTML;
  document.getElementById('right').innerHTML = header ? `<u>${right}</u><br>` + document.getElementById(right).innerHTML : document.getElementById(right).innerHTML;
}
