import { DbBootstrap } from './db/db.bootstrap';
import { logger } from './util/logger';

export class Server {
  async run() {
    logger.info('Starting server...');
    await DbBootstrap.run();
    logger.info('Server started');
  }
}
