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

// *********** OBJECT LITERALS ****************
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesSales: [],
  custArr: [],
  custPHr: function(){ //customers per hour
    for(let i = 0; i < hours.length; i++)
    {
      this.custArr.push(randomNum(this.minCust, this.maxCust));
    }
  },
  salesPH: function(){ //sales per hour
    for(let i = 0; i < this.custArr.length; i++)
    {
      this.cookiesSales.push(Math.floor(this.custArr[i] * this.avgCookieSale));
    }
  },
  render: function(){
    // ****** DOM MANIPULATION ******
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
  },
  // render: function(){
  //   // ****** DOM MANIPULATION ******
  //   // STEP 2: Create an elements
  //   let h2Elem = document.createElement('h2');
  //   h2Elem.innerText = this.name;
  //   citySection.appendChild(h2Elem);

  //   let ulElem = document.createElement('ul');
  //   citySection.appendChild(ulElem);
    
  //   for(let i = 0; i < this.cookiesSales.length; i++){
  //     let liElem = document.createElement('li');
  //     liElem.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
  //     ulElem.appendChild(liElem);
  //   }
  // },
  run: function(){
    this.custPHr();
    this.salesPH();
    this.render();
  },
};

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  cookiesSales: [],
  custArr: [],
  custPHr: function(){ //customers per hour
    for(let i = 0; i < hours.length; i++)
    {
      this.custArr.push(randomNum(this.minCust, this.maxCust));
    }
  },
  salesPH: function(){ //sales per hour
    for(let i = 0; i < this.custArr.length; i++)
    {
      this.cookiesSales.push(Math.floor(this.custArr[i] * this.avgCookieSale));
    }
  },
  render: function(){
    // ****** DOM MANIPULATION ******
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
  },
  run: function(){
    this.custPHr();
    this.salesPH();
    this.render();
  },
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 2.3,
  cookiesSales: [],
  custArr: [],
  custPHr: function(){ //customers per hour
    for(let i = 0; i < hours.length; i++)
    {
      this.custArr.push(randomNum(this.minCust, this.maxCust));
    }
  },
  salesPH: function(){ //sales per hour
    for(let i = 0; i < this.custArr.length; i++)
    {
      this.cookiesSales.push(Math.floor(this.custArr[i] * this.avgCookieSale));
    }
  },
  render: function(){
    // ****** DOM MANIPULATION ******
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
  },
  run: function(){
    this.custPHr();
    this.salesPH();
    this.render();
  },
};

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  cookiesSales: [],
  custArr: [],
  custPHr: function(){ //customers per hour
    for(let i = 0; i < hours.length; i++)
    {
      this.custArr.push(randomNum(this.minCust, this.maxCust));
    }
  },
  salesPH: function(){ //sales per hour
    for(let i = 0; i < this.custArr.length; i++)
    {
      this.cookiesSales.push(Math.floor(this.custArr[i] * this.avgCookieSale));
    }
  },
  render: function(){
    // ****** DOM MANIPULATION ******
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
  },
  run: function(){
    this.custPHr();
    this.salesPH();
    this.render();
  },
};

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  cookiesSales: [],
  custArr: [],
  custPHr: function(){ //customers per hour
    for(let i = 0; i < hours.length; i++)
    {
      this.custArr.push(randomNum(this.minCust, this.maxCust));
    }
  },
  salesPH: function(){ //sales per hour
    for(let i = 0; i < this.custArr.length; i++)
    {
      this.cookiesSales.push(Math.floor(this.custArr[i] * this.avgCookieSale));
    }
  },
  render: function(){
    // ****** DOM MANIPULATION ******
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
  },
  run: function(){
    this.custPHr();
    this.salesPH();
    this.render();
  },
};


// ********** EXECUTABLE CODE ****************
seattle.run();
tokyo.run();
dubai.run();
paris.run();
lima.run();
