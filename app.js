'use strict';

var imageInfo = [
  {
    filepath: 'img/banana.jpg',
    name: 'banana'},
  {
    filepath: 'img/bag.jpg',
    name: 'bag'},
  {
    filepath: 'img/bathroom.jpg',
    name: 'bathroom'},
  {
    filepath: 'img/boots.jpg',
    name: 'boots'},
  {
    filepath: 'img/breakfast.jpg',
    name: 'breakfast'},
  {
    filepath: 'img/bubblegum.jpg',
    name: 'chair'},
  {
    filepath: 'img/chair.jpg',
    name: 'chair'},
  {
    filepath: 'img/cthulhu.jpg',
    name: 'cthulhu'},
  {
    filepath: 'img/dogDuck.jpg',
    name: 'dogDuck'},
  {
    filepath: 'img/dragon.jpg',
    name: 'dragon'},
  {
    filepath: 'img/pen.jpg',
    name: 'pen'},
  {
    filepath: 'img/petSweep.jpg',
    name: 'petSweep'},
  {
    filepath: 'img/scissors.jpg',
    name: 'scissors'},
  {
    filepath: 'img/shark.jpg',
    name: 'shark'},
  {
    filepath: 'img/sweep.png',
    name: 'sweep'},
  {
    filepath: 'img/tauntaun.jpg',
    name: 'tauntaun'},
  {
    filepath: 'img/unicorn.jpg',
    name: 'unicorn'},
  {
    filepath: 'img/usb.gif',
    name: 'usb'},
  {
    filepath: 'img/waterCan.jpg',
    name: 'waterCan'},
  {
    filepath: 'img/wineGlass.jpg',
    name: 'wineGlass'}
];
var allUserChoices = [];

function UserChoice(imageName, imagePath, numberOfAppearances, numberOfClicks){
  this.imageName = imageName;
  this.imagePath = imagePath;
  this.numberOfAppearances = numberOfAppearances;
  this.numberOfClicks = numberOfClicks;
}

function makeUserChoices(){
  for(var i = 0; i < imageInfo.length; i++){
    imageInfo[i] = new UserChoice(imageInfo[i].name, imageInfo[i].filepath, 0, 0);
    allUserChoices.push(imageInfo[i]);
  }
};

makeUserChoices();
