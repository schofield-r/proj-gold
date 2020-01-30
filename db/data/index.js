const ENV = proces.env.NODE_ENV || 'development';
const testData = require('./test_data');
const devData = require('./dev_data');

const data = {
  development: devData,
  test: testData,
  production: devData
};

module.exports = data[ENV];
