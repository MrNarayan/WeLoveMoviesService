const path = require("path");

require("dotenv").config();

const {
  DATABASE_URL = "postgres://welovemovies_bjgg_user:pRIWrO218O9r2HktvsXSx1nR8NXN7jk2@dpg-cmg0v0vqd2ns73a80ppg-a.oregon-postgres.render.com/welovemovies_bjgg?ssl=true",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    useNullAsDefault: true,
  },
};
