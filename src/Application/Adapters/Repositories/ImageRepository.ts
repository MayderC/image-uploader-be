
import { IIMage } from '../../Entities/Image';
import { IRepostory } from './../../Ports/Repositories/IRepository';
import {Image} from '../../../Infrastructure/database/models/image.model'
import {Types} from 'mongoose'

export class ImageRepostory implements IRepostory{


  constructor(){
  }
  
  async save(image: IIMage): Promise<IIMage> {
    const imageSaved = await Image.create({img: image.img})
    return {id: imageSaved._id.toString() ,img: imageSaved.img}
  }

  async get(id: string): Promise<IIMage> {
    const res = await Image.findById(id) 
    return res  || {id: "", img: ""}
  }
}