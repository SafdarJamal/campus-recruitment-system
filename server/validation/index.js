const Joi = require('@hapi/joi');

const validateCompanySignUp = data => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    companyName: Joi.string().required(),
    companyEmail: Joi.string().required(),
    companyPhone: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'org'] }
      })
      .required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{6,64}$'))
      .required()
  });

  return schema.validate(data);
};

const validateStudentSignUp = data => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'edu'] }
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

module.exports.validateCompanySignUp = validateCompanySignUp;
module.exports.validateStudentSignUp = validateStudentSignUp;
module.exports.validateLogIn = validateLogIn;
