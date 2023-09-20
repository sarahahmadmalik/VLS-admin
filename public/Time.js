const canvas4 = document.getElementById('Time');
const ctx4 = canvas4.getContext('2d');
const width4 = canvas4.width;
const height4 = canvas4.height;

ctx4.strokeStyle = '#FF0000'; // Change to the desired color
ctx4.lineWidth = 2;

// Create a function to draw the wave graph
function drawTime() {
  ctx4.clearRect(0, 0, width, height);

  const frequency = 0.05; // Adjust the frequency of the wave
  const amplitude = 20; // Adjust the amplitude of the wave
  const yOffset = height / 2;

  ctx4.beginPath();
  ctx4.moveTo(0, yOffset);

  for (let x = 0; x < width4; x++) {
    const y = yOffset + amplitude * Math.sin(frequency * x);
    ctx4.lineTo(x, y);
  }

  // Draw the wave line
  ctx4.stroke();
}

// Call the function to draw the initial graph
drawTime();

// Add fluctuations by redrawing the graph periodically
setInterval(drawTime, 1000); // Adjust the interval as needed
