import { BurgerOrderBuilder } from "./ex01";
import { HotelReservationBuilder } from "./ex02";
import { CarBuilder } from "./ex03";
import { Director } from "./ex04";

const burgerOrder = new BurgerOrderBuilder("Whole Wheat", "Beef")
  .addCheese()
  .addLettuce()
  .addTomato()
  .addOnion()
  .addSpecialSauce()
  .addDrink("Coke")
  .build();
console.log(burgerOrder);

const hotelReservation = new HotelReservationBuilder("Luxo", 3)
  .addBreakfast()
  .addSeaView()
  .addPremiumWifi()
  .addLateCheckout()
  .build();
console.log(hotelReservation);

const car = new CarBuilder("Model S", "Electric")
  .setColor("Red")
  .setTransmission("Automatic")
  .addSunroof()
  .addPremiumSound()
  .addLeatherSeats()
  .build();
console.log(car);

const burgerWithoutTomato = Director.createBurgerWithoutTomato().build();
console.log(burgerWithoutTomato);

const reservationWithoutBreakfast =
  Director.createReservationWithoutBreakfast().build();
console.log(reservationWithoutBreakfast);

const carWithAutomaticTransmission =
  Director.createCarWithAutomaticTransmission().build();
console.log(carWithAutomaticTransmission);

const carWithManualTransmission =
  Director.createCarWithManualTransmission().build();
console.log(carWithManualTransmission);
