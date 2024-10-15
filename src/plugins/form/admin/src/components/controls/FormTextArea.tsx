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
  const { Root, Label, Error } = Field;

  return (
    <Root id={label} error={errors} width="100%" required>
      <Label style={{ textTransform: 'capitalize' }}>{label}</Label>
      <Textarea placeholder="Write a message" value={value} onChange={onChange} />
      <Error />
    </Root>
  );
};
