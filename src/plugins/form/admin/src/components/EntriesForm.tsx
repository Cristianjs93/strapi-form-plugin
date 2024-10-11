import { FormEvent } from 'react';
import FormInstance from '../models/FormInstance';
import { Button, Flex } from '@strapi/design-system';
import { inputFactory } from '../factories/inputFactory';

export const EntriesForm = ({
  form,
  isEdit,
  submitFinishAction,
}: {
  form: FormInstance;
  isEdit: boolean;
  submitFinishAction: () => void;
}) => {
  const { values, errors, handleChange, validateForm } = form;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      if (isEdit) {
        console.log('Edit Form submitted', values);
      } else {
        console.log('Crete Form submitted', values);
      }
      submitFinishAction();
    } else {
      console.log('Validation errors', errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="25px" direction="column" alignItems="center">
        {inputFactory('text', 'name', values.name, handleChange, errors.name)}
        {inputFactory('text', 'email', values.email, handleChange, errors.email)}
        {inputFactory('textarea', 'message', values.message, handleChange, errors.message)}
        <Button variant="primary" size="L" fullWidth>
          {isEdit ? 'Edit' : 'Create'}
        </Button>
      </Flex>
    </form>
  );
};
