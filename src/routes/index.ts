import { Express } from 'express';
import { IndexController } from '../controllers/index.controller';


export default class IndexRouter {
  constructor(app: Express) {
    app.route('/').get(IndexController.read);
  }
}
