class Car {
  model: string;

  engineType: string;

  color?: string;

  transmission?: string;

  sunroof?: boolean;

  premiumSound?: boolean;

  leatherSeats?: boolean;

  constructor(builder: CarBuilder) {
    this.model = builder.model;

    this.engineType = builder.engineType;

    this.color = builder.color;

    this.transmission = builder.transmission;

    this.sunroof = builder.sunroof;

    this.premiumSound = builder.premiumSound;

    this.leatherSeats = builder.leatherSeats;
  }
}

class CarBuilder {
  model: string;

  engineType: string;

  color?: string;

  transmission?: string;

  sunroof?: boolean;

  premiumSound?: boolean;

  leatherSeats?: boolean;

  constructor(model: string, engineType: string) {
    this.model = model;

    this.engineType = engineType;
  }

  setColor(color: string): CarBuilder {
    this.color = color;

    return this;
  }

  setTransmission(transmission: string): CarBuilder {
    this.transmission = transmission;

    return this;
  }

  addSunroof(): CarBuilder {
    this.sunroof = true;

    return this;
  }

  addPremiumSound(): CarBuilder {
    this.premiumSound = true;

    return this;
  }

  addLeatherSeats(): CarBuilder {
    this.leatherSeats = true;

    return this;
  }

  build(): Car {
    if (
      !this.color ||
      !this.transmission ||
      !this.sunroof ||
      !this.premiumSound ||
      !this.leatherSeats
    ) {
      throw new Error("Car must have at least two optional features.");
    }

    return new Car(this);
  }
}

export { CarBuilder };
