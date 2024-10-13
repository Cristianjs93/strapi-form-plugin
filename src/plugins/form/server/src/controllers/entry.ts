import type { Core } from '@strapi/strapi';

const entry = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(ctx) {
    try {
      const { query } = ctx;
      const response = await strapi.plugin('form').service('entry').find(query);
      return response;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async create(ctx) {
    try {
      const { request } = ctx;
      const response = await strapi.plugin('form').service('entry').create(request.body);
      return response;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async update(ctx) {
    try {
      const { params, request } = ctx;
      const response = await strapi.plugin('form').service('entry').update(params.id, request.body);
      return response;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async delete(ctx) {
    try {
      const { params } = ctx;
      const response = await strapi.plugin('form').service('entry').delete(params.id);
      return response;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
});

export default entry;
