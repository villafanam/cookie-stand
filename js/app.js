'use strict';

// ************ GLOBALS ******************
// HELPFUL FOR YOUR LAB!!
let hours = ['06am', '07am', '08am','09am','10am','11am','12pm','01pm','02pm','03pm','04pm','05pm','06pm', '07pm'];

// ************ DOM WINDOWS **************

// STEP 1: WINDOW INTO THE DOM
let citySection = document.getElementById('city-sales');
// console.dir(citySection);

// *********** HELPER FUNCTIONS / UTILITES ************
function randomNum(min,max){
  // got from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ************** CONSTRUCTOR FUNCTION *************
function cookieStand(name, minCust, maxCust, avgCSales)
{
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCSales;
  this.cookiesSales = [];
  this.custArr = [];
  this.total = 0;
}

// ******* PROTOTYPE METHODS *********
cookieStand.prototype.custPerHr = function(){
  for(let i = 0; i < hours.length; i++)
    {
      this.custArr.push(randomNum(this.minCust, this.maxCust));
    }
};

cookieStand.prototype.salesPerHr = function(){
  for(let i = 0; i < this.custArr.length; i++)
  {
    let cookiesBought = Math.floor(this.custArr[i] * this.avgCookieSale);
    this.cookiesSales.push(cookiesBought);
    this.total += cookiesBought;
  }
};

 // ****** DOM MANIPULATION ******
cookieStand.prototype.render = function(){
 
    // STEP 2: Create an elements
    let secElem = document.createElement('section');
    citySection.appendChild(secElem);

    let h2Elem = document.createElement('h2');
    h2Elem.innerText = this.name;
    secElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    secElem.appendChild(ulElem);
    
    for(let i = 0; i < this.cookiesSales.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
};

cookieStand.prototype.run = function(){
  this.custPerHr();
  this.salesPerHr();
  this.render();
};

// ********** EXECUTABLE CODE ****************

//OBJECTS 
let seattle = new cookieStand('Seattle', 23, 65, 6.3);
let tokyo = new cookieStand('Tokyo', 3, 24, 1.2);
let dubai = new cookieStand('Dubai', 11, 38, 3.7);
let paris = new cookieStand('Paris', 20, 38, 2.3);
let lima = new cookieStand('Lima', 2, 16, 4.6);

let citStands = [seattle, tokyo, dubai, paris, lima];

//FUNCTION CALLS
for(let i = 0; i < citStands.length; i++)
{
  citStands[i].run();
}
