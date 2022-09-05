import { IIMage } from './../../Entities/Image';
export interface IImageService {

  save(img: any) : Promise<IIMage>
  get(id: string): Promise<IIMage>

}