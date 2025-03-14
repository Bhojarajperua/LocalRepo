document.getElementById("lagButton").addEventListener("click", function() {
    document.getElementById("status").textContent = "Freezing for 30 seconds...";
    
    let start = Date.now();
    while (Date.now() - start < 30000); // Busy loop for 5 seconds
    
    document.getElementById("status").textContent = "You Are My Friend Now!";
});
