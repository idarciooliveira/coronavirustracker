const url = 'https://api.covid19api.com/summary';
const mapbox_accessToken =
  'pk.eyJ1IjoiaWRhcmNpb29saXZlaXJhIiwiYSI6ImNrOHhrcnBxeTA2c3AzZnAxcjY2MHgzN2IifQ.JJG9GNtuwxdTDXMHVuM6gQ';

fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then((data) => {
    document.getElementById('totalCases').innerHTML =
      data.Global.TotalConfirmed;
    document.getElementById('newCases').innerHTML = data.Global.NewConfirmed;
    document.getElementById('totalDeaths').innerHTML = data.Global.TotalDeaths;
    document.getElementById('totalRecovery').innerHTML =
      data.Global.TotalRecovered;
    document.getElementById('data').innerHTML = data.Date;

    mapboxgl.accessToken = mapbox_accessToken;
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
    });
  });
