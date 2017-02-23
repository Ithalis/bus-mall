var allProductChoices = JSON.parse(localStorage.allProductChoices);
console.log(allProductChoices);
var cumulativeProductChoices = [];
console.log(cumulativeProductChoices);
var clickDataTotal = [];

if (localStorage.cumulativeProductChoices) {
  cumulativeProductChoices = JSON.parse(localStorage.cumulativeProductChoices);
} else {
  localStorage.cumulativeProductChoices = JSON.stringify(allProductChoices);
  cumulativeProductChoices = allProductChoices;
};

function saveCumulativeToLocalStorage(){
  localStorage.cumulativeProductChoices = JSON.stringify(cumulativeProductChoices);
  console.log('Cumulative product choices have been updated in local storage!');
}

function updateCumulative(products){
  console.log(cumulativeProductChoices.length);
  cumulativeProductChoices = products;
  console.log(cumulativeProductChoices.length);
  localStorage.cumulativeProductChoices = JSON.stringify(cumulativeProductChoices);
}

function addToTotals(products){
  for (var i = 0; i < products.length; i++) {
    cumulativeProductChoices[i].numberOfClicks += products[i].numberOfClicks;
    clickDataTotal.push(cumulativeProductChoices[i].numberOfClicks);
  }
  localStorage.cumulativeProductChoices = JSON.stringify(cumulativeProductChoices);
  return clickDataTotal;
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

var clickDataNew = getProductClicks(allProductChoices);
var nameData = getProductNames(allProductChoices);

if (cumulativeProductChoices[0].numberOfClicks === allProductChoices[0].numberOfClicks) {
  console.log(cumulativeProductChoices);
  for (var i = 0; i < cumulativeProductChoices.length; i++){
    clickDataTotal.push(cumulativeProductChoices[i].numberOfClicks);
  }
} else {
  clickDataTotal = addToTotals(allProductChoices);
}

var context = document.getElementById('productChoices').getContext('2d');
function drawTable(){
  var productChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: nameData,
      datasets: [{
        label: 'Recent number of votes',
        data: clickDataNew,
        backgroundColor: 'blue'
      },
      {
        label: 'Total number of votes',
        data: clickDataTotal,
        backgroundColor: 'red'
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
