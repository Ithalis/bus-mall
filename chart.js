var allProductChoices = JSON.parse(localStorage.allProductChoices);
console.log(allProductChoices);
var cumulativeProductChoices = JSON.parse(localStorage.cumulativeProductChoices);
console.log(cumulativeProductChoices);
var clickDataTotal = [];

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

console.log(cumulativeProductChoices);

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
if (cumulativeProductChoices.length === 0) {
  updateCumulative(allProductChoices);
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
        label: 'Recent number of votes',
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
