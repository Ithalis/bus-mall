var allProductChoices = JSON.parse(localStorage.allProductChoices);
var cumulativeProductChoices = [];

function addClicksFromOldToNew(products){
  if (cumulativeProductChoices.length === 0){
    cumulativeProductChoices = products;
  } else {
    for (var i = 0; i < products.length; i++){
      cumulativeProductChoices[i].numberOfClicks = cumulativeProductChoices[i].numberOfClicks + products[i].numberOfClicks;
    }
  }
}

function addAppearancesFromOldToNew(products){
  if (cumulativeProductChoices.length === 0){
    cumulativeProductChoices = products;
  } else {
    for (var i = 0; i < products.length; i++){
      cumulativeProductChoices[i].numberOfAppearances = cumulativeProductChoices[i].numberOfAppearances + products[i].numberOfAppearances;
    }
  }
}

function getProductClicks(products){
  var productClicks = [];

  for (var i = 0; i < products.length; i++){
    productClicks.push(products[i].numberOfClicks);
  }
  return productClicks;
}

function getProductNames(products){
  var productNames = [];

  for (var i = 0; i < products.length; i++){
    productNames.push(products[i].imageName);
  }
  return productNames;
}

addClicksFromOldToNew(allProductChoices);
addAppearancesFromOldToNew(allProductChoices);

var clickData = getProductClicks(allProductChoices);
var nameData = getProductNames(allProductChoices);

var context = document.getElementById('productChoices').getContext('2d');
function drawTable(){
  var productChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: nameData,
      datasets: [{
        label: 'Number of votes',
        data: clickData,
        backgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(255, 50, 0, 0.8)', 'rgba(255, 100, 0, 0.8)', 'rgba(255, 150, 0, 0.8)', 'rgba(255, 200, 0, 0.8)',
          'rgba(0, 255, 0, 0.8)', 'rgba(0, 255, 50, 0.8)', 'rgba(0, 255, 100, 0.8)', 'rgba(0, 255, 150, 0.8)', 'rgba(0, 255, 200, 0.8)',
          'rgba(0, 0, 255, 0.8)', 'rgba(50, 0, 255, 0.8)', 'rgba(100, 0, 255, 0.8)', 'rgba(150, 0, 255, 0.8)', 'rgba(200, 0, 255, 0.8)',
          'rgba(255, 100, 100, 0.8)', 'rgba(100, 255, 100, 0.8)', 'rgba(100, 100, 255, 0.8)', 'rgba(125, 125, 125, 0.8)', 'rgba(40, 100, 140, 0.8)']
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
};

drawTable();
