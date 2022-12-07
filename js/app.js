'use strict';

// ************ GLOBALS ******************
// HELPFUL FOR YOUR LAB!!
let hours = ['6:00am', '7:00am', '8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm', '7:00pm'];

let totalDT = 0;
let colTotal = new Array(hours.length).fill(0);

// ************ DOM WINDOWS **************

// STEP 1: WINDOW INTO THE DOM
let citySection = document.getElementById('city-sales');
let tableElem = document.getElementById('cookie-stand');
// console.dir(citySection);

// *********** HELPER FUNCTIONS / UTILITES ************
/**
 * 
 * @param {number} min minimum number of the range
 * @param {number} max maximum number of the range
 * @returns random number between min and max
 */
function randomNum(min,max){
  // got from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * renders the header of the table
 */
function headRwTable(){
  // STEP 2: Create an elements
  let row0 = document.createElement('tr');
  tableElem.appendChild(row0);

  let th0Elem = document.createElement('th');
  th0Elem.textContent = 'Store';
  row0.appendChild(th0Elem);

  for(let i = 0; i < hours.length; i++)
  {
    let thElem = document.createElement('th');
    thElem.textContent = hours[i];
    row0.appendChild(thElem);
  }

  let th20Elem = document.createElement('th');
  th20Elem.textContent = 'Daily Locaton Total';
  row0.appendChild(th20Elem);
}

/**
 * renders the footer of the table and 
 * displays total of each column
 */
function footRwTable()
{
  let row = document.createElement('tr');
  tableElem.appendChild(row);

  let td0Elem = document.createElement('th');
  td0Elem.textContent = 'Totals';
  row.appendChild(td0Elem);

  for(let i = 0; i < hours.length; i++)
  {
    let tdElem = document.createElement('th');
    tdElem.textContent = colTotal[i];
    row.appendChild(tdElem);
  }

  let td20Elem = document.createElement('th');
  td20Elem.textContent = totalDT;
  row.appendChild(td20Elem);
}

// ************** CONSTRUCTOR FUNCTION *************
/**
 * 
 * @param {string} name name of city
 * @param {number} minCust minimum customer
 * @param {number} maxCust maximum customer
 * @param {number} avgCSales average cookie sales
 */
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
/**
 * fill array with random number between minCust and maxCust
 */
cookieStand.prototype.custPerHr = function(){
  for(let i = 0; i < hours.length; i++)
    {
      this.custArr.push(randomNum(this.minCust, this.maxCust));
    }
};

/**
 * calculates the cookie sold 
 */
cookieStand.prototype.salesPerHr = function(){
  for(let i = 0; i < this.custArr.length; i++)
  {
    let cookiesBought = Math.floor(this.custArr[i] * this.avgCookieSale);
    this.cookiesSales.push(cookiesBought);
    this.total += cookiesBought;
  }
};

 //DOM MANIPULATION ******
 //render table data
cookieStand.prototype.render = function(){
 
    // STEP 2: Create an elements
    let row1 = document.createElement('tr');
    tableElem.appendChild(row1);

    let td0Elem = document.createElement('th');
    td0Elem.textContent = this.name;
    row1.appendChild(td0Elem);

    for(let i = 0; i < this.cookiesSales.length; i++)
    {
      let tdElem = document.createElement('td');
      tdElem.textContent = this.cookiesSales[i];
      colTotal[i] += this.cookiesSales[i];
      row1.appendChild(tdElem);
    }

    let td20Elem = document.createElement('td');
    td20Elem.textContent = this.total;
    totalDT += this.total;
    row1.appendChild(td20Elem);
};

//calls required functions
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
headRwTable();

for(let i = 0; i < citStands.length; i++)
{
  citStands[i].run();
}

footRwTable();
