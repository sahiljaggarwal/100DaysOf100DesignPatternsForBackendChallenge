require("dotenv").config();

class ConfigFactory {
  getConfig() {
    switch (process.env.NODE_ENV) {
      case "development":
        require("dotenv").config({ path: ".env.development" }).parsed;
        return "development";
      case "testing":
        require("dotenv").config({ path: ".env.testing" }).parsed;
        return "testing";
      case "production":
        require("dotenv").config({ path: ".env.production" }).parsed;
        return "production";
      default:
        throw new Error("Unknown environment");
    }
  }
}

module.exports = new ConfigFactory();
