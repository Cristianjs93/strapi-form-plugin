import { ChangeEvent } from 'react';
import { Field, TextInput } from '@strapi/design-system';

export const FormInput = ({
  label,
  onChange,
  errors,
}: {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: string;
}) => {
  return (
    <Field.Root id={label.toLowerCase()} error={errors} onChange={onChange} width="100%" required>
      <Field.Label>{label}</Field.Label>
      <TextInput placeholder={`Type your ${label.toLowerCase()}`} />
      <Field.Error />
    </Field.Root>
  );
};
