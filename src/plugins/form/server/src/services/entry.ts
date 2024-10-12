import type { Core } from '@strapi/strapi';
import IEntryRequest from '../models/IEntryRequest';

const uid = 'plugin::form.entry';

const entry = ({ strapi }: { strapi: Core.Strapi }) => ({
  find() {
    return strapi.documents(uid).findMany();
  },

  create(data: IEntryRequest) {
    strapi.documents(uid).create({ data });
    return 'Entry created succesfully';
  },

  update(documentId: string, data: IEntryRequest) {
    strapi.documents(uid).update({ documentId, data });
    return 'Entry updated succesfully';
  },

  delete(documentId: string) {
    strapi.documents(uid).delete({ documentId });
    return 'Entry deleted succesfully';
  },
});

export default entry;
