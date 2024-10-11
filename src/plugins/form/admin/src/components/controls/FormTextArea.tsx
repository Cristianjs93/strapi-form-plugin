import { ChangeEvent } from 'react';
import { Field, Textarea } from '@strapi/design-system';

export const FormTextArea = ({
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
      <Textarea placeholder="Write a message" />
      <Field.Error />
    </Field.Root>
  );
};
