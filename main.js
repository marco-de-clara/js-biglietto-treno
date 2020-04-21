
//    il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    va applicato uno sconto del 20% per i minorenni
//    va applicato uno sconto del 40% per gli over 65

var distance, age, ticketPrice;

//cost for each kilometres
var priceKm = 0.21;

// age discount
var underageDisc = 0.8;
var overDisc = 0.6;

// ask travel distance in km
distance = prompt("Please enter your travel distance: ", "using kilometres");

// default ticket ticket price
ticketPrice = distance * priceKm;

// ask customer's age
age = prompt("Please enter your age: ", "using digits");

// underage discount: 20%
if ( age < 18 ) {
    ticketPrice = ticketPrice * underageDisc;
    //over 65 discount: 40%
} else if ( age > 65 ) {
        ticketPrice = ticketPrice * overDisc;
    }

// price round to two decimal places
document.writeln("Total: " + ticketPrice.toFixed(2) + " &euro;");
