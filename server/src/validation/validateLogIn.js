const Joi = require('joi');

const validateLogIn = data => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{6,64}$'))
      .required(),
  });

  return schema.validate(data);
};

module.exports = validateLogIn;
