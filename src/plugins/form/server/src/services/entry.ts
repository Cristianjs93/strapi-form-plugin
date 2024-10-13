import type { Core } from '@strapi/strapi';
import IEntryRequest from '../models/IEntryRequest';

const uid = 'plugin::form.entry';

const entry = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(query) {
    try {
      const { page = 1, pageSize = 10 } = query;
      const offset = (page - 1) * pageSize;
      const documents = await strapi.documents(uid).findMany({
        start: offset,
        limit: pageSize,
      });
      const total = await strapi.documents(uid).count({});
      const response = {
        data: documents,
        pagination: {
          page: Number(page),
          pageSize: Number(pageSize),
          total,
        },
      };
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async create(data: IEntryRequest) {
    try {
      await strapi.documents(uid).create({ data });
      return 'Entry created succesfully';
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async update(documentId: string, data: IEntryRequest) {
    try {
      await strapi.documents(uid).update({ documentId, data });
      return 'Entry updated succesfully';
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async delete(documentId: string) {
    try {
      await strapi.documents(uid).delete({ documentId });
      return 'Entry deleted succesfully';
    } catch (err) {
      throw new Error(err.message);
    }
  },
});

export default entry;
