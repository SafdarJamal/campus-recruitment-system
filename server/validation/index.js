const Joi = require('@hapi/joi');

const validateSignUp = data => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'org', 'edu'] }
      })
      .required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{6,64}$'))
      .required()
  });

  return schema.validate(data);
};

const validateLogIn = data => {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'org', 'edu'] }
      })
      .required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{6,64}$'))
      .required()
  });

  return schema.validate(data);
};

module.exports.validateSignUp = validateSignUp;
module.exports.validateLogIn = validateLogIn;
