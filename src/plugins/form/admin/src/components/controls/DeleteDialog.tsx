import { Button, Dialog, IconButton } from '@strapi/design-system';
import { Trash, WarningCircle } from '@strapi/icons';
import * as Tooltip from '@radix-ui/react-tooltip';
import TooltipBox from '../ui/Tooltip';

export const DeleteDialog = ({
  documentId,
  confirmAction,
}: {
  documentId: string;
  confirmAction: (id: string) => void;
}) => {
  return (
    <Tooltip.Provider delayDuration={100} disableHoverableContent>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Dialog.Root>
            <Dialog.Trigger>
              <IconButton variant="danger-light" withTooltip={false}>
                <Trash />
              </IconButton>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>Confirmation</Dialog.Header>
              <Dialog.Body icon={<WarningCircle fill="danger600" />}>
                Are you sure you want to delete this entry?
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.Cancel>
                  <Button fullWidth variant="tertiary">
                    Cancel
                  </Button>
                </Dialog.Cancel>
                <Dialog.Action>
                  <Button
                    fullWidth
                    variant="danger-light"
                    onClick={() => confirmAction(documentId)}
                  >
                    Confirm
                  </Button>
                </Dialog.Action>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Root>
        </Tooltip.Trigger>
        <Tooltip.Content sideOffset={5}>
          <TooltipBox tooltip="Delete" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
