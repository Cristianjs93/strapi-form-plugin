import { ChangeEvent, useState } from 'react';
import { IEntryRequest } from '../models/IEntry';
import { initialState } from '../data/constants/initialFormState';
import { validators } from '../data/constants/validators';
import {
  getEmailErrorMessage,
  getMessageErrorMessage,
  getNameErrorMessage,
} from '../utils/getErrorsMessage';

const useForm = () => {
  const [values, setFormValues] = useState<IEntryRequest>(initialState);
  const [errors, setErrors] = useState<IEntryRequest>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors: IEntryRequest = { name: '', email: '', message: '' };

    if (!validators.name.test(values.name)) {
      newErrors.name = getNameErrorMessage(values.name.length);
    }
    if (!validators.email.test(values.email)) {
      newErrors.email = getEmailErrorMessage(values.email.length);
    }
    if (!validators.message.test(values.message)) {
      newErrors.message = getMessageErrorMessage(values.message.length);
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const setValues = (value: IEntryRequest) => {
    setFormValues(value);
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors(initialState);
  };

  return { values, errors, handleChange, validateForm, setValues, resetForm };
};

export default useForm;
