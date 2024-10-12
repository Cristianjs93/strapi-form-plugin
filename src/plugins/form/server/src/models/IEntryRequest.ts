const uid = 'plugin::form.entry';

export default interface IEntryRequest {
  id?: number;
  documentId?: typeof uid;
  name: string;
  email: string;
  message: string;
}
