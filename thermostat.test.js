const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  it("gets the current set temperature", () => {
    thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it("puts the temperature up by 5", () => {
    thermostat = new Thermostat();
    thermostat.up(5);
    expect(thermostat.getTemperature()).toEqual(25);
  });
  it("returns an error message when trying to set tempreture above maximum", () => {
    thermostat = new Thermostat();
    expect(() => {
      thermostat.up(10);
    }).toThrowError("Your maximum temprerature is set to 25");
  });
  it("reduces temperature by 5", () => {
    thermostat = new Thermostat();
    thermostat.down(5);
    expect(thermostat.temperature).toEqual(15);
  });
  it("returns an error message when trying to set temperature below minimum", () => {
    thermostat = new Thermostat();
    expect(() => {
      thermostat.down(11);
    }).toThrowError("Your minimum temperature is 10");
  });
  it("resets temperature to default", () => {
    thermostat = new Thermostat();
    thermostat.up(5);
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });
  it("turns off PS", () => {
    thermostat = new Thermostat();
    thermostat.turnOffPowerSaving();
    expect(thermostat.powerSavingOn()).toBe(false);
  });
  it("allows temperature to be 32 after PS turned off", () => {
    thermostat = new Thermostat();
    thermostat.turnOffPowerSaving();
    thermostat.up(12);
    expect(thermostat.getTemperature()).toBe(32);
  });
  it("reports the usage as medium by default", () => {
    thermostat = new Thermostat();
    expect(thermostat.getEnergyUsage()).toEqual("medium-usage");
  });
});
