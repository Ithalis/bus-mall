'use strict';

var productInfo = [
  {
    filepath: 'img/banana.jpg',
    name: 'banana'
  },
  {
    filepath: 'img/bag.jpg',
    name: 'bag'
  },
  {
    filepath: 'img/bathroom.jpg',
    name: 'bathroom'
  },
  {
    filepath: 'img/boots.jpg',
    name: 'boots'
  },
  {
    filepath: 'img/breakfast.jpg',
    name: 'breakfast'
  },
  {
    filepath: 'img/bubblegum.jpg',
    name: 'chair'
  },
  {
    filepath: 'img/chair.jpg',
    name: 'chair'
  },
  {
    filepath: 'img/cthulhu.jpg',
    name: 'cthulhu'
  },
  {
    filepath: 'img/dogDuck.jpg',
    name: 'dogDuck'
  },
  {
    filepath: 'img/dragon.jpg',
    name: 'dragon'
  },
  {
    filepath: 'img/pen.jpg',
    name: 'pen'
  },
  {
    filepath: 'img/petSweep.jpg',
    name: 'petSweep'
  },
  {
    filepath: 'img/scissors.jpg',
    name: 'scissors'
  },
  {
    filepath: 'img/shark.jpg',
    name: 'shark'
  },
  {
    filepath: 'img/sweep.png',
    name: 'sweep'
  },
  {
    filepath: 'img/tauntaun.jpg',
    name: 'tauntaun'
  },
  {
    filepath: 'img/unicorn.jpg',
    name: 'unicorn'
  },
  {
    filepath: 'img/usb.gif',
    name: 'usb'
  },
  {
    filepath: 'img/waterCan.jpg',
    name: 'waterCan'
  },
  {
    filepath: 'img/wineGlass.jpg',
    name: 'wineGlass'}
];
var allProductChoices = []; //Array for the objects made by constructor
var randomNumbers = [];
var lastRandomNumbers = [];
var counter = 0;
var chartData = [];

var divEl = document.getElementById('pictures');
console.log(divEl);

//-------------------------------FUNCTIONS------------------------------------//
function ProductChoice(imageName, imagePath, numberOfAppearances, numberOfClicks){
  this.imageName = imageName;
  this.imagePath = imagePath;
  this.numberOfAppearances = numberOfAppearances;
  this.numberOfClicks = numberOfClicks;
}

//Creating an array to hold all the objects made using the constructor.
function makeProductChoices(){
  for(var i = 0; i < productInfo.length; i++){
    var currentProductChoice = new ProductChoice(productInfo[i].name, productInfo[i].filepath, 0, 0);
    allProductChoices.push(currentProductChoice);
  }
};

//Function to create a random number between 0 and 19 to be used for finding random pictures.
function getRandomNumber(){
  var ranNumb = Math.floor(Math.random() * productInfo.length);
  return ranNumb;
};

//Function to pull three pictures at random using the random number function.
function pickThreeProductChoices(){
  lastRandomNumbers = randomNumbers; //At beginnning, set the 'old' array to the 'new' one
  randomNumbers = []; //After restting the 'old' array, empty out the 'new' array
  while (randomNumbers.length < 3) {
    var currentRandomNumb = getRandomNumber(); //Create a random number and name it
    if (randomNumbers.indexOf(currentRandomNumb) === -1 && lastRandomNumbers.indexOf(currentRandomNumb) === -1) {
      randomNumbers.push(currentRandomNumb);
    }
  }
  console.log(randomNumbers);
}

function addChoicesToElement(){
  divEl.innerHTML = '';
  pickThreeProductChoices();
  for(var i = 0; i < randomNumbers.length; i++){
    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', productInfo[randomNumbers[i]].filepath);
    divEl.appendChild(imgEl);
    allProductChoices[randomNumbers[i]].numberOfAppearances++;
  }
  counter++;
};

function eventCall(event){
  if (counter < 26){
    var target = event.target;
    var targetSrc = target.getAttribute('src');
    for(var i = 0; i < allProductChoices.length; i++){
      if (allProductChoices[i].imagePath === targetSrc) {
        allProductChoices[i].numberOfClicks++;
      }
    }
    addChoicesToElement();
  } else {
    console.log('You\'ve reached 25 choices! You are awesome!');
    alert('You\'re done! Thank you for your choices.');
    for (var i = 0; i < allProductChoices.length; i++){
      console.log(allProductChoices[i].numberOfAppearances + ' chances for ' + allProductChoices[i].imageName + '.');
      console.log(allProductChoices[i].numberOfClicks + ' votes for ' + allProductChoices[i].imageName + '.');
      var percentageOfVotes = allProductChoices[i].numberOfClicks / 25;
      console.log(percentageOfVotes + '% of votes!');
      chartData.push(allProductChoices[i].numberOfClicks);
      drawTable();
    }
  }
};

//--------------------------------FUNCTION CALLS--------------------------------//
makeProductChoices();

divEl.addEventListener('click', eventCall);
addChoicesToElement();

//--------------------------------CHART TIME!----------------------------------//
var context = document.getElementById('productChoices').getContext('2d');
function drawTable(){
  var productChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: ['Banana', 'Bag', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'USB', 'Water Can', 'Wine Glass'],
      datasets: [{
        label: 'Number of votes',
        data: chartData,
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
