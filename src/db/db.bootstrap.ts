import { knex } from './knex';
import { logger } from '../util/logger';

export class DbBootstrap {
  static async run() {
    logger.info('Bootstrapping db...');
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await this.runMigrations();
    logger.info('Bootstrapping db complete');
  }

  static async runMigrations() {
    logger.info('Running migrations...');
    await knex.migrate.latest();
    logger.info('Migrations run');
  }
}
