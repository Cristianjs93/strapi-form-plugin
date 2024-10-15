import { ChangeEvent } from 'react';
import { Field, TextInput } from '@strapi/design-system';

export const FormInput = ({
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
      <TextInput
        placeholder={`Type your ${label}`}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      <Error />
    </Root>
  );
};
