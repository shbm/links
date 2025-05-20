// Snowfall effect
document.addEventListener('DOMContentLoaded', function() {
    // Snowflake characters
    const snowflakes = ['❄', '❅', '❆', '•', '*'];
    
    // Elegant winter color palette
    const snowflakeColors = [
        '#ffffff', // White
        '#e0f7fa', // Very light blue
        '#b3e5fc', // Light blue
        '#d1c4e9', // Lavender
        '#b2dfdb', // Mint
        '#c8e6c9'  // Light green
    ];
    
    // Configuration
    const config = {
        maxFlakes: 100,         // Maximum number of snowflakes
        minSize: 10,           // Minimum font size of snowflakes (px)
        maxSize: 20,           // Maximum font size of snowflakes (px)
        minSpeed: 10,          // Minimum animation duration (seconds)
        maxSpeed: 30,          // Maximum animation duration (seconds)
        spawnInterval: 100     // Interval between spawning new flakes (ms)
    };
    
    let flakeCount = 0;
    
    // Create snowflake container to manage them easily
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';
    snowContainer.style.position = 'fixed';
    snowContainer.style.width = '100vw';
    snowContainer.style.height = '100vh';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '-1';
    document.body.prepend(snowContainer);
    
    // Function to create a snowflake
    function createSnowflake() {
        // Stop creating snowflakes if we reached the maximum
        if (flakeCount >= config.maxFlakes) return;
        
        // Create the snowflake element
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        
        // Set random properties for variety
        const size = Math.floor(Math.random() * (config.maxSize - config.minSize + 1)) + config.minSize;
        const posX = Math.random() * window.innerWidth;
        const speed = Math.floor(Math.random() * (config.maxSpeed - config.minSpeed + 1)) + config.minSpeed;
        const opacity = Math.random() * 0.3 + 0.2; // Between 0.2 and 0.5 for more opacity/subtlety
        
        // Set random color from our color array
        const randomColor = snowflakeColors[Math.floor(Math.random() * snowflakeColors.length)];
        
        // Apply styles
        flake.style.fontSize = `${size}px`;
        flake.style.left = `${posX}px`;
        flake.style.animationDuration = `${speed}s`;
        flake.style.opacity = opacity;
        flake.style.color = randomColor; // Apply the random color
        flake.style.textShadow = `0 0 3px ${randomColor}`; // Subtle glow effect
        
        // Add to the DOM
        snowContainer.appendChild(flake);
        flakeCount++;
        
        // Remove the snowflake when animation completes
        flake.addEventListener('animationend', function() {
            snowContainer.removeChild(flake);
            flakeCount--;
        });
    }
    
    // Create snowflakes at intervals
    setInterval(createSnowflake, config.spawnInterval);
    
    // Initial batch of snowflakes
    for (let i = 0; i < 10; i++) {
        setTimeout(createSnowflake, i * 300);
    }
});