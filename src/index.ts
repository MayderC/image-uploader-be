import {DependencyContainer} from './config/DependencyConntainer/DependencyConntainer'
import { Server } from './Infrastructure/web-service/Server'
const dependencyContainer = new DependencyContainer()

const server: Server = dependencyContainer.container.resolve('Server')
server.start()