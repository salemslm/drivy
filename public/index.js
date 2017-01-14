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
      var date1 = convertVarToDate(date1Str);
      var date2 = convertVarToDate(date2Str);

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
    var nbDays = calculateDays(rentalList[i].pickupDate, rentalList[i].returnDate)

    switch(true)
    {
      case(nbDays == 1):
        console.log(rentalList[i].price)
        rentalList[i].price = rentalList[i].price
      break;
      case(nbDays<= 4):
      console.log(rentalList[i].price* 0.9)
        rentalList[i].price = rentalList[i].price  * 0.9
      break;
      case(nbDays<= 10):
      console.log(rentalList[i].price* 0.7)
        rentalList[i].price = rentalList[i].price  * 0.7
      break;
      case(nbDays> 10):
      console.log(rentalList[i].price* 0.5)
        rentalList[i].price = rentalList[i].price   * 0.5
      break;
      return;
    }
  }
}

function Time(rentalList, carList)
 {
   var time = [];
  for (var i = 0; i < carList.length; i++) {

      time[i] = getPriceCarPerDayById(carList, carList[i].id)  * calculateDays(rentalList[i].pickupDate, rentalList[i].returnDate)
  }
  return time;
}


function distance(rentalList, carList)
{
  var distance = [];
 for (var i = 0; i < rentalList.length; i++) {
     distance[i] = getCarPriceKmById(carList, rentalList[i].carId) * rentalList[i].distance
     rentalList[i].distance = distance[i]
 }
 return distance;
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

  distributionMoney(rentalList)
  return rentalPrice
}

function distributionMoney(rentals)
{
  var totalMoney
  var insuranceMoney
  var roadsideAssistanceMoney
  var drivyMoney

  for (var i = 0; i < rentals.length; i++)
  {
      totalMoney = rentals[i].price

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
var rentalPrice = RentalPrice(rentals, cars)
console.log(rentalPrice);
console.log(rentals);
console.log(rentals[0].commission.insurance)
/*
console.log(cars);
console.log(actors);
console.log(rentalModifications);
*/
