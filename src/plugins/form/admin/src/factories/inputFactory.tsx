import { ChangeEvent } from 'react';
import { FormInput } from '../components/controls/FormInput';
import { FormTextArea } from '../components/controls/FormTextArea';

export const inputFactory = (
  type: string,
  label: string,
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  errors: string
) => {
  switch (type) {
    case 'text':
      return <FormInput label={label} onChange={onChange} errors={errors} />;
    case 'textarea':
      return <FormTextArea label={label} onChange={onChange} errors={errors} />;
  }
};
