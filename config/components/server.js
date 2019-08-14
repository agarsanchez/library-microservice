'use strict';

const joi = require('@hapi/joi');
const conf = require('config');
const envVarsSchema = joi
  .object({ PORT: joi.number().required() })
  .unknown()
  .required();
const { error, value: envVars } = joi.validate(conf, envVarsSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  server: {
    port: envVars.PORT
  }
}

module.exports = config;