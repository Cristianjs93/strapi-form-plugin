import { useState } from 'react';
import useForm from '../hooks/useForm';
import IEntry from '../models/IEntry';
import { Box, EmptyStateLayout } from '@strapi/design-system';
import { Header } from '../components/Header';
import { Illo } from '../components/Illo';
import { AddButton } from '../components/controls/AddButton';
import { FormModal } from '../components/FormModal';
import { EntriesTable } from '../components/EntriesTable';
import { EntriesForm } from '../components/EntriesForm';

export const HomePage = () => {
  const [entries, setEntries] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const form = useForm();

  const handleModalClose = () => {
    setIsEdit(false);
    form.resetForm();
    setOpen(false);
  };

  const handleEditClick = (entry: IEntry) => {
    console.log(entry.id);
    setIsEdit(true);
    form.setValues(entry);
    setOpen(true);
  };

  const handleConfirmDelete = (id: string) => {
    console.log('Entry deleted', id);
  };

  const submitFinishAction = () => {
    setOpen(false);
    form.resetForm();
  };

  return (
    <Box padding={10} background="neutral100">
      <Header count={entries.length} action={() => setOpen(true)} />
      {!entries.length ? (
        <EmptyStateLayout
          icon={<Illo />}
          content="No content found"
          action={<AddButton variant="secondary" action={() => setOpen(true)} />}
        />
      ) : (
        <EntriesTable
          entries={entries}
          onEdit={handleEditClick}
          onConfirmDelete={handleConfirmDelete}
        />
      )}
      <FormModal open={open} onClose={handleModalClose}>
        <EntriesForm form={form} isEdit={isEdit} submitFinishAction={submitFinishAction} />
      </FormModal>
    </Box>
  );
};
