const canvas5 = document.getElementById('Clicks');
const ctx5 = canvas5.getContext('2d');
const width5 = canvas5.width;
const height5 = canvas5.height;

ctx5.strokeStyle = '#1B59F8'; // Change to the desired color
ctx5.lineWidth = 2;

// Create a function to draw the wave graph
function drawClicks() {
  ctx5.clearRect(0, 0, width, height);

  const frequency = 0.05; // Adjust the frequency of the wave
  const amplitude = 20; // Adjust the amplitude of the wave
  const yOffset = height / 2;

  ctx5.beginPath();
  ctx5.moveTo(0, yOffset);

  for (let x = 0; x < width5; x++) {
    const y = yOffset + amplitude * Math.sin(frequency * x);
    ctx5.lineTo(x, y);
  }

  // Draw the wave line
  ctx5.stroke();
}

// Call the function to draw the initial graph
drawClicks();

// Add fluctuations by redrawing the graph periodically
setInterval(drawClicks, 1000); // Adjust the interval as needed
