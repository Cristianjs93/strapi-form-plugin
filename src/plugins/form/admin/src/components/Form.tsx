import { FormEvent } from 'react';
import useForm from '../hooks/useForm';
import { Button, Flex } from '@strapi/design-system';
import { inputFactory } from '../factories/inputFactory';

export const Form = ({ setOpen }: { setOpen: Function }) => {
  const { form, errors, handleChange, validateForm } = useForm();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', form);
      setOpen(false);
    } else {
      console.log('Validation errors', errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="25px" direction="column" alignItems="center">
        {inputFactory('text', 'Name', handleChange, errors.name)}
        {inputFactory('text', 'Email', handleChange, errors.email)}
        {inputFactory('textarea', 'Message', handleChange, errors.message)}
        <Button variant="primary" size="L" fullWidth>
          Submit
        </Button>
      </Flex>
    </form>
  );
};
