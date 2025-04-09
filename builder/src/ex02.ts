class HotelReservation {
  roomType: string;

  breakfast?: boolean;

  seaView?: boolean;

  premiumWifi?: boolean;

  lateCheckout?: boolean;

  nights: number;

  constructor(builder: HotelReservationBuilder) {
    this.roomType = builder.roomType;

    this.breakfast = builder.breakfast;

    this.seaView = builder.seaView;

    this.premiumWifi = builder.premiumWifi;

    this.lateCheckout = builder.lateCheckout;

    this.nights = builder.nights;
  }
}

class HotelReservationBuilder {
  roomType: string;

  breakfast?: boolean;

  seaView?: boolean;

  premiumWifi?: boolean;

  lateCheckout?: boolean;

  nights: number;

  constructor(roomType: string, nights: number) {
    this.roomType = roomType;

    this.nights = nights;
  }

  addBreakfast(): HotelReservationBuilder {
    this.breakfast = true;

    return this;
  }

  addSeaView(): HotelReservationBuilder {
    this.seaView = true;

    return this;
  }

  addPremiumWifi(): HotelReservationBuilder {
    this.premiumWifi = true;

    return this;
  }

  addLateCheckout(): HotelReservationBuilder {
    this.lateCheckout = true;

    return this;
  }

  build(): HotelReservation {
    return new HotelReservation(this);
  }
}

export { HotelReservationBuilder };
