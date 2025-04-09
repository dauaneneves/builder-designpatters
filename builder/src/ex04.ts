import { BurgerOrderBuilder } from "./ex01";
import { HotelReservationBuilder } from "./ex02";
import { CarBuilder } from "./ex03";

class Director {
  static createBurgerWithoutTomato(): BurgerOrderBuilder {
    return new BurgerOrderBuilder("Whole Wheat", "Beef")
      .addCheese()
      .addLettuce()
      .addOnion()
      .addSpecialSauce()
      .addDrink("Coke");
  }

  static createReservationWithoutBreakfast(): HotelReservationBuilder {
    return new HotelReservationBuilder("Luxo", 3)
      .addSeaView()
      .addPremiumWifi()
      .addLateCheckout();
  }

  static createCarWithAutomaticTransmission(): CarBuilder {
    return new CarBuilder("Model S", "Electric")
      .setColor("Red")
      .setTransmission("Automatic")
      .addSunroof()
      .addPremiumSound()
      .addLeatherSeats();
  }

  static createCarWithManualTransmission(): CarBuilder {
    return new CarBuilder("Model X", "Hybrid")
      .setColor("Blue")
      .setTransmission("Manual")
      .addSunroof()
      .addPremiumSound()
      .addLeatherSeats();
  }
}

export { Director };
