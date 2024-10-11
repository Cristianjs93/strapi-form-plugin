import { ChangeEvent, useState } from 'react';
import IForm from '../models/IForm';
import { validators } from '../data/constants/validators';
import {
  getEmailErrorMessage,
  getMessageErrorMessage,
  getNameErrorMessage,
} from '../utils/getErrorsMessage';

export default function useForm() {
  const [form, setForm] = useState<IForm>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<IForm>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors: IForm = { name: '', email: '', message: '' };

    if (!validators.name.test(form.name)) {
      newErrors.name = getNameErrorMessage(form.name.length);
    }
    if (!validators.email.test(form.email)) {
      newErrors.email = getEmailErrorMessage(form.email.length);
    }
    if (!validators.message.test(form.message)) {
      newErrors.message = getMessageErrorMessage(form.message.length);
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  return { form, errors, handleChange, validateForm };
}
