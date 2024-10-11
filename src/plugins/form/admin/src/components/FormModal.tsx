import { Modal, Typography } from '@strapi/design-system';
import { Form } from './Form';

export const FormModal = ({ open, setOpen }: { open: boolean; setOpen: Function }) => {
  return (
    <Modal.Root open={open} onOpenChange={() => setOpen(false)}>
      <Modal.Content>
        <Modal.Header background="#212134">
          <Modal.Title>
            <Typography variant="beta" fontWeight="bold" textColor="neutral800">
              Create an entry
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form setOpen={setOpen} />
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
