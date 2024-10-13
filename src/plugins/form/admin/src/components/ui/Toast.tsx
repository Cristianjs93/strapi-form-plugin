import { Alert } from '@strapi/design-system';

const showSuccess = () => {
  console.log('SUCCESS');
  return (
    <Alert closeLabel="Close" title="Success" variant="success">
      This is the success variant.
    </Alert>
  );
};

const showError = () => (
  <Alert closeLabel="Close" title="Error" variant="danger">
    This is the danger variant.
  </Alert>
);

export { showSuccess, showError };
