document.getElementById("calculateBtn").addEventListener("click", calculateVolume);

function calculateVolume() {
  const height = parseFloat(document.getElementById("height").value);
  const width = parseFloat(document.getElementById("width").value);
  const depth = parseFloat(document.getElementById("depth").value);

  const volume = height * width * depth;

  document.getElementById("result").textContent = `Volume: ${volume}`;
}
