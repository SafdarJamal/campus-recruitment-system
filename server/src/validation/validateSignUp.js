const Joi = require('joi');

const validateSignUp = data => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{6,64}$'))
      .required(),
  });

  return schema.validate(data);
};

module.exports = validateSignUp;
