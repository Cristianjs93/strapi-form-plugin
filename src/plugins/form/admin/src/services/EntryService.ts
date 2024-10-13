import { getFetchClient } from '@strapi/strapi/admin';
import { PLUGIN_ID as pluginId } from '../pluginId';
import { IEntryRequest } from '../models/IEntry';

const EntryService = {
  getAllEntries: async (page = 1, pageSize = 10) => {
    const { get } = getFetchClient();
    const { data } = await get(`/${pluginId}/find?page=${page}&pageSize=${pageSize}`);
    return data;
  },
  createEntry: async (body: IEntryRequest) => {
    const { post } = getFetchClient();
    const { data } = await post(`/${pluginId}/create`, body);
    return data;
  },
  updateEntry: async (id: string, body: IEntryRequest) => {
    const { put } = getFetchClient();
    const { data } = await put(`/${pluginId}/update/${id}`, body);
    return data;
  },
  deleteEntry: async (id: string) => {
    const { del } = getFetchClient();
    const { data } = await del(`/${pluginId}/delete/${id}`);
    return data;
  },
};

export default EntryService;
