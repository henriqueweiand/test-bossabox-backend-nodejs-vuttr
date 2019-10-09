import { Router } from 'express';
import ToolsController from './app/controllers/ToolsController';

import validateToolsStore from './app/validators/ToolsStore';

const routes = new Router();

routes.get('/tools', ToolsController.index);
routes.post('/tools', ToolsController.store);
routes.delete('/tools/:id', validateToolsStore, ToolsController.delete);

export default routes;
