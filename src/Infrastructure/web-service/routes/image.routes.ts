import {Router} from 'express'
import { ImageController } from '../controllers/ImageController'
import { getMiddleware, saveMiddleware } from './../middlewares/validateImageRoutes';

export const imageRoutes = (imageController: ImageController) => {
  const router = Router()
  
  router.get('/:id', getMiddleware, imageController.get.bind(imageController))
  router.post('/', saveMiddleware, imageController.save.bind(imageController))

  return router
}