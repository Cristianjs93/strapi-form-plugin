import { ChangeEvent, useState } from 'react';
import IEntry from '../models/IEntry';
import { initialState } from '../data/constants/initialFormState';
import { validators } from '../data/constants/validators';
import {
  getEmailErrorMessage,
  getMessageErrorMessage,
  getNameErrorMessage,
} from '../utils/getErrorsMessage';

export default function useForm() {
  const [values, setFormValues] = useState<IEntry>(initialState);

  const [errors, setErrors] = useState<IEntry>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors: IEntry = { name: '', email: '', message: '' };

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

  const setValues = (value: IEntry) => {
    setFormValues(value);
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors(initialState);
  };

  return { values, errors, handleChange, validateForm, setValues, resetForm };
}
