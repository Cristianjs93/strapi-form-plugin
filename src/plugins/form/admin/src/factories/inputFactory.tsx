import { ChangeEvent } from 'react';
import { FormInput } from '../components/controls/FormInput';
import { FormTextArea } from '../components/controls/FormTextArea';

export const inputFactory = (
  type: string,
  label: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  errors: string
) => {
  switch (type) {
    case 'text':
      return <FormInput label={label} value={value} onChange={onChange} errors={errors} />;
    case 'textarea':
      return <FormTextArea label={label} value={value} onChange={onChange} errors={errors} />;
  }
};
