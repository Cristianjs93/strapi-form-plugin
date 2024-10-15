import { Alert, Box } from '@strapi/design-system';

export const ToastAlert = ({
  title,
  variant,
  message,
}: {
  title: string;
  variant: string;
  message: string;
}) => {
  return (
    <Box width="500px">
      <Alert title={title} variant={variant}>
        {message}
      </Alert>
    </Box>
  );
};
