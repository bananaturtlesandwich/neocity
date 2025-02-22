function input(event) {
  const command = document.getElementById("console");
  command.style.width = (command.value.length) + 'ch';
}

function submit() {
  const console = document.getElementById("console");
  const command = document.getElementById("command");
  console.innerHTML += "> " + command.value + "<br>"
  const value = command.value.trim();
  if (value == "cls") console.innerHTML = ""
  else {
    const text = document.getElementById(value);
    console.innerHTML += text == null ? "not a valid command<br>" + document.getElementById("help").innerHTML : text.innerHTML;
  }
  command.value = "";
}
