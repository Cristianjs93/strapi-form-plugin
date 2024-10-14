import { ReactElement } from 'react';
import { IconButton } from '@strapi/design-system';
import { Content, Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import Tooltip from '../ui/Tooltip';

export const ActionButton = ({
  variant = 'success-light',
  icon,
  tooltip,
  action,
  isDisabled = false,
}: {
  variant?: string;
  icon: ReactElement;
  tooltip: string;
  action?: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <Provider delayDuration={100} disableHoverableContent>
      <Root>
        <Trigger asChild>
          <IconButton variant={variant} onClick={action} disabled={isDisabled} withTooltip={false}>
            {icon}
          </IconButton>
        </Trigger>
        <Portal>
          <Content sideOffset={5}>
            <Tooltip tooltip={tooltip} />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};
