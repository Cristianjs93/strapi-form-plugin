import { Button } from '@strapi/design-system';
import { Plus } from '@strapi/icons';

export const AddButton = ({ variant, action }: { variant: string; action: () => void }) => {
  return (
    <Button variant={variant} startIcon={<Plus />} onClick={action}>
      Create new entry
    </Button>
  );
};
