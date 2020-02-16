import { Router } from 'express';

import AreaController from './app/controllers/AreaController';
import DisciplineController from './app/controllers/DisciplineController';
import TopicController from './app/controllers/TopicController';
import BookController from './app/controllers/BookController';

const routes = new Router();

routes.get('/areas', AreaController.index);
routes.get('/areas/:id', AreaController.indexById);

routes.get('/books', BookController.index);
routes.get('/books/:id', BookController.indexById);

routes.get('/disciplines', DisciplineController.index);
routes.get('/disciplines/:id', DisciplineController.indexById);

routes.get('/topics', TopicController.index);
routes.get('/topics/:id', TopicController.indexById);
routes.put('/topics/:id/:bool', TopicController.updateStudied);

export default routes;
