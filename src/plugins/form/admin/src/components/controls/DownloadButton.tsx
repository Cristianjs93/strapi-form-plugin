import { ReactElement } from 'react';
import { Button } from '@strapi/design-system';

export const DownloadButton = ({
  icon,
  action,
  disabled,
}: {
  icon: ReactElement;
  action: () => void;
  disabled: boolean;
}) => {
  return <Button variant="tertiary" startIcon={icon} onClick={action} disabled={disabled} />;
};
