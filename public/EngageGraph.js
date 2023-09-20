const canvas3 = document.getElementById('EngageGraph');
const ctx3 = canvas3.getContext('2d');
const width3 = canvas3.width;
const height3 = canvas3.height;

ctx3.strokeStyle = '#1B59F8'; // Change to the desired color
ctx3.lineWidth = 2;

// Create a function to draw the wave graph
function drawEngageGraph() {
  ctx3.clearRect(0, 0, width, height);

  const frequency = 0.05; // Adjust the frequency of the wave
  const amplitude = 20; // Adjust the amplitude of the wave
  const yOffset = height / 2;

  ctx3.beginPath();
  ctx3.moveTo(0, yOffset);

  for (let x = 0; x < width3; x++) {
    const y = yOffset + amplitude * Math.sin(frequency * x);
    ctx3.lineTo(x, y);
  }

  // Draw the wave line
  ctx3.stroke();
}

// Call the function to draw the initial graph
drawEngageGraph();

// Add fluctuations by redrawing the graph periodically
setInterval(drawEngageGraph, 1000); // Adjust the interval as needed
