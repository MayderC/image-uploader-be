import { IImageService } from './../../Ports/Services/IImageService';
import { IRepostory } from './../../Ports/Repositories/IRepository';
import { IIMage } from '../../Entities/Image';

export class ImageService implements IImageService{

  private _imageRepository : IRepostory;

  constructor(imageRepository: IRepostory){
    this._imageRepository = imageRepository
  }

  async save(img: IIMage): Promise<IIMage> {
    console.log(img)
    return await this._imageRepository.save(img)
  }
  async get(id: string): Promise<IIMage> {
    return await this._imageRepository.get(id)
  }

  
}