import Knex from 'knex';
import * as knexOptions from './knexfile';

export const knex = Knex(knexOptions);
