const { Pool } = require("pg");
const config = require("./config");

class Database {
  constructor() {
    if (!Database.instance) {
      this.pool = new Pool({
        user: config.user,
        host: config.host,
        database: config.database,
        password: config.password,
        port: config.database_port,
      });

      this.pool.connect((error, client, release) => {
        if (error) {
          console.error("Error acquiring client", error.stack);
        } else {
          console.log("Database Connected Successfully");
          release;
        }
      });

      Database.instance = this;
    }
    return Database.instance;
  }

  query(text, params) {
    return this.pool.query(text, params);
  }

  getClient() {
    return this.pool.connect();
  }
}
const instance = new Database();
Object.freeze(instance);

module.exports = instance;
