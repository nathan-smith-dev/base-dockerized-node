import { knex } from './knex';
import { logger } from '../util/logger';
import { Model } from 'objection';

export class DbBootstrap {
  static async run() {
    logger.info('Bootstrapping db...');
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await this.runMigrations();
    this.initObjection();
    logger.info('Bootstrapping db complete');
  }

  static async runMigrations() {
    logger.info('Running migrations...');
    await knex.migrate.latest();
    logger.info('Migrations run');
  }

  static initObjection() {
    Model.knex(knex);
  }
}
