'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];


function getRentalById(rentals, id)
{
  for (var i = 0; i < rentals.length; i++) {
    if (id == rentals[i].id) {
        return rentals[i];
    }
  }
}

function getActorByIdRental(actors, idRental)
{
  for (var i = 0; i < actors.length; i++) {
    if (idRental == actors[i].rentalId) {
        return actors[i];
    }
  }
}

function getCarById(cars, id)
{
  for (var i = 0; i < cars.length; i++) {
    if (id == cars[i].id) {
        return cars[i];
    }
  }
}


function getPriceCarPerDayById(carList, id, pickupdate, returnDate)
{
  for (var i = 0; i < carList.length; i++) {
    if(id == carList[i].id)
    {
      return carList[i].pricePerDay
    }
  }
}

function getCarPriceKmById(carList, id)
{
  for (var i = 0; i < carList.length; i++) {
    if(id == carList[i].id)
    {
      return carList[i].pricePerKm
    }
  }
}

function convertVarToDate(date)
{
     var d = new Date(date);
    return d;
}

function calculateDays(date1Str, date2Str)
{
      //Converting string to Date type
      var date1 = convertVarToDate(date1Str);
      var date2 = convertVarToDate(date2Str);

      //Get the number of each day
      date1 = date1.getTime() / 86400000;
      date2 = date2.getTime() / 86400000;

      var result = new Number(date2 - date1).toFixed(0)
      result = Math.abs(result)
      result++
      return result;
}

function getNbKmbyId(rentalList, id)
{
  for (var i = 0; i < rentalList.length; i++) {
    if(id == rentalList[i].id)
    {
      return rentalList[i].distance
    }
  }
}
function discount(rentalList)
{
  // Execute discount according to days of rent
  for (var i = 0; i < rentalList.length; i++) {
    var currentRental = getRentalById(rentalList, rentalList[i].id)
    var nbDays = calculateDays(currentRental.pickupDate, currentRental.returnDate)

    switch(true)
    {
      case(nbDays == 1):
        console.log(currentRental.price)
        currentRental.price = currentRental.price
      break;
      case(nbDays<= 4):
      console.log(currentRental.price* 0.9)
        currentRental.price = currentRental.price  * 0.9
      break;
      case(nbDays<= 10):
      console.log(currentRental.price* 0.7)
        currentRental.price = currentRental.price  * 0.7
      break;
      case(nbDays> 10):
      console.log(currentRental.price* 0.5)
        currentRental.price = currentRental.price   * 0.5
      break;
      return;
    }
  }
}

function Time(rentalList, carList)
 {
   var time = [];
  for (var i = 0; i < carList.length; i++) {

      time[i] = getCarById(carList, carList[i].id).pricePerDay  * calculateDays(rentalList[i].pickupDate, rentalList[i].returnDate)
  }
  return time;
}


function distance(rentalList, carList)
{
  var distance = [];
 for (var i = 0; i < rentalList.length; i++) {
     distance[i] = getCarById(carList, rentalList[i].carId).pricePerKm * rentalList[i].distance
     rentalList[i].distance = distance[i]
 }
 return distance;
}
function distributionMoney(rentals)
{
  var totalMoney
  var insuranceMoney
  var roadsideAssistanceMoney
  var drivyMoney

  for (var i = 0; i < rentals.length; i++)
  {
      totalMoney = rentals[i].price* 0.3

      //Money for insurance
      insuranceMoney = totalMoney/2
      totalMoney = totalMoney/2

      //Money for roadsideAssistanceMoney
      var nbDays = calculateDays(rentals[i].pickupDate, rentals[i].returnDate)
      roadsideAssistanceMoney = nbDays
      totalMoney= totalMoney - nbDays

      //Money For Drivy
      drivyMoney = totalMoney

      rentals[i].commission.insurance = insuranceMoney
      rentals[i].commission.assistance = roadsideAssistanceMoney
      rentals[i].commission.drivy = drivyMoney

  }
}


function deductible(rentals)
{
  for (var i = 0; i < rentals.length; i++) {
    var nbDays = calculateDays(rentals[i].pickupDate, rentals[i].returnDate)
    if(rentals[i].options.deductibleReduction == true)
    {
      rentals[i].price = rentals[i].price + (4*nbDays)
    }
  }
}

function RentalPrice(rentalList, carList)
{

  var distance2 = distance(rentals, cars)
  var time = Time(rentals, cars)

  var rentalPrice = [];
  for (var i = 0; i < time.length; i++) {
      rentalPrice[i] = time[i] + distance2[i]

      // Update initial price (without discount)
      rentalList[i].price = rentalPrice[i]
  }

  //Execute discount
  discount(rentalList)

  //Distribution of moneys for insurance, Drivy ...
  distributionMoney(rentalList)

  //Apply deductible amount (Franchise)
  deductible(rentalList)
  return rentalPrice
}


function PayTheActors(rentals, actors)
{
  for (var i = 0; i < actors.length; i++) {
    var currentRental = getRentalById(rentals, actors[i].rentalId)
    var currentActor = getActorByIdRental(actors, actors[i].rentalId)
    var commission = currentRental.commission.insurance + currentRental.commission.assistance + currentRental.commission.drivy

    //For the next lines, here is a help :
    // currentActor.payment[0] is the driver
    // currentActor.payment[1] is the owner
    // currentActor.payment[2] is the insurance
    // currentActor.payment[3] is the assistance
    // currentActor.payment[4] is Drivy

     //the driver must pay the rental price and the (optional) deductible reduction
     currentActor.payment[0].amount = currentRental.price

     //the owner receives the rental price minus the commission
     currentActor.payment[1].amount = currentRental.price - commission

     //the insurance receives its part of the commission
     currentActor.payment[2].amount = currentRental.commission.insurance

     //the assistance receives its part of the commission
     currentActor.payment[3].amount = currentRental.commission.assistance

     //drivy receives its part of the commission, plus the deductible reduction
     currentActor.payment[4].amount = currentRental.commission.drivy

  }
  console.log(currentRental.commission.insurance)
  return;

}


var rentalPrice = RentalPrice(rentals, cars)
PayTheActors(rentals, actors)
console.log(rentalPrice);
//console.log(getRentalById(rentals, '1-pb-92').price)

//console.log(actors[0].payment[0].amount);
/*
console.log(cars);
console.log(actors);
console.log(rentalModifications);
*/
