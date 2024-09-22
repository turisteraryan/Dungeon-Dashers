window.onload = function() {
    let progressBar = document.getElementById('progress-bar');
    let loadingPercentage = document.getElementById('loading-percentage');
    let dashboard = document.getElementById('dashboard');
    let loadingScreen = document.querySelector('.loading-screen');
    
    let progress = 0;
    let loadingInterval = setInterval(function() {
        // Simulate loading progress based on network speed (for now, it's a timer)
        progress += Math.random() * 10; // Adjust this for network-dependent progress
        
        if (progress > 100) progress = 100; // Cap progress at 100%
        
        progressBar.style.width = progress + '%';
        loadingPercentage.textContent = 'Loading ' + Math.floor(progress) + '%';
        
        // When loading is complete, switch to dashboard screen
        if (progress >= 100) {
            clearInterval(loadingInterval);
            loadingScreen.style.display = 'none';
            dashboard.style.display = 'block';
        }
    }, 500); // Adjust time for faster/slower progress
};
