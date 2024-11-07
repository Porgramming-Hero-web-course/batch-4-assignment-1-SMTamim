{
  /**
     * Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

    // Sample Input 1:
    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge();

    // Sample Output 1:
    6 (assuming current year is 2024)
     */

  class Car {
    constructor(
      public make: string,
      public model: string,
      private year: number
    ) {}

    getCarAge(): number | void {
      const currentDate = new Date();
      const age: number = currentDate.getFullYear() - this.year;
      if (age < 0) {
        console.log(`The car was made in year: ${this.year}.`);
        return;
      }
      console.log(age);
      return age;
    }
  }

  const car = new Car("Honda", "Civic", 2025);
  car.getCarAge();
}
