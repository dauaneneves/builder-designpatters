class BurgerOrder {
  bread: string;
  protein: string;
  cheese?: boolean;
  lettuce?: boolean;
  tomato?: boolean;
  onion?: boolean;
  specialSauce?: boolean;
  drink?: string;

  constructor(builder: BurgerOrderBuilder) {
    this.bread = builder.bread;
    this.protein = builder.protein;
    this.cheese = builder.cheese;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
    this.onion = builder.onion;
    this.specialSauce = builder.specialSauce;
    this.drink = builder.drink;
  }
}

class BurgerOrderBuilder {
  bread: string;
  protein: string;
  cheese?: boolean;
  lettuce?: boolean;
  tomato?: boolean;
  onion?: boolean;
  specialSauce?: boolean;
  drink?: string;

  constructor(bread: string, protein: string) {
    this.bread = bread;
    this.protein = protein;
  }

  addCheese(): BurgerOrderBuilder {
    this.cheese = true;
    return this;
  }

  addLettuce(): BurgerOrderBuilder {
    this.lettuce = true;
    return this;
  }

  addTomato(): BurgerOrderBuilder {
    this.tomato = true;
    return this;
  }

  addOnion(): BurgerOrderBuilder {
    this.onion = true;
    return this;
  }

  addSpecialSauce(): BurgerOrderBuilder {
    this.specialSauce = true;
    return this;
  }

  addDrink(drink: string): BurgerOrderBuilder {
    this.drink = drink;
    return this;
  }

  build(): BurgerOrder {
    return new BurgerOrder(this);
  }
}

export { BurgerOrderBuilder };
