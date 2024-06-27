const dotenv = require("dotenv");
const { database, password } = require("pg/lib/defaults");
dotenv.config();

const config = {
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  database_port: process.env.DATABASE_PORT,
  server_port: process.env.SERVER_PORT,
};

module.exports = config;
