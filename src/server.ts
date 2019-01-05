const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 8001;
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { setupEntities } from './models';
import config from './config/config';

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.setup();
  }

  private setup(): void {
    this.startMiddlewares();
    this.startRouters();
  }
  private startMiddlewares(): void {
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
  private startRouters(): void {
    this.app.get('/api/', (req, res) => {
      res.status(200).send({ success: true });
    });
  }
}
const startServer = async (): Promise<void> => {
  const app = new App().app;
  /* const connection  = */ await setupEntities(config.db);
  app.listen(
    port,
    (): void => {
      console.log(`Server started at ${port} as ${env}`);
    }
  );
};

startServer().then(() => {});
