
import { IIMage } from '../../Entities/Image';
import { IRepostory } from './../../Ports/Repositories/IRepository';


export class ImageRepostory implements IRepostory{
  save(image: IIMage): Promise<IIMage> {
    return Promise.resolve({id:"id", img: image.img})
  }
  get(id: string): Promise<IIMage> {
    return Promise.resolve({id: "1", img: "1"})
  }
}