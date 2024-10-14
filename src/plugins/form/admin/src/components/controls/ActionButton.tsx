import { ReactElement } from 'react';
import { IconButton } from '@strapi/design-system';

export const ActionButton = ({
  variant = 'success-light',
  icon,
  action,
  isDisabled = false,
}: {
  variant?: string;
  icon: ReactElement;
  action?: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <IconButton variant={variant} onClick={action} disabled={isDisabled} withTooltip={false}>
      {icon}
    </IconButton>
  );
};
