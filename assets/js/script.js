// dom elements
var searchBtnEl = $("#search-btn");
var searchHistoryCntrEl = $("#search-history-container");
var searchEntry = $("#input");

// saved searches array
var searchHistory = [];

// function to fetch and parse api
var fetcher = function(userSearch) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API-key}"

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(response) {
                console.log(response);
            })
        }
    })
}
// search button 'enter' listener
searchEntry.keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        searchBtnEl.click();
    }
})

// search button click listener
searchBtnEl.click(function() {
    var searchEntry = $("#input").val().trim();
    console.log(searchEntry + " was searched.");
    saveSearch(searchEntry);
    $("#input").val("");
})

// save search to localstorage
var saveSearch = function(entry) {
    // push to array
    searchHistory.push(entry);

    localStorage.setItem("searchHistory", searchHistory);
}

// fetcher();