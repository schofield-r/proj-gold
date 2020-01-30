const ENV = process.env.NODE_ENV || 'development';

const baseConfig: object = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};
const customConfig = {
  development: {
    connection: {
      database: 'proj_gold'
      // username: "rhiannon",
      // password: "pas98"
    }
  },
  test: {
    connection: {
      database: 'proj_gold_test'
      // username: "rhiannon",
      // password: "pas98"
    }
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
