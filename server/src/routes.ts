import express, { request } from 'express';

import multer from 'multer';
import multerConfig from './config/multer'

import PointsController from './controllers/pointsControllers'
import ItemsController from './controllers/itemsControllers'


const routes = express.Router()
const upload = multer(multerConfig);

const pointsControllers = new PointsController()
const itemsControllers = new ItemsController()

routes.get('/items', itemsControllers.index)

routes.post('/points', upload.single('image') ,pointsControllers.create)
routes.get('/points', pointsControllers.index)
routes.get('/points/:id', pointsControllers.show)

export default routes