import { useState } from 'react';
import { Box, EmptyStateLayout } from '@strapi/design-system';
import { Header } from '../components/Header';
import { Illo } from '../components/Illo';
import { AddButton } from '../components/controls/AddButton';
import { FormModal } from '../components/FormModal';

export const HomePage = () => {
  const [entries, setEntries] = useState([]);
  const [open, setOpen] = useState(false);

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
        <EmptyStateLayout action={<div>CONTENIDO AQUI</div>} />
      )}
      <FormModal open={open} setOpen={setOpen} />
    </Box>
  );
};
