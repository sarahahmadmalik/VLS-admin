const canvas2 = document.getElementById('PlayGraph');
const ctx2 = canvas2.getContext('2d');
const width2 = canvas2.width;
const height2 = canvas2.height;

ctx2.strokeStyle = '#1B59F8'; // Change to the desired color
ctx2.lineWidth = 2;

// Create a function to draw the wave graph
function drawPlayGraph() {
  ctx2.clearRect(0, 0, width, height);

  const frequency = 0.05; // Adjust the frequency of the wave
  const amplitude = 20; // Adjust the amplitude of the wave
  const yOffset = height / 2;

  ctx2.beginPath();
  ctx2.moveTo(0, yOffset);

  for (let x = 0; x < width; x++) {
    const y = yOffset + amplitude * Math.sin(frequency * x);
    ctx2.lineTo(x, y);
  }

  // Draw the wave line
  ctx2.stroke();
}

// Call the function to draw the initial graph
drawPlayGraph();

// Add fluctuations by redrawing the graph periodically
setInterval(drawPlayGraph, 1000); // Adjust the interval as needed
