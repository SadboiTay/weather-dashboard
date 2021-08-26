// function to fetch and parse api
var fetcher = function(userSearch) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={cccf269a77ddb6c94abd87b983498833}"

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(response) {
                console.log(response);
            })
        }
    })
}

fetcher();