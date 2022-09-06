import { NextFunction, Request, Response } from 'express';
import { validationResult, ValidationError, body, param } from 'express-validator';


export const validations =  (req: Request, res: Response, next: NextFunction) => {
  const errorFormatter = ({ location, msg, param, value, nestedErrors }: ValidationError) => {
    return `${location}[${param}]: ${msg}`;
  };
  const result = validationResult(req).formatWith(errorFormatter);
  if (!result.isEmpty()) {
    return res.json({ errors: result.array() });
  }

  next()
};

export const saveMiddleware = [
  body('img').notEmpty().withMessage('the img property cannot be empty')
]

export const getMiddleware = [
  param('id').notEmpty().withMessage('the id param cannot be empty')
]
