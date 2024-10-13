import { Button, Dialog } from '@strapi/design-system';
import { Trash, WarningCircle } from '@strapi/icons';

export const DeleteDialog = ({
  documentId,
  action,
}: {
  documentId: string;
  action: (id: string) => void;
}) => {
  const { Root, Trigger, Content, Header, Body, Footer, Cancel, Action } = Dialog;

  return (
    <Root>
      <Trigger>
        <Button variant="tertiary" startIcon={<Trash />} />
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
            <Button fullWidth variant="danger-light" onClick={() => action(documentId)}>
              Confirm
            </Button>
          </Action>
        </Footer>
      </Content>
    </Root>
  );
};
