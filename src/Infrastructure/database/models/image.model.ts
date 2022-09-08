import { model, Schema } from 'mongoose';
import { IIMage } from './../../../Application/Entities/Image';


const imageSchema = new Schema<IIMage>({
  img: { type: String, required: true }
});

imageSchema.post('find', function(result) {

  // prints returned documents
  console.log('find() returned ' + JSON.stringify(result));
  // prints number of milliseconds the query took

});

export const Image = model<IIMage>('Image', imageSchema);