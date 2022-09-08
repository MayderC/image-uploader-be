import { IIMage } from '../../Entities/Image'


export interface IRepostory {

  save(image: IIMage): Promise<IIMage>
  get(id:string): Promise<IIMage>
  
}