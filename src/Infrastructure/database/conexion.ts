const mongoose = require('mongoose');


export async function conexion () {
  await mongoose.connect('mongodb://localhost:27017/uploader');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}