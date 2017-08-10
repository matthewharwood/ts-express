import * as bodyParser from 'body-parser';
import config from './config';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as HttpStatus  from 'http-status-codes';
import * as logger from 'morgan';
import * as path from 'path';



export default function(db) {
  const app: express.Express = express();
  // Models
  for (let model of config.globFiles(config.models)) {
    require(path.resolve(model));
  }
  app.use(logger('dev'));
  app.use(cors(
      // {
      //   origin: ['http://localhost:3001'],
      //   methods: ['GET', 'POST'],
      //   allowedHeaders: ['Content-Type', 'Authorization']
      // }
  ));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../../src/public')));

  // Routes
  for (let route of config.globFiles(config.routes)) {
    require(path.resolve(route)).default(app);
  }

  // Catch 404 and forward to error handler
  app.use((req: express.Request, res: express.Response, next: Function): void => {
    let err: Error = new Error(`Not found: HTTPCode - ${HttpStatus.NOT_FOUND}`);
    next(err);
  });

  // production error handler
  app.use((err: any, req: express.Request, res: express.Response): void => {
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).render('error', {
      message: err.message,
      error: {}
    });
  });

  if (app.get('env') === 'development') {
    app.use((err: Error, req: express.Request, res: express.Response): void => {
      res.status(500).render('error', {
        message: err.message,
        error: err
      });
    });
  }

  return app;
}


// TODO (mharwood) add cluster.js
// https://nodejs.org/api/cluster.html
// https://blog.jscrambler.com/setting-up-5-useful-middlewares-for-an-express-api/
