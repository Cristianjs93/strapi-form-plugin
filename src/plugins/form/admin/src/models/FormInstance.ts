import { IEntryRequest } from './IEntry';

export default interface FormInstance {
  values: IEntryRequest;
  errors: IEntryRequest;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  validateForm: () => boolean;
  setValues: (value: IEntryRequest) => void;
  resetForm: () => void;
}
