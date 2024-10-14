import { Button, Dialog, IconButton } from '@strapi/design-system';
import { Trash, WarningCircle } from '@strapi/icons';

export const DeleteDialog = ({
  documentId,
  confirmAction,
}: {
  documentId: string;
  confirmAction: (id: string) => void;
}) => {
  const { Root, Trigger, Content, Header, Body, Footer, Cancel, Action } = Dialog;

  return (
    <Root>
      <Trigger>
        <IconButton variant="danger-light" withTooltip={false}>
          <Trash />
        </IconButton>
      </Trigger>
      <Content>
        <Header>Confirmation</Header>
        <Body icon={<WarningCircle fill="danger600" />}>
          Are you sure you want to delete this entry?
        </Body>
        <Footer>
          <Cancel>
            <Button fullWidth variant="tertiary">
              Cancel
            </Button>
          </Cancel>
          <Action>
            <Button fullWidth variant="danger-light" onClick={() => confirmAction(documentId)}>
              Confirm
            </Button>
          </Action>
        </Footer>
      </Content>
    </Root>
  );
};
