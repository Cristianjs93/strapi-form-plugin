import type { Core } from '@strapi/strapi';

const entry = ({ strapi }: { strapi: Core.Strapi }) => ({
  find(ctx) {
    try {
      return strapi.plugin('form').service('entry').find();
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  create(ctx) {
    try {
      const { request } = ctx;
      const response = strapi.plugin('form').service('entry').create(request.body);
      return response;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  update(ctx) {
    try {
      const { params, request } = ctx;
      const response = strapi.plugin('form').service('entry').update(params.id, request.body);
      return response;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  delete(ctx) {
    try {
      const { params } = ctx;
      const response = strapi.plugin('form').service('entry').delete(params.id);
      return response;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
});

export default entry;
