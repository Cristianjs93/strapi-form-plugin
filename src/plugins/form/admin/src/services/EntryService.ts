import { IEntryRequest } from '../models/IEntry';
import axios from 'axios';

const EntryService = {
  getAllEntries: async (page = 1, pageSize = 10) => {
    const { data } = await axios.get(`/form/find?page=${page}&pageSize=${pageSize}`);
    return data;
  },
  createEntry: async (body: IEntryRequest) => {
    const { data } = await axios.post('/form/create', body);
    return data;
  },
  updateEntry: async (id: string, body: IEntryRequest) => {
    const { data } = await axios.put(`/form/update/${id}`, body);
    return data;
  },
  deleteEntry: async (id: string) => {
    const { data } = await axios.delete(`/form/delete/${id}`);
    return data;
  },
};

export default EntryService;
