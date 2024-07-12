// eslint-disable-next-line no-unused-vars
function searchCommands() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const commandSections = document.querySelectorAll(".commands .command");

  commandSections.forEach((command) => {
    const text = command.innerText.toLowerCase();
    if (text.includes(filter)) {
      command.style.display = "";
    } else {
      command.style.display = "none";
    }
  });
}
