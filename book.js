function turn(left, right, header = true) {
  let leftpage = document.getElementById('left');
  leftpage.innerHTML = header ? `<u>${left}</u><br>` + document.getElementById(left).innerHTML : document.getElementById(left).innerHTML;
  leftpage.scrollTop = 0;
  let rightpage = document.getElementById('right');
  rightpage.innerHTML = header ? `<u>${right}</u><br>` + document.getElementById(right).innerHTML : document.getElementById(right).innerHTML;
  rightpage.scrollTop = 0;
}
