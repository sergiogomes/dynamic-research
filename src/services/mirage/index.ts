import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs';
import faker from 'faker';

import { User } from '../../interfaces/User';
import { IResearch } from '../../interfaces/IResearch';

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
      research: Model.extend<Partial<IResearch>>({}),
    },

    factories: {
      user: Factory.extend({
        name(index: number) {
          return `Usuário ${index + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
      research: Factory.extend({
        status() {
          return true;
        },
        name(index: number) {
          return `Pesquisa ${index + 1}`;
        },
        version() {
          return '1.0.0';
        },
        createdAt() {
          return faker.date.past(10);
        },
      })
    },

    seeds(server) {
      server.createList('user', 200);
      server.createList('research', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/usuarios', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user'))
          .users.slice(pageStart, pageEnd);

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        );
      });
      this.get('/usuarios/:id');
      this.post('/usuarios');

      this.get('/pesquisas', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all('research').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const researches = this.serialize(schema.all('research'))
          .researches.slice(pageStart, pageEnd);

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { researches }
        );
      });
      this.get('/pesquisas/:id');
      this.post('/pesquisas');

      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}