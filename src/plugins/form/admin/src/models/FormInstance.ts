import IEntry from './IEntry';

export default interface FormInstance {
  values: IEntry;
  errors: IEntry;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  validateForm: () => boolean;
  setValues: (value: IEntry) => void;
  resetForm: () => void;
}
