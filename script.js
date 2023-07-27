class Smartphone {
  brand;
  model;
  operating_system;
  storage_capacity;
  screen_size;
  battery_capacity;
  camera_resolution;
  processor;
  ram;
  applications;

  constructor(
    brand,
    model,
    operating_system,
    storage_capacity,
    screen_size,
    battery_capacity,
    camera_resolution,
    processor,
    ram,
    applications
  ) {
    this.brand = brand;
    this.model = model;
    this.operating_system = operating_system;
    this.storage_capacity = storage_capacity;
    this.screen_size = screen_size;
    this.battery_capacity = battery_capacity;
    this.camera_resolution = camera_resolution;
    this.processor = processor;
    this.ram = ram;
    this.applications = applications;
  }

  informations() {
    return `My  phone brand name is ${this.brand}.Phone model is ${this.model} and the software plaform running on ${this.operating_system}.The amount of storage are ${this.storage_capacity} my phone screen size ${this.screen_size}.The capacity of phone battery ${this.battery_capacity}.Phone camera resolution is ${this.camera_resolution} and precessor is ${this.processor}.Phone random access memory amount is ${this.ram}.My phone applications are ${this.applications}.`;
  }

  takingPhotos() {
    if (this.camera_resolution == "12 MP") {
      console.log("Your phone camera resolution is good.");
    } else {
      console.log("Camera resolution is not good.");
    }
  }

  checkingStorage() {
    let imageStorae = "10GB";
    let videoStorage = "67.50GB";
    let appStorage = "38.13GB";

    let result =
      parseFloat(this.storage_capacity) -
      (parseFloat(imageStorae) +
        parseFloat(videoStorage) +
        parseFloat(appStorage));

    let total = parseInt(this.storage_capacity);

    if (result < total) {
      console.log(
        "You can insert files because phone storage have " +
          result +
          " free space."
      );
    } else {
      console.log("You can't.");
    }
  }

  showBattery() {
    let battery = parseInt(this.battery_capacity);
    if (battery >= 3000) {
      return true;
    }
    return false;
  }

  canGamePlay(applications) {
    if (this.applications.includes("game")) {
      return true;
    }
    return false;
  }
}

const me = new Smartphone(
  "Samsung",
  "Galaxy Note9",
  "Android",
  "128GB",
  "6.4-inch",
  "4000 mAh",
  "12 MP",
  "Octa-core (4x2.7 GHz Mongoose M3 & 4x1.8 GHz Cortex-A55) - EMEA",
  "8GB",
  ["phone", "message", "game", "facebook"]
);

console.log(me.informations());
me.takingPhotos();
me.checkingStorage();
console.log(me.showBattery());
console.log(me.canGamePlay());
