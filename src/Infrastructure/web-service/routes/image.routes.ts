import {Router} from 'express'
import { ImageController } from '../controllers/ImageController'

export const imageRoutes = (imageController: ImageController) => {
  const router = Router()
  
  router.get('/:id', imageController.get.bind(imageController))
  router.post('/', imageController.save.bind(imageController))

  return router
}