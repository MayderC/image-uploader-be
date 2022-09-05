import {createContainer, asClass, asFunction} from 'awilix'
import { imageRoutes } from '../../Infrastructure/web-service/routes/image.routes';
import { Server } from '../../Infrastructure/web-service/Server';
import { ImageController } from '../../Infrastructure/web-service/controllers/ImageController';
import { ImageService } from '../../Application/Adapters/Services/ImageService';
import { ImageRepostory } from './../../Application/Adapters/Repositories/ImageRepository';
export class DependencyContainer {

  private _container ;

  constructor(){
    this._container = createContainer({
      injectionMode: 'CLASSIC'
    })
    this.global()
    this.repositories()
    this.services()
    this.controllers()
    this.routes()
  }

  get container (){
    return this._container
  }

  global(){
    this._container.register({
      Server : asClass(Server).singleton()
    })
  }

  routes(){
    this._container.register({
      imageRoutes : asFunction(imageRoutes)
    })
  }
  controllers(){
    this._container.register({
      imageController : asClass(ImageController).scoped()
    })
  }
  services(){
    this._container.register({
      imageService: asClass(ImageService).scoped()
    })
  }
  repositories(){
    this._container.register({
      imageRepository: asClass(ImageRepostory).scoped()
    })
  }

}