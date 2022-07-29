class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
    this.maximumTemperature = 25;
    this.minimumTemperature = 10;
  }
  getTemperature() {
    return this.temperature;
  }

  up(degrees) {
    if (this.temperature + degrees > this.maximumTemperature) {
      throw new Error(
        `Your maximum temprerature is set to ${this.maximumTemperature}`
      );
    }
    this.temperature += degrees;
  }

  down(degrees) {
    if (this.temperature - degrees < 10) {
      throw new Error("Your minimum temperature is 10");
    }
    this.temperature -= degrees;
  }

  reset() {
    this.temperature = 20;
  }
  powerSavingOn() {
    return this.powerSaving;
  }

  getEnergyUsage() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature > 25) {
      return "high-usage";
    } else {
      return "medium-usage";
    }
  }
  // You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
  turnOffPowerSaving() {
    this.powerSaving = false;
    this.maximumTemperature = 32;
  }

  turnOnPowerSaving() {
    this.powerSaving = true;
    this.maximumTemperature = 25;
  }
}

module.exports = Thermostat;
