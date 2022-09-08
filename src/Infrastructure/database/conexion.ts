const mongoose = require('mongoose');

import env from './../../config/Environments/index';


export async function conexion () {
  await mongoose.connect(env.DB_STRING_CNN);
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}