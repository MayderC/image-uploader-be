import express, { Application } from 'express'
import cors from 'cors'
import env from '../../config/Environments/index'

export class Server {

  private app : Application = express()
  private port : number = env.PORT
  private path : string = '/api/'

  constructor(){

    this.middlwares()
    this.routes()
  

  }

  middlwares(){
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes(){
    this.app.use(this.path + 'img', )
  }


  start(){
    this.app.listen(this.port, ()=> console.log("listen on port: " + this.port))
  }

}
