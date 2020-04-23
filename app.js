const url = 'https://api.covid19api.com/summary';
fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then((data) => {
    document.getElementById('totalCases').innerHTML =
      data.Global.TotalConfirmed;
    document.getElementById('newCases').innerHTML =
      '+ ' + data.Global.NewConfirmed;
    document.getElementById('totalDeaths').innerHTML = data.Global.TotalDeaths;
    document.getElementById('totalRecovery').innerHTML =
      data.Global.TotalRecovered;
    document.getElementById('data').innerHTML = data.Date;
  });
