// Get references to the DOM elements
let query = document.querySelector('.query');
let searchBtn = document.querySelector('.searchBtn');
let feelingBtn = document.querySelector('#feeling'); // Assuming 'feeling' is an ID

// Event handler for the 'Google Search' button
searchBtn.onclick = function () {
    // Construct the search URL based on the user's input
    let searchUrl = 'https://www.google.com/search?q=' + query.value;
    
    // Open a new window/tab with the Google Search URL
    window.open(searchUrl);
};

// Event handler for the 'I'm Feeling Lucky' button
feelingBtn.onclick = function () {
    // Construct the URL for Google's 'I'm Feeling Lucky' feature
    let feelingUrl = 'https://doodles.google/';
    
    // Open a new window/tab with the 'I'm Feeling Lucky' URL
    window.open(feelingUrl);
};
