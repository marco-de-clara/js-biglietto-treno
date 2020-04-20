
//    il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    va applicato uno sconto del 20% per i minorenni
//    va applicato uno sconto del 40% per gli over 65

var distance, age, ticketPrice;

// ask travel distance in km
distance = prompt("Please enter your travel distance: ", "using kilometres");

// default ticket ticket price
ticketPrice = distance * 0.21;

// ask customer's age
age = prompt("Please enter your age: ", "using digits");

// age discount
// underage discount: 20%
if ( age < 18 ) {
    ticketPrice = ticketPrice * 0.8;
    //over 65 discount: 40%
} else if ( age > 65 ) {
        ticketPrice = ticketPrice * 0.6;
    }

// price round to two decimal places
document.writeln("Total: " + ticketPrice.toFixed(2) + " &euro;");
