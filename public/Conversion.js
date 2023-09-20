const canvas6 = document.getElementById('conversion');
const ctx6 = canvas6.getContext('2d');
const width6 = canvas5.width;
const height6 = canvas5.height;

ctx6.strokeStyle = '#1B59F8'; // Change to the desired color
ctx6.lineWidth = 2;

// Create a function to draw the wave graph
function drawConversion() {
  ctx6.clearRect(0, 0, width, height);

  const frequency = 0.05; // Adjust the frequency of the wave
  const amplitude = 20; // Adjust the amplitude of the wave
  const yOffset = height / 2;

  ctx6.beginPath();
  ctx6.moveTo(0, yOffset);

  for (let x = 0; x < width6; x++) {
    const y = yOffset + amplitude * Math.sin(frequency * x);
    ctx6.lineTo(x, y);
  }

  // Draw the wave line
  ctx6.stroke();
}

// Call the function to draw the initial graph
drawConversion();

// Add fluctuations by redrawing the graph periodically
setInterval(drawConversion, 1000); // Adjust the interval as needed
