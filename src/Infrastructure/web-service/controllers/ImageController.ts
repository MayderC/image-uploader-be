import {Request, Response} from 'express'
import { IImageService } from './../../../Application/Ports/Services/IImageService';


export class ImageController {

  private _imageService : IImageService;

  constructor(imageService: IImageService){
    this._imageService = imageService
  }

  async get(req:Request , res:Response): Promise<Response<any>>{
    try {
      const response = await this._imageService.get(req.params['id'])
      return res.send({response})    
    } catch (error) {
      return res.status(400).send()
    }
  }

  async save(req:Request, res:Response): Promise<Response<any>> {
    try {
      const response = await this._imageService.save(req.body.img)      
      return res.send({response})
    } catch (error) {
      return res.status(400).send()
    }
  }
}