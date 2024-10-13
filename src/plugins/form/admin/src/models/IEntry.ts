export default interface IEntry {
  id: number;
  documentId: string;
  name: string;
  email: string;
  message: string;
  locale: null;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export type IEntryRequest = Pick<IEntry, 'name' | 'email' | 'message'> &
  Partial<Pick<IEntry, 'documentId'>>;
