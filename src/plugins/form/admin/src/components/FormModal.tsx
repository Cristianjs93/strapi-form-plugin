import { Modal, Typography } from '@strapi/design-system';

export const FormModal = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactElement;
}) => {
  const { Root, Content, Header, Title, Body } = Modal;

  return (
    <Root open={open} onOpenChange={onClose}>
      <Content>
        <Header background="#212134">
          <Title>
            <Typography variant="beta" fontWeight="bold" textColor="neutral800">
              Create an entry
            </Typography>
          </Title>
        </Header>
        <Body>{children}</Body>
      </Content>
    </Root>
  );
};
