const uid = 'plugin::form.entry';

export default interface IEntryRequest {
  documentId?: typeof uid;
  name: string;
  email: string;
  message: string;
}
