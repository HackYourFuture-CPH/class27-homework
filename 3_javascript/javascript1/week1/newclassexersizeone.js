const passengerAge = 13 ;
let priceOfTicket = 300 ;

if (passengerAge<= 2){
    priceOfTicket = 0 ;
    console.log("For babies the price of ticket is " + priceOfTicket );
} else if(passengerAge>= 3 && passengerAge<= 18){
    priceOfTicket = priceOfTicket - (priceOfTicket*0.15);
    console.log("For teenager the price of ticket is " + priceOfTicket);
} else if(passengerAge>=  19 && passengerAge<= 26){
    priceOfTicket = priceOfTicket - (priceOfTicket*0.10);
    console.log("For youth the price of ticket is " + priceOfTicket );
} else if(passengerAge>= 60){
    priceOfTicket = priceOfTicket - (priceOfTicket*0.70);
    console.log("For middle aged the price of ticket is " + priceOfTicket );
} else{
    console.log( "For others no discount is considered... So the price of ticket is " + priceOfTicket );
}
