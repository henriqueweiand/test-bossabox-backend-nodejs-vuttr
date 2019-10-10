import { Router } from 'express';
import ToolsController from './app/controllers/ToolsController';

import validateToolsStore from './app/validators/ToolsStore';

const routes = new Router();

routes.get('/tools', ToolsController.index);
routes.post('/tools', validateToolsStore, ToolsController.store);
routes.delete('/tools/:id', ToolsController.delete);

export default routes;
