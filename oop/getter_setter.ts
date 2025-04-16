class Temperature{
    private celsius: number;
    private fahrenheit: number;
    private kelvin: number;
    constructor(celsius: number, fahrenheit: number, kelvin: number){
        this.celsius = celsius;
        this.fahrenheit = fahrenheit;
        this.kelvin = kelvin;
    }
   public getCelsius(): number {
        return this.celsius;
    }
    public getFahrenheit(): number {
        return this.fahrenheit;
    }
    public getKelvin(): number {
        return this.kelvin;
    }
    public setCelsius(celsius: number): void {
        this.celsius = celsius;
        this.fahrenheit = (celsius * 9/5) + 32;
        this.kelvin = celsius + 273.15;
    }
    public setFahrenheit(fahrenheit: number): void {
        this.fahrenheit = fahrenheit;
        this.celsius = (fahrenheit - 32) * 5/9;
        this.kelvin = this.celsius + 273.15;
    }
    public setKelvin(kelvin: number): void {
        this.kelvin = kelvin;
        this.celsius = kelvin - 273.15;
        this.fahrenheit = (this.celsius * 9/5) + 32;
    }
    public toString(): string {
        return `Celsius: ${this.celsius}, Fahrenheit: ${this.fahrenheit}, Kelvin: ${this.kelvin}`;
    }
    public toJSON(): string {
        return JSON.stringify({
            celsius: this.celsius,
            fahrenheit: this.fahrenheit,
            kelvin: this.kelvin
        });
    }
}


const temp = new Temperature(25, 77, 298.15);
console.log(temp.toString()); // Celsius: 25, Fahrenheit: 77, Kelvin: 298.15
console.log(temp.toJSON()); // {"celsius":25,"fahrenheit":77,"kelvin":298.15}
temp.setCelsius(30);
console.log(temp.toString()); // Celsius: 30, Fahrenheit: 86, Kelvin: 303.15
console.log(temp.toJSON()); // {"celsius":30,"fahrenheit":86,"kelvin":303.15}
temp.setFahrenheit(100);