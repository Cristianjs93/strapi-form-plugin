import { FormEvent } from 'react';
import FormInstance from '../models/FormInstance';
import EntryService from '../services/EntryService';
import { Button, Flex } from '@strapi/design-system';
import { inputFactory } from '../factories/inputFactory';

export const EntriesForm = ({
  form,
  isEdit,
  onSubmitFinish,
}: {
  form: FormInstance;
  isEdit: boolean;
  onSubmitFinish: () => void;
}) => {
  const { values, errors, handleChange, validateForm } = form;

  const handleApiResponse = async () => {
    try {
      const apiCall = isEdit
        ? EntryService.updateEntry(String(values.documentId), values)
        : EntryService.createEntry(values);
      const response = await apiCall;
      return response;
    } catch (err) {
      throw err;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (validateForm()) {
        const response = await handleApiResponse();
        console.log(response);
        onSubmitFinish();
      }
    } catch (err) {
      console.error('ERROR', err);
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
