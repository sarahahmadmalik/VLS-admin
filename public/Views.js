
const canvas = document.getElementById('waveGraph');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Set the graph color
ctx.strokeStyle = '#FF0000';
ctx.lineWidth = 2;

// Create a function to draw the wave graph
function drawWaveGraph() {
  ctx.clearRect(0, 0, width, height);

  const frequency = 0.05; // Adjust the frequency of the wave
  const amplitude = 20; // Adjust the amplitude of the wave
  const yOffset = height / 2;

  ctx.beginPath();
  ctx.moveTo(0, yOffset);

  for (let x = 0; x < width; x++) {
    const y = yOffset + amplitude * Math.sin(frequency * x);
    ctx.lineTo(x, y);
  }

  // Draw the wave line
  ctx.stroke();
}

// Call the function to draw the initial graph
drawWaveGraph();

// Add fluctuations by redrawing the graph periodically
setInterval(drawWaveGraph, 1000); // Adjust the interval as needed