import { ChangeEvent } from 'react';
import { Field, Textarea } from '@strapi/design-system';

export const FormTextArea = ({
  label,
  value,
  onChange,
  errors,
}: {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: string;
}) => {
  return (
    <Field.Root id={label} error={errors} width="100%" required>
      <Field.Label style={{ textTransform: 'capitalize' }}>{label}</Field.Label>
      <Textarea placeholder="Write a message" value={value} onChange={onChange} />
      <Field.Error />
    </Field.Root>
  );
};
